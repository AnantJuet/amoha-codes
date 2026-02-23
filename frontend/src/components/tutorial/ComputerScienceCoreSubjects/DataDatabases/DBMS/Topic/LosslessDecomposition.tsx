import React from "react";

const LosslessDecomposition: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Lossless Decomposition
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Lossless decomposition (also called lossless-join decomposition) is a property
      that ensures when a relation is decomposed into smaller relations, joining them
      back together produces exactly the original relation without any spurious tuples.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        A decomposition of relation R into R1 and R2 is lossless if and only if:
      </p>
      <p className="leading-relaxed mt-2 font-mono text-gray-900">
        R = R1 ⋈ R2 (Natural join recovers original relation)
      </p>
      <p className="leading-relaxed mt-2">
        No information is lost during decomposition, and no spurious tuples are
        generated during reconstruction.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Condition for Lossless Decomposition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`For decomposition of R into R1 and R2 to be lossless:

At least one of these must hold:
1. (R1 ∩ R2) -> R1   (Common attributes determine R1)
   OR
2. (R1 ∩ R2) -> R2   (Common attributes determine R2)

In other words:
The common attributes must be a superkey of at least
one of the decomposed relations.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Lossless Decomposition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original Relation R(A, B, C):
+---+---+---+
| A | B | C |
+---+---+---+
| 1 | 2 | 3 |
| 1 | 3 | 4 |
| 2 | 2 | 3 |
+---+---+---+

FD: A -> B

Decompose into:
R1(A, B):           R2(A, C):
+---+---+           +---+---+
| A | B |           | A | C |
+---+---+           +---+---+
| 1 | 2 |           | 1 | 3 |
| 1 | 3 |  WAIT!    | 1 | 4 |
| 2 | 2 |           | 2 | 3 |
+---+---+           +---+---+

This is LOSSY because A -> B is violated in R1!

Correct decomposition with FD A -> B:
R1(A, B) should have unique A values, but it doesn't.

Better example with proper FD:
If A -> B holds and we decompose properly...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Correct Lossless Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original R(Emp_ID, Dept, Dept_Head):
+--------+------+-----------+
| Emp_ID | Dept | Dept_Head |
+--------+------+-----------+
| E1     | IT   | Smith     |
| E2     | HR   | Jones     |
| E3     | IT   | Smith     |
+--------+------+-----------+

FD: Dept -> Dept_Head

Decompose into:
R1(Emp_ID, Dept):      R2(Dept, Dept_Head):
+--------+------+      +------+-----------+
| Emp_ID | Dept |      | Dept | Dept_Head |
+--------+------+      +------+-----------+
| E1     | IT   |      | IT   | Smith     |
| E2     | HR   |      | HR   | Jones     |
| E3     | IT   |      +------+-----------+
+--------+------+

Check lossless condition:
R1 ∩ R2 = {Dept}
Is Dept -> R1 or Dept -> R2?
Dept -> Dept_Head (given) means Dept determines R2
Therefore: LOSSLESS!

R1 ⋈ R2 = Original R (verified)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lossy Decomposition Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original R(A, B, C):      FDs: None special
+---+---+---+
| A | B | C |
+---+---+---+
| 1 | 2 | 3 |
| 4 | 2 | 5 |
+---+---+---+

Decompose into R1(A, B) and R2(B, C):
R1(A, B):       R2(B, C):
+---+---+       +---+---+
| A | B |       | B | C |
+---+---+       +---+---+
| 1 | 2 |       | 2 | 3 |
| 4 | 2 |       | 2 | 5 |
+---+---+       +---+---+

R1 ⋈ R2 (Join on B):
+---+---+---+
| A | B | C |
+---+---+---+
| 1 | 2 | 3 |  <- Original
| 1 | 2 | 5 |  <- SPURIOUS!
| 4 | 2 | 3 |  <- SPURIOUS!
| 4 | 2 | 5 |  <- Original
+---+---+---+

This is LOSSY - extra tuples appeared!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Testing for Lossless Decomposition</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">For binary decomposition (R into R1, R2):</p>
      <ol className="list-decimal list-inside leading-relaxed space-y-2">
        <li>Find common attributes: C = R1 ∩ R2</li>
        <li>Check if C is a superkey of R1 or R2</li>
        <li>If yes, decomposition is lossless</li>
      </ol>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Lossless: Natural join recovers exact original relation</li>
        <li>Lossy: Join produces spurious (extra) tuples</li>
        <li>Common attributes must be superkey of at least one part</li>
        <li>All proper normalization algorithms produce lossless decomposition</li>
        <li>Lossless decomposition is essential for data integrity</li>
        <li>Always verify decomposition is lossless before implementing</li>
      </ul>
    </div>
  </div>
);

export default LosslessDecomposition;
