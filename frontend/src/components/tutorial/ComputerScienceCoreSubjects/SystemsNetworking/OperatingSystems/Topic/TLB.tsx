import React from 'react';

const TLB: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Translation Lookaside Buffer (TLB)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Translation Lookaside Buffer (TLB) is a high-speed hardware cache that stores recent
      virtual-to-physical address translations. It is essential for making paging practical by
      reducing the memory access overhead of address translation.
    </p>

    {/* The Problem TLB Solves */}
    <h2 className="text-3xl font-bold mt-8">The Problem TLB Solves</h2>
    <p className="leading-relaxed">
      Without TLB, every memory access requires two memory accesses: one to read the page table
      entry and one to read the actual data. This doubles memory access time.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Without TLB:
┌──────────┐    ┌────────────┐    ┌────────────┐
│   CPU    │───►│ Page Table │───►│   Memory   │
│          │    │ (in RAM)   │    │  (Data)    │
└──────────┘    └────────────┘    └────────────┘
                     │                  │
            Memory Access #1    Memory Access #2

With TLB:
┌──────────┐    ┌────────────┐
│   CPU    │───►│    TLB     │───► (if hit) ───► Data in 1 access
│          │    │  (Cache)   │
└──────────┘    └─────┬──────┘
                      │ (if miss)
                      ▼
              ┌────────────┐
              │ Page Table │
              └────────────┘
`}
      </pre>
    </div>

    {/* What is TLB */}
    <h2 className="text-3xl font-bold mt-8">What is TLB?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Hardware Cache:</strong> Special associative memory built into the CPU's Memory
        Management Unit (MMU).
      </li>
      <li>
        <strong>Small and Fast:</strong> Typically 32-1024 entries, with access time of 1 clock cycle.
      </li>
      <li>
        <strong>Stores Translations:</strong> Caches recent page number to frame number mappings.
      </li>
      <li>
        <strong>Fully Associative:</strong> Any entry can hold any mapping; searched in parallel.
      </li>
    </ul>

    {/* TLB Structure */}
    <h2 className="text-3xl font-bold mt-8">TLB Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
TLB Entry:
┌─────────────┬──────────────┬───────┬───────┬─────────┐
│ Page Number │ Frame Number │ Valid │ Dirty │ Protect │
└─────────────┴──────────────┴───────┴───────┴─────────┘

Sample TLB:
┌──────────────────────────────────────────────────────────┐
│ Entry │ Page # │ Frame # │ Valid │ Dirty │ Protection   │
├───────┼────────┼─────────┼───────┼───────┼──────────────┤
│   0   │  0x15  │  0x2A   │   1   │   0   │    RWX       │
│   1   │  0x22  │  0x08   │   1   │   1   │    RW        │
│   2   │  0x07  │  0x1F   │   1   │   0   │    R         │
│   3   │  0x31  │  0x45   │   0   │   0   │    --        │
│  ...  │  ...   │   ...   │  ...  │  ...  │    ...       │
└───────┴────────┴─────────┴───────┴───────┴──────────────┘

All entries are searched in PARALLEL (associative lookup)
`}
      </pre>
    </div>

    {/* TLB Operation */}
    <h2 className="text-3xl font-bold mt-8">TLB Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Address Translation with TLB:

         Logical Address
         ┌─────────┬─────────┐
         │ Page #  │ Offset  │
         └────┬────┴─────────┘
              │
              ▼
         ┌─────────────────────┐
         │   Search TLB for    │
         │   Page Number       │
         └──────────┬──────────┘
                    │
          ┌─────────┴─────────┐
          │                   │
      TLB Hit              TLB Miss
          │                   │
          ▼                   ▼
   Get Frame #        Access Page Table
   from TLB           in Memory
          │                   │
          │                   ▼
          │           Get Frame #
          │           from Page Table
          │                   │
          │                   ▼
          │           Update TLB with
          │           new mapping
          │                   │
          └────────┬──────────┘
                   │
                   ▼
           Physical Address
         ┌─────────┬─────────┐
         │ Frame # │ Offset  │
         └─────────┴─────────┘
