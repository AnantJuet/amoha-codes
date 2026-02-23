import React from 'react';

const PageFault: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Page Fault Handling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A page fault is an interrupt raised by the hardware when a program accesses a page that is
      mapped in the virtual address space but not currently loaded in physical memory. Understanding
      page fault handling is crucial for understanding virtual memory performance.
    </p>

    {/* What is a Page Fault */}
    <h2 className="text-3xl font-bold mt-8">What is a Page Fault?</h2>
    <p className="leading-relaxed">
      A page fault occurs when a process references a page that is not in physical memory. The
      memory management unit (MMU) detects this condition via the valid-invalid bit in the page
      table and triggers a trap to the operating system.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Minor Page Fault:</strong> Page is in memory but not mapped (e.g., shared library
        already loaded by another process).
      </li>
      <li>
        <strong>Major Page Fault:</strong> Page must be read from disk (swap space or file system).
      </li>
      <li>
        <strong>Invalid Page Fault:</strong> Access to illegal address (segmentation fault).
      </li>
    </ul>

    {/* Page Fault Handling Steps */}
    <h2 className="text-3xl font-bold mt-8">Page Fault Handling Steps</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Detailed Page Fault Handling:

┌─────────────────────────────────────────────────────────────┐
│ 1. Process references a memory location                     │
│    ↓                                                        │
│ 2. MMU checks page table                                    │
│    - Valid bit = 0 → Page Fault Trap!                       │
│    ↓                                                        │
│ 3. Trap to operating system                                 │
│    - Save process state (registers, PC)                     │
│    - Switch to kernel mode                                  │
│    ↓                                                        │
│ 4. OS checks if reference is valid                          │
│    - Is address in process's address space?                 │
│    - If invalid → terminate process (segfault)              │
│    ↓                                                        │
│ 5. Find a free frame in physical memory                     │
│    - If no free frame → run page replacement algorithm      │
│    ↓                                                        │
│ 6. Schedule disk read to load page into frame               │
│    - I/O request to disk controller                         │
│    - Process is blocked (waiting for I/O)                   │
│    ↓                                                        │
│ 7. Disk read completes (interrupt)                          │
│    - Page loaded into frame                                 │
│    ↓                                                        │
│ 8. Update page table                                        │
│    - Set frame number                                       │
│    - Set valid bit = 1                                      │
│    ↓                                                        │
│ 9. Restart the instruction that caused the fault            │
│    - Process resumes execution                              │
│    - Memory access now succeeds                             │
└─────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Visual Diagram */}
    <h2 className="text-3xl font-bold mt-8">Page Fault Handling Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
┌─────────┐                      ┌─────────────────┐
│   CPU   │──① reference ──────► │   Page Table    │
│         │                      │  (valid = 0)    │
└────┬────┘                      └────────┬────────┘
     │                                    │
     │                              ② trap│
     │                                    │
     │  ⑥ restart                         ▼
     │  instruction            ┌─────────────────┐
     │◄────────────────────────│ Operating System│
     │                         │  (Page Fault    │
     │                         │   Handler)      │
     │                         └────────┬────────┘
     │                                  │
     │                           ③ find │ page on disk
     │                                  │
     │                                  ▼
     │         ④ bring in        ┌─────────────┐
     │         missing page      │    Disk     │
     │                           │ (Swap/File) │
     │                           └──────┬──────┘
     │                                  │
     │                                  │
     │                                  ▼
     │         ⑤ update table    ┌─────────────────┐
     │◄──────────────────────────│ Physical Memory │
     │                           │  (Free Frame)   │
     │                           └─────────────────┘
`}
      </pre>
    </div>

    {/* Page Fault Time */}
    <h2 className="text-3xl font-bold mt-8">Page Fault Service Time</h2>
    <p className="leading-relaxed">
      Handling a page fault involves several time-consuming operations:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Major Components of Page Fault Time:

1. Service the page fault interrupt         ~1-100 μs
   - Save registers
   - Determine type of fault
   - Verify legality of address

2. Read the page from disk                  ~8-10 ms
   - Seek time
   - Rotational latency
   - Transfer time
   (SSD: ~0.1-0.3 ms)

3. Restart the process                      ~1-100 μs
   - Update page table
   - Restore registers
   - Resume execution

Total (HDD): ~8-10 ms = 8,000,000 - 10,000,000 ns
Total (SSD): ~0.1-0.3 ms = 100,000 - 300,000 ns

Compare to memory access: 100-200 ns
Page fault is 40,000x to 100,000x slower than memory access!
`}
      </pre>
    </div>

    {/* Free Frame Allocation */}
    <h2 className="text-3xl font-bold mt-8">Finding a Free Frame</h2>
    <p className="leading-relaxed">
      When a page fault occurs, the OS must find a free frame to load the page into:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Free Frame Available:</strong> Use it directly. OS maintains a free-frame list.
      </li>
      <li>
        <strong>No Free Frame:</strong> Must run page replacement algorithm to select a victim page.
      </li>
      <li>
        <strong>Victim Page:</strong> The page to be removed from memory.
        <ul className="list-disc list-inside ml-6 mt-1">
          <li>If dirty (modified): Must write to disk first</li>
          <li>If clean (unmodified): Can simply overwrite</li>
        </ul>
      </li>
    </ul>

    {/* Page Replacement */}
    <h2 className="text-3xl font-bold mt-8">Page Fault with No Free Frame</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Page Fault Handling when Memory is Full:

