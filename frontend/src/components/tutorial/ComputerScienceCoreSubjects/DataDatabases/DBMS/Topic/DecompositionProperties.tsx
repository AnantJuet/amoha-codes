import React from "react";

const DecompositionProperties: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Decomposition Properties</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      When decomposing a relation for normalization, the decomposition must preserve
      certain properties to ensure no information is lost and all constraints remain
      enforceable. The two key properties are lossless join and dependency preservation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Lossless Join Decomposition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Lossless Join Property:

Decomposition of R into R1 and R2 is lossless if:
R = R1 ⋈ R2 (natural join recovers original)

No spurious tuples are generated when joining.

Condition for Lossless Join:
At least one of:
- R1 ∩ R2 → R1 (common attributes determine R1)
- R1 ∩ R2 → R2 (common attributes determine R2)

In other words:
R1 ∩ R2 must be a superkey of R1 or R2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lossless Join Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original: R(A, B, C) with FD: A → B

Decomposition:
R1(A, B)
R2(A, C)

Check: R1 ∩ R2 = {A}
Is A → R1? A → AB? Yes, since A → B
So A → R1 holds ✓

Lossless join confirmed!

Example Data:
R:
+---+---+---+
| A | B | C |
+---+---+---+
| 1 | 2 | 3 |
| 1 | 2 | 4 |
+---+---+---+

R1:            R2:
+---+---+      +---+---+
| A | B |      | A | C |
+---+---+      +---+---+
| 1 | 2 |      | 1 | 3 |
+---+---+      | 1 | 4 |
               +---+---+

R1 ⋈ R2:
+---+---+---+
| A | B | C |
+---+---+---+
| 1 | 2 | 3 |
| 1 | 2 | 4 |
+---+---+---+

Original R recovered! ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lossy Decomposition Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original: R(A, B, C) with no FD on shared attributes

Bad Decomposition:
R1(A, B)
R2(B, C)

R1 ∩ R2 = {B}
B → R1? B → AB? Not necessarily!
B → R2? B → BC? Not necessarily!

Example showing loss:
R:
+---+---+---+
| A | B | C |
+---+---+---+
| 1 | 2 | 3 |
| 4 | 2 | 5 |
+---+---+---+

R1:            R2:
+---+---+      +---+---+
| A | B |      | B | C |
+---+---+      +---+---+
| 1 | 2 |      | 2 | 3 |
| 4 | 2 |      | 2 | 5 |
+---+---+      +---+---+

R1 ⋈ R2:
+---+---+---+
| A | B | C |
+---+---+---+
| 1 | 2 | 3 |  ← Original
| 1 | 2 | 5 |  ← SPURIOUS!
| 4 | 2 | 3 |  ← SPURIOUS!
| 4 | 2 | 5 |  ← Original
+---+---+---+

Spurious tuples generated! ✗`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dependency Preservation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dependency Preservation Property:

All original FDs can be enforced by checking
FDs on individual decomposed relations.

Preserved: Can check FD without joining tables
Not Preserved: Must join to verify FD

Given R with FDs F, decomposed into R1, R2, ..., Rn

Let Fi = FDs in F that involve only attributes of Ri

Dependency preserving if:
(F1 ∪ F2 ∪ ... ∪ Fn)+ = F+

Why important?
- Checking constraints on single table: O(n)
- Checking across joined tables: O(n × m) or worse`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dependency Preservation Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`R(A, B, C) with F = {A → B, B → C}

Decomposition 1: R1(A, B), R2(B, C)
F1 = {A → B}  (only A, B attributes)
F2 = {B → C}  (only B, C attributes)
F1 ∪ F2 = {A → B, B → C} = F ✓
PRESERVED!

Decomposition 2: R1(A, B), R2(A, C)
F1 = {A → B}
F2 = {} (no FD with only A, C)
F1 ∪ F2 = {A → B}

Can we derive B → C?
No! B → C requires B, which is not in R2.
To verify B → C, we must JOIN R1 and R2.
NOT PRESERVED!

Note: Decomposition 2 is lossless (A is key)
      but not dependency preserving.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Decomposition Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Ensures</th>
            <th className="p-3 border">Test</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Lossless Join</td>
            <td className="p-3 border">No data loss when rejoining</td>
            <td className="p-3 border">R1 ∩ R2 is key of R1 or R2</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dependency Preserving</td>
            <td className="p-3 border">Can check all FDs locally</td>
            <td className="p-3 border">(∪Fi)+ = F+</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">BCNF and Trade-offs</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Trade-off in Normalization:

3NF:
- Always achievable with both properties
- Lossless and dependency preserving
- May have some redundancy

BCNF:
- Always achievable with lossless join
- May NOT preserve all dependencies
- No redundancy

Choose based on requirements:
- Critical FDs → 3NF
- No redundancy → BCNF`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Lossless join: No spurious tuples on join</li>
        <li>Test: Common attributes must be key</li>
        <li>Dependency preservation: Check FDs locally</li>
        <li>3NF guarantees both properties</li>
        <li>BCNF may sacrifice dependency preservation</li>
      </ul>
    </div>
  </div>
);

export default DecompositionProperties;
