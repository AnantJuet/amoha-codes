import React from "react";

const JoinAlgorithms: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Join Algorithms
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Join algorithms are methods for combining tuples from two relations based on a
      join condition. Different algorithms have different performance characteristics
      depending on data size, available memory, and index availability.
    </p>

    <h2 className="text-3xl font-bold mt-8">Common Join Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Best For</th>
            <th className="p-3 border">Complexity</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Nested Loop</td>
            <td className="p-3 border">Small tables, no index</td>
            <td className="p-3 border">O(n * m)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Block Nested Loop</td>
            <td className="p-3 border">Larger tables, limited memory</td>
            <td className="p-3 border">O(n * m / B)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Index Nested Loop</td>
            <td className="p-3 border">Index on inner table</td>
            <td className="p-3 border">O(n * log m)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sort-Merge</td>
            <td className="p-3 border">Pre-sorted or sortable data</td>
            <td className="p-3 border">O(n log n + m log m)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hash Join</td>
            <td className="p-3 border">Equi-joins, sufficient memory</td>
            <td className="p-3 border">O(n + m)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Nested Loop Join</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`for each tuple r in R (outer):
    for each tuple s in S (inner):
        if r and s satisfy join condition:
            output (r, s)

Cost: n_R * n_S tuple comparisons
      b_R + n_R * b_S block accesses

Where:
- n_R, n_S = number of tuples
- b_R, b_S = number of blocks

Better to use smaller relation as outer.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Block Nested Loop Join</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`for each block B_R in R:
    for each block B_S in S:
        for each tuple r in B_R:
            for each tuple s in B_S:
                if join condition satisfied:
                    output (r, s)

Cost: b_R + b_R * b_S block accesses

Much better than tuple-at-a-time nested loop.
Uses memory buffer for blocks.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Sort-Merge Join</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Phase 1: Sort both relations on join attribute
Phase 2: Merge sorted relations

Merge phase (for equi-join):
r = first tuple of R
s = first tuple of S
while not end of either relation:
    if r.A < s.B: advance r
    else if r.A > s.B: advance s
    else:  // r.A == s.B
        output all matching pairs
        advance both

Cost: Sort cost + n_R + n_S (merge is linear)
Good when data is already sorted.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Hash Join</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Phase 1: Build (on smaller relation R)
    Create hash table on R using join attribute
    hash(r.A) -> bucket for each r in R

Phase 2: Probe (with larger relation S)
    for each s in S:
        probe hash table with hash(s.B)
        for each matching r in bucket:
            if r.A == s.B:
                output (r, s)

Cost: O(n_R + n_S) if hash table fits in memory

Best for equi-joins with sufficient memory.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm Selection</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Small tables:</strong> Nested loop is often fine</li>
        <li><strong>Index available:</strong> Index nested loop</li>
        <li><strong>Sorted data:</strong> Sort-merge join</li>
        <li><strong>Equi-join with memory:</strong> Hash join</li>
        <li><strong>Non-equi join:</strong> Nested loop or sort-merge</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Hash join is fastest for equi-joins with enough memory</li>
        <li>Sort-merge is good when data is pre-sorted</li>
        <li>Index nested loop leverages existing indexes</li>
        <li>Smaller relation should be outer in nested loop</li>
        <li>Query optimizer chooses based on statistics</li>
        <li>Different joins suit different situations</li>
      </ul>
    </div>
  </div>
);

export default JoinAlgorithms;
