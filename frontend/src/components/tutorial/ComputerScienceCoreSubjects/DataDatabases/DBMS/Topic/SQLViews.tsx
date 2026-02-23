import React from "react";

const SQLViews: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">SQL Views</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A view is a virtual table based on the result of a SELECT query. It doesn't store
      data physically but provides a way to simplify complex queries and control access.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a View?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`View Characteristics:

- Virtual table (no physical storage)
- Defined by a SELECT statement
- Can be queried like a regular table
- Updates may or may not be allowed
- Provides abstraction layer

View vs Table:
+------------------+------------------+
|      Table       |       View       |
+------------------+------------------+
| Physical storage | Virtual (query)  |
| Contains data    | Contains query   |
| Independent      | Depends on table |
+------------------+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Creating Views</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CREATE VIEW Syntax:

CREATE VIEW view_name AS
SELECT columns
FROM tables
WHERE conditions;

Example 1: Simple View
CREATE VIEW IT_Employees AS
SELECT EID, Name, Salary
FROM EMPLOYEE
WHERE DeptID = 'D1';

-- Query the view
SELECT * FROM IT_Employees;

Example 2: View with Join
CREATE VIEW Employee_Details AS
SELECT E.Name, E.Salary, D.DName
FROM EMPLOYEE E
JOIN DEPARTMENT D ON E.DeptID = D.DeptID;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">View with Calculations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Views can include calculated columns:

CREATE VIEW Salary_Stats AS
SELECT DeptID,
       COUNT(*) AS EmpCount,
       AVG(Salary) AS AvgSalary,
       MAX(Salary) AS MaxSalary,
       MIN(Salary) AS MinSalary
FROM EMPLOYEE
GROUP BY DeptID;

-- Query the view
SELECT * FROM Salary_Stats WHERE AvgSalary > 50000;

Result:
+--------+----------+-----------+-----------+-----------+
| DeptID | EmpCount | AvgSalary | MaxSalary | MinSalary |
+--------+----------+-----------+-----------+-----------+
| D1     | 2        | 55000     | 60000     | 50000     |
+--------+----------+-----------+-----------+-----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Updatable Views</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Views are updatable if they meet certain conditions:

Updatable View (simple):
CREATE VIEW Simple_Emp AS
SELECT EID, Name, Salary FROM EMPLOYEE;

-- This UPDATE works
UPDATE Simple_Emp SET Salary = 55000 WHERE EID = 'E1';

Non-Updatable Views (contain):
- Aggregate functions (SUM, COUNT, AVG)
- DISTINCT
- GROUP BY
- JOIN (in most cases)
- Subqueries
- UNION

Example - NOT updatable:
CREATE VIEW Dept_Stats AS
SELECT DeptID, AVG(Salary) AS AvgSal
FROM EMPLOYEE GROUP BY DeptID;

-- This UPDATE fails
UPDATE Dept_Stats SET AvgSal = 60000;  -- ERROR!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">WITH CHECK OPTION</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`WITH CHECK OPTION: Ensures updates satisfy view condition.

CREATE VIEW High_Salary_Emp AS
SELECT EID, Name, Salary
FROM EMPLOYEE
WHERE Salary > 50000
WITH CHECK OPTION;

-- This INSERT works (Salary > 50000)
INSERT INTO High_Salary_Emp VALUES ('E5', 'Eve', 60000);

-- This INSERT fails (violates condition)
INSERT INTO High_Salary_Emp VALUES ('E6', 'Frank', 40000);
-- ERROR: CHECK OPTION failed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Managing Views</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Drop a view
DROP VIEW view_name;

-- Create or replace
CREATE OR REPLACE VIEW IT_Employees AS
SELECT EID, Name, Salary, DeptID
FROM EMPLOYEE
WHERE DeptID = 'D1';

-- Rename a view (varies by DBMS)
ALTER VIEW old_name RENAME TO new_name;  -- PostgreSQL
RENAME TABLE old_name TO new_name;       -- MySQL`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Benefits of Views</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Benefit</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Simplicity</td>
            <td className="p-3 border">Hide complex queries behind simple view name</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Security</td>
            <td className="p-3 border">Restrict access to specific columns/rows</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border">Same view used across multiple queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Logical Independence</td>
            <td className="p-3 border">Shield apps from table structure changes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Views are virtual tables based on SELECT queries</li>
        <li>Simple views may be updatable</li>
        <li>Views with aggregates/joins are not updatable</li>
        <li>WITH CHECK OPTION enforces view conditions</li>
        <li>Views provide security and simplicity</li>
      </ul>
    </div>
  </div>
);

export default SQLViews;
