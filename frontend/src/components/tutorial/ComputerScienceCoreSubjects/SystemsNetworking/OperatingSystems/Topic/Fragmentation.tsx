import React from 'react';

const Fragmentation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Memory Fragmentation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Fragmentation is a phenomenon where memory space is used inefficiently, reducing capacity and
      potentially preventing allocation even when sufficient total memory exists. Understanding
      fragmentation is essential for designing effective memory management systems.
    </p>

    {/* What is Fragmentation */}
    <h2 className="text-3xl font-bold mt-8">What is Fragmentation?</h2>
    <p className="leading-relaxed">
      Fragmentation occurs when memory is divided into small, non-contiguous blocks over time due
      to allocation and deallocation patterns. This wasted space cannot be used effectively, leading
      to poor memory utilization and potential allocation failures.
    </p>

    {/* Types of Fragmentation */}
    <h2 className="text-3xl font-bold mt-8">Types of Fragmentation</h2>
    <p className="leading-relaxed">
      There are two main types of fragmentation:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Internal Fragmentation:</strong> Wasted space within allocated blocks</li>
      <li><strong>External Fragmentation:</strong> Wasted space between allocated blocks</li>
    </ul>

    {/* Internal Fragmentation */}
    <h2 className="text-3xl font-bold mt-8">Internal Fragmentation</h2>
    <p className="leading-relaxed">
      Internal fragmentation occurs when allocated memory is larger than the requested memory.
      The extra space within the allocated block is wasted because it cannot be used by other processes.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Fixed Partition of 256 KB allocated to a 70 KB process:

┌───────────────────────────────────────────┐
│                                           │
│              Process A                    │
│               70 KB                       │
│                                           │
├ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                           │
│          INTERNAL FRAGMENTATION           │
│           256 - 70 = 186 KB               │
│                                           │
│   (This space is WASTED - cannot be       │
│    used by any other process)             │
│                                           │
└───────────────────────────────────────────┘
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Causes of Internal Fragmentation</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Fixed-size partitions that don't match process sizes</li>
      <li>Block allocation that rounds up to fixed sizes (e.g., page size)</li>
      <li>Memory allocation with alignment requirements</li>
      <li>Pre-allocated buffers larger than actual data</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Where Internal Fragmentation Occurs</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System</th>
            <th className="p-3 border">Cause</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Fixed Partitioning</td>
            <td className="p-3 border">Process smaller than partition</td>
          </tr>
          <tr>
            <td className="p-3 border">Paging</td>
            <td className="p-3 border">Last page not completely filled</td>
          </tr>
          <tr>
            <td className="p-3 border">Buddy System</td>
            <td className="p-3 border">Power-of-2 block sizes</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* External Fragmentation */}
    <h2 className="text-3xl font-bold mt-8">External Fragmentation</h2>
    <p className="leading-relaxed">
      External fragmentation occurs when there is enough total free memory to satisfy a request,
      but the available memory is scattered in non-contiguous blocks. No single block is large
      enough for the allocation.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Memory State with External Fragmentation:

┌─────────────────────────────────────┐
│            OS (64 KB)               │
├─────────────────────────────────────┤
│          Process A (100 KB)         │
├─────────────────────────────────────┤
│         Hole 1 (50 KB)              │  ← Free
├─────────────────────────────────────┤
│          Process B (80 KB)          │
├─────────────────────────────────────┤
│         Hole 2 (40 KB)              │  ← Free
├─────────────────────────────────────┤
│          Process C (120 KB)         │
├─────────────────────────────────────┤
│         Hole 3 (60 KB)              │  ← Free
└─────────────────────────────────────┘

Total Free Memory: 50 + 40 + 60 = 150 KB
Request for 100 KB: FAILS!

