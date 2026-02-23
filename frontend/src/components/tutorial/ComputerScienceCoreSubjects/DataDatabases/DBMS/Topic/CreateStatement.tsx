import React from "react";

const CreateStatement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL CREATE Statement
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The CREATE statement is used to create new database objects including databases,
      tables, indexes, views, and more. It is one of the most fundamental DDL commands.
    </p>

    <h2 className="text-3xl font-bold mt-8">CREATE DATABASE</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Basic syntax
CREATE DATABASE database_name;

-- With options (MySQL)
CREATE DATABASE CompanyDB
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Create if not exists
CREATE DATABASE IF NOT EXISTS CompanyDB;

-- Use the database
USE CompanyDB;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CREATE TABLE</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Basic syntax
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    ...
    table_constraints
);

-- Example with various constraints
CREATE TABLE Employee (
    EmpID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    Phone VARCHAR(20),
    DeptID INT,
    Salary DECIMAL(10, 2) CHECK (Salary > 0),
    HireDate DATE DEFAULT CURRENT_DATE,
    IsActive BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Column Constraints</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Constraint</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">PRIMARY KEY</td>
            <td className="p-3 border">Uniquely identifies each row</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">FOREIGN KEY</td>
            <td className="p-3 border">References primary key of another table</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">UNIQUE</td>
            <td className="p-3 border">Ensures all values are different</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NOT NULL</td>
            <td className="p-3 border">Prevents NULL values</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CHECK</td>
            <td className="p-3 border">Validates data against condition</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DEFAULT</td>
            <td className="p-3 border">Sets default value if none provided</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">CREATE INDEX</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Basic index
CREATE INDEX idx_lastname ON Employee(LastName);

-- Unique index
CREATE UNIQUE INDEX idx_email ON Employee(Email);

-- Composite index
CREATE INDEX idx_name ON Employee(LastName, FirstName);

-- Descending index
CREATE INDEX idx_salary ON Employee(Salary DESC);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CREATE VIEW</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Basic view
CREATE VIEW EmployeeDetails AS
SELECT e.EmpID, e.FirstName, e.LastName, d.DeptName
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID;

-- View with WHERE clause
CREATE VIEW HighEarners AS
SELECT * FROM Employee
WHERE Salary > 75000;

-- View with check option
CREATE VIEW ActiveEmployees AS
SELECT * FROM Employee
WHERE IsActive = TRUE
WITH CHECK OPTION;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CREATE TABLE AS SELECT</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Create table from existing data
CREATE TABLE EmployeeBackup AS
SELECT * FROM Employee;

-- Create with subset of columns
CREATE TABLE EmployeeNames AS
SELECT EmpID, FirstName, LastName
FROM Employee;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>CREATE is a DDL command that makes new objects</li>
        <li>Table names should be meaningful and follow naming conventions</li>
        <li>Always define appropriate constraints for data integrity</li>
        <li>Use IF NOT EXISTS to prevent errors</li>
        <li>Indexes improve query performance</li>
        <li>Views provide abstraction and security</li>
      </ul>
    </div>
  </div>
);

export default CreateStatement;
