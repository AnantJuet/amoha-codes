import React from 'react';

const VirtualMemoryIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Virtual Memory
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Virtual memory is a memory management technique that provides an idealized abstraction of the
      storage resources available to a process. It allows programs to execute as if they have access
      to a large, contiguous address space, even when physical memory is limited or fragmented.
    </p>

    {/* What is Virtual Memory */}
    <h2 className="text-3xl font-bold mt-8">What is Virtual Memory?</h2>
    <p className="leading-relaxed">
      Virtual memory creates an illusion of a very large main memory by using a portion of secondary
      storage (like a hard disk or SSD) as an extension of RAM. This allows programs larger than
      physical memory to execute and enables efficient memory sharing between processes.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>Separates logical memory (what program sees) from physical memory (actual RAM)</li>
      <li>Only parts of a program currently in use need to be in memory</li>
      <li>Unused portions can reside on disk until needed</li>
      <li>Provides each process with its own large, private address space</li>
    </ul>

    {/* Why Virtual Memory */}
    <h2 className="text-3xl font-bold mt-8">Why Do We Need Virtual Memory?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Limited Physical Memory:</strong> Programs can be larger than available RAM.
        Without virtual memory, they couldn't run.
      </li>
      <li>
        <strong>Multiprogramming:</strong> Multiple programs can run simultaneously, each thinking
        it has all memory to itself.
      </li>
      <li>
        <strong>Memory Protection:</strong> Each process has its own address space, protected from
        others.
      </li>
      <li>
        <strong>Simplified Programming:</strong> Programmers don't need to manage memory constraints.
      </li>
      <li>
        <strong>Efficient Memory Use:</strong> Only active portions of programs use RAM.
      </li>
    </ul>

    {/* Virtual Address Space */}
    <h2 className="text-3xl font-bold mt-8">Virtual Address Space</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Virtual Address Space (Process View)     Physical Memory + Disk

┌─────────────────────────┐              ┌─────────────────────┐
│         Stack           │              │                     │
│          ↓              │              │   Physical Memory   │
├─────────────────────────┤              │      (RAM)          │
│                         │              │                     │
│        Unused           │   ─────►     │   Only active       │
│        Space            │              │   pages loaded      │
│                         │              │                     │
├─────────────────────────┤              ├─────────────────────┤
│          ↑              │              │                     │
│         Heap            │   ─────►     │     Swap Space      │
├─────────────────────────┤              │    (on Disk)        │
│         Data            │              │                     │
├─────────────────────────┤              │   Inactive pages    │
│         Code            │              │   stored here       │
└─────────────────────────┘              └─────────────────────┘

4 GB virtual space (32-bit)              2 GB RAM + 4 GB Swap
`}
      </pre>
    </div>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts</h2>

    <h3 className="text-2xl font-semibold mt-6">Demand Paging</h3>
    <p className="leading-relaxed">
      Pages are loaded into memory only when needed (on demand), not all at once. If a page is
      not in memory when accessed, a page fault occurs.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Page Fault</h3>
    <p className="leading-relaxed">
      An interrupt that occurs when a program accesses a page that is not currently in physical
      memory. The OS must load the page from disk.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Swap Space</h3>
    <p className="leading-relaxed">
      A designated area on disk used to store pages that are not currently in physical memory.
      Pages are swapped between RAM and swap space as needed.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Page Replacement</h3>
    <p className="leading-relaxed">
      When physical memory is full and a new page is needed, the OS must choose which existing
      page to remove (replace) to make room.
    </p>

    {/* How Virtual Memory Works */}
    <h2 className="text-3xl font-bold mt-8">How Virtual Memory Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
1. Process accesses virtual address
            │
            ▼
2. MMU checks page table
            │
            ├──► Page in memory (valid bit = 1)
            │           │
            │           ▼
            │    3a. Translate to physical address
            │           │
            │           ▼
            │    4a. Access memory - DONE
            │
            └──► Page NOT in memory (valid bit = 0)
                        │
                        ▼
                 3b. PAGE FAULT!
                        │
                        ▼
                 4b. OS handles page fault:
                     - Find page on disk
                     - Load into free frame
                     - Update page table
                     - Restart instruction
`}
      </pre>
    </div>

    {/* Page Table with Valid Bit */}
    <h2 className="text-3xl font-bold mt-8">Page Table with Valid-Invalid Bit</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Page Table:
