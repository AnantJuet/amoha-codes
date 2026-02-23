import React from 'react';

const Indexing: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Database Indexing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Database indexing is a technique used to speed up data retrieval operations by creating
      data structures that allow the database to find rows more efficiently. Without indexes,
      the database must scan every row in a table to find matching records, which becomes
      increasingly slow as data grows.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is an Index?</h2>
    <p className="leading-relaxed">
      An index is a separate data structure that maintains pointers to rows in a table based on
      the values of one or more columns. Think of it like the index at the back of a book that
      helps you quickly find specific topics without reading every page.
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Index Concept:</p>
      <pre className="mt-2 text-sm overflow-x-auto">
{`Without Index (Full Table Scan):
┌────────────────────────────────────┐
│ Scan all rows to find "John"       │
│ Row 1 → Row 2 → Row 3 → ... → Row N│
└────────────────────────────────────┘
Time: O(n)

With Index:
┌─────────────┐     ┌─────────────┐
│   Index     │────►│   Table     │
│ "John" → 42 │     │ Row 42: John│
└─────────────┘     └─────────────┘
Time: O(log n)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">How Indexes Work</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Index stores column values with pointers to actual rows</li>
      <li>Values are organized in a structure that enables fast lookup</li>
      <li>When a query uses indexed column, database searches the index first</li>
      <li>Index returns pointers to matching rows</li>
      <li>Database retrieves only the necessary rows from the table</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Types of Indexes</h2>

    <div className="grid grid-cols-1 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">1. B-Tree Index</h4>
        <p className="mt-2">Most common index type. Stores data in a balanced tree structure.</p>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Good for: Equality and range queries</li>
          <li>Used by: MySQL, PostgreSQL, Oracle</li>
          <li>Complexity: O(log n) for search, insert, delete</li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">2. Hash Index</h4>
        <p className="mt-2">Uses a hash function to map keys to locations.</p>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Good for: Exact match queries only</li>
          <li>Not good for: Range queries, sorting</li>
          <li>Complexity: O(1) for lookup</li>
        </ul>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">3. Full-Text Index</h4>
        <p className="mt-2">Specialized index for text searching and natural language queries.</p>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Good for: Searching words in documents</li>
          <li>Features: Stemming, stop words, relevance ranking</li>
          <li>Used by: Elasticsearch, MySQL FULLTEXT</li>
        </ul>
      </div>

      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
        <h4 className="font-bold text-orange-800">4. Bitmap Index</h4>
        <p className="mt-2">Uses bit arrays for columns with low cardinality.</p>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Good for: Columns with few distinct values (gender, status)</li>
          <li>Efficient for: AND, OR, NOT operations</li>
          <li>Not good for: High-cardinality columns, frequent updates</li>
        </ul>
      </div>

      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">5. Spatial Index (R-Tree)</h4>
        <p className="mt-2">Optimized for geographic and spatial data.</p>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Good for: Location-based queries, GIS applications</li>
          <li>Queries: "Find all points within this area"</li>
          <li>Used by: PostGIS, MongoDB geospatial</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Index Categories</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Primary Index</td>
            <td className="p-3 border">Index on primary key, unique and not null</td>
            <td className="p-3 border">CREATE PRIMARY KEY (id)</td>
          </tr>
          <tr>
            <td className="p-3 border">Secondary Index</td>
            <td className="p-3 border">Index on non-primary columns</td>
            <td className="p-3 border">CREATE INDEX ON users(email)</td>
          </tr>
          <tr>
            <td className="p-3 border">Unique Index</td>
            <td className="p-3 border">Ensures all values in column are unique</td>
            <td className="p-3 border">CREATE UNIQUE INDEX ON users(email)</td>
          </tr>
          <tr>
            <td className="p-3 border">Composite Index</td>
            <td className="p-3 border">Index on multiple columns</td>
            <td className="p-3 border">CREATE INDEX ON orders(user_id, date)</td>
          </tr>
          <tr>
            <td className="p-3 border">Covering Index</td>
            <td className="p-3 border">Contains all columns needed for a query</td>
            <td className="p-3 border">Avoids table lookup entirely</td>
          </tr>
          <tr>
            <td className="p-3 border">Clustered Index</td>
            <td className="p-3 border">Determines physical order of data</td>
            <td className="p-3 border">Only one per table</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Clustered vs Non-Clustered Index</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Clustered Index</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Determines physical order of data in table</li>
          <li>Only one per table</li>
          <li>Primary key is usually clustered</li>
          <li>Faster for range queries</li>
          <li>Data pages are sorted</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Non-Clustered Index</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Separate structure from table data</li>
          <li>Multiple per table allowed</li>
          <li>Contains pointers to data rows</li>
          <li>Extra lookup required (bookmark lookup)</li>
          <li>Smaller than clustered index</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">When to Create Indexes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Good Candidates:</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Columns used in WHERE clauses</li>
          <li>Columns used in JOIN conditions</li>
          <li>Columns used in ORDER BY</li>
          <li>Foreign key columns</li>
          <li>Columns with high selectivity</li>
        </ul>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Poor Candidates:</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Small tables (full scan is fast)</li>
          <li>Columns with low cardinality</li>
          <li>Frequently updated columns</li>
          <li>Columns rarely used in queries</li>
          <li>Wide columns (large data types)</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of Indexing</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Faster Queries:</strong> Dramatically speeds up SELECT operations</li>
      <li><strong>Efficient Sorting:</strong> ORDER BY can use index order</li>
      <li><strong>Quick Lookups:</strong> Find specific rows in O(log n) time</li>
      <li><strong>Constraint Enforcement:</strong> Unique indexes prevent duplicates</li>
      <li><strong>Reduced I/O:</strong> Less disk reads needed</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of Indexing</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Storage Overhead:</strong> Indexes consume disk space</li>
      <li><strong>Write Performance:</strong> INSERT, UPDATE, DELETE are slower</li>
      <li><strong>Maintenance Cost:</strong> Indexes must be updated with data changes</li>
      <li><strong>Over-indexing:</strong> Too many indexes degrade performance</li>
      <li><strong>Index Fragmentation:</strong> Requires periodic maintenance</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Index Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Analyze query patterns before creating indexes</li>
      <li>Use EXPLAIN to verify index usage</li>
      <li>Put most selective columns first in composite indexes</li>
      <li>Consider covering indexes for frequently used queries</li>
      <li>Remove unused indexes</li>
      <li>Rebuild fragmented indexes periodically</li>
      <li>Balance read vs write performance needs</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ul className="space-y-3">
        <li><strong>E-commerce:</strong> Index on product_id, category, price for fast product searches</li>
        <li><strong>Social Media:</strong> Composite index on (user_id, created_at) for timeline queries</li>
        <li><strong>Banking:</strong> Index on account_number for quick account lookups</li>
        <li><strong>Search Engines:</strong> Inverted indexes for full-text search</li>
      </ul>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Indexing is a balance between read and write performance.
        Always test index changes in a staging environment and monitor their impact on
        both query speed and write operations.
      </p>
    </div>
  </div>
);

export default Indexing;
