import React from 'react';

const RegisterOrg: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      General Register Organization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      General Register Organization refers to the internal structure of the CPU where multiple
      general-purpose registers are used to store operands and intermediate results. This design
      reduces memory access time and improves instruction execution speed by keeping frequently
      used data within the CPU.
    </p>

    <h2 className="text-3xl font-bold mt-8">What are General Purpose Registers?</h2>
    <p className="leading-relaxed">
      General Purpose Registers (GPRs) are versatile CPU registers that can hold data, addresses,
      or intermediate results. Unlike special-purpose registers (like PC or IR), GPRs can be used
      for various operations, making them flexible and efficient for computation.
    </p>

    <h2 className="text-3xl font-bold mt-8">General Register Organization Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`General Register Organization Diagram:

                        Input Bus
            ================================
                |    |    |    |    |    |
                v    v    v    v    v    v
            +----+----+----+----+----+----+----+----+
            | R0 | R1 | R2 | R3 | R4 | R5 | R6 | R7 |
            +----+----+----+----+----+----+----+----+
                |    |    |    |    |    |    |
            ================================
                        |           |
                        v           v
                    +-------+   +-------+
                    | MUX A |   | MUX B |
                    +-------+   +-------+
                        |           |
                        v           v
                    +-------+   +-------+
                    | SELA  |   | SELB  |
                    +-------+   +-------+
                        |           |
                        +-----+-----+
                              |
                              v
                        +----------+
                        |   ALU    |
                        | (OPR)    |
                        +----------+
                              |
                              v
                        +----------+
                        |  Output  |
                        +----------+
                              |
            ================================
                        |
                        v
                    +-------+
                    | SELD  |  (Destination Selector)
                    +-------+

SELA: Selects source register A (3 bits for 8 registers)
SELB: Selects source register B (3 bits for 8 registers)
SELD: Selects destination register (3 bits for 8 registers)
OPR:  Operation code for ALU (determines the operation)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Word Format</h2>
    <p className="leading-relaxed">
      In a general register organization, the control word specifies which registers to use
      and what operation to perform. The control word consists of multiple fields:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Control Word Format (14 bits for 8 registers):

+------+------+------+------+
| SELA | SELB | SELD |  OPR |
+------+------+------+------+
   3      3      3      5    = 14 bits total

SELA (3 bits): Select source register A (R0-R7)
SELB (3 bits): Select source register B (R0-R7)
SELD (3 bits): Select destination register (R0-R7)
OPR  (5 bits): ALU operation code (32 possible operations)

Encoding Example:
  R1 = 001, R2 = 010, R3 = 011, ADD = 00010

  Instruction: R3 <- R1 + R2
  Control Word: 001 | 010 | 011 | 00010
                SELA SELB SELD   OPR
                (R1) (R2) (R3)  (ADD)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Register Selection Encoding</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Binary Code</th>
            <th className="p-3 border">Register Selected</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">000</td>
            <td className="p-3 border">R0</td>
            <td className="p-3 border">Register 0</td>
          </tr>
          <tr>
            <td className="p-3 border">001</td>
            <td className="p-3 border">R1</td>
            <td className="p-3 border">Register 1</td>
          </tr>
          <tr>
            <td className="p-3 border">010</td>
            <td className="p-3 border">R2</td>
            <td className="p-3 border">Register 2</td>
          </tr>
          <tr>
            <td className="p-3 border">011</td>
            <td className="p-3 border">R3</td>
            <td className="p-3 border">Register 3</td>
          </tr>
          <tr>
            <td className="p-3 border">100</td>
            <td className="p-3 border">R4</td>
            <td className="p-3 border">Register 4</td>
          </tr>
          <tr>
            <td className="p-3 border">101</td>
            <td className="p-3 border">R5</td>
            <td className="p-3 border">Register 5</td>
          </tr>
          <tr>
            <td className="p-3 border">110</td>
            <td className="p-3 border">R6</td>
            <td className="p-3 border">Register 6</td>
          </tr>
          <tr>
            <td className="p-3 border">111</td>
            <td className="p-3 border">R7</td>
            <td className="p-3 border">Register 7</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">ALU Operations Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">OPR Code</th>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">00000</td>
            <td className="p-3 border">Transfer A</td>
            <td className="p-3 border">TSFA</td>
            <td className="p-3 border">Output = A</td>
          </tr>
          <tr>
            <td className="p-3 border">00001</td>
            <td className="p-3 border">Increment A</td>
            <td className="p-3 border">INCA</td>
            <td className="p-3 border">Output = A + 1</td>
          </tr>
          <tr>
            <td className="p-3 border">00010</td>
            <td className="p-3 border">Add</td>
            <td className="p-3 border">ADD</td>
            <td className="p-3 border">Output = A + B</td>
          </tr>
          <tr>
            <td className="p-3 border">00101</td>
            <td className="p-3 border">Subtract</td>
            <td className="p-3 border">SUB</td>
            <td className="p-3 border">Output = A - B</td>
          </tr>
          <tr>
            <td className="p-3 border">00110</td>
            <td className="p-3 border">Decrement A</td>
            <td className="p-3 border">DECA</td>
            <td className="p-3 border">Output = A - 1</td>
          </tr>
          <tr>
            <td className="p-3 border">01000</td>
            <td className="p-3 border">AND</td>
            <td className="p-3 border">AND</td>
            <td className="p-3 border">Output = A AND B</td>
          </tr>
          <tr>
            <td className="p-3 border">01010</td>
            <td className="p-3 border">OR</td>
            <td className="p-3 border">OR</td>
            <td className="p-3 border">Output = A OR B</td>
          </tr>
          <tr>
            <td className="p-3 border">01100</td>
            <td className="p-3 border">XOR</td>
            <td className="p-3 border">XOR</td>
            <td className="p-3 border">Output = A XOR B</td>
          </tr>
          <tr>
            <td className="p-3 border">01110</td>
            <td className="p-3 border">Complement A</td>
            <td className="p-3 border">COMA</td>
            <td className="p-3 border">Output = NOT A</td>
          </tr>
          <tr>
            <td className="p-3 border">10000</td>
            <td className="p-3 border">Shift Left A</td>
            <td className="p-3 border">SHLA</td>
            <td className="p-3 border">Output = A shifted left</td>
          </tr>
          <tr>
            <td className="p-3 border">11000</td>
            <td className="p-3 border">Shift Right A</td>
            <td className="p-3 border">SHRA</td>
            <td className="p-3 border">Output = A shifted right</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Examples of Register Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example 1: R3 <- R1 + R2

Operation: Add contents of R1 and R2, store result in R3

Control Word:
  SELA = 001 (R1)
  SELB = 010 (R2)
  SELD = 011 (R3)
  OPR  = 00010 (ADD)

Binary: 001 010 011 00010

Execution:
  MUX A selects R1
  MUX B selects R2
  ALU performs addition
  Result stored in R3

-------------------------------------------

Example 2: R5 <- R5 + 1 (Increment R5)

Control Word:
  SELA = 101 (R5)
  SELB = 000 (Don't care)
  SELD = 101 (R5)
  OPR  = 00001 (INCA)

Binary: 101 000 101 00001

-------------------------------------------

Example 3: R4 <- R1 AND R2

Control Word:
  SELA = 001 (R1)
  SELB = 010 (R2)
  SELD = 100 (R4)
  OPR  = 01000 (AND)

Binary: 001 010 100 01000

-------------------------------------------

Example 4: R6 <- NOT R3 (Complement)

Control Word:
  SELA = 011 (R3)
  SELB = 000 (Don't care)
  SELD = 110 (R6)
  OPR  = 01110 (COMA)

Binary: 011 000 110 01110`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hardware Components</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Multiplexers (MUX)</h3>
    <p className="leading-relaxed">
      Multiplexers select which register's content is sent to the ALU inputs. Two multiplexers
      (MUX A and MUX B) are used to select two source operands simultaneously.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. Decoder</h3>
    <p className="leading-relaxed">
      The decoder converts the SELD field into a one-hot signal that enables the write operation
      to the selected destination register.
    </p>

    <h3 className="text-2xl font-semibold mt-6">3. ALU (Arithmetic Logic Unit)</h3>
    <p className="leading-relaxed">
      The ALU performs the actual operation specified by the OPR field on the inputs selected
      by MUX A and MUX B.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Detailed Hardware Organization:

                        8 Registers (R0-R7)
                    +-------------------------+
                    | R0 | R1 | ... | R6 | R7 |
                    +-------------------------+
                      |    |         |    |
                      v    v         v    v
                    +-------------------------+
                    |   8-to-1 Multiplexer A  |<--- SELA (3 bits)
                    +-------------------------+
                              |
                              | Bus A
                              v
                        +-----------+
                        |           |
                    +---| ALU       |---+
                        |           |   |
                        +-----------+   |
                              ^         |
                              |         |
                              | Bus B   | Output
                              |         |
                    +-------------------------+
                    |   8-to-1 Multiplexer B  |<--- SELB (3 bits)
                    +-------------------------+
                      ^    ^         ^    ^
                      |    |         |    |
                    +-------------------------+
                    | R0 | R1 | ... | R6 | R7 |
                    +-------------------------+
                              ^
                              |
                    +-------------------------+
                    |   3-to-8 Decoder        |<--- SELD (3 bits)
                    +-------------------------+
                              ^
                              |
                         Load Enable`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of General Register Organization</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Faster Access:</strong> Register access is faster than memory access</li>
      <li><strong>Flexibility:</strong> Any register can be used for any purpose</li>
      <li><strong>Efficient Operations:</strong> Multiple operands available simultaneously</li>
      <li><strong>Reduced Memory Traffic:</strong> Less need to access main memory</li>
      <li><strong>Simpler Instruction Format:</strong> Short register addresses in instructions</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Limited Storage:</strong> Number of registers is limited</li>
      <li><strong>Register Allocation:</strong> Compiler must efficiently manage registers</li>
      <li><strong>Context Switch Overhead:</strong> All registers must be saved/restored</li>
      <li><strong>Hardware Cost:</strong> More registers require more hardware</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Comparison with Other Organizations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">General Register</th>
            <th className="p-3 border">Accumulator</th>
            <th className="p-3 border">Stack</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Operand Storage</td>
            <td className="p-3 border">Multiple GPRs</td>
            <td className="p-3 border">Single Accumulator</td>
            <td className="p-3 border">Stack (Memory)</td>
          </tr>
          <tr>
            <td className="p-3 border">Instruction Length</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Short</td>
            <td className="p-3 border">Very Short</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Access</td>
            <td className="p-3 border">Less Frequent</td>
            <td className="p-3 border">More Frequent</td>
            <td className="p-3 border">Frequent (Stack)</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Slower</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware Complexity</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Low</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>General Register Organization uses multiple GPRs for storing operands</li>
        <li>Control word format includes SELA, SELB, SELD, and OPR fields</li>
        <li>Two multiplexers select source operands from the register set</li>
        <li>A decoder selects the destination register for storing results</li>
        <li>Register-to-register operations are faster than memory operations</li>
        <li>Modern processors use this organization with 16, 32, or more registers</li>
        <li>Trade-off exists between number of registers and instruction length</li>
      </ul>
    </div>
  </div>
);

export default RegisterOrg;
