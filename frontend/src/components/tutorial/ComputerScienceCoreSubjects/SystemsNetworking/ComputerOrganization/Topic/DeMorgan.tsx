import React from 'react';

const DeMorgan: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      De Morgan's Theorems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      De Morgan's Theorems are two fundamental rules in Boolean algebra that describe the
      relationship between AND, OR, and NOT operations. Named after mathematician Augustus
      De Morgan, these theorems are essential for simplifying Boolean expressions and
      converting between different logic gate implementations.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Two Theorems</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`De Morgan's First Theorem:
  (A . B)' = A' + B'
  "The complement of AND equals OR of complements"

De Morgan's Second Theorem:
  (A + B)' = A' . B'
  "The complement of OR equals AND of complements"

In words:
  - To complement an AND, change to OR and complement each term
  - To complement an OR, change to AND and complement each term

Mnemonic: "Break the bar, change the sign"
  - Break the complement bar over the expression
  - Change AND to OR (or OR to AND)
  - Complement each individual variable`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Proof of First Theorem: (A . B)' = A' + B'</h2>

    <h3 className="text-2xl font-semibold mt-6">Truth Table Proof</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">A.B</th>
            <th className="p-3 border">(A.B)'</th>
            <th className="p-3 border">A'</th>
            <th className="p-3 border">B'</th>
            <th className="p-3 border">A' + B'</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">0</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2 text-sm">The columns (A.B)' and A' + B' are identical, proving the theorem.</p>

    <h3 className="text-2xl font-semibold mt-6">Algebraic Proof</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Algebraic Proof of (A.B)' = A' + B':

To prove X = Y, we show:
  1. X + Y' = 1  (OR with complement = 1)
  2. X . Y' = 0  (AND with complement = 0)

Let X = (A.B)'  and  Y = A' + B'

Step 1: Show (A.B)' + (A' + B')' = 1
  By De Morgan: (A' + B')' = A.B  (assuming second theorem)
  So: (A.B)' + A.B = 1  (Complement law)

Step 2: Show (A.B)' . (A' + B')' = 0
  = (A.B)' . A.B = 0  (Complement law)

Alternative Proof using Perfect Induction:
  Test all possible input combinations (done in truth table above)
  If outputs match for all inputs, expressions are equal.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Proof of Second Theorem: (A + B)' = A' . B'</h2>

    <h3 className="text-2xl font-semibold mt-6">Truth Table Proof</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">A + B</th>
            <th className="p-3 border">(A + B)'</th>
            <th className="p-3 border">A'</th>
            <th className="p-3 border">B'</th>
            <th className="p-3 border">A' . B'</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">0</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2 text-sm">The columns (A + B)' and A' . B' are identical, proving the theorem.</p>

    <h2 className="text-3xl font-bold mt-8">Circuit Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`De Morgan's First Theorem: (A.B)' = A' + B'

Circuit Implementation:

Method 1: NAND Gate
    A ---+       +
         |   D   |o--- (A.B)'
    B ---+       +

Method 2: OR with Inverted Inputs
    A ---o+       +
          \     /
           )   (--- A' + B'
          /     \
    B ---o+       +

Both circuits produce the same output!
This proves: NAND = OR with inverted inputs


De Morgan's Second Theorem: (A + B)' = A'.B'

Method 1: NOR Gate
    A ---+       +
          \     /
           )   (o--- (A+B)'
          /     \
    B ---+       +

Method 2: AND with Inverted Inputs
    A ---o+       +
          |   D   |--- A'.B'
    B ---o+       +

Both circuits produce the same output!
This proves: NOR = AND with inverted inputs`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Extended De Morgan's Theorems</h2>
    <p className="leading-relaxed">
      De Morgan's theorems extend to any number of variables:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Generalized De Morgan's Theorems:

For n variables:

  (A.B.C...N)' = A' + B' + C' + ... + N'

  (A + B + C + ... + N)' = A'.B'.C'...N'

Examples:

3 Variables:
  (A.B.C)' = A' + B' + C'
  (A + B + C)' = A'.B'.C'

4 Variables:
  (A.B.C.D)' = A' + B' + C' + D'
  (A + B + C + D)' = A'.B'.C'.D'

