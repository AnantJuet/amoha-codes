import React from "react";

const ThirdNormalForm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Third Normal Form (3NF)</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Third Normal Form (3NF) eliminates transitive dependencies. A relation is in 3NF
      if it's in 2NF and no non-prime attribute is transitively dependent on the primary key.
    </p>

    <h2 className="text-3xl font-bold mt-8">3NF Requirements</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Third Normal Form (3NF) Rules:

1. Must be in 2NF

2. No transitive dependencies
   - Non-prime attribute cannot depend on another non-prime attribute

Transitive Dependency:
If A → B and B → C, then A → C (transitively)
Where B is not a candidate key.

Formal Definition:
For every FD X → Y, at least one must be true:
- X is a superkey, OR
- Y is part of some candidate key (prime attribute)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transitive Dependency Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EMPLOYEE (In 2NF, NOT in 3NF):

+------+-------+--------+-----------+----------+
| EID  | Name  | DeptID | DeptName  | Manager  |
+------+-------+--------+-----------+----------+
| E1   | John  | D1     | IT        | Bob      |
| E2   | Alice | D1     | IT        | Bob      |
| E3   | Carol | D2     | HR        | Eve      |
+------+-------+--------+-----------+----------+

Primary Key: EID

Functional Dependencies:
EID → Name, DeptID, DeptName, Manager
DeptID → DeptName, Manager

Transitive Dependencies:
EID → DeptID → DeptName    (transitive!)
EID → DeptID → Manager     (transitive!)

Problem:
- DeptName and Manager depend on DeptID, not directly on EID
- DeptID is a non-prime attribute
- Redundancy: "IT, Bob" repeated for D1 employees`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Converting to 3NF</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Solution: Remove transitive dependencies

Step 1: Identify transitive dependencies
- EID → DeptID → DeptName (DeptName transitively depends on EID)
- EID → DeptID → Manager (Manager transitively depends on EID)

Step 2: Create separate table for transitive dependency

EMPLOYEE (EID, Name, DeptID)
+------+-------+--------+
| EID  | Name  | DeptID |
+------+-------+--------+
| E1   | John  | D1     |
| E2   | Alice | D1     |
| E3   | Carol | D2     |
+------+-------+--------+

DEPARTMENT (DeptID, DeptName, Manager)
+--------+-----------+----------+
| DeptID | DeptName  | Manager  |
+--------+-----------+----------+
| D1     | IT        | Bob      |
| D2     | HR        | Eve      |
+--------+-----------+----------+

Now in 3NF:
- EMPLOYEE: EID → Name, DeptID (no transitive)
- DEPARTMENT: DeptID → DeptName, Manager (DeptID is key)
- No redundancy!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3NF Decomposition Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`3NF Decomposition Steps:

1. Find minimal cover of FDs
2. For each FD X → Y in minimal cover:
   - Create table R(X, Y)
3. If no table contains a candidate key:
   - Create table with candidate key attributes
4. Remove redundant tables (subset of another)

Example:
R(A, B, C, D) with FDs: A → B, B → C, B → D

Step 1: Minimal cover: {A → B, B → C, B → D}
Step 2: Create tables:
   - R1(A, B) for A → B
   - R2(B, C) for B → C
   - R3(B, D) for B → D
Step 3: Candidate key is A (in R1) ✓
Step 4: No redundant tables

Result: R1(A, B), R2(B, C), R3(B, D)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2NF vs 3NF</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">2NF</th>
            <th className="p-3 border">3NF</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Eliminates</td>
            <td className="p-3 border">Partial dependencies</td>
            <td className="p-3 border">Transitive dependencies</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dependency Type</td>
            <td className="p-3 border">Non-prime on part of key</td>
            <td className="p-3 border">Non-prime on non-prime</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Requires</td>
            <td className="p-3 border">Composite key issue</td>
            <td className="p-3 border">Any key can have issue</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Another Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`BOOK (Not in 3NF):
+--------+-----------+----------+-----------+
| BookID | Title     | AuthorID | AuthorName|
+--------+-----------+----------+-----------+
| B1     | DBMS Book | A1       | Smith     |
| B2     | OS Guide  | A1       | Smith     |
| B3     | Networks  | A2       | Jones     |
+--------+-----------+----------+-----------+

Transitive: BookID → AuthorID → AuthorName

After 3NF:
BOOK (BookID, Title, AuthorID)
AUTHOR (AuthorID, AuthorName)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>3NF = 2NF + No transitive dependencies</li>
        <li>Transitive: A → B → C where B is not a key</li>
        <li>Non-prime attributes must depend only on keys</li>
        <li>3NF is sufficient for most applications</li>
        <li>Preserves lossless join and FD preservation</li>
      </ul>
    </div>
  </div>
);

export default ThirdNormalForm;
