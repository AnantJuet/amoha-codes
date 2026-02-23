import React from "react";

const FirstNormalForm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">First Normal Form (1NF)</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      First Normal Form (1NF) is the foundation of database normalization. A relation is
      in 1NF if it contains only atomic (indivisible) values and has no repeating groups.
    </p>

    <h2 className="text-3xl font-bold mt-8">1NF Requirements</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`First Normal Form (1NF) Rules:

1. All attributes contain only atomic values
   - No multi-valued attributes
   - No composite attributes

2. No repeating groups
   - Each row has fixed number of columns
   - No arrays or lists in cells

3. Each row is unique
   - Has a primary key

4. Order of rows and columns doesn't matter`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Violation Example: Multi-valued</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NOT in 1NF (Multi-valued attribute):

STUDENT
+------+-------+----------------------+
| SID  | Name  | PhoneNumbers         |
+------+-------+----------------------+
| S1   | John  | 1234567, 9876543     |  ← Multiple values!
| S2   | Alice | 5555555              |
+------+-------+----------------------+

Problem: PhoneNumbers contains multiple values

Solution - Convert to 1NF:

STUDENT                    STUDENT_PHONE
+------+-------+           +------+-----------+
| SID  | Name  |           | SID  | Phone     |
+------+-------+           +------+-----------+
| S1   | John  |           | S1   | 1234567   |
| S2   | Alice |           | S1   | 9876543   |
+------+-------+           | S2   | 5555555   |
                           +------+-----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Violation Example: Repeating Groups</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NOT in 1NF (Repeating groups):

ORDER
+--------+----------+---------+---------+---------+---------+
| OrderID| Customer | Item1   | Qty1    | Item2   | Qty2    |
+--------+----------+---------+---------+---------+---------+
| O1     | John     | Laptop  | 1       | Mouse   | 2       |
| O2     | Alice    | Phone   | 1       | NULL    | NULL    |
+--------+----------+---------+---------+---------+---------+

Problem: Item/Qty repeating groups (what if 10 items?)

Solution - Convert to 1NF:

ORDER                      ORDER_ITEM
+--------+----------+      +--------+---------+------+
| OrderID| Customer |      | OrderID| Item    | Qty  |
+--------+----------+      +--------+---------+------+
| O1     | John     |      | O1     | Laptop  | 1    |
| O2     | Alice    |      | O1     | Mouse   | 2    |
+--------+----------+      | O2     | Phone   | 1    |
                           +--------+---------+------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Violation Example: Composite</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NOT in 1NF (Composite attribute):

EMPLOYEE
+------+----------------------+
| EID  | FullName             |
+------+----------------------+
| E1   | John Smith           |
+------+----------------------+

If we need to query by first/last name separately,
FullName should be atomic:

Solution:
EMPLOYEE
+------+------------+-----------+
| EID  | FirstName  | LastName  |
+------+------------+-----------+
| E1   | John       | Smith     |
+------+------------+-----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1NF Conversion Steps</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Problem</th>
            <th className="p-3 border">Solution</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Multi-valued attribute</td>
            <td className="p-3 border">Create separate table with FK</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Repeating groups</td>
            <td className="p-3 border">Create separate table for repeated data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Composite attribute</td>
            <td className="p-3 border">Split into atomic columns</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">No primary key</td>
            <td className="p-3 border">Add or identify primary key</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before (Not 1NF):
STUDENT
+------+------------+------------------+---------------+
| SID  | Name       | Courses          | Phones        |
+------+------------+------------------+---------------+
| S1   | John Doe   | DBMS, OS, CN     | 111, 222      |
| S2   | Alice May  | DBMS             | 333           |
+------+------------+------------------+---------------+

After (1NF):
STUDENT (SID, FirstName, LastName)
STUDENT_COURSE (SID, Course)
STUDENT_PHONE (SID, Phone)

STUDENT               STUDENT_COURSE      STUDENT_PHONE
+------+-------+----+ +------+--------+   +------+-------+
| SID  | FName |LName| SID  | Course |   | SID  | Phone |
+------+-------+----+ +------+--------+   +------+-------+
| S1   | John  |Doe | | S1   | DBMS   |   | S1   | 111   |
| S2   | Alice |May | | S1   | OS     |   | S1   | 222   |
+------+-------+----+ | S1   | CN     |   | S2   | 333   |
                      | S2   | DBMS   |   +------+-------+
                      +------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>1NF requires atomic values only</li>
        <li>No multi-valued or composite attributes</li>
        <li>No repeating groups of columns</li>
        <li>Each table must have a primary key</li>
        <li>1NF is the minimum requirement for a relation</li>
      </ul>
    </div>
  </div>
);

export default FirstNormalForm;
