import React from 'react';

const BooleanAlgebra: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Boolean Algebra
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Boolean algebra is a mathematical system for the manipulation of variables that can have
      only two values: TRUE (1) and FALSE (0). Developed by George Boole in 1854, it forms the
      foundation of digital logic design and is essential for simplifying and analyzing logic circuits.
    </p>

    <h2 className="text-3xl font-bold mt-8">Introduction to Boolean Algebra</h2>
    <p className="leading-relaxed">
      Unlike ordinary algebra which deals with real numbers, Boolean algebra operates on binary
      variables and logical operations. The three fundamental operations are AND, OR, and NOT.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Boolean Algebra Fundamentals:

Variables: Can only be 0 or 1 (FALSE or TRUE)

Basic Operations:
  AND (Conjunction):     A . B  or  AB
  OR  (Disjunction):     A + B
  NOT (Complement):      A'  or  ~A  or  A(bar)

Operator Precedence (highest to lowest):
  1. Parentheses ()
  2. NOT (complement)
  3. AND (multiplication)
  4. OR  (addition)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Boolean Algebra Laws</h2>
    <p className="leading-relaxed">
      Boolean algebra follows a set of fundamental laws that govern how Boolean expressions
      can be manipulated and simplified. These laws are the foundation for circuit optimization.
    </p>

    {/* Identity Laws */}
    <h3 className="text-2xl font-semibold mt-6">1. Identity Laws</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Identity Laws:

AND Identity:    A . 1 = A
OR Identity:     A + 0 = A

Explanation:
  - ANDing with 1 preserves the value of A
  - ORing with 0 preserves the value of A

Verification:
  If A = 0: 0 . 1 = 0 = A    If A = 0: 0 + 0 = 0 = A
  If A = 1: 1 . 1 = 1 = A    If A = 1: 1 + 0 = 1 = A`}
      </pre>
    </div>

    {/* Null Laws */}
    <h3 className="text-2xl font-semibold mt-6">2. Null (Domination) Laws</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Null Laws:

AND Null:    A . 0 = 0
OR Null:     A + 1 = 1

Explanation:
  - ANDing anything with 0 gives 0 (0 dominates AND)
  - ORing anything with 1 gives 1 (1 dominates OR)

Verification:
  If A = 0: 0 . 0 = 0    If A = 0: 0 + 1 = 1
  If A = 1: 1 . 0 = 0    If A = 1: 1 + 1 = 1`}
      </pre>
    </div>

    {/* Idempotent Laws */}
    <h3 className="text-2xl font-semibold mt-6">3. Idempotent Laws</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Idempotent Laws:

AND Idempotent:    A . A = A
OR Idempotent:     A + A = A

Explanation:
  - ANDing a variable with itself gives the same variable
  - ORing a variable with itself gives the same variable

Verification:
  If A = 0: 0 . 0 = 0 = A    If A = 0: 0 + 0 = 0 = A
  If A = 1: 1 . 1 = 1 = A    If A = 1: 1 + 1 = 1 = A`}
      </pre>
    </div>

    {/* Complement Laws */}
    <h3 className="text-2xl font-semibold mt-6">4. Complement Laws</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Complement Laws:

AND Complement:    A . A' = 0
OR Complement:     A + A' = 1

Explanation:
  - A variable ANDed with its complement is always 0
  - A variable ORed with its complement is always 1

Verification:
  If A = 0: 0 . 1 = 0    If A = 0: 0 + 1 = 1
  If A = 1: 1 . 0 = 0    If A = 1: 1 + 0 = 1`}
      </pre>
    </div>

    {/* Involution Law */}
    <h3 className="text-2xl font-semibold mt-6">5. Involution (Double Negation) Law</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Involution Law:

