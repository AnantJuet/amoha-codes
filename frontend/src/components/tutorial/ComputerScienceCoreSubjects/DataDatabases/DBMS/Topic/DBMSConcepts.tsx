import React from "react";

const DBMSConcepts: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">DBMS Concepts and Terminology</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Understanding the fundamental concepts and terminology of Database Management Systems is essential
      for working effectively with databases. This section covers the core concepts that form the
      foundation of database technology.
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
            <td className="p-3 border font-semibold">Database</td>
            <td className="p-3 border">Organized collection of interrelated data</td>
            <td className="p-3 border">University database with students, courses</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data</td>
            <td className="p-3 border">Raw facts and figures without context</td>
            <td className="p-3 border">"John", 25, "Computer Science"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Information</td>
            <td className="p-3 border">Processed data with meaning and context</td>
            <td className="p-3 border">"John is a 25-year-old CS student"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Metadata</td>
            <td className="p-3 border">Data about data (structure, constraints)</td>
            <td className="p-3 border">Column names, data types, constraints</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Schema</td>
            <td className="p-3 border">Logical structure of the database</td>
            <td className="p-3 border">Table definitions, relationships</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Instance</td>
            <td className="p-3 border">Actual data stored at a particular moment</td>
            <td className="p-3 border">Current rows in a table</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Database Schema vs Instance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Schema (Structure - Rarely Changes):
+------------------+
| STUDENT          |
+------------------+
| id: INT          |
| name: VARCHAR    |
| age: INT         |
| dept: VARCHAR    |
+------------------+

Instance (Data - Changes Frequently):
+----+--------+-----+------------------+
| id | name   | age | dept             |
+----+--------+-----+------------------+
| 1  | John   | 20  | Computer Science |
| 2  | Alice  | 21  | Mathematics      |
| 3  | Bob    | 22  | Physics          |
+----+--------+-----+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Abstraction Levels</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Three Levels of Data Abstraction:

+----------------------------------+
|         View Level               |  <- Users see customized views
|    (External Schema)             |
+----------------------------------+
              |
              v
+----------------------------------+
|       Logical Level              |  <- What data is stored
|    (Conceptual Schema)           |     and relationships
+----------------------------------+
              |
              v
+----------------------------------+
|       Physical Level             |  <- How data is stored
|    (Internal Schema)             |     on disk
+----------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Schema defines structure; Instance contains actual data</li>
        <li>Data abstraction hides complexity from users</li>
        <li>Metadata describes the database structure</li>
        <li>Three levels: Physical, Logical, and View</li>
      </ul>
    </div>
  </div>
);

export default DBMSConcepts;
