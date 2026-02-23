import React from "react";

const DeleteStatement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL DELETE Statement
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The DELETE statement removes rows from a table. Unlike DROP or TRUNCATE,
      DELETE allows you to remove specific rows based on conditions and can be
      rolled back within a transaction.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DELETE FROM table_name
WHERE condition;

-- WARNING: Without WHERE clause, ALL rows are deleted!

-- Delete all rows (prefer TRUNCATE for performance)
DELETE FROM table_name;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Delete with Conditions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Delete specific row by primary key
DELETE FROM Employee WHERE EmpID = 101;

-- Delete multiple rows with condition
DELETE FROM Employee WHERE DeptID = 5;

-- Delete with multiple conditions (AND)
DELETE FROM Employee
WHERE DeptID = 3 AND HireDate < '2020-01-01';

-- Delete with multiple conditions (OR)
DELETE FROM Employee
WHERE Status = 'Terminated' OR Status = 'Resigned';

-- Delete with comparison operators
DELETE FROM Product WHERE Stock = 0;
DELETE FROM Order WHERE OrderDate < '2023-01-01';`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Delete with IN and BETWEEN</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Delete using IN
DELETE FROM Employee
WHERE DeptID IN (5, 7, 9);

-- Delete using NOT IN
DELETE FROM Product
WHERE CategoryID NOT IN (1, 2, 3);

-- Delete using BETWEEN
DELETE FROM LogEntry
WHERE LogDate BETWEEN '2023-01-01' AND '2023-06-30';

-- Delete using LIKE
DELETE FROM Customer
WHERE Email LIKE '%@test.com';`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Delete with Subquery</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Delete using subquery in WHERE
DELETE FROM Employee
WHERE DeptID IN (
    SELECT DeptID FROM Department WHERE Status = 'Closed'
);

-- Delete using EXISTS
DELETE FROM Order
WHERE EXISTS (
    SELECT 1 FROM Customer
    WHERE Customer.ID = Order.CustomerID
    AND Customer.Status = 'Inactive'
);

-- Delete using NOT EXISTS
DELETE FROM Product
WHERE NOT EXISTS (
    SELECT 1 FROM OrderItem
    WHERE OrderItem.ProductID = Product.ProductID
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Delete with JOIN</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- MySQL syntax
DELETE e FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
WHERE d.Location = 'Closed Office';

-- SQL Server syntax
DELETE FROM Employee
FROM Employee e
INNER JOIN Department d ON e.DeptID = d.DeptID
WHERE d.Location = 'Closed Office';

-- PostgreSQL syntax
DELETE FROM Employee
USING Department
WHERE Employee.DeptID = Department.DeptID
AND Department.Location = 'Closed Office';`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Delete with LIMIT</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Delete limited rows (MySQL)
DELETE FROM LogEntry
WHERE LogDate < '2023-01-01'
LIMIT 1000;

-- Delete in batches (for large tables)
-- Repeat until no rows affected
DELETE FROM LogEntry
WHERE LogDate < '2023-01-01'
LIMIT 10000;

-- SQL Server: DELETE TOP
DELETE TOP (1000) FROM LogEntry
WHERE LogDate < '2023-01-01';`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Foreign Key Considerations</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>ON DELETE CASCADE:</strong> Automatically deletes child rows</li>
        <li><strong>ON DELETE SET NULL:</strong> Sets FK to NULL in child rows</li>
        <li><strong>ON DELETE RESTRICT:</strong> Prevents deletion if children exist</li>
        <li><strong>Delete order:</strong> Delete children before parents if no CASCADE</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Safe Deletion Practices</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Step 1: Preview rows to delete
SELECT * FROM Employee WHERE DeptID = 5;

-- Step 2: Test in transaction
BEGIN TRANSACTION;
DELETE FROM Employee WHERE DeptID = 5;
SELECT COUNT(*) FROM Employee;  -- Verify count
ROLLBACK;  -- Undo deletion

-- Step 3: Execute for real
BEGIN TRANSACTION;
DELETE FROM Employee WHERE DeptID = 5;
COMMIT;  -- Make permanent`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always use WHERE to avoid deleting all rows</li>
        <li>Test with SELECT first to verify affected rows</li>
        <li>DELETE can be rolled back within a transaction</li>
        <li>DELETE fires triggers; TRUNCATE does not</li>
        <li>Consider foreign key constraints before deleting</li>
        <li>Use LIMIT for large deletes to avoid long locks</li>
      </ul>
    </div>
  </div>
);

export default DeleteStatement;
