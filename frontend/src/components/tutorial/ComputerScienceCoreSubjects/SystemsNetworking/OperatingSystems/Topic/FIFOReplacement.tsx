import React from 'react';

const FIFOReplacement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      FIFO Page Replacement Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      FIFO (First-In, First-Out) is the simplest page replacement algorithm. When a page
      needs to be replaced, FIFO selects the oldest page in memory - the one that has been
      in memory the longest. While easy to implement, FIFO does not consider the actual
      usage pattern of pages and can perform poorly in practice.
    </p>

    {/* How FIFO Works */}
    <h2 className="text-3xl font-bold mt-8">How FIFO Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
FIFO Page Replacement:
─────────────────────────────────────────────────────────────

    Maintain a queue of pages in memory
    New pages enter at the tail of the queue
    When replacement needed, remove page at head (oldest)

    ┌─────────────────────────────────────────────────────────┐
    │                    FIFO Queue                           │
    │                                                         │
    │    HEAD (oldest)                      TAIL (newest)     │
    │       ↓                                    ↓            │
    │    ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐         │
    │    │  A  │──│  B  │──│  C  │──│  D  │──│  E  │         │
    │    └─────┘  └─────┘  └─────┘  └─────┘  └─────┘         │
    │       ↑                                                 │
    │    Replace                                              │
    │    this one                                             │
    └─────────────────────────────────────────────────────────┘

Algorithm Steps:
─────────────────────────────────────────────────────────────
    1. Check if requested page is in memory
       - If YES: Page hit, no replacement needed
       - If NO: Page fault, go to step 2

    2. If memory has free frames:
       - Load page into free frame
       - Add to tail of FIFO queue

    3. If memory is full:
       - Remove page at head of queue (oldest)
       - Load new page into that frame
       - Add new page to tail of queue
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

Step-by-step execution:
─────────────────────────────────────────────────────────────

Ref│ Frame 0 │ Frame 1 │ Frame 2 │ Page Fault? │ Queue State
───┼─────────┼─────────┼─────────┼─────────────┼─────────────
 7 │    7    │    -    │    -    │     F       │ [7]
 0 │    7    │    0    │    -    │     F       │ [7, 0]
 1 │    7    │    0    │    1    │     F       │ [7, 0, 1]
 2 │    2    │    0    │    1    │     F       │ [0, 1, 2]  ← 7 out
 0 │    2    │    0    │    1    │     -       │ [0, 1, 2]  ← Hit
 3 │    2    │    3    │    1    │     F       │ [1, 2, 3]  ← 0 out
 0 │    2    │    3    │    0    │     F       │ [2, 3, 0]  ← 1 out
 4 │    4    │    3    │    0    │     F       │ [3, 0, 4]  ← 2 out
 2 │    4    │    2    │    0    │     F       │ [0, 4, 2]  ← 3 out
 3 │    4    │    2    │    3    │     F       │ [4, 2, 3]  ← 0 out
 0 │    0    │    2    │    3    │     F       │ [2, 3, 0]  ← 4 out
 3 │    0    │    2    │    3    │     -       │ [2, 3, 0]  ← Hit
 2 │    0    │    2    │    3    │     -       │ [2, 3, 0]  ← Hit
 1 │    0    │    1    │    3    │     F       │ [3, 0, 1]  ← 2 out
 2 │    2    │    1    │    3    │     F       │ [0, 1, 2]  ← 3 out
 0 │    2    │    1    │    0    │     F       │ [1, 2, 0]  ← 3 out
 1 │    2    │    1    │    0    │     -       │ [1, 2, 0]  ← Hit
 7 │    7    │    1    │    0    │     F       │ [2, 0, 7]  ← 1 out
 0 │    7    │    1    │    0    │     -       │ [2, 0, 7]  ← Hit
 1 │    7    │    1    │    0    │     -       │ [2, 0, 7]  ← Hit

