import React from "react";

const DenseSpareIndex: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dense and Sparse Indexes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Dense and sparse indexes differ in how many index entries they maintain. Dense
      indexes have an entry for every record, while sparse indexes have entries for
      only some records (typically one per block).
    </p>

    <h2 className="text-3xl font-bold mt-8">Dense Index</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        A dense index has an index entry for every search key value in the data file.
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>One index entry per record</li>
        <li>Can directly locate any record</li>
        <li>Larger index size</li>
        <li>Works with unsorted files</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dense Index Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dense Index:                Data File:
+-----+------+              +-------+
| Key | Ptr  |              | Block |
+-----+------+              +-------+
| 10  | -----|------------> | ID=10 |
| 20  | -----|------------> | ID=20 |
| 30  | -----|------------> | ID=30 |
| 40  | -----|------------> | ID=40 |
| 50  | -----|------------> | ID=50 |
| 60  | -----|------------> | ID=60 |
+-----+------+              +-------+

Every record has an index entry.
Can directly find any record by key.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sparse Index</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        A sparse index has index entries for only some records (usually first record of each block).
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>One index entry per block (typically)</li>
        <li>Requires data to be sorted</li>
        <li>Smaller index size</li>
        <li>May need to scan within block</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sparse Index Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Sparse Index:               Data File (SORTED):
+-----+------+              +-------+-------+-------+
| Key | Ptr  |              |Block 1|Block 2|Block 3|
+-----+------+              +-------+-------+-------+
| 10  | -----|------------> | 10,20 |       |       |
| 30  | -----|---------------------->| 30,40 |       |
| 50  | -----|------------------------------>| 50,60 |
+-----+------+              +-------+-------+-------+

Only one entry per block.
To find ID=40:
1. Search index for largest key <= 40 (find 30)
2. Go to Block 2
3. Scan within block for ID=40`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Dense Index</th>
            <th className="p-3 border">Sparse Index</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Index entries</td>
            <td className="p-3 border">One per record</td>
            <td className="p-3 border">One per block</td>
          </tr>
          <tr>
            <td className="p-3 border">Index size</td>
            <td className="p-3 border">Larger</td>
            <td className="p-3 border">Smaller</td>
          </tr>
          <tr>
            <td className="p-3 border">Data file order</td>
            <td className="p-3 border">Any order OK</td>
            <td className="p-3 border">Must be sorted</td>
          </tr>
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">Direct access</td>
            <td className="p-3 border">Index + block scan</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert/Delete</td>
            <td className="p-3 border">More expensive</td>
            <td className="p-3 border">Less expensive</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Search Algorithms</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dense Index Search:
1. Binary search in index for key K
2. Follow pointer directly to record
Cost: log(n) index accesses + 1 data access

Sparse Index Search:
1. Binary search for largest key <= K
2. Follow pointer to data block
3. Scan block for key K
Cost: log(b) index accesses + 1 data access + block scan
where b = number of blocks`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Use Cases</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Use Dense Index when:
- Need fast access to individual records
- Data is not sorted
- Storage space not a concern
- Non-clustered index scenarios

Use Sparse Index when:
- Data is sorted (clustered)
- Want to minimize index size
- Frequently access sequential data
- Memory is limited`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Dense: Entry for every record</li>
        <li>Sparse: Entry for first record of each block</li>
        <li>Sparse index requires sorted data file</li>
        <li>Sparse index is smaller but needs block scan</li>
        <li>Dense index provides direct access</li>
        <li>Primary indexes are often sparse (on clustered data)</li>
      </ul>
    </div>
  </div>
);

export default DenseSpareIndex;
