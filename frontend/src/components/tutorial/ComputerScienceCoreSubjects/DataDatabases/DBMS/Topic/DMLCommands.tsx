import React from "react";

const DMLCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DML Commands in SQL
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data Manipulation Language (DML) commands are used to manipulate data stored
      in database tables. Unlike DDL commands that modify structure, DML commands
      work with the actual data.
    </p>

    <h2 className="text-3xl font-bold mt-8">Main DML Commands</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">SELECT</td>
            <td className="p-3 border">Retrieves data from tables</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">INSERT</td>
            <td className="p-3 border">Adds new rows to a table</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">UPDATE</td>
            <td className="p-3 border">Modifies existing data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DELETE</td>
            <td className="p-3 border">Removes rows from a table</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SELECT Command</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Select all columns
SELECT * FROM Employee;

-- Select specific columns
SELECT FirstName, LastName, Salary FROM Employee;

-- With WHERE clause
SELECT * FROM Employee WHERE DeptID = 5;

-- With ORDER BY
SELECT * FROM Employee ORDER BY Salary DESC;

-- With aggregate functions
SELECT DeptID, AVG(Salary) as AvgSalary
FROM Employee
GROUP BY DeptID;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">INSERT Command</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Insert single row with all columns
INSERT INTO Employee VALUES (1, 'John', 'Doe', 5, 50000);

-- Insert with specified columns
INSERT INTO Employee (FirstName, LastName, DeptID)
VALUES ('Jane', 'Smith', 3);

-- Insert multiple rows
INSERT INTO Employee (FirstName, LastName, DeptID, Salary)
VALUES
    ('Alice', 'Brown', 1, 55000),
    ('Bob', 'Wilson', 2, 60000),
    ('Carol', 'Davis', 1, 52000);

-- Insert from SELECT
INSERT INTO EmployeeBackup
SELECT * FROM Employee WHERE DeptID = 5;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">UPDATE Command</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Update single column
UPDATE Employee SET Salary = 55000 WHERE EmpID = 1;

-- Update multiple columns
UPDATE Employee
SET Salary = 60000, DeptID = 3
WHERE EmpID = 5;

-- Update with calculation
UPDATE Employee SET Salary = Salary * 1.10;  -- 10% raise

-- Update with subquery
UPDATE Employee
SET DeptID = (SELECT DeptID FROM Department WHERE DeptName = 'IT')
WHERE FirstName = 'John';

-- IMPORTANT: Always use WHERE to avoid updating all rows!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DELETE Command</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Delete specific rows
DELETE FROM Employee WHERE EmpID = 10;

-- Delete with multiple conditions
DELETE FROM Employee
WHERE DeptID = 5 AND Salary < 40000;

-- Delete all rows (use TRUNCATE instead for better performance)
DELETE FROM Employee;

-- Delete with subquery
DELETE FROM Employee
WHERE DeptID IN (
    SELECT DeptID FROM Department WHERE Location = 'Closed'
);

-- IMPORTANT: Always use WHERE to avoid deleting all rows!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DML Characteristics</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DML commands can be rolled back (within a transaction)</li>
        <li>They work with data, not structure</li>
        <li>Triggers can be fired by DML operations</li>
        <li>DML operations are logged for recovery</li>
        <li>They respect constraints (FK, CHECK, etc.)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transaction Control</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- DML operations within transaction
BEGIN TRANSACTION;

INSERT INTO Employee (FirstName, LastName) VALUES ('Test', 'User');
UPDATE Employee SET Salary = 50000 WHERE LastName = 'User';

-- If everything OK
COMMIT;

-- If something went wrong
ROLLBACK;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>SELECT retrieves data without modifying it</li>
        <li>INSERT adds new rows to tables</li>
        <li>UPDATE modifies existing data</li>
        <li>DELETE removes rows from tables</li>
        <li>Always use WHERE with UPDATE and DELETE</li>
        <li>DML operations can be rolled back</li>
        <li>Use transactions for data integrity</li>
      </ul>
    </div>
  </div>
);

export default DMLCommands;
