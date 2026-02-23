import React from "react";

const AlterStatement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL ALTER Statement
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The ALTER statement is used to modify the structure of existing database objects.
      It can add, modify, or delete columns, constraints, and other properties of tables.
    </p>

    <h2 className="text-3xl font-bold mt-8">ALTER TABLE Operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">ADD COLUMN</td>
            <td className="p-3 border">Adds a new column to the table</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DROP COLUMN</td>
            <td className="p-3 border">Removes a column from the table</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MODIFY/ALTER</td>
            <td className="p-3 border">Changes column data type or constraints</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RENAME</td>
            <td className="p-3 border">Renames column or table</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ADD CONSTRAINT</td>
            <td className="p-3 border">Adds a new constraint</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DROP CONSTRAINT</td>
            <td className="p-3 border">Removes an existing constraint</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Adding Columns</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Add single column
ALTER TABLE Employee ADD Phone VARCHAR(20);

-- Add column with constraint
ALTER TABLE Employee ADD Email VARCHAR(100) UNIQUE NOT NULL;

-- Add column with default value
ALTER TABLE Employee ADD IsActive BOOLEAN DEFAULT TRUE;

-- Add multiple columns (syntax varies by DBMS)
ALTER TABLE Employee
ADD COLUMN MiddleName VARCHAR(50),
ADD COLUMN DateOfBirth DATE;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modifying Columns</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- MySQL syntax
ALTER TABLE Employee MODIFY Salary DECIMAL(12, 2);

-- SQL Server syntax
ALTER TABLE Employee ALTER COLUMN Salary DECIMAL(12, 2);

-- PostgreSQL syntax
ALTER TABLE Employee ALTER COLUMN Salary TYPE DECIMAL(12, 2);

-- Change to NOT NULL
ALTER TABLE Employee MODIFY Name VARCHAR(100) NOT NULL;

-- Set default value
ALTER TABLE Employee ALTER Salary SET DEFAULT 30000;

-- Drop default value
ALTER TABLE Employee ALTER Salary DROP DEFAULT;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dropping Columns</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Drop single column
ALTER TABLE Employee DROP COLUMN Phone;

-- Drop multiple columns (MySQL)
ALTER TABLE Employee
DROP COLUMN MiddleName,
DROP COLUMN TempField;

-- Drop if exists (PostgreSQL)
ALTER TABLE Employee DROP COLUMN IF EXISTS OldColumn;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Renaming</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Rename table
ALTER TABLE Employee RENAME TO Staff;

-- Rename column (varies by DBMS)
-- MySQL
ALTER TABLE Employee RENAME COLUMN Name TO FullName;

-- SQL Server
EXEC sp_rename 'Employee.Name', 'FullName', 'COLUMN';

-- PostgreSQL
ALTER TABLE Employee RENAME COLUMN Name TO FullName;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Managing Constraints</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Add primary key
ALTER TABLE Employee ADD PRIMARY KEY (EmpID);

-- Add foreign key
ALTER TABLE Employee
ADD CONSTRAINT fk_dept
FOREIGN KEY (DeptID) REFERENCES Department(DeptID);

-- Add unique constraint
ALTER TABLE Employee ADD CONSTRAINT uk_email UNIQUE (Email);

-- Add check constraint
ALTER TABLE Employee
ADD CONSTRAINT chk_salary CHECK (Salary >= 0);

-- Drop constraint
ALTER TABLE Employee DROP CONSTRAINT fk_dept;

-- Drop primary key
ALTER TABLE Employee DROP PRIMARY KEY;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Important Considerations</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Backup data before making structural changes</li>
        <li>Some alterations may require table recreation</li>
        <li>Adding NOT NULL to column with NULL values fails</li>
        <li>Syntax varies between database systems</li>
        <li>Large tables may lock during ALTER operations</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ALTER modifies existing table structure</li>
        <li>Can add, modify, drop columns and constraints</li>
        <li>Syntax varies significantly between DBMS vendors</li>
        <li>Always test ALTER statements in development first</li>
        <li>Consider impact on existing data and applications</li>
        <li>Some changes may require downtime for large tables</li>
      </ul>
    </div>
  </div>
);

export default AlterStatement;
