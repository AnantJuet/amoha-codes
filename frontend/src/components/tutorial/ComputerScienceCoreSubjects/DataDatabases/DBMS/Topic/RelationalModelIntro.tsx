import React from "react";

const RelationalModelIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Relational Model</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Relational Model, proposed by E.F. Codd in 1970, is the most widely used data model
      for database management. It represents data as relations (tables) and is the foundation
      of SQL databases.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Relational Model?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relational Model Structure:

RELATION (Table):
+-------+--------+------+--------+
| EmpID |  Name  | Age  | DeptID |  <-- Attributes (Columns)
+-------+--------+------+--------+
|  101  | John   |  30  |  D01   |  <-- Tuple (Row)
|  102  | Alice  |  25  |  D02   |
|  103  | Bob    |  35  |  D01   |
+-------+--------+------+--------+

Key Terminology:
- Relation = Table
- Tuple = Row
- Attribute = Column
- Domain = Set of allowed values for an attribute`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">History</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>1970:</strong> E.F. Codd published "A Relational Model of Data for Large Shared Data Banks"</li>
      <li><strong>1974:</strong> IBM developed System R (first RDBMS prototype)</li>
      <li><strong>1979:</strong> Oracle released first commercial RDBMS</li>
      <li><strong>1986:</strong> SQL became ANSI standard</li>
      <li><strong>Today:</strong> Most widely used data model</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Relational Model Concepts</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Formal Term</th>
            <th className="p-3 border">Informal Term</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Relation</td>
            <td className="p-3 border">Table</td>
            <td className="p-3 border">A two-dimensional structure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tuple</td>
            <td className="p-3 border">Row/Record</td>
            <td className="p-3 border">A single entry in the table</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Attribute</td>
            <td className="p-3 border">Column/Field</td>
            <td className="p-3 border">A property of the relation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Domain</td>
            <td className="p-3 border">Data Type</td>
            <td className="p-3 border">Allowed values for attribute</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cardinality</td>
            <td className="p-3 border">Row Count</td>
            <td className="p-3 border">Number of tuples</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Degree/Arity</td>
            <td className="p-3 border">Column Count</td>
            <td className="p-3 border">Number of attributes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Relations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Properties of a Relation:

1. No Duplicate Tuples
   - Each row is unique
   - Enforced by primary key

2. Tuples are Unordered
   - Order of rows doesn't matter
   - No "first" or "last" row

3. Attributes are Unordered
   - Order of columns doesn't matter
   - Identified by name, not position

4. Attribute Values are Atomic
   - Each cell contains single value
   - No multi-valued attributes
   - First Normal Form (1NF)

5. Each Attribute has Unique Name
   - Within a relation
   - No duplicate column names`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relational Schema</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relational Schema Notation:

Relation Name (Attribute1: Domain1, Attribute2: Domain2, ...)

Example:
EMPLOYEE (EmpID: INT, Name: VARCHAR(50), Age: INT, DeptID: CHAR(3))

Simplified Notation:
EMPLOYEE (EmpID, Name, Age, DeptID)
          -----
          Primary Key (underlined)

Database Schema = Collection of all relation schemas`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Proposed by E.F. Codd in 1970</li>
        <li>Data stored in tables (relations)</li>
        <li>No duplicate rows allowed</li>
        <li>Attribute values must be atomic (single value)</li>
        <li>Foundation for SQL and modern RDBMS</li>
      </ul>
    </div>
  </div>
);

export default RelationalModelIntro;
