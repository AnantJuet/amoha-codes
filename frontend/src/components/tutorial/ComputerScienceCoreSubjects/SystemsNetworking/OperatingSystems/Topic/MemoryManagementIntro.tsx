import React from 'react';

const MemoryManagementIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Memory Management
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Memory management is one of the most critical functions of an operating system. It is responsible
      for managing the computer's primary memory (RAM), allocating memory to processes, keeping track
      of memory usage, and freeing memory when it is no longer needed. Efficient memory management is
      essential for system performance and stability.
    </p>

    {/* What is Memory Management */}
    <h2 className="text-3xl font-bold mt-8">What is Memory Management?</h2>
    <p className="leading-relaxed">
      Memory management refers to the functionality of an operating system that handles and manages
      primary memory. It tracks every memory location, whether allocated or free, and decides which
      processes receive memory, when they receive it, and how much they get. When processes terminate
      or are swapped out, memory management reclaims the memory for reuse.
    </p>

    {/* Why Memory Management is Important */}
    <h2 className="text-3xl font-bold mt-8">Why is Memory Management Important?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Limited Resource:</strong> RAM is a limited and expensive resource that must be
        managed efficiently to maximize system performance.
      </li>
      <li>
        <strong>Multiprogramming:</strong> Multiple processes need to reside in memory simultaneously
        for efficient CPU utilization.
      </li>
      <li>
        <strong>Protection:</strong> Processes must be protected from accessing each other's memory
        space to ensure system security and stability.
      </li>
      <li>
        <strong>Sharing:</strong> Some memory regions need to be shared among processes for
        inter-process communication and code sharing.
      </li>
      <li>
        <strong>Efficient Utilization:</strong> Minimize wasted memory through fragmentation and
        maximize the number of processes in memory.
      </li>
    </ul>

    {/* Goals of Memory Management */}
    <h2 className="text-3xl font-bold mt-8">Goals of Memory Management</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Relocation:</strong> Allow processes to be placed anywhere in physical memory and
        even moved during execution.
      </li>
      <li>
        <strong>Protection:</strong> Prevent processes from accessing memory belonging to other
        processes or the operating system.
      </li>
      <li>
        <strong>Sharing:</strong> Allow controlled sharing of memory between cooperating processes.
      </li>
      <li>
        <strong>Logical Organization:</strong> Match the logical structure of programs (modules,
        segments) to memory organization.
      </li>
      <li>
        <strong>Physical Organization:</strong> Manage the flow of information between main memory
        and secondary storage.
      </li>
    </ul>

    {/* Memory Hierarchy */}
    <h2 className="text-3xl font-bold mt-8">Memory Hierarchy</h2>
    <p className="leading-relaxed">
      Computer systems use a hierarchy of memory types, each with different characteristics:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Speed          Capacity         Cost
  ^                               ^
  |     ┌─────────────────┐       |
  |     │   CPU Registers │       |  (Fastest, Smallest, Most Expensive)
  |     │    (< 1 KB)     │       |
  |     └────────┬────────┘       |
  |              │                |
  |     ┌────────▼────────┐       |
  |     │   Cache Memory  │       |
  |     │   (KB to MB)    │       |
  |     └────────┬────────┘       |
  |              │                |
  |     ┌────────▼────────┐       |
  |     │   Main Memory   │       |
  |     │  (RAM - GB)     │       |
  |     └────────┬────────┘       |
  |              │                |
  |     ┌────────▼────────┐       |
  |     │ Secondary Storage│      |
  |     │  (HDD/SSD - TB) │       |
  |     └────────┬────────┘       |
  |              │                |
  |     ┌────────▼────────┐       |
  v     │ Tertiary Storage│       v
        │  (Tape - PB)    │  (Slowest, Largest, Cheapest)
        └─────────────────┘
`}
      </pre>
    </div>

    {/* Functions of Memory Manager */}
    <h2 className="text-3xl font-bold mt-8">Functions of Memory Manager</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Keep Track of Memory:</strong> Maintain information about which parts of memory are
        being used and by which process, and which parts are free.
      </li>
      <li>
        <strong>Allocate Memory:</strong> Assign memory to processes when they request it or when
        they are scheduled to run.
      </li>
      <li>
        <strong>Deallocate Memory:</strong> Free memory when a process terminates or releases it.
      </li>
      <li>
        <strong>Manage Swapping:</strong> Move processes between main memory and disk when memory
        is scarce.
      </li>
      <li>
        <strong>Memory Protection:</strong> Ensure processes cannot access memory outside their
        allocated space.
      </li>
    </ul>

    {/* Memory Management Techniques */}
    <h2 className="text-3xl font-bold mt-8">Memory Management Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Contiguous Allocation</td>
            <td className="p-3 border">Each process occupies a single contiguous block of memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Paging</td>
            <td className="p-3 border">Physical memory divided into fixed-size frames, logical memory into pages</td>
          </tr>
          <tr>
            <td className="p-3 border">Segmentation</td>
            <td className="p-3 border">Memory divided into variable-size segments based on logical divisions</td>
          </tr>
          <tr>
            <td className="p-3 border">Virtual Memory</td>
            <td className="p-3 border">Allows execution of processes larger than physical memory</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Address Binding */}
    <h2 className="text-3xl font-bold mt-8">Address Binding</h2>
    <p className="leading-relaxed">
      Address binding is the process of mapping addresses from one address space to another. Programs
      use symbolic addresses, which must be bound to physical memory addresses at some point.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Compile Time:</strong> If memory location is known at compile time, absolute code
        is generated. Must recompile if location changes.
      </li>
      <li>
        <strong>Load Time:</strong> If memory location is not known at compile time, relocatable code
        is generated. Binding happens when program is loaded.
      </li>
      <li>
        <strong>Execution Time:</strong> If a process can be moved during execution, binding is delayed
        until runtime. Requires hardware support (base and limit registers).
      </li>
    </ul>

    {/* Base and Limit Registers */}
    <h2 className="text-3xl font-bold mt-8">Base and Limit Registers</h2>
    <p className="leading-relaxed">
      A pair of base and limit registers define the logical address space of a process:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Base Register:</strong> Holds the smallest legal physical memory address</li>
      <li><strong>Limit Register:</strong> Specifies the size of the range</li>
    </ul>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
    CPU generates    Base Register    Limit Register
    logical address    = 1000           = 500
         |
         v
    ┌─────────┐
    │  300    │ (Logical Address)
    └────┬────┘
         │
         v
    Is 300 < 500 (Limit)?
    YES ──► Physical Address = 1000 + 300 = 1300
    NO  ──► Address Error (Trap to OS)
`}
      </pre>
    </div>

    {/* Swapping */}
    <h2 className="text-3xl font-bold mt-8">Swapping</h2>
    <p className="leading-relaxed">
      Swapping is a memory management technique where processes are temporarily moved from main memory
      to secondary storage (swap space) and back. This allows more processes to run than can physically
      fit in memory at once.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Swap Out:</strong> Move a process from main memory to swap space</li>
      <li><strong>Swap In:</strong> Move a process from swap space back to main memory</li>
      <li>Swapping enables a system to handle more processes than can fit in physical memory</li>
      <li>The cost of swapping is high due to disk I/O operations</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Memory management handles allocation, deallocation, and protection of main memory</li>
      <li>The memory hierarchy balances speed, capacity, and cost</li>
      <li>Address binding can occur at compile time, load time, or execution time</li>
      <li>Base and limit registers provide hardware support for memory protection</li>
      <li>Major techniques include contiguous allocation, paging, segmentation, and virtual memory</li>
    </ul>
  </div>
);

export default MemoryManagementIntro;