┌──────────┬───────────────┬─────────────┐
│   Page   │ Frame/Disk    │ Valid Bit   │
│  Number  │   Location    │             │
├──────────┼───────────────┼─────────────┤
│    0     │   Frame 5     │     1       │  ← In memory
│    1     │   Disk Block  │     0       │  ← On disk
│    2     │   Frame 8     │     1       │  ← In memory
│    3     │   Disk Block  │     0       │  ← On disk
│    4     │   Frame 2     │     1       │  ← In memory
│    5     │   Disk Block  │     0       │  ← On disk
└──────────┴───────────────┴─────────────┘

Valid Bit = 1: Page is in physical memory
Valid Bit = 0: Page is not in memory (on disk or invalid)
`}
      </pre>
    </div>

    {/* Benefits */}
    <h2 className="text-3xl font-bold mt-8">Benefits of Virtual Memory</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Run Larger Programs:</strong> Programs can exceed physical memory size.
      </li>
      <li>
        <strong>More Processes:</strong> More programs can run concurrently since each uses only
        needed pages.
      </li>
      <li>
        <strong>Faster Program Startup:</strong> Only essential pages loaded initially; rest loaded
        on demand.
      </li>
      <li>
        <strong>Memory Isolation:</strong> Each process has its own virtual address space, protected
        from others.
      </li>
      <li>
        <strong>Shared Libraries:</strong> Code pages can be shared among processes efficiently.
      </li>
      <li>
        <strong>Copy-on-Write:</strong> Forked processes share pages until modification.
      </li>
    </ul>

    {/* Costs */}
    <h2 className="text-3xl font-bold mt-8">Costs and Overheads</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Page Faults:</strong> Accessing disk is thousands of times slower than RAM.
      </li>
      <li>
        <strong>Page Tables:</strong> Consume memory for storing mappings.
      </li>
      <li>
        <strong>Thrashing:</strong> Excessive page faults can severely degrade performance.
      </li>
      <li>
        <strong>Disk I/O:</strong> Reading/writing pages to swap space uses disk bandwidth.
      </li>
    </ul>

    {/* Example Calculation */}
    <h2 className="text-3xl font-bold mt-8">Example: Virtual Memory Size</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given:
- 32-bit virtual address space
- 4 KB page size
- 1 GB physical RAM
- 4 GB swap space

Virtual Memory per process:
= 2^32 bytes = 4 GB

Number of virtual pages:
= 4 GB / 4 KB = 1,048,576 pages (2^20)

Physical frames:
= 1 GB / 4 KB = 262,144 frames (2^18)

Total backing store:
= Physical RAM + Swap = 1 GB + 4 GB = 5 GB

Each process THINKS it has 4 GB
System can support pages up to 5 GB across all processes
`}
      </pre>
    </div>

    {/* Virtual Memory Implementation */}
    <h2 className="text-3xl font-bold mt-8">Implementation Techniques</h2>
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
            <td className="p-3 border">Demand Paging</td>
            <td className="p-3 border">Load pages only when accessed</td>
          </tr>
          <tr>
            <td className="p-3 border">Demand Segmentation</td>
            <td className="p-3 border">Load segments only when accessed</td>
          </tr>
          <tr>
            <td className="p-3 border">Copy-on-Write</td>
            <td className="p-3 border">Share pages until write, then copy</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory-Mapped Files</td>
            <td className="p-3 border">Map file contents to virtual address space</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Virtual memory separates logical memory from physical memory</li>
      <li>Uses disk as extension of RAM through swapping</li>
      <li>Enables programs larger than physical memory to run</li>
      <li>Implemented primarily through demand paging</li>
      <li>Page faults trigger loading of needed pages from disk</li>
      <li>Valid-invalid bit in page table indicates page presence in memory</li>
      <li>Must balance benefits against page fault overhead</li>
    </ul>
  </div>
);

export default VirtualMemoryIntro;
