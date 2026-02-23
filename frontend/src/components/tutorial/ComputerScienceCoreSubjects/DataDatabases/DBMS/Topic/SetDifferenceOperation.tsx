import React from "react";

const SetDifferenceOperation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Set Difference Operation in Relational Algebra
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Set Difference (or Minus) operation returns tuples that are in the first
      relation but not in the second relation. It is used to find records that
      exist only in one relation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Notation and Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Set Difference: R - S (or R \\ S)

Definition:
R - S = {t | t ∈ R and t ∉ S}

The result contains all tuples that are in R but NOT in S.

Precondition: R and S must be union-compatible
- Same number of attributes
- Corresponding attributes have compatible domains`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relation All_Employees:
+------+-----------+
| ID   | Name      |
+------+-----------+
| 101  | Alice     |
| 102  | Bob       |
| 103  | Carol     |
| 104  | David     |
+------+-----------+

Relation Managers:
+------+-----------+
| ID   | Name      |
+------+-----------+
| 102  | Bob       |
| 104  | David     |
+------+-----------+

All_Employees - Managers (Non-managers):
+------+-----------+
| ID   | Name      |
+------+-----------+
| 101  | Alice     |
| 103  | Carol     |
+------+-----------+

Result: Employees who are NOT managers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Order Matters</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        Unlike union, set difference is NOT commutative:
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`R - S ≠ S - R (in general)

Example:
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

A - B = {1, 2}     (elements in A but not in B)
B - A = {5, 6}     (elements in B but not in A)`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Equivalent</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Standard SQL: EXCEPT
SELECT ID, Name FROM All_Employees
EXCEPT
SELECT ID, Name FROM Managers;

-- Alternative using NOT IN
SELECT ID, Name FROM All_Employees
WHERE ID NOT IN (SELECT ID FROM Managers);

-- Alternative using NOT EXISTS
SELECT e.ID, e.Name FROM All_Employees e
WHERE NOT EXISTS (
    SELECT 1 FROM Managers m WHERE m.ID = e.ID
);

-- Oracle uses MINUS instead of EXCEPT
SELECT ID, Name FROM All_Employees
MINUS
SELECT ID, Name FROM Managers;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Set Difference</h2>
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
            <td className="p-3 border font-semibold">Not Commutative</td>
            <td className="p-3 border">R - S ≠ S - R</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Not Associative</td>
            <td className="p-3 border">(R - S) - T ≠ R - (S - T)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Identity</td>
            <td className="p-3 border">R - ∅ = R</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Self Difference</td>
            <td className="p-3 border">R - R = ∅</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Use Cases</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Find employees who are not managers</li>
        <li>Find products not ordered in a given period</li>
        <li>Find customers who have not made purchases</li>
        <li>Find students not enrolled in a specific course</li>
        <li>Finding missing or unmatched records</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Requires union-compatible relations</li>
        <li>Order of operands matters (not commutative)</li>
        <li>Returns tuples in first relation but not in second</li>
        <li>SQL uses EXCEPT (or MINUS in Oracle)</li>
        <li>Can also be expressed using NOT IN or NOT EXISTS</li>
        <li>Useful for finding missing or excluded records</li>
      </ul>
    </div>
  </div>
);

export default SetDifferenceOperation;
