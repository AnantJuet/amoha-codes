import React from "react";

const Hashing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Hashing in DBMS</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Hashing is a technique to directly compute the address of a data record using a
      hash function. It provides O(1) average-case access time for exact-match queries,
      making it faster than tree-based indexes for equality searches.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Hashing Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Hash Function:
h(K) = bucket address

Key → Hash Function → Bucket Number → Data

Example:
h(K) = K mod 10

Key  | h(K) | Bucket
-----|------|-------
101  |  1   |   1
205  |  5   |   5
312  |  2   |   2
407  |  7   |   7

Buckets:
[0] →
[1] → 101
[2] → 312
[3] →
[4] →
[5] → 205
[6] →
[7] → 407
[8] →
[9] → `}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hash Function Properties</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Uniform Distribution:</strong> Records evenly distributed across buckets</li>
        <li><strong>Deterministic:</strong> Same key always maps to same bucket</li>
        <li><strong>Fast Computation:</strong> O(1) to compute hash value</li>
        <li><strong>Minimize Collisions:</strong> Different keys to different buckets</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Collision Handling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Collision: Two keys hash to same bucket

h(101) = 1
h(201) = 1  ← Collision!

1. Open Addressing (Linear Probing):
   - If bucket full, try next bucket
   - h(K), h(K)+1, h(K)+2, ...

2. Chaining (Overflow Chains):
   - Each bucket has linked list

   [1] → 101 → 201 → NULL

3. Multiple Hashing:
   - Use second hash function
   - h1(K), h2(K), h1(K)+h2(K), ...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Static vs Dynamic Hashing</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Static Hashing</th>
            <th className="p-3 border">Dynamic Hashing</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Bucket Count</td>
            <td className="p-3 border">Fixed</td>
            <td className="p-3 border">Grows/shrinks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hash Function</td>
            <td className="p-3 border">Fixed</td>
            <td className="p-3 border">Adapts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Overflow</td>
            <td className="p-3 border">Uses chains</td>
            <td className="p-3 border">Splits buckets</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Examples</td>
            <td className="p-3 border">Simple hash files</td>
            <td className="p-3 border">Extendible, Linear</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Extendible Hashing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Extendible Hashing:
Uses directory that doubles when needed.

Global Depth: 2 (use 2 bits of hash)
Local Depth: Per bucket

Directory:          Buckets:
00 ----→ [A, B]    (Local depth: 2)
01 ----→ [C]       (Local depth: 2)
10 ----→ [D, E]    (Local depth: 2)
11 ----→ [F]       (Local depth: 2)

On overflow of bucket [A,B]:
1. Split bucket
2. Redistribute based on next bit
3. May double directory if needed

Advantage: No overflow chains
           Adapts to data size`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hashing vs B+ Tree</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Hashing</th>
            <th className="p-3 border">B+ Tree</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Equality Search</td>
            <td className="p-3 border text-green-500">O(1) average</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Range Search</td>
            <td className="p-3 border text-red-500">O(n) - not suitable</td>
            <td className="p-3 border text-green-500">O(log n + k)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sorted Order</td>
            <td className="p-3 border text-red-500">No</td>
            <td className="p-3 border text-green-500">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Case</td>
            <td className="p-3 border">Exact match only</td>
            <td className="p-3 border">General purpose</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Hashing provides O(1) equality search</li>
        <li>Not suitable for range queries</li>
        <li>Collisions handled by chaining or probing</li>
        <li>Dynamic hashing adapts to data size</li>
        <li>B+ Tree preferred for general purpose</li>
      </ul>
    </div>
  </div>
);

export default Hashing;
