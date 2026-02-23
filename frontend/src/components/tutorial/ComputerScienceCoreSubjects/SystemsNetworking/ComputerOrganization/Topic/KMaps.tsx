import React from 'react';

const KMaps: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Karnaugh Maps (K-Maps)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Karnaugh Maps (K-Maps) are a graphical method for simplifying Boolean expressions.
      Developed by Maurice Karnaugh in 1953, K-Maps provide a systematic way to minimize
      logic functions by visually identifying patterns that can be combined, resulting
      in simpler circuit implementations.
    </p>

    <h2 className="text-3xl font-bold mt-8">Introduction to K-Maps</h2>
    <p className="leading-relaxed">
      A K-Map is a rectangular array of cells, where each cell represents a minterm
      of a Boolean function. Adjacent cells differ by only one variable (Gray code ordering),
      which allows easy identification of terms that can be combined.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`K-Map Properties:

1. Each cell represents one minterm
2. Adjacent cells differ by exactly one variable
3. The map wraps around (edges are adjacent)
4. Number of cells = 2^n (n = number of variables)

K-Map Sizes:
  2 variables: 4 cells  (2x2)
  3 variables: 8 cells  (2x4)
  4 variables: 16 cells (4x4)
  5 variables: 32 cells (2x16 or two 4x4 maps)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2-Variable K-Map</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`2-Variable K-Map Structure:

           B
         0   1
       +---+---+
    0  | 0 | 1 |    A'B'  A'B
  A    +---+---+
    1  | 2 | 3 |    AB'   AB
       +---+---+

Cell numbers correspond to minterms:
  Cell 0 (m0) = A'B' (A=0, B=0)
  Cell 1 (m1) = A'B  (A=0, B=1)
  Cell 2 (m2) = AB'  (A=1, B=0)
  Cell 3 (m3) = AB   (A=1, B=1)

Example: F = A'B' + A'B + AB
         = m0 + m1 + m3

           B
         0   1
       +---+---+
    0  | 1 | 1 |
  A    +---+---+
    1  | 0 | 1 |
       +---+---+

Grouping:
  - Cells 0,1 form a horizontal pair: A'
  - Cells 1,3 form a vertical pair: B

Simplified: F = A' + B`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3-Variable K-Map</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`3-Variable K-Map Structure:

              BC
           00  01  11  10
         +---+---+---+---+
      0  | 0 | 1 | 3 | 2 |    A'B'C'  A'B'C  A'BC  A'BC'
  A      +---+---+---+---+
      1  | 4 | 5 | 7 | 6 |    AB'C'   AB'C   ABC   ABC'
         +---+---+---+---+

Note: Column order is 00, 01, 11, 10 (Gray code)
      NOT 00, 01, 10, 11 (binary)

Gray Code ensures adjacent columns differ by one bit:
  00 -> 01 (C changes)
  01 -> 11 (B changes)
  11 -> 10 (C changes)

Also: First column (00) and last column (10) are adjacent!
      They differ by only C.

Minterm to Cell Mapping:
  m0 = A'B'C' = 000 -> cell 0
  m1 = A'B'C  = 001 -> cell 1
  m2 = A'BC'  = 010 -> cell 2
  m3 = A'BC   = 011 -> cell 3
  m4 = AB'C'  = 100 -> cell 4
  m5 = AB'C   = 101 -> cell 5
  m6 = ABC'   = 110 -> cell 6
  m7 = ABC    = 111 -> cell 7`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3-Variable K-Map Example</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Example: F(A,B,C) = Sum(0, 2, 4, 5, 6)

Step 1: Fill the K-Map
              BC
           00  01  11  10
         +---+---+---+---+
      0  | 1 |   |   | 1 |
  A      +---+---+---+---+
      1  | 1 | 1 |   | 1 |
         +---+---+---+---+

Step 2: Identify Groups (power of 2: 1, 2, 4, 8)

Group 1: Cells 0, 2, 4, 6 (all four corners)
         These wrap around! Column 00 and 10 are adjacent.
         Common: C' (C is 0 in all)
         Result: C'

Group 2: Cells 4, 5
         Common: A, B'
         Result: AB'

Step 3: Combine Groups
  F = C' + AB'

Verification:
  Original: m0 + m2 + m4 + m5 + m6
  = A'B'C' + A'BC' + AB'C' + AB'C + ABC'

  C' covers: m0, m2, m4, m6
  AB' covers: m4, m5

  F = C' + AB'  (m4 is covered by both, that's OK)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4-Variable K-Map</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`4-Variable K-Map Structure:

                CD
             00  01  11  10
           +---+---+---+---+
       00  | 0 | 1 | 3 | 2 |
           +---+---+---+---+
       01  | 4 | 5 | 7 | 6 |
  AB       +---+---+---+---+
       11  |12 |13 |15 |14 |
           +---+---+---+---+
       10  | 8 | 9 |11 |10 |
           +---+---+---+---+

