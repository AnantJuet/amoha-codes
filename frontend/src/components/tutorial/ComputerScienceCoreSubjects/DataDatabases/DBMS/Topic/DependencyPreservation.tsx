import React from "react";

const DependencyPreservation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dependency Preservation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Dependency preservation is a property of database decomposition that ensures all
      functional dependencies from the original relation can be enforced using dependencies
      within the decomposed relations, without requiring joins.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        A decomposition of R into R1, R2, ..., Rn is dependency preserving if:
      </p>
      <p className="leading-relaxed mt-2 font-mono text-gray-900">
        (F1 ∪ F2 ∪ ... ∪ Fn)+ = F+
      </p>
      <p className="leading-relaxed mt-2">
        Where Fi is the set of functional dependencies in F that can be checked within Ri
        (all attributes involved are in Ri), and F is the original set of FDs.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Dependency Preservation Matters</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>FDs can be enforced locally within each table</li>
        <li>No expensive joins needed to check constraints</li>
        <li>Improves database performance</li>
        <li>Simpler constraint enforcement</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Dependency Preserving</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original: R(A, B, C)
FDs: F = { A -> B, B -> C }

Decomposition into:
R1(A, B) and R2(B, C)

FDs that can be checked:
F1 (in R1): A -> B  ✓
F2 (in R2): B -> C  ✓

(F1 ∪ F2)+ = {A -> B, B -> C, A -> C}+
F+ = {A -> B, B -> C, A -> C}+

Since (F1 ∪ F2)+ = F+, this decomposition is
DEPENDENCY PRESERVING!

All FDs can be checked within individual tables.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: NOT Dependency Preserving</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original: R(A, B, C)
FDs: F = { A -> B, B -> C, C -> A }

Decomposition into:
R1(A, B) and R2(B, C)

FDs that can be checked:
F1 (in R1): A -> B  ✓
F2 (in R2): B -> C  ✓

But what about C -> A?
- C is in R2
- A is in R1
- Cannot check C -> A without joining R1 and R2!

This decomposition is NOT dependency preserving.
C -> A requires a join to enforce.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Testing for Dependency Preservation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm to check if FD X -> Y is preserved:

1. Start with result = X
2. For each Ri in decomposition:
   a. Compute (result ∩ Ri)+ using FDs in F
   b. Add (result ∩ Ri)+ ∩ Ri to result
3. Repeat step 2 until result doesn't change
4. If Y ⊆ result, then X -> Y is preserved

Example: Check if C -> A is preserved
Given: R1(A,B), R2(B,C), F = {A->B, B->C, C->A}

result = {C}
Iteration 1:
  R2: (C ∩ {B,C})+ = C+ = {C,A,B}, intersect with R2 = {B,C}
  result = {C} ∪ {B,C} = {B,C}
  R1: ({B,C} ∩ {A,B})+ = B+ = {B,C,A}, intersect with R1 = {A,B}
  result = {B,C} ∪ {A,B} = {A,B,C}

Is A ⊆ {A,B,C}? Yes!
So C -> A IS preserved (though it requires iteration)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lossless vs Dependency Preserving</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Lossless</th>
            <th className="p-3 border">Dependency Preserving</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Ensures</td>
            <td className="p-3 border">No data loss on join</td>
            <td className="p-3 border">FDs checkable locally</td>
          </tr>
          <tr>
            <td className="p-3 border">Always possible</td>
            <td className="p-3 border">Yes (for BCNF/3NF)</td>
            <td className="p-3 border">Not always for BCNF</td>
          </tr>
          <tr>
            <td className="p-3 border">3NF</td>
            <td className="p-3 border">Guaranteed</td>
            <td className="p-3 border">Guaranteed</td>
          </tr>
          <tr>
            <td className="p-3 border">BCNF</td>
            <td className="p-3 border">Guaranteed</td>
            <td className="p-3 border">May not be</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Dependency preserving means FDs can be checked without joins</li>
        <li>3NF decomposition is always both lossless and dependency preserving</li>
        <li>BCNF decomposition may not be dependency preserving</li>
        <li>Sometimes we choose 3NF over BCNF to preserve dependencies</li>
        <li>Non-preserved FDs must be checked using triggers or joins</li>
        <li>Both properties are desirable but not always achievable together</li>
      </ul>
    </div>
  </div>
);

export default DependencyPreservation;
