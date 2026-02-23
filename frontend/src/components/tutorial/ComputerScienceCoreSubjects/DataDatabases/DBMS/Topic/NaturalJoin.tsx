import React from "react";

const NaturalJoin: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Natural Join Operation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Natural Join is a binary operation in relational algebra that combines two relations
      based on their common attributes. It automatically matches tuples where values of
      all common attributes are equal and removes duplicate columns.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Notation:</strong> R * S or R ⋈ S
      </p>
      <p className="leading-relaxed mt-2">
        Natural join combines R and S on all common attributes, keeping only tuples where
        values match on all common attributes. Duplicate columns are eliminated.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relation R (STUDENT):           Relation S (ENROLLMENT):
+------+--------+---------+     +------+------+-------+
| S_ID | S_Name | Dept_ID |     | S_ID | C_ID | Grade |
+------+--------+---------+     +------+------+-------+
| S1   | Alice  | D1      |     | S1   | C1   | A     |
| S2   | Bob    | D2      |     | S1   | C2   | B     |
| S3   | Carol  | D1      |     | S2   | C1   | A     |
+------+--------+---------+     +------+------+-------+

R ⋈ S (Natural Join on S_ID):
+------+--------+---------+------+-------+
| S_ID | S_Name | Dept_ID | C_ID | Grade |
+------+--------+---------+------+-------+
| S1   | Alice  | D1      | C1   | A     |
| S1   | Alice  | D1      | C2   | B     |
| S2   | Bob    | D2      | C1   | A     |
+------+--------+---------+------+-------+

Note: S3 (Carol) is not in result - no matching S_ID in Enrollment
      S_ID appears only once (duplicate removed)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Natural Join vs Cartesian Product</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Natural Join</th>
            <th className="p-3 border">Cartesian Product</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Matching</td>
            <td className="p-3 border">On common attributes</td>
            <td className="p-3 border">All combinations</td>
          </tr>
          <tr>
            <td className="p-3 border">Duplicates</td>
            <td className="p-3 border">Removed</td>
            <td className="p-3 border">Preserved</td>
          </tr>
          <tr>
            <td className="p-3 border">Result size</td>
            <td className="p-3 border">Usually smaller</td>
            <td className="p-3 border">m x n tuples</td>
          </tr>
          <tr>
            <td className="p-3 border">Condition</td>
            <td className="p-3 border">Implicit (equality)</td>
            <td className="p-3 border">None</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Mathematical Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`R ⋈ S = π(attributes)(σ(R.A1=S.A1 AND R.A2=S.A2 ...)(R x S))

Where A1, A2, ... are common attributes

In other words:
1. Compute Cartesian product R x S
2. Select tuples where all common attributes match
3. Project to remove duplicate attributes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Natural Join in SQL
SELECT * FROM Student NATURAL JOIN Enrollment;

-- Equivalent explicit join
SELECT Student.S_ID, S_Name, Dept_ID, C_ID, Grade
FROM Student
INNER JOIN Enrollment ON Student.S_ID = Enrollment.S_ID;

-- Note: NATURAL JOIN can be dangerous if tables have
-- unexpectedly common column names`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Commutative:</strong> R ⋈ S = S ⋈ R</li>
      <li><strong>Associative:</strong> (R ⋈ S) ⋈ T = R ⋈ (S ⋈ T)</li>
      <li><strong>If no common attributes:</strong> Natural join = Cartesian product</li>
      <li><strong>If all attributes common:</strong> Natural join = Intersection</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Caution with Natural Join</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed font-semibold mb-2">Potential Issues:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Joins on ALL common attributes - may include unintended ones</li>
        <li>Column name changes can break queries silently</li>
        <li>Better to use explicit JOIN with ON clause in production</li>
        <li>Avoid if tables have columns with same name but different meanings</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Natural join matches on ALL common attributes automatically</li>
        <li>Duplicate columns are eliminated in the result</li>
        <li>Tuples without matches are excluded (inner join behavior)</li>
        <li>Commutative and associative operations</li>
        <li>Use explicit joins in SQL for clarity and safety</li>
        <li>Result may be empty if no matching values exist</li>
      </ul>
    </div>
  </div>
);

export default NaturalJoin;
