import React from "react";

const OuterJoins: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Outer Joins</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Outer joins extend regular joins by including tuples that don't have matching
      values in the other relation. They fill in NULL values for missing attributes.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Outer Joins</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Outer Join Types:

1. Left Outer Join (⟕)
   - All tuples from LEFT relation
   - Matching tuples from right + NULLs

2. Right Outer Join (⟖)
   - All tuples from RIGHT relation
   - Matching tuples from left + NULLs

3. Full Outer Join (⟗)
   - All tuples from BOTH relations
   - NULLs where no match exists`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sample Relations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EMPLOYEE                        DEPARTMENT
+------+--------+--------+      +--------+---------+
| EID  | Name   | DeptID |      | DeptID | DName   |
+------+--------+--------+      +--------+---------+
| E1   | John   | D1     |      | D1     | IT      |
| E2   | Alice  | D2     |      | D2     | HR      |
| E3   | Bob    | D3     |      | D4     | Sales   |
| E4   | Carol  | NULL   |      +--------+---------+
+------+--------+--------+

Note: E3 has D3 (no matching dept), E4 has NULL
      D4 has no employees`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Natural Join (for comparison)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Regular Natural Join: EMPLOYEE ⋈ DEPARTMENT

Result (only matching tuples):
+------+--------+--------+---------+
| EID  | Name   | DeptID | DName   |
+------+--------+--------+---------+
| E1   | John   | D1     | IT      |
| E2   | Alice  | D2     | HR      |
+------+--------+--------+---------+

Missing: E3 (D3 not in DEPARTMENT)
         E4 (NULL DeptID)
         D4 (no employees)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Left Outer Join (⟕)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Left Outer Join: All from LEFT + matching from right

EMPLOYEE ⟕ DEPARTMENT

Result:
+------+--------+--------+---------+
| EID  | Name   | DeptID | DName   |
+------+--------+--------+---------+
| E1   | John   | D1     | IT      |
| E2   | Alice  | D2     | HR      |
| E3   | Bob    | D3     | NULL    |  ← No matching dept
| E4   | Carol  | NULL   | NULL    |  ← NULL DeptID
+------+--------+--------+---------+

SQL Equivalent:
SELECT * FROM EMPLOYEE
LEFT OUTER JOIN DEPARTMENT ON EMPLOYEE.DeptID = DEPARTMENT.DeptID;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Right Outer Join (⟖)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Right Outer Join: All from RIGHT + matching from left

EMPLOYEE ⟖ DEPARTMENT

Result:
+------+--------+--------+---------+
| EID  | Name   | DeptID | DName   |
+------+--------+--------+---------+
| E1   | John   | D1     | IT      |
| E2   | Alice  | D2     | HR      |
| NULL | NULL   | D4     | Sales   |  ← No employees in D4
+------+--------+--------+---------+

SQL Equivalent:
SELECT * FROM EMPLOYEE
RIGHT OUTER JOIN DEPARTMENT ON EMPLOYEE.DeptID = DEPARTMENT.DeptID;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Full Outer Join (⟗)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Full Outer Join: All from BOTH relations

EMPLOYEE ⟗ DEPARTMENT

Result:
+------+--------+--------+---------+
| EID  | Name   | DeptID | DName   |
+------+--------+--------+---------+
| E1   | John   | D1     | IT      |
| E2   | Alice  | D2     | HR      |
| E3   | Bob    | D3     | NULL    |  ← No matching dept
| E4   | Carol  | NULL   | NULL    |  ← NULL DeptID
| NULL | NULL   | D4     | Sales   |  ← No employees
+------+--------+--------+---------+

Full = Left ∪ Right (after outer join)

SQL Equivalent:
SELECT * FROM EMPLOYEE
FULL OUTER JOIN DEPARTMENT ON EMPLOYEE.DeptID = DEPARTMENT.DeptID;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Outer Join Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Join Type</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Keeps All From</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Inner/Natural</td>
            <td className="p-3 border">⋈</td>
            <td className="p-3 border">Neither (only matches)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Left Outer</td>
            <td className="p-3 border">⟕</td>
            <td className="p-3 border">Left relation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Right Outer</td>
            <td className="p-3 border">⟖</td>
            <td className="p-3 border">Right relation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Full Outer</td>
            <td className="p-3 border">⟗</td>
            <td className="p-3 border">Both relations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Visual Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Venn Diagram View:

      R              S
   +-----+       +-----+
   |  1  |       |  3  |
   |     +---+---+     |
   |     | 2 |   |     |
   +-----+---+---+-----+

Inner Join  : 2 only
Left Outer  : 1 + 2
Right Outer : 2 + 3
Full Outer  : 1 + 2 + 3`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Outer joins preserve non-matching tuples</li>
        <li>Left outer: All from left + matches from right</li>
        <li>Right outer: All from right + matches from left</li>
        <li>Full outer: All from both relations</li>
        <li>NULL fills in for missing attribute values</li>
      </ul>
    </div>
  </div>
);

export default OuterJoins;
