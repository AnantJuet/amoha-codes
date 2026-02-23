import React from "react";

const DataIndependence: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Data Independence</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data Independence is the capacity to change the schema at one level of the database
      system without having to change the schema at the next higher level. It's one of the
      most important benefits provided by the three-schema architecture.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Data Independence</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Physical Data Independence</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Physical Data Independence:
Ability to modify internal schema without changing conceptual schema.

Examples of changes that don't affect applications:
- Changing storage devices (HDD to SSD)
- Modifying file organization
- Adding or removing indexes
- Changing compression algorithms
- Moving data to different disk locations

Internal Schema    --changes-->    No change to
(Physical level)                   Conceptual Schema`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Logical Data Independence</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Logical Data Independence:
Ability to modify conceptual schema without changing external schema.

Examples of changes that don't affect user views:
- Adding new tables
- Adding new columns to tables
- Splitting a table into two
- Merging tables
- Changing relationships

Conceptual Schema  --changes-->    No change to
(Logical level)                    External Views`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Physical Independence</th>
            <th className="p-3 border">Logical Independence</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Level Changed</td>
            <td className="p-3 border">Internal (Physical)</td>
            <td className="p-3 border">Conceptual (Logical)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Level Protected</td>
            <td className="p-3 border">Conceptual</td>
            <td className="p-3 border">External (Views)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Difficulty</td>
            <td className="p-3 border">Easier to achieve</td>
            <td className="p-3 border">Harder to achieve</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Physical independence: Change storage without affecting logic</li>
        <li>Logical independence: Change structure without affecting views</li>
        <li>Logical independence is harder to achieve than physical</li>
        <li>Both types are enabled by three-schema architecture</li>
      </ul>
    </div>
  </div>
);

export default DataIndependence;
