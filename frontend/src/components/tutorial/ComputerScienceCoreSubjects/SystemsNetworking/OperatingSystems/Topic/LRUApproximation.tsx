import React from 'react';

const LRUApproximation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      LRU Approximation Algorithms
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      True LRU implementation is expensive because it requires updating data structures
      on every memory reference. LRU approximation algorithms use reference bits provided
      by hardware to achieve similar performance with much lower overhead. These algorithms
      are widely used in real operating systems.
    </p>

    {/* Why Approximate LRU */}
    <h2 className="text-3xl font-bold mt-8">Why Approximate LRU?</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
True LRU Problems:
─────────────────────────────────────────────────────────────

1. Counter Method:
   - Need counter update on EVERY memory reference
   - Search through all pages to find minimum (O(n))
   - Counter overflow issues

2. Stack Method:
   - Need to update linked list on EVERY reference
   - Even O(1) operations are expensive at memory speed
   - Millions/billions of references per second

Hardware Solution: Reference Bit
─────────────────────────────────────────────────────────────

Most CPUs provide a REFERENCE BIT for each page:
    - Set to 1 by hardware when page is accessed
    - Initially 0 when page is loaded
    - Can be cleared by OS

Page Table Entry:
┌───────────────┬───────────┬───────────┬─────────────────┐
│  Frame Number │ Valid Bit │ Ref. Bit  │ Protection Bits │
└───────────────┴───────────┴───────────┴─────────────────┘
                               ↑
                    Hardware sets to 1 on access
                    OS can clear to 0

Using Reference Bit:
    - Tells us if page was accessed recently
    - Does NOT tell us exact order of access
    - Approximates LRU with less overhead
`}
      </pre>
    </div>

    {/* Reference Bit Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Reference Bit Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Basic Reference Bit Algorithm:
─────────────────────────────────────────────────────────────

Each page has a reference bit (R):
    R = 1: Page was referenced since last check
    R = 0: Page was NOT referenced

On page fault (need to replace):
    1. If any page has R = 0:
       - Replace one of those pages
       - (Any R=0 page is equally "not recently used")

    2. If all pages have R = 1:
       - Clear all reference bits (set to 0)
       - Replace any page (all equally recently used)

Example:
─────────────────────────────────────────────────────────────

    Page Table at time T:
    ┌──────┬───────┐
    │ Page │ R Bit │
    ├──────┼───────┤
    │  A   │   1   │ ← Recently used
    │  B   │   0   │ ← Not recently used (candidate)
    │  C   │   1   │ ← Recently used
    │  D   │   0   │ ← Not recently used (candidate)
    └──────┴───────┘

    Page fault for page E:
    - Choose either B or D (both have R=0)
    - Replace, say, B with E
    - Set R bit of E to 1

Problem: Only 1 bit of history (used/not used)
Solution: Use multiple bits for more history → Second Chance, etc.
`}
      </pre>
    </div>

    {/* Second Chance Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Second Chance (Clock) Algorithm</h2>
    <p className="leading-relaxed">
      Second Chance is a modification of FIFO that uses the reference bit to give
      recently-used pages a "second chance" before being replaced.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Second Chance Algorithm:
─────────────────────────────────────────────────────────────

Keep pages in circular queue (like FIFO)
Each page has a reference bit
Use a "clock hand" pointer

On page fault:
    1. Look at page pointed to by clock hand
    2. If R = 0:
       - Replace this page
       - Advance clock hand
    3. If R = 1:
       - Set R = 0 (give second chance)
       - Advance clock hand
       - Go back to step 1 (check next page)

Why "Second Chance"?
─────────────────────────────────────────────────────────────

    If page was recently used (R=1):
        - Don't replace it
        - Clear R bit (it now has "used its chance")
        - Move to next page

    If page was NOT recently used (R=0):
        - Replace it (already had its chance)

Worst Case:
    All pages have R=1 → Clear all R bits → Replace first page
    This degrades to FIFO, but only when all pages are recently used
`}
      </pre>
    </div>

    {/* Clock Algorithm Visualization */}
    <h2 className="text-3xl font-bold mt-8">Clock Algorithm Visualization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Clock (Circular Queue) Representation:
