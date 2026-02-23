import React from "react";

const FifthNormalForm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Fifth Normal Form (5NF)</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Fifth Normal Form (5NF), also known as Project-Join Normal Form (PJNF),
      deals with join dependencies. A table is in 5NF if it cannot be decomposed
      into smaller tables without losing data when rejoined.
    </p>

    <h2 className="text-3xl font-bold mt-8">Join Dependency (JD)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Join Dependency: *{R1, R2, ..., Rn}

A relation R satisfies join dependency *{R1, R2, ..., Rn} if:
R can be reconstructed by joining R1, R2, ..., Rn

R = R1 ⋈ R2 ⋈ ... ⋈ Rn

Lossless Join:
- No information is lost when decomposing and rejoining
- Original table can be exactly reconstructed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">5NF Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`A relation R is in 5NF if:

1. R is in 4NF, AND
2. Every join dependency in R is implied by candidate keys

In simple terms:
- Cannot be further decomposed without loss
- All join dependencies are trivial
- Also called "Project-Join Normal Form" (PJNF)

5NF is the "ultimate" normal form for eliminating redundancy.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">5NF Violation Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Table: Supplier_Part_Project (SPJ)
+----------+------+---------+
| Supplier | Part | Project |
+----------+------+---------+
| S1       | P1   | J1      |
| S1       | P1   | J2      |
| S1       | P2   | J1      |
| S2       | P1   | J1      |
+----------+------+---------+

Business Rule (Cyclic Constraint):
"If supplier S supplies part P,
 AND supplier S supplies to project J,
 AND part P is used in project J,
 THEN S supplies P to J"

This creates a join dependency:
*{(Supplier, Part), (Supplier, Project), (Part, Project)}

The table can be reconstructed by joining these three projections.
This is NOT in 5NF because the JD is not implied by keys.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Decomposition to 5NF</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original: SPJ(Supplier, Part, Project)

Decompose into three tables:

SP (Supplier_Part):
+----------+------+
| Supplier | Part |
+----------+------+
| S1       | P1   |
| S1       | P2   |
| S2       | P1   |
+----------+------+

SJ (Supplier_Project):
+----------+---------+
| Supplier | Project |
+----------+---------+
| S1       | J1      |
| S1       | J2      |
| S2       | J1      |
+----------+---------+

PJ (Part_Project):
+------+---------+
| Part | Project |
+------+---------+
| P1   | J1      |
| P1   | J2      |
| P2   | J1      |
+------+---------+

Join: SP ⋈ SJ ⋈ PJ = Original SPJ table
Each table is now in 5NF.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Spurious Tuples Warning</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Without proper join dependency, joining creates spurious tuples!

Example (incorrect decomposition):

Only decompose to SP and SJ:
SP ⋈ SJ would produce:
+----------+------+---------+
| Supplier | Part | Project |
+----------+------+---------+
| S1       | P1   | J1      | ✓ Original
| S1       | P1   | J2      | ✓ Original
| S1       | P2   | J1      | ✓ Original
| S1       | P2   | J2      | ✗ SPURIOUS!
| S2       | P1   | J1      | ✓ Original
+----------+------+---------+

Spurious tuple (S1, P2, J2) was not in original!
Need all three tables for lossless join.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Normalization Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Normal Forms Hierarchy:

1NF: Atomic values
 ↓
2NF: No partial dependency
 ↓
3NF: No transitive dependency
 ↓
BCNF: Determinant is key
 ↓
4NF: No multi-valued dependency
 ↓
5NF: No join dependency (Ultimate form)

Each level builds on previous:
5NF ⊂ 4NF ⊂ BCNF ⊂ 3NF ⊂ 2NF ⊂ 1NF`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use 5NF</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Consider 5NF When</th>
            <th className="p-3 border">Skip 5NF When</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Complex many-to-many relationships</td>
            <td className="p-3 border">Simple database design</td>
          </tr>
          <tr>
            <td className="p-3 border">Cyclic business constraints exist</td>
            <td className="p-3 border">No cyclic dependencies</td>
          </tr>
          <tr>
            <td className="p-3 border">Redundancy still exists in 4NF</td>
            <td className="p-3 border">4NF sufficient for needs</td>
          </tr>
          <tr>
            <td className="p-3 border">Data integrity is critical</td>
            <td className="p-3 border">Performance is priority</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>5NF deals with join dependencies</li>
        <li>Also called Project-Join Normal Form</li>
        <li>Cannot decompose further without data loss</li>
        <li>Rarely needed in practice</li>
        <li>Most databases stop at BCNF or 3NF</li>
      </ul>
    </div>
  </div>
);

export default FifthNormalForm;
