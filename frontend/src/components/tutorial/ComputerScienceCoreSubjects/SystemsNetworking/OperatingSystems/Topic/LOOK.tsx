import React from 'react';

const LOOK: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      LOOK Disk Scheduling Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      LOOK is an improved version of the SCAN algorithm. Instead of going all the way to the end
      of the disk, the head only goes as far as the last request in each direction before reversing.
      The algorithm "looks" ahead to see if there are more requests, hence the name.
    </p>

    {/* How LOOK Works */}
    <h2 className="text-3xl font-bold mt-8">How LOOK Works</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Head moves in one direction (toward higher or lower tracks)</li>
      <li>Services all requests in the current direction</li>
      <li>Stops at the last request in that direction (not the disk end)</li>
      <li>Reverses direction immediately</li>
      <li>Services requests in the new direction</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
LOOK vs SCAN Comparison:

SCAN:
0                                              199
├──────────────────────────────────────────────┤
│                                              │
│    ●─────────────────────────────────────►   │ Goes to 199
│                                          │   │
│    ◄─────────────────────────────────────┘   │ Returns

LOOK:
0                                              199
├──────────────────────────────────────────────┤
│                                              │
│    ●─────────────────────────►               │ Stops at last request
│                               │              │
│    ◄──────────────────────────┘              │ Reverses immediately

LOOK "looks ahead" to see if there are more requests.
If no more requests in that direction, it reverses.
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
- Initial Direction: Toward higher tracks (ascending)
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
                   │                         │
               Head Start              Last request
                                      going right (183)

Phase 1: Moving toward higher tracks (ascending)
Requests in this direction: 65, 67, 98, 122, 124, 183

53 → 65 → 67 → 98 → 122 → 124 → 183
     (12)  (2)  (31)  (24)   (2)   (59)

