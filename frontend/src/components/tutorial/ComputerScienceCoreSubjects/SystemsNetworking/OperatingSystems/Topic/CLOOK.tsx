import React from 'react';

const CLOOK: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      C-LOOK (Circular LOOK) Disk Scheduling Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      C-LOOK (Circular LOOK) combines the benefits of both C-SCAN and LOOK algorithms. Like LOOK,
      it only goes as far as the last request in each direction. Like C-SCAN, it services requests
      in only one direction and jumps back to the first request rather than traversing the disk
      while returning.
    </p>

    {/* How C-LOOK Works */}
    <h2 className="text-3xl font-bold mt-8">How C-LOOK Works</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Head moves in one direction only (e.g., ascending)</li>
      <li>Services all requests in that direction</li>
      <li>Stops at the last request (not the disk end)</li>
      <li>Jumps directly to the first request (not to track 0)</li>
      <li>Continues servicing in the same direction</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
C-LOOK Movement Pattern:

C-SCAN (goes to disk boundaries):
0                                              199
├──────────────────────────────────────────────┤
│ Jump from 199 ─────────────────────────► 0   │
│                                              │

C-LOOK (stops at actual requests):
0         First                    Last        199
├─────────┼────────────────────────┼───────────┤
│         │                        │           │
│         │   Jump from Last ──► First         │
│         │◄────────────────────── │           │
│         │                        │           │

C-LOOK is more efficient:
- Does NOT go to disk boundaries (0 or 199)
- Jumps between actual request positions
- Minimal wasted movement
`}
      </pre>
    </div>

    {/* Example Calculation */}
    <h2 className="text-3xl font-bold mt-8">Example with Complete Calculation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given:
- Request Queue: 98, 183, 37, 122, 14, 124, 65, 67
- Initial Head Position: 53
- Disk Track Range: 0 to 199
- Direction: Toward higher tracks (ascending only)
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Step-by-Step Execution:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Track Layout:

0     14    37    53   65,67  98  122,124    183     199
├──────┼─────┼─────┼─────┼─────┼─────┼────────┼───────┤
       ↑          │                          ↑
    First         │                        Last
    Request   Head Start              in direction
    (going back)

Phase 1: Moving toward higher tracks (ascending)
Requests in this direction (≥ 53): 65, 67, 98, 122, 124, 183

53 → 65 → 67 → 98 → 122 → 124 → 183
     (12)  (2)  (31)  (24)   (2)   (59)

At 183: Last request in this direction
        JUMP to first request behind original position!
        (Jump to 14, NOT to 0)

Phase 2: Jump to first request and continue ascending
183 ═══════════════════════════════► 14 (jump)
First request (< 53): 14

14 → 37
    (23)

At 37: Last remaining request
       DONE!

Complete Sequence:
53 → 65 → 67 → 98 → 122 → 124 → 183 → [jump to 14] → 37
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Calculation Table:</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">From Track</th>
            <th className="p-3 border">To Track</th>
            <th className="p-3 border">Movement</th>
            <th className="p-3 border">Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">53</td>
            <td className="p-3 border">65</td>
            <td className="p-3 border">12</td>
            <td className="p-3 border">Ascending</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">65</td>
            <td className="p-3 border">67</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Ascending</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">67</td>
            <td className="p-3 border">98</td>
            <td className="p-3 border">31</td>
            <td className="p-3 border">Ascending</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">98</td>
            <td className="p-3 border">122</td>
            <td className="p-3 border">24</td>
            <td className="p-3 border">Ascending</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">122</td>
            <td className="p-3 border">124</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Ascending</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">124</td>
            <td className="p-3 border">183</td>
            <td className="p-3 border">59</td>
            <td className="p-3 border">Last in direction</td>
          </tr>
          <tr className="bg-yellow-100 dark:bg-yellow-900">
            <td className="p-3 border">7</td>
            <td className="p-3 border">183</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">169</td>
            <td className="p-3 border">Jump (to first request)</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">37</td>
            <td className="p-3 border">23</td>
            <td className="p-3 border">Ascending (same direction)</td>
          </tr>
          <tr className="bg-gray-200 font-bold">
            <td className="p-3 border" colSpan={3}>Total Head Movement</td>
            <td className="p-3 border">322</td>
            <td className="p-3 border"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Results:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Seek Sequence: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 14 → 37

Total Head Movement = 12 + 2 + 31 + 24 + 2 + 59 + 169 + 23
                    = 322 tracks

Average Seek Length = 322 / 8 = 40.25 tracks per request

Comparison with C-SCAN:
- C-SCAN: 53→199 + 199→0 + 0→37 = 146 + 199 + 37 = 382 tracks
- C-LOOK: 53→183 + 183→14 + 14→37 = 130 + 169 + 23 = 322 tracks
- Savings: 60 tracks (15.7% improvement)
`}
      </pre>
    </div>

    {/* Graphical Representation */}
    <h2 className="text-3xl font-bold mt-8">Graphical Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Track Number
0     20    40    60    80   100   120   140   160   180   199
├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
      │          │     │     │           │     │           │
      14         37    53    65,67       98    122,124     183

C-LOOK Head Movement:

