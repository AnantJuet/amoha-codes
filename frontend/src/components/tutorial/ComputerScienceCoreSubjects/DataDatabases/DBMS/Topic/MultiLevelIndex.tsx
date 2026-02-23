import React from "react";

const MultiLevelIndex: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Multi-Level Indexes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Multi-level indexing creates a hierarchy of indexes to reduce search time. When a
      single-level index becomes too large, an index is created on top of the index,
      forming multiple levels.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Multi-Level Indexes?</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        When a single-level index is too large to fit in memory:
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Binary search requires multiple disk accesses</li>
        <li>Creating index on index reduces accesses</li>
        <li>Each level reduces search space by fan-out factor</li>
        <li>Eventually leads to B+ tree structure</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Level Index Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Level 2 (Outer Index):   [Points to blocks of Level 1]
+-----+------+
|  1  | -----|--+
| 100 | -----|--|--+
| 200 | -----|--|--|--+
+-----+------+  |  |  |
                v  v  v
Level 1 (Inner Index):   [Points to data blocks]
+-----+------+  +-----+------+  +-----+------+
|  1  | -----|  | 100 | -----|  | 200 | -----|
| 25  | -----|  | 125 | -----|  | 225 | -----|
| 50  | -----|  | 150 | -----|  | 250 | -----|
| 75  | -----|  | 175 | -----|  | 275 | -----|
+-----+------+  +-----+------+  +-----+------+
      |               |               |
      v               v               v
Data Blocks:
+--------+     +--------+     +--------+
|1-24    |     |100-124 |     |200-224 |
|25-49   |     |125-149 |     |225-249 |
|50-74   |     |150-174 |     |250-274 |
|75-99   |     |175-199 |     |275-299 |
+--------+     +--------+     +--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Search in Multi-Level Index</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`To find record with key = 160:

Step 1: Search Level 2 (Outer Index)
- Find largest key <= 160
- Found: 100, follow pointer to Level 1 block

Step 2: Search Level 1 (Inner Index)
- In block [100, 125, 150, 175]
- Find largest key <= 160
- Found: 150, follow pointer to data block

Step 3: Search Data Block
- Block contains records 150-174
- Scan to find key = 160

Total: 3 disk accesses (one per level + data)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Number of Levels</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Fan-out (fo) = entries per index block

For n records:
Number of levels = ceil(log_fo(n))

Example:
- 1,000,000 records
- 100 entries per index block (fo = 100)

Levels = ceil(log_100(1,000,000)) = ceil(3) = 3 levels

Disk accesses = 3 (index) + 1 (data) = 4

Compare to single-level binary search:
log_2(1,000,000) ≈ 20 disk accesses!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relationship to B+ Trees</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Multi-level indexes are essentially the foundation of B+ trees:
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
        <li>B+ trees are balanced multi-level indexes</li>
        <li>Dynamic - automatically maintain balance</li>
        <li>Handle insertions and deletions efficiently</li>
        <li>Static multi-level indexes don't handle updates well</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Limitations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Limitations</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Fewer disk accesses</td>
            <td className="p-3 border">Extra space for indexes</td>
          </tr>
          <tr>
            <td className="p-3 border">Logarithmic search time</td>
            <td className="p-3 border">Insert/delete overhead</td>
          </tr>
          <tr>
            <td className="p-3 border">Scales to large files</td>
            <td className="p-3 border">Static structure issues</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Index on index reduces disk accesses</li>
        <li>Number of levels depends on fan-out and file size</li>
        <li>Top level should fit in memory</li>
        <li>Multi-level indexes lead to tree structures</li>
        <li>B+ trees are dynamic multi-level indexes</li>
        <li>Dramatically faster than single-level for large files</li>
      </ul>
    </div>
  </div>
);

export default MultiLevelIndex;
