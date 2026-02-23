import React from "react";

const AlternateCompositeKey: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Alternate and Composite Keys
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Alternate keys and composite keys are important concepts in database design that
      help ensure data integrity and provide additional ways to uniquely identify records.
    </p>

    <h2 className="text-3xl font-bold mt-8">Alternate Key</h2>
    <p className="leading-relaxed mt-2">
      An alternate key is any candidate key that is not chosen as the primary key. When a
      relation has multiple candidate keys, one is selected as the primary key and the
      rest become alternate keys.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">Properties of Alternate Key:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Uniquely identifies tuples (like candidate keys)</li>
        <li>Minimal - no redundant attributes</li>
        <li>Not selected as the primary key</li>
        <li>Often implemented with UNIQUE constraint in SQL</li>
      </ul>
    </div>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EMPLOYEE Table:
+--------+-------------+------------------+--------+
| Emp_ID | SSN         | Email            | Name   |
+--------+-------------+------------------+--------+
| E001   | 123-45-6789 | john@company.com | John   |
| E002   | 234-56-7890 | jane@company.com | Jane   |
| E003   | 345-67-8901 | bob@company.com  | Bob    |
+--------+-------------+------------------+--------+

Candidate Keys: {Emp_ID}, {SSN}, {Email}

Primary Key: Emp_ID (chosen)
Alternate Keys: SSN, Email (not chosen as primary)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementing Alternate Keys in SQL</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CREATE TABLE Employee (
    Emp_ID VARCHAR(10) PRIMARY KEY,
    SSN CHAR(11) UNIQUE NOT NULL,      -- Alternate Key
    Email VARCHAR(100) UNIQUE NOT NULL, -- Alternate Key
    Name VARCHAR(50) NOT NULL
);

-- Alternate keys enforce uniqueness
-- Unlike primary key, UNIQUE can be NULL (unless NOT NULL specified)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Composite Key</h2>
    <p className="leading-relaxed mt-2">
      A composite key consists of two or more attributes that together uniquely identify
      a tuple. No single attribute in the composite key can uniquely identify tuples alone.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">Properties of Composite Key:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Consists of multiple attributes</li>
        <li>Combined values must be unique</li>
        <li>Individual attributes may have duplicate values</li>
        <li>Used when single attribute cannot provide uniqueness</li>
      </ul>
    </div>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ENROLLMENT Table:
+------------+-----------+----------+-------+
| Student_ID | Course_ID | Semester | Grade |
+------------+-----------+----------+-------+
| S001       | C101      | Fall2024 | A     |
| S001       | C102      | Fall2024 | B     |
| S002       | C101      | Fall2024 | A     |
| S001       | C101      | Spr2025  | A+    |
+------------+-----------+----------+-------+

Individual columns have duplicates:
- Student_ID: S001 appears 3 times
- Course_ID: C101 appears 3 times
- Semester: Fall2024 appears 3 times

Composite Key: (Student_ID, Course_ID, Semester)
- Combined values are unique for each row`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementing Composite Keys in SQL</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Composite Primary Key
CREATE TABLE Enrollment (
    Student_ID VARCHAR(10),
    Course_ID VARCHAR(10),
    Semester VARCHAR(20),
    Grade CHAR(2),
    PRIMARY KEY (Student_ID, Course_ID, Semester)
);

-- Composite Foreign Key
CREATE TABLE Grade_Report (
    Report_ID INT PRIMARY KEY,
    Student_ID VARCHAR(10),
    Course_ID VARCHAR(10),
    Semester VARCHAR(20),
    Comments TEXT,
    FOREIGN KEY (Student_ID, Course_ID, Semester)
        REFERENCES Enrollment(Student_ID, Course_ID, Semester)
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Composite Keys</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Many-to-Many relationships</td>
            <td className="p-3 border">Student-Course enrollment</td>
          </tr>
          <tr>
            <td className="p-3 border">Time-based records</td>
            <td className="p-3 border">Employee attendance (Emp_ID + Date)</td>
          </tr>
          <tr>
            <td className="p-3 border">Multi-dimensional data</td>
            <td className="p-3 border">Sales (Product + Region + Year)</td>
          </tr>
          <tr>
            <td className="p-3 border">Weak entities</td>
            <td className="p-3 border">Order_Items (Order_ID + Item_No)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Composite Key vs Surrogate Key</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Option 1: Composite Key (Natural)
CREATE TABLE Enrollment (
    Student_ID VARCHAR(10),
    Course_ID VARCHAR(10),
    Semester VARCHAR(20),
    Grade CHAR(2),
    PRIMARY KEY (Student_ID, Course_ID, Semester)
);

Option 2: Surrogate Key (Artificial)
CREATE TABLE Enrollment (
    Enrollment_ID INT AUTO_INCREMENT PRIMARY KEY,
    Student_ID VARCHAR(10) NOT NULL,
    Course_ID VARCHAR(10) NOT NULL,
    Semester VARCHAR(20) NOT NULL,
    Grade CHAR(2),
    UNIQUE (Student_ID, Course_ID, Semester)
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Alternate keys are candidate keys not chosen as primary key</li>
        <li>Composite keys use multiple attributes for uniqueness</li>
        <li>Use UNIQUE constraint to implement alternate keys</li>
        <li>Composite keys are common in junction tables for M:N relationships</li>
        <li>Consider surrogate keys for simpler foreign key references</li>
        <li>Both alternate and composite keys can be used for indexing</li>
      </ul>
    </div>
  </div>
);

export default AlternateCompositeKey;
