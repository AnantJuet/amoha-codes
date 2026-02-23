import React from "react";

const SQLAggregation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">SQL Aggregation Functions</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Aggregate functions perform calculations on a set of values and return a single value.
      They are commonly used with GROUP BY clause to group rows and calculate summaries.
    </p>

    <h2 className="text-3xl font-bold mt-8">Common Aggregate Functions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">COUNT()</td>
            <td className="p-3 border">Number of rows</td>
            <td className="p-3 border">COUNT(*), COUNT(column)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SUM()</td>
            <td className="p-3 border">Sum of values</td>
            <td className="p-3 border">SUM(Salary)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AVG()</td>
            <td className="p-3 border">Average of values</td>
            <td className="p-3 border">AVG(Age)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MAX()</td>
            <td className="p-3 border">Maximum value</td>
            <td className="p-3 border">MAX(Salary)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MIN()</td>
            <td className="p-3 border">Minimum value</td>
            <td className="p-3 border">MIN(Age)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Basic Aggregate Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EMPLOYEE
+------+--------+--------+--------+
| EID  | Name   | DeptID | Salary |
+------+--------+--------+--------+
| E1   | John   | D1     | 50000  |
| E2   | Alice  | D1     | 60000  |
| E3   | Bob    | D2     | 55000  |
| E4   | Carol  | D2     | 45000  |
| E5   | David  | D1     | 70000  |
+------+--------+--------+--------+

-- Count all employees
SELECT COUNT(*) AS TotalEmployees FROM EMPLOYEE;
Result: 5

-- Sum of all salaries
SELECT SUM(Salary) AS TotalSalary FROM EMPLOYEE;
Result: 280000

-- Average salary
SELECT AVG(Salary) AS AvgSalary FROM EMPLOYEE;
Result: 56000

-- Highest and lowest salary
SELECT MAX(Salary) AS Highest, MIN(Salary) AS Lowest FROM EMPLOYEE;
Result: 70000, 45000`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">GROUP BY Clause</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`GROUP BY: Groups rows with same values for aggregate calculations.

-- Count employees per department
SELECT DeptID, COUNT(*) AS EmpCount
FROM EMPLOYEE
GROUP BY DeptID;

Result:
+--------+----------+
| DeptID | EmpCount |
+--------+----------+
| D1     | 3        |
| D2     | 2        |
+--------+----------+

-- Average salary per department
SELECT DeptID, AVG(Salary) AS AvgSalary
FROM EMPLOYEE
GROUP BY DeptID;

Result:
+--------+-----------+
| DeptID | AvgSalary |
+--------+-----------+
| D1     | 60000     |
| D2     | 50000     |
+--------+-----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HAVING Clause</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HAVING: Filters groups (like WHERE for aggregates).

-- Departments with more than 2 employees
SELECT DeptID, COUNT(*) AS EmpCount
FROM EMPLOYEE
GROUP BY DeptID
HAVING COUNT(*) > 2;

Result:
+--------+----------+
| DeptID | EmpCount |
+--------+----------+
| D1     | 3        |
+--------+----------+

-- Departments with average salary > 55000
SELECT DeptID, AVG(Salary) AS AvgSalary
FROM EMPLOYEE
GROUP BY DeptID
HAVING AVG(Salary) > 55000;

Result:
+--------+-----------+
| DeptID | AvgSalary |
+--------+-----------+
| D1     | 60000     |
+--------+-----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">WHERE vs HAVING</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`WHERE: Filters rows BEFORE grouping
HAVING: Filters groups AFTER grouping

-- Employees with salary > 50000, grouped by dept
SELECT DeptID, COUNT(*) AS HighEarners
FROM EMPLOYEE
WHERE Salary > 50000      -- Filter rows first
GROUP BY DeptID
HAVING COUNT(*) >= 2;     -- Then filter groups

Processing Order:
1. FROM EMPLOYEE
2. WHERE Salary > 50000   (filters to 3 rows)
3. GROUP BY DeptID        (creates groups)
4. HAVING COUNT(*) >= 2   (filters groups)
5. SELECT`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">COUNT Variations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`COUNT(*) vs COUNT(column) vs COUNT(DISTINCT column)

STUDENT
+------+-------+-------+
| SID  | Name  | Major |
+------+-------+-------+
| S1   | John  | CS    |
| S2   | Alice | CS    |
| S3   | Bob   | NULL  |
| S4   | Carol | IT    |
+------+-------+-------+

SELECT COUNT(*) FROM STUDENT;           -- Result: 4 (all rows)
SELECT COUNT(Major) FROM STUDENT;       -- Result: 3 (excludes NULL)
SELECT COUNT(DISTINCT Major) FROM STUDENT; -- Result: 2 (CS, IT)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Aggregate functions return single value from multiple rows</li>
        <li>GROUP BY groups rows for aggregate calculations</li>
        <li>HAVING filters groups (use after GROUP BY)</li>
        <li>WHERE filters rows (use before GROUP BY)</li>
        <li>NULL values are ignored by most aggregate functions</li>
      </ul>
    </div>
  </div>
);

export default SQLAggregation;
