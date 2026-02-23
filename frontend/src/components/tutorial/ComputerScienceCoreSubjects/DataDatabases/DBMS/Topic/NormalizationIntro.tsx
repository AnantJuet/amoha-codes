import React from "react";

const NormalizationIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Normalization</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Normalization is the process of organizing data in a database to reduce redundancy
      and improve data integrity. It involves decomposing tables into smaller, well-structured
      tables following specific rules called normal forms.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Normalize?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Problems with Unnormalized Data:

STUDENT_COURSE (Unnormalized)
+------+-------+--------+----------+------------+
| SID  | SName | CID    | CName    | Instructor |
+------+-------+--------+----------+------------+
| S1   | John  | C1     | DBMS     | Dr. Smith  |
| S1   | John  | C2     | OS       | Dr. Jones  |
| S2   | Alice | C1     | DBMS     | Dr. Smith  |
+------+-------+--------+----------+------------+

Problems:
1. Redundancy: "John" repeated, "DBMS, Dr. Smith" repeated
2. Update Anomaly: Change Dr. Smith requires multiple updates
3. Insert Anomaly: Can't add course without student
4. Delete Anomaly: Deleting last student loses course info`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Anomalies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Anomaly</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Insertion</td>
            <td className="p-3 border">Cannot insert data without other data</td>
            <td className="p-3 border">Can't add course without student</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Update</td>
            <td className="p-3 border">Updating one fact requires multiple updates</td>
            <td className="p-3 border">Change instructor in many rows</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deletion</td>
            <td className="p-3 border">Deleting data causes loss of other data</td>
            <td className="p-3 border">Delete student loses course info</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Normal Forms Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Normal Forms (each includes requirements of previous):

UNF (Unnormalized Form)
  |
  v
1NF (First Normal Form)
  |  - Atomic values
  |  - No repeating groups
  v
2NF (Second Normal Form)
  |  - 1NF + No partial dependencies
  v
3NF (Third Normal Form)
  |  - 2NF + No transitive dependencies
  v
BCNF (Boyce-Codd Normal Form)
  |  - Stronger version of 3NF
  v
4NF (Fourth Normal Form)
  |  - No multi-valued dependencies
  v
5NF (Fifth Normal Form)
     - No join dependencies

Most databases aim for 3NF or BCNF.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Functional Dependencies</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Functional Dependency (FD):
X → Y means X functionally determines Y

If two tuples have same X value, they must have same Y value.

Examples:
SID → SName         (Student ID determines Name)
CID → CName         (Course ID determines Course Name)
CID → Instructor    (Course ID determines Instructor)

In STUDENT_COURSE:
SID → SName
CID → CName, Instructor
(SID, CID) → Grade  (Composite key)

FDs are crucial for determining normal forms.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Normalization Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Step-by-Step Normalization:

1. Identify all functional dependencies
2. Find the candidate keys
3. Check for violations of each normal form
4. Decompose tables to fix violations
5. Verify no data loss (lossless join)
6. Verify FD preservation when possible

Goal: Eliminate redundancy while maintaining
      data integrity and query efficiency.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Normalized Result</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`After Normalization:

STUDENT (SID, SName)
+------+-------+
| SID  | SName |
+------+-------+
| S1   | John  |
| S2   | Alice |
+------+-------+

COURSE (CID, CName, Instructor)
+------+--------+------------+
| CID  | CName  | Instructor |
+------+--------+------------+
| C1   | DBMS   | Dr. Smith  |
| C2   | OS     | Dr. Jones  |
+------+--------+------------+

ENROLLMENT (SID, CID)
+------+------+
| SID  | CID  |
+------+------+
| S1   | C1   |
| S1   | C2   |
| S2   | C1   |
+------+------+

No redundancy! Each fact stored once.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Normalization reduces data redundancy</li>
        <li>Eliminates insertion, update, deletion anomalies</li>
        <li>Based on functional dependencies</li>
        <li>Higher normal forms are more normalized</li>
        <li>Most databases use 3NF or BCNF</li>
      </ul>
    </div>
  </div>
);

export default NormalizationIntro;