─────────────────────────────────────────────────────────────
Total Page Faults: 15
Total References: 20
Hit Ratio: 5/20 = 25%
Fault Rate: 15/20 = 75%
`}
      </pre>
    </div>

    {/* Visual Timeline */}
    <h2 className="text-3xl font-bold mt-8">Visual Timeline</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Frame State Over Time:
─────────────────────────────────────────────────────────────

Time:   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
Ref:    7   0   1   2   0   3   0   4   2   3   0   3   2   1   2
       ───────────────────────────────────────────────────────────
F0:    [7] [7] [7] [2] [2] [2] [2] [4] [4] [4] [0] [0] [0] [0] [2]
F1:    [-] [0] [0] [0] [0] [3] [3] [3] [2] [2] [2] [2] [2] [1] [1]
F2:    [-] [-] [1] [1] [1] [1] [0] [0] [0] [3] [3] [3] [3] [3] [3]
       ───────────────────────────────────────────────────────────
Fault:  F   F   F   F   -   F   F   F   F   F   F   -   -   F   F

Time:  16  17  18  19  20
Ref:    0   1   7   0   1
       ─────────────────────
F0:    [2] [2] [7] [7] [7]
F1:    [1] [1] [1] [1] [1]
F2:    [0] [0] [0] [0] [0]
       ─────────────────────
Fault:  F   -   F   -   -

Legend: F = Page Fault, - = Page Hit
`}
      </pre>
    </div>

    {/* Belady's Anomaly */}
    <h2 className="text-3xl font-bold mt-8">Belady's Anomaly</h2>
    <p className="leading-relaxed">
      A counterintuitive phenomenon where increasing the number of frames can increase
      the number of page faults. FIFO is one of the few algorithms that exhibits this behavior.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Belady's Anomaly Example:
─────────────────────────────────────────────────────────────

Reference String: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5

WITH 3 FRAMES:
─────────────────────────────────────────────────────────────
Ref│ F0  │ F1  │ F2  │ Fault?
───┼─────┼─────┼─────┼────────
 1 │  1  │  -  │  -  │   F
 2 │  1  │  2  │  -  │   F
 3 │  1  │  2  │  3  │   F
 4 │  4  │  2  │  3  │   F
 1 │  4  │  1  │  3  │   F
 2 │  4  │  1  │  2  │   F
 5 │  5  │  1  │  2  │   F
 1 │  5  │  1  │  2  │   -
 2 │  5  │  1  │  2  │   -
 3 │  5  │  3  │  2  │   F
 4 │  5  │  3  │  4  │   F
 5 │  5  │  3  │  4  │   -

Page Faults with 3 frames: 9

WITH 4 FRAMES:
─────────────────────────────────────────────────────────────
Ref│ F0  │ F1  │ F2  │ F3  │ Fault?
───┼─────┼─────┼─────┼─────┼────────
 1 │  1  │  -  │  -  │  -  │   F
 2 │  1  │  2  │  -  │  -  │   F
 3 │  1  │  2  │  3  │  -  │   F
 4 │  1  │  2  │  3  │  4  │   F
 1 │  1  │  2  │  3  │  4  │   -
 2 │  1  │  2  │  3  │  4  │   -
 5 │  5  │  2  │  3  │  4  │   F
 1 │  5  │  1  │  3  │  4  │   F
 2 │  5  │  1  │  2  │  4  │   F
 3 │  5  │  1  │  2  │  3  │   F
 4 │  4  │  1  │  2  │  3  │   F
 5 │  4  │  5  │  2  │  3  │   F

Page Faults with 4 frames: 10

─────────────────────────────────────────────────────────────
ANOMALY: More frames (4) → More faults (10) than fewer frames (3) → (9)
─────────────────────────────────────────────────────────────

    3 frames: 9 page faults
    4 frames: 10 page faults  ← MORE faults with MORE frames!

