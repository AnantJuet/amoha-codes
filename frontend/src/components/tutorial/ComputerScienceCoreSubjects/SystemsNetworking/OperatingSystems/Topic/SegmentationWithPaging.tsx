import React from 'react';

const SegmentationWithPaging: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Segmentation with Paging
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Segmentation with paging combines the best features of both memory management schemes.
      It uses segmentation to provide a logical view matching the programmer's perspective and
      paging to eliminate external fragmentation. This hybrid approach is used in many modern systems.
    </p>

    {/* Why Combine? */}
    <h2 className="text-3xl font-bold mt-8">Why Combine Segmentation and Paging?</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Segmentation</th>
            <th className="p-3 border">Paging</th>
            <th className="p-3 border">Combined</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Programmer's View</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">External Fragmentation</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Internal Fragmentation</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes (minimal)</td>
          </tr>
          <tr>
            <td className="p-3 border">Sharing/Protection</td>
            <td className="p-3 border">Easy</td>
            <td className="p-3 border">Harder</td>
            <td className="p-3 border">Easy</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* How it Works */}
    <h2 className="text-3xl font-bold mt-8">How Segmentation with Paging Works</h2>
    <p className="leading-relaxed">
      Each segment is divided into fixed-size pages. Instead of segments being contiguous in
      physical memory, segments are paged, and pages are placed in any available frame.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Logical View:                           Physical Memory:
                                        (Frames)
┌─────────────────┐                     ┌─────────────────┐
│    Segment 0    │                     │   Frame 0       │
│  ┌───────────┐  │                     ├─────────────────┤
│  │  Page 0   │──┼───────────────────► │ Seg0, Page 1    │ Frame 1
│  ├───────────┤  │                     ├─────────────────┤
│  │  Page 1   │──┼───┐                 │   Frame 2       │
│  └───────────┘  │   │                 ├─────────────────┤
└─────────────────┘   │          ┌────► │ Seg1, Page 0    │ Frame 3
                      │          │      ├─────────────────┤
┌─────────────────┐   └──────────┼────► │ Seg0, Page 0    │ Frame 4
│    Segment 1    │              │      ├─────────────────┤
│  ┌───────────┐  │              │      │   Frame 5       │
│  │  Page 0   │──┼──────────────┘      ├─────────────────┤
│  ├───────────┤  │                     │ Seg1, Page 1    │ Frame 6
│  │  Page 1   │──┼───────────────────► │                 │
│  └───────────┘  │                     └─────────────────┘
└─────────────────┘

Each segment has its own page table!
`}
      </pre>
    </div>

    {/* Address Structure */}
    <h2 className="text-3xl font-bold mt-8">Logical Address Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Logical Address:
┌──────────────┬──────────────┬──────────────┐
│   Segment    │    Page      │    Offset    │
│   Number     │   Number     │              │
│     (s)      │     (p)      │     (d)      │
└──────────────┴──────────────┴──────────────┘

Three components:
1. Segment Number (s): Identifies which segment
2. Page Number (p): Identifies which page within segment
3. Offset (d): Position within the page
`}
      </pre>
    </div>

    {/* Translation Process */}
    <h2 className="text-3xl font-bold mt-8">Address Translation Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
            Logical Address
         ┌─────┬─────┬─────┐
         │  s  │  p  │  d  │
         └──┬──┴──┬──┴─────┘
            │     │
            │     │     Segment Table
            │     │     ┌──────────────────────┐
            └─────┼────►│ Seg 0: Page Table Ptr├─┐
                  │     ├──────────────────────┤ │
                  │     │ Seg 1: Page Table Ptr│ │
                  │     └──────────────────────┘ │
                  │                              │
                  │    Page Table for Segment    │
                  │    ┌────────────────────┐◄───┘
                  └───►│ Page 0: Frame 4    │
                       ├────────────────────┤
                       │ Page 1: Frame 1    │
                       └────────────────────┘
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

    {/* Data Structures */}
    <h2 className="text-3xl font-bold mt-8">Data Structures</h2>

    <h3 className="text-2xl font-semibold mt-6">Segment Table</h3>
    <p className="leading-relaxed">
      Each entry in the segment table contains:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Pointer to the segment's page table</li>
      <li>Segment length (in pages)</li>
      <li>Protection bits</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Page Tables (per segment)</h3>
    <p className="leading-relaxed">
      Each segment has its own page table containing:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Frame numbers for each page in the segment</li>
      <li>Valid/present bits</li>
      <li>Additional page protection/status bits</li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Address Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given:
