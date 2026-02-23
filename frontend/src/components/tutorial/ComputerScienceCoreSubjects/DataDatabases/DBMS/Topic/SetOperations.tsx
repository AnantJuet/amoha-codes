import React from "react";

const SetOperations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Set Operations in Relational Algebra</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Set operations in relational algebra are binary operations that combine two relations.
      They include Union, Intersection, and Difference. These operations require the relations
      to be union-compatible (same schema).
    </p>

    <h2 className="text-3xl font-bold mt-8">Union Compatibility</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Union Compatible Relations:
Two relations R and S are union compatible if:
1. They have the same degree (number of attributes)
2. Corresponding attributes have compatible domains

Example - Compatible:
STUDENT1 (SID, Name, Age)   ✓
STUDENT2 (SID, Name, Age)   ✓

Example - NOT Compatible:
STUDENT (SID, Name, Age)    ✗
COURSE (CID, Title, Cr)     ✗
(Different attribute names and semantics)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sample Relations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CS_STUDENTS                     IT_STUDENTS
+------+-------+------+         +------+-------+------+
| SID  | Name  | Age  |         | SID  | Name  | Age  |
+------+-------+------+         +------+-------+------+
| S1   | John  | 20   |         | S2   | Alice | 21   |
| S2   | Alice | 21   |         | S4   | David | 22   |
| S3   | Bob   | 22   |         | S5   | Eve   | 20   |
+------+-------+------+         +------+-------+------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Union (∪)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Union: Combines all tuples from both relations.

CS_STUDENTS ∪ IT_STUDENTS

Result (duplicates removed):
+------+-------+------+
| SID  | Name  | Age  |
+------+-------+------+
| S1   | John  | 20   |
| S2   | Alice | 21   |  ← Appears in both, shown once
| S3   | Bob   | 22   |
| S4   | David | 22   |
| S5   | Eve   | 20   |
+------+-------+------+

SQL Equivalent:
SELECT * FROM CS_STUDENTS
UNION
SELECT * FROM IT_STUDENTS;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Intersection (∩)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Intersection: Tuples that appear in BOTH relations.

CS_STUDENTS ∩ IT_STUDENTS

Result:
+------+-------+------+
| SID  | Name  | Age  |
+------+-------+------+
| S2   | Alice | 21   |  ← Only tuple in both
+------+-------+------+

SQL Equivalent:
SELECT * FROM CS_STUDENTS
INTERSECT
SELECT * FROM IT_STUDENTS;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Difference (-)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Difference: Tuples in first relation but NOT in second.

CS_STUDENTS - IT_STUDENTS

Result:
+------+-------+------+
| SID  | Name  | Age  |
+------+-------+------+
| S1   | John  | 20   |  ← In CS but not IT
| S3   | Bob   | 22   |  ← In CS but not IT
+------+-------+------+

IT_STUDENTS - CS_STUDENTS

Result:
+------+-------+------+
| SID  | Name  | Age  |
+------+-------+------+
| S4   | David | 22   |  ← In IT but not CS
| S5   | Eve   | 20   |  ← In IT but not CS
+------+-------+------+

Note: R - S ≠ S - R (Not commutative!)

SQL Equivalent:
SELECT * FROM CS_STUDENTS
EXCEPT
SELECT * FROM IT_STUDENTS;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Commutative</th>
            <th className="p-3 border">Associative</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Union</td>
            <td className="p-3 border">∪</td>
            <td className="p-3 border text-green-500">Yes</td>
            <td className="p-3 border text-green-500">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Intersection</td>
            <td className="p-3 border">∩</td>
            <td className="p-3 border text-green-500">Yes</td>
            <td className="p-3 border text-green-500">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Difference</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border text-red-500">No</td>
            <td className="p-3 border text-red-500">No</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Visual Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Venn Diagram Representation:

      R              S
   +-----+       +-----+
   |  1  |       |  3  |
   |     +---+---+     |
   |     | 2 |   |     |
   +-----+---+---+-----+

R ∪ S = 1 + 2 + 3 (All regions)
R ∩ S = 2         (Overlap only)
R - S = 1         (R only)
S - R = 3         (S only)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Relations must be union-compatible</li>
        <li>Union (∪): All tuples from both relations</li>
        <li>Intersection (∩): Common tuples only</li>
        <li>Difference (-): Tuples in first, not in second</li>
        <li>Union and Intersection are commutative; Difference is not</li>
      </ul>
    </div>
  </div>
);

export default SetOperations;
