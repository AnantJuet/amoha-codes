import React from 'react';

const OptimalReplacement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Optimal (OPT) Page Replacement Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Optimal (OPT) page replacement algorithm, also known as Belady's Algorithm or
      the clairvoyant algorithm, replaces the page that will not be used for the longest
      period of time in the future. It produces the minimum possible number of page faults
      for a given reference string and serves as a theoretical benchmark for comparing
      other algorithms.
    </p>

    {/* How OPT Works */}
    <h2 className="text-3xl font-bold mt-8">How OPT Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Optimal Page Replacement Strategy:
─────────────────────────────────────────────────────────────

When a page fault occurs and all frames are full:
    1. Look at the FUTURE reference string
    2. For each page currently in memory, find when it will
       next be referenced
    3. Replace the page that will be used FURTHEST in the future
       (or never used again)

Why "Optimal"?
─────────────────────────────────────────────────────────────
    - Provably produces minimum page faults
    - Cannot be beaten by any other algorithm
    - Optimal for the given reference string

Why "Clairvoyant"?
─────────────────────────────────────────────────────────────
    - Requires knowledge of FUTURE page references
    - In practice, we cannot predict the future
    - Therefore, OPT cannot be implemented in real systems
    - Used as a BENCHMARK to evaluate other algorithms

Visual Concept:
─────────────────────────────────────────────────────────────

    Past References          Current          Future References
    ─────────────────       ─────────        ─────────────────
    [already processed]        ↓             [look ahead here]

    Reference String: ... 2, 0, 3 | 4 | 2, 3, 0, 3, 2, 1, 2, 0
                                  ↑
                               Current
                               Reference
                               (needs page 4)

    Memory contains: {2, 0, 3}
    Looking ahead to decide which to replace:
        Page 2: Next used at position +1
        Page 0: Next used at position +3
        Page 3: Next used at position +2

    Replace page 0 (used FURTHEST in future)
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
Positions:        1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20
Number of Frames: 3

Step-by-step execution:
─────────────────────────────────────────────────────────────

Pos│Ref│ F0  │ F1  │ F2  │ Fault? │ Decision
───┼───┼─────┼─────┼─────┼────────┼──────────────────────────
 1 │ 7 │  7  │  -  │  -  │   F    │ Empty frame
 2 │ 0 │  7  │  0  │  -  │   F    │ Empty frame
 3 │ 1 │  7  │  0  │  1  │   F    │ Empty frame
 4 │ 2 │  2  │  0  │  1  │   F    │ 7 never used again → replace 7
 5 │ 0 │  2  │  0  │  1  │   -    │ Hit
 6 │ 3 │  2  │  0  │  3  │   F    │ 1 used at pos 14, 0 at 7, 2 at 9
   │   │     │     │     │        │ → replace 1 (furthest)
 7 │ 0 │  2  │  0  │  3  │   -    │ Hit
 8 │ 4 │  2  │  4  │  3  │   F    │ 0 at pos 11, 2 at 9, 3 at 10
   │   │     │     │     │        │ → replace 0 (furthest)
 9 │ 2 │  2  │  4  │  3  │   -    │ Hit
10 │ 3 │  2  │  4  │  3  │   -    │ Hit
11 │ 0 │  2  │  0  │  3  │   F    │ 4 never used again → replace 4
12 │ 3 │  2  │  0  │  3  │   -    │ Hit
13 │ 2 │  2  │  0  │  3  │   -    │ Hit
14 │ 1 │  2  │  0  │  1  │   F    │ 3 never used again → replace 3
15 │ 2 │  2  │  0  │  1  │   -    │ Hit
16 │ 0 │  2  │  0  │  1  │   -    │ Hit
17 │ 1 │  2  │  0  │  1  │   -    │ Hit
18 │ 7 │  7  │  0  │  1  │   F    │ 2 never used again → replace 2
19 │ 0 │  7  │  0  │  1  │   -    │ Hit
20 │ 1 │  7  │  0  │  1  │   -    │ Hit

