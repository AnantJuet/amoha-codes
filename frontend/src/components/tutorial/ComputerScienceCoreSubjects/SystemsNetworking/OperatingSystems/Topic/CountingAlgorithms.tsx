import React from 'react';

const CountingAlgorithms: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Counting-Based Page Replacement Algorithms
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Counting-based algorithms track the number of times each page has been referenced.
      The two main counting algorithms are LFU (Least Frequently Used) and MFU (Most
      Frequently Used). These algorithms use reference counts to make replacement decisions,
      providing an alternative approach to recency-based methods like LRU.
    </p>

    {/* Overview */}
    <h2 className="text-3xl font-bold mt-8">Counting vs Recency</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Comparison of Approaches:
─────────────────────────────────────────────────────────────

RECENCY-BASED (LRU, Clock):
    Track WHEN page was last used
    Assumption: Recently used pages will be used again soon
    "What was just accessed?"

COUNT-BASED (LFU, MFU):
    Track HOW MANY TIMES page was used
    Assumption: Frequently used pages will continue to be used
    "What is accessed the most?"

┌─────────────────┬─────────────────────┬─────────────────────┐
│    Algorithm    │    Tracks           │    Replaces         │
├─────────────────┼─────────────────────┼─────────────────────┤
│      LRU        │ Time of last use    │ Least recent page   │
│      LFU        │ Count of uses       │ Least frequent page │
│      MFU        │ Count of uses       │ Most frequent page  │
└─────────────────┴─────────────────────┴─────────────────────┘
`}
      </pre>
    </div>

    {/* LFU Algorithm */}
    <h2 className="text-3xl font-bold mt-8">LFU (Least Frequently Used)</h2>
    <p className="leading-relaxed">
      LFU replaces the page with the smallest reference count. The intuition is that
      pages used frequently in the past are important and should be kept.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
LFU Algorithm:
─────────────────────────────────────────────────────────────

Each page has a counter:
    counter[page] = number of times page has been referenced

On page reference:
    counter[page]++

On page fault (replacement needed):
    1. Find page with minimum counter value
    2. If tie, use secondary criterion (e.g., FIFO, LRU)
    3. Replace that page
    4. New page starts with counter = 1

Rationale:
─────────────────────────────────────────────────────────────

    "If a page has been used many times, it will probably
     be used many more times."

    Pages with high frequency of access are assumed to be
    part of the active working set of the program.

Example:
─────────────────────────────────────────────────────────────

Reference String: 1, 2, 3, 1, 1, 2, 4, 1, 2
Frames: 3

Step-by-step:
─────────────────────────────────────────────────────────────

Ref│ Frames (Page:Count)        │ Fault │ Action
───┼────────────────────────────┼───────┼──────────────────
 1 │ 1:1                        │   F   │ Load page 1
 2 │ 1:1, 2:1                   │   F   │ Load page 2
 3 │ 1:1, 2:1, 3:1              │   F   │ Load page 3
 1 │ 1:2, 2:1, 3:1              │   -   │ Hit, inc counter
 1 │ 1:3, 2:1, 3:1              │   -   │ Hit, inc counter
 2 │ 1:3, 2:2, 3:1              │   -   │ Hit, inc counter
 4 │ 1:3, 2:2, 4:1              │   F   │ Replace 3 (count=1)
 1 │ 1:4, 2:2, 4:1              │   -   │ Hit, inc counter
 2 │ 1:4, 2:3, 4:1              │   -   │ Hit, inc counter

Page 3 replaced because count=1 was minimum.
Page 4 would be next victim (count=1).
`}
      </pre>
    </div>

    {/* LFU Problems */}
    <h2 className="text-3xl font-bold mt-8">LFU Problems and Solutions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Problem 1: Stale High-Count Pages
─────────────────────────────────────────────────────────────

Scenario:
    Page A was heavily used during initialization (count=1000)
    Program moves to new phase, never uses A again
    New pages B, C, D have low counts (1-10)

    A will NEVER be replaced despite not being used!
    This is called "cache pollution"

Example:
    Phase 1: Load config data, count of config pages = 500
    Phase 2: Process user requests, config never accessed
    Config pages stay forever, blocking useful pages

Solution 1: Aging/Decay
─────────────────────────────────────────────────────────────

Periodically reduce all counters:
    - Divide by 2 (shift right)
    - Subtract a constant
    - Apply exponential decay

Example with divide by 2:
    Timer interrupt every 100ms:
    counter[all pages] = counter[all pages] / 2

    Time    Page A   Page B (new)
    ────────────────────────────
    T0      1000      -
    T1       500      5    (B loaded, A decayed)
    T2       250     10    (B accessed more)
    T3       125     12
    T4        62     15    (eventually B > A/2)

