import React from "react";

const JoinOperations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Join Operations</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Join operations combine tuples from two relations based on a related column.
      They are among the most important operations in relational algebra for
      querying data across multiple tables.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Joins</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Join Types:

1. Cartesian Product (×)
   - All possible combinations

2. Theta Join (⋈θ)
   - Join with any condition (θ)

3. Equi Join
   - Theta join where θ uses only equality (=)

4. Natural Join (⋈)
   - Join on ALL common attributes, remove duplicates

5. Outer Joins
   - Left, Right, Full outer joins`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sample Relations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`STUDENT                     ENROLLMENT
+------+-------+             +------+------+-------+
| SID  | Name  |             | SID  | CID  | Grade |
+------+-------+             +------+------+-------+
| S1   | John  |             | S1   | C1   | A     |
| S2   | Alice |             | S1   | C2   | B     |
| S3   | Bob   |             | S2   | C1   | A     |
+------+-------+             +------+------+-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Cartesian Product (×)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cartesian Product: All possible combinations.

STUDENT × ENROLLMENT

Result (3 × 3 = 9 tuples):
+------+-------+------+------+-------+
| SID  | Name  | SID  | CID  | Grade |
+------+-------+------+------+-------+
| S1   | John  | S1   | C1   | A     |
| S1   | John  | S1   | C2   | B     |
| S1   | John  | S2   | C1   | A     |
| S2   | Alice | S1   | C1   | A     |
| S2   | Alice | S1   | C2   | B     |
| S2   | Alice | S2   | C1   | A     |
| S3   | Bob   | S1   | C1   | A     |
| S3   | Bob   | S1   | C2   | B     |
| S3   | Bob   | S2   | C1   | A     |
+------+-------+------+------+-------+

Cardinality: |R| × |S|
Degree: degree(R) + degree(S)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Theta Join (⋈θ)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Theta Join: Cartesian product filtered by condition θ.

R ⋈θ S = σθ (R × S)

STUDENT ⋈ STUDENT.SID = ENROLLMENT.SID ENROLLMENT

Result:
+------+-------+------+------+-------+
| SID  | Name  | SID  | CID  | Grade |
+------+-------+------+------+-------+
| S1   | John  | S1   | C1   | A     |
| S1   | John  | S1   | C2   | B     |
| S2   | Alice | S2   | C1   | A     |
+------+-------+------+------+-------+

Only tuples where SIDs match are included.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Natural Join (⋈)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Natural Join:
- Join on ALL common attributes
- Remove duplicate columns

STUDENT ⋈ ENROLLMENT

Common attribute: SID

Result:
+------+-------+------+-------+
| SID  | Name  | CID  | Grade |
+------+-------+------+-------+
| S1   | John  | C1   | A     |
| S1   | John  | C2   | B     |
| S2   | Alice | C1   | A     |
+------+-------+------+-------+

Note: SID appears only once (duplicates removed)

SQL Equivalent:
SELECT * FROM STUDENT NATURAL JOIN ENROLLMENT;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Join Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Join Type</th>
            <th className="p-3 border">Condition</th>
            <th className="p-3 border">Duplicate Columns</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Cartesian Product</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Theta Join</td>
            <td className="p-3 border">Any condition</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Equi Join</td>
            <td className="p-3 border">Equality only</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Natural Join</td>
            <td className="p-3 border">All common attrs</td>
            <td className="p-3 border">No (removed)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Equi Join vs Natural Join</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Equi Join:
STUDENT ⋈ STUDENT.SID = ENROLLMENT.SID ENROLLMENT

+------+-------+------+------+-------+
| SID  | Name  | SID  | CID  | Grade |  ← SID appears twice
+------+-------+------+------+-------+

Natural Join:
STUDENT ⋈ ENROLLMENT

+------+-------+------+-------+
| SID  | Name  | CID  | Grade |  ← SID appears once
+------+-------+------+-------+

Natural Join = Equi Join + Remove duplicate columns`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Cartesian Product: All combinations (|R| × |S| tuples)</li>
        <li>Theta Join: Cartesian product with condition filter</li>
        <li>Equi Join: Theta join using only equality</li>
        <li>Natural Join: Auto-join on common attributes, removes duplicates</li>
        <li>Joins are fundamental for multi-table queries</li>
      </ul>
    </div>
  </div>
);

export default JoinOperations;