Although 150 KB is free, the largest contiguous
block is only 60 KB. This is External Fragmentation.
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Causes of External Fragmentation</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Variable-size allocation and deallocation patterns</li>
      <li>Processes of different sizes arriving and leaving at different times</li>
      <li>Long-running processes holding memory while others complete</li>
      <li>Memory allocation strategies that create small unusable gaps</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Where External Fragmentation Occurs</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Variable (dynamic) partitioning</li>
      <li>Segmentation</li>
      <li>Any contiguous allocation scheme with variable-size blocks</li>
    </ul>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">Internal vs External Fragmentation</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Internal Fragmentation</th>
            <th className="p-3 border">External Fragmentation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Location</td>
            <td className="p-3 border">Inside allocated blocks</td>
            <td className="p-3 border">Between allocated blocks</td>
          </tr>
          <tr>
            <td className="p-3 border">Cause</td>
            <td className="p-3 border">Fixed allocation size</td>
            <td className="p-3 border">Variable allocation/deallocation</td>
          </tr>
          <tr>
            <td className="p-3 border">Fixed Partitioning</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Variable Partitioning</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Paging</td>
            <td className="p-3 border">Yes (last page)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Segmentation</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Solution</td>
            <td className="p-3 border">Better size matching</td>
            <td className="p-3 border">Compaction, paging</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Measuring Fragmentation */}
    <h2 className="text-3xl font-bold mt-8">Measuring Fragmentation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Internal Fragmentation:
IF = Allocated Memory - Used Memory

Example:
- Partition Size = 256 KB
- Process Size = 70 KB
- Internal Fragmentation = 256 - 70 = 186 KB

---

External Fragmentation:
Can be measured as the percentage of free memory that is unusable.

EF = (Total Free Memory - Largest Free Block) / Total Free Memory

Example:
- Holes: 50 KB, 40 KB, 60 KB
- Total Free = 150 KB
- Largest Block = 60 KB
- EF = (150 - 60) / 150 = 60%

This means 60% of free memory is fragmented.
`}
      </pre>
    </div>

    {/* 50-Percent Rule */}
    <h2 className="text-3xl font-bold mt-8">The 50-Percent Rule</h2>
    <p className="leading-relaxed">
      Statistical analysis of memory allocation patterns shows that given N allocated blocks, on
      average, 0.5N blocks will be lost to fragmentation. This is known as the 50-percent rule.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>For every N allocated blocks, approximately N/2 blocks are holes</li>
      <li>This means about 1/3 of memory may be unusable due to external fragmentation</li>
      <li>This motivates the need for compaction or non-contiguous allocation</li>
    </ul>

    {/* Solutions */}
    <h2 className="text-3xl font-bold mt-8">Solutions to Fragmentation</h2>

    <h3 className="text-2xl font-semibold mt-6">For Internal Fragmentation</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Use variable-size partitions instead of fixed</li>
      <li>Choose smaller allocation units (smaller page sizes)</li>
      <li>Match allocation size more closely to actual needs</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">For External Fragmentation</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Compaction:</strong> Move allocated blocks together to create larger free blocks.
        Expensive in terms of time and requires relocation support.
      </li>
      <li>
        <strong>Paging:</strong> Divide memory into fixed-size frames. Process pages can be placed
        in any available frame. Eliminates external fragmentation.
      </li>
      <li>
        <strong>Segmentation with Paging:</strong> Combine segmentation with paging to get benefits
        of both approaches.
      </li>
      <li>
        <strong>Virtual Memory:</strong> Allow processes to use more memory than physically available.
      </li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Internal fragmentation wastes space within allocated blocks</li>
      <li>External fragmentation wastes space between allocated blocks</li>
      <li>Fixed partitioning causes internal fragmentation</li>
      <li>Variable partitioning causes external fragmentation</li>
      <li>Paging eliminates external fragmentation but has minor internal fragmentation</li>
      <li>Compaction solves external fragmentation but is expensive</li>
      <li>The 50-percent rule predicts about 1/3 memory loss to fragmentation</li>
    </ul>
  </div>
);

export default Fragmentation;