─────────────────────────────────────────────────────────────
Total Page Faults: 9
Total References: 20
Hit Ratio: 11/20 = 55%
Fault Rate: 9/20 = 45%
`}
      </pre>
    </div>

    {/* Decision Making Process */}
    <h2 className="text-3xl font-bold mt-8">Decision Making Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Detailed Decision at Position 6 (Requesting Page 3):
─────────────────────────────────────────────────────────────

Current memory: {2, 0, 1}
Remaining reference string: 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
                            7  8  9 10 11 12 13 14 15 16 17 18 19 20

For each page in memory, find next use:
─────────────────────────────────────────────────────────────

    Page 2: Next appears at position 9    (3 refs away)
    Page 0: Next appears at position 7    (1 ref away)
    Page 1: Next appears at position 14   (8 refs away)

                   Position 6 (current)
                          ↓
    ... 2, 0, 3 | 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
            ↑       ↑     ↑              ↑
           Need    0      2              1
            3     (1 away) (3 away)      (8 away)

Decision: Replace page 1 (furthest future use at position 14)

After replacement: Memory = {2, 0, 3}

─────────────────────────────────────────────────────────────

Detailed Decision at Position 8 (Requesting Page 4):
─────────────────────────────────────────────────────────────

Current memory: {2, 0, 3}
Remaining reference string: 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1
                            9 10 11 12 13 14 15 16 17 18 19 20

    Page 2: Next at position 9    (1 ref away)
    Page 0: Next at position 11   (3 refs away)
    Page 3: Next at position 10   (2 refs away)

Decision: Replace page 0 (furthest future use at position 11)

After replacement: Memory = {2, 4, 3}
`}
      </pre>
    </div>

    {/* Handling Never-Used-Again Pages */}
    <h2 className="text-3xl font-bold mt-8">Handling Pages Never Used Again</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
When Multiple Pages Never Used Again:
─────────────────────────────────────────────────────────────

If a page will never be referenced again in the future,
it has effectively "infinite" distance to next use.

Example at position 4 (Requesting Page 2):
─────────────────────────────────────────────────────────────

Current memory: {7, 0, 1}
Remaining: 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1

    Page 7: Never appears again → distance = ∞
    Page 0: Next at position 5
    Page 1: Next at position 14

Decision: Replace page 7 (never used again = maximum distance)

─────────────────────────────────────────────────────────────

If MULTIPLE pages are never used again:
─────────────────────────────────────────────────────────────

    Choose any one (doesn't matter for fault count)
    Common implementations: choose first found or
    lowest page number for consistency

Example:
    Memory: {7, 8, 9}
    Remaining string doesn't contain 7, 8, or 9

    Any choice gives same number of page faults.
    May choose 7 (first in list) or 9 (last in list).
`}
      </pre>
    </div>

    {/* Algorithm Implementation */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Pseudocode for OPT:
─────────────────────────────────────────────────────────────

function OPT_PageReplacement(reference_string, num_frames):
    frames = []         // Current pages in memory
    page_faults = 0

    for i = 0 to length(reference_string) - 1:
        page = reference_string[i]

        if page in frames:
            continue    // Hit, no action needed

        page_faults++

        if length(frames) < num_frames:
            frames.append(page)
        else:
            // Find page to replace
            victim = find_optimal_victim(frames,
                                         reference_string,
                                         i + 1)
            replace(frames, victim, page)

    return page_faults

function find_optimal_victim(frames, reference_string, start_pos):
    furthest_use = -1
    victim = frames[0]

    for page in frames:
        // Find next occurrence of this page
        next_use = find_next_use(page, reference_string, start_pos)

        if next_use == -1:  // Never used again
            return page     // Perfect victim

        if next_use > furthest_use:
            furthest_use = next_use
            victim = page

    return victim

function find_next_use(page, reference_string, start_pos):
    for i = start_pos to length(reference_string) - 1:
        if reference_string[i] == page:
            return i
    return -1  // Not found (never used again)
`}
      </pre>
    </div>

    {/* No Belady's Anomaly */}
    <h2 className="text-3xl font-bold mt-8">OPT Does Not Have Belady's Anomaly</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Stack Algorithm Property:
