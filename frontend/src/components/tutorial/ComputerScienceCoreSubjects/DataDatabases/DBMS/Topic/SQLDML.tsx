import React from "react";

const SQLDML: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">SQL DML - Data Manipulation Language</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data Manipulation Language (DML) commands are used to manipulate data stored
      in database tables. The main DML operations are INSERT, UPDATE, DELETE, and
      SELECT - the CRUD operations that form the core of database interaction.
    </p>

    <h2 className="text-3xl font-bold mt-8">DML Commands Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DML Commands:

INSERT  - Add new records to a table
UPDATE  - Modify existing records
DELETE  - Remove records from a table
SELECT  - Retrieve data (Query)

CRUD Mapping:
C - Create  → INSERT
R - Read    → SELECT
U - Update  → UPDATE
D - Delete  → DELETE`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">INSERT Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Insert single row (all columns)
INSERT INTO employee
VALUES (1, 'John', 'IT', 50000);

-- Insert with column names (recommended)
INSERT INTO employee (emp_id, name, dept, salary)
VALUES (2, 'Alice', 'HR', 55000);

-- Insert partial data (other columns get NULL/DEFAULT)
INSERT INTO employee (emp_id, name)
VALUES (3, 'Bob');

-- Insert multiple rows
INSERT INTO employee (emp_id, name, dept, salary)
VALUES
    (4, 'Carol', 'IT', 60000),
    (5, 'David', 'Finance', 52000),
    (6, 'Eve', 'HR', 48000);

-- Insert from SELECT (copy data)
INSERT INTO employee_backup
SELECT * FROM employee WHERE dept = 'IT';

-- Insert with subquery
INSERT INTO high_salary_emp
SELECT * FROM employee WHERE salary > 50000;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">UPDATE Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Update single column
UPDATE employee
SET salary = 55000
WHERE emp_id = 1;

-- Update multiple columns
UPDATE employee
SET salary = 60000, dept = 'Management'
WHERE emp_id = 2;

-- Update with calculation
UPDATE employee
SET salary = salary * 1.10  -- 10% raise
WHERE dept = 'IT';

-- Update using CASE
UPDATE employee
SET salary = CASE
    WHEN dept = 'IT' THEN salary * 1.15
    WHEN dept = 'HR' THEN salary * 1.10
    ELSE salary * 1.05
END;

-- Update with subquery
UPDATE employee
SET salary = (SELECT AVG(salary) FROM employee)
WHERE emp_id = 5;

-- WARNING: Without WHERE, updates ALL rows!
UPDATE employee SET salary = 0;  -- DANGEROUS!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DELETE Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Delete specific rows
DELETE FROM employee
WHERE emp_id = 3;

-- Delete with condition
DELETE FROM employee
WHERE salary < 30000;

-- Delete with multiple conditions
DELETE FROM employee
WHERE dept = 'Temp' AND hire_date < '2020-01-01';

-- Delete with subquery
DELETE FROM employee
WHERE dept_id IN (
    SELECT dept_id FROM department
    WHERE location = 'Closed'
);

-- Delete all rows (keeps table structure)
DELETE FROM employee;

-- TRUNCATE vs DELETE:
TRUNCATE TABLE employee;  -- Faster, no rollback
DELETE FROM employee;     -- Slower, can rollback`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SELECT Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Basic SELECT
SELECT * FROM employee;

-- Select specific columns
SELECT name, salary FROM employee;

-- Select with alias
SELECT name AS employee_name,
       salary AS annual_salary
FROM employee;

-- Select with calculation
SELECT name, salary, salary * 12 AS yearly
FROM employee;

-- Select DISTINCT values
SELECT DISTINCT dept FROM employee;

-- Select with WHERE
SELECT * FROM employee
WHERE salary > 50000 AND dept = 'IT';

-- Select with ORDER BY
SELECT * FROM employee
ORDER BY salary DESC, name ASC;

-- Select with LIMIT
SELECT * FROM employee
ORDER BY salary DESC
LIMIT 5;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DML with Transactions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- DML operations can be rolled back

BEGIN TRANSACTION;

INSERT INTO account (id, balance) VALUES (1, 1000);
UPDATE account SET balance = balance - 500 WHERE id = 1;
INSERT INTO transfer_log (from_id, amount) VALUES (1, 500);

-- If all successful
COMMIT;

-- If error occurs
ROLLBACK;

-- Note: DDL operations (CREATE, DROP) auto-commit
-- DML operations can be part of transactions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DML Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Rollback</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">INSERT</td>
            <td className="p-3 border">Add new rows</td>
            <td className="p-3 border text-green-500">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">UPDATE</td>
            <td className="p-3 border">Modify existing rows</td>
            <td className="p-3 border text-green-500">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DELETE</td>
            <td className="p-3 border">Remove rows</td>
            <td className="p-3 border text-green-500">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SELECT</td>
            <td className="p-3 border">Query/retrieve data</td>
            <td className="p-3 border">N/A (read-only)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DML modifies data, not structure</li>
        <li>Always use WHERE with UPDATE/DELETE</li>
        <li>DML operations can be rolled back</li>
        <li>TRUNCATE is faster but cannot rollback</li>
        <li>Use transactions for multiple related operations</li>
      </ul>
    </div>
  </div>
);

export default SQLDML;
