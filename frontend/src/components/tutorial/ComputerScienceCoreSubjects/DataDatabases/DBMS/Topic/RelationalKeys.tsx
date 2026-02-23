import React from "react";

const RelationalKeys: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Keys in Relational Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Keys are fundamental to the relational model as they uniquely identify tuples and
      establish relationships between tables. Understanding different types of keys is
      essential for proper database design.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Keys</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Key Type</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Properties</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Super Key</td>
            <td className="p-3 border">Any set of attributes that uniquely identifies tuples</td>
            <td className="p-3 border">May contain extra attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Candidate Key</td>
            <td className="p-3 border">Minimal super key (no redundant attributes)</td>
            <td className="p-3 border">Unique + Minimal</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Primary Key</td>
            <td className="p-3 border">Chosen candidate key for the relation</td>
            <td className="p-3 border">Unique + Not NULL</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Alternate Key</td>
            <td className="p-3 border">Candidate keys not chosen as primary</td>
            <td className="p-3 border">Unique</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Foreign Key</td>
            <td className="p-3 border">References primary key of another table</td>
            <td className="p-3 border">Establishes relationships</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Composite Key</td>
            <td className="p-3 border">Key consisting of multiple attributes</td>
            <td className="p-3 border">Combined uniqueness</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Relationships</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Key Hierarchy:
                Super Keys
                    |
                    v
+-----------------------------------+
|  {A, B, C, D}  {A, B, C}  {A, B}  |  <- All super keys
|                                   |
|     +-------------------------+   |
|     |     Candidate Keys      |   |
|     |    {A}    {B, C}        |   |   <- Minimal super keys
|     |      |                  |   |
|     |      v                  |   |
|     |  Primary Key: {A}       |   |   <- Chosen candidate
|     |  Alternate Key: {B, C}  |   |   <- Other candidates
|     +-------------------------+   |
+-----------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: STUDENT Table</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`STUDENT Table:
+----------+--------+----------------+--------+
| Roll_No  | Name   | Email          | Phone  |
+----------+--------+----------------+--------+
| 101      | Alice  | alice@uni.edu  | 111111 |
| 102      | Bob    | bob@uni.edu    | 222222 |
| 103      | Carol  | carol@uni.edu  | 333333 |
+----------+--------+----------------+--------+

Super Keys:
- {Roll_No}
- {Email}
- {Phone}
- {Roll_No, Name}
- {Roll_No, Email}
- {Roll_No, Name, Email, Phone}
... and more combinations

Candidate Keys:
- {Roll_No} - unique and minimal
- {Email} - unique and minimal
- {Phone} - unique and minimal

Primary Key: Roll_No (chosen)
Alternate Keys: Email, Phone`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Finding Candidate Keys</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed font-semibold mb-2">Steps to find candidate keys:</p>
      <ol className="list-decimal list-inside leading-relaxed space-y-2">
        <li>Identify all attributes that appear only on the left side of FDs</li>
        <li>Identify attributes that appear only on the right side</li>
        <li>Identify attributes that appear on both sides</li>
        <li>Attributes only on left side must be in every candidate key</li>
        <li>Compute closure to verify candidate keys</li>
      </ol>
    </div>

    <h2 className="text-3xl font-bold mt-8">Primary Key Constraints</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Primary key constraints in SQL
CREATE TABLE Student (
    Roll_No INT PRIMARY KEY,     -- Single column PK
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE    -- Alternate key
);

-- Composite primary key
CREATE TABLE Enrollment (
    Student_ID INT,
    Course_ID INT,
    Semester VARCHAR(10),
    PRIMARY KEY (Student_ID, Course_ID, Semester)
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Every relation must have at least one candidate key</li>
        <li>Primary key values cannot be NULL</li>
        <li>A super key may contain redundant attributes; candidate keys cannot</li>
        <li>There can be multiple candidate keys but only one primary key</li>
        <li>Foreign keys establish referential integrity between relations</li>
        <li>Composite keys are used when single attribute cannot uniquely identify tuples</li>
      </ul>
    </div>
  </div>
);

export default RelationalKeys;
