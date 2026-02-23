import React from 'react';

const PageReplacementIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Page Replacement
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Page replacement is the process of selecting which page to remove from physical memory when
      a new page needs to be loaded and all frames are occupied. The choice of replacement algorithm
      significantly affects system performance.
    </p>

    {/* Why Page Replacement */}
    <h2 className="text-3xl font-bold mt-8">Why Page Replacement?</h2>
    <p className="leading-relaxed">
      Physical memory is limited. When all frames are in use and a page fault occurs, the operating
      system must decide which existing page to evict to make room for the new page.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Scenario: Memory Full, Page Fault Occurs

Physical Memory (all frames occupied):
┌─────────────────────────────────────────┐
│ Frame 0: Page A (Process 1)             │
├─────────────────────────────────────────┤
│ Frame 1: Page B (Process 1)             │
├─────────────────────────────────────────┤
│ Frame 2: Page C (Process 2)             │
├─────────────────────────────────────────┤
│ Frame 3: Page D (Process 2)             │
└─────────────────────────────────────────┘

Process 1 needs Page E → PAGE FAULT!

Question: Which page (A, B, C, or D) should be replaced?

This decision is made by the PAGE REPLACEMENT ALGORITHM.
`}
      </pre>
    </div>

    {/* Basic Page Replacement */}
    <h2 className="text-3xl font-bold mt-8">Basic Page Replacement Steps</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Find the location of the desired page on disk</li>
      <li>Find a free frame:
        <ul className="list-disc list-inside ml-6 mt-1">
          <li>If free frame exists, use it</li>
          <li>If no free frame, use page replacement algorithm to select a victim</li>
        </ul>
      </li>
      <li>If victim frame is dirty, write it to disk</li>
      <li>Read the new page into the freed frame</li>
      <li>Update page tables (victim and new page)</li>
      <li>Restart the instruction</li>
    </ul>

    {/* Page Replacement Flow */}
    <h2 className="text-3xl font-bold mt-8">Page Replacement Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
                    Page Fault
                        │
                        ▼
               ┌─────────────────┐
               │ Free frame      │
               │ available?      │
               └────────┬────────┘
                        │
            ┌───────────┴───────────┐
           YES                      NO
            │                       │
            ▼                       ▼
     Use free frame      ┌─────────────────────┐
            │            │ Select victim using │
            │            │ replacement         │
            │            │ algorithm           │
            │            └──────────┬──────────┘
            │                       │
            │                       ▼
            │            ┌─────────────────────┐
            │            │ Victim dirty?       │
            │            └──────────┬──────────┘
            │                       │
            │            ┌──────────┴──────────┐
            │           YES                    NO
            │            │                      │
            │            ▼                      │
            │     Write victim                  │
            │     to disk                       │
            │            │                      │
            │            └──────────┬───────────┘
            │                       │
            └───────────┬───────────┘
                        │
                        ▼
               Load new page into frame
                        │
                        ▼
               Update page tables
                        │
                        ▼
               Restart instruction
`}
      </pre>
    </div>

    {/* Evaluating Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Evaluating Page Replacement Algorithms</h2>
    <p className="leading-relaxed">
      We evaluate algorithms by counting the number of page faults they generate for a given
      reference string. The goal is to minimize page faults.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Reference String:</strong> Sequence of page numbers being accessed.
      </li>
      <li>
        <strong>Page Fault Count:</strong> Number of times a referenced page is not in memory.
      </li>
      <li>
        <strong>Hit Ratio:</strong> Proportion of accesses that find the page in memory.
      </li>
    </ul>

    {/* Reference String Example */}
    <h2 className="text-3xl font-bold mt-8">Reference String Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Memory accesses (addresses):
100, 432, 101, 612, 102, 103, 104, 101, 611, 102

With page size = 100 bytes, page numbers are:
1, 4, 1, 6, 1, 1, 1, 1, 6, 1

Reduced reference string (consecutive same page = 1 access):
1, 4, 1, 6, 1, 6, 1

This is the reference string used to evaluate algorithms.

