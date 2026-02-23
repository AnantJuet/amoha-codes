import React from "react";

const BTreeIndex: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">B-Tree and B+ Tree Indexing</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      B-Trees and B+ Trees are self-balancing tree data structures optimized for disk access.
      They are the most commonly used index structures in modern database systems due to
      their efficient search, insert, and delete operations.
    </p>

    <h2 className="text-3xl font-bold mt-8">B-Tree Properties</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`B-Tree of order m:

1. Every node has at most m children
2. Every non-leaf node (except root) has at least ⌈m/2⌉ children
3. Root has at least 2 children (if not leaf)
4. All leaves appear at same level
5. A non-leaf node with k children has k-1 keys

Example B-Tree (order 3):

            [30]
           /    \\
       [10,20]  [40,50]
       / | \\    / | \\
      1 15 25  35 45 55

Properties:
- Balanced: All paths from root to leaves equal
- Sorted: Keys in order within and across nodes
- Self-adjusting: Maintains balance on insert/delete`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">B+ Tree Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`B+ Tree:

            [30 | 50]              ← Internal node
           /    |    \\
      [10,20] [30,40] [50,60]      ← Leaf nodes
         ↓       ↓       ↓
        data    data    data       ← Data pointers
         ←-------→←-------→        ← Leaf linked list

Key Differences from B-Tree:
1. All data pointers in leaf nodes only
2. Internal nodes only have keys (no data)
3. Leaf nodes linked for range queries
4. Keys may be duplicated (in internal nodes)

Advantages:
- More keys per internal node (smaller)
- Sequential access via leaf links
- More efficient range queries`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">B-Tree vs B+ Tree</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">B-Tree</th>
            <th className="p-3 border">B+ Tree</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Location</td>
            <td className="p-3 border">Any node</td>
            <td className="p-3 border">Leaf nodes only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Duplicate Keys</td>
            <td className="p-3 border">Not allowed</td>
            <td className="p-3 border">Allowed in internal</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Leaf Links</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes (linked list)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Range Queries</td>
            <td className="p-3 border">Slower</td>
            <td className="p-3 border">Efficient</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fan-out</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">B+ Tree Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Search Operation: O(log n)

Search for key 35:
1. Start at root [30|50]
2. 35 > 30 and 35 < 50 → go to middle child
3. Reach leaf [30,40]
4. Search in leaf → Found 35!

Insert Operation: O(log n)
1. Find appropriate leaf
2. Insert key in sorted order
3. If leaf overflows → Split
4. Propagate split upward if needed

Delete Operation: O(log n)
1. Find and remove key from leaf
2. If leaf underflows → Borrow or merge
3. Update internal nodes if needed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">B+ Tree Insert Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Insert 25 into B+ Tree (order 3, max 2 keys per node):

Before:
        [30]
       /    \\
   [10,20] [30,40]

Step 1: Find leaf for 25 → [10,20]
Step 2: Insert 25 → [10,20,25] OVERFLOW!
Step 3: Split leaf: [10] | [20,25]
Step 4: Promote 20 to parent

After:
        [20,30]
       /   |   \\
    [10] [20,25] [30,40]`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why B+ Tree for Databases?</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Disk-optimized:</strong> Each node = one disk block</li>
        <li><strong>High fan-out:</strong> Shallow tree, fewer disk reads</li>
        <li><strong>Range queries:</strong> Leaf links enable efficient scans</li>
        <li><strong>Predictable:</strong> All searches take same number of IOs</li>
        <li><strong>Self-balancing:</strong> No manual rebalancing needed</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>B+ Tree: Data only in leaves, linked leaves</li>
        <li>All operations O(log n)</li>
        <li>Self-balancing maintains efficiency</li>
        <li>Most used index structure in DBMS</li>
        <li>Optimized for disk-based storage</li>
      </ul>
    </div>
  </div>
);

export default BTreeIndex;
