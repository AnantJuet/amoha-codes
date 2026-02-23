import React from 'react';

const FixedPartitioning: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Fixed Partitioning
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Fixed partitioning, also known as static partitioning, is one of the earliest memory management
      techniques. In this scheme, memory is divided into fixed-size partitions at system startup, and
      these partitions remain constant throughout system operation.
    </p>

    {/* What is Fixed Partitioning */}
    <h2 className="text-3xl font-bold mt-8">What is Fixed Partitioning?</h2>
    <p className="leading-relaxed">
      In fixed partitioning, the main memory is divided into a set of non-overlapping partitions
      of predetermined sizes. Each partition can hold exactly one process, and the number of
      partitions determines the degree of multiprogramming.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Partition sizes are fixed at boot time</li>
      <li>Partitions can be of equal or different sizes</li>
      <li>Each partition holds exactly one process</li>
      <li>Number of partitions = Maximum degree of multiprogramming</li>
    </ul>

    {/* Types of Fixed Partitioning */}
    <h2 className="text-3xl font-bold mt-8">Types of Fixed Partitioning</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Equal-Size Partitions</h3>
    <p className="leading-relaxed">
      All partitions are of the same size. Simple but inflexible.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Memory: 1 MB divided into 4 equal partitions of 256 KB each

┌─────────────────────────────────────┐
│        Operating System             │
│            (256 KB)                 │
├─────────────────────────────────────┤
│         Partition 1                 │
│            256 KB                   │
├─────────────────────────────────────┤
│         Partition 2                 │
│            256 KB                   │
├─────────────────────────────────────┤
│         Partition 3                 │
│            256 KB                   │
├─────────────────────────────────────┤
│         Partition 4                 │
│            256 KB                   │
└─────────────────────────────────────┘
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Unequal-Size Partitions</h3>
    <p className="leading-relaxed">
      Partitions have different sizes to accommodate different process requirements. More flexible
      and reduces internal fragmentation.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Memory: 1 MB divided into unequal partitions

┌─────────────────────────────────────┐
│        Operating System             │
│            (128 KB)                 │
├─────────────────────────────────────┤
│         Partition 1                 │
│            64 KB                    │
├─────────────────────────────────────┤
│         Partition 2                 │
│            128 KB                   │
├─────────────────────────────────────┤
│         Partition 3                 │
│            256 KB                   │
├─────────────────────────────────────┤
│         Partition 4                 │
│            512 KB                   │
└─────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Placement Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Process Placement Strategies</h2>

    <h3 className="text-2xl font-semibold mt-6">For Equal-Size Partitions</h3>
    <p className="leading-relaxed">
      Any free partition can be used since all are the same size. Processes are queued, and when a
      partition becomes free, the next process from the queue is loaded.
    </p>

    <h3 className="text-2xl font-semibold mt-6">For Unequal-Size Partitions</h3>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>One Queue per Partition:</strong> Each partition has its own queue. A process is
        assigned to the smallest partition that can hold it.
        <ul className="list-disc list-inside ml-6 mt-1">
          <li>Minimizes internal fragmentation</li>
          <li>May leave large partitions idle while small ones have queues</li>
        </ul>
      </li>
      <li>
        <strong>Single Queue for All Partitions:</strong> One common queue for all processes.
        When a partition becomes free, select the best-fitting process.
        <ul className="list-disc list-inside ml-6 mt-1">
          <li>Better utilization of large partitions</li>
          <li>More complex scheduling decisions</li>
        </ul>
      </li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Multiple Queues:                    Single Queue:

Queue for 64KB:  [P1, P4]           ┌─────────────────┐
Queue for 128KB: [P2]               │ P1, P2, P3, P4  │
Queue for 256KB: [P3, P5]           └─────────────────┘
Queue for 512KB: []                         │
                                            ▼
    │                               Select best fit for
    ▼                               available partition