(A')' = A

Explanation:
  - Complementing a complement returns the original value
  - Double negation cancels out

Verification:
  If A = 0: (0')' = 1' = 0 = A
  If A = 1: (1')' = 0' = 1 = A`}
      </pre>
    </div>

    {/* Commutative Laws */}
    <h3 className="text-2xl font-semibold mt-6">6. Commutative Laws</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Commutative Laws:

AND Commutative:    A . B = B . A
OR Commutative:     A + B = B + A

Explanation:
  - Order of operands doesn't matter
  - Similar to ordinary algebra

Truth Table Verification:
   A | B | A.B | B.A | A+B | B+A
  ---+---+-----+-----+-----+-----
   0 | 0 |  0  |  0  |  0  |  0
   0 | 1 |  0  |  0  |  1  |  1
   1 | 0 |  0  |  0  |  1  |  1
   1 | 1 |  1  |  1  |  1  |  1`}
      </pre>
    </div>

    {/* Associative Laws */}
    <h3 className="text-2xl font-semibold mt-6">7. Associative Laws</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Associative Laws:

AND Associative:    (A . B) . C = A . (B . C)
OR Associative:     (A + B) + C = A + (B + C)

Explanation:
  - Grouping of operands doesn't matter
  - Can evaluate in any order

Example:
  (1 . 0) . 1 = 0 . 1 = 0
  1 . (0 . 1) = 1 . 0 = 0   Same result!

  (1 + 0) + 1 = 1 + 1 = 1
  1 + (0 + 1) = 1 + 1 = 1   Same result!`}
      </pre>
    </div>

    {/* Distributive Laws */}
    <h3 className="text-2xl font-semibold mt-6">8. Distributive Laws</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Distributive Laws:

AND over OR:    A . (B + C) = (A . B) + (A . C)
OR over AND:    A + (B . C) = (A + B) . (A + C)

Explanation:
  - AND distributes over OR (same as ordinary algebra)
  - OR distributes over AND (unique to Boolean algebra!)

Truth Table for A + (B . C) = (A + B) . (A + C):
   A | B | C | B.C | A+(B.C) | A+B | A+C | (A+B).(A+C)
  ---+---+---+-----+---------+-----+-----+-------------
   0 | 0 | 0 |  0  |    0    |  0  |  0  |      0
   0 | 0 | 1 |  0  |    0    |  0  |  1  |      0
   0 | 1 | 0 |  0  |    0    |  1  |  0  |      0
   0 | 1 | 1 |  1  |    1    |  1  |  1  |      1
   1 | 0 | 0 |  0  |    1    |  1  |  1  |      1
   1 | 0 | 1 |  0  |    1    |  1  |  1  |      1
   1 | 1 | 0 |  0  |    1    |  1  |  1  |      1
   1 | 1 | 1 |  1  |    1    |  1  |  1  |      1`}
      </pre>
    </div>

    {/* Absorption Laws */}
    <h3 className="text-2xl font-semibold mt-6">9. Absorption Laws</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Absorption Laws:

First Form:     A + (A . B) = A
Second Form:    A . (A + B) = A

Explanation:
  - The term A "absorbs" the expression containing it
  - Very useful for simplification

Proof of A + (A . B) = A:
  A + (A . B) = A . 1 + A . B      (Identity)
             = A . (1 + B)         (Distributive)
             = A . 1               (Null: 1 + B = 1)
             = A                   (Identity)

Proof of A . (A + B) = A:
  A . (A + B) = (A . A) + (A . B)  (Distributive)
             = A + (A . B)         (Idempotent)
             = A                   (First absorption)`}
      </pre>
    </div>

    {/* Consensus Theorem */}
    <h3 className="text-2xl font-semibold mt-6">10. Consensus Theorem</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Consensus Theorem:

Form 1:    A.B + A'.C + B.C = A.B + A'.C
Form 2:    (A + B) . (A' + C) . (B + C) = (A + B) . (A' + C)

The term B.C (or B + C) is called the "consensus term"
and can be eliminated because it's redundant.

Proof of Form 1:
  A.B + A'.C + B.C
  = A.B + A'.C + B.C.(A + A')              (Complement: A + A' = 1)
  = A.B + A'.C + A.B.C + A'.B.C            (Distributive)
  = A.B.(1 + C) + A'.C.(1 + B)             (Factor out)
  = A.B + A'.C                              (Null: 1 + X = 1)

Example:
  X.Y + X'.Z + Y.Z = X.Y + X'.Z
  The term Y.Z is redundant and can be removed.`}
      </pre>
    </div>

    {/* Summary Table */}
    <h2 className="text-3xl font-bold mt-8">Laws Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Law Name</th>
            <th className="p-3 border">AND Form</th>
            <th className="p-3 border">OR Form</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Identity</td>
            <td className="p-3 border">A . 1 = A</td>
            <td className="p-3 border">A + 0 = A</td>
          </tr>
          <tr>
            <td className="p-3 border">Null</td>
            <td className="p-3 border">A . 0 = 0</td>
            <td className="p-3 border">A + 1 = 1</td>
          </tr>
          <tr>
            <td className="p-3 border">Idempotent</td>
            <td className="p-3 border">A . A = A</td>
            <td className="p-3 border">A + A = A</td>
          </tr>
          <tr>
            <td className="p-3 border">Complement</td>
            <td className="p-3 border">A . A' = 0</td>
            <td className="p-3 border">A + A' = 1</td>
          </tr>
          <tr>
            <td className="p-3 border">Involution</td>
            <td className="p-3 border" colSpan={2}>(A')' = A</td>
          </tr>
          <tr>
            <td className="p-3 border">Commutative</td>
            <td className="p-3 border">A . B = B . A</td>
            <td className="p-3 border">A + B = B + A</td>
          </tr>
          <tr>
            <td className="p-3 border">Associative</td>
            <td className="p-3 border">(A.B).C = A.(B.C)</td>
            <td className="p-3 border">(A+B)+C = A+(B+C)</td>
          </tr>
          <tr>
            <td className="p-3 border">Distributive</td>
            <td className="p-3 border">A.(B+C) = A.B + A.C</td>
            <td className="p-3 border">A+(B.C) = (A+B).(A+C)</td>
          </tr>
          <tr>
            <td className="p-3 border">Absorption</td>
            <td className="p-3 border">A.(A+B) = A</td>
            <td className="p-3 border">A + A.B = A</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Duality Principle</h2>
    <p className="leading-relaxed">
      Every Boolean algebraic expression has a dual. The dual is obtained by:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Duality Principle:

To obtain the dual of a Boolean expression:
  1. Interchange AND (.) with OR (+)
  2. Interchange 0 with 1
  3. Keep variables and complements unchanged

Examples:
  Expression:     Dual:
  A + 0 = A       A . 1 = A
  A . 1 = A       A + 0 = A
  A + A' = 1      A . A' = 0
  A . 0 = 0       A + 1 = 1
  A.(B+C)         A+(B.C)

Important: If a statement is true, its dual is also true.
This is why Boolean laws come in pairs!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Boolean Expression Simplification</h2>
    <p className="leading-relaxed">
      Using Boolean algebra laws, complex expressions can be simplified to reduce
      the number of gates required in a circuit implementation.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Example 1: Simplify F = A.B + A.B'

  F = A.B + A.B'
    = A.(B + B')        (Distributive)
    = A.1               (Complement: B + B' = 1)
    = A                 (Identity)

Example 2: Simplify F = A.B.C + A.B.C' + A.B'

  F = A.B.C + A.B.C' + A.B'
    = A.B.(C + C') + A.B'     (Distributive)
    = A.B.1 + A.B'            (Complement)
    = A.B + A.B'              (Identity)
    = A.(B + B')              (Distributive)
    = A.1                      (Complement)
    = A                        (Identity)

Example 3: Simplify F = A'B'C' + A'B'C + A'BC

  F = A'B'C' + A'B'C + A'BC
    = A'B'.(C' + C) + A'BC    (Distributive)
    = A'B'.1 + A'BC           (Complement)
    = A'B' + A'BC             (Identity)
    = A'.(B' + BC)            (Distributive)
    = A'.((B' + B).(B' + C))  (Distributive: OR over AND)
    = A'.(1.(B' + C))         (Complement)
    = A'.(B' + C)             (Identity)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Canonical Forms</h2>

    <h3 className="text-2xl font-semibold mt-6">Sum of Products (SOP) - Minterm Form</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Sum of Products (SOP):

- Each product term (minterm) contains ALL variables
- Product terms are ORed together
- A minterm equals 1 for exactly one input combination

For 2 variables A, B:
  m0 = A'.B'  (when A=0, B=0)
  m1 = A'.B   (when A=0, B=1)
  m2 = A.B'   (when A=1, B=0)
  m3 = A.B    (when A=1, B=1)

Example: F(A,B) = m1 + m3 = A'.B + A.B

Notation: F = Sum(m1, m3) = Sum(1, 3)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Product of Sums (POS) - Maxterm Form</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Product of Sums (POS):

- Each sum term (maxterm) contains ALL variables
- Sum terms are ANDed together
- A maxterm equals 0 for exactly one input combination

For 2 variables A, B:
  M0 = A + B    (equals 0 when A=0, B=0)
  M1 = A + B'   (equals 0 when A=0, B=1)
  M2 = A' + B   (equals 0 when A=1, B=0)
  M3 = A' + B'  (equals 0 when A=1, B=1)

Example: F(A,B) = M0 . M2 = (A + B).(A' + B)

Notation: F = Product(M0, M2) = Product(0, 2)

Note: Minterm mi and Maxterm Mi are complements
      mi = Mi'`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conversion Between Forms</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Converting SOP to POS and vice versa:

Given: F = Sum(1, 3, 5, 7) for 3 variables (A, B, C)

Method: List minterms where F = 0
        These become maxterms in POS form

Total minterms for 3 variables: 0, 1, 2, 3, 4, 5, 6, 7
F = 1 for: 1, 3, 5, 7
F = 0 for: 0, 2, 4, 6

Therefore: F = Product(0, 2, 4, 6)

Verification:
  Sum(1, 3, 5, 7) = Product(0, 2, 4, 6)

General Rule:
  If F = Sum(m_i)
  Then F = Product(M_j) where j are all indices NOT in i`}
      </pre>
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
            <td className="p-3 border">Simplify: A + A.B</td>
            <td className="p-3 border">A (Absorption)</td>
          </tr>
          <tr>
            <td className="p-3 border">Simplify: A.B + A.B'</td>
            <td className="p-3 border">A (Distributive + Complement)</td>
          </tr>
          <tr>
            <td className="p-3 border">Simplify: (A + B).(A + B')</td>
            <td className="p-3 border">A (Distributive OR over AND)</td>
          </tr>
          <tr>
            <td className="p-3 border">Simplify: A.B + A'.B + A.B'</td>
            <td className="p-3 border">A + B</td>
          </tr>
          <tr>
            <td className="p-3 border">Dual of: A + A.B = A</td>
            <td className="p-3 border">A.(A + B) = A</td>
          </tr>
          <tr>
            <td className="p-3 border">Dual of: A.(B + C)</td>
            <td className="p-3 border">A + (B.C)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Boolean algebra uses only two values: 0 and 1</li>
        <li>Three basic operations: AND, OR, NOT</li>
        <li>Operator precedence: NOT {">"} AND {">"} OR</li>
        <li>Every Boolean law has a dual (interchange AND/OR and 0/1)</li>
        <li>Distributive law works both ways in Boolean algebra (unique!)</li>
        <li>Absorption law: A + A.B = A and A.(A+B) = A</li>
        <li>Consensus theorem helps eliminate redundant terms</li>
        <li>SOP (Sum of Products) uses minterms ORed together</li>
        <li>POS (Product of Sums) uses maxterms ANDed together</li>
        <li>Boolean simplification reduces circuit complexity and cost</li>
      </ul>
    </div>
  </div>
);

export default BooleanAlgebra;
