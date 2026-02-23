import React from 'react';

const PageTable: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Page Table Structure
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The page table is a data structure used by the operating system to store the mapping between
      virtual page numbers and physical frame numbers. Understanding page table structure is essential
      for grasping how modern memory management works.
    </p>

    {/* Page Table Entry */}
    <h2 className="text-3xl font-bold mt-8">Page Table Entry (PTE)</h2>
    <p className="leading-relaxed">
      Each entry in the page table contains several fields beyond just the frame number:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Page Table Entry Structure:
┌───────┬───────┬───────┬─────────┬─────────┬──────────────────┐
│ Valid │ Dirty │  Ref  │ Protect │ Caching │   Frame Number   │
│  Bit  │  Bit  │  Bit  │  Bits   │ Disable │                  │
└───────┴───────┴───────┴─────────┴─────────┴──────────────────┘
   1 bit   1 bit   1 bit   2-3 bits   1 bit      20+ bits

Total PTE size: Typically 4 or 8 bytes
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">PTE Fields Explained</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Valid/Present Bit:</strong> Indicates if the page is in physical memory. If 0,
        accessing this page causes a page fault.
      </li>
      <li>
        <strong>Dirty/Modified Bit:</strong> Set when the page has been written to. Helps determine
        if the page needs to be written back to disk when replaced.
      </li>
      <li>
        <strong>Reference/Accessed Bit:</strong> Set when the page is accessed. Used by page
        replacement algorithms.
      </li>
      <li>
        <strong>Protection Bits:</strong> Define access permissions (read, write, execute).
      </li>
      <li>
        <strong>Caching Disabled:</strong> For memory-mapped I/O where caching is inappropriate.
      </li>
      <li>
        <strong>Frame Number:</strong> The physical frame where the page is stored.
      </li>
    </ul>

    {/* Simple Page Table */}
    <h2 className="text-3xl font-bold mt-8">Simple (Single-Level) Page Table</h2>
    <p className="leading-relaxed">
      The simplest page table implementation is a single array indexed by page number.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Page Table for Process A:
┌─────────────┬─────────────────────────────────────────────┐
│ Page Number │                   Entry                     │
├─────────────┼─────────────────────────────────────────────┤
│      0      │ Valid=1, Frame=5, Protection=RW             │
│      1      │ Valid=1, Frame=9, Protection=RWX            │
│      2      │ Valid=0, (on disk)                          │
│      3      │ Valid=1, Frame=2, Protection=R              │
│      4      │ Valid=1, Frame=12, Protection=RW            │
│     ...     │ ...                                         │
└─────────────┴─────────────────────────────────────────────┘

Problem: For 32-bit address space with 4 KB pages:
- 2^20 = 1 million pages
- At 4 bytes per entry = 4 MB page table per process!
`}
      </pre>
    </div>

    {/* Hierarchical Page Tables */}
    <h2 className="text-3xl font-bold mt-8">Hierarchical (Multi-Level) Page Tables</h2>
    <p className="leading-relaxed">
      To reduce memory usage, page tables can be organized hierarchically. The page number is
      divided into multiple parts, each indexing a different level of the hierarchy.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Two-Level Page Table</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
32-bit Logical Address:
┌──────────────┬──────────────┬────────────────┐
│     P1       │      P2      │    Offset      │
│   10 bits    │   10 bits    │    12 bits     │
└──────────────┴──────────────┴────────────────┘
      │               │
      │               │
      ▼               │
┌─────────────┐       │
│ Outer Page  │       │
│   Table     │       │
│  (1024      │       │
│   entries)  │       │
└──────┬──────┘       │
       │              │
       ▼              ▼
    ┌─────────────────────┐
    │   Inner Page Table  │
    │    (1024 entries)   │
    │                     │
    └──────────┬──────────┘
               │
               ▼
         Frame Number
               +
            Offset
               │
               ▼
       Physical Address
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Three-Level Page Table (64-bit systems)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
64-bit Address (48 bits used):
┌────────┬────────┬────────┬────────┬───────────────┐
│  PML4  │  PDPT  │   PD   │   PT   │    Offset     │
│ 9 bits │ 9 bits │ 9 bits │ 9 bits │    12 bits    │
└────────┴────────┴────────┴────────┴───────────────┘

Four levels of page tables!
Each level has 512 (2^9) entries.
`}
      </pre>
    </div>

    {/* Advantages of Hierarchical */}
    <h3 className="text-2xl font-semibold mt-6">Why Hierarchical Page Tables?</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Most processes use only a small portion of their address space</li>
      <li>Unused page tables don't need to be allocated</li>
      <li>Saves significant memory compared to single-level tables</li>
      <li>Only allocate inner tables for regions actually being used</li>
    </ul>

    {/* Inverted Page Tables */}
    <h2 className="text-3xl font-bold mt-8">Inverted Page Table</h2>
    <p className="leading-relaxed">
      Instead of one page table per process, an inverted page table has one entry per physical frame.
      It stores which process and virtual page occupies each frame.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Inverted Page Table:
┌─────────┬──────────┬────────────┐
│  Frame  │ Process  │   Page     │
│ Number  │    ID    │  Number    │
├─────────┼──────────┼────────────┤
│    0    │   P1     │     5      │
│    1    │   P2     │     3      │
│    2    │   P1     │     0      │
│    3    │   P3     │     7      │
│    4    │   P2     │     1      │
│   ...   │   ...    │    ...     │
└─────────┴──────────┴────────────┘

Size = Number of frames (not pages)
For 1 GB RAM with 4 KB frames = 256K entries
Much smaller than per-process page tables!
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Inverted Page Table Lookup</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Search the table for matching (process ID, page number) pair</li>
      <li>Linear search is slow: O(n) where n = number of frames</li>
      <li>Solution: Use hash table to speed up lookups</li>
      <li>Used in IBM PowerPC, HP PA-RISC</li>
    </ul>

    {/* Hashed Page Tables */}
    <h2 className="text-3xl font-bold mt-8">Hashed Page Tables</h2>
    <p className="leading-relaxed">
      Use a hash function on the virtual page number to index into a hash table. Each entry contains
      a chain of page mappings that hash to the same value.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Hash Table Structure:
                    Hash Table
Virtual Page ────► ┌───────────┐
    │              │           │
    │ hash(vp)     │           │
    ▼              ├───────────┤
  ┌───┐            │     ●─────┼──► (vp, frame, next) ──► (vp, frame, null)
  │   │────────────┤           │
  └───┘            ├───────────┤
                   │     ●─────┼──► (vp, frame, null)
                   ├───────────┤
                   │   null    │
                   └───────────┘

Each chain element contains:
- Virtual page number
- Frame number
- Pointer to next element in chain
`}
      </pre>
    </div>

    {/* Page Table Implementation */}
    <h2 className="text-3xl font-bold mt-8">Page Table Storage</h2>
    <p className="leading-relaxed">
      Page tables are stored in main memory. The Page Table Base Register (PTBR) points to the
      page table for the currently running process.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>PTBR:</strong> Contains the starting address of the page table in memory.
      </li>
      <li>
        <strong>PTLR:</strong> Contains the page table length (number of entries).
      </li>
      <li>
        <strong>Context Switch:</strong> PTBR is updated to point to new process's page table.
      </li>
    </ul>

    {/* Memory Access Problem */}
    <h2 className="text-3xl font-bold mt-8">Double Memory Access Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Every data/instruction access requires TWO memory accesses:

1. First access: Read page table entry from memory
   Memory[PTBR + page_number × entry_size]

2. Second access: Read actual data/instruction
   Memory[frame_number × page_size + offset]

This DOUBLES memory access time!
Solution: Translation Lookaside Buffer (TLB)
`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Page Table Structures Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Structure</th>
            <th className="p-3 border">Space Efficiency</th>
            <th className="p-3 border">Lookup Speed</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Single-Level</td>
            <td className="p-3 border">Poor</td>
            <td className="p-3 border">Fast (O(1))</td>
            <td className="p-3 border">Small address spaces</td>
          </tr>
          <tr>
            <td className="p-3 border">Multi-Level</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Most modern systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Inverted</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">Slow (needs hash)</td>
            <td className="p-3 border">64-bit systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Hashed</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Fast (average)</td>
            <td className="p-3 border">Large sparse spaces</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Each PTE contains frame number, valid bit, protection bits, and other flags</li>
      <li>Single-level page tables waste memory for large address spaces</li>
      <li>Multi-level page tables reduce memory by not allocating unused regions</li>
      <li>Inverted page tables have one entry per frame, not per page</li>
      <li>Page tables are stored in memory, causing double memory access</li>
      <li>TLB is essential for making paging practical</li>
    </ul>
  </div>
);

export default PageTable;
