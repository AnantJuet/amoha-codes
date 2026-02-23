import React from 'react';

const Segmentation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Segmentation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Segmentation is a memory management scheme that supports a programmer's view of memory. Unlike
      paging which divides memory into fixed-size blocks, segmentation divides memory into
      variable-length segments based on the logical divisions of a program.
    </p>

    {/* What is Segmentation */}
    <h2 className="text-3xl font-bold mt-8">What is Segmentation?</h2>
    <p className="leading-relaxed">
      A program is a collection of logical units such as main program, procedures, functions, methods,
      objects, local and global variables, stacks, symbol tables, and arrays. Each of these logical
      units can be treated as a separate segment.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Each segment has a name (or number) and a length</li>
      <li>Segments vary in size</li>
      <li>Segments are placed in non-contiguous memory locations</li>
      <li>Addresses are two-dimensional: (segment number, offset)</li>
    </ul>

    {/* Programmer's View */}
    <h2 className="text-3xl font-bold mt-8">Programmer's View of Memory</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Logical View (How programmer sees it):

┌─────────────────┐
│    Segment 0    │  ← Main program
│     (Code)      │
└─────────────────┘

┌─────────────────┐
│    Segment 1    │  ← Function library
│   (Functions)   │
└─────────────────┘

┌─────────────────┐
│    Segment 2    │  ← Global variables
│    (Data)       │
└─────────────────┘

┌─────────────────┐
│    Segment 3    │  ← Stack
│    (Stack)      │
└─────────────────┘

┌─────────────────┐
│    Segment 4    │  ← Heap
│    (Heap)       │
└─────────────────┘

Each segment can grow or shrink independently!
`}
      </pre>
    </div>

    {/* Segmentation in Physical Memory */}
    <h2 className="text-3xl font-bold mt-8">Segmentation in Physical Memory</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Physical Memory:
┌─────────────────────────────────────────┐
│              Free                       │
├─────────────────────────────────────────┤
│           Segment 2 (Data)              │
│              1400 bytes                 │
├─────────────────────────────────────────┤
│              Free                       │
├─────────────────────────────────────────┤
│           Segment 0 (Code)              │
│              2000 bytes                 │
├─────────────────────────────────────────┤
│              Free                       │
├─────────────────────────────────────────┤
│           Segment 3 (Stack)             │
│               800 bytes                 │
├─────────────────────────────────────────┤
│           Segment 1 (Functions)         │
│              3200 bytes                 │
└─────────────────────────────────────────┘

Segments are NOT contiguous in physical memory.
`}
      </pre>
    </div>

    {/* Logical Address in Segmentation */}
    <h2 className="text-3xl font-bold mt-8">Logical Address Structure</h2>
    <p className="leading-relaxed">
      In segmentation, a logical address consists of two parts:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Logical Address:
┌──────────────────┬──────────────────┐
│  Segment Number  │     Offset       │
│       (s)        │       (d)        │
└──────────────────┴──────────────────┘

The offset must be less than the segment's limit!
`}
      </pre>
    </div>

    {/* Segment Table */}
    <h2 className="text-3xl font-bold mt-8">Segment Table</h2>
    <p className="leading-relaxed">
      The segment table maps two-dimensional logical addresses to one-dimensional physical addresses.
      Each entry contains:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Base:</strong> Starting physical address of the segment</li>
      <li><strong>Limit:</strong> Length of the segment</li>
    </ul>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Segment Table:
┌─────────┬───────────┬───────────┐
│ Segment │   Base    │   Limit   │
├─────────┼───────────┼───────────┤
│    0    │   4000    │   2000    │  ← Code starts at 4000, length 2000
│    1    │   6500    │   3200    │  ← Functions start at 6500, length 3200
│    2    │   2000    │   1400    │  ← Data starts at 2000, length 1400
│    3    │   3400    │    800    │  ← Stack starts at 3400, length 800
│    4    │   9700    │   2500    │  ← Heap starts at 9700, length 2500
└─────────┴───────────┴───────────┘
`}
      </pre>
    </div>

    {/* Address Translation */}
    <h2 className="text-3xl font-bold mt-8">Address Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Address Translation Process:

    Logical Address
    ┌───────┬───────┐
    │   s   │   d   │
    └───┬───┴───────┘
        │
        ▼