`}
      </pre>
    </div>

    {/* TLB Hit and Miss */}
    <h2 className="text-3xl font-bold mt-8">TLB Hit vs TLB Miss</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">TLB Hit</th>
            <th className="p-3 border">TLB Miss</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Page in TLB?</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Accesses</td>
            <td className="p-3 border">1 (data only)</td>
            <td className="p-3 border">2+ (page table + data)</td>
          </tr>
          <tr>
            <td className="p-3 border">Time</td>
            <td className="p-3 border">Fast (TLB + memory)</td>
            <td className="p-3 border">Slow (page table access)</td>
          </tr>
          <tr>
            <td className="p-3 border">TLB Update</td>
            <td className="p-3 border">Not needed</td>
            <td className="p-3 border">New entry added</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Effective Access Time */}
    <h2 className="text-3xl font-bold mt-8">Effective Access Time (EAT)</h2>
    <p className="leading-relaxed">
      The effective access time depends on the TLB hit ratio:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Formula:
EAT = (Hit Ratio × Hit Time) + (Miss Ratio × Miss Time)

Where:
- Hit Time = TLB lookup time + Memory access time
- Miss Time = TLB lookup time + Page table access + Memory access time

Example:
- TLB lookup time = 10 ns
- Memory access time = 100 ns
- TLB hit ratio = 98%

Hit Time = 10 + 100 = 110 ns
Miss Time = 10 + 100 + 100 = 210 ns (page table access + data access)

EAT = (0.98 × 110) + (0.02 × 210)
    = 107.8 + 4.2
    = 112 ns

Compare to:
- With TLB (98% hit): 112 ns
- Without TLB: 200 ns (always 2 memory accesses)

Speedup = 200 / 112 = 1.79x faster!
`}
      </pre>
    </div>

    {/* Another Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Impact of Hit Ratio</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given:
- TLB access time = 20 ns
- Memory access time = 100 ns
- Page table in memory

Calculate EAT for different hit ratios:

TLB Hit: 20 + 100 = 120 ns
TLB Miss: 20 + 100 + 100 = 220 ns

┌───────────────┬───────────────────────────────────────┐
│   Hit Ratio   │              EAT                      │
├───────────────┼───────────────────────────────────────┤
│     80%       │ 0.80(120) + 0.20(220) = 96 + 44 = 140 │
├───────────────┼───────────────────────────────────────┤
│     90%       │ 0.90(120) + 0.10(220) = 108 + 22 = 130│
├───────────────┼───────────────────────────────────────┤
│     95%       │ 0.95(120) + 0.05(220) = 114 + 11 = 125│
├───────────────┼───────────────────────────────────────┤
│     99%       │ 0.99(120) + 0.01(220) = 118.8 + 2.2 = │
│               │                          121 ns       │
└───────────────┴───────────────────────────────────────┘

Higher hit ratio = Better performance!
`}
      </pre>
    </div>

    {/* TLB Management */}
    <h2 className="text-3xl font-bold mt-8">TLB Management</h2>

    <h3 className="text-2xl font-semibold mt-6">TLB Replacement</h3>
    <p className="leading-relaxed">
      When TLB is full and a new entry is needed, an existing entry must be replaced:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>LRU:</strong> Replace least recently used entry</li>
      <li><strong>Random:</strong> Replace random entry (simpler hardware)</li>
      <li><strong>Round Robin:</strong> Replace entries in circular order</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">TLB and Context Switches</h3>
    <p className="leading-relaxed">
      When the CPU switches to a different process, the TLB entries become invalid because each
      process has its own page table.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>TLB Flush:</strong> Clear all TLB entries on context switch (simple but expensive)</li>
      <li><strong>Address Space ID (ASID):</strong> Tag TLB entries with process ID, avoiding flush</li>
    </ul>

    {/* ASID */}
    <h2 className="text-3xl font-bold mt-8">Address Space Identifier (ASID)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
TLB Entry with ASID:
┌──────┬─────────────┬──────────────┬───────┐
│ ASID │ Page Number │ Frame Number │ Valid │
└──────┴─────────────┴──────────────┴───────┘

Sample TLB with ASIDs:
┌──────┬────────┬─────────┬───────┐
│ ASID │ Page # │ Frame # │ Valid │
├──────┼────────┼─────────┼───────┤
│  1   │  0x15  │  0x2A   │   1   │  ← Process 1
│  2   │  0x15  │  0x08   │   1   │  ← Process 2 (same page #, different frame)
│  1   │  0x07  │  0x1F   │   1   │  ← Process 1
│  3   │  0x31  │  0x45   │   1   │  ← Process 3
└──────┴────────┴─────────┴───────┘

ASID allows entries from multiple processes to coexist in TLB!
No need to flush on context switch.
`}
      </pre>
    </div>

    {/* TLB Reach */}
    <h2 className="text-3xl font-bold mt-8">TLB Reach</h2>
    <p className="leading-relaxed">
      TLB reach is the amount of memory accessible through the TLB:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
TLB Reach = Number of TLB entries × Page size

Example:
- TLB entries = 64
- Page size = 4 KB

TLB Reach = 64 × 4 KB = 256 KB

This means TLB can cover 256 KB of memory at a time.
If working set is larger, TLB misses increase.

To increase TLB reach:
1. Increase TLB size (expensive hardware)
2. Use larger page sizes (more internal fragmentation)
3. Use multiple page sizes (huge pages)
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>TLB is a fast cache for page table entries in the MMU</li>
      <li>TLB hit avoids memory access for address translation</li>
      <li>High hit ratios (greater than 99%) are typical and essential for performance</li>
      <li>EAT depends on TLB hit ratio, TLB access time, and memory access time</li>
      <li>Context switches require TLB flush or ASID-based management</li>
      <li>TLB reach determines how much memory can be covered efficiently</li>
      <li>Modern CPUs have separate TLBs for instructions and data (split TLB)</li>
    </ul>
  </div>
);

export default TLB;
