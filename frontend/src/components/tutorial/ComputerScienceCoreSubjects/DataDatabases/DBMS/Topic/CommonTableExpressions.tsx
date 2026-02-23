import React from "react";

const CommonTableExpressions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Common Table Expressions (CTEs)</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Common Table Expression (CTE) is a temporary named result set that exists
      within a single SQL statement. CTEs make complex queries more readable and
      allow for recursive operations.
    </p>

    <h2 className="text-3xl font-bold mt-8">CTE Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Basic CTE Syntax:

WITH cte_name AS (
    SELECT ...
    FROM ...
    WHERE ...
)
SELECT * FROM cte_name;

Multiple CTEs:

WITH
    cte1 AS (SELECT ...),
    cte2 AS (SELECT ... FROM cte1 ...),
    cte3 AS (SELECT ...)
SELECT *
FROM cte1
JOIN cte2 ON ...
JOIN cte3 ON ...;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Simple CTE Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Without CTE
SELECT dept, COUNT(*) as emp_count
FROM employee
WHERE salary > (
    SELECT AVG(salary) FROM employee
)
GROUP BY dept;

-- With CTE (more readable)
WITH avg_salary AS (
    SELECT AVG(salary) as avg_sal FROM employee
)
SELECT dept, COUNT(*) as emp_count
FROM employee, avg_salary
WHERE salary > avg_sal
GROUP BY dept;

-- CTE with multiple references
WITH high_earners AS (
    SELECT * FROM employee WHERE salary > 70000
)
SELECT
    (SELECT COUNT(*) FROM high_earners) as total,
    (SELECT AVG(salary) FROM high_earners) as avg_salary,
    dept
FROM high_earners
GROUP BY dept;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multiple CTEs</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Multiple CTEs building on each other
WITH
    dept_stats AS (
        SELECT
            dept_id,
            AVG(salary) as avg_salary,
            COUNT(*) as emp_count
        FROM employee
        GROUP BY dept_id
    ),
    high_avg_depts AS (
        SELECT dept_id
        FROM dept_stats
        WHERE avg_salary > 60000
    )
SELECT
    e.name,
    e.salary,
    d.dept_name
FROM employee e
JOIN department d ON e.dept_id = d.dept_id
WHERE e.dept_id IN (SELECT dept_id FROM high_avg_depts);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recursive CTEs</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Recursive CTE: References itself

WITH RECURSIVE cte_name AS (
    -- Anchor (base case)
    SELECT ...
    UNION ALL
    -- Recursive member
    SELECT ... FROM cte_name WHERE ...
)
SELECT * FROM cte_name;

-- Example: Employee hierarchy
WITH RECURSIVE emp_hierarchy AS (
    -- Anchor: Top-level managers (no manager)
    SELECT emp_id, name, manager_id, 1 as level
    FROM employee
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive: Employees with managers
    SELECT e.emp_id, e.name, e.manager_id, h.level + 1
    FROM employee e
    JOIN emp_hierarchy h ON e.manager_id = h.emp_id
)
SELECT * FROM emp_hierarchy ORDER BY level;

Result:
+--------+-------+------------+-------+
| emp_id | name  | manager_id | level |
+--------+-------+------------+-------+
| 1      | CEO   | NULL       | 1     |
| 2      | VP1   | 1          | 2     |
| 3      | VP2   | 1          | 2     |
| 4      | Mgr1  | 2          | 3     |
| 5      | Mgr2  | 3          | 3     |
+--------+-------+------------+-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">More Recursive Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Generate number sequence
WITH RECURSIVE numbers AS (
    SELECT 1 as n
    UNION ALL
    SELECT n + 1 FROM numbers WHERE n < 10
)
SELECT n FROM numbers;

-- Date series
WITH RECURSIVE dates AS (
    SELECT DATE('2026-01-01') as d
    UNION ALL
    SELECT DATE(d, '+1 day') FROM dates
    WHERE d < DATE('2026-01-31')
)
SELECT d FROM dates;

-- Bill of materials (parts explosion)
WITH RECURSIVE parts_tree AS (
    SELECT part_id, part_name, parent_id, 1 as depth
    FROM parts WHERE parent_id IS NULL

    UNION ALL

    SELECT p.part_id, p.part_name, p.parent_id, pt.depth + 1
    FROM parts p
    JOIN parts_tree pt ON p.parent_id = pt.part_id
    WHERE depth < 10  -- Prevent infinite recursion
)
SELECT * FROM parts_tree;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CTE vs Subquery vs Temp Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">CTE</th>
            <th className="p-3 border">Subquery</th>
            <th className="p-3 border">Temp Table</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Scope</td>
            <td className="p-3 border">Single query</td>
            <td className="p-3 border">Single use</td>
            <td className="p-3 border">Session/connection</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reusability</td>
            <td className="p-3 border">Multiple references</td>
            <td className="p-3 border">Repeat definition</td>
            <td className="p-3 border">Multiple queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Recursion</td>
            <td className="p-3 border text-green-500">Yes</td>
            <td className="p-3 border text-red-500">No</td>
            <td className="p-3 border text-red-500">No</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Readability</td>
            <td className="p-3 border text-green-500">High</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Medium</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>CTEs improve query readability</li>
        <li>Can reference same CTE multiple times</li>
        <li>Recursive CTEs for hierarchies and sequences</li>
        <li>UNION ALL connects anchor and recursive parts</li>
        <li>Include termination condition to prevent infinite loops</li>
      </ul>
    </div>
  </div>
);

export default CommonTableExpressions;
