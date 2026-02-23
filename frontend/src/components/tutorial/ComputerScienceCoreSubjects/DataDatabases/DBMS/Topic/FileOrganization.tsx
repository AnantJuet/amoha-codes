import React from "react";

const FileOrganization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">File Organization in DBMS</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      File organization refers to the way records are physically stored on disk.
      The choice of file organization significantly affects the performance of
      database operations like insert, delete, update, and search.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of File Organization</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`File Organization Methods:

1. Heap File (Unordered)
2. Sequential File (Ordered)
3. Hash File
4. Clustered File
5. Indexed File

Choice depends on:
- Access patterns
- Frequency of operations
- Data characteristics`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Heap File Organization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Heap File: Records stored in no particular order

Structure:
+--------+--------+--------+--------+
| Rec 5  | Rec 1  | Rec 8  | Rec 3  |
+--------+--------+--------+--------+
| Rec 2  | Rec 7  | Rec 4  | Free   |
+--------+--------+--------+--------+

Insert: O(1) - Add to end or any free space
Delete: O(n) - Find then mark as deleted
Search: O(n) - Linear scan required
Update: O(n) - Find then modify

Advantages:
+ Fast insertion
+ Good for bulk loading
+ Simple implementation

Disadvantages:
- Slow search (full scan)
- Wasted space from deletions
- No ordering`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sequential File Organization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Sequential File: Records sorted by search key

Structure (sorted by ID):
+--------+--------+--------+--------+
| ID: 1  | ID: 2  | ID: 3  | ID: 4  |
+--------+--------+--------+--------+
| ID: 5  | ID: 6  | ID: 7  | ID: 8  |
+--------+--------+--------+--------+

Insert: O(n) - Must maintain order
Delete: O(n) - Find and remove
Search: O(log n) - Binary search possible
Range Query: O(log n + k) - Efficient!

Advantages:
+ Efficient range queries
+ Binary search on key
+ Good for sequential access

Disadvantages:
- Slow insert/delete
- Need periodic reorganization
- Overflow handling complex`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hash File Organization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Hash File: Records stored using hash function

h(key) = bucket address

Bucket 0: [Records with h(key)=0]
Bucket 1: [Records with h(key)=1]
Bucket 2: [Records with h(key)=2]
...

Example: h(key) = key mod 5

Key 12 → Bucket 2
Key 27 → Bucket 2 (collision)
Key 35 → Bucket 0

Insert: O(1) average
Delete: O(1) average
Search: O(1) average - Key lookup
Range Query: O(n) - Not suitable!

Advantages:
+ Very fast exact match
+ O(1) operations

Disadvantages:
- No range queries
- Collision handling needed
- Fixed bucket count (static)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Clustered File Organization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Clustered File: Related records stored together

Example: Store department with its employees

Block 1:
+------------------+
| Dept: IT         |
+------------------+
| Emp: John (IT)   |
| Emp: Alice (IT)  |
| Emp: Bob (IT)    |
+------------------+

Block 2:
+------------------+
| Dept: HR         |
+------------------+
| Emp: Carol (HR)  |
| Emp: David (HR)  |
+------------------+

Advantages:
+ Fast joins (related data together)
+ Efficient for common access patterns
+ Reduces I/O for related queries

Disadvantages:
- Only one clustering possible per file
- Complicates insert/update
- Not good for unrelated queries`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Organization</th>
            <th className="p-3 border">Insert</th>
            <th className="p-3 border">Search</th>
            <th className="p-3 border">Range</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Heap</td>
            <td className="p-3 border text-green-500">O(1)</td>
            <td className="p-3 border text-red-500">O(n)</td>
            <td className="p-3 border text-red-500">O(n)</td>
            <td className="p-3 border">Bulk insert</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sequential</td>
            <td className="p-3 border text-red-500">O(n)</td>
            <td className="p-3 border text-yellow-500">O(log n)</td>
            <td className="p-3 border text-green-500">O(log n)</td>
            <td className="p-3 border">Range queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hash</td>
            <td className="p-3 border text-green-500">O(1)</td>
            <td className="p-3 border text-green-500">O(1)</td>
            <td className="p-3 border text-red-500">O(n)</td>
            <td className="p-3 border">Exact match</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Clustered</td>
            <td className="p-3 border text-yellow-500">O(n)</td>
            <td className="p-3 border text-yellow-500">Varies</td>
            <td className="p-3 border text-green-500">O(log n)</td>
            <td className="p-3 border">Joins</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Record Storage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Fixed-Length Records:
+-------+------------+--------+
| ID(4) | Name(20)   | Age(4) |
+-------+------------+--------+
Each record: 28 bytes exactly

Variable-Length Records:
+-----+--------+-----+----------+
| Len | ID     | Len | Name     |
+-----+--------+-----+----------+
Header stores field lengths

Slotted Page Structure:
+----------------------------------+
| Header | Free Space | Records   |
|        |            | ←------   |
| Slot Directory                  |
+----------------------------------+
Slots point to record positions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Heap: Fast insert, slow search</li>
        <li>Sequential: Good for sorted/range access</li>
        <li>Hash: O(1) exact match, no range</li>
        <li>Clustered: Groups related records</li>
        <li>Choice depends on query patterns</li>
      </ul>
    </div>
  </div>
);

export default FileOrganization;