Both rows AND columns use Gray code ordering.
Row order: 00, 01, 11, 10
Column order: 00, 01, 11, 10

Wrap-around adjacencies:
  - Left edge adjacent to right edge
  - Top edge adjacent to bottom edge
  - Corners form a 2x2 group!

Cell 0 (m0)  = A'B'C'D' = 0000
Cell 5 (m5)  = A'BC'D   = 0101
Cell 15 (m15)= ABCD     = 1111
etc.`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4-Variable K-Map Example</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Example: F(A,B,C,D) = Sum(0, 1, 2, 5, 8, 9, 10)

Step 1: Fill the K-Map
                CD
             00  01  11  10
           +---+---+---+---+
       00  | 1 | 1 |   | 1 |
           +---+---+---+---+
       01  |   | 1 |   |   |
  AB       +---+---+---+---+
       11  |   |   |   |   |
           +---+---+---+---+
       10  | 1 | 1 |   | 1 |
           +---+---+---+---+

Step 2: Identify Groups

Group 1: Cells 0, 1, 8, 9 (top-left 2x2 wrapping to bottom)
         Common: B'C'
         Result: B'C'

Group 2: Cells 0, 2, 8, 10 (corners of column 00 and 10)
         Common: B'D'
         Result: B'D'

Group 3: Cell 5 (cannot be grouped further)
         Result: A'BC'D

Step 3: Final Expression
  F = B'C' + B'D' + A'BC'D

Alternative grouping might give different but equivalent result.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">K-Map Grouping Rules</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <pre className="text-sm text-gray-900">
{`K-Map Grouping Rules:

1. Groups must contain 2^n cells (1, 2, 4, 8, 16...)
   NOT 3, 5, 6, 7...

2. Groups must be rectangular (including squares)

3. Groups can wrap around edges

4. Each 1 must be covered by at least one group

5. Groups should be as large as possible
   (larger groups = simpler terms)

6. Use minimum number of groups to cover all 1s

7. Overlapping groups are allowed and often necessary

8. Every 1 should be in at least one group
   (redundant coverage is OK but wasteful)

Group Size -> Variables Eliminated:
  2 cells:  eliminates 1 variable
  4 cells:  eliminates 2 variables
  8 cells:  eliminates 3 variables
  16 cells: eliminates 4 variables (result is 1)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Don't Care Conditions (X)</h2>
    <p className="leading-relaxed">
      Don't care conditions represent input combinations that either cannot occur
      or whose output doesn't matter. They can be treated as either 0 or 1 to
      achieve better simplification.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Don't Care Example:

F(A,B,C) = Sum(1, 3, 7) with don't cares d(0, 5)

              BC
           00  01  11  10
         +---+---+---+---+
      0  | X | 1 | 1 | 0 |
  A      +---+---+---+---+
      1  | 0 | X | 1 | 0 |
         +---+---+---+---+

Without don't cares:
  Group cells 1, 3: A'C
  Group cell 7: ABC
  F = A'C + ABC

With don't cares (treat X as 1 where helpful):
  Group cells 1, 3, 5, 7: C (treat cell 5 as 1)
  F = C

Much simpler! The don't care at cell 5 allowed
a larger group, eliminating more variables.

Note: Cell 0's don't care wasn't needed, so leave it as 0.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Product of Sums (POS) Using K-Maps</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Finding POS (Maxterm) Form:

Method: Group the 0s instead of 1s, then complement.

Example: F(A,B,C) = Sum(0, 2, 4, 5, 6)

              BC
           00  01  11  10
         +---+---+---+---+
      0  | 1 | 0 | 0 | 1 |
  A      +---+---+---+---+
      1  | 1 | 1 | 0 | 1 |
         +---+---+---+---+

Group the 0s:
  Cells 1, 3: A' and C  -> A'C (these are where F=0)
  Cell 7: ABC

F' = A'C + ABC  (expression for where F is 0)

