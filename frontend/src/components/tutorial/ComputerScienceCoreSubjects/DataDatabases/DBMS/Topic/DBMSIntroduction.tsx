import React from "react";

const DBMSIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is DBMS?
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Database Management System (DBMS) is a software system designed to store, manage, and
      facilitate access to databases. It provides a systematic way to create, retrieve, update,
      and manage data while ensuring data integrity, security, and concurrent access.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      A DBMS is a collection of interrelated data and a set of programs to access that data.
      The primary goal of a DBMS is to provide a convenient and efficient environment for
      storing and retrieving database information.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DBMS Architecture Overview:

+--------------------+
|    Application     |
|     Programs       |
+--------+-----------+
         |
         v
+--------+-----------+
|       DBMS         |
|  +-------------+   |
|  | Query       |   |
|  | Processor   |   |
|  +-------------+   |
|  | Storage     |   |
|  | Manager     |   |
|  +-------------+   |
+--------+-----------+
         |
         v
+--------------------+
|     Database       |
|  (Stored Data)     |
+--------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Components of DBMS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Database</td>
            <td className="p-3 border">Collection of interrelated data organized for efficient retrieval</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Processor</td>
            <td className="p-3 border">Translates queries into low-level instructions for the storage manager</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Storage Manager</td>
            <td className="p-3 border">Manages the allocation of space on disk storage and data structures</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Transaction Manager</td>
            <td className="p-3 border">Ensures database consistency despite system failures</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Dictionary</td>
            <td className="p-3 border">Stores metadata about database structure and constraints</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Functions of DBMS</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Data Definition:</strong> Allows users to define database structure using DDL</li>
      <li><strong>Data Manipulation:</strong> Enables insertion, modification, retrieval, and deletion of data</li>
      <li><strong>Data Security:</strong> Protects data from unauthorized access</li>
      <li><strong>Data Integrity:</strong> Maintains accuracy and consistency of data</li>
      <li><strong>Concurrency Control:</strong> Manages simultaneous access by multiple users</li>
      <li><strong>Backup and Recovery:</strong> Provides mechanisms to recover data after failures</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of DBMS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Hierarchical</td>
            <td className="p-3 border">Data organized in tree-like structure</td>
            <td className="p-3 border">IBM IMS</td>
          </tr>
          <tr>
            <td className="p-3 border">Network</td>
            <td className="p-3 border">Data organized in graph structure</td>
            <td className="p-3 border">IDMS</td>
          </tr>
          <tr>
            <td className="p-3 border">Relational</td>
            <td className="p-3 border">Data stored in tables with relationships</td>
            <td className="p-3 border">MySQL, PostgreSQL, Oracle</td>
          </tr>
          <tr>
            <td className="p-3 border">Object-Oriented</td>
            <td className="p-3 border">Data stored as objects</td>
            <td className="p-3 border">ObjectDB, db4o</td>
          </tr>
          <tr>
            <td className="p-3 border">NoSQL</td>
            <td className="p-3 border">Non-relational, flexible schema</td>
            <td className="p-3 border">MongoDB, Cassandra, Redis</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of DBMS</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Banking:</strong> Customer information, accounts, transactions, loans</li>
      <li><strong>Airlines:</strong> Reservations, schedules, flight information</li>
      <li><strong>Universities:</strong> Student records, courses, grades, registration</li>
      <li><strong>E-commerce:</strong> Products, customers, orders, inventory</li>
      <li><strong>Healthcare:</strong> Patient records, medical history, prescriptions</li>
      <li><strong>Telecommunications:</strong> Call records, billing, customer data</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Popular DBMS Software</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">DBMS</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">License</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">MySQL</td>
            <td className="p-3 border">Relational</td>
            <td className="p-3 border">Open Source</td>
          </tr>
          <tr>
            <td className="p-3 border">PostgreSQL</td>
            <td className="p-3 border">Object-Relational</td>
            <td className="p-3 border">Open Source</td>
          </tr>
          <tr>
            <td className="p-3 border">Oracle Database</td>
            <td className="p-3 border">Relational</td>
            <td className="p-3 border">Commercial</td>
          </tr>
          <tr>
            <td className="p-3 border">Microsoft SQL Server</td>
            <td className="p-3 border">Relational</td>
            <td className="p-3 border">Commercial</td>
          </tr>
          <tr>
            <td className="p-3 border">MongoDB</td>
            <td className="p-3 border">Document (NoSQL)</td>
            <td className="p-3 border">Open Source</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DBMS is software for managing databases efficiently and securely</li>
        <li>It provides data abstraction, hiding physical storage details from users</li>
        <li>DBMS ensures data integrity through constraints and validation rules</li>
        <li>Relational DBMS (RDBMS) is the most widely used type</li>
        <li>DBMS supports concurrent access by multiple users through locking mechanisms</li>
        <li>Modern systems include both SQL and NoSQL databases for different use cases</li>
      </ul>
    </div>
  </div>
);

export default DBMSIntroduction;
