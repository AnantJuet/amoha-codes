import React from "react";

const AggregateOperations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Aggregate Operations in Relational Algebra
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Aggregate operations perform calculations on a collection of values and return a
      single value. They are essential for summarizing data, generating reports, and
      performing statistical analysis on database tables.
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
            <td className="p-3 border font-mono text-gray-900">COUNT</td>
            <td className="p-3 border">Number of tuples/values</td>
            <td className="p-3 border">COUNT(*), COUNT(column)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">SUM</td>
            <td className="p-3 border">Sum of numeric values</td>
            <td className="p-3 border">SUM(Salary)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">AVG</td>
            <td className="p-3 border">Average of numeric values</td>
            <td className="p-3 border">AVG(Price)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">MAX</td>
            <td className="p-3 border">Maximum value</td>
            <td className="p-3 border">MAX(Score)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">MIN</td>
            <td className="p-3 border">Minimum value</td>
            <td className="p-3 border">MIN(Age)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Notation in Relational Algebra</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Notation:</strong> G<sub>G1,G2,...,Gn</sub> F<sub>F1(A1),F2(A2),...,Fm(Am)</sub>(R)
      </p>
      <p className="leading-relaxed mt-2">
        Where G1...Gn are grouping attributes and F1(A1)...Fm(Am) are aggregate
        functions applied to attributes.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Basic Aggregation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EMPLOYEE Table:
+------+--------+---------+--------+
| E_ID | E_Name | Dept    | Salary |
+------+--------+---------+--------+
| E1   | Alice  | Sales   | 50000  |
| E2   | Bob    | IT      | 60000  |
| E3   | Carol  | Sales   | 55000  |
| E4   | David  | IT      | 70000  |
| E5   | Eve    | HR      | 45000  |
+------+--------+---------+--------+

Without Grouping:
F COUNT(*), SUM(Salary), AVG(Salary), MAX(Salary), MIN(Salary) (EMPLOYEE)

Result:
+-------+--------+--------+--------+--------+
| COUNT | SUM    | AVG    | MAX    | MIN    |
+-------+--------+--------+--------+--------+
| 5     | 280000 | 56000  | 70000  | 45000  |
+-------+--------+--------+--------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Grouping with Aggregation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Group by Department:
G Dept F COUNT(*), SUM(Salary), AVG(Salary) (EMPLOYEE)

Result:
+---------+-------+--------+--------+
| Dept    | COUNT | SUM    | AVG    |
+---------+-------+--------+--------+
| Sales   | 2     | 105000 | 52500  |
| IT      | 2     | 130000 | 65000  |
| HR      | 1     | 45000  | 45000  |
+---------+-------+--------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Without grouping
SELECT COUNT(*), SUM(Salary), AVG(Salary), MAX(Salary), MIN(Salary)
FROM Employee;

-- With GROUP BY
SELECT Dept, COUNT(*) AS Emp_Count, AVG(Salary) AS Avg_Salary
FROM Employee
GROUP BY Dept;

-- With HAVING (filter groups)
SELECT Dept, AVG(Salary) AS Avg_Salary
FROM Employee
GROUP BY Dept
HAVING AVG(Salary) > 50000;

-- COUNT variations
SELECT COUNT(*) AS Total,           -- Counts all rows
       COUNT(Bonus) AS With_Bonus,  -- Counts non-NULL
       COUNT(DISTINCT Dept) AS Depts -- Counts distinct
FROM Employee;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Important Rules</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Aggregate functions ignore NULL values (except COUNT(*))</li>
        <li>Without GROUP BY, aggregate applies to entire table</li>
        <li>With GROUP BY, aggregate applies to each group</li>
        <li>Non-aggregated columns in SELECT must be in GROUP BY</li>
        <li>Use HAVING to filter groups (after aggregation)</li>
        <li>Use WHERE to filter rows (before aggregation)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">WHERE vs HAVING</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- WHERE filters rows BEFORE grouping
SELECT Dept, AVG(Salary)
FROM Employee
WHERE Salary > 40000     -- Exclude low salaries first
GROUP BY Dept;

-- HAVING filters groups AFTER aggregation
SELECT Dept, AVG(Salary)
FROM Employee
GROUP BY Dept
HAVING AVG(Salary) > 50000;  -- Keep only high-avg depts`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Aggregate functions: COUNT, SUM, AVG, MAX, MIN</li>
        <li>GROUP BY creates groups for aggregation</li>
        <li>HAVING filters groups after aggregation</li>
        <li>WHERE filters rows before aggregation</li>
        <li>NULL values are ignored by aggregates (except COUNT(*))</li>
        <li>Essential for reporting and data analysis queries</li>
      </ul>
    </div>
  </div>
);

export default AggregateOperations;
