import React from "react";

const SecondNormalForm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Second Normal Form (2NF)</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Second Normal Form (2NF) builds on 1NF by eliminating partial dependencies. A relation
      is in 2NF if it's in 1NF and every non-prime attribute is fully functionally dependent
      on the entire primary key.
    </p>

    <h2 className="text-3xl font-bold mt-8">2NF Requirements</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Second Normal Form (2NF) Rules:

1. Must be in 1NF

2. No partial dependencies
   - Non-prime attributes must depend on ENTIRE primary key
   - Not just part of it

Prime Attribute: Part of any candidate key
Non-prime Attribute: Not part of any candidate key

Partial Dependency:
A non-prime attribute depends on only PART of a composite key.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Partial Dependency Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ENROLLMENT (In 1NF, NOT in 2NF):

+------+------+-------+-----------+--------+
| SID  | CID  | Grade | SName     | CName  |
+------+------+-------+-----------+--------+
| S1   | C1   | A     | John      | DBMS   |
| S1   | C2   | B     | John      | OS     |
| S2   | C1   | A     | Alice     | DBMS   |
+------+------+-------+-----------+--------+

Primary Key: (SID, CID)

Functional Dependencies:
(SID, CID) → Grade     ✓ Full dependency
SID → SName            ✗ Partial (only part of key)
CID → CName            ✗ Partial (only part of key)

Problems:
- SName depends only on SID (partial)
- CName depends only on CID (partial)
- Data redundancy: "John" and "DBMS" repeated`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Converting to 2NF</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Solution: Remove partial dependencies to separate tables

Step 1: Identify partial dependencies
- SID → SName (depends on part of key)
- CID → CName (depends on part of key)

Step 2: Create separate tables for each partial dependency

STUDENT (SID, SName)
+------+-------+
| SID  | SName |
+------+-------+
| S1   | John  |
| S2   | Alice |
+------+-------+

COURSE (CID, CName)
+------+-------+
| CID  | CName |
+------+-------+
| C1   | DBMS  |
| C2   | OS    |
+------+-------+

ENROLLMENT (SID, CID, Grade)
+------+------+-------+
| SID  | CID  | Grade |
+------+------+-------+
| S1   | C1   | A     |
| S1   | C2   | B     |
| S2   | C1   | A     |
+------+------+-------+

Now all non-prime attributes fully depend on primary key!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2NF and Single-Column Keys</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Important: If primary key is single attribute,
table is automatically in 2NF (if in 1NF).

Why? Partial dependency requires composite key.
Single-attribute key can't have "part of" key.

Example (Already in 2NF):
EMPLOYEE
+------+-------+--------+
| EID  | Name  | Salary |
+------+-------+--------+

Primary Key: EID (single attribute)
EID → Name, Salary (full dependency)

No partial dependency possible = Already in 2NF`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Decomposition Process</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1</td>
            <td className="p-3 border">Identify all FDs in the relation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2</td>
            <td className="p-3 border">Find the candidate keys</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3</td>
            <td className="p-3 border">Identify partial dependencies</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4</td>
            <td className="p-3 border">Create new table for each partial dependency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5</td>
            <td className="p-3 border">Remove partially dependent attributes from original</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Another Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ORDER_ITEM (Not in 2NF):
+--------+--------+-----------+------------+-------+
| OrderID| ItemID | ItemName  | OrderDate  | Qty   |
+--------+--------+-----------+------------+-------+
| O1     | I1     | Laptop    | 2024-01-15 | 1     |
| O1     | I2     | Mouse     | 2024-01-15 | 2     |
| O2     | I1     | Laptop    | 2024-01-16 | 1     |
+--------+--------+-----------+------------+-------+

PK: (OrderID, ItemID)
FDs:
- (OrderID, ItemID) → Qty
- OrderID → OrderDate (partial!)
- ItemID → ItemName (partial!)

After 2NF:
ORDER (OrderID, OrderDate)
ITEM (ItemID, ItemName)
ORDER_ITEM (OrderID, ItemID, Qty)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>2NF = 1NF + No partial dependencies</li>
        <li>Partial dependency: non-prime depends on part of key</li>
        <li>Single-column PK = automatically 2NF</li>
        <li>Decompose by moving partial dependencies to new tables</li>
        <li>2NF reduces redundancy from partial dependencies</li>
      </ul>
    </div>
  </div>
);

export default SecondNormalForm;
