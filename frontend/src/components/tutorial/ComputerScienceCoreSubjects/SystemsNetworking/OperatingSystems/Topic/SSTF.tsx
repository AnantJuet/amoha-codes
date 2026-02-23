import React from 'react';

const SSTF: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SSTF (Shortest Seek Time First) Disk Scheduling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Shortest Seek Time First (SSTF) is a disk scheduling algorithm that selects the request with
      the minimum seek time from the current head position. It significantly reduces total head
      movement compared to FCFS but may cause starvation for some requests.
    </p>

    {/* How SSTF Works */}
    <h2 className="text-3xl font-bold mt-8">How SSTF Works</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Start from the current head position</li>
      <li>Calculate the distance to all pending requests</li>
      <li>Select the request with the shortest seek distance</li>
      <li>Move head to that request and service it</li>
      <li>Repeat until all requests are serviced</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
SSTF Selection Process:

Current Head Position: 53
Pending Requests: [98, 183, 37, 122, 14, 124, 65, 67]

Calculate distances:
  |98 - 53| = 45
  |183 - 53| = 130
  |37 - 53| = 16
  |122 - 53| = 69
  |14 - 53| = 39
  |124 - 53| = 71
  |65 - 53| = 12  ← Minimum!
  |67 - 53| = 14

Select: 65 (shortest distance = 12)
Move head: 53 → 65
`}
      </pre>
    </div>

    {/* Example with Calculation */}
    <h2 className="text-3xl font-bold mt-8">Complete Example with Calculation</h2>
    <p className="leading-relaxed">
      Using the same request queue as FCFS for comparison:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given:
- Request Queue: 98, 183, 37, 122, 14, 124, 65, 67
- Initial Head Position: 53
- Disk Track Range: 0 to 199
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Step-by-Step Selection:</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Current Head</th>
            <th className="p-3 border">Pending Requests</th>
            <th className="p-3 border">Distances</th>
            <th className="p-3 border">Selected</th>
            <th className="p-3 border">Movement</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">53</td>
            <td className="p-3 border">98,183,37,122,14,124,65,67</td>
            <td className="p-3 border">45,130,16,69,39,71,12,14</td>
            <td className="p-3 border">65</td>
            <td className="p-3 border">12</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">65</td>
            <td className="p-3 border">98,183,37,122,14,124,67</td>
            <td className="p-3 border">33,118,28,57,51,59,2</td>
            <td className="p-3 border">67</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">67</td>
            <td className="p-3 border">98,183,37,122,14,124</td>
            <td className="p-3 border">31,116,30,55,53,57</td>
            <td className="p-3 border">37</td>
            <td className="p-3 border">30</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">37</td>
            <td className="p-3 border">98,183,122,14,124</td>
            <td className="p-3 border">61,146,85,23,87</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">23</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">98,183,122,124</td>
            <td className="p-3 border">84,169,108,110</td>
            <td className="p-3 border">98</td>
            <td className="p-3 border">84</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">98</td>
            <td className="p-3 border">183,122,124</td>
            <td className="p-3 border">85,24,26</td>
            <td className="p-3 border">122</td>
            <td className="p-3 border">24</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">122</td>
            <td className="p-3 border">183,124</td>
            <td className="p-3 border">61,2</td>
            <td className="p-3 border">124</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">124</td>
            <td className="p-3 border">183</td>
            <td className="p-3 border">59</td>
            <td className="p-3 border">183</td>
            <td className="p-3 border">59</td>
          </tr>
          <tr className="bg-gray-200 font-bold">
            <td className="p-3 border" colSpan={5}>Total Head Movement</td>
            <td className="p-3 border">236</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Results:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Seek Sequence: 53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183

Total Head Movement = 12 + 2 + 30 + 23 + 84 + 24 + 2 + 59
                    = 236 tracks

Average Seek Length = 236 / 8 = 29.5 tracks per request

Comparison with FCFS:
- FCFS Total: 640 tracks
- SSTF Total: 236 tracks
- Improvement: 63% reduction in head movement!
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
                       │
                       Start (53)

SSTF Head Movement Pattern:

Step 1: 53 ──► 65          (12 tracks)
Step 2: 65 ─► 67           (2 tracks)
Step 3: 67 ◄────── 37      (30 tracks)
Step 4: 37 ◄── 14          (23 tracks)
Step 5: 14 ─────────────────────► 98    (84 tracks)
Step 6: 98 ──────► 122     (24 tracks)
Step 7: 122 ► 124          (2 tracks)
Step 8: 124 ────────────► 183   (59 tracks)

Total: 236 tracks

Notice: Head stays in local region before moving far
The 84-track jump from 14 to 98 is the largest single movement
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

SSTF Selection:

Step 1: Head at 50
        Distances: |82-50|=32, |170-50|=120, |43-50|=7,
                   |140-50|=90, |24-50|=26, |16-50|=34, |190-50|=140
        Select: 43 (distance 7)

Step 2: Head at 43
        Distances: |82-43|=39, |170-43|=127, |140-43|=97,
                   |24-43|=19, |16-43|=27, |190-43|=147
        Select: 24 (distance 19)

Step 3: Head at 24
        Distances: |82-24|=58, |170-24|=146, |140-24|=116,
                   |16-24|=8, |190-24|=166
        Select: 16 (distance 8)

Step 4: Head at 16
        Distances: |82-16|=66, |170-16|=154, |140-16|=124, |190-16|=174
        Select: 82 (distance 66)

Step 5: Head at 82
        Distances: |170-82|=88, |140-82|=58, |190-82|=108
        Select: 140 (distance 58)

Step 6: Head at 140
        Distances: |170-140|=30, |190-140|=50
        Select: 170 (distance 30)

Step 7: Head at 170
        Distances: |190-170|=20
        Select: 190 (distance 20)

Seek Sequence: 50 → 43 → 24 → 16 → 82 → 140 → 170 → 190

Total Head Movement = 7 + 19 + 8 + 66 + 58 + 30 + 20 = 208 tracks
Average Seek = 208 / 7 = 29.7 tracks

(Compare with FCFS: 642 tracks - 68% improvement!)
`}
      </pre>
    </div>

    {/* Starvation Problem */}
    <h2 className="text-3xl font-bold mt-8">Starvation Problem in SSTF</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Starvation Example:

