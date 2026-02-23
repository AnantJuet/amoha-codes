import React from "react";

const DDLCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DDL Commands in SQL
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data Definition Language (DDL) commands are used to define, modify, and delete
      database structures such as tables, indexes, and schemas. DDL commands change
      the structure of the database, not the data itself.
    </p>

    <h2 className="text-3xl font-bold mt-8">Main DDL Commands</h2>
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
            <td className="p-3 border font-semibold">CREATE</td>
            <td className="p-3 border">Creates new database objects (tables, indexes, views)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ALTER</td>
            <td className="p-3 border">Modifies existing database objects</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DROP</td>
            <td className="p-3 border">Deletes database objects completely</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TRUNCATE</td>
            <td className="p-3 border">Removes all data from a table</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RENAME</td>
            <td className="p-3 border">Renames a database object</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">CREATE Command</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Create Database
CREATE DATABASE CompanyDB;

-- Create Table
CREATE TABLE Employee (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(255) UNIQUE,
    DeptID INT,
    Salary DECIMAL(10, 2),
    HireDate DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

-- Create Index
CREATE INDEX idx_emp_name ON Employee(Name);

-- Create View
CREATE VIEW HighEarners AS
SELECT * FROM Employee WHERE Salary > 50000;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ALTER Command</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Add new column
ALTER TABLE Employee ADD Phone VARCHAR(20);

-- Modify column data type
ALTER TABLE Employee MODIFY Salary DECIMAL(12, 2);

-- Drop column
ALTER TABLE Employee DROP COLUMN Phone;

-- Rename column
ALTER TABLE Employee RENAME COLUMN Name TO FullName;

-- Add constraint
ALTER TABLE Employee ADD CONSTRAINT chk_salary CHECK (Salary > 0);

-- Drop constraint
ALTER TABLE Employee DROP CONSTRAINT chk_salary;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DROP Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Drop Table (deletes structure and all data)
DROP TABLE Employee;

-- Drop if exists (prevents error)
DROP TABLE IF EXISTS Employee;

-- Drop Database
DROP DATABASE CompanyDB;

-- Drop Index
DROP INDEX idx_emp_name;

-- Drop View
DROP VIEW HighEarners;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TRUNCATE Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Remove all rows, keep structure
TRUNCATE TABLE Employee;

-- TRUNCATE vs DELETE:
-- TRUNCATE: Faster, cannot be rolled back (in most DBMS)
-- DELETE: Slower, can be rolled back, can use WHERE`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DDL Characteristics</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DDL commands are auto-committed in most databases</li>
        <li>They affect the database schema (structure)</li>
        <li>Changes are permanent and cannot be rolled back</li>
        <li>Require appropriate privileges to execute</li>
        <li>Stored in the data dictionary/system catalog</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>CREATE makes new database objects</li>
        <li>ALTER modifies existing structures</li>
        <li>DROP permanently removes objects</li>
        <li>TRUNCATE removes data but keeps structure</li>
        <li>DDL operations are typically auto-committed</li>
        <li>Always backup before major DDL changes</li>
      </ul>
    </div>
  </div>
);

export default DDLCommands;
