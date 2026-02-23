import React from "react";

const HeapFileOrg: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Heap File Organization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Heap file organization stores records in no particular order. Records are placed
      wherever there is space available. This is the simplest form of file organization
      and is efficient for bulk insertions but inefficient for searches.
    </p>

    <h2 className="text-3xl font-bold mt-8">Characteristics</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>No ordering of records</li>
        <li>Records placed wherever space exists</li>
        <li>Simplest file organization</li>
        <li>Also called "pile file" organization</li>
        <li>Default organization in many systems</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">File Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Heap File Structure (No ordering):
Block 1:
+-------+-------+-------+-------+
| Rec   | Rec   | Rec   | Rec   |
| ID=45 | ID=12 | ID=78 | ID=23 |
+-------+-------+-------+-------+

Block 2:
+-------+-------+-------+       +
| Rec   | Rec   | Rec   | Free  |
| ID=56 | ID=34 | ID=89 | Space |
+-------+-------+-------+       +

Block 3:
+-------+       +       +       +
| Rec   | Free  | Free  | Free  |
| ID=67 | Space | Space | Space |
+-------+       +       +       +

Records are not sorted - inserted wherever space available.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Cost</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Insert</td>
            <td className="p-3 border">Add to end or free space</td>
            <td className="p-3 border">O(1) - very fast</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Search by Key</td>
            <td className="p-3 border">Linear search</td>
            <td className="p-3 border">O(n) - slow</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Delete</td>
            <td className="p-3 border">Mark as deleted</td>
            <td className="p-3 border">O(n) search + O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Update</td>
            <td className="p-3 border">Find + modify</td>
            <td className="p-3 border">O(n) search</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Free Space Management</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Free Space List (Linked List):
Header -> Block 2 (has free space) -> Block 3 -> NULL
           |
           v
       +-------+-------+       +
       | Rec   | Rec   | Free  |
       | ID=34 | ID=89 | Space |
       +-------+-------+       +

On Insert:
1. Check free space list
2. Find block with enough space
3. Insert record
4. Update free space list if needed

On Delete:
1. Mark record as deleted
2. Add block to free space list if not already
3. Periodic compaction to reclaim space`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deletion Handling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Method 1: Mark as deleted
- Set a deletion flag
- Space reused on insert
- Requires periodic compaction

Method 2: Move last record
- Move last record to deleted position
- Reduces file size immediately
- May break pointers

Method 3: Linked free list within block
- Link deleted slots together
- Quick space reuse`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Very fast insertions</td>
            <td className="p-3 border">Slow search (linear)</td>
          </tr>
          <tr>
            <td className="p-3 border">Simple implementation</td>
            <td className="p-3 border">No ordering benefits</td>
          </tr>
          <tr>
            <td className="p-3 border">Good for bulk loading</td>
            <td className="p-3 border">Range queries inefficient</td>
          </tr>
          <tr>
            <td className="p-3 border">No reorganization needed</td>
            <td className="p-3 border">Space fragmentation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Records stored in no particular order</li>
        <li>Fast insertions (append at end)</li>
        <li>Linear search required for queries</li>
        <li>Best for tables without frequent searches</li>
        <li>Often used with indexes for efficient access</li>
        <li>Default organization in many database systems</li>
      </ul>
    </div>
  </div>
);

export default HeapFileOrg;