Initial State:
- Head Position: 50
- Request Queue: [45, 55, 48, 52, 10, 190]

New requests keep arriving near track 50:

Time 0: Queue = [45, 55, 48, 52, 10, 190]
        Select: 48 (closest to 50)

Time 1: Queue = [45, 55, 52, 10, 190, 51]  ← New request 51 arrived
        Select: 51 (closest to 48)

Time 2: Queue = [45, 55, 52, 10, 190, 49]  ← New request 49 arrived
        Select: 49 (closest to 51)

Time 3: Queue = [45, 55, 52, 10, 190, 53]  ← New request 53 arrived
        Select: 52 (closest to 49)

...and so on

Requests 10 and 190 may NEVER be serviced!
They keep getting pushed back as closer requests arrive.

This is STARVATION - a serious problem with SSTF.

    0                    50                              199
    ├────────────────────┼───────────────────────────────┤
    │                    │                               │
    10             [45,48,49,51,52,53,55]               190
                        ↑
                  Head stays here
                  New requests cluster
                  Ends never get serviced
`}
      </pre>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Significantly better performance than FCFS</li>
      <li>Reduces total head movement substantially</li>
      <li>Increases disk throughput</li>
      <li>Good for systems with clustered requests</li>
      <li>Relatively simple to implement</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Starvation:</strong> Requests far from head may never be serviced</li>
      <li>Not optimal - greedy approach does not guarantee minimum total movement</li>
      <li>Overhead of calculating distances for each selection</li>
      <li>Unpredictable response time for individual requests</li>
      <li>High variance in waiting times</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">SSTF vs FCFS Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">FCFS</th>
            <th className="p-3 border">SSTF</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Selection Criteria</td>
            <td className="p-3 border">Arrival order</td>
            <td className="p-3 border">Shortest distance</td>
          </tr>
          <tr>
            <td className="p-3 border">Head Movement</td>
            <td className="p-3 border">High (random)</td>
            <td className="p-3 border">Low (optimized)</td>
          </tr>
          <tr>
            <td className="p-3 border">Starvation</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Simple (queue)</td>
            <td className="p-3 border">Moderate (distance calc)</td>
          </tr>
          <tr>
            <td className="p-3 border">Fairness</td>
            <td className="p-3 border">Fair</td>
            <td className="p-3 border">Unfair</td>
          </tr>
          <tr>
            <td className="p-3 border">Throughput</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>SSTF selects the request closest to current head position</li>
      <li>Dramatically reduces head movement compared to FCFS</li>
      <li>Uses greedy approach - locally optimal but not globally optimal</li>
      <li>May cause starvation for requests far from head</li>
      <li>Similar to SJF in CPU scheduling - short jobs favored</li>
      <li>Good throughput but poor fairness</li>
      <li>SCAN algorithm addresses the starvation problem</li>
    </ul>
  </div>
);

export default SSTF;