This violates intuition: more memory should mean fewer faults.
`}
      </pre>
    </div>

    {/* Why Belady's Anomaly Occurs */}
    <h3 className="text-2xl font-semibold mt-6">Why Belady's Anomaly Occurs</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Root Cause:
─────────────────────────────────────────────────────────────

FIFO ignores the "usefulness" of pages:
  - Oldest page might still be frequently used
  - Newer page might never be used again

Adding more frames changes the TIMING of replacements:
  - Pages stay longer with more frames
  - But the PATTERN of which pages get replaced changes
  - This new pattern may cause more conflicts with
    the reference string

Algorithms that DON'T have Belady's Anomaly:
─────────────────────────────────────────────────────────────
  - OPT (Optimal)
  - LRU (Least Recently Used)
  - LFU (Least Frequently Used)

These are called "Stack Algorithms" - the set of pages in
memory with n frames is always a subset of pages with n+1 frames.
FIFO does NOT have this property.
`}
      </pre>
    </div>

    {/* Implementation */}
    <h2 className="text-3xl font-bold mt-8">Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
FIFO Implementation Using Circular Queue:
─────────────────────────────────────────────────────────────

class FIFOPageReplacement:
    def __init__(self, num_frames):
        self.frames = [None] * num_frames
        self.pointer = 0  # Points to oldest page
        self.num_frames = num_frames
        self.page_faults = 0

    def access_page(self, page):
        # Check if page is already in memory
        if page in self.frames:
            return "HIT"

        # Page fault
        self.page_faults += 1

        # Replace page at pointer position
        old_page = self.frames[self.pointer]
        self.frames[self.pointer] = page

        # Move pointer to next position (circular)
        self.pointer = (self.pointer + 1) % self.num_frames

        return f"FAULT (replaced {old_page})"

─────────────────────────────────────────────────────────────
Using Circular Pointer (Clock-like):
─────────────────────────────────────────────────────────────

     Initial:              After 3 pages:        After 4th page:
       ↓ pointer              pointer ↓             ↓ pointer
    ┌───┬───┬───┐          ┌───┬───┬───┐       ┌───┬───┬───┐
    │ - │ - │ - │          │ A │ B │ C │       │ D │ B │ C │
    └───┴───┴───┘          └───┴───┴───┘       └───┴───┴───┘
      0   1   2              0   1   2           0   1   2
                                                 ↑
                                              Replaced A
`}
      </pre>
    </div>

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
            <td className="p-3 border">Simple to understand and implement</td>
            <td className="p-3 border">Does not consider page usage patterns</td>
          </tr>
          <tr>
            <td className="p-3 border">Low overhead (O(1) per operation)</td>
            <td className="p-3 border">May replace frequently used pages</td>
          </tr>
          <tr>
            <td className="p-3 border">Fair - every page gets equal time</td>
            <td className="p-3 border">Suffers from Belady's Anomaly</td>
          </tr>
          <tr>
            <td className="p-3 border">Minimal bookkeeping required</td>
            <td className="p-3 border">Generally poor performance</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Comparison with Other Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Performance Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Comparison: Same Reference String, 3 Frames
─────────────────────────────────────────────────────────────

Reference String: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1

┌────────────┬─────────────┬─────────────┐
│ Algorithm  │ Page Faults │ Hit Ratio   │
├────────────┼─────────────┼─────────────┤
│ FIFO       │     15      │    25%      │
├────────────┼─────────────┼─────────────┤
│ Optimal    │     9       │    55%      │
├────────────┼─────────────┼─────────────┤
│ LRU        │     12      │    40%      │
└────────────┴─────────────┴─────────────┘

FIFO performs significantly worse than OPT and LRU
because it ignores which pages are actually being used.
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>FIFO replaces the oldest page in memory (first in, first out)</li>
      <li>Simple to implement using a queue or circular pointer</li>
      <li>Does not consider page usage patterns or frequency</li>
      <li>Suffers from Belady's Anomaly (more frames can cause more faults)</li>
      <li>Generally performs worse than LRU and Optimal algorithms</li>
      <li>O(1) time complexity for each page access</li>
      <li>Rarely used in practice due to poor performance</li>
      <li>May be suitable for simple embedded systems with predictable access</li>
    </ul>
  </div>
);

export default FIFOReplacement;
