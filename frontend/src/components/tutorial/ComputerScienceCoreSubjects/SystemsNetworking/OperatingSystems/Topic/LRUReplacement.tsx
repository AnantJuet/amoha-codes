import React from 'react';

const LRUReplacement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      LRU (Least Recently Used) Page Replacement
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      LRU (Least Recently Used) is a page replacement algorithm that replaces the page
      that has not been used for the longest period of time. It is based on the principle
      of temporal locality - if a page has been used recently, it is likely to be used
      again soon. LRU approximates OPT by using past behavior to predict future usage.
    </p>

    {/* How LRU Works */}
    <h2 className="text-3xl font-bold mt-8">How LRU Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
LRU Page Replacement Strategy:
─────────────────────────────────────────────────────────────

When a page fault occurs and memory is full:
    1. Look at the PAST references
    2. Find the page that was used LEAST RECENTLY
    3. Replace that page

Key Insight:
─────────────────────────────────────────────────────────────
    OPT: Replace page used FURTHEST in FUTURE (cannot implement)
    LRU: Replace page used FURTHEST in PAST   (can implement)

    Assumption: Recent past predicts near future
    This works due to "temporal locality of reference"

Visual Concept:
─────────────────────────────────────────────────────────────

    Past References          Current          Future References
    ─────────────────       ─────────        ─────────────────
    [look here for LRU]        ↓             [cannot see - LRU ignores]

    Reference String: 7, 0, 1, 2, 0, 3 | 0 | 4, 2, 3, ...
                      └────────────────┘   ↑
                        Past references  Current

    Memory contains: {2, 0, 3}
    Looking at past to decide:
        Page 2: Last used at position 4
        Page 0: Last used at position 5
        Page 3: Last used at position 6

    Page 2 was used longest ago → Replace page 2
`}
      </pre>
    </div>

    {/* Worked Example */}
    <h2 className="text-3xl font-bold mt-8">Worked Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Example: Reference String with 3 Frames
─────────────────────────────────────────────────────────────

Reference String: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
Number of Frames: 3

Step-by-step execution (tracking recency):
─────────────────────────────────────────────────────────────

Pos│Ref│ Frames (MRU→LRU) │ Fault? │ Action
───┼───┼──────────────────┼────────┼────────────────────────
 1 │ 7 │ [7]              │   F    │ Load 7
 2 │ 0 │ [0, 7]           │   F    │ Load 0
 3 │ 1 │ [1, 0, 7]        │   F    │ Load 1
 4 │ 2 │ [2, 1, 0]        │   F    │ Replace 7 (LRU)
 5 │ 0 │ [0, 2, 1]        │   -    │ Hit, move 0 to front
 6 │ 3 │ [3, 0, 2]        │   F    │ Replace 1 (LRU)
 7 │ 0 │ [0, 3, 2]        │   -    │ Hit, move 0 to front
 8 │ 4 │ [4, 0, 3]        │   F    │ Replace 2 (LRU)
 9 │ 2 │ [2, 4, 0]        │   F    │ Replace 3 (LRU)
10 │ 3 │ [3, 2, 4]        │   F    │ Replace 0 (LRU)
11 │ 0 │ [0, 3, 2]        │   F    │ Replace 4 (LRU)
12 │ 3 │ [3, 0, 2]        │   -    │ Hit, move 3 to front
13 │ 2 │ [2, 3, 0]        │   -    │ Hit, move 2 to front
14 │ 1 │ [1, 2, 3]        │   F    │ Replace 0 (LRU)
15 │ 2 │ [2, 1, 3]        │   -    │ Hit, move 2 to front
16 │ 0 │ [0, 2, 1]        │   F    │ Replace 3 (LRU)
17 │ 1 │ [1, 0, 2]        │   -    │ Hit, move 1 to front
18 │ 7 │ [7, 1, 0]        │   F    │ Replace 2 (LRU)
19 │ 0 │ [0, 7, 1]        │   -    │ Hit, move 0 to front
20 │ 1 │ [1, 0, 7]        │   -    │ Hit, move 1 to front

─────────────────────────────────────────────────────────────
Total Page Faults: 12
Total References: 20
Hit Ratio: 8/20 = 40%
Fault Rate: 12/20 = 60%
`}
      </pre>
    </div>

    {/* LRU Stack Representation */}
    <h2 className="text-3xl font-bold mt-8">LRU Stack Visualization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
