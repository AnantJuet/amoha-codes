import React from "react";

const UpdateStatement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL UPDATE Statement
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The UPDATE statement is used to modify existing records in a table. It allows
      you to change values in one or more columns for rows that match specific conditions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

-- WARNING: Without WHERE clause, ALL rows are updated!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Update Single Column</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Update salary for specific employee
UPDATE Employee
SET Salary = 65000
WHERE EmpID = 101;

-- Update using condition
UPDATE Employee
SET DeptID = 3
WHERE LastName = 'Smith';

-- Update using multiple conditions
UPDATE Employee
SET Salary = 55000
WHERE DeptID = 2 AND HireDate < '2023-01-01';`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Update Multiple Columns</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Update multiple columns at once
UPDATE Employee
SET
    Salary = 70000,
    DeptID = 5,
    Title = 'Senior Developer'
WHERE EmpID = 102;

-- Update with different values for each column
UPDATE Product
SET
    Price = 29.99,
    Stock = Stock - 1,
    LastUpdated = CURRENT_TIMESTAMP
WHERE ProductID = 500;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Update with Calculations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Percentage increase
UPDATE Employee
SET Salary = Salary * 1.10  -- 10% raise
WHERE DeptID = 3;

-- Fixed increase
UPDATE Employee
SET Salary = Salary + 5000
WHERE PerformanceRating = 'Excellent';

-- Using arithmetic expressions
UPDATE Product
SET Price = Price - (Price * 0.15)  -- 15% discount
WHERE Category = 'Clearance';

-- Update with CASE expression
UPDATE Employee
SET Salary = CASE
    WHEN YearsEmployed >= 10 THEN Salary * 1.15
    WHEN YearsEmployed >= 5 THEN Salary * 1.10
    ELSE Salary * 1.05
END;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Update with Subquery</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Update using value from subquery
UPDATE Employee
SET DeptID = (
    SELECT DeptID FROM Department WHERE DeptName = 'Engineering'
)
WHERE EmpID = 105;

-- Update based on subquery condition
UPDATE Employee
SET Salary = Salary * 1.10
WHERE DeptID IN (
    SELECT DeptID FROM Department WHERE Revenue > 1000000
);

-- Update using correlated subquery
UPDATE Employee e
SET Salary = (
    SELECT AVG(Salary) FROM Employee WHERE DeptID = e.DeptID
) * 1.05
WHERE PerformanceRating = 'Above Average';`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Update with JOIN</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- MySQL syntax
UPDATE Employee e
JOIN Department d ON e.DeptID = d.DeptID
SET e.Salary = e.Salary * 1.10
WHERE d.Location = 'New York';

-- SQL Server syntax
UPDATE e
SET e.Salary = e.Salary * 1.10
FROM Employee e
INNER JOIN Department d ON e.DeptID = d.DeptID
WHERE d.Location = 'New York';

-- PostgreSQL syntax
UPDATE Employee
SET Salary = Salary * 1.10
FROM Department
WHERE Employee.DeptID = Department.DeptID
AND Department.Location = 'New York';`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Safety Best Practices</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Always use WHERE:</strong> Without it, ALL rows are updated</li>
        <li><strong>Test with SELECT first:</strong> Run the same WHERE with SELECT to preview affected rows</li>
        <li><strong>Use transactions:</strong> Wrap in BEGIN/ROLLBACK for testing</li>
        <li><strong>Backup first:</strong> For major updates, backup the table</li>
        <li><strong>Use LIMIT:</strong> Update in batches for large tables</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Testing Updates Safely</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Step 1: Preview affected rows
SELECT * FROM Employee WHERE DeptID = 3;

-- Step 2: Test in transaction
BEGIN TRANSACTION;
UPDATE Employee SET Salary = Salary * 1.10 WHERE DeptID = 3;
SELECT * FROM Employee WHERE DeptID = 3;  -- Verify
ROLLBACK;  -- Undo changes

-- Step 3: Execute for real
BEGIN TRANSACTION;
UPDATE Employee SET Salary = Salary * 1.10 WHERE DeptID = 3;
COMMIT;  -- Make permanent`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always include WHERE clause to avoid updating all rows</li>
        <li>Test with SELECT first to verify affected rows</li>
        <li>Use transactions for safety</li>
        <li>Can update multiple columns in one statement</li>
        <li>Supports arithmetic and expressions</li>
        <li>Can use subqueries and JOINs</li>
      </ul>
    </div>
  </div>
);

export default UpdateStatement;
