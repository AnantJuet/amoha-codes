import React from "react";

const RelationalOperations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Relational Operations</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Relational operations are used to manipulate data in relational databases. The main
      operations include INSERT, UPDATE, DELETE, and SELECT. Each operation may trigger
      constraint violations that must be handled.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Operations Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relational Operations:

+------------+----------------------------------+
| Operation  |          Description             |
+------------+----------------------------------+
| INSERT     | Add new tuple(s) to relation     |
| DELETE     | Remove tuple(s) from relation    |
| UPDATE     | Modify attribute values          |
| SELECT     | Retrieve tuples (query)          |
+------------+----------------------------------+

Each operation must respect:
- Domain constraints
- Key constraints
- Entity integrity
- Referential integrity`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">INSERT Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`INSERT Operation:
Adds new tuple(s) to a relation.

Syntax:
INSERT INTO TableName (col1, col2, ...)
VALUES (val1, val2, ...);

Example:
EMPLOYEE before:
+-------+-------+--------+
| EmpID | Name  | DeptID |
+-------+-------+--------+
| 101   | John  | D01    |
| 102   | Alice | D02    |
+-------+-------+--------+

INSERT INTO EMPLOYEE VALUES (103, 'Bob', 'D01');

EMPLOYEE after:
+-------+-------+--------+
| EmpID | Name  | DeptID |
+-------+-------+--------+
| 101   | John  | D01    |
| 102   | Alice | D02    |
| 103   | Bob   | D01    |  ← New tuple
+-------+-------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">INSERT Violations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Constraint</th>
            <th className="p-3 border">Violation Example</th>
            <th className="p-3 border">Result</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Domain</td>
            <td className="p-3 border">Age = 'Twenty'</td>
            <td className="p-3 border">Rejected</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Key</td>
            <td className="p-3 border">Duplicate EmpID</td>
            <td className="p-3 border">Rejected</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Entity</td>
            <td className="p-3 border">EmpID = NULL</td>
            <td className="p-3 border">Rejected</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Referential</td>
            <td className="p-3 border">DeptID = 'D99' (not exists)</td>
            <td className="p-3 border">Rejected</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">DELETE Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DELETE Operation:
Removes tuple(s) from a relation.

Syntax:
DELETE FROM TableName WHERE condition;

Example:
DELETE FROM EMPLOYEE WHERE EmpID = 102;

EMPLOYEE before:              EMPLOYEE after:
+-------+-------+--------+    +-------+-------+--------+
| 101   | John  | D01    |    | 101   | John  | D01    |
| 102   | Alice | D02    |    | 103   | Bob   | D01    |
| 103   | Bob   | D01    |    +-------+-------+--------+
+-------+-------+--------+

Possible Violations:
- May violate referential integrity if deleted tuple
  is referenced by another table's foreign key

Solution: ON DELETE CASCADE/SET NULL/RESTRICT`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">UPDATE Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`UPDATE Operation:
Modifies attribute values in existing tuples.

Syntax:
UPDATE TableName
SET col1 = val1, col2 = val2
WHERE condition;

Example:
UPDATE EMPLOYEE SET DeptID = 'D02' WHERE EmpID = 101;

EMPLOYEE before:              EMPLOYEE after:
+-------+-------+--------+    +-------+-------+--------+
| 101   | John  | D01    |    | 101   | John  | D02    | ← Changed
| 102   | Alice | D02    |    | 102   | Alice | D02    |
+-------+-------+--------+    +-------+-------+--------+

Possible Violations:
- Updating PK: Key constraint, referential integrity
- Updating FK: Referential integrity
- Updating any: Domain constraint`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">UPDATE Scenarios</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`UPDATE Primary Key:
UPDATE DEPARTMENT SET DeptID = 'D10' WHERE DeptID = 'D01';

If EMPLOYEE references D01:
- With ON UPDATE CASCADE: EMPLOYEE.DeptID also changes to D10
- With ON UPDATE RESTRICT: Update rejected
- With ON UPDATE SET NULL: EMPLOYEE.DeptID becomes NULL

UPDATE Foreign Key:
UPDATE EMPLOYEE SET DeptID = 'D99' WHERE EmpID = 101;

If D99 doesn't exist in DEPARTMENT:
- Referential integrity violation
- Update rejected`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Operation Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Can Violate</th>
            <th className="p-3 border">Handling</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">INSERT</td>
            <td className="p-3 border">All constraints</td>
            <td className="p-3 border">Reject invalid tuple</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DELETE</td>
            <td className="p-3 border">Referential only</td>
            <td className="p-3 border">CASCADE/SET NULL/RESTRICT</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">UPDATE PK</td>
            <td className="p-3 border">Key, Referential</td>
            <td className="p-3 border">CASCADE/SET NULL/RESTRICT</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">UPDATE FK</td>
            <td className="p-3 border">Referential</td>
            <td className="p-3 border">Reject if invalid</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">UPDATE Other</td>
            <td className="p-3 border">Domain</td>
            <td className="p-3 border">Reject if invalid</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>INSERT can violate all four types of constraints</li>
        <li>DELETE can only violate referential integrity</li>
        <li>UPDATE can violate different constraints based on what's modified</li>
        <li>Referential actions (CASCADE, SET NULL) handle violations automatically</li>
        <li>RESTRICT prevents operations that would cause violations</li>
      </ul>
    </div>
  </div>
);

export default RelationalOperations;
