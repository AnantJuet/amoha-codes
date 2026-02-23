import React from "react";

const ReferentialIntegrity: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Referential Integrity
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Referential integrity is a constraint that ensures relationships between tables
      remain consistent. It requires that a foreign key value must either match a primary
      key value in the referenced table or be NULL.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Referential Integrity?</h2>
    <p className="leading-relaxed mt-2">
      Referential integrity maintains the consistency of links between tables. When a
      foreign key references a primary key, the referenced value must exist in the parent
      table, ensuring no orphan records.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">Referential Integrity Rules:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Foreign key values must exist in the referenced primary key or be NULL</li>
        <li>Cannot delete a parent record if child records reference it (unless cascaded)</li>
        <li>Cannot update primary key if referenced by foreign keys (unless cascaded)</li>
        <li>Cannot insert child record with non-existent parent reference</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Department and Employee</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DEPARTMENT (Referenced Table - Parent):
+----------+-------------+
| Dept_ID  | Dept_Name   |   <- Dept_ID is PRIMARY KEY
+----------+-------------+
| D001     | Sales       |
| D002     | IT          |
| D003     | HR          |
+----------+-------------+

EMPLOYEE (Referencing Table - Child):
+--------+--------+----------+
| Emp_ID | Name   | Dept_ID  |   <- Dept_ID is FOREIGN KEY
+--------+--------+----------+
| E001   | John   | D001     |   ✓ Valid (D001 exists)
| E002   | Jane   | D002     |   ✓ Valid (D002 exists)
| E003   | Bob    | NULL     |   ✓ Valid (NULL allowed)
| E004   | Alice  | D005     |   ✗ INVALID (D005 doesn't exist)
+--------+--------+----------+

Referential Integrity Violation:
- Cannot insert E004 with Dept_ID = D005 (doesn't exist in DEPARTMENT)
- Cannot delete D001 from DEPARTMENT while E001 references it`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Referential Actions</h2>
    <p className="leading-relaxed mt-2">
      When a referenced row is updated or deleted, different actions can be taken on
      the referencing rows.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">ON DELETE Behavior</th>
            <th className="p-3 border">ON UPDATE Behavior</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">CASCADE</td>
            <td className="p-3 border">Delete all referencing rows</td>
            <td className="p-3 border">Update foreign key values</td>
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
            <td className="p-3 border">Reject if references exist</td>
            <td className="p-3 border">Reject if references exist</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NO ACTION</td>
            <td className="p-3 border">Same as RESTRICT (checked at end)</td>
            <td className="p-3 border">Same as RESTRICT (checked at end)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Parent table
CREATE TABLE Department (
    Dept_ID VARCHAR(10) PRIMARY KEY,
    Dept_Name VARCHAR(50) NOT NULL
);

-- Child table with referential integrity
CREATE TABLE Employee (
    Emp_ID VARCHAR(10) PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Dept_ID VARCHAR(10),
    FOREIGN KEY (Dept_ID)
        REFERENCES Department(Dept_ID)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- Example operations
INSERT INTO Department VALUES ('D001', 'Sales');
INSERT INTO Employee VALUES ('E001', 'John', 'D001');  -- OK

-- This will set E001's Dept_ID to NULL
DELETE FROM Department WHERE Dept_ID = 'D001';

-- This will fail - D999 doesn't exist
INSERT INTO Employee VALUES ('E002', 'Jane', 'D999');  -- ERROR`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cascade Delete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before DELETE:
DEPARTMENT:             EMPLOYEE:
+------+-------+        +------+------+------+
|Dept_ID|Name  |        |Emp_ID|Name  |Dept_ID|
+------+-------+        +------+------+------+
| D001 | Sales |   <-   | E001 | John | D001 |
| D002 | IT    |   <-   | E002 | Jane | D002 |
+------+-------+        | E003 | Bob  | D001 |
                        +------+------+------+

DELETE FROM Department WHERE Dept_ID = 'D001';

After DELETE (with ON DELETE CASCADE):
DEPARTMENT:             EMPLOYEE:
+------+-------+        +------+------+------+
| D002 | IT    |   <-   | E002 | Jane | D002 |
+------+-------+        +------+------+------+

E001 and E003 are deleted because they referenced D001`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Best Practices</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use CASCADE carefully - it can delete many records unintentionally</li>
        <li>SET NULL is safer when child records should persist</li>
        <li>RESTRICT is safest - forces explicit handling of dependencies</li>
        <li>Consider business rules when choosing referential actions</li>
        <li>Document referential integrity constraints for maintenance</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Referential integrity prevents orphan records</li>
        <li>Foreign key values must match a primary key or be NULL</li>
        <li>Choose appropriate referential actions based on business requirements</li>
        <li>CASCADE propagates changes automatically</li>
        <li>RESTRICT/NO ACTION prevent changes if references exist</li>
        <li>Referential integrity is enforced by the DBMS automatically</li>
      </ul>
    </div>
  </div>
);

export default ReferentialIntegrity;
