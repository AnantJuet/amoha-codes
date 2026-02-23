import React from "react";

const RelationalConcepts: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Relational Model Concepts
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Relational Model is a fundamental concept in database systems that organizes data
      into tables (relations) consisting of rows and columns. Understanding its core concepts
      is essential for designing efficient and well-structured databases.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Terminology</h2>
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
            <td className="p-3 border font-semibold">Tuple</td>
            <td className="p-3 border">A single row in a relation</td>
            <td className="p-3 border">(101, 'John', 'CSE')</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Attribute</td>
            <td className="p-3 border">A column in a relation</td>
            <td className="p-3 border">Name, Age, Department</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Domain</td>
            <td className="p-3 border">Set of allowed values for an attribute</td>
            <td className="p-3 border">Age: 18-100</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Schema</td>
            <td className="p-3 border">Structure definition of a relation</td>
            <td className="p-3 border">STUDENT(ID, Name, Dept)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Degree</td>
            <td className="p-3 border">Number of attributes in a relation</td>
            <td className="p-3 border">3 (for above schema)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cardinality</td>
            <td className="p-3 border">Number of tuples in a relation</td>
            <td className="p-3 border">100 students</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relation Schema vs Instance</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Relation Schema:</strong> The logical design or structure of a relation (table name + attribute names + data types)</li>
        <li><strong>Relation Instance:</strong> The actual data stored in a relation at a particular point in time</li>
        <li>Schema is relatively static while instance changes frequently</li>
      </ul>
    </div>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relation Schema: STUDENT(Roll_No, Name, Age, Department)

Relation Instance:
+----------+--------+-----+------------+
| Roll_No  | Name   | Age | Department |
+----------+--------+-----+------------+
| 101      | Alice  | 20  | CSE        |
| 102      | Bob    | 21  | ECE        |
| 103      | Carol  | 19  | CSE        |
+----------+--------+-----+------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Relations</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>No Duplicate Tuples:</strong> Each row must be unique</li>
      <li><strong>Tuples are Unordered:</strong> Order of rows does not matter</li>
      <li><strong>Attributes are Unordered:</strong> Order of columns does not matter</li>
      <li><strong>Atomic Values:</strong> Each cell contains a single, indivisible value (1NF)</li>
      <li><strong>Each Attribute has a Unique Name:</strong> No two columns can have the same name</li>
      <li><strong>Values from Same Domain:</strong> All values in a column belong to the same domain</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">NULL Values</h2>
    <p className="leading-relaxed mt-2">
      NULL represents missing, unknown, or inapplicable information. It is distinct from
      zero or an empty string.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NULL Interpretations:
1. Value Unknown - The value exists but is not known
2. Value Not Applicable - The attribute doesn't apply to this tuple
3. Value Withheld - The value exists but is intentionally hidden

Example: Phone number NULL could mean:
- Person has no phone (not applicable)
- Person has phone but number unknown
- Person refused to provide number`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Relations are sets of tuples, so no duplicate tuples exist</li>
        <li>Each attribute must have atomic values (First Normal Form requirement)</li>
        <li>The relational model provides a mathematical foundation for databases</li>
        <li>SQL is based on the relational model but allows duplicates (multisets)</li>
        <li>Understanding these concepts is crucial for database design and normalization</li>
      </ul>
    </div>
  </div>
);

export default RelationalConcepts;
