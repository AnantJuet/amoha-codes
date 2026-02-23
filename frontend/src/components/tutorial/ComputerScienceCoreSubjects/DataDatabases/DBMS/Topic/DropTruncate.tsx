import React from "react";

const DropTruncate: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL DROP and TRUNCATE Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      DROP and TRUNCATE are DDL commands used to remove data and database objects.
      Understanding their differences is crucial for proper database management.
    </p>

    <h2 className="text-3xl font-bold mt-8">DROP Command</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Drop table (removes structure and all data)
DROP TABLE Employee;

-- Drop table if exists
DROP TABLE IF EXISTS Employee;

-- Drop database
DROP DATABASE CompanyDB;

-- Drop index
DROP INDEX idx_emp_name ON Employee;

-- Drop view
DROP VIEW EmployeeDetails;

-- Drop multiple tables
DROP TABLE Table1, Table2, Table3;

-- Drop with cascade (removes dependent objects)
DROP TABLE Department CASCADE;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TRUNCATE Command</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Remove all data, keep structure
TRUNCATE TABLE Employee;

-- TRUNCATE with restart identity (PostgreSQL)
TRUNCATE TABLE Employee RESTART IDENTITY;

-- TRUNCATE multiple tables
TRUNCATE TABLE Table1, Table2;

-- TRUNCATE with cascade (removes dependent data)
TRUNCATE TABLE Department CASCADE;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DROP vs TRUNCATE vs DELETE</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">DROP</th>
            <th className="p-3 border">TRUNCATE</th>
            <th className="p-3 border">DELETE</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Type</td>
            <td className="p-3 border">DDL</td>
            <td className="p-3 border">DDL</td>
            <td className="p-3 border">DML</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Removes</td>
            <td className="p-3 border">Structure + Data</td>
            <td className="p-3 border">Data only</td>
            <td className="p-3 border">Data only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">WHERE clause</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Rollback</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No*</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Speed</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Slow</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Triggers</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Identity reset</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-gray-500 mt-2">*Some DBMS allow TRUNCATE rollback within transaction</p>

    <h2 className="text-3xl font-bold mt-8">When to Use Each</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>DROP:</strong> When you want to completely remove the table</li>
        <li><strong>TRUNCATE:</strong> When you want to quickly remove all data but keep the table</li>
        <li><strong>DELETE:</strong> When you need to remove specific rows or need rollback capability</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Foreign Key Considerations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- TRUNCATE fails if table is referenced by FK
-- Solution 1: Drop and recreate FK
ALTER TABLE Orders DROP FOREIGN KEY fk_customer;
TRUNCATE TABLE Customer;
ALTER TABLE Orders ADD CONSTRAINT fk_customer
    FOREIGN KEY (CustomerID) REFERENCES Customer(ID);

-- Solution 2: Use CASCADE (PostgreSQL)
TRUNCATE TABLE Customer CASCADE;

-- DROP with dependencies
DROP TABLE Customer CASCADE;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DROP removes the entire table structure</li>
        <li>TRUNCATE removes all data but keeps structure</li>
        <li>Both are DDL commands and typically auto-commit</li>
        <li>TRUNCATE is faster than DELETE for all rows</li>
        <li>TRUNCATE resets auto-increment counters</li>
        <li>Neither activates DELETE triggers</li>
        <li>Always backup before using these commands</li>
      </ul>
    </div>
  </div>
);

export default DropTruncate;
