import React from "react";

const ClusteredIndex: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Clustered and Non-Clustered Indexes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Clustered and non-clustered indexes are two fundamental types of database indexes
      that differ in how they organize data. Understanding their differences is crucial
      for database design and query optimization.
    </p>

    <h2 className="text-3xl font-bold mt-8">Clustered Index</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        A clustered index determines the physical order of data in a table.
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Only ONE clustered index per table</li>
        <li>Leaf nodes contain actual data rows</li>
        <li>Table is physically sorted by clustered index key</li>
        <li>Primary key is often the clustered index</li>
        <li>Excellent for range queries</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Clustered Index Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Clustered Index (B+ Tree on ID):

           [50]
          /    \\
       [25]    [75]
      /    \\   /    \\
   [Data] [Data] [Data] [Data]
   ID<25  25-49  50-74  >=75

Leaf nodes contain actual table data:
+----+-------+--------+
| ID | Name  | Salary |
+----+-------+--------+
| 10 | Alice | 50000  |  <- Actual row
| 20 | Bob   | 60000  |  <- Actual row
| 30 | Carol | 55000  |  <- Actual row
+----+-------+--------+

Data is physically ordered by ID.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Non-Clustered Index</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        A non-clustered index is separate from the data and contains pointers to data rows.
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Multiple non-clustered indexes allowed per table</li>
        <li>Leaf nodes contain index keys + row pointers</li>
        <li>Does not affect physical data order</li>
        <li>Requires additional lookup to get full row</li>
        <li>Good for specific value lookups</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Non-Clustered Index Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Non-Clustered Index (on Name):

            [John]
           /      \\
       [Carol]    [Mike]
       /    \\      /    \\
   [Leaf] [Leaf] [Leaf] [Leaf]

Leaf nodes contain pointers:
+-------+------------+
| Name  | Row Pointer|
+-------+------------+
| Alice | Ptr -> Row |
| Bob   | Ptr -> Row |
| Carol | Ptr -> Row |
+-------+------------+

Data Table (separate, may be heap or clustered):
+----+-------+--------+
| ID | Name  | Salary |
+----+-------+--------+
| 10 | Alice | 50000  |
| 30 | Carol | 55000  |
| 20 | Bob   | 60000  |
+----+-------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Clustered</th>
            <th className="p-3 border">Non-Clustered</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Count per table</td>
            <td className="p-3 border">Only 1</td>
            <td className="p-3 border">Multiple</td>
          </tr>
          <tr>
            <td className="p-3 border">Leaf content</td>
            <td className="p-3 border">Actual data rows</td>
            <td className="p-3 border">Pointers to rows</td>
          </tr>
          <tr>
            <td className="p-3 border">Data order</td>
            <td className="p-3 border">Determines physical order</td>
            <td className="p-3 border">No effect on order</td>
          </tr>
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">Larger (includes data)</td>
            <td className="p-3 border">Smaller (just pointers)</td>
          </tr>
          <tr>
            <td className="p-3 border">Range queries</td>
            <td className="p-3 border">Very efficient</td>
            <td className="p-3 border">May need many lookups</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Each</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Use Clustered Index for:
- Primary key (default in most DBMS)
- Columns frequently used in ORDER BY
- Range queries (BETWEEN, >, <)
- Columns with unique values

Use Non-Clustered Index for:
- Columns frequently used in WHERE
- Foreign key columns
- Columns used in JOIN conditions
- Multiple search columns needed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Only one clustered index per table</li>
        <li>Clustered index defines physical data order</li>
        <li>Non-clustered indexes use pointers to data</li>
        <li>Choose clustered index key carefully</li>
        <li>Too many non-clustered indexes slow writes</li>
        <li>Consider query patterns when designing indexes</li>
      </ul>
    </div>
  </div>
);

export default ClusteredIndex;
