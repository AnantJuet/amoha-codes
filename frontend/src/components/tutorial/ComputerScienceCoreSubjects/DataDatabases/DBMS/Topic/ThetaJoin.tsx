import React from "react";

const ThetaJoin: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Theta Join Operation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Theta Join is a binary operation in relational algebra that combines tuples from
      two relations based on a general condition (theta condition). It is more flexible
      than natural join as it allows any comparison operator.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Notation:</strong> R ⋈<sub>θ</sub> S
      </p>
      <p className="leading-relaxed mt-2">
        Theta join combines R and S keeping only tuples that satisfy condition θ.
        The condition can use any comparison operator: =, ≠, &lt;, &gt;, ≤, ≥
      </p>
      <p className="leading-relaxed mt-2">
        <strong>Formula:</strong> R ⋈<sub>θ</sub> S = σ<sub>θ</sub>(R × S)
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Theta Join</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Operator</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Equi-Join</td>
            <td className="p-3 border">=</td>
            <td className="p-3 border">Theta join with equality condition</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Greater-Than Join</td>
            <td className="p-3 border">&gt;</td>
            <td className="p-3 border">Matches where R.A &gt; S.B</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Less-Than Join</td>
            <td className="p-3 border">&lt;</td>
            <td className="p-3 border">Matches where R.A &lt; S.B</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Non-Equi Join</td>
            <td className="p-3 border">≠, &gt;, &lt;, etc.</td>
            <td className="p-3 border">Any condition except equality</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Equi-Join</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relation EMPLOYEE:              Relation DEPARTMENT:
+------+--------+---------+     +---------+-----------+
| E_ID | E_Name | Dept_ID |     | Dept_ID | Dept_Name |
+------+--------+---------+     +---------+-----------+
| E1   | Alice  | D1      |     | D1      | Sales     |
| E2   | Bob    | D2      |     | D2      | IT        |
| E3   | Carol  | D1      |     | D3      | HR        |
+------+--------+---------+     +---------+-----------+

EMPLOYEE ⋈(EMPLOYEE.Dept_ID = DEPARTMENT.Dept_ID) DEPARTMENT:

+------+--------+---------+---------+-----------+
| E_ID | E_Name |Emp.D_ID |Dept.D_ID| Dept_Name |
+------+--------+---------+---------+-----------+
| E1   | Alice  | D1      | D1      | Sales     |
| E2   | Bob    | D2      | D2      | IT        |
| E3   | Carol  | D1      | D1      | Sales     |
+------+--------+---------+---------+-----------+

Note: Both Dept_ID columns are kept (unlike Natural Join)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Non-Equi Join</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relation EMPLOYEE:              Relation SALARY_GRADE:
+------+--------+--------+      +-------+------+------+
| E_ID | E_Name | Salary |      | Grade | Min  | Max  |
+------+--------+--------+      +-------+------+------+
| E1   | Alice  | 50000  |      | A     | 60000| 100000|
| E2   | Bob    | 75000  |      | B     | 40000| 59999 |
| E3   | Carol  | 45000  |      | C     | 20000| 39999 |
+------+--------+--------+      +-------+------+------+

EMPLOYEE ⋈(Salary >= Min AND Salary <= Max) SALARY_GRADE:

+------+--------+--------+-------+------+------+
| E_ID | E_Name | Salary | Grade | Min  | Max  |
+------+--------+--------+-------+------+------+
| E1   | Alice  | 50000  | B     | 40000| 59999|
| E2   | Bob    | 75000  | A     | 60000|100000|
| E3   | Carol  | 45000  | B     | 40000| 59999|
+------+--------+--------+-------+------+------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Equi-Join
SELECT * FROM Employee
JOIN Department ON Employee.Dept_ID = Department.Dept_ID;

-- Non-Equi Join (Salary Grade example)
SELECT E.*, S.Grade
FROM Employee E
JOIN Salary_Grade S ON E.Salary >= S.Min AND E.Salary <= S.Max;

-- Self-join with inequality (find employees earning more than others)
SELECT E1.E_Name AS Higher, E2.E_Name AS Lower
FROM Employee E1
JOIN Employee E2 ON E1.Salary > E2.Salary;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Theta Join vs Natural Join</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Theta Join</th>
            <th className="p-3 border">Natural Join</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Condition</td>
            <td className="p-3 border">Any comparison</td>
            <td className="p-3 border">Equality on all common attrs</td>
          </tr>
          <tr>
            <td className="p-3 border">Attributes specified</td>
            <td className="p-3 border">Explicitly</td>
            <td className="p-3 border">Implicitly (all common)</td>
          </tr>
          <tr>
            <td className="p-3 border">Duplicate columns</td>
            <td className="p-3 border">Kept</td>
            <td className="p-3 border">Removed</td>
          </tr>
          <tr>
            <td className="p-3 border">Flexibility</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Limited</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Theta join allows any comparison condition between attributes</li>
        <li>Equi-join is a special case using equality condition</li>
        <li>Non-equi joins use &gt;, &lt;, &gt;=, &lt;=, ≠ operators</li>
        <li>Result includes all attributes from both relations</li>
        <li>More flexible than natural join for complex queries</li>
        <li>Common for salary ranges, date comparisons, rankings</li>
      </ul>
    </div>
  </div>
);

export default ThetaJoin;
