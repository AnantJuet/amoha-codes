import React from "react";

const RelationsAndTuples: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Relations and Tuples
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      In the relational model, data is organized into relations (tables), with each
      relation containing tuples (rows) that represent individual records. Understanding
      relations and tuples is fundamental to working with relational databases.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Relation?</h2>
    <p className="leading-relaxed mt-2">
      A relation is a two-dimensional table that consists of rows and columns. Mathematically,
      a relation is a subset of the Cartesian product of domains.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Mathematical Definition:
R ⊆ D1 × D2 × ... × Dn

Where:
- R is the relation
- D1, D2, ..., Dn are domains (sets of allowed values)
- × represents Cartesian product

Example:
Domain D1 = {1, 2, 3}     (Roll Numbers)
Domain D2 = {A, B, C}     (Grades)

R ⊆ D1 × D2 could be {(1, A), (2, B), (3, A)}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">What is a Tuple?</h2>
    <p className="leading-relaxed mt-2">
      A tuple is an ordered sequence of values, one for each attribute in the relation.
      In simple terms, a tuple is a single row in a table.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EMPLOYEE Relation:
+--------+----------+--------+----------+
| Emp_ID | Name     | Dept   | Salary   |
+--------+----------+--------+----------+
| E001   | John     | Sales  | 50000    |  <- Tuple 1
| E002   | Alice    | IT     | 60000    |  <- Tuple 2
| E003   | Bob      | HR     | 45000    |  <- Tuple 3
+--------+----------+--------+----------+

Tuple t1 = (E001, John, Sales, 50000)
- t1[Emp_ID] = E001
- t1[Name] = John
- t1[Salary] = 50000`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relation vs Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Relation (Theory)</th>
            <th className="p-3 border">Table (Practice)</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">No duplicate tuples</td>
            <td className="p-3 border">May allow duplicate rows</td>
          </tr>
          <tr>
            <td className="p-3 border">Tuples have no order</td>
            <td className="p-3 border">Rows may have physical order</td>
          </tr>
          <tr>
            <td className="p-3 border">Attributes have no order</td>
            <td className="p-3 border">Columns have defined order</td>
          </tr>
          <tr>
            <td className="p-3 border">All values are atomic</td>
            <td className="p-3 border">May support complex types</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Tuple Notation</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>t:</strong> Represents a tuple</li>
        <li><strong>t[A]:</strong> Value of attribute A in tuple t</li>
        <li><strong>t[A, B, C]:</strong> Sub-tuple containing only attributes A, B, C</li>
        <li><strong>r(R):</strong> Relation instance r of schema R</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Degree and Cardinality</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`STUDENT(Roll_No, Name, Age, GPA)
+----------+--------+-----+------+
| Roll_No  | Name   | Age | GPA  |
+----------+--------+-----+------+
| 1        | Alice  | 20  | 3.5  |
| 2        | Bob    | 21  | 3.2  |
| 3        | Carol  | 19  | 3.8  |
| 4        | David  | 22  | 3.1  |
+----------+--------+-----+------+

Degree = 4 (number of attributes/columns)
Cardinality = 4 (number of tuples/rows)

Note: Degree is fixed, Cardinality changes with data`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>A relation is a set of tuples sharing the same attributes</li>
        <li>Each tuple represents a unique entity or record</li>
        <li>The degree of a relation is its number of attributes</li>
        <li>The cardinality of a relation is its number of tuples</li>
        <li>In pure relational theory, no two tuples can be identical</li>
        <li>Tuple order does not convey any meaning in relational theory</li>
      </ul>
    </div>
  </div>
);

export default RelationsAndTuples;