Verification for 3 variables:
  Let A=1, B=0, C=1

  (A.B.C)' = (1.0.1)' = (0)' = 1
  A' + B' + C' = 0 + 1 + 0 = 1  ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applying De Morgan's Theorems</h2>

    <h3 className="text-2xl font-semibold mt-6">Example 1: Simplifying Complex Expressions</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Simplify: ((A.B)' + C)'

Step 1: Apply second theorem to outer complement
  ((A.B)' + C)' = (A.B)'' . C'

Step 2: Apply double negation
  = (A.B) . C'

Step 3: Simplify
  = A.B.C'

Original: ((A.B)' + C)'
Simplified: A.B.C'`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Example 2: Converting NAND Expression</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Express using only OR and NOT: F = (A.B.C)'

Apply De Morgan's first theorem:
  (A.B.C)' = A' + B' + C'

So: F = A' + B' + C'

This shows a 3-input NAND can be replaced by:
  - Three NOT gates (for A', B', C')
  - One 3-input OR gate`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Example 3: Converting to NAND-only Form</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Convert F = A + B to NAND gates only:

Step 1: Use double complement
  F = (A + B)''

Step 2: Apply De Morgan to inner expression
  F = ((A + B)')'
  F = (A'.B')'

Step 3: Recognize the pattern
  A' = (A.A)'     (NAND as inverter)
  B' = (B.B)'     (NAND as inverter)

Step 4: Final NAND expression
  F = ((A.A)'.(B.B)')'

Implementation using 3 NAND gates:
  Gate 1: A NAND A = A'
  Gate 2: B NAND B = B'
  Gate 3: (A') NAND (B') = A + B`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Example 4: Bubble Pushing</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Bubble Pushing Technique:

When a bubble (inversion) appears at a gate input or output,
you can "push" it to the other side by changing the gate type.

Rules:
  - Push bubble from output to inputs: change AND to OR (or vice versa)
  - Push bubble from inputs to output: change AND to OR (or vice versa)

Example: Convert NAND to equivalent form

Original NAND:
    A ---+       +
         |   &   |o--- Y
    B ---+       +

Push bubble to inputs, change AND to OR:
    A ---o+       +
          \     /
           )>= (--- Y
          /     \
    B ---o+       +

Both are equivalent: Y = (A.B)' = A' + B'`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Applications</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <h4 className="font-semibold">1. Gate Conversion</h4>
      <pre className="text-sm mt-2">
{`Converting between gate types using De Morgan:

NAND = Bubbled OR      (A.B)' = A' + B'
NOR  = Bubbled AND     (A+B)' = A' . B'

This allows:
  - Implementation flexibility
  - Using available IC components
  - Optimizing for specific gate types`}
      </pre>
    </div>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <h4 className="font-semibold">2. Expression Simplification</h4>
      <pre className="text-sm mt-2">
{`Simplify: F = (A' + B')'

Using De Morgan's second theorem:
  F = (A' + B')'
    = (A')' . (B')'    (De Morgan)
    = A . B            (Double negation)

The complex expression simplifies to simple AND!`}
      </pre>
    </div>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <h4 className="font-semibold">3. Finding Complement of Expression</h4>
      <pre className="text-sm mt-2">
{`Find complement of: F = A.B + C.D

F' = (A.B + C.D)'

Apply De Morgan to OR:
  = (A.B)' . (C.D)'

Apply De Morgan to each AND:
  = (A' + B') . (C' + D')

So: F' = (A' + B').(C' + D')

Verification with A=1, B=1, C=0, D=0:
  F = 1.1 + 0.0 = 1 + 0 = 1
  F' should be 0
  F' = (0 + 0).(1 + 1) = 0.1 = 0  ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Original</th>
            <th className="p-3 border">De Morgan's Result</th>
            <th className="p-3 border">Gate Equivalence</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">(A.B)'</td>
            <td className="p-3 border">A' + B'</td>
            <td className="p-3 border">NAND = OR with inverted inputs</td>
          </tr>
          <tr>
            <td className="p-3 border">(A+B)'</td>
            <td className="p-3 border">A'.B'</td>
            <td className="p-3 border">NOR = AND with inverted inputs</td>
          </tr>
          <tr>
            <td className="p-3 border">(A.B.C)'</td>
            <td className="p-3 border">A' + B' + C'</td>
            <td className="p-3 border">3-input NAND = 3-input bubbled OR</td>
          </tr>
          <tr>
            <td className="p-3 border">(A+B+C)'</td>
            <td className="p-3 border">A'.B'.C'</td>
            <td className="p-3 border">3-input NOR = 3-input bubbled AND</td>
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
            <th className="p-3 border">Solution</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Apply De Morgan: (X.Y.Z)'</td>
            <td className="p-3 border">X' + Y' + Z'</td>
          </tr>
          <tr>
            <td className="p-3 border">Apply De Morgan: (P + Q + R)'</td>
            <td className="p-3 border">P'.Q'.R'</td>
          </tr>
          <tr>
            <td className="p-3 border">Simplify: ((A')')'</td>
            <td className="p-3 border">A'</td>
          </tr>
          <tr>
            <td className="p-3 border">Simplify: ((A.B)' . (C.D)')'</td>
            <td className="p-3 border">A.B + C.D</td>
          </tr>
          <tr>
            <td className="p-3 border">Find complement of: A.B + C</td>
            <td className="p-3 border">(A' + B').C'</td>
          </tr>
          <tr>
            <td className="p-3 border">Express A+B using NOR only</td>
            <td className="p-3 border">((A+B)')' = two NOR gates</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>De Morgan's First: (A.B)' = A' + B' (complement of AND = OR of complements)</li>
        <li>De Morgan's Second: (A+B)' = A'.B' (complement of OR = AND of complements)</li>
        <li>Remember: "Break the bar, change the sign"</li>
        <li>NAND gate equals OR gate with inverted inputs</li>
        <li>NOR gate equals AND gate with inverted inputs</li>
        <li>De Morgan's theorems extend to any number of variables</li>
        <li>Used for converting between different gate implementations</li>
        <li>Essential for finding complements of complex expressions</li>
        <li>Enables conversion to NAND-only or NOR-only implementations</li>
        <li>Bubble pushing is a visual technique based on De Morgan's theorems</li>
      </ul>
    </div>
  </div>
);

export default DeMorgan;
