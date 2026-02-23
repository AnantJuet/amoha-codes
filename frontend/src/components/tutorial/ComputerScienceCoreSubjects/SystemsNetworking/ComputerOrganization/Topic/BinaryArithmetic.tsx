import React from 'react';

const BinaryArithmetic: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Binary Arithmetic Operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Binary arithmetic forms the basis of all computational operations in digital computers.
      Understanding how arithmetic is performed at the binary level provides insight into how
      processors execute calculations, handle overflow conditions, and implement complex
      mathematical operations using simple logic circuits.
    </p>

    <h2 className="text-3xl font-bold mt-8">Binary Addition</h2>
    <p className="leading-relaxed">
      Binary addition follows simple rules similar to decimal addition, but with only two
      digits. When the sum exceeds 1, a carry is generated to the next higher position.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Binary Addition Rules:

  0 + 0 = 0          (no carry)
  0 + 1 = 1          (no carry)
  1 + 0 = 1          (no carry)
  1 + 1 = 10         (0 with carry 1)
  1 + 1 + 1 = 11     (1 with carry 1)

Example: Add 1011 + 1101

      1 1 1 1      <- Carry bits
        1 0 1 1    (11 in decimal)
      + 1 1 0 1    (13 in decimal)
      ---------
      1 1 0 0 0    (24 in decimal)

Step by step:
  Position 0: 1 + 1 = 10 (write 0, carry 1)
  Position 1: 1 + 0 + 1(carry) = 10 (write 0, carry 1)
  Position 2: 0 + 1 + 1(carry) = 10 (write 0, carry 1)
  Position 3: 1 + 1 + 1(carry) = 11 (write 1, carry 1)
  Position 4: 1(carry) = 1

Verification: 11 + 13 = 24 ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binary Addition Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">Carry In</th>
            <th className="p-3 border">Sum</th>
            <th className="p-3 border">Carry Out</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binary Subtraction</h2>
    <p className="leading-relaxed">
      Binary subtraction can be performed directly using borrowing, or more commonly in
      computers, by using addition with the two's complement of the subtrahend.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Binary Subtraction Rules:

  0 - 0 = 0          (no borrow)
  1 - 0 = 1          (no borrow)
  1 - 1 = 0          (no borrow)
  0 - 1 = 1          (borrow 1 from next position)

Example: Subtract 1101 - 1001 (Direct Method)

          1 1 0 1    (13 in decimal)
        - 1 0 0 1    (9 in decimal)
        ---------
          0 1 0 0    (4 in decimal)

Step by step:
  Position 0: 1 - 1 = 0
  Position 1: 0 - 0 = 0
  Position 2: 1 - 0 = 1
  Position 3: 1 - 1 = 0

Example with Borrowing: 1000 - 0011

              0 1 1
            -------
            1 0 0 0    (8)
          - 0 0 1 1    (3)
          ---------
            0 1 0 1    (5)

  Position 0: 0 - 1 = need borrow
              Borrow from position 3 (propagates through)
              10 - 1 = 1
  Position 1: 0 - 1 (after giving borrow) = need borrow
              After borrow: 10 - 1 = 1, but gave 1, so 0
  Continue borrowing cascade...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Two's Complement</h2>
    <p className="leading-relaxed">
      Two's complement is the standard way computers represent signed integers and perform
      subtraction. It allows addition and subtraction to use the same hardware circuits.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Two's Complement Representation:

