import React from "react";

const ThreeSchemaArchitecture: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Three Schema Architecture</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Three Schema Architecture (also called ANSI-SPARC architecture) separates user
      applications from the physical database. It defines three levels of abstraction:
      External, Conceptual, and Internal schemas.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Three Levels</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Three Schema Architecture:

+------------------------------------------+
|            EXTERNAL LEVEL                |
|  +--------+  +--------+  +--------+      |
|  | View 1 |  | View 2 |  | View 3 |      |
|  +--------+  +--------+  +--------+      |
|  (Different users see different views)   |
+------------------------------------------+
                    |
          External/Conceptual Mapping
                    |
+------------------------------------------+
|           CONCEPTUAL LEVEL               |
|  +------------------------------------+  |
|  |      Logical Schema                |  |
|  |  (Tables, Relationships, Keys)     |  |
|  +------------------------------------+  |
|  (Complete logical view of database)    |
+------------------------------------------+
                    |
          Conceptual/Internal Mapping
                    |
+------------------------------------------+
|            INTERNAL LEVEL                |
|  +------------------------------------+  |
|  |      Physical Schema               |  |
|  |  (Files, Indexes, Storage)         |  |
|  +------------------------------------+  |
|  (How data is physically stored)        |
+------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Level Details</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Level</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Users</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">External (View)</td>
            <td className="p-3 border">Individual user views of data</td>
            <td className="p-3 border">End users, Applications</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Conceptual (Logical)</td>
            <td className="p-3 border">Complete logical structure</td>
            <td className="p-3 border">Database designers, DBAs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Internal (Physical)</td>
            <td className="p-3 border">Physical storage details</td>
            <td className="p-3 border">System programmers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Benefits</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Data Independence:</strong> Changes at one level don't affect others</li>
      <li><strong>Security:</strong> Users only see relevant views</li>
      <li><strong>Simplicity:</strong> Users interact with simple views</li>
      <li><strong>Flexibility:</strong> Easy to modify physical storage</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>External: User-specific views</li>
        <li>Conceptual: Logical structure of entire database</li>
        <li>Internal: Physical storage implementation</li>
        <li>Mappings between levels provide data independence</li>
      </ul>
    </div>
  </div>
);

export default ThreeSchemaArchitecture;
