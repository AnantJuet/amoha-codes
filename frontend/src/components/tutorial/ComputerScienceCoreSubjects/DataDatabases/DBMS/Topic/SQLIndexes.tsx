import React from "react";

const SQLIndexes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL Indexes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Indexes are special data structures that improve the speed of data retrieval
      operations on database tables. They work similarly to a book index, allowing
      the database to find data without scanning every row.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Use Indexes?</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Faster Queries:</strong> Dramatically speed up SELECT operations</li>
        <li><strong>Quick Lookups:</strong> Find specific rows without full table scan</li>
        <li><strong>Efficient Sorting:</strong> Speed up ORDER BY operations</li>
        <li><strong>Enforce Uniqueness:</strong> Unique indexes prevent duplicates</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Indexes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Primary Index</td>
            <td className="p-3 border">Automatically created on primary key</td>
            <td className="p-3 border">Unique row identification</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unique Index</td>
            <td className="p-3 border">Enforces unique values</td>
            <td className="p-3 border">Email, SSN columns</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Composite Index</td>
            <td className="p-3 border">Index on multiple columns</td>
            <td className="p-3 border">Frequent multi-column queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Clustered Index</td>
            <td className="p-3 border">Defines physical row order</td>
            <td className="p-3 border">One per table only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Non-Clustered</td>
            <td className="p-3 border">Separate structure with pointers</td>
            <td className="p-3 border">Multiple allowed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Creating Indexes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Basic index
CREATE INDEX idx_employee_name ON Employee(Name);

-- Unique index
CREATE UNIQUE INDEX idx_employee_email ON Employee(Email);

-- Composite index (order matters!)
CREATE INDEX idx_emp_dept_salary ON Employee(Dept, Salary);

-- Descending index
CREATE INDEX idx_salary_desc ON Employee(Salary DESC);

-- Partial/Filtered index (PostgreSQL)
CREATE INDEX idx_active_emp ON Employee(Name)
WHERE Status = 'Active';

-- Drop index
DROP INDEX idx_employee_name ON Employee;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Index Usage</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Index on Name helps this query
SELECT * FROM Employee WHERE Name = 'John';

-- Composite index on (Dept, Salary) helps these:
SELECT * FROM Employee WHERE Dept = 'IT';
SELECT * FROM Employee WHERE Dept = 'IT' AND Salary > 50000;

-- But NOT this (leftmost column not used):
SELECT * FROM Employee WHERE Salary > 50000;

-- Index helps ORDER BY
SELECT * FROM Employee ORDER BY Name;

-- Index helps JOIN
SELECT * FROM Employee E
JOIN Department D ON E.Dept_ID = D.ID;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When Index is NOT Used</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Using functions on indexed column: WHERE UPPER(Name) = 'JOHN'</li>
        <li>Using wildcards at start: WHERE Name LIKE '%ohn'</li>
        <li>Small tables (full scan may be faster)</li>
        <li>Selecting most of the table</li>
        <li>OR conditions spanning multiple indexes</li>
        <li>Type mismatch in comparison</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Index Trade-offs</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Pros</th>
            <th className="p-3 border">Cons</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Faster SELECT queries</td>
            <td className="p-3 border">Slower INSERT/UPDATE/DELETE</td>
          </tr>
          <tr>
            <td className="p-3 border">Faster sorting</td>
            <td className="p-3 border">Extra storage space</td>
          </tr>
          <tr>
            <td className="p-3 border">Enforce uniqueness</td>
            <td className="p-3 border">Maintenance overhead</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Best Practices</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Index columns used in WHERE, JOIN, ORDER BY</li>
        <li>Index columns with high selectivity</li>
        <li>Use composite indexes for multi-column conditions</li>
        <li>Put most selective column first in composite index</li>
        <li>Avoid over-indexing (slows writes)</li>
        <li>Monitor and remove unused indexes</li>
        <li>Consider covering indexes for read-heavy workloads</li>
      </ul>
    </div>
  </div>
);

export default SQLIndexes;
