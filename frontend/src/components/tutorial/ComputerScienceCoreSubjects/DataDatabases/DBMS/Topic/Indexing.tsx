import React from "react";

const Indexing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Indexing in DBMS</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Indexing is a data structure technique to efficiently retrieve records from database
      files based on search keys. An index provides pointers to rows in a table, significantly
      speeding up data retrieval operations.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Indexing?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Without Index (Full Table Scan):
Table with 1 million rows
Search for ID = 50000
Must scan potentially all rows: O(n)

With Index:
Index on ID column
Direct lookup: O(log n) or O(1)

Trade-off:
+ Faster reads/searches
- Slower writes (index maintenance)
- Extra storage space`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Index Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Index Entry: (Search Key, Pointer)

Index File:
+----------+---------+
| Key      | Pointer |
+----------+---------+
| 10       | → Row 3 |
| 20       | → Row 1 |
| 30       | → Row 4 |
| 40       | → Row 2 |
+----------+---------+

Data File:
Row 1: (20, John, IT)
Row 2: (40, Alice, HR)
Row 3: (10, Bob, IT)
Row 4: (30, Carol, HR)

Searching for Key=30:
1. Search index → Find pointer
2. Follow pointer → Get row`}
      </pre>
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
            <td className="p-3 border font-semibold">Primary</td>
            <td className="p-3 border">On primary key, data sorted</td>
            <td className="p-3 border">Main identifier lookup</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Secondary</td>
            <td className="p-3 border">On non-key, data unsorted</td>
            <td className="p-3 border">Frequently queried columns</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Clustered</td>
            <td className="p-3 border">Data physically ordered by index</td>
            <td className="p-3 border">Range queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Non-clustered</td>
            <td className="p-3 border">Index separate from data</td>
            <td className="p-3 border">Multiple indexes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dense</td>
            <td className="p-3 border">Entry for every record</td>
            <td className="p-3 border">Precise lookups</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sparse</td>
            <td className="p-3 border">Entry for some records</td>
            <td className="p-3 border">Sorted data, less space</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dense vs Sparse Index</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dense Index: Entry for EVERY record

Index:              Data:
+----+-----+        +----+------+
| 10 | → 1 |        | 10 | John |
| 20 | → 2 |        | 20 | Alice|
| 30 | → 3 |        | 30 | Bob  |
| 40 | → 4 |        | 40 | Carol|
+----+-----+        +----+------+


Sparse Index: Entry for SOME records (data must be sorted!)

Index:              Data (sorted by key):
+----+-----+        Block 1: 10, 20
| 10 | → B1|        Block 2: 30, 40
| 30 | → B2|        Block 3: 50, 60
| 50 | → B3|
+----+-----+

To find 40: Find 30 in index → Go to Block 2 → Scan for 40`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Creating Indexes in SQL</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SQL Index Commands:

-- Create index
CREATE INDEX idx_name ON table(column);

-- Create unique index
CREATE UNIQUE INDEX idx_email ON users(email);

-- Create composite index
CREATE INDEX idx_name_dept ON employee(name, dept_id);

-- Drop index
DROP INDEX idx_name;

-- Show indexes
SHOW INDEX FROM table;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Indexes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <p className="font-semibold mb-2">Good candidates for indexing:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>Primary key columns (usually auto-indexed)</li>
        <li>Foreign key columns</li>
        <li>Columns in WHERE clauses</li>
        <li>Columns in JOIN conditions</li>
        <li>Columns in ORDER BY clauses</li>
      </ul>
      <p className="font-semibold mb-2 mt-4">Avoid indexing:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>Small tables</li>
        <li>Frequently updated columns</li>
        <li>Columns with many NULL values</li>
        <li>Columns with low cardinality</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Index speeds up reads but slows writes</li>
        <li>Dense: entry for every record</li>
        <li>Sparse: entry for some records (sorted data)</li>
        <li>Clustered: one per table, data ordered</li>
        <li>Choose index columns based on query patterns</li>
      </ul>
    </div>
  </div>
);

export default Indexing;
