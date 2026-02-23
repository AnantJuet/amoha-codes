import React from "react";

const DataModels: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Data Models</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A data model is a conceptual representation of how data is organized, stored, and
      accessed in a database. It defines the logical structure of the database.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Data Models</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Model Classification:

High-Level (Conceptual)
    |
    |-- Entity-Relationship Model
    |-- Object-Oriented Model
    |
Representational (Logical)
    |
    |-- Relational Model
    |-- Network Model
    |-- Hierarchical Model
    |
Low-Level (Physical)
    |
    |-- File Organization
    |-- Indexing Methods`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Hierarchical Model</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Hierarchical Model (Tree Structure):

              Company
             /       \\
        Dept A      Dept B
        /    \\        |
    Emp1   Emp2     Emp3

Characteristics:
- One-to-many relationships only
- Parent-child hierarchy
- No data redundancy
- Used in early DBMS (IMS by IBM)

Limitations:
- Complex many-to-many relationships
- Difficult to reorganize
- No query language support`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Network Model</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Network Model (Graph Structure):

    Student1 ----+---- Course1
        |        X        |
        |        |        |
    Student2 ----+---- Course2

Characteristics:
- Many-to-many relationships allowed
- Records connected via pointers
- More flexible than hierarchical
- Complex navigation required

Limitations:
- Complex implementation
- Difficult to change structure
- Programmer must know physical storage`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Relational Model</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relational Model (Table Structure):

STUDENTS Table:
+----+-------+------+
| ID | Name  | Age  |
+----+-------+------+
| 1  | John  | 20   |
| 2  | Alice | 22   |
+----+-------+------+

COURSES Table:
+-----+---------+
| CID | Course  |
+-----+---------+
| 101 | DBMS    |
| 102 | OS      |
+-----+---------+

Characteristics:
- Data stored in tables (relations)
- Rows (tuples) and columns (attributes)
- SQL for data manipulation
- Most widely used model today`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Entity-Relationship Model</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ER Model (Conceptual Design):

    +----------+       +------------+       +---------+
    | STUDENT  |-------|  ENROLLS   |-------| COURSE  |
    +----------+       +------------+       +---------+
    - ID                - Date              - CID
    - Name              - Grade             - Title
    - Age                                   - Credits

Used for:
- Database design phase
- Visual representation
- Communication with stakeholders
- Converted to relational schema`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. Object-Oriented Model</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Object-Oriented Model:

class Student {
    int id;
    string name;
    List<Course> courses;

    void enroll(Course c);
    void drop(Course c);
}

Characteristics:
- Objects with attributes and methods
- Inheritance and encapsulation
- Complex data types supported
- Used in OODBMs (ObjectDB, db4o)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Model</th>
            <th className="p-3 border">Structure</th>
            <th className="p-3 border">Relationships</th>
            <th className="p-3 border">Usage</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Hierarchical</td>
            <td className="p-3 border">Tree</td>
            <td className="p-3 border">One-to-Many</td>
            <td className="p-3 border">Legacy systems</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network</td>
            <td className="p-3 border">Graph</td>
            <td className="p-3 border">Many-to-Many</td>
            <td className="p-3 border">Legacy systems</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Relational</td>
            <td className="p-3 border">Tables</td>
            <td className="p-3 border">All types</td>
            <td className="p-3 border">Most common</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ER Model</td>
            <td className="p-3 border">Diagram</td>
            <td className="p-3 border">All types</td>
            <td className="p-3 border">Design phase</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Object-Oriented</td>
            <td className="p-3 border">Objects</td>
            <td className="p-3 border">All types</td>
            <td className="p-3 border">Complex data</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Relational model is the most widely used today</li>
        <li>ER model is used for conceptual database design</li>
        <li>Hierarchical and Network models are legacy</li>
        <li>Object-oriented model handles complex data types</li>
        <li>Each model has specific use cases and trade-offs</li>
      </ul>
    </div>
  </div>
);

export default DataModels;
