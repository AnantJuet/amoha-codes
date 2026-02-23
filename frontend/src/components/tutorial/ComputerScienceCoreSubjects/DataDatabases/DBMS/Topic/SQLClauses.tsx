import React from "react";

const SQLClauses: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL Clauses
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SQL clauses are components of SQL statements that perform specific functions like
      filtering, sorting, grouping, and limiting results. Understanding clauses is essential
      for writing powerful and efficient queries.
    </p>

    <h2 className="text-3xl font-bold mt-8">SELECT Clause</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Select all columns
SELECT * FROM Employee;

-- Select specific columns
SELECT Name, Salary FROM Employee;

-- Select with aliases
SELECT Name AS Employee_Name, Salary AS Monthly_Salary
FROM Employee;

-- Select with expressions
SELECT Name, Salary, Salary * 12 AS Annual_Salary
FROM Employee;

-- Select distinct values
SELECT DISTINCT Department FROM Employee;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">WHERE Clause</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Basic filtering
SELECT * FROM Employee WHERE Dept = 'IT';

-- Multiple conditions
SELECT * FROM Employee
WHERE Dept = 'IT' AND Salary > 50000;

-- Pattern matching
SELECT * FROM Employee WHERE Name LIKE 'J%';

-- Range
SELECT * FROM Employee WHERE Salary BETWEEN 40000 AND 60000;

-- List of values
SELECT * FROM Employee WHERE Dept IN ('IT', 'Sales', 'HR');

-- NULL check
SELECT * FROM Employee WHERE Manager_ID IS NULL;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ORDER BY Clause</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Ascending order (default)
SELECT * FROM Employee ORDER BY Name;
SELECT * FROM Employee ORDER BY Name ASC;

-- Descending order
SELECT * FROM Employee ORDER BY Salary DESC;

-- Multiple columns
SELECT * FROM Employee ORDER BY Dept ASC, Salary DESC;

-- Order by column position
SELECT Name, Salary FROM Employee ORDER BY 2 DESC;

-- Order by expression
SELECT Name, Salary * 12 AS Annual
FROM Employee ORDER BY Salary * 12 DESC;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">GROUP BY Clause</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Group by single column
SELECT Dept, COUNT(*) AS Emp_Count
FROM Employee
GROUP BY Dept;

-- Group by multiple columns
SELECT Dept, Position, AVG(Salary) AS Avg_Salary
FROM Employee
GROUP BY Dept, Position;

-- With aggregate functions
SELECT Dept,
       MIN(Salary) AS Min_Sal,
       MAX(Salary) AS Max_Sal,
       AVG(Salary) AS Avg_Sal
FROM Employee
GROUP BY Dept;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HAVING Clause</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Filter groups (not rows)
SELECT Dept, AVG(Salary) AS Avg_Salary
FROM Employee
GROUP BY Dept
HAVING AVG(Salary) > 50000;

-- Multiple conditions in HAVING
SELECT Dept, COUNT(*) AS Emp_Count, AVG(Salary) AS Avg_Sal
FROM Employee
GROUP BY Dept
HAVING COUNT(*) >= 5 AND AVG(Salary) > 40000;

-- WHERE vs HAVING
SELECT Dept, AVG(Salary) AS Avg_Salary
FROM Employee
WHERE Status = 'Active'        -- Filters rows BEFORE grouping
GROUP BY Dept
HAVING AVG(Salary) > 50000;    -- Filters groups AFTER grouping`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LIMIT / TOP / FETCH Clause</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- MySQL, PostgreSQL: LIMIT
SELECT * FROM Employee ORDER BY Salary DESC LIMIT 10;

-- With offset (skip first 5, get next 10)
SELECT * FROM Employee ORDER BY Salary DESC LIMIT 10 OFFSET 5;

-- SQL Server: TOP
SELECT TOP 10 * FROM Employee ORDER BY Salary DESC;

-- Standard SQL: FETCH
SELECT * FROM Employee ORDER BY Salary DESC
FETCH FIRST 10 ROWS ONLY;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Clause Execution Order</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ol className="list-decimal list-inside leading-relaxed space-y-2">
        <li><strong>FROM</strong> - Tables to query</li>
        <li><strong>WHERE</strong> - Filter rows</li>
        <li><strong>GROUP BY</strong> - Group rows</li>
        <li><strong>HAVING</strong> - Filter groups</li>
        <li><strong>SELECT</strong> - Choose columns</li>
        <li><strong>DISTINCT</strong> - Remove duplicates</li>
        <li><strong>ORDER BY</strong> - Sort results</li>
        <li><strong>LIMIT/OFFSET</strong> - Limit results</li>
      </ol>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Query Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SELECT Dept,
       COUNT(*) AS Emp_Count,
       AVG(Salary) AS Avg_Salary
FROM Employee
WHERE Status = 'Active'
GROUP BY Dept
HAVING COUNT(*) >= 3
ORDER BY Avg_Salary DESC
LIMIT 5;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>WHERE filters individual rows; HAVING filters groups</li>
        <li>ORDER BY is processed last (after SELECT)</li>
        <li>Non-aggregated columns in SELECT must be in GROUP BY</li>
        <li>LIMIT/TOP syntax varies by database system</li>
        <li>Use aliases to make queries more readable</li>
        <li>Understand execution order to write correct queries</li>
      </ul>
    </div>
  </div>
);

export default SQLClauses;