- Page size: 1 KB (1024 bytes, 10-bit offset)
- Logical Address: (Segment 2, Page 1, Offset 500)

Segment Table:
┌─────────┬────────────────────┬───────────┐
│ Segment │ Page Table Pointer │ Length    │
├─────────┼────────────────────┼───────────┤
│    0    │      0x5000        │  4 pages  │
│    1    │      0x6000        │  8 pages  │
│    2    │      0x7000        │  3 pages  │
└─────────┴────────────────────┴───────────┘

Page Table for Segment 2 (at 0x7000):
┌────────┬─────────────┐
│  Page  │ Frame Number│
├────────┼─────────────┤
│   0    │     12      │
│   1    │     45      │
│   2    │     28      │
└────────┴─────────────┘

Translation Steps:

1. Look up Segment 2 in Segment Table
   - Page Table at 0x7000
   - Length = 3 pages

2. Check: Is Page 1 < 3? YES (valid)

3. Look up Page 1 in Segment 2's Page Table
   - Frame Number = 45

4. Calculate Physical Address:
   - Physical = Frame × Page Size + Offset
   - Physical = 45 × 1024 + 500
   - Physical = 46080 + 500 = 46580

Result: Logical (2, 1, 500) → Physical 46580
`}
      </pre>
    </div>

    {/* Intel x86 Segmentation */}
    <h2 className="text-3xl font-bold mt-8">Intel x86 Memory Management</h2>
    <p className="leading-relaxed">
      The Intel x86 architecture uses segmentation with paging. Here's a simplified view:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Intel x86 Address Translation:

Logical Address         Linear Address        Physical Address
┌──────┬──────┐        ┌──────────────┐      ┌──────────────┐
│ Seg  │Offset│  ───►  │              │  ───► │              │
│Selector│    │        │              │      │              │
└──────┴──────┘        └──────────────┘      └──────────────┘
                              │
     Segmentation             │         Paging
     Unit                     │         Unit
                              │
                              ▼
           Linear Address = Base + Offset
           Then: Linear → Physical via Page Tables

Modern x86-64: Segmentation is largely disabled; uses flat memory model
`}
      </pre>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Logical view of memory (segments for code, data, stack)</li>
      <li>No external fragmentation (pages can go anywhere)</li>
      <li>Easy sharing at segment level</li>
      <li>Protection at both segment and page level</li>
      <li>Segments can grow by adding pages</li>
      <li>Efficient memory utilization</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Internal fragmentation (last page of each segment)</li>
      <li>Complex address translation (multiple table lookups)</li>
      <li>Higher memory overhead for multiple tables</li>
      <li>More complex hardware support required</li>
      <li>Multiple memory accesses for translation</li>
    </ul>

    {/* Comparison with Pure Approaches */}
    <h2 className="text-3xl font-bold mt-8">Comparison Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Pure Segmentation</th>
            <th className="p-3 border">Pure Paging</th>
            <th className="p-3 border">Combined</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Allocation Unit</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">Fixed</td>
            <td className="p-3 border">Fixed (pages)</td>
          </tr>
          <tr>
            <td className="p-3 border">External Frag</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Internal Frag</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes (per segment)</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">Tables Needed</td>
            <td className="p-3 border">Segment table</td>
            <td className="p-3 border">Page table</td>
            <td className="p-3 border">Both</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Combines logical organization of segmentation with fragmentation-free paging</li>
      <li>Each segment has its own page table</li>
      <li>Address format: (segment number, page number, offset)</li>
      <li>Eliminates external fragmentation completely</li>
      <li>Used in Intel x86 (though largely disabled in modern x86-64)</li>
      <li>Higher complexity but provides best of both approaches</li>
    </ul>
  </div>
);

export default SegmentationWithPaging;