Given 3 frames, how many page faults occur with different algorithms?
`}
      </pre>
    </div>

    {/* Common Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Page Replacement Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Selection Criteria</th>
            <th className="p-3 border">Feasibility</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">FIFO</td>
            <td className="p-3 border">Oldest page in memory</td>
            <td className="p-3 border">Easy to implement</td>
          </tr>
          <tr>
            <td className="p-3 border">Optimal (OPT)</td>
            <td className="p-3 border">Page not used for longest time</td>
            <td className="p-3 border">Theoretical only</td>
          </tr>
          <tr>
            <td className="p-3 border">LRU</td>
            <td className="p-3 border">Least recently used page</td>
            <td className="p-3 border">Good but expensive</td>
          </tr>
          <tr>
            <td className="p-3 border">Clock (Second Chance)</td>
            <td className="p-3 border">FIFO with reference bit</td>
            <td className="p-3 border">Practical LRU approximation</td>
          </tr>
          <tr>
            <td className="p-3 border">LFU</td>
            <td className="p-3 border">Least frequently used</td>
            <td className="p-3 border">May keep old pages</td>
          </tr>
          <tr>
            <td className="p-3 border">MFU</td>
            <td className="p-3 border">Most frequently used</td>
            <td className="p-3 border">Rarely used</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Belady's Anomaly */}
    <h2 className="text-3xl font-bold mt-8">Belady's Anomaly</h2>
    <p className="leading-relaxed">
      Belady's anomaly is a phenomenon where increasing the number of frames can actually increase
      the number of page faults. This counterintuitive behavior occurs with some algorithms like FIFO.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Reference String: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5

FIFO with 3 frames: 9 page faults
FIFO with 4 frames: 10 page faults (MORE faults with MORE frames!)

This is Belady's Anomaly.

Stack algorithms (like LRU, Optimal) do NOT exhibit this anomaly.
`}
      </pre>
    </div>

    {/* Stack Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Stack Algorithms</h2>
    <p className="leading-relaxed">
      A page replacement algorithm is called a stack algorithm if the set of pages in memory with
      n frames is always a subset of pages with n+1 frames. Stack algorithms never suffer from
      Belady's anomaly.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>LRU is a stack algorithm</li>
      <li>Optimal is a stack algorithm</li>
      <li>FIFO is NOT a stack algorithm</li>
    </ul>

    {/* Performance Metrics */}
    <h2 className="text-3xl font-bold mt-8">Performance Metrics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Key Metrics:

1. Page Fault Rate (p)
   p = Number of page faults / Total number of references

2. Hit Ratio (h)
   h = 1 - p
   h = Number of hits / Total number of references

3. Effective Access Time (EAT)
   EAT = (1 - p) × memory_time + p × page_fault_time

Example:
- Reference string length = 20
- Page faults = 4
- Page fault rate = 4/20 = 0.2 (20%)
- Hit ratio = 0.8 (80%)

If memory_time = 100 ns and page_fault_time = 10 ms:
EAT = 0.8 × 100 + 0.2 × 10,000,000
    = 80 + 2,000,000
    = 2,000,080 ns ≈ 2 ms per access!
`}
      </pre>
    </div>

    {/* Desirable Properties */}
    <h2 className="text-3xl font-bold mt-8">Desirable Properties of Replacement Algorithms</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Minimize page fault rate</li>
      <li>Low implementation overhead</li>
      <li>No Belady's anomaly (stack algorithm)</li>
      <li>Work well with varying workloads</li>
      <li>Make good use of reference bit and dirty bit</li>
      <li>Handle corner cases well</li>
    </ul>

    {/* Global vs Local Replacement */}
    <h2 className="text-3xl font-bold mt-8">Global vs Local Replacement</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Global Replacement</th>
            <th className="p-3 border">Local Replacement</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Victim Selection</td>
            <td className="p-3 border">Any page from any process</td>
            <td className="p-3 border">Only from faulting process</td>
          </tr>
          <tr>
            <td className="p-3 border">Frame Allocation</td>
            <td className="p-3 border">Can vary per process</td>
            <td className="p-3 border">Fixed per process</td>
          </tr>
          <tr>
            <td className="p-3 border">Performance</td>
            <td className="p-3 border">Generally better throughput</td>
            <td className="p-3 border">More predictable per process</td>
          </tr>
          <tr>
            <td className="p-3 border">Isolation</td>
            <td className="p-3 border">Processes affect each other</td>
            <td className="p-3 border">Processes isolated</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Page replacement is needed when memory is full and a page fault occurs</li>
      <li>Algorithms are evaluated by counting page faults on a reference string</li>
      <li>FIFO is simple but can have Belady's anomaly</li>
      <li>Optimal is the best but requires future knowledge</li>
      <li>LRU is practical and performs well, no Belady's anomaly</li>
      <li>Stack algorithms guarantee more frames = fewer or equal page faults</li>
    </ul>
  </div>
);

export default PageReplacementIntro;