─────────────────────────────────────────────────────────────

                    Clock Hand
                        ↓
              ┌───┐   ┌───┐   ┌───┐
              │ A │───│ B │───│ C │
              │R=1│   │R=0│   │R=1│
              └───┘   └───┘   └───┘
                ↑               │
                │     ┌───┐     │
                └─────│ D │─────┘
                      │R=1│
                      └───┘

Page Fault - Need to replace:
─────────────────────────────────────────────────────────────

Step 1: Check B (clock hand position)
        B has R=0 → Replace B!

                    Clock Hand
                        ↓
              ┌───┐   ┌───┐   ┌───┐
              │ A │───│NEW│───│ C │
              │R=1│   │R=1│   │R=1│
              └───┘   └───┘   └───┘
                ↑               │
                │     ┌───┐     │
                └─────│ D │─────┘
                      │R=1│
                      └───┘

─────────────────────────────────────────────────────────────

Another Page Fault (all have R=1):
─────────────────────────────────────────────────────────────

        Clock Hand
            ↓
Step 1: Check NEW, R=1 → Set R=0, advance
Step 2: Check C, R=1 → Set R=0, advance
Step 3: Check D, R=1 → Set R=0, advance
Step 4: Check A, R=1 → Set R=0, advance
Step 5: Check NEW, R=0 → Replace!

After clearing bits and replacement:
              ┌───┐   ┌───┐   ┌───┐
              │ A │───│NEW2│──│ C │
              │R=0│   │R=1 │  │R=0│
              └───┘   └───┘   └───┘
                ↑               │
                │     ┌───┐     │
                └─────│ D │─────┘
                      │R=0│
                      └───┘