To find two's complement:
  Step 1: Invert all bits (one's complement)
  Step 2: Add 1

Example: Find two's complement of 5 (using 8 bits)

  Original:     0000 0101  (+5)
  Invert bits:  1111 1010  (one's complement)
  Add 1:        1111 1011  (two's complement = -5)

Verification: 0000 0101 + 1111 1011 = 1 0000 0000
  (Overflow bit discarded = 0000 0000, which is 0) ✓

Two's Complement Range (8 bits):
  Positive: 0000 0000 to 0111 1111  (0 to +127)
  Negative: 1000 0000 to 1111 1111  (-128 to -1)

  MSB = 0: positive number
  MSB = 1: negative number

Examples:
   +7 = 0000 0111
   -7 = 1111 1001
  +127 = 0111 1111
  -128 = 1000 0000
   -1 = 1111 1111`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Subtraction Using Two's Complement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method: A - B = A + (two's complement of B)

Example: Calculate 13 - 9 using 8-bit two's complement

  Step 1: Convert numbers to binary
    13 = 0000 1101
     9 = 0000 1001

  Step 2: Find two's complement of 9
    0000 1001 (original)
    1111 0110 (inverted)
    1111 0111 (add 1) = -9

  Step 3: Add
      0000 1101  (+13)
    + 1111 0111  (-9)
    -----------
    1 0000 0100

  Step 4: Discard overflow bit
    Result: 0000 0100 = 4

  Verification: 13 - 9 = 4 ✓

Why This Works:
  - Adding a negative is the same as subtracting
  - Two's complement naturally handles the sign
  - Same addition circuit works for both + and -`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binary Multiplication</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Binary Multiplication Rules:

  0 x 0 = 0
  0 x 1 = 0
  1 x 0 = 0
  1 x 1 = 1

Example: Multiply 1011 x 1101 (11 x 13)

              1 0 1 1    (11)
            x 1 1 0 1    (13)
          -----------
              1 0 1 1    (1011 x 1)
            0 0 0 0      (1011 x 0, shifted)
          1 0 1 1        (1011 x 1, shifted)
        1 0 1 1          (1011 x 1, shifted)
      ---------------
      1 0 0 0 1 1 1 1    (143)

Verification: 11 x 13 = 143 ✓

Process:
  1. Multiply multiplicand by each bit of multiplier
  2. If multiplier bit = 1, write multiplicand (shifted)
  3. If multiplier bit = 0, write zeros (shifted)
  4. Add all partial products

Note: n-bit x n-bit multiplication can produce up to 2n-bit result`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binary Division</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Binary Division (Long Division Method):

Example: Divide 1011 by 10 (11 / 2)

          0 1 0 1    <- Quotient
        -------
    10 ) 1 0 1 1     <- Dividend
         1 0         <- 10 goes into 10 once
         ---
           0 1       <- Bring down next bit
           0 0       <- 10 doesn't go into 01
           ---
             1 1     <- Bring down next bit
             1 0     <- 10 goes into 11 once
             ---
               1     <- Remainder

  Result: 1011 / 10 = 101 remainder 1
          (11 / 2 = 5 remainder 1) ✓

Example: Divide 11010 by 110 (26 / 6)

           0 1 0 0    <- Quotient
         --------
    110 ) 1 1 0 1 0
          1 1 0
          -----
            0 0 1 0   <- Remainder = 10 (2 in decimal)

  Result: 26 / 6 = 4 remainder 2 ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Overflow Detection</h2>
    <p className="leading-relaxed">
      Overflow occurs when the result of an arithmetic operation exceeds the range that can
      be represented with the given number of bits. Detecting overflow is crucial for
      reliable computation.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Overflow in Signed Arithmetic:

Overflow occurs when:
  - Adding two positive numbers gives negative result
  - Adding two negative numbers gives positive result

Detection Rule:
  Overflow = Carry_in_to_MSB XOR Carry_out_of_MSB

Example: 8-bit addition causing overflow

  +120 = 0111 1000
  + 40 = 0010 1000
  ----------------
  -96 = 1010 0000  <- OVERFLOW!

  Both inputs positive, result negative = overflow

Example: No overflow

  +50 = 0011 0010
  +30 = 0001 1110
  ----------------
  +80 = 0101 0000  <- No overflow

  Both inputs positive, result positive = OK

Unsigned Overflow:
  Simply check if carry out of MSB = 1

Example (8-bit unsigned):
    255 = 1111 1111
  +   1 = 0000 0001
  ----------------
  1 0000 0000  <- Carry out = overflow
    Result wraps to 0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Shift Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Binary Shift Operations:

Left Shift (<<):
  Shifts bits left, fills with zeros
  Equivalent to multiplication by 2^n

  Example: 0011 << 2 = 1100
  (3 << 2 = 12, which is 3 x 4)

  0 0 1 1  (3)
    ↓ ↓
  1 1 0 0  (12)

Right Shift (>>):
  Logical right shift: fills with zeros
  Arithmetic right shift: fills with sign bit

  Logical: 1100 >> 2 = 0011
  (12 >> 2 = 3, which is 12 / 4)

  Arithmetic (for signed):
  1110 0000 >> 2 = 1111 1000
  (-32 >> 2 = -8)
  Sign bit (1) is preserved

Applications:
  - x << 1 is same as x * 2
  - x >> 1 is same as x / 2 (integer division)
  - x << 3 is same as x * 8
  - Faster than multiplication in hardware`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Arithmetic Operation Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Hardware</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Addition</td>
            <td className="p-3 border">Direct with carry propagation</td>
            <td className="p-3 border">Full adders</td>
          </tr>
          <tr>
            <td className="p-3 border">Subtraction</td>
            <td className="p-3 border">Add two's complement</td>
            <td className="p-3 border">Adder + inverter</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiplication</td>
            <td className="p-3 border">Shift and add partial products</td>
            <td className="p-3 border">Multiplier unit</td>
          </tr>
          <tr>
            <td className="p-3 border">Division</td>
            <td className="p-3 border">Repeated subtraction</td>
            <td className="p-3 border">Divider unit</td>
          </tr>
          <tr>
            <td className="p-3 border">Left Shift</td>
            <td className="p-3 border">Multiply by power of 2</td>
            <td className="p-3 border">Shifter</td>
          </tr>
          <tr>
            <td className="p-3 border">Right Shift</td>
            <td className="p-3 border">Divide by power of 2</td>
            <td className="p-3 border">Shifter</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Problem</th>
            <th className="p-3 border">Answer</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1101 + 1011</td>
            <td className="p-3 border">11000 (24)</td>
          </tr>
          <tr>
            <td className="p-3 border">10110 - 01011</td>
            <td className="p-3 border">01011 (11)</td>
          </tr>
          <tr>
            <td className="p-3 border">Two's complement of 0001 0100</td>
            <td className="p-3 border">1110 1100</td>
          </tr>
          <tr>
            <td className="p-3 border">101 x 110</td>
            <td className="p-3 border">11110 (30)</td>
          </tr>
          <tr>
            <td className="p-3 border">1100 / 10</td>
            <td className="p-3 border">110 (6)</td>
          </tr>
          <tr>
            <td className="p-3 border">0011 left shifted by 3</td>
            <td className="p-3 border">11000 (24)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Binary addition follows the rule: 1 + 1 = 10 (0 with carry)</li>
        <li>Subtraction is typically done by adding the two's complement</li>
        <li>Two's complement: invert all bits and add 1</li>
        <li>Overflow occurs when the result exceeds the representable range</li>
        <li>Multiplication produces a result up to twice the number of bits</li>
        <li>Left shift by n is equivalent to multiplying by 2^n</li>
        <li>Right shift by n is equivalent to dividing by 2^n</li>
        <li>Arithmetic right shift preserves the sign bit for signed numbers</li>
      </ul>
    </div>
  </div>
);

export default BinaryArithmetic;
