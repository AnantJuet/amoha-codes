import React from "react";

const DatabaseLanguages: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Database Languages</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Database languages are specialized languages used to define, manipulate, and control data
      in a database. The main types are DDL, DML, DCL, and TCL.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Database Languages</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Database Languages Overview:

+------------------+----------------------------------------+
|     Language     |              Purpose                   |
+------------------+----------------------------------------+
|       DDL        |  Define database structure (schema)    |
|       DML        |  Manipulate data (CRUD operations)     |
|       DCL        |  Control access permissions            |
|       TCL        |  Manage transactions                   |
+------------------+----------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Data Definition Language (DDL)</h2>
    <p className="text-lg leading-relaxed mt-2">
      DDL is used to define and modify database schema and structure.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DDL Commands:

CREATE  - Create new database objects
  CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50)
  );

ALTER   - Modify existing objects
  ALTER TABLE students ADD email VARCHAR(100);

DROP    - Delete objects
  DROP TABLE students;

TRUNCATE - Remove all records
  TRUNCATE TABLE students;

RENAME  - Rename objects
  RENAME TABLE students TO learners;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Data Manipulation Language (DML)</h2>
    <p className="text-lg leading-relaxed mt-2">
      DML is used to retrieve, insert, update, and delete data in tables.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DML Commands:

SELECT  - Retrieve data
  SELECT * FROM students WHERE age > 18;

INSERT  - Add new records
  INSERT INTO students VALUES (1, 'John', 20);

UPDATE  - Modify existing records
  UPDATE students SET age = 21 WHERE id = 1;

DELETE  - Remove records
  DELETE FROM students WHERE id = 1;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Data Control Language (DCL)</h2>
    <p className="text-lg leading-relaxed mt-2">
      DCL is used to control access to data in the database.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DCL Commands:

GRANT   - Give privileges to users
  GRANT SELECT, INSERT ON students TO user1;

REVOKE  - Remove privileges from users
  REVOKE INSERT ON students FROM user1;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Transaction Control Language (TCL)</h2>
    <p className="text-lg leading-relaxed mt-2">
      TCL is used to manage transactions in the database.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TCL Commands:

COMMIT    - Save changes permanently
  COMMIT;

ROLLBACK  - Undo changes
  ROLLBACK;

SAVEPOINT - Create a savepoint
  SAVEPOINT sp1;

SET TRANSACTION - Set transaction properties
  SET TRANSACTION READ ONLY;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Language</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Commands</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">DDL</td>
            <td className="p-3 border">Define structure</td>
            <td className="p-3 border">CREATE, ALTER, DROP, TRUNCATE</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DML</td>
            <td className="p-3 border">Manipulate data</td>
            <td className="p-3 border">SELECT, INSERT, UPDATE, DELETE</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DCL</td>
            <td className="p-3 border">Control access</td>
            <td className="p-3 border">GRANT, REVOKE</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TCL</td>
            <td className="p-3 border">Manage transactions</td>
            <td className="p-3 border">COMMIT, ROLLBACK, SAVEPOINT</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DDL commands are auto-committed (cannot be rolled back)</li>
        <li>DML commands can be rolled back before COMMIT</li>
        <li>DCL manages user permissions and security</li>
        <li>TCL ensures data integrity through transactions</li>
      </ul>
    </div>
  </div>
);

export default DatabaseLanguages;
