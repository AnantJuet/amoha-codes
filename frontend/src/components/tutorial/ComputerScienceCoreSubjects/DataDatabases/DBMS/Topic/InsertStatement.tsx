import React from "react";

const InsertStatement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL INSERT Statement
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The INSERT statement is used to add new rows of data to a table. It is one
      of the fundamental DML commands for populating database tables with data.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Syntax 1: Insert with column names (recommended)
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);

-- Syntax 2: Insert all columns (must match table order)
INSERT INTO table_name
VALUES (value1, value2, ...);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Insert Single Row</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- With column names (recommended)
INSERT INTO Employee (EmpID, FirstName, LastName, DeptID, Salary)
VALUES (101, 'John', 'Doe', 5, 55000);

-- Without column names (all values required in order)
INSERT INTO Employee
VALUES (102, 'Jane', 'Smith', 3, 60000, '2024-01-15');

-- With NULL values
INSERT INTO Employee (EmpID, FirstName, LastName, DeptID, Salary)
VALUES (103, 'Bob', 'Wilson', NULL, 50000);

-- With DEFAULT values
INSERT INTO Employee (EmpID, FirstName, LastName, DeptID, Salary, HireDate)
VALUES (104, 'Alice', 'Brown', 2, 52000, DEFAULT);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Insert Multiple Rows</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Insert multiple rows in one statement
INSERT INTO Employee (FirstName, LastName, DeptID, Salary)
VALUES
    ('Carol', 'Davis', 1, 48000),
    ('David', 'Miller', 2, 52000),
    ('Eve', 'Garcia', 1, 55000),
    ('Frank', 'Martinez', 3, 62000);

-- More efficient than multiple single INSERT statements
-- Reduces network round-trips and transaction overhead`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Insert from SELECT</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Insert data from another table
INSERT INTO EmployeeArchive (EmpID, Name, DeptID)
SELECT EmpID, CONCAT(FirstName, ' ', LastName), DeptID
FROM Employee
WHERE TerminationDate IS NOT NULL;

-- Copy entire table
INSERT INTO EmployeeBackup
SELECT * FROM Employee;

-- Insert with transformation
INSERT INTO SalaryReport (Department, TotalSalary, EmployeeCount)
SELECT DeptID, SUM(Salary), COUNT(*)
FROM Employee
GROUP BY DeptID;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Insert with Auto-Increment</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Auto-increment column is automatically populated
INSERT INTO Employee (FirstName, LastName, DeptID)
VALUES ('Grace', 'Lee', 4);

-- Get the inserted ID (syntax varies)
-- MySQL: SELECT LAST_INSERT_ID();
-- SQL Server: SELECT SCOPE_IDENTITY();
-- PostgreSQL: RETURNING EmpID;

-- PostgreSQL example with RETURNING
INSERT INTO Employee (FirstName, LastName, DeptID)
VALUES ('Grace', 'Lee', 4)
RETURNING EmpID;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">INSERT with ON CONFLICT</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- PostgreSQL: UPSERT (insert or update)
INSERT INTO Employee (EmpID, FirstName, LastName, Salary)
VALUES (101, 'John', 'Doe', 60000)
ON CONFLICT (EmpID)
DO UPDATE SET Salary = EXCLUDED.Salary;

-- MySQL: ON DUPLICATE KEY UPDATE
INSERT INTO Employee (EmpID, FirstName, LastName, Salary)
VALUES (101, 'John', 'Doe', 60000)
ON DUPLICATE KEY UPDATE Salary = VALUES(Salary);

-- Ignore duplicates
INSERT IGNORE INTO Employee ...  -- MySQL
INSERT ... ON CONFLICT DO NOTHING;  -- PostgreSQL`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Errors and Solutions</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Primary key violation:</strong> Value already exists - use unique value or ON CONFLICT</li>
        <li><strong>Foreign key violation:</strong> Referenced value does not exist - insert parent first</li>
        <li><strong>NOT NULL violation:</strong> Required column missing - provide value or use DEFAULT</li>
        <li><strong>Data type mismatch:</strong> Wrong type - ensure correct data types</li>
        <li><strong>Column count mismatch:</strong> Wrong number of values - check column list</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always specify column names for clarity</li>
        <li>Use multi-row INSERT for better performance</li>
        <li>INSERT ... SELECT copies data between tables</li>
        <li>Handle duplicates with ON CONFLICT/DUPLICATE KEY</li>
        <li>String values must be in single quotes</li>
        <li>NULL represents missing/unknown values</li>
      </ul>
    </div>
  </div>
);

export default InsertStatement;
