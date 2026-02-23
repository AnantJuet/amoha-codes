import React from "react";

const UnionOperation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Union Operation in Relational Algebra
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Union operation combines tuples from two relations and removes duplicate
      tuples. It is one of the fundamental set operations in relational algebra
      and corresponds to the mathematical union of two sets.
    </p>

    <h2 className="text-3xl font-bold mt-8">Notation and Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Union Operation: R ∪ S

Definition:
R ∪ S = {t | t ∈ R or t ∈ S}

The result contains all tuples that are in R, or in S, or in both.
Duplicate tuples appear only once in the result.

Precondition: R and S must be union-compatible
- Same number of attributes
- Corresponding attributes have compatible domains`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Union Compatibility</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        Two relations are union-compatible (or type-compatible) if:
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>They have the same number of attributes (same degree)</li>
        <li>Corresponding attributes have compatible data types</li>
        <li>Attribute names may differ (result uses names from first relation)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relation CS_Students:
+------+-----------+
| ID   | Name      |
+------+-----------+
| 101  | Alice     |
| 102  | Bob       |
| 103  | Carol     |
+------+-----------+

Relation Math_Students:
+------+-----------+
| ID   | Name      |
+------+-----------+
| 102  | Bob       |
| 104  | David     |
| 105  | Eve       |
+------+-----------+

CS_Students ∪ Math_Students:
+------+-----------+
| ID   | Name      |
+------+-----------+
| 101  | Alice     |
| 102  | Bob       |  <- Appears once (duplicate removed)
| 103  | Carol     |
| 104  | David     |
| 105  | Eve       |
+------+-----------+

Result: All students in either CS or Math (or both)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Equivalent</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- UNION removes duplicates (like relational algebra)
SELECT ID, Name FROM CS_Students
UNION
SELECT ID, Name FROM Math_Students;

-- UNION ALL keeps duplicates (different from relational algebra)
SELECT ID, Name FROM CS_Students
UNION ALL
SELECT ID, Name FROM Math_Students;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Union</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Commutative</td>
            <td className="p-3 border">R ∪ S = S ∪ R</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Associative</td>
            <td className="p-3 border">(R ∪ S) ∪ T = R ∪ (S ∪ T)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Idempotent</td>
            <td className="p-3 border">R ∪ R = R</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Identity</td>
            <td className="p-3 border">R ∪ ∅ = R</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Union requires union-compatible relations</li>
        <li>Duplicate tuples are automatically removed</li>
        <li>Result attribute names come from the first relation</li>
        <li>Union is commutative and associative</li>
        <li>SQL UNION corresponds to relational algebra union</li>
        <li>SQL UNION ALL keeps duplicates</li>
      </ul>
    </div>
  </div>
);

export default UnionOperation;
