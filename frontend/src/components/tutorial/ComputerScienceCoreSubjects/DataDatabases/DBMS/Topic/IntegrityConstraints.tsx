import React from "react";

const IntegrityConstraints: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Integrity Constraints</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Integrity constraints are rules that ensure the accuracy and consistency of data
      in a database. They prevent invalid data from being entered and maintain the
      reliability of the stored information.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Integrity</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Integrity Types:

1. Entity Integrity
   - Primary key must be unique and NOT NULL
   - Ensures each tuple is identifiable

2. Referential Integrity
   - Foreign key values must be valid
   - Maintains relationships between tables

3. Domain Integrity
   - Attribute values within allowed domain
   - Data type and range constraints

4. User-Defined Integrity
   - Business rules and custom constraints
   - Application-specific requirements`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Entity Integrity</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Entity Integrity Rule:
"No primary key value can be NULL"

Reason:
- Primary key uniquely identifies each tuple
- NULL means unknown/missing
- Cannot identify tuple with unknown key

Example:
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,  -- Cannot be NULL
    Name VARCHAR(50)
);

STUDENT Table:
+------------+--------+
| StudentID  | Name   |
+------------+--------+
| 101        | John   |  ✓ Valid
| 102        | Alice  |  ✓ Valid
| NULL       | Bob    |  ✗ VIOLATES Entity Integrity
+------------+--------+

Composite Key:
PRIMARY KEY (StudentID, CourseID)
- BOTH StudentID AND CourseID cannot be NULL`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Referential Integrity</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Referential Integrity Rule:
"Foreign key must match an existing primary key or be NULL"

DEPARTMENT (Referenced)      EMPLOYEE (Referencing)
+--------+---------+         +-------+-------+--------+
| DeptID | Name    |         | EmpID | Name  | DeptID |
+--------+---------+         +-------+-------+--------+
| D01    | IT      |         | E01   | John  | D01    | ✓
| D02    | HR      |         | E02   | Alice | D02    | ✓
| D03    | Sales   |         | E03   | Bob   | D05    | ✗ D05 doesn't exist!
+--------+---------+         | E04   | Carol | NULL   | ✓ (if allowed)
                             +-------+-------+--------+

The FK value 'D05' violates referential integrity
because there's no matching PK in DEPARTMENT.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Referential Integrity Actions</h2>
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
            <td className="p-3 border">Delete referencing rows</td>
            <td className="p-3 border">Update FK values</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SET NULL</td>
            <td className="p-3 border">Set FK to NULL</td>
            <td className="p-3 border">Set FK to NULL</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SET DEFAULT</td>
            <td className="p-3 border">Set FK to default value</td>
            <td className="p-3 border">Set FK to default value</td>
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

    <h2 className="text-3xl font-bold mt-8">Referential Actions Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CREATE TABLE Employee (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(50),
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

Scenario: DELETE FROM Department WHERE DeptID = 'D01';

ON DELETE CASCADE:
- Deletes all employees in D01

ON DELETE SET NULL:
- Sets DeptID to NULL for employees in D01

ON DELETE RESTRICT:
- Prevents deletion if employees exist in D01

ON DELETE SET DEFAULT:
- Sets DeptID to default value for employees in D01`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Domain Integrity</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Domain Integrity:
Ensures attribute values are within valid domain.

CREATE TABLE Product (
    ProductID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Price DECIMAL(10,2) CHECK (Price > 0),
    Quantity INT CHECK (Quantity >= 0),
    Category VARCHAR(20) CHECK (Category IN ('Electronics', 'Clothing', 'Food'))
);

Violations:
- Price = -50.00      ✗ Must be positive
- Quantity = -10      ✗ Must be non-negative
- Category = 'Toys'   ✗ Not in allowed list`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Entity Integrity: PK cannot be NULL</li>
        <li>Referential Integrity: FK must reference valid PK</li>
        <li>Domain Integrity: Values within allowed range</li>
        <li>Use ON DELETE/UPDATE actions for FK relationships</li>
        <li>CASCADE propagates changes, RESTRICT prevents them</li>
      </ul>
    </div>
  </div>
);

export default IntegrityConstraints;
