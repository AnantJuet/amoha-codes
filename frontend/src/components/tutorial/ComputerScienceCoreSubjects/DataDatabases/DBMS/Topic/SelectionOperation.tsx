import React from "react";

const SelectionOperation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Selection Operation (σ)</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Selection is a unary operation that filters tuples from a relation based on a
      specified condition. It selects rows (horizontal subset) that satisfy the condition.
    </p>

    <h2 className="text-3xl font-bold mt-8">Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Selection Syntax:

σ <condition> (Relation)

Where:
- σ (sigma) is the selection operator
- <condition> is a predicate/boolean expression
- Relation is the input relation

SQL Equivalent:
SELECT * FROM Relation WHERE condition;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Basic Selection Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`STUDENT Table:
+------+-------+------+--------+
| SID  | Name  | Age  | Major  |
+------+-------+------+--------+
| S1   | John  | 20   | CS     |
| S2   | Alice | 21   | IT     |
| S3   | Bob   | 22   | CS     |
| S4   | Carol | 20   | ECE    |
+------+-------+------+--------+

Query: Select students older than 20
σ Age > 20 (STUDENT)

Result:
+------+-------+------+--------+
| SID  | Name  | Age  | Major  |
+------+-------+------+--------+
| S2   | Alice | 21   | IT     |
| S3   | Bob   | 22   | CS     |
+------+-------+------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Selection with Compound Conditions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Compound Conditions using:
- AND (∧) : Both conditions must be true
- OR (∨)  : At least one condition must be true
- NOT (¬) : Negation

Example 1: AND condition
σ Age > 20 ∧ Major = 'CS' (STUDENT)

Result:
+------+-------+------+--------+
| SID  | Name  | Age  | Major  |
+------+-------+------+--------+
| S3   | Bob   | 22   | CS     |
+------+-------+------+--------+

Example 2: OR condition
σ Age = 20 ∨ Major = 'IT' (STUDENT)

Result:
+------+-------+------+--------+
| SID  | Name  | Age  | Major  |
+------+-------+------+--------+
| S1   | John  | 20   | CS     |
| S2   | Alice | 21   | IT     |
| S4   | Carol | 20   | ECE    |
+------+-------+------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Operators</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operator</th>
            <th className="p-3 border">Meaning</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">=</td>
            <td className="p-3 border">Equal</td>
            <td className="p-3 border">σ Age = 20</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">≠ or &lt;&gt;</td>
            <td className="p-3 border">Not equal</td>
            <td className="p-3 border">σ Major ≠ 'CS'</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">&lt;</td>
            <td className="p-3 border">Less than</td>
            <td className="p-3 border">σ Age &lt; 21</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">&gt;</td>
            <td className="p-3 border">Greater than</td>
            <td className="p-3 border">σ Age &gt; 20</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">≤</td>
            <td className="p-3 border">Less than or equal</td>
            <td className="p-3 border">σ Age ≤ 21</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">≥</td>
            <td className="p-3 border">Greater than or equal</td>
            <td className="p-3 border">σ Age ≥ 20</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Selection</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Selection Properties:

1. Commutative:
   σ c1 (σ c2 (R)) = σ c2 (σ c1 (R))
   Order of selections doesn't matter

2. Cascading:
   σ c1 ∧ c2 (R) = σ c1 (σ c2 (R))
   Combined condition = nested selections

3. Degree unchanged:
   Result has same number of columns as input

4. Cardinality:
   Result cardinality ≤ input cardinality
   (filtering can only reduce or maintain rows)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Selection vs SQL WHERE</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relational Algebra:
σ Age > 20 ∧ Major = 'CS' (STUDENT)

SQL Equivalent:
SELECT *
FROM STUDENT
WHERE Age > 20 AND Major = 'CS';

Both produce the same result!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Selection filters rows (horizontal subset)</li>
        <li>Uses σ (sigma) symbol</li>
        <li>Condition uses comparison and logical operators</li>
        <li>Result has same schema, fewer or equal tuples</li>
        <li>Selection is commutative</li>
      </ul>
    </div>
  </div>
);

export default SelectionOperation;
