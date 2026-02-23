import React from "react";

const RenameOperation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rename Operation (ρ)</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Rename operation allows changing the name of a relation or its attributes.
      It's essential for self-joins and disambiguating attribute names in complex queries.
    </p>

    <h2 className="text-3xl font-bold mt-8">Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Rename Syntax:

1. Rename relation only:
   ρ NewName (R)

2. Rename relation and attributes:
   ρ NewName(attr1, attr2, ...) (R)

3. Rename attributes only:
   ρ (attr1, attr2, ...) (R)

Where:
- ρ (rho) is the rename operator
- NewName is the new relation name
- attr1, attr2, ... are new attribute names`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Basic Rename Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original:
STUDENT
+------+-------+------+
| SID  | Name  | Age  |
+------+-------+------+
| S1   | John  | 20   |
| S2   | Alice | 21   |
+------+-------+------+

Rename relation:
ρ LEARNER (STUDENT)

LEARNER
+------+-------+------+
| SID  | Name  | Age  |
+------+-------+------+
| S1   | John  | 20   |
| S2   | Alice | 21   |
+------+-------+------+

Rename relation and attributes:
ρ LEARNER(ID, FullName, Years) (STUDENT)

LEARNER
+------+----------+-------+
| ID   | FullName | Years |
+------+----------+-------+
| S1   | John     | 20    |
| S2   | Alice    | 21    |
+------+----------+-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Self-Join Using Rename</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Self-Join: Joining a table with itself

EMPLOYEE
+------+--------+-----------+
| EID  | Name   | ManagerID |
+------+--------+-----------+
| E1   | John   | E3        |
| E2   | Alice  | E3        |
| E3   | Bob    | NULL      |
| E4   | Carol  | E1        |
+------+--------+-----------+

Query: Find employee names and their manager names

Need to join EMPLOYEE with itself:
- Cannot use EMPLOYEE ⋈ EMPLOYEE directly (ambiguous)

Solution with Rename:
ρ EMP (EMPLOYEE) ⋈ EMP.ManagerID = MGR.EID ρ MGR (EMPLOYEE)

Step 1: Create aliases
EMP = ρ EMP (EMPLOYEE)
MGR = ρ MGR (EMPLOYEE)

Step 2: Join on EMP.ManagerID = MGR.EID

Result:
+----------+----------+----------+----------+
| EMP.EID  | EMP.Name | MGR.EID  | MGR.Name |
+----------+----------+----------+----------+
| E1       | John     | E3       | Bob      |
| E2       | Alice    | E3       | Bob      |
| E4       | Carol    | E1       | John     |
+----------+----------+----------+----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Equivalent</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SQL uses AS for renaming (aliases):

-- Rename table
SELECT * FROM STUDENT AS LEARNER;

-- Rename columns
SELECT SID AS ID, Name AS FullName FROM STUDENT;

-- Self-join with aliases
SELECT EMP.Name AS Employee, MGR.Name AS Manager
FROM EMPLOYEE AS EMP
JOIN EMPLOYEE AS MGR ON EMP.ManagerID = MGR.EID;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Disambiguating Attributes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`When two relations have same attribute names:

STUDENT              INSTRUCTOR
+------+-------+     +------+-------+
| ID   | Name  |     | ID   | Name  |
+------+-------+     +------+-------+
| S1   | John  |     | I1   | Dr.X  |
+------+-------+     +------+-------+

Cartesian Product creates ambiguity:
STUDENT × INSTRUCTOR has two ID and two Name columns

Solution:
ρ S(SID, SName) (STUDENT) × ρ I(IID, IName) (INSTRUCTOR)

Result:
+------+-------+------+-------+
| SID  | SName | IID  | IName |
+------+-------+------+-------+
| S1   | John  | I1   | Dr.X  |
+------+-------+------+-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Rename</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">Reason</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Self-Join</td>
            <td className="p-3 border">Need to distinguish two copies of same relation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Attribute Conflict</td>
            <td className="p-3 border">Two relations have same attribute names</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Readability</td>
            <td className="p-3 border">Make query results more descriptive</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Union Compatibility</td>
            <td className="p-3 border">Make schemas match for set operations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Rename uses ρ (rho) symbol</li>
        <li>Can rename relation name, attributes, or both</li>
        <li>Essential for self-joins</li>
        <li>Resolves attribute name conflicts</li>
        <li>SQL uses AS keyword for renaming</li>
      </ul>
    </div>
  </div>
);

export default RenameOperation;
