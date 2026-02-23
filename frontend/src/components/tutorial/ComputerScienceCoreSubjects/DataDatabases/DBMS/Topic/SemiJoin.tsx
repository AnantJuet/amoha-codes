import React from "react";

const SemiJoin: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Semi Join Operation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Semi Join is a join operation that returns only the tuples from one relation that
      have matching tuples in another relation. Unlike regular joins, it does not include
      attributes from the second relation in the result.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Notation:</strong> R ⋉ S (Left Semi Join) or R ⋊ S (Right Semi Join)
      </p>
      <p className="leading-relaxed mt-2">
        Left semi-join R ⋉ S returns tuples from R that have at least one matching tuple
        in S based on common attributes. The result contains only R's attributes.
      </p>
      <p className="leading-relaxed mt-2">
        <strong>Formula:</strong> R ⋉ S = π<sub>R</sub>(R ⋈ S)
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relation STUDENT:               Relation ENROLLMENT:
+------+--------+---------+     +------+------+-------+
| S_ID | S_Name | Dept    |     | S_ID | C_ID | Grade |
+------+--------+---------+     +------+------+-------+
| S1   | Alice  | CSE     |     | S1   | C1   | A     |
| S2   | Bob    | ECE     |     | S1   | C2   | B     |
| S3   | Carol  | CSE     |     | S3   | C1   | A     |
| S4   | David  | MECH    |     +------+------+-------+
+------+--------+---------+

STUDENT ⋉ ENROLLMENT (Left Semi Join):
+------+--------+---------+
| S_ID | S_Name | Dept    |
+------+--------+---------+
| S1   | Alice  | CSE     |  <- S1 appears in ENROLLMENT
| S3   | Carol  | CSE     |  <- S3 appears in ENROLLMENT
+------+--------+---------+

Note: S2 and S4 excluded (not in ENROLLMENT)
      No ENROLLMENT columns in result
      Alice appears once (not duplicated for each enrollment)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Semi Join vs Regular Join</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Semi Join</th>
            <th className="p-3 border">Regular Join</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Result columns</td>
            <td className="p-3 border">From one relation only</td>
            <td className="p-3 border">From both relations</td>
          </tr>
          <tr>
            <td className="p-3 border">Duplicates</td>
            <td className="p-3 border">No duplicates from matching</td>
            <td className="p-3 border">Can have duplicates</td>
          </tr>
          <tr>
            <td className="p-3 border">Use case</td>
            <td className="p-3 border">Existence check</td>
            <td className="p-3 border">Combine data</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Semi Join using EXISTS
SELECT S.*
FROM Student S
WHERE EXISTS (
    SELECT 1 FROM Enrollment E
    WHERE S.S_ID = E.S_ID
);

-- Semi Join using IN
SELECT * FROM Student
WHERE S_ID IN (SELECT S_ID FROM Enrollment);

-- Semi Join using JOIN with DISTINCT
SELECT DISTINCT S.*
FROM Student S
JOIN Enrollment E ON S.S_ID = E.S_ID;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Anti Semi Join</h2>
    <p className="leading-relaxed mt-2">
      Anti semi join returns tuples from R that do NOT have matching tuples in S.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`STUDENT Anti-Semi-Join ENROLLMENT:
+------+--------+---------+
| S_ID | S_Name | Dept    |
+------+--------+---------+
| S2   | Bob    | ECE     |  <- S2 NOT in ENROLLMENT
| S4   | David  | MECH    |  <- S4 NOT in ENROLLMENT
+------+--------+---------+

SQL:
SELECT * FROM Student
WHERE S_ID NOT IN (SELECT S_ID FROM Enrollment);

-- Or using NOT EXISTS
SELECT S.* FROM Student S
WHERE NOT EXISTS (
    SELECT 1 FROM Enrollment E WHERE S.S_ID = E.S_ID
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Use Cases</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Existence checks:</strong> Find students who have enrolled in any course</li>
        <li><strong>Filtering:</strong> Get customers who have made at least one purchase</li>
        <li><strong>Distributed databases:</strong> Reduce data transfer between sites</li>
        <li><strong>Anti-join:</strong> Find records without matches (e.g., inactive users)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Semi join returns attributes from only one relation</li>
        <li>No duplicates due to multiple matches</li>
        <li>Use EXISTS or IN clause in SQL</li>
        <li>Anti semi join finds non-matching tuples</li>
        <li>Efficient for existence checking queries</li>
        <li>Important for query optimization in distributed systems</li>
      </ul>
    </div>
  </div>
);

export default SemiJoin;