At 183: Look ahead - no more requests toward 199
        REVERSE immediately! (Don't go to 199)

Phase 2: Moving toward lower tracks (descending)
Requests in this direction: 37, 14

183 → 37 → 14
     (146) (23)

At 14: Look ahead - no more requests toward 0
       STOP! (Don't go to 0)

Complete Sequence:
53 → 65 → 67 → 98 → 122 → 124 → 183 → 37 → 14
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
            <th className="p-3 border">Direction</th>
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
            <td className="p-3 border" colSpan={4}>Direction Reversal (no trip to 199)</td>
            <td className="p-3 border">Descending</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">183</td>
            <td className="p-3 border">37</td>
            <td className="p-3 border">146</td>
            <td className="p-3 border">Descending</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">37</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">23</td>
            <td className="p-3 border">Last in direction</td>
          </tr>
          <tr className="bg-gray-200 font-bold">
            <td className="p-3 border" colSpan={3}>Total Head Movement</td>
            <td className="p-3 border">299</td>
            <td className="p-3 border"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Results:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Seek Sequence: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 37 → 14

Total Head Movement = 12 + 2 + 31 + 24 + 2 + 59 + 146 + 23
                    = 299 tracks

Average Seek Length = 299 / 8 = 37.4 tracks per request

Comparison with SCAN (same example):
- SCAN goes to 199:    331 tracks
- LOOK stops at 183:   299 tracks
- Savings:             32 tracks (9.7% improvement)
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

LOOK Head Movement:

Time
 │
 ▼
     Start at 53
     │
     └► 65 ─► 67 ────► 98 ────► 122 ► 124 ────► 183
                                                 │
     ┌───────────────────────────────────────────┘
     │        Reverse at 183 (not 199!)
     │
     ▼
     37 ◄─────────────────────────────────────────┘
     │
     └► 14
         │
       End (not at 0!)

Key Difference from SCAN:
- Does NOT go to 199 or 0
- Reverses at actual last request positions
- Saves 16 tracks going right + potential tracks going left
`}
      </pre>
    </div>

    {/* LOOK with Initial Direction Down */}
    <h2 className="text-3xl font-bold mt-8">Example: Initial Direction Toward Track 0</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Same requests with initial direction toward 0:

Phase 1: Moving toward 0 (descending)
Requests in this direction: 37, 14

53 → 37 → 14
     (16)  (23)

At 14: Look ahead - no more requests toward 0
       REVERSE! (Don't go to 0)

Phase 2: Moving toward 199 (ascending)
Requests: 65, 67, 98, 122, 124, 183

14 → 65 → 67 → 98 → 122 → 124 → 183
    (51)  (2)  (31)  (24)   (2)   (59)

At 183: Look ahead - no more requests toward 199
        STOP!

Seek Sequence: 53 → 37 → 14 → 65 → 67 → 98 → 122 → 124 → 183

Total Movement = 16 + 23 + 51 + 2 + 31 + 24 + 2 + 59
               = 208 tracks

Note: Going down first gives better result in this case!
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

LOOK Sequence:

Phase 1: 50 → 82 → 140 → 170 → 190
Movements: 32 + 58 + 30 + 20 = 140

At 190: Last request going right, REVERSE!

Phase 2: 190 → 43 → 24 → 16
Movements: 147 + 19 + 8 = 174

Seek Sequence: 50 → 82 → 140 → 170 → 190 → 43 → 24 → 16

Total Head Movement = 140 + 174 = 314 tracks
Average Seek = 314 / 7 = 44.9 tracks

Comparison:
- SCAN would go to 199 then 0: 199-50 + 199 = 348 more movement
- LOOK saves: 9 + some tracks on left side
`}
      </pre>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Better than SCAN - avoids unnecessary disk end traversal</li>
      <li>No starvation - all requests eventually serviced</li>
      <li>Good throughput</li>
      <li>Less total head movement than SCAN</li>
      <li>Fair service to all requests</li>
      <li>Practical and efficient</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Overhead of looking ahead for requests</li>
      <li>Slightly more complex than SCAN</li>
      <li>Requests near endpoints still may wait longer</li>
      <li>Not as optimal as SSTF in terms of total seek time</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Total Movement</th>
            <th className="p-3 border">Goes to Disk End</th>
            <th className="p-3 border">Starvation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">FCFS</td>
            <td className="p-3 border">640</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">SSTF</td>
            <td className="p-3 border">236</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">SCAN (up)</td>
            <td className="p-3 border">331</td>
            <td className="p-3 border">Yes (0 and 199)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr className="bg-green-100 dark:bg-green-900">
            <td className="p-3 border">LOOK (up)</td>
            <td className="p-3 border">299</td>
            <td className="p-3 border">No (stops at last request)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr className="bg-green-100 dark:bg-green-900">
            <td className="p-3 border">LOOK (down)</td>
            <td className="p-3 border">208</td>
            <td className="p-3 border">No (stops at last request)</td>
            <td className="p-3 border">No</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* SCAN vs LOOK */}
    <h2 className="text-3xl font-bold mt-8">SCAN vs LOOK Visualization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
                    Requests: 14, 37, 65, 67, 98, 122, 124, 183
                    Head Start: 53

SCAN (going up first):
0                                              199
├───┼───────┼──────┼───┼───────┼──────────┼─────┤
    14      37     53  65,67   98  122,124 183
                   │                        │    │
                   └────────────────────────┼────┘ Goes to 199!
                                           │    │
    ◄──────────────────────────────────────┘    │
    Goes to 0!

LOOK (going up first):
0                                              199
├───┼───────┼──────┼───┼───────┼──────────┼─────┤
    14      37     53  65,67   98  122,124 183
                   │                        │
                   └────────────────────────┤ Stops at 183!
                                            │
    ◄───────────────────────────────────────┘
    Stops at 14!

LOOK saves the trips from 183→199 and from 37→0
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>LOOK is an improvement over SCAN - "looks ahead" for requests</li>
      <li>Reverses direction at the last request, not at disk boundaries</li>
      <li>Reduces unnecessary head movement compared to SCAN</li>
      <li>No starvation - maintains SCAN's fairness property</li>
      <li>Also called "Look-ahead SCAN"</li>
      <li>More commonly used in practice than pure SCAN</li>
      <li>C-LOOK is the circular variant (like C-SCAN to SCAN)</li>
    </ul>
  </div>
);

export default LOOK;
