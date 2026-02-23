import React from "react";

const SelectStatement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL SELECT Statement
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The SELECT statement is the most commonly used SQL command for retrieving data
      from one or more tables. It forms the foundation of data querying in relational
      databases.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SELECT column1, column2, ...
FROM table_name
WHERE condition
ORDER BY column
LIMIT count;

-- Full syntax order:
SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Select All vs Specific Columns</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Select all columns
SELECT * FROM Employee;

-- Select specific columns (preferred for performance)
SELECT FirstName, LastName, Salary FROM Employee;

-- Select with alias
SELECT
    FirstName AS "First Name",
    LastName AS "Last Name",
    Salary AS "Annual Salary"
FROM Employee;

-- Select distinct values
SELECT DISTINCT DeptID FROM Employee;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Expressions and Calculations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Arithmetic expressions
SELECT
    FirstName,
    Salary,
    Salary * 12 AS AnnualSalary,
    Salary * 1.10 AS SalaryWith10Raise
FROM Employee;

-- String concatenation
SELECT CONCAT(FirstName, ' ', LastName) AS FullName FROM Employee;

-- Using functions
SELECT
    UPPER(FirstName) AS UpperName,
    LENGTH(LastName) AS NameLength,
    YEAR(HireDate) AS HireYear
FROM Employee;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Filtering with WHERE</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Basic comparison
SELECT * FROM Employee WHERE Salary > 50000;

-- Multiple conditions with AND
SELECT * FROM Employee
WHERE DeptID = 5 AND Salary > 50000;

-- Multiple conditions with OR
SELECT * FROM Employee
WHERE DeptID = 3 OR DeptID = 5;

-- Using IN
SELECT * FROM Employee WHERE DeptID IN (1, 3, 5);

-- Using BETWEEN
SELECT * FROM Employee WHERE Salary BETWEEN 40000 AND 60000;

-- Using LIKE for pattern matching
SELECT * FROM Employee WHERE LastName LIKE 'S%';    -- Starts with S
SELECT * FROM Employee WHERE Email LIKE '%@gmail.com';  -- Ends with
SELECT * FROM Employee WHERE FirstName LIKE '_ohn';  -- Single char wildcard

-- NULL handling
SELECT * FROM Employee WHERE ManagerID IS NULL;
SELECT * FROM Employee WHERE ManagerID IS NOT NULL;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sorting with ORDER BY</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Ascending (default)
SELECT * FROM Employee ORDER BY LastName;

-- Descending
SELECT * FROM Employee ORDER BY Salary DESC;

-- Multiple columns
SELECT * FROM Employee ORDER BY DeptID ASC, Salary DESC;

-- Order by expression
SELECT * FROM Employee ORDER BY Salary * 12 DESC;

-- Order by column position
SELECT FirstName, LastName, Salary FROM Employee ORDER BY 3 DESC;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Limiting Results</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- MySQL, PostgreSQL: LIMIT
SELECT * FROM Employee ORDER BY Salary DESC LIMIT 10;

-- With offset (skip first 5, get next 10)
SELECT * FROM Employee ORDER BY Salary DESC LIMIT 10 OFFSET 5;

-- SQL Server: TOP
SELECT TOP 10 * FROM Employee ORDER BY Salary DESC;

-- Oracle: ROWNUM or FETCH
SELECT * FROM Employee WHERE ROWNUM <= 10;
SELECT * FROM Employee ORDER BY Salary DESC FETCH FIRST 10 ROWS ONLY;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SELECT Query Processing Order</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        SQL processes clauses in this order (not the written order):
      </p>
      <ol className="list-decimal list-inside leading-relaxed space-y-1">
        <li><strong>FROM:</strong> Identify tables</li>
        <li><strong>WHERE:</strong> Filter rows</li>
        <li><strong>GROUP BY:</strong> Group rows</li>
        <li><strong>HAVING:</strong> Filter groups</li>
        <li><strong>SELECT:</strong> Choose columns</li>
        <li><strong>DISTINCT:</strong> Remove duplicates</li>
        <li><strong>ORDER BY:</strong> Sort results</li>
        <li><strong>LIMIT:</strong> Limit output</li>
      </ol>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>SELECT * retrieves all columns but can be inefficient</li>
        <li>Use aliases to make output more readable</li>
        <li>WHERE filters individual rows</li>
        <li>Use IS NULL / IS NOT NULL for NULL comparisons</li>
        <li>ORDER BY sorts the result set</li>
        <li>LIMIT restricts the number of rows returned</li>
      </ul>
    </div>
  </div>
);

export default SelectStatement;
