import React from 'react';

const ContiguousAllocation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Contiguous Memory Allocation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Contiguous memory allocation is a memory management technique where each process is allocated
      a single contiguous section of memory. This was one of the earliest memory allocation schemes
      and serves as the foundation for understanding more complex techniques.
    </p>

    {/* What is Contiguous Allocation */}
    <h2 className="text-3xl font-bold mt-8">What is Contiguous Allocation?</h2>
    <p className="leading-relaxed">
      In contiguous allocation, each process is contained in a single contiguous block of memory.
      The memory is divided into partitions, and each partition holds exactly one process. The main
      memory is usually divided into two regions: one for the resident operating system and one for
      user processes.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
┌─────────────────────────────────────────┐
│           Operating System              │
├─────────────────────────────────────────┤
│                                         │
│           Process A                     │
│      (Contiguous Block)                 │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│           Process B                     │
│      (Contiguous Block)                 │
│                                         │
├─────────────────────────────────────────┤
│           Process C                     │
├─────────────────────────────────────────┤
│                                         │
│              Free                       │
│             (Hole)                      │
│                                         │
└─────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Memory Protection */}
    <h2 className="text-3xl font-bold mt-8">Memory Protection in Contiguous Allocation</h2>
    <p className="leading-relaxed">
      Hardware support using base (relocation) and limit registers provides memory protection:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Base Register:</strong> Contains the starting physical address of the process</li>
      <li><strong>Limit Register:</strong> Contains the size of the process's address space</li>
    </ul>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Address Validation:

    Logical Address
         │
         ▼
    ┌─────────┐
    │   <     │◄── Limit Register
    └────┬────┘
         │ YES               │ NO
         ▼                   ▼
    ┌─────────┐         ┌─────────┐
    │    +    │         │  Trap:  │
    └────┬────┘         │ Address │
         │              │  Error  │
         │◄── Base      └─────────┘
         │    Register
         ▼
    Physical Address
`}
      </pre>
    </div>

    {/* Types of Contiguous Allocation */}
    <h2 className="text-3xl font-bold mt-8">Types of Contiguous Allocation</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Fragmentation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Fixed Partitioning</td>
            <td className="p-3 border">Memory divided into fixed-size partitions at boot time</td>
            <td className="p-3 border">Internal fragmentation</td>
          </tr>
          <tr>
            <td className="p-3 border">Variable Partitioning</td>
            <td className="p-3 border">Partitions created dynamically based on process size</td>
            <td className="p-3 border">External fragmentation</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Hole Management */}
    <h2 className="text-3xl font-bold mt-8">Hole Management</h2>
    <p className="leading-relaxed">
      A hole is a block of available (free) memory. Holes of various sizes are scattered throughout
      memory. When a process arrives, it is allocated memory from a hole large enough to accommodate it.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Initial State:                    After Process B Terminates:
┌────────────────┐                ┌────────────────┐
│       OS       │                │       OS       │
├────────────────┤                ├────────────────┤
│   Process A    │                │   Process A    │
│     (50K)      │                │     (50K)      │
├────────────────┤                ├────────────────┤
│   Process B    │                │     Hole       │
│     (30K)      │    ──────►     │     (30K)      │
├────────────────┤                ├────────────────┤
│   Process C    │                │   Process C    │
│     (40K)      │                │     (40K)      │
├────────────────┤                ├────────────────┤
│     Hole       │                │     Hole       │
│     (20K)      │                │     (20K)      │
└────────────────┘                └────────────────┘
`}
      </pre>
    </div>

    {/* Dynamic Storage Allocation */}
    <h2 className="text-3xl font-bold mt-8">Dynamic Storage Allocation Problem</h2>
    <p className="leading-relaxed">
      The dynamic storage allocation problem concerns how to satisfy a request of size n from a list
      of free holes. The main strategies are:
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>First Fit:</strong> Allocate the first hole that is big enough.
        Fastest; search can start from beginning or last position.
      </li>
      <li>
        <strong>Best Fit:</strong> Allocate the smallest hole that is big enough.
        Produces smallest leftover hole; must search entire list unless sorted.
      </li>
      <li>
        <strong>Worst Fit:</strong> Allocate the largest hole.
        Produces largest leftover; must search entire list.
      </li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Memory Allocation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Initial Memory State:
┌────────┬────────┬────────┬────────┬────────┐
│  OS    │ Hole   │ Proc X │ Hole   │ Hole   │
│  64K   │ 100K   │  50K   │ 150K   │ 200K   │
└────────┴────────┴────────┴────────┴────────┘

Process Request: 80 KB

First Fit:  Allocates from first hole (100K)
            Result: 100K - 80K = 20K hole remains

Best Fit:   Allocates from 100K hole (smallest that fits)
            Result: 100K - 80K = 20K hole remains

Worst Fit:  Allocates from 200K hole (largest)
            Result: 200K - 80K = 120K hole remains
`}
      </pre>
    </div>

    {/* Address Translation Example */}
    <h2 className="text-3xl font-bold mt-8">Address Translation Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given:
- Process allocated at physical address 100000
- Process size: 50000 bytes
- Base Register = 100000
- Limit Register = 50000

CPU generates logical address: 25000

Step 1: Check if logical address < limit
        25000 < 50000? YES

Step 2: Calculate physical address
        Physical = Base + Logical
        Physical = 100000 + 25000 = 125000

Result: Access memory location 125000

---

CPU generates logical address: 60000

Step 1: Check if logical address < limit
        60000 < 50000? NO

Result: TRAP - Addressing Error!
        Process tried to access memory outside its bounds
`}
      </pre>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Contiguous Allocation</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Simple to implement and understand</li>
      <li>Fast address translation (simple base + offset calculation)</li>
      <li>Efficient sequential access to process memory</li>
      <li>Hardware support (base/limit registers) is straightforward</li>
      <li>No complex data structures needed for address translation</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Contiguous Allocation</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>External fragmentation in variable partitioning</li>
      <li>Internal fragmentation in fixed partitioning</li>
      <li>Difficulty in allocating memory for growing processes</li>
      <li>May need to move entire processes for compaction</li>
      <li>Limited flexibility in memory usage</li>
      <li>Process size limited by available contiguous memory</li>
    </ul>

    {/* When to Use */}
    <h2 className="text-3xl font-bold mt-8">When is Contiguous Allocation Used?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Simple embedded systems with limited memory requirements</li>
      <li>Real-time systems where predictable memory access is crucial</li>
      <li>Systems running a small, fixed number of processes</li>
      <li>Legacy systems and older operating systems</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Each process occupies a single contiguous section of memory</li>
      <li>Base and limit registers provide memory protection and relocation</li>
      <li>Two types: fixed partitioning and variable partitioning</li>
      <li>Suffers from either internal or external fragmentation</li>
      <li>Simple but inefficient for modern multiprogramming systems</li>
      <li>Replaced by paging and segmentation in modern systems</li>
    </ul>
  </div>
);

export default ContiguousAllocation;
