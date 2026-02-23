import React from 'react';

const DemandPaging: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Demand Paging
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Demand paging is a method of virtual memory management where pages are loaded into physical
      memory only when they are needed, rather than loading the entire program at startup. This
      lazy-loading approach allows programs to start faster and use memory more efficiently.
    </p>

    {/* What is Demand Paging */}
    <h2 className="text-3xl font-bold mt-8">What is Demand Paging?</h2>
    <p className="leading-relaxed">
      In demand paging, a page is brought into memory only when it is referenced. If a page is never
      referenced, it is never loaded. This is based on the principle that a program typically only
      uses a small portion of its code and data at any given time.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>Pages are loaded on-demand, not in advance</li>
      <li>Initially, no pages may be loaded (pure demand paging)</li>
      <li>Page fault occurs when accessing an unloaded page</li>
      <li>Relies on locality of reference principle</li>
    </ul>

    {/* Lazy Swapper vs Pager */}
    <h2 className="text-3xl font-bold mt-8">Lazy Swapper (Pager)</h2>
    <p className="leading-relaxed">
      A lazy swapper never brings a page into memory until it is needed. The term pager is often
      used instead of swapper since we deal with individual pages rather than entire processes.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Traditional Swapper:              Pager (Demand Paging):
┌───────────────────┐             ┌───────────────────┐
│ Load entire       │             │ Load only         │
│ process into      │             │ needed pages      │
│ memory            │             │                   │
└─────────┬─────────┘             └─────────┬─────────┘
          │                                 │
          ▼                                 ▼
┌───────────────────┐             ┌───────────────────┐
│ All pages in      │             │ Some pages in     │
│ memory            │             │ memory, rest      │
│                   │             │ on disk           │
└───────────────────┘             └───────────────────┘
`}
      </pre>
    </div>

    {/* How Demand Paging Works */}
    <h2 className="text-3xl font-bold mt-8">How Demand Paging Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Step-by-Step Process:

1. Process starts with NO pages in memory
   (or minimal pages for initial execution)

2. Process tries to access a memory location
   │
   ▼
3. MMU checks page table
   │
   ├──► Valid bit = 1 (page in memory)
   │         │
   │         ▼
   │    Access granted, continue execution
   │
   └──► Valid bit = 0 (page NOT in memory)
             │
             ▼
        PAGE FAULT!
             │
             ▼
4. OS handles page fault:
   a) Find a free frame (or make one)
   b) Load page from disk into frame
   c) Update page table (set valid bit = 1)
   d) Restart the instruction
             │
             ▼
5. Process continues with page now in memory
`}
      </pre>
    </div>

    {/* Valid-Invalid Bit */}
    <h2 className="text-3xl font-bold mt-8">Valid-Invalid Bit Scheme</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Page Table:
┌────────┬─────────────┬────────────────────────────┐
│  Page  │ Valid Bit   │        Meaning             │
├────────┼─────────────┼────────────────────────────┤
│   0    │     1       │ In memory, Frame 2         │
│   1    │     0       │ On disk (not loaded yet)   │
│   2    │     1       │ In memory, Frame 5         │
│   3    │     0       │ On disk (not loaded yet)   │
│   4    │     0       │ Invalid (not used)         │
│   5    │     1       │ In memory, Frame 7         │
└────────┴─────────────┴────────────────────────────┘

Valid = 1: Page is legally accessible and in memory
Valid = 0: Page is either:
           - On disk (legal but not loaded)
           - Invalid address (illegal access)
`}
      </pre>
    </div>

    {/* Hardware Support */}
    <h2 className="text-3xl font-bold mt-8">Hardware Support Required</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Page Table:</strong> With valid-invalid bit for each entry.
      </li>
      <li>
        <strong>Secondary Storage:</strong> Swap space to hold pages not in memory.
      </li>
      <li>
        <strong>Instruction Restart:</strong> Ability to restart any instruction after page fault.
      </li>
    </ul>

    {/* Instruction Restart Challenge */}
    <h2 className="text-3xl font-bold mt-8">Instruction Restart Challenge</h2>
    <p className="leading-relaxed">
      After a page fault is handled, the instruction that caused the fault must be restarted.
      This can be complex for instructions that modify multiple memory locations.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Problem Case: Block Move Instruction

MOVE (source, destination, count)

Example: MOVE (page A, page B, 1000 bytes)

What if page fault occurs at byte 500?
- 500 bytes already moved to destination
- Need to restart the entire instruction
- Must either:
  1. Undo the partial move (restore original state)
  2. Check all pages before starting
  3. Use temporary registers to track progress

Solution: Hardware must support either:
- Undoing partial operations
- Tracking instruction progress for resumption
`}
      </pre>
    </div>

    {/* Pure Demand Paging */}
    <h2 className="text-3xl font-bold mt-8">Pure Demand Paging</h2>
    <p className="leading-relaxed">
      In pure demand paging, a process starts with zero pages in memory. The first instruction
      immediately causes a page fault. This is extreme but demonstrates the concept.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Pure Demand Paging Process Start:

1. OS creates process, page table (all invalid)
2. Process counter set to first instruction
3. Attempt to fetch first instruction
   → PAGE FAULT (instruction page not in memory)
4. Load instruction page
5. Execute instruction (e.g., load data)
   → PAGE FAULT (data page not in memory)
6. Load data page
7. Continue execution...

Advantage: Never load unused pages
Disadvantage: Many page faults at startup
`}
      </pre>
    </div>

    {/* Locality of Reference */}
    <h2 className="text-3xl font-bold mt-8">Locality of Reference</h2>
    <p className="leading-relaxed">
      Demand paging works well because programs exhibit locality of reference:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Temporal Locality:</strong> Recently accessed locations are likely to be accessed
        again soon. (e.g., loop variables, frequently called functions)
      </li>
      <li>
        <strong>Spatial Locality:</strong> Locations near recently accessed locations are likely
        to be accessed soon. (e.g., array elements, sequential code)
      </li>
    </ul>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Example: Array Processing

for (int i = 0; i < 1000; i++) {
    sum += array[i];  // Sequential access (spatial locality)
}

The loop accesses:
- Same code page repeatedly (temporal locality)
- Sequential array elements (spatial locality)

Pages loaded once can be reused many times!
`}
      </pre>
    </div>

    {/* Performance */}
    <h2 className="text-3xl font-bold mt-8">Performance of Demand Paging</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Effective Access Time (EAT) Formula:

EAT = (1 - p) × memory_access_time + p × page_fault_time

Where:
- p = page fault rate (0 ≤ p ≤ 1)
- memory_access_time = time to access memory (typically 100-200 ns)
- page_fault_time = time to handle page fault (typically 8-10 ms)

Example:
- Memory access time = 200 ns
- Page fault time = 8 ms = 8,000,000 ns
- Page fault rate = 0.001 (1 in 1000 accesses)

EAT = (0.999 × 200) + (0.001 × 8,000,000)
    = 199.8 + 8,000
    = 8,199.8 ns

Compare to pure memory access: 200 ns
Slowdown factor: 8199.8 / 200 = 41x slower!

Even a 0.1% page fault rate causes significant slowdown.
`}
      </pre>
    </div>

    {/* Page Fault Rate Impact */}
    <h2 className="text-3xl font-bold mt-8">Impact of Page Fault Rate</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Page Fault Rate</th>
            <th className="p-3 border">EAT</th>
            <th className="p-3 border">Slowdown</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0 (no faults)</td>
            <td className="p-3 border">200 ns</td>
            <td className="p-3 border">1x</td>
          </tr>
          <tr>
            <td className="p-3 border">0.0001 (1 in 10,000)</td>
            <td className="p-3 border">1,000 ns</td>
            <td className="p-3 border">5x</td>
          </tr>
          <tr>
            <td className="p-3 border">0.001 (1 in 1,000)</td>
            <td className="p-3 border">8,200 ns</td>
            <td className="p-3 border">41x</td>
          </tr>
          <tr>
            <td className="p-3 border">0.01 (1 in 100)</td>
            <td className="p-3 border">80,200 ns</td>
            <td className="p-3 border">401x</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Demand Paging</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Less physical memory needed</li>
      <li>Faster program startup (don't load entire program)</li>
      <li>More programs can run concurrently</li>
      <li>Unused code/data never loaded</li>
      <li>Programs can be larger than physical memory</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Page faults cause significant delays</li>
      <li>Complex OS page fault handling</li>
      <li>Need for swap space on disk</li>
      <li>Potential for thrashing if memory is too limited</li>
      <li>Hardware support required for instruction restart</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Pages are loaded only when accessed, not in advance</li>
      <li>Valid-invalid bit indicates whether page is in memory</li>
      <li>Page faults trigger loading from disk</li>
      <li>Works well due to locality of reference</li>
      <li>Even low page fault rates can significantly impact performance</li>
      <li>Keeping page fault rate low is critical for performance</li>
    </ul>
  </div>
);

export default DemandPaging;
