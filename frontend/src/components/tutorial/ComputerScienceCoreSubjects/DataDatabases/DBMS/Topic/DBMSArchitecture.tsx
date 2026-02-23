import React from "react";

const DBMSArchitecture: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">DBMS Architecture</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      DBMS architecture refers to the design of the database system and how its components
      are organized. The architecture can be centralized or distributed, with different tiers
      for different functionalities.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of DBMS Architecture</h2>

    <h3 className="text-2xl font-semibold mt-6">1-Tier Architecture</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`+---------------------------+
|     Single Machine        |
|  +---------------------+  |
|  | Application +       |  |
|  | Database +          |  |
|  | User Interface      |  |
|  +---------------------+  |
+---------------------------+

- Direct database access
- Used for local applications
- Example: MS Access on desktop`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2-Tier Architecture (Client-Server)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`+-------------+          +-------------+
|   Client    |  <---->  |   Server    |
| (UI + App)  |   SQL    |  (Database) |
+-------------+          +-------------+

- Client sends SQL queries to server
- Server processes and returns results
- Example: Desktop app connecting to MySQL`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3-Tier Architecture</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`+----------+     +------------+     +----------+
|  Client  |<--->| App Server |<--->| Database |
| (Browser)|     | (Business  |     |  Server  |
|   (UI)   |     |   Logic)   |     |  (Data)  |
+----------+     +------------+     +----------+
Tier 1           Tier 2             Tier 3

- Presentation, Logic, and Data separated
- Most common for web applications
- Better security and scalability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">1-Tier</th>
            <th className="p-3 border">2-Tier</th>
            <th className="p-3 border">3-Tier</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Poor</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Excellent</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Security</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>1-Tier: All components on single machine (local apps)</li>
        <li>2-Tier: Client-Server model (desktop apps)</li>
        <li>3-Tier: Separates UI, Logic, Data (web apps)</li>
        <li>3-Tier is most common for enterprise applications</li>
      </ul>
    </div>
  </div>
);

export default DBMSArchitecture;
