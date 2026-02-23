import React from 'react';

const SCAN: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SCAN (Elevator) Disk Scheduling Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The SCAN algorithm, also known as the Elevator algorithm, moves the disk head in one direction
      servicing all requests until it reaches the end of the disk, then reverses direction and
      services requests going the other way. This behavior mimics an elevator moving up and down
      a building.
    </p>

    {/* How SCAN Works */}
    <h2 className="text-3xl font-bold mt-8">How SCAN Works</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Head starts moving in one direction (toward higher or lower tracks)</li>
      <li>Services all requests in the current direction of movement</li>
      <li>Continues until it reaches the end of the disk (track 0 or max track)</li>
      <li>Reverses direction at the disk boundary</li>
      <li>Services remaining requests in the new direction</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
SCAN Movement Pattern (Elevator Analogy):

    Floor/Track
    199 ┌──────────────────────────────┐
        │                     ↑        │
        │                     │        │
    150 │                     │        │
        │                     │        │
        │                     │        │
    100 │                     │        │
        │           ●──────►  │        │
        │           │         │        │
     50 │           │         │        │
        │           │         │        │
        │           │         │        │
      0 └───────────┴─────────┴────────┘
                    │         │
                 Reverse    Reverse
                 at 0       at 199

Like an elevator:
- Goes UP, picking up passengers along the way
- Reaches top floor
- Turns around and goes DOWN
- Picks up passengers going down
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
                   │
               Head Start
            Direction: →

Phase 1: Moving toward track 199 (ascending)
Requests in this direction (≥ 53): 65, 67, 98, 122, 124, 183

53 → 65 → 67 → 98 → 122 → 124 → 183 → 199
     (12)  (2)  (31)  (24)   (2)   (59)  (16)

Phase 2: Reverse at 199, move toward track 0 (descending)
Requests in this direction (< 53): 37, 14

199 → 37 → 14
     (162) (23)

Wait! After reaching 199, the head reverses.
But 37 and 14 are the only requests left, so we go from 199 to 37.

Complete Sequence:
53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 37 → 14
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
            <td className="p-3 border">Ascending</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">183</td>
            <td className="p-3 border">199</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">End of disk</td>
          </tr>
          <tr className="bg-yellow-100 dark:bg-yellow-900">
            <td className="p-3 border" colSpan={4}>Direction Reversal at track 199</td>
            <td className="p-3 border">Descending</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">199</td>
            <td className="p-3 border">37</td>
            <td className="p-3 border">162</td>
            <td className="p-3 border">Descending</td>
          </tr>
          <tr>
            <td className="p-3 border">9</td>
            <td className="p-3 border">37</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">23</td>
            <td className="p-3 border">Descending</td>
          </tr>
          <tr className="bg-gray-200 font-bold">
            <td className="p-3 border" colSpan={3}>Total Head Movement</td>
            <td className="p-3 border">331</td>
            <td className="p-3 border"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Results:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Seek Sequence: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 37 → 14

Total Head Movement = 12 + 2 + 31 + 24 + 2 + 59 + 16 + 162 + 23
                    = 331 tracks

Average Seek Length = 331 / 8 = 41.4 tracks per request

Note: Goes to 199 (end) even though last request in that direction is 183
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

SCAN Head Movement (Initial direction: toward 199)

Time
 │
 ▼
     ────────────────────────────────────────────────────► 199
     │     Start at 53
     │     └► 65 ─► 67 ────► 98 ────► 122 ► 124 ────► 183 ──► 199
     │                                                        │
     │                                                        │
     ◄────────────────────────────────────────────────────────┘
                                                     Reverse!
     │
     └────◄── 37 ◄── 14
            End

The pattern resembles an elevator:
- Ascends serving all floors in that direction
- Reaches top floor (199)
- Descends serving remaining floors
`}
      </pre>
    </div>

    {/* With Initial Direction Toward 0 */}
    <h2 className="text-3xl font-bold mt-8">Example: Initial Direction Toward Track 0</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Same requests but initial direction toward track 0:

Requests: 98, 183, 37, 122, 14, 124, 65, 67
Head Position: 53
Direction: Toward 0 (descending)

Phase 1: Moving toward 0 (descending)
Requests in this direction (≤ 53): 37, 14

53 → 37 → 14 → 0
     (16)  (23)  (14)

Phase 2: Reverse at 0, move toward 199 (ascending)
Requests (> 53): 65, 67, 98, 122, 124, 183

0 → 65 → 67 → 98 → 122 → 124 → 183
   (65)  (2)  (31)  (24)   (2)   (59)

Seek Sequence: 53 → 37 → 14 → 0 → 65 → 67 → 98 → 122 → 124 → 183

Total Movement = 16 + 23 + 14 + 65 + 2 + 31 + 24 + 2 + 59
               = 236 tracks

Note: Different total than going up first!
Initial direction affects performance.
`}
      </pre>
    </div>

    {/* Characteristics */}
    <h2 className="text-3xl font-bold mt-8">Characteristics of SCAN</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Bidirectional movement like an elevator</li>
      <li>Head travels to the end of disk before reversing</li>
      <li>Services requests in order along the path</li>
      <li>No starvation - every request is eventually serviced</li>
      <li>More uniform waiting time than SSTF</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>No starvation - all requests are eventually serviced</li>
      <li>Better than FCFS in terms of seek time</li>
      <li>High throughput</li>
      <li>Low variance in response time</li>
      <li>Simple and efficient</li>
      <li>Works well under heavy load</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Long wait for requests just missed by the head</li>
      <li>Unnecessary traversal to disk ends when no requests exist there</li>
      <li>Not as optimal as SSTF for total seek time</li>
      <li>Requests at disk ends may wait longer</li>
      <li>Cylinder 0 and max cylinder traversal even with no requests</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Comparison (Same Example)</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Total Movement</th>
            <th className="p-3 border">Starvation</th>
            <th className="p-3 border">Fairness</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">FCFS</td>
            <td className="p-3 border">640</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Fair</td>
          </tr>
          <tr>
            <td className="p-3 border">SSTF</td>
            <td className="p-3 border">236</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Unfair</td>
          </tr>
          <tr>
            <td className="p-3 border">SCAN (up first)</td>
            <td className="p-3 border">331</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Fair</td>
          </tr>
          <tr>
            <td className="p-3 border">SCAN (down first)</td>
            <td className="p-3 border">236</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Fair</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* SCAN vs LOOK */}
    <h2 className="text-3xl font-bold mt-8">Why SCAN Goes to Disk Ends</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
In our example:
- Last request going up: 183
- SCAN still goes to: 199

Why?
1. Original SCAN was designed for simplicity
2. Head always goes to physical disk boundaries
3. Predictable behavior for all requests

Problem:
Head travels 199 - 183 = 16 extra tracks for nothing!

Solution: LOOK Algorithm
- Only goes to the last request, not the disk end
- More efficient but slightly more complex
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>SCAN moves in one direction until reaching disk end, then reverses</li>
      <li>Also called Elevator algorithm due to similar behavior</li>
      <li>Eliminates starvation problem of SSTF</li>
      <li>Initial direction affects total head movement</li>
      <li>Goes to disk boundaries (0 and max) even without requests there</li>
      <li>LOOK algorithm improves by stopping at last request</li>
      <li>Widely used due to fairness and reasonable performance</li>
    </ul>
  </div>
);

export default SCAN;
