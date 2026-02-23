import React from "react";

const RelationalTerminology: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Relational Model Terminology</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Understanding relational terminology is essential for working with databases.
      This section covers the formal and informal terms used in the relational model.
    </p>

    <h2 className="text-3xl font-bold mt-8">Core Terminology</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`STUDENT Relation (Table):

    Attribute (Column)
          ↓
+--------+--------+------+---------+
| SID    | Name   | Age  | Major   |  ← Relation Schema (Header)
+--------+--------+------+---------+
| S001   | John   | 20   | CS      |  ← Tuple (Row)
| S002   | Alice  | 21   | IT      |  ← Tuple (Row)
| S003   | Bob    | 22   | CS      |  ← Tuple (Row)
+--------+--------+------+---------+
    ↑
Attribute
  Value

Degree (Arity) = 4 (number of columns)
Cardinality = 3 (number of rows)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Terminology</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Term</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Relation</td>
            <td className="p-3 border">A table with rows and columns</td>
            <td className="p-3 border">STUDENT table</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Relation Schema</td>
            <td className="p-3 border">Name + list of attributes</td>
            <td className="p-3 border">STUDENT(SID, Name, Age)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Relation Instance</td>
            <td className="p-3 border">Current set of tuples</td>
            <td className="p-3 border">All rows at this moment</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tuple</td>
            <td className="p-3 border">A single row in relation</td>
            <td className="p-3 border">(S001, John, 20, CS)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Attribute</td>
            <td className="p-3 border">A named column</td>
            <td className="p-3 border">Name, Age, Major</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Domain</td>
            <td className="p-3 border">Set of allowed values</td>
            <td className="p-3 border">Age: 18-100 integers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Degree</td>
            <td className="p-3 border">Number of attributes</td>
            <td className="p-3 border">4 columns</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cardinality</td>
            <td className="p-3 border">Number of tuples</td>
            <td className="p-3 border">3 rows</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Domain</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Domain:
Set of atomic values from which attribute values are drawn.

Examples:
- Domain of Age: {18, 19, 20, ..., 100} or INTEGER
- Domain of Name: Set of all possible names or VARCHAR(50)
- Domain of GPA: {0.0, 0.1, ..., 4.0} or DECIMAL(3,2)
- Domain of Gender: {'M', 'F', 'Other'} or CHAR(1)

Properties:
- Each attribute must be defined on a domain
- Domain specifies data type and constraints
- Values must be atomic (indivisible)

Domain Compatibility:
- Attributes can be compared only if they share same domain
- Example: Cannot compare Name with Age`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Schema vs Instance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Schema vs Instance:

Schema (Intension):
- Logical structure
- Rarely changes
- Like a blueprint

STUDENT (SID, Name, Age, Major)
         INT  VARCHAR INT VARCHAR

Instance (Extension):
- Actual data at a point in time
- Changes frequently
- Like the actual building

Current Instance:
+------+-------+-----+-------+
| S001 | John  | 20  | CS    |
| S002 | Alice | 21  | IT    |
+------+-------+-----+-------+

After INSERT:
+------+-------+-----+-------+
| S001 | John  | 20  | CS    |
| S002 | Alice | 21  | IT    |
| S003 | Bob   | 22  | CS    |  ← New tuple
+------+-------+-----+-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NULL Values</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NULL Value:
Represents missing or unknown information.

+------+-------+------+-------+
| SID  | Name  | Age  | Major |
+------+-------+------+-------+
| S001 | John  | 20   | CS    |
| S002 | Alice | NULL | IT    |  ← Age unknown
| S003 | Bob   | 22   | NULL  |  ← Major not declared
+------+-------+------+-------+

NULL Interpretations:
1. Value unknown (exists but we don't know)
2. Value not applicable (doesn't exist)
3. Value withheld (exists but not recorded)

Important:
- NULL ≠ 0 or empty string
- NULL = NULL returns UNKNOWN, not TRUE
- Primary key cannot be NULL`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Relation = Table, Tuple = Row, Attribute = Column</li>
        <li>Domain defines allowed values for an attribute</li>
        <li>Degree = number of columns, Cardinality = number of rows</li>
        <li>Schema describes structure, Instance contains data</li>
        <li>NULL represents missing or unknown values</li>
      </ul>
    </div>
  </div>
);

export default RelationalTerminology;
