import React from 'react';

const Compaction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Memory Compaction
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Compaction is a memory management technique used to reduce external fragmentation by moving
      all allocated memory blocks together to create one large contiguous block of free memory.
      This process consolidates scattered holes into a single usable block.
    </p>

    {/* What is Compaction */}
    <h2 className="text-3xl font-bold mt-8">What is Compaction?</h2>
    <p className="leading-relaxed">
      Compaction (also called defragmentation or memory compaction) is the process of shuffling
      memory contents to place all free memory together in one large block. All processes are
      moved to one end of memory, and all holes are moved to the other end, producing one large
      contiguous free block.
    </p>

    {/* How Compaction Works */}
    <h2 className="text-3xl font-bold mt-8">How Compaction Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Before Compaction:                      After Compaction:
┌─────────────────────────┐             ┌─────────────────────────┐
│      OS (64 KB)         │             │      OS (64 KB)         │
├─────────────────────────┤             ├─────────────────────────┤
│    Process A (100 KB)   │             │    Process A (100 KB)   │
├─────────────────────────┤             ├─────────────────────────┤
│     Hole (50 KB)        │             │    Process B (80 KB)    │
├─────────────────────────┤             ├─────────────────────────┤
│    Process B (80 KB)    │    ───►     │    Process C (120 KB)   │
├─────────────────────────┤             ├─────────────────────────┤
│     Hole (40 KB)        │             │                         │
├─────────────────────────┤             │                         │
│    Process C (120 KB)   │             │    Free Memory          │
├─────────────────────────┤             │       (150 KB)          │
│     Hole (60 KB)        │             │                         │
└─────────────────────────┘             └─────────────────────────┘

