import React from 'react';

const VariablePartitioning: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Variable Partitioning
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Variable partitioning, also known as dynamic partitioning, overcomes many limitations of fixed
      partitioning by creating partitions dynamically based on the actual size of processes. This
      approach eliminates internal fragmentation but introduces external fragmentation.
    </p>

    {/* What is Variable Partitioning */}
    <h2 className="text-3xl font-bold mt-8">What is Variable Partitioning?</h2>
    <p className="leading-relaxed">
      In variable partitioning, partitions are created dynamically when processes are loaded into
      memory. Each partition is exactly the size of the process it contains. There are no fixed
      boundaries; the number and size of partitions change as processes arrive and depart.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Partitions are created at runtime based on process requirements</li>
      <li>Partition size = Process size (no internal fragmentation)</li>
      <li>Number of partitions varies with system activity</li>
      <li>Memory is initially one large block (hole)</li>
    </ul>

    {/* How it Works */}
    <h2 className="text-3xl font-bold mt-8">How Variable Partitioning Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Initial State:                    After Loading Processes:
┌────────────────────────┐        ┌────────────────────────┐
│    Operating System    │        │    Operating System    │
│         64 KB          │        │         64 KB          │
├────────────────────────┤        ├────────────────────────┤
│                        │        │      Process A         │
│                        │        │        100 KB          │
│                        │        ├────────────────────────┤
│       Free Memory      │   ──►  │      Process B         │
│        960 KB          │        │         50 KB          │
│                        │        ├────────────────────────┤
│                        │        │      Process C         │
│                        │        │        200 KB          │
│                        │        ├────────────────────────┤
│                        │        │        Free            │
│                        │        │        610 KB          │
└────────────────────────┘        └────────────────────────┘
`}
      </pre>
    </div>

    {/* Process Termination */}
    <h2 className="text-3xl font-bold mt-8">When Processes Terminate</h2>
    <p className="leading-relaxed">
      When a process terminates, its partition becomes a hole (free space). These holes are scattered
      throughout memory, creating external fragmentation.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Before B Terminates:              After B Terminates:
┌────────────────────────┐        ┌────────────────────────┐
│    Operating System    │        │    Operating System    │
├────────────────────────┤        ├────────────────────────┤
│      Process A         │        │      Process A         │
│        100 KB          │        │        100 KB          │
├────────────────────────┤        ├────────────────────────┤
│      Process B         │        │        Hole            │
│         50 KB          │   ──►  │         50 KB          │
├────────────────────────┤        ├────────────────────────┤
│      Process C         │        │      Process C         │
│        200 KB          │        │        200 KB          │
├────────────────────────┤        ├────────────────────────┤
│        Free            │        │        Free            │
│        610 KB          │        │        610 KB          │
└────────────────────────┘        └────────────────────────┘

Total Free = 50 KB + 610 KB = 660 KB (but not contiguous!)
`}
      </pre>
    </div>

    {/* External Fragmentation */}
    <h2 className="text-3xl font-bold mt-8">External Fragmentation</h2>
    <p className="leading-relaxed">
      External fragmentation occurs when there is enough total free memory to satisfy a request,
      but the available memory is not contiguous. The free memory exists as scattered holes.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Memory State:
┌────────────────────────┐
│         OS             │
├────────────────────────┤
│      Process A         │
│        100 KB          │
├────────────────────────┤
│        Hole 1          │   ← 50 KB free
│         50 KB          │
├────────────────────────┤
│      Process C         │
│        200 KB          │
├────────────────────────┤
│        Hole 2          │   ← 80 KB free
│         80 KB          │
├────────────────────────┤
│      Process D         │
│        150 KB          │
├────────────────────────┤
│        Hole 3          │   ← 100 KB free
│        100 KB          │
└────────────────────────┘

Total Free Memory: 50 + 80 + 100 = 230 KB
New Process Request: 200 KB

