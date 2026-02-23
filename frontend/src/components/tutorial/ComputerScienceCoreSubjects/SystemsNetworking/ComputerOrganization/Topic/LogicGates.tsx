import React from 'react';

const LogicGates: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Logic Gates
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Logic gates are the fundamental building blocks of digital circuits. They perform basic logical
      operations on binary inputs to produce a binary output. Understanding logic gates is essential
      for designing digital systems, from simple calculators to complex microprocessors.
    </p>

    <h2 className="text-3xl font-bold mt-8">What are Logic Gates?</h2>
    <p className="leading-relaxed">
      A logic gate is an electronic circuit that implements a Boolean function. It takes one or more
      binary inputs (0 or 1) and produces a single binary output based on a specific logical operation.
      Logic gates form the basis of all digital computation.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Types of Logic Gates:

1. Basic Gates:    NOT, AND, OR
2. Universal Gates: NAND, NOR
3. Exclusive Gates: XOR, XNOR

Binary Values:
  0 = LOW  = FALSE = OFF
  1 = HIGH = TRUE  = ON`}
      </pre>
    </div>

    {/* NOT Gate */}
    <h2 className="text-3xl font-bold mt-8">1. NOT Gate (Inverter)</h2>
    <p className="leading-relaxed">
      The NOT gate is the simplest logic gate with a single input. It inverts the input signal -
      if the input is 0, the output is 1, and vice versa. Also called an inverter.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`NOT Gate Symbol:

         +-----+
    A ---| NOT |o--- Y = A'
         +-----+

         +---+
    A ---|   >o--- Y
         +---+

Boolean Expression: Y = A' = NOT A = ~A

The small circle (o) at the output indicates inversion.`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">NOT Gate Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Input A</th>
            <th className="p-3 border">Output Y = A'</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* AND Gate */}
    <h2 className="text-3xl font-bold mt-8">2. AND Gate</h2>
    <p className="leading-relaxed">
      The AND gate produces a HIGH output (1) only when ALL inputs are HIGH.
      If any input is LOW (0), the output is LOW. It implements logical conjunction.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`AND Gate Symbol:

    A ---+       +
         |       |
         |   D   |---- Y = A . B
         |       |
    B ---+       +

         +---+
    A ---|   |
         | & |---- Y
    B ---|   |
         +---+

