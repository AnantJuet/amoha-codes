import React from "react";

const SQLJoins: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">SQL Joins</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SQL Joins are used to combine rows from two or more tables based on a related column.
      They are essential for querying data from normalized databases.
    </p>

    <h2 className="text-3xl font-bold mt-8">Sample Tables</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EMPLOYEE                           DEPARTMENT
+------+--------+--------+         +--------+---------+
| EID  | Name   | DeptID |         | DeptID | DName   |
+------+--------+--------+         +--------+---------+
| E1   | John   | D1     |         | D1     | IT      |
| E2   | Alice  | D2     |         | D2     | HR      |
| E3   | Bob    | D3     |         | D4     | Sales   |
| E4   | Carol  | NULL   |         +--------+---------+
+------+--------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. INNER JOIN</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`INNER JOIN: Returns matching rows from both tables.

SELECT E.Name, D.DName
FROM EMPLOYEE E
INNER JOIN DEPARTMENT D ON E.DeptID = D.DeptID;

Result:
+-------+---------+
| Name  | DName   |
+-------+---------+
| John  | IT      |
| Alice | HR      |
+-------+---------+

Note: E3 (DeptID=D3) and E4 (NULL) excluded - no match
      D4 (Sales) excluded - no employees`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. LEFT JOIN (LEFT OUTER JOIN)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`LEFT JOIN: All rows from left table + matching from right.

SELECT E.Name, D.DName
FROM EMPLOYEE E
LEFT JOIN DEPARTMENT D ON E.DeptID = D.DeptID;

Result:
+-------+---------+
| Name  | DName   |
+-------+---------+
| John  | IT      |
| Alice | HR      |
| Bob   | NULL    |  ← No matching department
| Carol | NULL    |  ← NULL DeptID
+-------+---------+

All employees shown, NULL for missing departments.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. RIGHT JOIN (RIGHT OUTER JOIN)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RIGHT JOIN: All rows from right table + matching from left.

SELECT E.Name, D.DName
FROM EMPLOYEE E
RIGHT JOIN DEPARTMENT D ON E.DeptID = D.DeptID;

Result:
+-------+---------+
| Name  | DName   |
+-------+---------+
| John  | IT      |
| Alice | HR      |
| NULL  | Sales   |  ← No employees in Sales
+-------+---------+

All departments shown, NULL for missing employees.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. FULL OUTER JOIN</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`FULL OUTER JOIN: All rows from both tables.

SELECT E.Name, D.DName
FROM EMPLOYEE E
FULL OUTER JOIN DEPARTMENT D ON E.DeptID = D.DeptID;

Result:
+-------+---------+
| Name  | DName   |
+-------+---------+
| John  | IT      |
| Alice | HR      |
| Bob   | NULL    |  ← No matching dept
| Carol | NULL    |  ← NULL DeptID
| NULL  | Sales   |  ← No employees
+-------+---------+

Note: MySQL doesn't support FULL OUTER JOIN directly.
Use: LEFT JOIN UNION RIGHT JOIN`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. CROSS JOIN</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CROSS JOIN: Cartesian product of both tables.

SELECT E.Name, D.DName
FROM EMPLOYEE E
CROSS JOIN DEPARTMENT D;

Result: 4 employees × 3 departments = 12 rows
+-------+---------+
| Name  | DName   |
+-------+---------+
| John  | IT      |
| John  | HR      |
| John  | Sales   |
| Alice | IT      |
| Alice | HR      |
| Alice | Sales   |
... (12 total rows)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">6. SELF JOIN</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SELF JOIN: Table joined with itself.

EMPLOYEE
+------+--------+-----------+
| EID  | Name   | ManagerID |
+------+--------+-----------+
| E1   | John   | E3        |
| E2   | Alice  | E3        |
| E3   | Bob    | NULL      |
+------+--------+-----------+

SELECT E.Name AS Employee, M.Name AS Manager
FROM EMPLOYEE E
LEFT JOIN EMPLOYEE M ON E.ManagerID = M.EID;

Result:
+----------+---------+
| Employee | Manager |
+----------+---------+
| John     | Bob     |
| Alice    | Bob     |
| Bob      | NULL    |
+----------+---------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Join Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Join Type</th>
            <th className="p-3 border">Returns</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">INNER JOIN</td>
            <td className="p-3 border">Matching rows only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">LEFT JOIN</td>
            <td className="p-3 border">All left + matching right</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RIGHT JOIN</td>
            <td className="p-3 border">All right + matching left</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">FULL OUTER JOIN</td>
            <td className="p-3 border">All from both tables</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CROSS JOIN</td>
            <td className="p-3 border">All combinations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>INNER JOIN returns only matching rows</li>
        <li>LEFT JOIN keeps all rows from left table</li>
        <li>RIGHT JOIN keeps all rows from right table</li>
        <li>FULL OUTER JOIN keeps all rows from both</li>
        <li>Always use table aliases for clarity</li>
      </ul>
    </div>
  </div>
);

export default SQLJoins;
