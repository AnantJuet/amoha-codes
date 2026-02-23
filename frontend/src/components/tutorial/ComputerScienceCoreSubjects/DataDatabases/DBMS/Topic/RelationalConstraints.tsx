import React from "react";

const RelationalConstraints: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Relational Constraints</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Relational constraints are rules that ensure data integrity and consistency in a
      relational database. They define what values are allowed in the database and how
      tables relate to each other.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Constraints</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Constraint Hierarchy:

Relational Constraints
        |
        +-- Inherent (Model-Based)
        |       |-- Entity Integrity
        |       |-- Referential Integrity
        |
        +-- Schema-Based (Explicit)
        |       |-- Domain Constraints
        |       |-- Key Constraints
        |       |-- NOT NULL Constraints
        |       |-- UNIQUE Constraints
        |       |-- CHECK Constraints
        |
        +-- Application-Based (Semantic)
                |-- Business Rules
                |-- Triggers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Domain Constraints</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Domain Constraints:
Specify allowed values for an attribute.

CREATE TABLE Employee (
    EmpID INT,
    Name VARCHAR(50),
    Age INT CHECK (Age >= 18 AND Age <= 65),
    Salary DECIMAL(10,2) CHECK (Salary > 0),
    Gender CHAR(1) CHECK (Gender IN ('M', 'F'))
);

Violations:
- INSERT INTO Employee VALUES (1, 'John', 15, ...);  -- Age < 18
- INSERT INTO Employee VALUES (2, 'Alice', 25, -500, ...);  -- Negative salary
- INSERT INTO Employee VALUES (3, 'Bob', 30, 5000, 'X');  -- Invalid gender`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Key Constraints</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Key Constraints:
Ensure uniqueness of tuples.

CREATE TABLE Student (
    StudentID INT PRIMARY KEY,       -- Primary Key
    Email VARCHAR(100) UNIQUE,       -- Alternate Key
    Name VARCHAR(50)
);

Violations:
+------+-----------------+-------+
| 101  | john@email.com  | John  |
| 102  | alice@email.com | Alice |
| 101  | bob@email.com   | Bob   |  -- ERROR: Duplicate PK
| 103  | john@email.com  | Carol |  -- ERROR: Duplicate Email
+------+-----------------+-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Entity Integrity Constraint</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Entity Integrity:
Primary key cannot be NULL.

Rule: No attribute of a primary key can have NULL value.

CREATE TABLE Employee (
    EmpID INT PRIMARY KEY,  -- Cannot be NULL
    Name VARCHAR(50)
);

Violations:
INSERT INTO Employee VALUES (NULL, 'John');  -- ERROR!
INSERT INTO Employee (Name) VALUES ('Alice');  -- ERROR! (EmpID is NULL)

For Composite Primary Key:
CREATE TABLE Enrollment (
    StudentID INT,
    CourseID INT,
    PRIMARY KEY (StudentID, CourseID)  -- Neither can be NULL
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Referential Integrity Constraint</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Referential Integrity:
Foreign key must reference existing primary key or be NULL.

CREATE TABLE Department (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(50)
);

CREATE TABLE Employee (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(50),
    DeptID INT REFERENCES Department(DeptID)
);

DEPARTMENT              EMPLOYEE
+--------+-------+      +------+-------+--------+
| DeptID | Name  |      | EmpID| Name  | DeptID |
+--------+-------+      +------+-------+--------+
| D01    | IT    |      | 101  | John  | D01    | ✓
| D02    | HR    |      | 102  | Alice | D02    | ✓
+--------+-------+      | 103  | Bob   | D03    | ✗ ERROR!
                        | 104  | Carol | NULL   | ✓ (if allowed)
                        +------+-------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. NOT NULL Constraint</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NOT NULL Constraint:
Attribute must always have a value.

CREATE TABLE Student (
    SID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,  -- Required
    Email VARCHAR(100),         -- Optional (NULL allowed)
    GPA DECIMAL(3,2)           -- Optional
);

Valid:
INSERT INTO Student VALUES (1, 'John', NULL, NULL);

Invalid:
INSERT INTO Student VALUES (2, NULL, 'alice@email.com', 3.5);
-- ERROR: Name cannot be NULL`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Constraint Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Constraint</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Scope</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Domain</td>
            <td className="p-3 border">Valid values for attribute</td>
            <td className="p-3 border">Single attribute</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Key</td>
            <td className="p-3 border">Uniqueness of tuples</td>
            <td className="p-3 border">One or more attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Entity Integrity</td>
            <td className="p-3 border">PK cannot be NULL</td>
            <td className="p-3 border">Primary key</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Referential Integrity</td>
            <td className="p-3 border">FK references valid PK</td>
            <td className="p-3 border">Between relations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NOT NULL</td>
            <td className="p-3 border">Mandatory value</td>
            <td className="p-3 border">Single attribute</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Domain constraints restrict attribute values</li>
        <li>Key constraints ensure tuple uniqueness</li>
        <li>Entity integrity: Primary key cannot be NULL</li>
        <li>Referential integrity: FK must match existing PK or be NULL</li>
        <li>Constraints maintain data quality and consistency</li>
      </ul>
    </div>
  </div>
);

export default RelationalConstraints;
