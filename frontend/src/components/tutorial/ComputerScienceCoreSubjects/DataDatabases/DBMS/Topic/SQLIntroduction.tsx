import React from "react";

const SQLIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL Introduction
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SQL (Structured Query Language) is the standard language for managing and manipulating
      relational databases. It allows users to create, read, update, and delete data, as well
      as manage database structures and control access permissions.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is SQL?</h2>
    <p className="leading-relaxed">
      SQL is a domain-specific language used for managing data in relational database management
      systems (RDBMS). It was developed at IBM in the 1970s and has since become the standard
      language for database interaction.
    </p>

    <h2 className="text-3xl font-bold mt-8">Categories of SQL Commands</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Full Form</th>
            <th className="p-3 border">Commands</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">DDL</td>
            <td className="p-3 border">Data Definition Language</td>
            <td className="p-3 border font-mono text-gray-900">CREATE, ALTER, DROP, TRUNCATE</td>
            <td className="p-3 border">Define database structure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DML</td>
            <td className="p-3 border">Data Manipulation Language</td>
            <td className="p-3 border font-mono text-gray-900">SELECT, INSERT, UPDATE, DELETE</td>
            <td className="p-3 border">Manipulate data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DCL</td>
            <td className="p-3 border">Data Control Language</td>
            <td className="p-3 border font-mono text-gray-900">GRANT, REVOKE</td>
            <td className="p-3 border">Control access permissions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TCL</td>
            <td className="p-3 border">Transaction Control Language</td>
            <td className="p-3 border font-mono text-gray-900">COMMIT, ROLLBACK, SAVEPOINT</td>
            <td className="p-3 border">Manage transactions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Basic SQL Syntax</h2>

    <h3 className="text-2xl font-semibold mt-4">CREATE TABLE</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT CHECK (age >= 18),
    department VARCHAR(50) DEFAULT 'General'
);`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">INSERT</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`INSERT INTO students (id, name, email, age, department)
VALUES (1, 'John Doe', 'john@email.com', 20, 'Computer Science');

-- Insert multiple rows
INSERT INTO students VALUES
    (2, 'Jane Smith', 'jane@email.com', 21, 'Mathematics'),
    (3, 'Bob Wilson', 'bob@email.com', 19, 'Physics');`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">SELECT</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Select all columns
SELECT * FROM students;

-- Select specific columns
SELECT name, email FROM students;

-- Select with condition
SELECT * FROM students WHERE age > 19;

-- Select with sorting
SELECT * FROM students ORDER BY name ASC;

-- Select with limit
SELECT * FROM students LIMIT 10;`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">UPDATE</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`UPDATE students
SET department = 'Data Science'
WHERE id = 1;`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">DELETE</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DELETE FROM students WHERE id = 3;

-- Delete all rows (use with caution!)
DELETE FROM students;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Clauses</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Clause</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">WHERE</td>
            <td className="p-3 border">Filter rows</td>
            <td className="p-3 border font-mono text-gray-900">WHERE age &gt; 18</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">ORDER BY</td>
            <td className="p-3 border">Sort results</td>
            <td className="p-3 border font-mono text-gray-900">ORDER BY name DESC</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">GROUP BY</td>
            <td className="p-3 border">Group rows</td>
            <td className="p-3 border font-mono text-gray-900">GROUP BY department</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">HAVING</td>
            <td className="p-3 border">Filter groups</td>
            <td className="p-3 border font-mono text-gray-900">HAVING COUNT(*) &gt; 5</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">JOIN</td>
            <td className="p-3 border">Combine tables</td>
            <td className="p-3 border font-mono text-gray-900">JOIN orders ON ...</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Aggregate Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SELECT
    COUNT(*) as total_students,
    AVG(age) as average_age,
    MIN(age) as youngest,
    MAX(age) as oldest,
    SUM(credits) as total_credits
FROM students;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>SQL is case-insensitive for keywords (SELECT = select)</li>
        <li>Statements end with semicolon (;)</li>
        <li>String values are enclosed in single quotes ('text')</li>
        <li>NULL represents missing or unknown values</li>
        <li>Comments: -- for single line, /* */ for multi-line</li>
        <li>Always use WHERE with UPDATE and DELETE to avoid affecting all rows</li>
      </ul>
    </div>
  </div>
);

export default SQLIntroduction;
