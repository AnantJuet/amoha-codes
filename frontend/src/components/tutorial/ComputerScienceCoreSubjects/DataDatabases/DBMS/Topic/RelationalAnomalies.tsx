import React from "react";

const RelationalAnomalies: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Relational Model Anomalies
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Anomalies are problems that occur in poorly designed databases due to data redundancy.
      They can lead to data inconsistency during insert, update, and delete operations.
      Understanding anomalies is crucial for proper database normalization.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Anomalies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Anomaly Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Problem</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Insertion</td>
            <td className="p-3 border">Cannot insert data without other unrelated data</td>
            <td className="p-3 border">Loss of information</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Update</td>
            <td className="p-3 border">Must update multiple rows for single change</td>
            <td className="p-3 border">Inconsistency risk</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deletion</td>
            <td className="p-3 border">Deleting data removes unrelated information</td>
            <td className="p-3 border">Loss of information</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Unnormalized Table</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`STUDENT_COURSE Table (Poorly Designed):
+------+--------+------+--------+-----------+-------------+
| S_ID | S_Name | C_ID | C_Name | Instructor| Dept        |
+------+--------+------+--------+-----------+-------------+
| S001 | Alice  | C101 | DBMS   | Prof. A   | Computer Sc |
| S001 | Alice  | C102 | OS     | Prof. B   | Computer Sc |
| S002 | Bob    | C101 | DBMS   | Prof. A   | Computer Sc |
| S003 | Carol  | C103 | Math   | Prof. C   | Mathematics |
+------+--------+------+--------+-----------+-------------+

Problems in this design:
- Student info (S_Name) repeated for each course
- Course info (C_Name, Instructor, Dept) repeated for each student
- High data redundancy`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Insertion Anomaly</h2>
    <p className="leading-relaxed mt-2">
      Occurs when you cannot insert a record without inserting additional unrelated data.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Problem: Want to add a new course C104 "Networks" taught by Prof. D

Cannot insert because:
- S_ID is part of the primary key
- No student has enrolled yet
- Would need to insert NULL for student data

Attempted Insert:
INSERT INTO STUDENT_COURSE (S_ID, S_Name, C_ID, C_Name, Instructor, Dept)
VALUES (NULL, NULL, 'C104', 'Networks', 'Prof. D', 'Computer Sc');
-- FAILS: S_ID cannot be NULL (part of primary key)

Solution: Separate COURSE table to store course info independently`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Update Anomaly</h2>
    <p className="leading-relaxed mt-2">
      Occurs when updating data requires multiple rows to be changed, risking inconsistency.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Problem: Change instructor for DBMS course from Prof. A to Prof. X

Must update multiple rows:
+------+--------+------+--------+-----------+-------------+
| S_ID | S_Name | C_ID | C_Name | Instructor| Dept        |
+------+--------+------+--------+-----------+-------------+
| S001 | Alice  | C101 | DBMS   | Prof. X   | Computer Sc | <- Update
| S002 | Bob    | C101 | DBMS   | Prof. X   | Computer Sc | <- Update
+------+--------+------+--------+-----------+-------------+

Risk: If we miss one row:
+------+--------+------+--------+-----------+-------------+
| S001 | Alice  | C101 | DBMS   | Prof. X   | Computer Sc | <- Updated
| S002 | Bob    | C101 | DBMS   | Prof. A   | Computer Sc | <- MISSED!
+------+--------+------+--------+-----------+-------------+
Now database is INCONSISTENT!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Deletion Anomaly</h2>
    <p className="leading-relaxed mt-2">
      Occurs when deleting data unintentionally removes other useful information.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Problem: Carol (S003) drops out of college

DELETE FROM STUDENT_COURSE WHERE S_ID = 'S003';

Before Delete:
+------+--------+------+--------+-----------+-------------+
| S003 | Carol  | C103 | Math   | Prof. C   | Mathematics |
+------+--------+------+--------+-----------+-------------+

After Delete:
- Carol's record is removed ✓
- BUT we also LOST all information about:
  - Course C103 (Math)
  - Prof. C
  - Mathematics department

This is DELETION ANOMALY - we lost unrelated information!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Solution: Normalization</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Normalized Design (Split into separate tables):

STUDENT Table:
+------+--------+
| S_ID | S_Name |
+------+--------+
| S001 | Alice  |
| S002 | Bob    |
| S003 | Carol  |
+------+--------+

COURSE Table:
+------+--------+-----------+-------------+
| C_ID | C_Name | Instructor| Dept        |
+------+--------+-----------+-------------+
| C101 | DBMS   | Prof. A   | Computer Sc |
| C102 | OS     | Prof. B   | Computer Sc |
| C103 | Math   | Prof. C   | Mathematics |
+------+--------+-----------+-------------+

ENROLLMENT Table:
+------+------+
| S_ID | C_ID |
+------+------+
| S001 | C101 |
| S001 | C102 |
| S002 | C101 |
| S003 | C103 |
+------+------+

Now:
- Can add course without students (no insertion anomaly)
- Update instructor in one place (no update anomaly)
- Delete student without losing course info (no deletion anomaly)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Anomalies arise from poor database design and data redundancy</li>
        <li>Insertion anomaly: Cannot add data without unrelated data</li>
        <li>Update anomaly: Multiple updates needed, risking inconsistency</li>
        <li>Deletion anomaly: Removing data causes loss of other information</li>
        <li>Normalization eliminates anomalies by decomposing tables</li>
        <li>Proper design separates independent entities into their own tables</li>
      </ul>
    </div>
  </div>
);

export default RelationalAnomalies;