Result: CANNOT ALLOCATE!
Although 230 KB is free, no single hole is >= 200 KB
This is External Fragmentation.
`}
      </pre>
    </div>

    {/* Memory Allocation Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Memory Allocation Algorithms</h2>
    <p className="leading-relaxed">
      When a new process needs memory, the OS must choose which hole to use:
    </p>

    <h3 className="text-2xl font-semibold mt-6">First Fit</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Allocate the first hole that is large enough</li>
      <li>Fast because search ends as soon as a suitable hole is found</li>
      <li>Tends to leave fragments at the beginning of memory</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Best Fit</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Allocate the smallest hole that is large enough</li>
      <li>Requires searching entire list (unless sorted by size)</li>
      <li>Produces the smallest leftover hole, often too small to use</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Worst Fit</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Allocate the largest hole available</li>
      <li>Requires searching entire list</li>
      <li>Leaves a larger remaining hole that may be more useful</li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Allocation Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Available Holes: 100 KB, 500 KB, 200 KB, 300 KB, 600 KB
Process Request: 212 KB

First Fit:
- Searches: 100 KB (too small), 500 KB (fits!)
- Allocates from 500 KB hole
- Remaining hole: 500 - 212 = 288 KB
- Comparisons: 2

Best Fit:
- Searches all holes to find smallest that fits
- Options that fit: 500 KB, 300 KB, 600 KB
- Selects 300 KB (smallest that fits)
- Remaining hole: 300 - 212 = 88 KB
- Comparisons: 5

Worst Fit:
- Searches all holes to find largest
- Selects 600 KB (largest)
- Remaining hole: 600 - 212 = 388 KB
- Comparisons: 5
`}
      </pre>
    </div>

    {/* Hole Merging */}
    <h2 className="text-3xl font-bold mt-8">Hole Coalescing (Merging)</h2>
    <p className="leading-relaxed">
      When a process terminates, adjacent holes should be merged to form a larger hole.
      This reduces fragmentation.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Before Coalescing:                After Coalescing:
┌────────────────────────┐        ┌────────────────────────┐
│        Hole 1          │        │                        │
│         50 KB          │        │                        │
├────────────────────────┤        │     Merged Hole        │
│        Hole 2          │   ──►  │        130 KB          │
│         80 KB          │        │                        │
└────────────────────────┘        └────────────────────────┘

Two adjacent 50 KB and 80 KB holes become one 130 KB hole.
`}
      </pre>
    </div>

    {/* Comparison with Fixed Partitioning */}
    <h2 className="text-3xl font-bold mt-8">Variable vs Fixed Partitioning</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Fixed Partitioning</th>
            <th className="p-3 border">Variable Partitioning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Partition Size</td>
            <td className="p-3 border">Fixed at boot time</td>
            <td className="p-3 border">Dynamic, based on process size</td>
          </tr>
          <tr>
            <td className="p-3 border">Internal Fragmentation</td>
            <td className="p-3 border">Yes (can be significant)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">External Fragmentation</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes (can be significant)</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiprogramming</td>
            <td className="p-3 border">Limited by partition count</td>
            <td className="p-3 border">Limited by total memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Max Process Size</td>
            <td className="p-3 border">Limited by largest partition</td>
            <td className="p-3 border">Limited by largest hole</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">More complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>No internal fragmentation</li>
      <li>Better memory utilization than fixed partitioning</li>
      <li>No limit on the number of processes (depends on their sizes)</li>
      <li>Flexible partition sizes adapt to workload</li>
      <li>Can accommodate larger processes than fixed partitioning</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>External fragmentation reduces usable memory over time</li>
      <li>Compaction may be needed, which is expensive</li>
      <li>More complex allocation algorithms</li>
      <li>Need to track holes and their sizes</li>
      <li>May not be able to allocate even when total free memory is sufficient</li>
    </ul>

    {/* Solution to External Fragmentation */}
    <h2 className="text-3xl font-bold mt-8">Solutions to External Fragmentation</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Compaction:</strong> Move all processes together to create one large hole.
        Expensive and requires relocation support.
      </li>
      <li>
        <strong>Paging:</strong> Divide memory into fixed-size frames and processes into pages.
        Eliminates external fragmentation entirely.
      </li>
      <li>
        <strong>Segmentation with Paging:</strong> Combine benefits of both approaches.
      </li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Partitions are created dynamically based on process size</li>
      <li>No internal fragmentation but suffers from external fragmentation</li>
      <li>First Fit is generally fastest; Best Fit creates smallest leftovers</li>
      <li>Adjacent holes should be merged when processes terminate</li>
      <li>Compaction can solve external fragmentation but is expensive</li>
      <li>Led to the development of paging and segmentation techniques</li>
    </ul>
  </div>
);

export default VariablePartitioning;
