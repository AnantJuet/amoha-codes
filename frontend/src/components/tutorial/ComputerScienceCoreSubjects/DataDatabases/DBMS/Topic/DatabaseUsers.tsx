import React from "react";

const DatabaseUsers: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Database Users</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Database users are individuals who interact with the database system. Different users
      have different roles, responsibilities, and levels of access to the database.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Database Users</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Database User Hierarchy:

+------------------------------------------+
|          Database Administrator          |
|     (Full control, schema management)    |
+------------------------------------------+
                    |
+------------------------------------------+
|           Database Designers             |
|   (Design schema, define constraints)    |
+------------------------------------------+
                    |
+------------------------------------------+
|         Application Programmers          |
|   (Write programs to access database)    |
+------------------------------------------+
                    |
+------------------------------------------+
|             End Users                    |
| (Naive, Casual, Sophisticated, Standalone)|
+------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Database Administrator (DBA)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <p className="font-semibold mb-2">Responsibilities:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>Schema definition and modification</li>
        <li>Storage structure and access method definition</li>
        <li>Granting authorization for data access</li>
        <li>Routine maintenance and monitoring</li>
        <li>Backup and recovery management</li>
        <li>Performance tuning and optimization</li>
        <li>Ensuring data integrity and security</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Database Designers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <p className="font-semibold mb-2">Responsibilities:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>Identify data to be stored</li>
        <li>Design conceptual and logical schema</li>
        <li>Define integrity constraints</li>
        <li>Create views for different user groups</li>
        <li>Optimize database structure</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Application Programmers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Application Programmers write code to interact with DB:

// Example: Java application with JDBC
Connection conn = DriverManager.getConnection(url);
PreparedStatement stmt = conn.prepareStatement(
    "SELECT * FROM students WHERE id = ?"
);
stmt.setInt(1, studentId);
ResultSet rs = stmt.executeQuery();

Tasks:
- Write application programs using host languages
- Embed SQL queries in application code
- Use APIs (JDBC, ODBC, ORM frameworks)
- Handle database errors and transactions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. End Users</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Naive Users</td>
            <td className="p-3 border">Use predefined interfaces, no DB knowledge needed</td>
            <td className="p-3 border">Bank tellers, ticket clerks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Casual Users</td>
            <td className="p-3 border">Occasionally access DB, know query language</td>
            <td className="p-3 border">Managers running reports</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sophisticated Users</td>
            <td className="p-3 border">Write complex queries, use advanced features</td>
            <td className="p-3 border">Data analysts, scientists</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Standalone Users</td>
            <td className="p-3 border">Maintain personal databases</td>
            <td className="p-3 border">Small business owners</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">User Interaction with Database</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`User Interaction Levels:

Naive User         -> GUI/Forms -> Application -> DBMS -> Database
                                      |
Casual User        -> Query Tool -----+
                                      |
Sophisticated User -> SQL Interface --+
                                      |
App Programmer     -> Embedded SQL ---+
                                      |
DBA               -> Admin Tools -----+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DBA has highest privilege and responsibility</li>
        <li>Database designers work on schema and structure</li>
        <li>Application programmers bridge users and database</li>
        <li>End users are categorized by their interaction level</li>
        <li>Different users need different interfaces and access levels</li>
      </ul>
    </div>
  </div>
);

export default DatabaseUsers;
