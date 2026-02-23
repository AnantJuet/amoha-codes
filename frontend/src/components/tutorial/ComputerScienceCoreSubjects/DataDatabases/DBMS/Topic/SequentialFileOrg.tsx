import React from "react";

const SequentialFileOrg: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Sequential File Organization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Sequential file organization stores records in a specific order based on a search key.
      Records are arranged in sequence, making it efficient for processing data in order
      but less efficient for random access.
    </p>

    <h2 className="text-3xl font-bold mt-8">Characteristics</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Records stored in sorted order by key value</li>
        <li>Physical order matches logical order</li>
        <li>Efficient for range queries and sequential processing</li>
        <li>Used for batch processing applications</li>
        <li>Often used with indexed access for flexibility</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">File Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Sequential File Structure:
Block 1:
+-------+-------+-------+-------+
| Rec 1 | Rec 2 | Rec 3 | Rec 4 |
| ID=10 | ID=20 | ID=30 | ID=40 |
+-------+-------+-------+-------+

Block 2:
+-------+-------+-------+-------+
| Rec 5 | Rec 6 | Rec 7 | Rec 8 |
| ID=50 | ID=60 | ID=70 | ID=80 |
+-------+-------+-------+-------+

Records are stored in order by ID (search key).`}
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
            <td className="p-3 border font-semibold">Sequential Read</td>
            <td className="p-3 border">Read blocks in order</td>
            <td className="p-3 border">O(n) - efficient</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Search by Key</td>
            <td className="p-3 border">Binary search</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Insert</td>
            <td className="p-3 border">Find position, shift records</td>
            <td className="p-3 border">O(n) - expensive</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Delete</td>
            <td className="p-3 border">Mark/compact</td>
            <td className="p-3 border">O(n) with reorganization</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Insertions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Problem: Inserting ID=25 into sorted file

Method 1: Reorganize entire file
- Find correct position
- Shift all subsequent records
- Very expensive for large files

Method 2: Overflow blocks
- Insert into an overflow area
- Link to main file
- Periodic reorganization

+-------+-------+-------+-------+
| ID=10 | ID=20 | ID=30 | ID=40 | Main file
+-------+-------+-------+-------+
                    |
                    v
              +-------+
              | ID=25 | Overflow
              +-------+`}
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
            <td className="p-3 border">Efficient for range queries</td>
            <td className="p-3 border">Expensive insertions</td>
          </tr>
          <tr>
            <td className="p-3 border">Binary search possible</td>
            <td className="p-3 border">Expensive deletions</td>
          </tr>
          <tr>
            <td className="p-3 border">Good for batch processing</td>
            <td className="p-3 border">Periodic reorganization needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Simple implementation</td>
            <td className="p-3 border">Poor for random access</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Records stored in sorted order by search key</li>
        <li>Excellent for sequential access and range queries</li>
        <li>Insertions and deletions are expensive</li>
        <li>Overflow blocks help manage insertions</li>
        <li>Periodic reorganization required for performance</li>
        <li>Often combined with indexes for better access</li>
      </ul>
    </div>
  </div>
);

export default SequentialFileOrg;