LRU Stack Over Time:
─────────────────────────────────────────────────────────────

The stack always shows pages ordered by recency:
    Top = Most Recently Used (MRU)
    Bottom = Least Recently Used (LRU)

Ref: 7    0    1    2    0    3    0    4
     ↓    ↓    ↓    ↓    ↓    ↓    ↓    ↓

    ┌─┐  ┌─┐  ┌─┐  ┌─┐  ┌─┐  ┌─┐  ┌─┐  ┌─┐
MRU │7│  │0│  │1│  │2│  │0│  │3│  │0│  │4│
    ├─┤  ├─┤  ├─┤  ├─┤  ├─┤  ├─┤  ├─┤  ├─┤
    │ │  │7│  │0│  │1│  │2│  │0│  │3│  │0│
    ├─┤  ├─┤  ├─┤  ├─┤  ├─┤  ├─┤  ├─┤  ├─┤
LRU │ │  │ │  │7│  │0│  │1│  │2│  │2│  │3│
    └─┘  └─┘  └─┘  └─┘  └─┘  └─┘  └─┘  └─┘
     F    F    F    F    -    F    -    F
                  (7 out)    (1 out)   (2 out)

When page hit (like 0 at position 5):
─────────────────────────────────────────────────────────────

Before:        After:
  ┌─┐           ┌─┐
  │2│ MRU       │0│ MRU  ← 0 moves to top
  ├─┤           ├─┤
  │1│           │2│
  ├─┤           ├─┤
  │0│ LRU       │1│ LRU
  └─┘           └─┘

Page 0 is "touched" and moves to MRU position.
Other pages shift down.
`}
      </pre>
    </div>

    {/* Implementation Methods */}
    <h2 className="text-3xl font-bold mt-8">Implementation Methods</h2>

    <h3 className="text-2xl font-semibold mt-6">Method 1: Counter Implementation</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Counter-Based LRU:
─────────────────────────────────────────────────────────────

Hardware Support: CPU has a logical clock or counter
Each page table entry has a "time-of-use" field

On every page reference:
    1. Increment CPU counter
    2. Copy counter value to page's time field

On page replacement:
    1. Search all pages for smallest time value
    2. That page is LRU; replace it

Example:
─────────────────────────────────────────────────────────────

Time    Page    Counter After
────────────────────────────
 1      7       Page 7: time=1
 2      0       Page 0: time=2
 3      1       Page 1: time=3
 4      2       Page 2: time=4, Page 7: time=1 (LRU, replace)
 5      0       Page 0: time=5 (updated)
 6      3       Page 3: time=6, Page 1: time=3 (LRU, replace)

Page Table with Counters:
┌─────────┬─────────────┐
│  Page   │ Last Access │
├─────────┼─────────────┤
│    0    │     5       │
│    2    │     4       │
│    3    │     6       │ ← MRU
└─────────┴─────────────┘

Disadvantages:
    - Need to search all pages to find minimum
    - Counter may overflow
    - Time field in every page table entry
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Method 2: Stack Implementation</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Stack-Based LRU:
─────────────────────────────────────────────────────────────

Maintain a stack (doubly-linked list) of page numbers
Top of stack = MRU page
Bottom of stack = LRU page

On every page reference:
    1. If page not in memory:
       - Remove page from bottom (LRU)
       - Add new page to top (MRU)
    2. If page in memory (hit):
       - Remove page from current position
       - Add page to top (MRU)

Implementation with Doubly-Linked List:
─────────────────────────────────────────────────────────────

    NULL ← [Page 4] ⟷ [Page 0] ⟷ [Page 3] → NULL
              ↑                       ↑
             MRU                     LRU
            (head)                  (tail)

When page 0 is referenced (hit):
─────────────────────────────────────────────────────────────

Before: NULL ← [4] ⟷ [0] ⟷ [3] → NULL

Step 1: Remove 0 from middle
        NULL ← [4] ⟷ [3] → NULL
               [0] floating

Step 2: Insert 0 at head
        NULL ← [0] ⟷ [4] ⟷ [3] → NULL
              (now MRU)

After:  NULL ← [0] ⟷ [4] ⟷ [3] → NULL

Operations:
    - Move to front: O(1) with doubly-linked list
    - No search needed for replacement (always tail)
    - Requires hash table for O(1) page lookup
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Method 3: Hardware Support (Reference Bits)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Hardware-Assisted LRU (Approximate):
─────────────────────────────────────────────────────────────

Pure LRU requires updating on EVERY memory reference
This is expensive even with hardware support

Approximation: Use reference bits (covered in LRU Approximation)
    - Each page has a reference bit
    - Set to 1 when page is accessed
    - Periodically shift or clear bits
    - Pages with older references are candidates for replacement

This gives "approximate LRU" behavior with less overhead.
`}
      </pre>
    </div>

    {/* Complexity Analysis */}
    <h2 className="text-3xl font-bold mt-8">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Implementation</th>
            <th className="p-3 border">Access (Hit)</th>
            <th className="p-3 border">Replacement</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Counter</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n) counters</td>
          </tr>
          <tr>
            <td className="p-3 border">Stack (List)</td>
            <td className="p-3 border">O(n) search</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n) pointers</td>
          </tr>
          <tr>
            <td className="p-3 border">Stack + Hash</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n) hash + list</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* LRU Properties */}
    <h2 className="text-3xl font-bold mt-8">LRU Properties</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Stack Algorithm Property:
─────────────────────────────────────────────────────────────

LRU is a "stack algorithm" like OPT:
    With n frames:   S_n = {n most recently used pages}
    With n+1 frames: S_{n+1} = {n+1 most recently used pages}

    S_n ⊆ S_{n+1}

Therefore:
    - LRU does NOT suffer from Belady's Anomaly
    - More frames never causes more page faults
    - Monotonic: faults with n+1 frames <= faults with n frames

Temporal Locality:
─────────────────────────────────────────────────────────────

LRU works well when programs exhibit temporal locality:
    - Recently used pages are likely to be used again soon
    - Loop bodies, frequently called functions
    - Working set of pages accessed together

LRU performs poorly when:
    - Access patterns are truly random
    - Large sequential scans (each page used once)
    - Access pattern larger than memory
`}
      </pre>
    </div>

    {/* Comparison with Other Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Comparison with Other Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Page Faults</th>
            <th className="p-3 border">Belady's Anomaly</th>
            <th className="p-3 border">Implementation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">OPT</td>
            <td className="p-3 border">9 (minimum)</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Not possible</td>
          </tr>
          <tr className="bg-blue-100 dark:bg-blue-900">
            <td className="p-3 border font-bold">LRU</td>
            <td className="p-3 border">12</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Hardware/Software</td>
          </tr>
          <tr>
            <td className="p-3 border">FIFO</td>
            <td className="p-3 border">15</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Simple</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
      Reference String: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1 with 3 frames
    </p>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Good approximation of OPT</td>
            <td className="p-3 border">Requires hardware support or high overhead</td>
          </tr>
          <tr>
            <td className="p-3 border">No Belady's Anomaly</td>
            <td className="p-3 border">Must update on every memory reference</td>
          </tr>
          <tr>
            <td className="p-3 border">Works well with temporal locality</td>
            <td className="p-3 border">Counter overflow possible</td>
          </tr>
          <tr>
            <td className="p-3 border">Widely used in practice (approximated)</td>
            <td className="p-3 border">Expensive to implement exactly</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>LRU replaces the page that has not been used for the longest time</li>
      <li>Based on temporal locality: recent past predicts near future</li>
      <li>Does not suffer from Belady's Anomaly (stack algorithm)</li>
      <li>Can be implemented with counters (O(n) replacement) or stack (O(1) with hash)</li>
      <li>Requires update on every memory reference (expensive)</li>
      <li>In practice, LRU is approximated using reference bits</li>
      <li>Performance is between FIFO and OPT (closer to OPT)</li>
      <li>Works well for programs with good temporal locality</li>
    </ul>
  </div>
);

export default LRUReplacement;