1. Page fault occurs

2. Find victim page using replacement algorithm
   (FIFO, LRU, Optimal, etc.)

3. If victim page is dirty:
   - Write victim to disk (page out)
   - Wait for disk write to complete

4. Read new page into freed frame (page in)
   - Wait for disk read to complete

5. Update page tables:
   - Victim's entry: valid bit = 0
   - New page's entry: valid bit = 1, frame number updated

6. Restart instruction

Note: If victim is dirty, this involves TWO disk I/Os!
     (one write + one read)
`}
      </pre>
    </div>

    {/* Dirty Bit Optimization */}
    <h2 className="text-3xl font-bold mt-8">Dirty Bit (Modified Bit)</h2>
    <p className="leading-relaxed">
      The dirty bit optimization reduces the number of disk writes:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Dirty Bit Usage:

Page Table Entry:
┌───────────────┬─────────────┬───────────┬───────────┐
│ Frame Number  │ Valid Bit   │ Dirty Bit │ Reference │
└───────────────┴─────────────┴───────────┴───────────┘

When page is loaded:     Dirty bit = 0
When page is written to: Dirty bit = 1

During page replacement:
- If dirty bit = 0: Page unchanged, no write needed
- If dirty bit = 1: Page modified, must write to disk

Example savings:
- 50% of pages might be read-only (code)
- 30% of data pages might not be modified
- Potentially avoid 80% of page-out writes!
`}
      </pre>
    </div>

    {/* Types of Page Faults */}
    <h2 className="text-3xl font-bold mt-8">Types of Page Faults</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Cause</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Minor (Soft)</td>
            <td className="p-3 border">Page in memory, not mapped</td>
            <td className="p-3 border">Update page table</td>
          </tr>
          <tr>
            <td className="p-3 border">Major (Hard)</td>
            <td className="p-3 border">Page not in memory</td>
            <td className="p-3 border">Load from disk</td>
          </tr>
          <tr>
            <td className="p-3 border">Invalid</td>
            <td className="p-3 border">Illegal address access</td>
            <td className="p-3 border">Terminate process</td>
          </tr>
          <tr>
            <td className="p-3 border">Copy-on-Write</td>
            <td className="p-3 border">Write to shared page</td>
            <td className="p-3 border">Copy page, then write</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Effective Access Time */}
    <h2 className="text-3xl font-bold mt-8">Effective Access Time Calculation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given:
- Memory access time (ma) = 200 ns
- Page fault service time (pfst) = 8 ms = 8,000,000 ns
- Page fault probability (p) = ?

Formula:
EAT = (1 - p) × ma + p × pfst

Example 1: What page fault rate keeps degradation under 10%?

Want: EAT ≤ 1.1 × ma = 1.1 × 200 = 220 ns

220 ≥ (1 - p) × 200 + p × 8,000,000
220 ≥ 200 - 200p + 8,000,000p
220 ≥ 200 + 7,999,800p
20 ≥ 7,999,800p
p ≤ 20 / 7,999,800
p ≤ 0.0000025

Result: Need fewer than 1 page fault per 400,000 memory accesses!

Example 2: With p = 0.001 (1 in 1000):
EAT = 0.999 × 200 + 0.001 × 8,000,000
    = 199.8 + 8000
    = 8199.8 ns

Slowdown = 8199.8 / 200 = 41x
`}
      </pre>
    </div>

    {/* Reducing Page Faults */}
    <h2 className="text-3xl font-bold mt-8">Strategies to Reduce Page Faults</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Use more RAM:</strong> More frames = fewer page replacements needed.</li>
      <li><strong>Better replacement algorithms:</strong> LRU, Clock algorithm, etc.</li>
      <li><strong>Working set tracking:</strong> Keep frequently used pages in memory.</li>
      <li><strong>Prepaging:</strong> Load related pages together.</li>
      <li><strong>Use SSD for swap:</strong> 10-100x faster than HDD.</li>
      <li><strong>Optimize memory access patterns:</strong> Improve locality of reference.</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Page fault occurs when accessing a page not in physical memory</li>
      <li>OS handles page fault by loading the page from disk</li>
      <li>Page fault service time is about 8 ms (millions of times slower than RAM)</li>
      <li>Dirty bit helps avoid unnecessary disk writes during replacement</li>
      <li>Even a 0.1% page fault rate can cause significant performance degradation</li>
      <li>Minimizing page fault rate is critical for virtual memory performance</li>
    </ul>
  </div>
);

export default PageFault;