Each process goes to
smallest fitting queue
`}
      </pre>
    </div>

    {/* Internal Fragmentation */}
    <h2 className="text-3xl font-bold mt-8">Internal Fragmentation</h2>
    <p className="leading-relaxed">
      Fixed partitioning suffers from internal fragmentation. When a process is smaller than the
      partition it occupies, the unused space within the partition is wasted.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Example: Process of 70 KB in a 256 KB partition

┌─────────────────────────────────────┐
│                                     │
│          Process A                  │
│            70 KB                    │
│                                     │
├ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│                                     │
│      Internal Fragmentation         │
│         256 - 70 = 186 KB           │
│           (WASTED)                  │
│                                     │
└─────────────────────────────────────┘

Internal Fragmentation = Partition Size - Process Size
                       = 256 KB - 70 KB = 186 KB
`}
      </pre>
    </div>

    {/* Example Calculation */}
    <h2 className="text-3xl font-bold mt-8">Example: Internal Fragmentation Calculation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given: Memory with 4 equal partitions of 256 KB each
Processes: P1 = 100 KB, P2 = 200 KB, P3 = 50 KB, P4 = 180 KB

Allocation:
┌───────────┬─────────────┬──────────────┬────────────────────┐
│ Partition │ Process     │ Process Size │ Internal Frag      │
├───────────┼─────────────┼──────────────┼────────────────────┤
│ 256 KB    │ P1          │ 100 KB       │ 256 - 100 = 156 KB │
├───────────┼─────────────┼──────────────┼────────────────────┤
│ 256 KB    │ P2          │ 200 KB       │ 256 - 200 = 56 KB  │
├───────────┼─────────────┼──────────────┼────────────────────┤
│ 256 KB    │ P3          │ 50 KB        │ 256 - 50 = 206 KB  │
├───────────┼─────────────┼──────────────┼────────────────────┤
│ 256 KB    │ P4          │ 180 KB       │ 256 - 180 = 76 KB  │
└───────────┴─────────────┴──────────────┴────────────────────┘

Total Internal Fragmentation = 156 + 56 + 206 + 76 = 494 KB

Memory Utilization = (100 + 200 + 50 + 180) / (256 × 4)
                   = 530 / 1024
                   = 51.76%
`}
      </pre>
    </div>

    {/* Limitations */}
    <h2 className="text-3xl font-bold mt-8">Limitations of Fixed Partitioning</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Process Size Limitation:</strong> A process cannot be larger than the largest
        partition size. Large processes cannot run.
      </li>
      <li>
        <strong>Internal Fragmentation:</strong> Space within a partition remains unused when
        process is smaller than partition.
      </li>
      <li>
        <strong>Limited Multiprogramming:</strong> Degree of multiprogramming is limited by the
        number of partitions, not by process sizes.
      </li>
      <li>
        <strong>Poor Memory Utilization:</strong> Small processes in large partitions waste memory.
      </li>
      <li>
        <strong>Inflexibility:</strong> Cannot adjust partition sizes to match workload.
      </li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Simple to implement and understand</li>
      <li>Little operating system overhead</li>
      <li>Fast allocation (just find any free partition that fits)</li>
      <li>No external fragmentation</li>
      <li>Easy to keep track of memory using simple data structures</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Internal fragmentation wastes memory</li>
      <li>Maximum process size limited by largest partition</li>
      <li>Fixed degree of multiprogramming</li>
      <li>Cannot adapt to changing workloads</li>
      <li>Poor overall memory utilization</li>
    </ul>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">Equal vs Unequal Partitions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Equal Partitions</th>
            <th className="p-3 border">Unequal Partitions</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Flexibility</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">Internal Fragmentation</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower</td>
          </tr>
          <tr>
            <td className="p-3 border">Placement Algorithm</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">More complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Queue Management</td>
            <td className="p-3 border">Single queue</td>
            <td className="p-3 border">Multiple queues or best-fit</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Memory is divided into fixed partitions at boot time</li>
      <li>Each partition holds exactly one process</li>
      <li>Suffers from internal fragmentation (no external fragmentation)</li>
      <li>Process size cannot exceed largest partition size</li>
      <li>Unequal partitions reduce fragmentation compared to equal partitions</li>
      <li>Largely replaced by variable partitioning and paging in modern systems</li>
    </ul>
  </div>
);

export default FixedPartitioning;