─────────────────────────────────────────────────────────────

OPT is a "stack algorithm", meaning:
    The set of pages in memory with n frames is always
    a subset of pages in memory with n+1 frames

Why This Matters:
─────────────────────────────────────────────────────────────

    With n frames:   S_n = {pages in memory}
    With n+1 frames: S_{n+1} = {pages in memory}

    Property: S_n ⊆ S_{n+1}

    If a reference hits in S_n, it must also hit in S_{n+1}
    Therefore, more frames NEVER causes more page faults

Proof Intuition:
─────────────────────────────────────────────────────────────

    OPT keeps pages based on "furthest future use"
    Adding a frame means keeping one more page
    The extra page kept would be the one that would
    have been replaced next
    All "better" pages are still kept
    So no reference that was a hit becomes a fault
`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Performance Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Page Faults</th>
            <th className="p-3 border">Hit Ratio</th>
            <th className="p-3 border">Distance from OPT</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr className="bg-green-100 dark:bg-green-900">
            <td className="p-3 border font-bold">OPT</td>
            <td className="p-3 border">9</td>
            <td className="p-3 border">55%</td>
            <td className="p-3 border">0 (baseline)</td>
          </tr>
          <tr>
            <td className="p-3 border">LRU</td>
            <td className="p-3 border">12</td>
            <td className="p-3 border">40%</td>
            <td className="p-3 border">+3 faults (33% worse)</td>
          </tr>
          <tr>
            <td className="p-3 border">FIFO</td>
            <td className="p-3 border">15</td>
            <td className="p-3 border">25%</td>
            <td className="p-3 border">+6 faults (67% worse)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
      Reference String: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1 with 3 frames
    </p>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">Uses of OPT Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Since OPT Cannot Be Implemented (requires future knowledge):
─────────────────────────────────────────────────────────────

1. BENCHMARKING
   - Compare other algorithms against OPT
   - Measure how close LRU, FIFO, etc. come to optimal
   - "LRU has 12 faults, OPT has 9 → LRU is 33% worse than optimal"

2. ALGORITHM ANALYSIS
   - Understand theoretical limits
   - Know the best possible performance for a reference string
   - Validate correctness of other algorithms

3. OFFLINE ANALYSIS
   - When reference string is KNOWN in advance
   - Log analysis: "What would have been optimal for yesterday's workload?"
   - Helps tune system parameters

4. APPROXIMATION TARGET
   - Algorithms try to APPROXIMATE OPT
   - LRU approximates by assuming recent past predicts future
   - Working set assumes locality of reference

Approximating OPT:
─────────────────────────────────────────────────────────────

    OPT: Replace page used FURTHEST in FUTURE
         ↓ (can't know future)
    LRU: Replace page used FURTHEST in PAST
         (assuming past predicts future)

    This works well due to "temporal locality"
    - Pages used recently are likely to be used again soon
    - Pages not used recently are less likely to be used soon
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>OPT replaces the page that will not be used for the longest time in the future</li>
      <li>Produces minimum possible page faults for any given reference string</li>
      <li>Cannot be implemented in practice (requires knowledge of future)</li>
      <li>Used as a theoretical benchmark to evaluate other algorithms</li>
      <li>Does not suffer from Belady's Anomaly (stack algorithm)</li>
      <li>LRU approximates OPT by looking at past instead of future</li>
      <li>Useful for offline analysis when reference string is known</li>
      <li>Time complexity: O(n * f) where n is reference string length, f is frame count</li>
    </ul>
  </div>
);

export default OptimalReplacement;
