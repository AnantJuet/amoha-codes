import React from "react";

const EquiJoin: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Equi Join Operation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Equi Join is a special type of theta join that uses only the equality operator (=)
      in its join condition. It is one of the most commonly used join operations in
      database queries.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Notation:</strong> R ⋈<sub>(R.A = S.B)</sub> S
      </p>
      <p className="leading-relaxed mt-2">
        An equi-join combines tuples from two relations where the values of specified
        attributes are equal. Unlike natural join, the join attributes are explicitly
        specified and both columns appear in the result.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relation STUDENT:               Relation DEPARTMENT:
+------+--------+---------+     +---------+-----------+
| S_ID | S_Name | Dept_ID |     | D_ID    | Dept_Name |
+------+--------+---------+     +---------+-----------+
| S1   | Alice  | D1      |     | D1      | CSE       |
| S2   | Bob    | D2      |     | D2      | ECE       |
| S3   | Carol  | D1      |     | D3      | MECH      |
+------+--------+---------+     +---------+-----------+

STUDENT ⋈(Dept_ID = D_ID) DEPARTMENT:

+------+--------+---------+---------+-----------+
| S_ID | S_Name | Dept_ID | D_ID    | Dept_Name |
+------+--------+---------+---------+-----------+
| S1   | Alice  | D1      | D1      | CSE       |
| S2   | Bob    | D2      | D2      | ECE       |
| S3   | Carol  | D1      | D1      | CSE       |
+------+--------+---------+---------+-----------+

Note: Both Dept_ID and D_ID appear (redundant but present)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Equi Join vs Natural Join</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Equi Join</th>
            <th className="p-3 border">Natural Join</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Condition</td>
            <td className="p-3 border">Explicitly specified equality</td>
            <td className="p-3 border">Implicit on all common attrs</td>
          </tr>
          <tr>
            <td className="p-3 border">Attribute names</td>
            <td className="p-3 border">Can be different</td>
            <td className="p-3 border">Must be same</td>
          </tr>
          <tr>
            <td className="p-3 border">Duplicate columns</td>
            <td className="p-3 border">Both kept</td>
            <td className="p-3 border">Eliminated</td>
          </tr>
          <tr>
            <td className="p-3 border">Control</td>
            <td className="p-3 border">Precise</td>
            <td className="p-3 border">Automatic</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Equi Join using JOIN ... ON
SELECT * FROM Student
JOIN Department ON Student.Dept_ID = Department.D_ID;

-- Equi Join using WHERE clause
SELECT * FROM Student, Department
WHERE Student.Dept_ID = Department.D_ID;

-- Multiple equality conditions
SELECT * FROM Orders O
JOIN Customers C ON O.Customer_ID = C.ID
JOIN Products P ON O.Product_ID = P.ID;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Column Equi Join</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relation EMPLOYEE:                  Relation PROJECT_ASSIGNMENT:
+------+--------+---------+------+  +------+---------+------+-------+
| E_ID | E_Name | Dept_ID | Loc  |  | E_ID | Dept_ID | P_ID | Hours |
+------+--------+---------+------+  +------+---------+------+-------+
| E1   | Alice  | D1      | NYC  |  | E1   | D1      | P1   | 40    |
| E2   | Bob    | D2      | LA   |  | E1   | D1      | P2   | 20    |
| E3   | Carol  | D1      | NYC  |  | E2   | D2      | P1   | 30    |
+------+--------+---------+------+  +------+---------+------+-------+

-- Equi join on multiple columns
SELECT E.*, PA.P_ID, PA.Hours
FROM Employee E
JOIN Project_Assignment PA
ON E.E_ID = PA.E_ID AND E.Dept_ID = PA.Dept_ID;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Equi Join</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Explicit control over join attributes</li>
        <li>Works when join columns have different names</li>
        <li>More predictable behavior than natural join</li>
        <li>Commonly supported across all SQL databases</li>
        <li>Can be optimized efficiently by query optimizer</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Equi join uses only equality (=) operator</li>
        <li>Join columns can have different names</li>
        <li>Both join columns appear in result (use projection to remove)</li>
        <li>Most common type of join in practice</li>
        <li>Preferred over natural join for clarity</li>
        <li>Efficiently implemented by all database systems</li>
      </ul>
    </div>
  </div>
);

export default EquiJoin;