`}
      </pre>
    </div>

    {/* Enhanced Second Chance */}
    <h2 className="text-3xl font-bold mt-8">Enhanced Second Chance Algorithm</h2>
    <p className="leading-relaxed">
      Uses both reference bit (R) and modify bit (M) to make smarter replacement decisions.
      Modified pages cost more to replace (need to write back to disk).
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Enhanced Second Chance:
─────────────────────────────────────────────────────────────

Uses two bits per page:
    R = Reference bit (has page been accessed?)
    M = Modify bit (has page been written to?)

Four Classes of Pages:
─────────────────────────────────────────────────────────────

┌───────┬───────┬───────────────────────────────────────────┐
│   R   │   M   │           Interpretation                  │
├───────┼───────┼───────────────────────────────────────────┤
│   0   │   0   │ Not recently used, not modified           │
│       │       │ BEST candidate for replacement            │
├───────┼───────┼───────────────────────────────────────────┤
│   0   │   1   │ Not recently used, but modified           │
│       │       │ Good candidate (needs write-back)         │
├───────┼───────┼───────────────────────────────────────────┤
│   1   │   0   │ Recently used, not modified               │
│       │       │ Probably will be used again soon          │
├───────┼───────┼───────────────────────────────────────────┤
│   1   │   1   │ Recently used and modified                │
│       │       │ WORST candidate (likely used, needs write)│
└───────┴───────┴───────────────────────────────────────────┘

Replacement Priority: (0,0) > (0,1) > (1,0) > (1,1)

Algorithm:
─────────────────────────────────────────────────────────────

On page fault, scan circular queue:

Pass 1: Look for (R=0, M=0) - best candidate
        Don't modify any bits

Pass 2: Look for (R=0, M=1)
        Set R=0 for pages with R=1 during scan

Pass 3: Now all pages have R=0
        Look for (R=0, M=0) again

Pass 4: Look for (R=0, M=1)
        Must find one now

Example Scan:
─────────────────────────────────────────────────────────────

    Pages: A(1,1), B(1,0), C(0,1), D(0,0)

    Pass 1: Looking for (0,0)
            A(1,1)→skip, B(1,0)→skip, C(0,1)→skip, D(0,0)→FOUND!
            Replace D

    If D didn't exist:
    Pass 1: A(1,1)→skip, B(1,0)→skip, C(0,1)→skip
    Pass 2: A→(0,1), B→(0,0)...FOUND B with (0,0)!
            Replace B
`}
      </pre>
    </div>

    {/* Additional Reference Bits Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Additional Reference Bits Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Additional Reference Bits (History Bits):
─────────────────────────────────────────────────────────────

Keep 8 bits of history for each page (instead of just 1)
Periodically shift in the current reference bit

Setup:
    Each page has an 8-bit history register
    Every timer interrupt (e.g., every 100ms):
        1. Shift history right by 1 bit
        2. Place current R bit at leftmost position
        3. Clear the R bit

Example Evolution:
─────────────────────────────────────────────────────────────

Time    R bit   History Register (8 bits)
──────────────────────────────────────────
 T0      -      00000000 (initial)
 T1      1      10000000 (accessed)
 T2      0      01000000 (not accessed)
 T3      1      10100000 (accessed)
 T4      1      11010000 (accessed)
 T5      0      01101000 (not accessed)
 T6      0      00110100 (not accessed)
 T7      1      10011010 (accessed)
 T8      0      01001101 (not accessed)

Interpretation:
─────────────────────────────────────────────────────────────

    History = 11111111: Accessed in every period (very hot)
    History = 00000000: Never accessed in 8 periods (very cold)
    History = 10000000: Just accessed, nothing before
    History = 00000001: Accessed 8 periods ago, nothing since

Replacement Decision:
─────────────────────────────────────────────────────────────

    Interpret history as unsigned integer
    Replace page with LOWEST history value
    Ties broken arbitrarily (e.g., FIFO among ties)

    Page A: 11010100 = 212
    Page B: 01100110 = 102
    Page C: 00001111 = 15   ← Replace (lowest)
    Page D: 10000000 = 128

Advantages:
    - More history than single bit (8 periods of info)
    - Pages with consistent usage pattern favored
    - Low overhead (just bit operations at timer interrupt)
`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">History Bits</th>
            <th className="p-3 border">Overhead</th>
            <th className="p-3 border">LRU Accuracy</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">True LRU</td>
            <td className="p-3 border">Full timestamp</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">Perfect</td>
          </tr>
          <tr>
            <td className="p-3 border">Additional Ref Bits (8)</td>
            <td className="p-3 border">8 bits</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Very Good</td>
          </tr>
          <tr>
            <td className="p-3 border">Enhanced Second Chance</td>
            <td className="p-3 border">2 bits (R, M)</td>
            <td className="p-3 border">Very Low</td>
            <td className="p-3 border">Good</td>
          </tr>
          <tr>
            <td className="p-3 border">Second Chance (Clock)</td>
            <td className="p-3 border">1 bit (R)</td>
            <td className="p-3 border">Very Low</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border">Basic Ref Bit</td>
            <td className="p-3 border">1 bit (R)</td>
            <td className="p-3 border">Minimal</td>
            <td className="p-3 border">Poor</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Real-World Usage */}
    <h2 className="text-3xl font-bold mt-8">Real-World Usage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Operating System Implementations:
─────────────────────────────────────────────────────────────

Linux:
    - Uses a variant of Clock algorithm (CLOCK-Pro)
    - Two-handed clock for active/inactive lists
    - Considers page age and access frequency

Windows:
    - Working Set model with Clock-like replacement
    - Pages classified as standby, modified, free
    - Background thread maintains page lists

BSD/macOS:
    - Mach VM uses Clock algorithm variant
    - Pages on active/inactive queues
    - Second chance before eviction

Common Pattern:
─────────────────────────────────────────────────────────────

Most real systems use:
    1. Enhanced Second Chance or similar
    2. With modifications for:
       - File-backed vs anonymous pages
       - Kernel vs user pages
       - Large pages (huge pages)
    3. Additional heuristics:
       - Prefetching
       - Free page pool management
       - Memory pressure indicators
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>True LRU is too expensive due to constant updates on memory references</li>
      <li>Reference bit is set by hardware on page access; OS can clear it</li>
      <li>Second Chance (Clock) gives recently-used pages another chance</li>
      <li>Enhanced Second Chance uses both reference and modify bits</li>
      <li>Additional reference bits maintain history of page usage</li>
      <li>Modified pages cost more to replace (need disk write)</li>
      <li>Clock algorithm is efficient: O(1) amortized per replacement</li>
      <li>Most real operating systems use variants of these approximations</li>
    </ul>
  </div>
);

export default LRUApproximation;
