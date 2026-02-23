import React from 'react';

const MemoryAllocation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Memory Allocation Strategies
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Memory allocation is the process of assigning memory blocks to various processes. When a process
      needs memory, the operating system must decide where in physical memory to place the process.
      There are several strategies for making this decision, each with its own advantages and disadvantages.
    </p>

    {/* Types of Memory Allocation */}
    <h2 className="text-3xl font-bold mt-8">Types of Memory Allocation</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Contiguous Memory Allocation:</strong> Each process occupies a single contiguous
        block of memory.
      </li>
      <li>
        <strong>Non-Contiguous Memory Allocation:</strong> A process can be divided into several
        blocks placed at different locations (paging, segmentation).
      </li>
    </ul>

    {/* Single Partition Allocation */}
    <h2 className="text-3xl font-bold mt-8">Single Partition Allocation</h2>
    <p className="leading-relaxed">
      In the simplest form, memory is divided into two partitions: one for the operating system and
      one for user processes. Only one user process can be in memory at a time.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
┌─────────────────────────┐  High Address
│                         │
│    User Process         │
│    (Single process      │
│     at a time)          │
│                         │
├─────────────────────────┤
│    Operating System     │
│    (Usually in low      │
│     memory or high      │
│     memory)             │
└─────────────────────────┘  Low Address
`}
      </pre>
    </div>

    {/* Multiple Partition Allocation */}
    <h2 className="text-3xl font-bold mt-8">Multiple Partition Allocation</h2>
    <p className="leading-relaxed">
      Memory is divided into several partitions, each capable of holding one process. This enables
      multiprogramming by allowing multiple processes in memory simultaneously.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Fixed Partitioning:</strong> Partitions are of fixed, predetermined sizes</li>
      <li><strong>Variable Partitioning:</strong> Partitions are created dynamically based on process needs</li>
    </ul>

    {/* Memory Allocation Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Memory Allocation Algorithms</h2>
    <p className="leading-relaxed">
      When a process needs memory, the OS must choose which free block (hole) to allocate. The main
      algorithms are:
    </p>

    {/* First Fit */}
    <h3 className="text-2xl font-semibold mt-6">1. First Fit</h3>
    <p className="leading-relaxed">
      Allocate the first hole that is big enough. The search starts from the beginning of memory
      or from where the previous search ended.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>Advantage:</strong> Fast because it finds a hole quickly</li>
      <li><strong>Disadvantage:</strong> May leave many small holes near the beginning of memory</li>
    </ul>

    {/* Best Fit */}
    <h3 className="text-2xl font-semibold mt-6">2. Best Fit</h3>
    <p className="leading-relaxed">
      Allocate the smallest hole that is big enough. This requires searching the entire list (unless
      sorted by size) to find the best match.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>Advantage:</strong> Produces the smallest leftover hole, minimizing wasted space</li>
      <li><strong>Disadvantage:</strong> Slower due to entire list search; creates tiny, unusable fragments</li>
    </ul>

    {/* Worst Fit */}
    <h3 className="text-2xl font-semibold mt-6">3. Worst Fit</h3>
    <p className="leading-relaxed">
      Allocate the largest hole available. The idea is that the remaining piece will still be large
      enough to be useful.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>Advantage:</strong> Leaves larger remaining holes that may be useful</li>
      <li><strong>Disadvantage:</strong> Slower due to entire list search; quickly fragments large holes</li>
    </ul>

    {/* Next Fit */}
    <h3 className="text-2xl font-semibold mt-6">4. Next Fit</h3>
    <p className="leading-relaxed">
      Similar to first fit, but the search starts from the location of the last allocation instead
      of from the beginning.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>Advantage:</strong> More evenly distributes allocations across memory</li>
      <li><strong>Disadvantage:</strong> May break up large blocks at the end of memory</li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Comparing Allocation Algorithms</h2>
    <p className="leading-relaxed">
      Consider a memory with the following free holes (in order):
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Memory Layout:
┌───────┬───────┬───────┬───────┬───────┐
│ Hole  │ Hole  │ Hole  │ Hole  │ Hole  │
│ 100K  │ 500K  │ 200K  │ 300K  │ 600K  │
└───────┴───────┴───────┴───────┴───────┘

Process Request: 212 KB

Allocation Decision:
┌─────────────┬───────────────────┬─────────────────────┐
│ Algorithm   │ Hole Selected     │ Remaining Hole      │
├─────────────┼───────────────────┼─────────────────────┤
│ First Fit   │ 500K (first fit)  │ 500 - 212 = 288K    │
├─────────────┼───────────────────┼─────────────────────┤
│ Best Fit    │ 300K (smallest    │ 300 - 212 = 88K     │
│             │ that fits)        │                     │
├─────────────┼───────────────────┼─────────────────────┤
│ Worst Fit   │ 600K (largest)    │ 600 - 212 = 388K    │
└─────────────┴───────────────────┴─────────────────────┘
`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Criteria</th>
            <th className="p-3 border">First Fit</th>
            <th className="p-3 border">Best Fit</th>
            <th className="p-3 border">Worst Fit</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Slow</td>
            <td className="p-3 border">Slow</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Utilization</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Best</td>
            <td className="p-3 border">Poor</td>
          </tr>
          <tr>
            <td className="p-3 border">External Fragmentation</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">High (tiny fragments)</td>
            <td className="p-3 border">Low (initially)</td>
          </tr>
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Complex</td>
            <td className="p-3 border">Complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Data Structures for Free Memory */}
    <h2 className="text-3xl font-bold mt-8">Data Structures for Managing Free Memory</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Bitmap:</strong> Memory divided into units; each unit has a bit (0=free, 1=allocated).
        Simple but slow to find contiguous free blocks.
      </li>
      <li>
        <strong>Linked List:</strong> Each node represents a segment (hole or process) with start
        address and size. Easy to update but search can be slow.
      </li>
      <li>
        <strong>Buddy System:</strong> Memory divided into power-of-2 sized blocks. Fast coalescing
        but causes internal fragmentation.
      </li>
    </ul>

    {/* Bitmap Example */}
    <h2 className="text-3xl font-bold mt-8">Bitmap Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Memory (each block = 1 KB):
┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐
│A│A│A│ │ │B│B│B│B│B│ │ │C│C│ │ │
└─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘
 0 1 2 3 4 5 6 7 8 9 ...

Bitmap:
1 1 1 0 0 1 1 1 1 1 0 0 1 1 0 0

Where: 1 = Allocated, 0 = Free

To allocate 2 KB: Find two consecutive 0s
`}
      </pre>
    </div>

    {/* Linked List Example */}
    <h2 className="text-3xl font-bold mt-8">Linked List Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ Process  │    │   Hole   │    │ Process  │    │   Hole   │
│ Start: 0 │───►│ Start: 3 │───►│ Start: 5 │───►│ Start:10 │──► NULL
│ Size: 3  │    │ Size: 2  │    │ Size: 5  │    │ Size: 6  │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>First Fit is generally fastest and performs reasonably well</li>
      <li>Best Fit produces smallest leftover holes but creates many tiny unusable fragments</li>
      <li>Worst Fit tries to keep large holes but fragments memory quickly</li>
      <li>First Fit and Best Fit generally outperform Worst Fit</li>
      <li>Memory management requires efficient data structures (bitmap or linked list)</li>
      <li>All contiguous allocation strategies suffer from external fragmentation</li>
    </ul>
  </div>
);

export default MemoryAllocation;
