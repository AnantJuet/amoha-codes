import React from "react";

const SQLDDL: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">SQL DDL - Data Definition Language</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data Definition Language (DDL) commands are used to define and manage the
      structure of database objects like tables, indexes, and schemas. DDL commands
      include CREATE, ALTER, DROP, and TRUNCATE.
    </p>

    <h2 className="text-3xl font-bold mt-8">DDL Commands Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DDL Commands:

CREATE    - Create new database objects
ALTER     - Modify existing objects
DROP      - Delete objects completely
TRUNCATE  - Remove all data from table

Key Characteristics:
- Auto-commit: Changes are permanent immediately
- Cannot rollback DDL operations
- Affect structure, not data (except TRUNCATE)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CREATE Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Create Database
CREATE DATABASE company;
USE company;

-- Create Table
CREATE TABLE employee (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    dept_id INT,
    salary DECIMAL(10,2) DEFAULT 0,
    hire_date DATE,
    FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

-- Create Table from existing table
CREATE TABLE emp_backup AS
SELECT * FROM employee;

-- Create Table with same structure only
CREATE TABLE emp_template AS
SELECT * FROM employee WHERE 1=0;

-- Create Index
CREATE INDEX idx_emp_name ON employee(name);
CREATE UNIQUE INDEX idx_emp_email ON employee(email);

-- Create View
CREATE VIEW high_salary AS
SELECT * FROM employee WHERE salary > 50000;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ALTER Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Add new column
ALTER TABLE employee
ADD phone VARCHAR(15);

-- Add multiple columns
ALTER TABLE employee
ADD (address VARCHAR(200), city VARCHAR(50));

-- Modify column datatype
ALTER TABLE employee
MODIFY phone VARCHAR(20);

-- Rename column
ALTER TABLE employee
RENAME COLUMN phone TO contact_no;

-- Drop column
ALTER TABLE employee
DROP COLUMN address;

-- Add constraint
ALTER TABLE employee
ADD CONSTRAINT chk_salary CHECK (salary >= 0);

-- Drop constraint
ALTER TABLE employee
DROP CONSTRAINT chk_salary;

-- Add primary key
ALTER TABLE employee
ADD PRIMARY KEY (emp_id);

-- Add foreign key
ALTER TABLE employee
ADD FOREIGN KEY (dept_id) REFERENCES department(dept_id);

-- Rename table
ALTER TABLE employee
RENAME TO staff;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DROP Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Drop Table (removes structure and data)
DROP TABLE employee;

-- Drop Table if exists
DROP TABLE IF EXISTS employee;

-- Drop Database
DROP DATABASE company;

-- Drop Index
DROP INDEX idx_emp_name ON employee;

-- Drop View
DROP VIEW high_salary;

-- Drop with CASCADE (drop dependent objects)
DROP TABLE department CASCADE;

-- Drop with RESTRICT (fail if dependencies exist)
DROP TABLE department RESTRICT;

WARNING: DROP is permanent and cannot be undone!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TRUNCATE Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Remove all rows from table
TRUNCATE TABLE employee;

-- TRUNCATE vs DELETE:

TRUNCATE TABLE employee;
- Faster (deallocates pages)
- Cannot rollback
- Resets auto-increment
- Cannot use WHERE
- DDL command

DELETE FROM employee;
- Slower (row by row)
- Can rollback
- Keeps auto-increment
- Can use WHERE
- DML command

-- Use TRUNCATE when:
-- - You want to remove ALL data quickly
-- - You don't need to rollback
-- - You want to reset auto-increment`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Data Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Data Type</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold" rowSpan={4}>Numeric</td>
            <td className="p-3 border">INT</td>
            <td className="p-3 border">Integer (-2B to 2B)</td>
          </tr>
          <tr>
            <td className="p-3 border">BIGINT</td>
            <td className="p-3 border">Large integer</td>
          </tr>
          <tr>
            <td className="p-3 border">DECIMAL(p,s)</td>
            <td className="p-3 border">Exact decimal</td>
          </tr>
          <tr>
            <td className="p-3 border">FLOAT</td>
            <td className="p-3 border">Floating point</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold" rowSpan={3}>String</td>
            <td className="p-3 border">CHAR(n)</td>
            <td className="p-3 border">Fixed-length string</td>
          </tr>
          <tr>
            <td className="p-3 border">VARCHAR(n)</td>
            <td className="p-3 border">Variable-length string</td>
          </tr>
          <tr>
            <td className="p-3 border">TEXT</td>
            <td className="p-3 border">Long text</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold" rowSpan={3}>Date/Time</td>
            <td className="p-3 border">DATE</td>
            <td className="p-3 border">Date only</td>
          </tr>
          <tr>
            <td className="p-3 border">TIME</td>
            <td className="p-3 border">Time only</td>
          </tr>
          <tr>
            <td className="p-3 border">DATETIME</td>
            <td className="p-3 border">Date and time</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">DDL Summary</h2>
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
            <td className="p-3 border font-semibold">CREATE</td>
            <td className="p-3 border">Create new objects</td>
            <td className="p-3 border text-red-500">No</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ALTER</td>
            <td className="p-3 border">Modify objects</td>
            <td className="p-3 border text-red-500">No</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DROP</td>
            <td className="p-3 border">Delete objects</td>
            <td className="p-3 border text-red-500">No</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TRUNCATE</td>
            <td className="p-3 border">Remove all data</td>
            <td className="p-3 border text-red-500">No</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DDL defines database structure</li>
        <li>DDL commands auto-commit (no rollback)</li>
        <li>DROP removes object completely</li>
        <li>TRUNCATE is faster than DELETE for all rows</li>
        <li>ALTER can add, modify, or drop columns</li>
      </ul>
    </div>
  </div>
);

export default SQLDDL;