┌────────────────────────┐
│     Segment Table      │
│  ┌───────┬───────┐     │
│  │ Base  │ Limit │     │
│  └───────┴───────┘     │
└────────────────────────┘
        │
        ├──────────────────┐
        ▼                  ▼
   Is d < Limit?      Get Base
        │                  │
   ┌────┴────┐            │
   │         │            │
  YES        NO           │
   │         │            │
   │    Trap: Segment     │
   │    Violation         │
   │                      │
   └──────────────────────┤
                          │
                          ▼
              Physical Address = Base + d
`}
      </pre>
    </div>

    {/* Example Calculation */}
    <h2 className="text-3xl font-bold mt-8">Example: Address Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given Segment Table:
┌─────────┬───────┬───────┐
│ Segment │ Base  │ Limit │
├─────────┼───────┼───────┤
│    0    │ 1400  │  700  │
│    1    │ 6300  │  500  │
│    2    │ 4300  │  400  │
│    3    │ 3200  │  500  │
│    4    │ 4700  │  200  │
└─────────┴───────┴───────┘

Translate: Logical Address (2, 350)
- Segment number s = 2
- Offset d = 350

Step 1: Look up segment 2
- Base = 4300
- Limit = 400

Step 2: Check if offset < limit
- 350 < 400? YES (valid access)

Step 3: Calculate physical address
- Physical Address = Base + Offset = 4300 + 350 = 4650

---

Translate: Logical Address (3, 550)
- Segment number s = 3
- Offset d = 550

Step 1: Look up segment 3
- Base = 3200
- Limit = 500

Step 2: Check if offset < limit
- 550 < 500? NO (invalid!)

Result: TRAP - Segment Violation (accessing beyond segment boundary)
`}
      </pre>
    </div>

    {/* Hardware Support */}
    <h2 className="text-3xl font-bold mt-8">Hardware Support</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Segment Table Base Register (STBR):</strong> Points to segment table location in memory.
      </li>
      <li>
        <strong>Segment Table Length Register (STLR):</strong> Number of segments used by a process.
      </li>
    </ul>

    {/* Comparison: Segmentation vs Paging */}
    <h2 className="text-3xl font-bold mt-8">Segmentation vs Paging</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Segmentation</th>
            <th className="p-3 border">Paging</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Division Unit</td>
            <td className="p-3 border">Variable-size segments</td>
            <td className="p-3 border">Fixed-size pages</td>
          </tr>
          <tr>
            <td className="p-3 border">Basis</td>
            <td className="p-3 border">Logical divisions</td>
            <td className="p-3 border">Physical memory</td>
          </tr>
          <tr>
            <td className="p-3 border">User Visibility</td>
            <td className="p-3 border">Visible to programmer</td>
            <td className="p-3 border">Invisible to programmer</td>
          </tr>
          <tr>
            <td className="p-3 border">External Fragmentation</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Internal Fragmentation</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes (last page)</td>
          </tr>
          <tr>
            <td className="p-3 border">Address</td>
            <td className="p-3 border">(segment, offset)</td>
            <td className="p-3 border">(page, offset)</td>
          </tr>
          <tr>
            <td className="p-3 border">Sharing</td>
            <td className="p-3 border">Easy (share segments)</td>
            <td className="p-3 border">Harder (share pages)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Segmentation</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Matches programmer's view of memory</li>
      <li>No internal fragmentation</li>
      <li>Easy sharing of code/data segments between processes</li>
      <li>Protection is natural (per segment)</li>
      <li>Segments can grow and shrink dynamically</li>
      <li>Supports modular programming</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Segmentation</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>External fragmentation (variable-size allocation)</li>
      <li>More complex memory allocation than paging</li>
      <li>Compaction may be needed</li>
      <li>Finding space for growing segments can be difficult</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Segmentation divides memory based on logical program structure</li>
      <li>Segments are variable-length units</li>
      <li>Logical address = (segment number, offset)</li>
      <li>Segment table stores base and limit for each segment</li>
      <li>Offset must be less than limit for valid access</li>
      <li>Suffers from external fragmentation, not internal</li>
      <li>Often combined with paging (segmentation with paging)</li>
    </ul>
  </div>
);

export default Segmentation;