Holes: 50 + 40 + 60 = 150 KB           One hole: 150 KB (contiguous)
(scattered, non-contiguous)
`}
      </pre>
    </div>

    {/* Steps in Compaction */}
    <h2 className="text-3xl font-bold mt-8">Steps in Compaction</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Suspend all processes:</strong> Stop all running processes to safely move their
        memory contents.
      </li>
      <li>
        <strong>Copy process data:</strong> Move the contents of each process to new contiguous
        locations in memory.
      </li>
      <li>
        <strong>Update address mappings:</strong> Update the base registers or relocation tables
        for each moved process.
      </li>
      <li>
        <strong>Resume processes:</strong> Allow processes to continue execution at their new
        memory locations.
      </li>
    </ul>

    {/* Requirements for Compaction */}
    <h2 className="text-3xl font-bold mt-8">Requirements for Compaction</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Dynamic Relocation:</strong> The system must support run-time address binding.
        Compile-time or load-time binding cannot support compaction.
      </li>
      <li>
        <strong>Relocation Register:</strong> Hardware support (base/relocation register) is needed
        to translate addresses after moving processes.
      </li>
      <li>
        <strong>All Pointers Must Be Relocatable:</strong> Any absolute addresses within a process
        must be updated or be position-independent.
      </li>
    </ul>

    {/* Compaction Strategies */}
    <h2 className="text-3xl font-bold mt-8">Compaction Strategies</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Move All Processes to One End</h3>
    <p className="leading-relaxed">
      The simplest approach: move all processes toward one end of memory (typically the lower end).
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Original:           Compacted:
┌───────────┐       ┌───────────┐
│    OS     │       │    OS     │
├───────────┤       ├───────────┤
│  Proc A   │       │  Proc A   │
├───────────┤       ├───────────┤
│   Hole    │       │  Proc B   │
├───────────┤   ──► ├───────────┤
│  Proc B   │       │  Proc C   │
├───────────┤       ├───────────┤
│   Hole    │       │           │
├───────────┤       │   Free    │
│  Proc C   │       │           │
└───────────┘       └───────────┘
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Minimal Movement</h3>
    <p className="leading-relaxed">
      Move only the minimum number of processes needed to consolidate free space. This reduces
      the cost of compaction but may not fully defragment memory.
    </p>

    <h3 className="text-2xl font-semibold mt-6">3. Optimal Compaction</h3>
    <p className="leading-relaxed">
      Find the arrangement that minimizes the total number of bytes moved. This is an optimization
      problem and can be computationally expensive to solve.
    </p>

    {/* Cost Analysis */}
    <h2 className="text-3xl font-bold mt-8">Cost of Compaction</h2>
    <p className="leading-relaxed">
      Compaction is an expensive operation due to several factors:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>CPU Time:</strong> The CPU must copy large amounts of data from one memory location
        to another.
      </li>
      <li>
        <strong>Process Suspension:</strong> Processes must be stopped during compaction, affecting
        system responsiveness.
      </li>
      <li>
        <strong>I/O Impact:</strong> If processes have pending I/O, it may need to complete or be
        handled specially.
      </li>
      <li>
        <strong>Frequency:</strong> If compaction is done too often, overhead accumulates; too
        rarely, and fragmentation grows.
      </li>
    </ul>

    {/* Example Calculation */}
    <h2 className="text-3xl font-bold mt-8">Example: Compaction Cost</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Scenario:
- Memory copy speed: 100 MB/s
- Processes to move: B (80 KB) and C (120 KB)
- Total data to move: 200 KB

Time to compact = Data to move / Copy speed
                = 200 KB / 100 MB/s
                = 200 KB / 102,400 KB/s
                = 0.00195 seconds
                = ~2 ms

This seems fast, but consider:
- Large systems with GB of data
- Many processes to relocate
- Address table updates
- Process suspension overhead

For 2 GB of data at 100 MB/s:
Time = 2,048 MB / 100 MB/s = 20.48 seconds!

System would be unresponsive for 20+ seconds.
`}
      </pre>
    </div>

    {/* When to Compact */}
    <h2 className="text-3xl font-bold mt-8">When to Perform Compaction</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>On Demand:</strong> When an allocation request fails due to external fragmentation,
        but total free memory is sufficient.
      </li>
      <li>
        <strong>Periodic:</strong> At regular intervals (e.g., during low system activity periods).
      </li>
      <li>
        <strong>Threshold-Based:</strong> When fragmentation exceeds a certain threshold.
      </li>
      <li>
        <strong>Incremental:</strong> Move small amounts during idle CPU cycles.
      </li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Compaction</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Eliminates external fragmentation</li>
      <li>Creates large contiguous free blocks</li>
      <li>Allows larger processes to be loaded</li>
      <li>Improves memory utilization</li>
      <li>Enables continued use of variable partitioning</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Compaction</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>High CPU overhead for copying data</li>
      <li>System must halt or suspend processes during compaction</li>
      <li>Requires hardware support for dynamic relocation</li>
      <li>Cannot be used with compile-time or load-time address binding</li>
      <li>Finding optimal compaction is computationally complex</li>
      <li>I/O operations may be affected or delayed</li>
    </ul>

    {/* Alternatives to Compaction */}
    <h2 className="text-3xl font-bold mt-8">Alternatives to Compaction</h2>
    <p className="leading-relaxed">
      Due to the high cost of compaction, modern systems prefer other approaches:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Paging:</strong> Divide memory into fixed-size frames. Any free frame can hold any
        page, eliminating external fragmentation entirely.
      </li>
      <li>
        <strong>Segmentation with Paging:</strong> Combine logical segmentation with paging to avoid
        external fragmentation while maintaining logical program structure.
      </li>
      <li>
        <strong>Virtual Memory:</strong> Use disk space as an extension of RAM, reducing memory
        pressure and fragmentation issues.
      </li>
    </ul>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">Compaction vs Paging</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Compaction</th>
            <th className="p-3 border">Paging</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">External Fragmentation</td>
            <td className="p-3 border">Temporarily eliminated</td>
            <td className="p-3 border">Never occurs</td>
          </tr>
          <tr>
            <td className="p-3 border">Internal Fragmentation</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Last page only</td>
          </tr>
          <tr>
            <td className="p-3 border">Overhead</td>
            <td className="p-3 border">High (periodic)</td>
            <td className="p-3 border">Low (per access)</td>
          </tr>
          <tr>
            <td className="p-3 border">Contiguous Allocation</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No (non-contiguous)</td>
          </tr>
          <tr>
            <td className="p-3 border">Modern Usage</td>
            <td className="p-3 border">Rare</td>
            <td className="p-3 border">Standard</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Compaction moves all processes together to create one large free block</li>
      <li>Requires dynamic (run-time) address binding with hardware support</li>
      <li>High overhead due to data copying and process suspension</li>
      <li>Multiple strategies exist: move all, minimal movement, optimal</li>
      <li>Modern systems prefer paging over compaction</li>
      <li>Still used in some embedded systems and garbage-collected languages</li>
    </ul>
  </div>
);

export default Compaction;