Solution 2: LFU with Aging (LFU-DA)
─────────────────────────────────────────────────────────────

Combine frequency count with age factor:

    score = count / age_factor

Where age_factor increases over time.
New pages get higher effective scores.

─────────────────────────────────────────────────────────────

Problem 2: New Pages Vulnerable
─────────────────────────────────────────────────────────────

New pages start with count = 1
Even if they would be heavily used, they're immediately
candidates for replacement.

Solution: Initial count boost
    - New pages start with average count of current pages
    - Or start with count = threshold value
`}
      </pre>
    </div>

    {/* MFU Algorithm */}
    <h2 className="text-3xl font-bold mt-8">MFU (Most Frequently Used)</h2>
    <p className="leading-relaxed">
      MFU is the opposite of LFU - it replaces the page with the highest reference count.
      The counterintuitive logic is that pages with high counts have completed their
      purpose and won't be needed again.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
MFU Algorithm:
─────────────────────────────────────────────────────────────

Each page has a counter:
    counter[page] = number of times page has been referenced

On page fault (replacement needed):
    1. Find page with MAXIMUM counter value
    2. Replace that page
    3. New page starts with counter = 1

Rationale:
─────────────────────────────────────────────────────────────

    "A page with high count has been used enough and is
     probably done being used."

    "A page with low count was just brought in and hasn't
     had a chance to be used yet."

When MFU Might Work:
─────────────────────────────────────────────────────────────

    - Processing N items, each needs same set of pages
    - Each item accessed once, never revisited
    - Once N accesses complete, page is "done"

Example scenario:
    Reading 1000 records sequentially
    Each record access increments count
    High count = finished records = safe to replace

Example:
─────────────────────────────────────────────────────────────

Reference String: 1, 2, 3, 1, 1, 2, 4, 1, 2
Frames: 3

Ref│ Frames (Page:Count)        │ Fault │ Action
───┼────────────────────────────┼───────┼──────────────────
 1 │ 1:1                        │   F   │ Load page 1
 2 │ 1:1, 2:1                   │   F   │ Load page 2
 3 │ 1:1, 2:1, 3:1              │   F   │ Load page 3
 1 │ 1:2, 2:1, 3:1              │   -   │ Hit
 1 │ 1:3, 2:1, 3:1              │   -   │ Hit
 2 │ 1:3, 2:2, 3:1              │   -   │ Hit
 4 │ 1:3, 2:2, 4:1              │   F   │ Replace 1! (highest=3)
 1 │ 4:1, 2:2, 1:1              │   F   │ Replace 2! (highest=2)
 2 │ 4:1, 1:1, 2:1              │   F   │ Replace 4 (highest=1, tie)

Note: MFU causes more faults here! (6 vs LFU's 4)
Page 1 was evicted despite being heavily used.
`}
      </pre>
    </div>

    {/* Comparison Example */}
    <h2 className="text-3xl font-bold mt-8">LFU vs MFU Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Same Reference String, Different Algorithms:
─────────────────────────────────────────────────────────────

Reference String: 1, 2, 3, 4, 1, 1, 1, 2, 2, 5
Frames: 3

LFU Execution:
─────────────────────────────────────────────────────────────
Ref│ Frames (Page:Count)        │ Fault │
───┼────────────────────────────┼───────┤
 1 │ 1:1                        │   F   │
 2 │ 1:1, 2:1                   │   F   │
 3 │ 1:1, 2:1, 3:1              │   F   │
 4 │ 1:1, 2:1, 4:1              │   F   │ 3 out (count 1, FIFO tiebreak)
 1 │ 1:2, 2:1, 4:1              │   -   │
 1 │ 1:3, 2:1, 4:1              │   -   │
 1 │ 1:4, 2:1, 4:1              │   -   │
 2 │ 1:4, 2:2, 4:1              │   -   │
 2 │ 1:4, 2:3, 4:1              │   -   │
 5 │ 1:4, 2:3, 5:1              │   F   │ 4 out (count 1)

LFU Page Faults: 5

MFU Execution:
─────────────────────────────────────────────────────────────
Ref│ Frames (Page:Count)        │ Fault │
───┼────────────────────────────┼───────┤
 1 │ 1:1                        │   F   │
 2 │ 1:1, 2:1                   │   F   │
 3 │ 1:1, 2:1, 3:1              │   F   │
 4 │ 1:1, 2:1, 4:1              │   F   │ 3 out (MFU picks first tie)
 1 │ 1:2, 2:1, 4:1              │   -   │
 1 │ 1:3, 2:1, 4:1              │   -   │
 1 │ 1:4, 2:1, 4:1              │   -   │
 2 │ 1:4, 2:2, 4:1              │   -   │
 2 │ 1:4, 2:3, 4:1              │   -   │
 5 │ 2:3, 4:1, 5:1              │   F   │ 1 out! (count 4, highest)