Boolean Expression: Y = A . B = A AND B = AB`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">AND Gate Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">Y = A . B</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="mt-4 leading-relaxed">
      <strong>Remember:</strong> AND gate output is 1 only when A=1 AND B=1.
      Think of it as a series circuit - both switches must be closed for current to flow.
    </p>

    {/* OR Gate */}
    <h2 className="text-3xl font-bold mt-8">3. OR Gate</h2>
    <p className="leading-relaxed">
      The OR gate produces a HIGH output (1) when ANY input is HIGH.
      The output is LOW (0) only when ALL inputs are LOW. It implements logical disjunction.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`OR Gate Symbol:

    A ---+       +
          \     /
           )   (---- Y = A + B
          /     \
    B ---+       +

         +---+
    A ---|   |
         |>=1|---- Y
    B ---|   |
         +---+

Boolean Expression: Y = A + B = A OR B`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">OR Gate Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">Y = A + B</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="mt-4 leading-relaxed">
      <strong>Remember:</strong> OR gate output is 1 when A=1 OR B=1 (or both).
      Think of it as a parallel circuit - either switch can complete the circuit.
    </p>

    {/* NAND Gate */}
    <h2 className="text-3xl font-bold mt-8">4. NAND Gate (Universal Gate)</h2>
    <p className="leading-relaxed">
      The NAND gate is an AND gate followed by a NOT gate. It produces LOW output only when
      ALL inputs are HIGH. NAND is a universal gate - any other gate can be built using only NAND gates.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`NAND Gate Symbol:

    A ---+       +
         |       |
         |   D   |o--- Y = (A . B)'
         |       |
    B ---+       +

         +---+
    A ---|   |
         | & |o--- Y
    B ---|   |
         +---+

Boolean Expression: Y = (A . B)' = NOT(A AND B) = A NAND B

Note: The circle (o) at output indicates NOT operation.`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">NAND Gate Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">A . B</th>
            <th className="p-3 border">Y = (A . B)'</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <h4 className="font-semibold">NAND as Universal Gate</h4>
      <pre className="text-sm mt-2">
{`Implementing other gates using only NAND:

NOT from NAND:    A' = (A . A)'
                  Connect same input to both NAND inputs

AND from NAND:    A . B = ((A . B)')'
                  Use two NAND gates in series

OR from NAND:     A + B = ((A . A)' . (B . B)')'
                  = (A' . B')'
                  Use three NAND gates`}
      </pre>
    </div>

    {/* NOR Gate */}
    <h2 className="text-3xl font-bold mt-8">5. NOR Gate (Universal Gate)</h2>
    <p className="leading-relaxed">
      The NOR gate is an OR gate followed by a NOT gate. It produces HIGH output only when
      ALL inputs are LOW. Like NAND, NOR is also a universal gate.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`NOR Gate Symbol:

    A ---+       +
          \     /
           )   (o--- Y = (A + B)'
          /     \
    B ---+       +

         +---+
    A ---|   |
         |>=1|o--- Y
    B ---|   |
         +---+

Boolean Expression: Y = (A + B)' = NOT(A OR B) = A NOR B`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">NOR Gate Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">A + B</th>
            <th className="p-3 border">Y = (A + B)'</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <h4 className="font-semibold">NOR as Universal Gate</h4>
      <pre className="text-sm mt-2">
{`Implementing other gates using only NOR:

NOT from NOR:     A' = (A + A)'
                  Connect same input to both NOR inputs

OR from NOR:      A + B = ((A + B)')'
                  Use two NOR gates in series

AND from NOR:     A . B = ((A + A)' + (B + B)')'
                  = (A' + B')'
                  Use three NOR gates`}
      </pre>
    </div>

    {/* XOR Gate */}
    <h2 className="text-3xl font-bold mt-8">6. XOR Gate (Exclusive OR)</h2>
    <p className="leading-relaxed">
      The XOR gate produces HIGH output when the inputs are DIFFERENT.
      It outputs LOW when inputs are the same. XOR is useful in parity checking,
      binary addition, and comparison operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`XOR Gate Symbol:

    A ---+       +
          \     /
           )=  (---- Y = A XOR B
          /     \
    B ---+       +

         +---+
    A ---|   |
         |=1 |---- Y
    B ---|   |
         +---+

Boolean Expression: Y = A XOR B = A'B + AB' = A (+) B

XOR = Exclusive OR (not inclusive like regular OR)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">XOR Gate Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">Y = A XOR B</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4">
      <h4 className="font-semibold">XOR Properties and Applications</h4>
      <pre className="text-sm mt-2">
{`Properties:
  A XOR 0 = A        (Identity)
  A XOR 1 = A'       (Complement)
  A XOR A = 0        (Self-inverse)
  A XOR A' = 1
  A XOR B = B XOR A  (Commutative)

Applications:
  - Half adder sum output
  - Parity generation and checking
  - Controlled inversion
  - Comparison (different detector)`}
      </pre>
    </div>

    {/* XNOR Gate */}
    <h2 className="text-3xl font-bold mt-8">7. XNOR Gate (Exclusive NOR)</h2>
    <p className="leading-relaxed">
      The XNOR gate produces HIGH output when the inputs are the SAME.
      It is the complement of XOR. Also known as equivalence gate or coincidence gate.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`XNOR Gate Symbol:

    A ---+       +
          \     /
           )=  (o--- Y = A XNOR B
          /     \
    B ---+       +

         +---+
    A ---|   |
         |=1 |o--- Y
    B ---|   |
         +---+

Boolean Expression: Y = A XNOR B = AB + A'B' = (A XOR B)'

XNOR = NOT XOR = Equivalence`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">XNOR Gate Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">A XOR B</th>
            <th className="p-3 border">Y = A XNOR B</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4">
      <h4 className="font-semibold">XNOR Applications</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Equality comparators (outputs 1 when inputs are equal)</li>
        <li>Parity checking circuits</li>
        <li>Digital signal comparison</li>
        <li>Bit-by-bit equality testing</li>
      </ul>
    </div>

    {/* Complete Summary Table */}
    <h2 className="text-3xl font-bold mt-8">Complete Logic Gates Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">AND</th>
            <th className="p-3 border">OR</th>
            <th className="p-3 border">NAND</th>
            <th className="p-3 border">NOR</th>
            <th className="p-3 border">XOR</th>
            <th className="p-3 border">XNOR</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Input Gates</h2>
    <p className="leading-relaxed">
      Logic gates can have more than two inputs. The operation extends naturally:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`3-Input AND Gate:
  Y = A . B . C
  Output is 1 only when ALL three inputs are 1

3-Input OR Gate:
  Y = A + B + C
  Output is 1 when ANY input is 1

3-Input XOR Gate:
  Y = A XOR B XOR C
  Output is 1 when ODD number of inputs are 1

Examples (3-input gates):
  A=1, B=1, C=1:
    AND = 1    (all are 1)
    OR  = 1    (at least one is 1)
    XOR = 1    (odd count of 1s = 3)

  A=1, B=1, C=0:
    AND = 0    (not all are 1)
    OR  = 1    (at least one is 1)
    XOR = 0    (even count of 1s = 2)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Applications</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Gate</th>
            <th className="p-3 border">Applications</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">NOT</td>
            <td className="p-3 border">Inverters, level shifters, signal conditioning</td>
          </tr>
          <tr>
            <td className="p-3 border">AND</td>
            <td className="p-3 border">Enable/disable circuits, conditional execution, masking</td>
          </tr>
          <tr>
            <td className="p-3 border">OR</td>
            <td className="p-3 border">Interrupt handling, flag combining, selection</td>
          </tr>
          <tr>
            <td className="p-3 border">NAND/NOR</td>
            <td className="p-3 border">Universal building blocks, memory cells (latches)</td>
          </tr>
          <tr>
            <td className="p-3 border">XOR</td>
            <td className="p-3 border">Adders, parity generators, encryption</td>
          </tr>
          <tr>
            <td className="p-3 border">XNOR</td>
            <td className="p-3 border">Equality comparators, parity checkers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>NOT gate inverts the input signal</li>
        <li>AND gate outputs 1 only when ALL inputs are 1</li>
        <li>OR gate outputs 1 when ANY input is 1</li>
        <li>NAND = NOT + AND, outputs 0 only when all inputs are 1</li>
        <li>NOR = NOT + OR, outputs 1 only when all inputs are 0</li>
        <li>XOR outputs 1 when inputs are different</li>
        <li>XNOR outputs 1 when inputs are the same</li>
        <li>NAND and NOR are universal gates - can implement any other gate</li>
        <li>XOR is essential for arithmetic circuits (adders)</li>
        <li>XNOR is used for equality comparison</li>
      </ul>
    </div>
  </div>
);

export default LogicGates;
