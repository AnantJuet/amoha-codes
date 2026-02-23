import React from 'react';

const CSCAN: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      C-SCAN (Circular SCAN) Disk Scheduling Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      C-SCAN (Circular SCAN) is a variant of the SCAN algorithm that provides more uniform wait times.
      Instead of reversing direction at the disk ends, C-SCAN returns to the beginning of the disk
      without servicing any requests, treating the disk as a circular structure.
    </p>

    {/* How C-SCAN Works */}
    <h2 className="text-3xl font-bold mt-8">How C-SCAN Works</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Head moves in one direction only (e.g., toward higher tracks)</li>
      <li>Services all requests in that direction</li>
      <li>When it reaches the end of the disk, it jumps back to the beginning</li>
      <li>The return journey does not service any requests</li>
      <li>Continues servicing from the beginning in the same direction</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
C-SCAN Movement Pattern (Circular):

Think of the disk as a circular track:

        199 ───► 0
           ╲    ╱
            ╲  ╱ (Jump - no service)
             ╲╱

    0                                             199
    ├──────────────────────────────────────────────┤
    │                                              │
    │    ●──────────────────────────────────────►  │
    │    │                                      │  │
    │    │                                      │  │
    │    └──────────────────────────────────────┘  │
    │              Jump back (no service)          │
    │                                              │
    │    ●──────────────────────────────►          │
    │                                              │
    └──────────────────────────────────────────────┘

Only services requests in ONE direction!
After reaching 199, jumps to 0 without servicing.
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
                   │
               Head Start
            Direction: → (ascending only)

Phase 1: Moving toward track 199
Requests in path (≥ 53): 65, 67, 98, 122, 124, 183

53 → 65 → 67 → 98 → 122 → 124 → 183 → 199

Phase 2: Jump from 199 to 0 (no servicing)

199 ═══════════════════════════════► 0  (jump, not counted as seek)

Phase 3: Continue from 0 toward remaining requests
Requests in path (< 53): 14, 37

0 → 14 → 37

Complete Sequence:
53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → [jump to 0] → 14 → 37
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
            <td className="p-3 border">Ascending</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">183</td>
            <td className="p-3 border">199</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">Reach end</td>
          </tr>
          <tr className="bg-yellow-100 dark:bg-yellow-900">
            <td className="p-3 border">8</td>
            <td className="p-3 border">199</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">199</td>
            <td className="p-3 border">Jump (no service)</td>
          </tr>
          <tr>
            <td className="p-3 border">9</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">Ascending</td>
          </tr>
          <tr>
            <td className="p-3 border">10</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">37</td>
            <td className="p-3 border">23</td>
            <td className="p-3 border">Ascending</td>
          </tr>
          <tr className="bg-gray-200 font-bold">
            <td className="p-3 border" colSpan={3}>Total Head Movement</td>
            <td className="p-3 border">382</td>
            <td className="p-3 border"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Results:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Seek Sequence: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 0 → 14 → 37

Total Head Movement = 12 + 2 + 31 + 24 + 2 + 59 + 16 + 199 + 14 + 23
                    = 382 tracks

Average Seek Length = 382 / 8 = 47.75 tracks per request

Note: The jump from 199 to 0 (199 tracks) IS counted in total movement
      even though no requests are serviced during the jump.
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

C-SCAN Head Movement:

Time
 │
 ▼
     Start at 53
     │
     └► 65 ─► 67 ────► 98 ────► 122 ► 124 ────► 183 ──► 199
                                                          │
     ┌────────────────────────────────────────────────────┘
     │                  JUMP TO 0
     │                  (No requests serviced)
     ▼
     0 ──► 14 ──────► 37
                      │
                    End

Key Differences from SCAN:
1. Only moves in ONE direction (ascending)
2. Jumps from end (199) to beginning (0)
3. Does not service requests during return
4. More uniform wait time for all requests
`}
      </pre>
    </div>

    {/* Why C-SCAN is Fairer */}
    <h2 className="text-3xl font-bold mt-8">Why C-SCAN Provides More Uniform Wait Time</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Problem with SCAN:

    0                    100                          199
    ├────────────────────┼────────────────────────────┤
                         ↑
                    Head moving →

    Request at track 5:  Head will service on return sweep
    Request at track 195: Head will service very soon

    Track 195 gets better service than track 5!

    When head is at 100 going right:
    - Track 195 wait: ~95 tracks travel
    - Track 5 wait: 99 tracks + return 194 tracks = 293 tracks travel

C-SCAN Solution:

    0                    100                          199
    ├────────────────────┼────────────────────────────┤
                         ↑
                    Head moving →

    All requests wait for at most ONE sweep of the disk

    Track 195: ~95 tracks
    Track 5:   99 tracks + jump + 5 tracks = ~304 but PREDICTABLE

    Wait time is more UNIFORM across all tracks
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

Requests sorted:
- In current direction (≥ 50): 82, 140, 170, 190
- Behind head (< 50): 16, 24, 43

C-SCAN Sequence:

Phase 1: 50 → 82 → 140 → 170 → 190 → 199
Movements: 32 + 58 + 30 + 20 + 9 = 149

Phase 2: 199 → 0 (jump)
Movement: 199

Phase 3: 0 → 16 → 24 → 43
Movements: 16 + 8 + 19 = 43

Seek Sequence: 50 → 82 → 140 → 170 → 190 → 199 → 0 → 16 → 24 → 43

Total Head Movement = 149 + 199 + 43 = 391 tracks
Average Seek = 391 / 7 = 55.9 tracks
`}
      </pre>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>More uniform waiting time compared to SCAN</li>
      <li>No starvation - every request eventually serviced</li>
      <li>Reduced variance in response times</li>
      <li>Better for time-critical systems</li>
      <li>Predictable behavior</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Higher total head movement than SCAN (due to jump)</li>
      <li>Wasted movement during the return journey</li>
      <li>Still goes to disk ends unnecessarily</li>
      <li>More complex than SCAN</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">SCAN vs C-SCAN Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">SCAN</th>
            <th className="p-3 border">C-SCAN</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Direction</td>
            <td className="p-3 border">Bidirectional</td>
            <td className="p-3 border">Unidirectional</td>
          </tr>
          <tr>
            <td className="p-3 border">At disk end</td>
            <td className="p-3 border">Reverses direction</td>
            <td className="p-3 border">Jumps to start</td>
          </tr>
          <tr>
            <td className="p-3 border">Return journey</td>
            <td className="p-3 border">Services requests</td>
            <td className="p-3 border">No service (jump)</td>
          </tr>
          <tr>
            <td className="p-3 border">Total movement</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">Wait time uniformity</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">More uniform</td>
          </tr>
          <tr>
            <td className="p-3 border">Starvation</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>C-SCAN moves in one direction only, treating disk as circular</li>
      <li>Jumps from end to beginning without servicing requests</li>
      <li>Provides more uniform waiting time than SCAN</li>
      <li>Total head movement is higher than SCAN due to the jump</li>
      <li>Still goes to disk boundaries (improved by C-LOOK)</li>
      <li>Better for systems requiring predictable response times</li>
      <li>Trades efficiency for fairness</li>
    </ul>
  </div>
);

export default CSCAN;