Time
 │
 ▼
     Start at 53
     │
     └► 65 ─► 67 ────► 98 ────► 122 ► 124 ────► 183
                                                 │
     ┌───────────────────────────────────────────┘
     │        JUMP to 14 (first remaining request)
     │        (NOT to 0!)
     ▼
     14 ──────► 37
                │
              End

Key Features:
1. Does NOT go to disk boundaries
2. Jumps from last request (183) to first remaining (14)
3. Continues in SAME direction after jump
4. Most efficient variant of SCAN family
`}
      </pre>
    </div>

    {/* Comparison of All Variants */}
    <h2 className="text-3xl font-bold mt-8">Comparison: SCAN Family Algorithms</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Same requests: 98, 183, 37, 122, 14, 124, 65, 67
Head Start: 53, Direction: Up

SCAN:
53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 37 → 14
     └─────────── Goes to 199 ─────────┘    └ Returns

C-SCAN:
53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 0 → 14 → 37
     └─────────── Goes to 199 ─────────┘  └─ Jumps to 0 ─┘

LOOK:
53 → 65 → 67 → 98 → 122 → 124 → 183 → 37 → 14
     └────────── Stops at 183 ─────────┘ Returns

C-LOOK:
53 → 65 → 67 → 98 → 122 → 124 → 183 → 14 → 37
     └────────── Stops at 183 ─────────┘ └─ Jumps to 14

Movement Comparison:
┌───────────┬────────────┬─────────────────────────┐
│ Algorithm │ Total Move │ Improvement over C-SCAN │
├───────────┼────────────┼─────────────────────────┤
│ SCAN      │ 331        │ 13.4% better            │
│ C-SCAN    │ 382        │ baseline                │
│ LOOK      │ 299        │ 21.7% better            │
│ C-LOOK    │ 322        │ 15.7% better            │
└───────────┴────────────┴─────────────────────────┘
`}
      </pre>
    </div>

    {/* Another Example */}
    <h2 className="text-3xl font-bold mt-8">Another Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given:
- Request Queue: 82, 170, 43, 140, 24, 16, 190
- Initial Head Position: 50
- Disk Track Range: 0 to 199
- Direction: Ascending

Sorted requests:
- In current direction (≥ 50): 82, 140, 170, 190
- Behind head (< 50): 16, 24, 43

C-LOOK Sequence:

Phase 1: Service requests ≥ 50
50 → 82 → 140 → 170 → 190
Movements: 32 + 58 + 30 + 20 = 140

At 190: Last request in direction, JUMP to first remaining

Phase 2: Jump and continue
190 → 16 (jump to first remaining request)
Movement: 174

16 → 24 → 43
Movements: 8 + 19 = 27

Seek Sequence: 50 → 82 → 140 → 170 → 190 → 16 → 24 → 43

Total Head Movement = 140 + 174 + 27 = 341 tracks

Compare with C-SCAN:
C-SCAN: 50→199 + 199→0 + 0→43 = 149 + 199 + 43 = 391 tracks
C-LOOK: 50→190 + 190→16 + 16→43 = 140 + 174 + 27 = 341 tracks
Savings: 50 tracks (12.8% improvement)
`}
      </pre>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Best of both LOOK and C-SCAN</li>
      <li>No unnecessary travel to disk boundaries</li>
      <li>Shorter jump distance than C-SCAN</li>
      <li>More uniform wait time (like C-SCAN)</li>
      <li>No starvation</li>
      <li>Very efficient in practice</li>
      <li>Commonly used in real operating systems</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Slightly more complex to implement</li>
      <li>Must track first and last request in queue</li>
      <li>Still not optimal (greedy algorithms like SSTF may be better)</li>
      <li>Overhead of looking ahead</li>
    </ul>

    {/* Complete Algorithm Comparison */}
    <h2 className="text-3xl font-bold mt-8">Complete Algorithm Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Movement</th>
            <th className="p-3 border">Direction</th>
            <th className="p-3 border">Boundaries</th>
            <th className="p-3 border">Starvation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">FCFS</td>
            <td className="p-3 border">640</td>
            <td className="p-3 border">Random</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">SSTF</td>
            <td className="p-3 border">236</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">SCAN</td>
            <td className="p-3 border">331</td>
            <td className="p-3 border">Bidirectional</td>
            <td className="p-3 border">0 and 199</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">C-SCAN</td>
            <td className="p-3 border">382</td>
            <td className="p-3 border">Unidirectional</td>
            <td className="p-3 border">0 and 199</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">LOOK</td>
            <td className="p-3 border">299</td>
            <td className="p-3 border">Bidirectional</td>
            <td className="p-3 border">Last requests</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr className="bg-green-100 dark:bg-green-900">
            <td className="p-3 border">C-LOOK</td>
            <td className="p-3 border">322</td>
            <td className="p-3 border">Unidirectional</td>
            <td className="p-3 border">Last/First requests</td>
            <td className="p-3 border">No</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>C-LOOK combines benefits of C-SCAN and LOOK</li>
      <li>Services requests in one direction only</li>
      <li>Stops at last request, not disk boundary</li>
      <li>Jumps to first remaining request, not track 0</li>
      <li>More efficient than C-SCAN in both directions</li>
      <li>Provides uniform wait time without starvation</li>
      <li>Commonly used in practice due to efficiency</li>
      <li>Best practical choice for most workloads</li>
    </ul>
  </div>
);

export default CLOOK;
