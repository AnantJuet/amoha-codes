import React from "react";

const SQLSubqueries: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">SQL Subqueries</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A subquery (nested query) is a query within another SQL query. The inner query
      executes first, and its result is used by the outer query.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Subqueries</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Subquery Types:

1. Single-row Subquery
   - Returns one row
   - Use with =, <, >, etc.

2. Multi-row Subquery
   - Returns multiple rows
   - Use with IN, ANY, ALL

3. Correlated Subquery
   - References outer query
   - Executes once per outer row

4. Scalar Subquery
   - Returns single value
   - Can be used anywhere a value is expected`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sample Tables</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EMPLOYEE                            DEPARTMENT
+------+--------+--------+--------+ +--------+---------+
| EID  | Name   | DeptID | Salary | | DeptID | DName   |
+------+--------+--------+--------+ +--------+---------+
| E1   | John   | D1     | 50000  | | D1     | IT      |
| E2   | Alice  | D1     | 60000  | | D2     | HR      |
| E3   | Bob    | D2     | 55000  | | D3     | Sales   |
| E4   | Carol  | D2     | 45000  | +--------+---------+
+------+--------+--------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Single-Row Subquery</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Returns exactly one value.

-- Find employees earning more than average
SELECT Name, Salary
FROM EMPLOYEE
WHERE Salary > (SELECT AVG(Salary) FROM EMPLOYEE);

Execution:
1. Inner query: SELECT AVG(Salary) FROM EMPLOYEE → 52500
2. Outer query: SELECT ... WHERE Salary > 52500

Result:
+-------+--------+
| Name  | Salary |
+-------+--------+
| Alice | 60000  |
| Bob   | 55000  |
+-------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Row Subquery with IN</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`IN: Checks if value matches any in the list.

-- Find employees in IT or HR departments
SELECT Name, DeptID
FROM EMPLOYEE
WHERE DeptID IN (
    SELECT DeptID FROM DEPARTMENT
    WHERE DName IN ('IT', 'HR')
);

Result:
+-------+--------+
| Name  | DeptID |
+-------+--------+
| John  | D1     |
| Alice | D1     |
| Bob   | D2     |
| Carol | D2     |
+-------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Row Subquery with ANY/ALL</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ANY: True if comparison is true for ANY value
ALL: True if comparison is true for ALL values

-- Salary greater than ANY employee in D2
SELECT Name, Salary
FROM EMPLOYEE
WHERE Salary > ANY (
    SELECT Salary FROM EMPLOYEE WHERE DeptID = 'D2'
);
-- D2 salaries: 55000, 45000
-- > ANY means > 45000 (the minimum)

Result:
+-------+--------+
| Name  | Salary |
+-------+--------+
| John  | 50000  |
| Alice | 60000  |
| Bob   | 55000  |
+-------+--------+

-- Salary greater than ALL employees in D2
SELECT Name, Salary
FROM EMPLOYEE
WHERE Salary > ALL (
    SELECT Salary FROM EMPLOYEE WHERE DeptID = 'D2'
);
-- > ALL means > 55000 (the maximum)

Result:
+-------+--------+
| Name  | Salary |
+-------+--------+
| Alice | 60000  |
+-------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Correlated Subquery</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Correlated: Inner query references outer query.

-- Find employees earning above their department average
SELECT E.Name, E.Salary, E.DeptID
FROM EMPLOYEE E
WHERE E.Salary > (
    SELECT AVG(E2.Salary)
    FROM EMPLOYEE E2
    WHERE E2.DeptID = E.DeptID  -- Reference to outer query
);

Execution: For each row in outer query,
           inner query calculates dept average.

Result:
+-------+--------+--------+
| Name  | Salary | DeptID |
+-------+--------+--------+
| Alice | 60000  | D1     |  -- D1 avg: 55000
| Bob   | 55000  | D2     |  -- D2 avg: 50000
+-------+--------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">EXISTS Operator</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EXISTS: True if subquery returns any rows.

-- Find departments that have employees
SELECT DName
FROM DEPARTMENT D
WHERE EXISTS (
    SELECT 1 FROM EMPLOYEE E
    WHERE E.DeptID = D.DeptID
);

Result:
+---------+
| DName   |
+---------+
| IT      |
| HR      |
+---------+

Note: Sales (D3) excluded - no employees`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Subquery Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Returns</th>
            <th className="p-3 border">Operators</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Single-row</td>
            <td className="p-3 border">One value</td>
            <td className="p-3 border">=, &lt;, &gt;, &lt;=, &gt;=</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Multi-row</td>
            <td className="p-3 border">Multiple values</td>
            <td className="p-3 border">IN, ANY, ALL</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Correlated</td>
            <td className="p-3 border">Depends on outer</td>
            <td className="p-3 border">Any + reference</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">EXISTS</td>
            <td className="p-3 border">Boolean</td>
            <td className="p-3 border">EXISTS, NOT EXISTS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Subqueries execute before outer query (except correlated)</li>
        <li>Use = for single-row, IN for multi-row subqueries</li>
        <li>ANY: comparison true for at least one value</li>
        <li>ALL: comparison true for all values</li>
        <li>Correlated subqueries reference outer query</li>
      </ul>
    </div>
  </div>
);

export default SQLSubqueries;