MFU Page Faults: 5

In this example, same fault count but different behavior!
MFU evicted the most-used page (1), which might be wrong.
`}
      </pre>
    </div>

    {/* Implementation */}
    <h2 className="text-3xl font-bold mt-8">Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
LFU Implementation with Min-Heap:
─────────────────────────────────────────────────────────────

class LFUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.frames = {}        # page -> count
        self.min_heap = []      # (count, timestamp, page)
        self.time = 0

    def access(self, page):
        self.time += 1

        if page in self.frames:
            # Hit: increment counter
            self.frames[page] += 1
            # Update heap (lazy update - mark old entries stale)
            heappush(self.min_heap,
                    (self.frames[page], self.time, page))
            return "HIT"

        # Miss: need to load page
        if len(self.frames) >= self.capacity:
            self._evict()

        self.frames[page] = 1
        heappush(self.min_heap, (1, self.time, page))
        return "FAULT"

    def _evict(self):
        # Find valid minimum
        while self.min_heap:
            count, time, page = heappop(self.min_heap)
            if page in self.frames and \\
               self.frames[page] == count:
                del self.frames[page]
                return
        # (else entry was stale, try next)

─────────────────────────────────────────────────────────────

Data Structure Comparison:
─────────────────────────────────────────────────────────────

┌──────────────────┬───────────┬────────────┬────────────────┐
│   Data Structure │ Access    │ Find Min   │ Space          │
├──────────────────┼───────────┼────────────┼────────────────┤
│ Unsorted List    │ O(n)      │ O(n)       │ O(n)           │
│ Sorted List      │ O(n)      │ O(1)       │ O(n)           │
│ Min-Heap         │ O(log n)  │ O(log n)*  │ O(n)           │
│ Hash + Freq List │ O(1)      │ O(1)       │ O(n)           │
└──────────────────┴───────────┴────────────┴────────────────┘

* Heap needs lazy deletion handling

Optimal LFU: O(1) using frequency buckets
─────────────────────────────────────────────────────────────

Maintain linked lists for each frequency:
    freq[1]: [page_a, page_b]  → pages accessed 1 time
    freq[2]: [page_c]          → pages accessed 2 times
    freq[5]: [page_d, page_e]  → pages accessed 5 times

min_freq = smallest non-empty frequency list
Evict: Remove from tail of freq[min_freq] list
`}
      </pre>
    </div>

    {/* Practical Usage */}
    <h2 className="text-3xl font-bold mt-8">Practical Considerations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">LFU</th>
            <th className="p-3 border">MFU</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Best for</td>
            <td className="p-3 border">Stable workloads with hot pages</td>
            <td className="p-3 border">One-time sequential access</td>
          </tr>
          <tr>
            <td className="p-3 border">Poor for</td>
            <td className="p-3 border">Changing workloads</td>
            <td className="p-3 border">Most workloads</td>
          </tr>
          <tr>
            <td className="p-3 border">Real-world use</td>
            <td className="p-3 border">CDN caching, databases</td>
            <td className="p-3 border">Rarely used</td>
          </tr>
          <tr>
            <td className="p-3 border">OS page replacement</td>
            <td className="p-3 border">Sometimes (with aging)</td>
            <td className="p-3 border">Almost never</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Algorithm Variants */}
    <h2 className="text-3xl font-bold mt-8">LFU Variants</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Common LFU Variations:
─────────────────────────────────────────────────────────────

1. LFU with Dynamic Aging (LFU-DA)
   - Periodically divide all counts by 2
   - Prevents old pages from dominating
   - Used in some web caches

2. Window-LFU (W-LFU)
   - Only count references within a sliding window
   - Recent frequency matters more than total
   - Better for changing workloads

3. LFU with Initialization Boost
   - New pages start with average count
   - Prevents immediate eviction of new pages
   - Gives new pages fair chance

4. Perfect LFU
   - Break ties using LRU (least recent among same count)
   - Provides deterministic behavior
   - More complex implementation

5. LFU-K
   - Consider last K references, not just count
   - Combines frequency and recency
   - Used in database buffer management
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>LFU replaces the page with the lowest reference count</li>
      <li>MFU replaces the page with the highest reference count</li>
      <li>LFU assumes frequently used pages will continue to be useful</li>
      <li>MFU assumes heavily used pages have completed their purpose</li>
      <li>LFU problem: stale pages with high counts never get evicted</li>
      <li>Solution: aging/decay mechanisms to reduce old counts</li>
      <li>MFU is rarely used in practice as it often performs poorly</li>
      <li>LFU with aging is used in caching systems (CDN, database)</li>
    </ul>
  </div>
);

export default CountingAlgorithms;