Apply De Morgan to get POS:
  F = (F')' = (A'C + ABC)'
    = (A'C)' . (ABC)'
    = (A + C') . (A' + B' + C')

Alternatively, for each group of 0s:
  - Write the maxterm (complemented minterm)
  - AND them together

Cell group 1,3 (0s): Maxterm = (A + C')
Cell 7 (0): Maxterm = (A' + B' + C')

F = (A + C') . (A' + B' + C')`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common K-Map Patterns</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Common Patterns to Recognize:

1. Full Row (4 cells in 4-var K-map):
   Eliminates 2 variables from that row label

2. Full Column (4 cells in 4-var K-map):
   Eliminates 2 variables from that column label

3. Four Corners:
   +---+   +---+
   | 1 |...| 1 |
   +---+   +---+
     .       .
   +---+   +---+
   | 1 |...| 1 |
   +---+   +---+
   Result: Eliminates the middle variables (B, C in ABCD)
   Gives: A'D' (in 4-var map)

4. Checkerboard Pattern (alternating 1s):
   Usually results in XOR expression
   Cannot be simplified using K-map grouping

5. All 1s:
   Result: F = 1 (always true)

6. All 0s:
   Result: F = 0 (always false)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step-by-Step K-Map Procedure</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4">
      <pre className="text-sm text-gray-900">
{`K-Map Simplification Procedure:

Step 1: Draw K-Map with correct variable labeling
        Use Gray code for row/column headers

Step 2: Enter 1s for each minterm in the function
        Enter Xs for don't care conditions
        Leave other cells as 0 (or blank)

Step 3: Find largest possible groups
        Start with isolated 1s that can only be in one group
        Then look for 1s that can only be grouped one way

Step 4: Form groups following rules:
        - Must be rectangular, power of 2 size
        - Can wrap around edges
        - Maximize size, minimize number

Step 5: Write product term for each group
        - Include only variables that don't change in group
        - Variable = 1 in group: include uncomplemented
        - Variable = 0 in group: include complemented

Step 6: OR all product terms together
        This is the minimized SOP expression

Step 7: (Optional) Verify using truth table or algebra`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">5-Variable K-Maps</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`5-Variable K-Map:

Use two 4-variable K-maps stacked (A=0 and A=1)

        A = 0                      A = 1
          CD                         CD
       00  01  11  10            00  01  11  10
     +---+---+---+---+         +---+---+---+---+
  00 | 0 | 1 | 3 | 2 |      00 |16 |17 |19 |18 |
     +---+---+---+---+         +---+---+---+---+
  01 | 4 | 5 | 7 | 6 |      01 |20 |21 |23 |22 |
BC   +---+---+---+---+    BC   +---+---+---+---+
  11 |12 |13 |15 |14 |      11 |28 |29 |31 |30 |
     +---+---+---+---+         +---+---+---+---+
  10 | 8 | 9 |11 |10 |      10 |24 |25 |27 |26 |
     +---+---+---+---+         +---+---+---+---+

Corresponding cells in both maps are adjacent!
Cell 0 (A=0) is adjacent to cell 16 (A=1)
Cell 7 (A=0) is adjacent to cell 23 (A=1)

Groups can span both maps if cells align.`}
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
            <td className="p-3 border">F(A,B) = Sum(0,1,2)</td>
            <td className="p-3 border">A' + B'</td>
          </tr>
          <tr>
            <td className="p-3 border">F(A,B,C) = Sum(0,2,4,6)</td>
            <td className="p-3 border">C'</td>
          </tr>
          <tr>
            <td className="p-3 border">F(A,B,C) = Sum(3,4,5,7)</td>
            <td className="p-3 border">BC + AB'</td>
          </tr>
          <tr>
            <td className="p-3 border">F(A,B,C,D) = Sum(0,1,2,3,4,5)</td>
            <td className="p-3 border">A'B' + A'C'</td>
          </tr>
          <tr>
            <td className="p-3 border">F(A,B,C) = Sum(1,5,7) + d(2,6)</td>
            <td className="p-3 border">C + A'BC' (using don't cares)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>K-Maps use Gray code ordering (adjacent cells differ by 1 bit)</li>
        <li>Groups must be rectangular with 2^n cells (1, 2, 4, 8...)</li>
        <li>K-Maps wrap around - edges are adjacent</li>
        <li>Larger groups eliminate more variables</li>
        <li>Minimize number of groups while covering all 1s</li>
        <li>Don't cares (X) can be 0 or 1 for better grouping</li>
        <li>For POS form, group the 0s and complement</li>
        <li>K-Maps work well for up to 5-6 variables</li>
        <li>For more variables, use Quine-McCluskey algorithm</li>
        <li>Always verify simplified expression matches original</li>
      </ul>
    </div>
  </div>
);

export default KMaps;
