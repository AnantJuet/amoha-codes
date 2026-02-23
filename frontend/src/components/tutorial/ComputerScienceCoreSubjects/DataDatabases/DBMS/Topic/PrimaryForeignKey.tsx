import React from "react";

const PrimaryForeignKey: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Primary Key and Foreign Key
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Primary keys and foreign keys are essential concepts in relational databases that
      ensure data integrity and establish relationships between tables. They form the
      backbone of the relational model.
    </p>

    <h2 className="text-3xl font-bold mt-8">Primary Key</h2>
    <p className="leading-relaxed mt-2">
      A primary key is a candidate key chosen by the database designer to uniquely identify
      each tuple in a relation. Every table should have exactly one primary key.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">Properties of Primary Key:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Uniqueness:</strong> No two tuples can have the same primary key value</li>
        <li><strong>Not NULL:</strong> Primary key values cannot be NULL</li>
        <li><strong>Immutability:</strong> Primary key values should rarely change</li>
        <li><strong>Minimality:</strong> Uses minimum attributes needed for uniqueness</li>
      </ul>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Primary Key in SQL
CREATE TABLE Student (
    Student_ID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE
);

-- Composite Primary Key
CREATE TABLE Enrollment (
    Student_ID INT,
    Course_ID INT,
    Enrollment_Date DATE,
    PRIMARY KEY (Student_ID, Course_ID)
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Foreign Key</h2>
    <p className="leading-relaxed mt-2">
      A foreign key is a set of attributes in one relation that references the primary key
      of another (or the same) relation. It establishes a link between two tables.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">Properties of Foreign Key:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Referential Integrity:</strong> Values must exist in referenced table or be NULL</li>
        <li><strong>Can be NULL:</strong> Unless explicitly constrained</li>
        <li><strong>Can have duplicates:</strong> Multiple tuples can reference same value</li>
        <li><strong>Creates relationships:</strong> Links parent and child tables</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Relationship Between Tables</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DEPARTMENT Table (Parent):
+--------+-------------+
| Dept_ID| Dept_Name   |  <- Dept_ID is PRIMARY KEY
+--------+-------------+
| D001   | Sales       |
| D002   | IT          |
| D003   | HR          |
+--------+-------------+

EMPLOYEE Table (Child):
+--------+--------+--------+
| Emp_ID | Name   | Dept_ID|  <- Dept_ID is FOREIGN KEY
+--------+--------+--------+     referencing DEPARTMENT
| E001   | John   | D001   |
| E002   | Jane   | D002   |
| E003   | Bob    | D001   |
| E004   | Alice  | NULL   |  <- NULL allowed (no department)
+--------+--------+--------+

Referential Integrity:
- E001's Dept_ID (D001) exists in DEPARTMENT ✓
- Cannot insert Dept_ID = 'D999' in EMPLOYEE (doesn't exist)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Foreign Key Actions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">ON DELETE</th>
            <th className="p-3 border">ON UPDATE</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">CASCADE</td>
            <td className="p-3 border">Delete child rows</td>
            <td className="p-3 border">Update child foreign keys</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SET NULL</td>
            <td className="p-3 border">Set foreign key to NULL</td>
            <td className="p-3 border">Set foreign key to NULL</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SET DEFAULT</td>
            <td className="p-3 border">Set to default value</td>
            <td className="p-3 border">Set to default value</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RESTRICT</td>
            <td className="p-3 border">Prevent deletion</td>
            <td className="p-3 border">Prevent update</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NO ACTION</td>
            <td className="p-3 border">Check at end of statement</td>
            <td className="p-3 border">Check at end of statement</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Foreign Key Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CREATE TABLE Employee (
    Emp_ID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Dept_ID INT,
    FOREIGN KEY (Dept_ID)
        REFERENCES Department(Dept_ID)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- Self-referencing Foreign Key
CREATE TABLE Employee (
    Emp_ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Manager_ID INT,
    FOREIGN KEY (Manager_ID)
        REFERENCES Employee(Emp_ID)
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Primary Key vs Foreign Key</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Primary Key</th>
            <th className="p-3 border">Foreign Key</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Purpose</td>
            <td className="p-3 border">Identifies tuples uniquely</td>
            <td className="p-3 border">References another table</td>
          </tr>
          <tr>
            <td className="p-3 border">NULL Values</td>
            <td className="p-3 border">Not allowed</td>
            <td className="p-3 border">Allowed (unless constrained)</td>
          </tr>
          <tr>
            <td className="p-3 border">Duplicates</td>
            <td className="p-3 border">Not allowed</td>
            <td className="p-3 border">Allowed</td>
          </tr>
          <tr>
            <td className="p-3 border">Count per table</td>
            <td className="p-3 border">Exactly one</td>
            <td className="p-3 border">Zero or more</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Primary key uniquely identifies each row in a table</li>
        <li>Foreign key creates relationships between tables</li>
        <li>Referential integrity ensures foreign key values exist in parent table</li>
        <li>Use CASCADE carefully - it can delete/update many records</li>
        <li>A foreign key can reference a primary key or unique key</li>
        <li>Self-referencing foreign keys create hierarchical relationships</li>
      </ul>
    </div>
  </div>
);

export default PrimaryForeignKey;
