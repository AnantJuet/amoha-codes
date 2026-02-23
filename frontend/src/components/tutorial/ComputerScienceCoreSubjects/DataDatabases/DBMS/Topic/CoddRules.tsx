import React from "react";

const CoddRules: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Codd's 12 Rules</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      In 1985, E.F. Codd published 12 rules (actually 13, numbered 0-12) that define
      what a true Relational Database Management System (RDBMS) should support. These
      rules serve as a benchmark for evaluating RDBMS products.
    </p>

    <h2 className="text-3xl font-bold mt-8">Rule 0: Foundation Rule</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <p className="font-semibold">The system must qualify as relational, as a database, and as a management system.</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        For a system to qualify as a relational database management system, it must use
        its relational facilities exclusively to manage the database.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Rules 1-6: Structural Rules</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Rule</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1</td>
            <td className="p-3 border">Information Rule</td>
            <td className="p-3 border">All information must be represented in tables as values</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2</td>
            <td className="p-3 border">Guaranteed Access Rule</td>
            <td className="p-3 border">Every data value accessible by table name + primary key + column name</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3</td>
            <td className="p-3 border">Systematic Treatment of NULL</td>
            <td className="p-3 border">NULL values must be supported for missing/inapplicable data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4</td>
            <td className="p-3 border">Dynamic Online Catalog</td>
            <td className="p-3 border">Database description stored in tables (data dictionary)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5</td>
            <td className="p-3 border">Comprehensive Data Sublanguage</td>
            <td className="p-3 border">Must support at least one language with DDL, DML, DCL, TCL</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">6</td>
            <td className="p-3 border">View Updating Rule</td>
            <td className="p-3 border">All views that are theoretically updatable must be updatable</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Rules 7-9: Data Manipulation Rules</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Rule</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">7</td>
            <td className="p-3 border">High-Level Insert, Update, Delete</td>
            <td className="p-3 border">Must support set-level operations (not just one row at a time)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">8</td>
            <td className="p-3 border">Physical Data Independence</td>
            <td className="p-3 border">Changes to storage don't affect applications</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">9</td>
            <td className="p-3 border">Logical Data Independence</td>
            <td className="p-3 border">Changes to tables don't affect applications using views</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Rules 10-12: Integrity & Distribution</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Rule</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">10</td>
            <td className="p-3 border">Integrity Independence</td>
            <td className="p-3 border">Integrity constraints stored in catalog, not applications</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">11</td>
            <td className="p-3 border">Distribution Independence</td>
            <td className="p-3 border">Applications work same whether data is centralized or distributed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">12</td>
            <td className="p-3 border">Non-Subversion Rule</td>
            <td className="p-3 border">Low-level access cannot bypass integrity/security rules</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Rule 1 - Information Rule:
All data stored in tables, including metadata

EMPLOYEES                    METADATA (System Catalog)
+-----+-------+             +------------+--------+
| ID  | Name  |             | TABLE_NAME | COLUMN |
+-----+-------+             +------------+--------+
| 101 | John  |             | EMPLOYEES  | ID     |
| 102 | Alice |             | EMPLOYEES  | Name   |
+-----+-------+             +------------+--------+

Rule 2 - Guaranteed Access:
Access any value using: Table + Primary Key + Column

SELECT Name FROM EMPLOYEES WHERE ID = 101;
Result: 'John'

Rule 7 - Set-Level Operations:
UPDATE EMPLOYEES SET Salary = Salary * 1.1 WHERE Dept = 'IT';
(Updates ALL matching rows, not one at a time)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Compliance Reality</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">No DBMS fully complies with all 12 rules!</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Most commercial RDBMS follow rules partially</li>
        <li>Rule 6 (View Updates) is difficult to implement fully</li>
        <li>Rule 9 (Logical Independence) is often compromised</li>
        <li>Rules serve as guidelines, not strict requirements</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>13 rules total (Rule 0 through Rule 12)</li>
        <li>Published by E.F. Codd in 1985</li>
        <li>Define what a true RDBMS should support</li>
        <li>No commercial DBMS fully complies</li>
        <li>Serve as evaluation benchmark for RDBMS</li>
      </ul>
    </div>
  </div>
);

export default CoddRules;
