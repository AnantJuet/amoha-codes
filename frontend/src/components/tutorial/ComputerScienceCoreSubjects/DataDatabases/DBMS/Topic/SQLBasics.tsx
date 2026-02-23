import React from "react";

const SQLBasics: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">SQL Basics</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SQL (Structured Query Language) is the standard language for managing and manipulating
      relational databases. It's a declarative language that specifies WHAT data you want,
      not HOW to get it.
    </p>

    <h2 className="text-3xl font-bold mt-8">SQL Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SQL Components:

1. DDL (Data Definition Language)
   - CREATE, ALTER, DROP, TRUNCATE
   - Define database structure

2. DML (Data Manipulation Language)
   - SELECT, INSERT, UPDATE, DELETE
   - Manipulate data

3. DCL (Data Control Language)
   - GRANT, REVOKE
   - Control access permissions

4. TCL (Transaction Control Language)
   - COMMIT, ROLLBACK, SAVEPOINT
   - Manage transactions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Basic SELECT Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SELECT Statement Structure:

SELECT column1, column2, ...
FROM table_name
WHERE condition
ORDER BY column
LIMIT n;

Examples:

-- Select all columns
SELECT * FROM STUDENT;

-- Select specific columns
SELECT Name, Age FROM STUDENT;

-- Select with condition
SELECT * FROM STUDENT WHERE Age > 20;

-- Select with ordering
SELECT * FROM STUDENT ORDER BY Name ASC;

-- Select with limit
SELECT * FROM STUDENT LIMIT 5;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">WHERE Clause Operators</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operator</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">=, &lt;&gt;, &lt;, &gt;</td>
            <td className="p-3 border">Comparison</td>
            <td className="p-3 border">WHERE Age &gt; 20</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AND, OR, NOT</td>
            <td className="p-3 border">Logical</td>
            <td className="p-3 border">WHERE Age &gt; 20 AND Major = 'CS'</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">BETWEEN</td>
            <td className="p-3 border">Range</td>
            <td className="p-3 border">WHERE Age BETWEEN 18 AND 25</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">IN</td>
            <td className="p-3 border">List match</td>
            <td className="p-3 border">WHERE Major IN ('CS', 'IT')</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">LIKE</td>
            <td className="p-3 border">Pattern match</td>
            <td className="p-3 border">WHERE Name LIKE 'J%'</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">IS NULL</td>
            <td className="p-3 border">Null check</td>
            <td className="p-3 border">WHERE Email IS NULL</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">INSERT Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`INSERT INTO table_name (col1, col2, ...)
VALUES (val1, val2, ...);

Examples:

-- Insert single row
INSERT INTO STUDENT (SID, Name, Age)
VALUES ('S1', 'John', 20);

-- Insert with all columns (order matters)
INSERT INTO STUDENT
VALUES ('S2', 'Alice', 21, 'CS');

-- Insert multiple rows
INSERT INTO STUDENT (SID, Name, Age) VALUES
('S3', 'Bob', 22),
('S4', 'Carol', 20),
('S5', 'David', 23);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">UPDATE Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`UPDATE table_name
SET col1 = val1, col2 = val2, ...
WHERE condition;

Examples:

-- Update single row
UPDATE STUDENT SET Age = 21 WHERE SID = 'S1';

-- Update multiple columns
UPDATE STUDENT
SET Age = 22, Major = 'IT'
WHERE SID = 'S2';

-- Update multiple rows
UPDATE STUDENT SET Age = Age + 1 WHERE Major = 'CS';

-- WARNING: Without WHERE, updates ALL rows!
UPDATE STUDENT SET Age = 20;  -- Updates everyone!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DELETE Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DELETE FROM table_name
WHERE condition;

Examples:

-- Delete specific row
DELETE FROM STUDENT WHERE SID = 'S1';

-- Delete multiple rows
DELETE FROM STUDENT WHERE Age < 18;

-- Delete with complex condition
DELETE FROM STUDENT
WHERE Major = 'CS' AND Age > 25;

-- WARNING: Without WHERE, deletes ALL rows!
DELETE FROM STUDENT;  -- Empties table!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DISTINCT and Aliases</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- DISTINCT: Remove duplicates
SELECT DISTINCT Major FROM STUDENT;

-- Column Alias
SELECT Name AS StudentName, Age AS Years FROM STUDENT;

-- Table Alias
SELECT S.Name, S.Age
FROM STUDENT AS S
WHERE S.Age > 20;

-- Expression with Alias
SELECT Name, Age, Age + 5 AS FutureAge FROM STUDENT;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>SQL is declarative (specify what, not how)</li>
        <li>SELECT retrieves data from tables</li>
        <li>WHERE filters rows based on conditions</li>
        <li>Always use WHERE with UPDATE and DELETE</li>
        <li>Use DISTINCT to eliminate duplicates</li>
      </ul>
    </div>
  </div>
);

export default SQLBasics;
