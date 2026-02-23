import React from 'react';

const FCFSDisk: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      FCFS Disk Scheduling Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      First Come First Serve (FCFS) is the simplest disk scheduling algorithm. It processes disk I/O
      requests in the exact order they arrive in the queue, without any reordering or optimization.
      While easy to implement, it often results in high seek times.
    </p>

    {/* How FCFS Works */}
    <h2 className="text-3xl font-bold mt-8">How FCFS Disk Scheduling Works</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Requests are placed in a queue in their arrival order</li>
      <li>The disk head services the first request in the queue</li>
      <li>After completing a request, it moves to the next in queue</li>
      <li>Process continues until all requests are serviced</li>
      <li>No attempt is made to optimize head movement</li>
    </ul>

    {/* Visualization */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Visualization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
FCFS Processing:

Request Queue (arrival order): [98, 183, 37, 122, 14, 124, 65, 67]
Initial Head Position: 53

Step-by-step head movement:

    0        50       100      150      199
    ├────────┼────────┼────────┼────────┤

    Start:  Head at 53
            53 ─────────────────► 98     (Move: +45)

    Step 1: 98 ──────────────────────────► 183   (Move: +85)

    Step 2: 183 ◄─────────────────────────────────── 37   (Move: -146)

    Step 3: 37 ────────────────────► 122  (Move: +85)

    Step 4: 122 ◄───────────────────────────── 14    (Move: -108)

    Step 5: 14 ────────────────────────► 124  (Move: +110)

    Step 6: 124 ◄───────────── 65         (Move: -59)

    Step 7: 65 ─► 67                      (Move: +2)

    Final:  Head at 67
`}
      </pre>
    </div>

    {/* Example Calculation */}
    <h2 className="text-3xl font-bold mt-8">Example with Complete Calculation</h2>
    <p className="leading-relaxed">
      Given the following disk request queue and initial head position, calculate the total head
      movement using FCFS scheduling.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given:
- Request Queue (in order): 98, 183, 37, 122, 14, 124, 65, 67
- Initial Head Position: 53
- Disk Track Range: 0 to 199
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Service Sequence:</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">From Track</th>
            <th className="p-3 border">To Track</th>
            <th className="p-3 border">Head Movement</th>
            <th className="p-3 border">Calculation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">53</td>
            <td className="p-3 border">98</td>
            <td className="p-3 border">45</td>
            <td className="p-3 border">|98 - 53| = 45</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">98</td>
            <td className="p-3 border">183</td>
            <td className="p-3 border">85</td>
            <td className="p-3 border">|183 - 98| = 85</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">183</td>
            <td className="p-3 border">37</td>
            <td className="p-3 border">146</td>
            <td className="p-3 border">|37 - 183| = 146</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">37</td>
            <td className="p-3 border">122</td>
            <td className="p-3 border">85</td>
            <td className="p-3 border">|122 - 37| = 85</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">122</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">108</td>
            <td className="p-3 border">|14 - 122| = 108</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">124</td>
            <td className="p-3 border">110</td>
            <td className="p-3 border">|124 - 14| = 110</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">124</td>
            <td className="p-3 border">65</td>
            <td className="p-3 border">59</td>
            <td className="p-3 border">|65 - 124| = 59</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">65</td>
            <td className="p-3 border">67</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">|67 - 65| = 2</td>
          </tr>
          <tr className="bg-gray-200 font-bold">
            <td className="p-3 border" colSpan={3}>Total Head Movement</td>
            <td className="p-3 border">640</td>
            <td className="p-3 border">45+85+146+85+108+110+59+2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Results:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Seek Sequence: 53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67

Total Head Movement = 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2
                    = 640 tracks

Average Seek Length = Total Movement / Number of Requests
                    = 640 / 8
                    = 80 tracks per request
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
      │          │     │     │           │     │           │
      14         37    53    65,67       98    122,124     183
                       │
                       │ Start (53)
                       │
  ┌────────────────────┘
  │
  │    FCFS Head Movement Pattern:
  │
  │    53 ─────────────────────────────────► 98
  │                                          │
  │    ┌─────────────────────────────────────┘
  │    │
  │    └───────────────────────────────────────────► 183
  │                                                   │
  │    ◄──────────────────────────────────────────────┘
  │    │
  │    37 ◄────────────────────────────────────────────┘
  │    │
  │    └────────────────────────────────────► 122
  │                                           │
  │    ◄──────────────────────────────────────┘
  │    │
  │    14 ◄────────────────────────────────────┘
  │    │
  │    └────────────────────────────────────► 124
  │                                           │
  │    ◄──────────────────────────────────────┘
  │    65 ◄────────────────────────────────────┘
  │    │
  │    └► 67
  │
  └─── Notice the zigzag pattern - very inefficient!
`}
      </pre>
    </div>

    {/* Second Example */}
    <h2 className="text-3xl font-bold mt-8">Another Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given:
- Request Queue: 82, 170, 43, 140, 24, 16, 190
- Initial Head Position: 50
- Disk Track Range: 0 to 199

Calculation:

Step    From    To      Movement
1       50      82      |82-50| = 32
2       82      170     |170-82| = 88
3       170     43      |43-170| = 127
4       43      140     |140-43| = 97
5       140     24      |24-140| = 116
6       24      16      |16-24| = 8
7       16      190     |190-16| = 174

Seek Sequence: 50 → 82 → 170 → 43 → 140 → 24 → 16 → 190

Total Head Movement = 32 + 88 + 127 + 97 + 116 + 8 + 174
                    = 642 tracks

Average Seek Length = 642 / 7 = 91.7 tracks
`}
      </pre>
    </div>

    {/* Characteristics */}
    <h2 className="text-3xl font-bold mt-8">Characteristics of FCFS Disk Scheduling</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Non-optimizing:</strong> Does not attempt to minimize head movement</li>
      <li><strong>Fair:</strong> All requests are treated equally based on arrival time</li>
      <li><strong>No starvation:</strong> Every request will eventually be serviced</li>
      <li><strong>Simple:</strong> Easy to understand and implement</li>
      <li><strong>Deterministic:</strong> Same input always produces same result</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Extremely simple to implement - just a queue</li>
      <li>Fair scheduling - no request is favored over another</li>
      <li>No starvation - every request gets processed</li>
      <li>No complex calculations or data structures needed</li>
      <li>Predictable behavior</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>High total head movement (poor performance)</li>
      <li>Long average seek time</li>
      <li>Wild swings of the head across the disk (zigzag pattern)</li>
      <li>Does not take advantage of locality</li>
      <li>Poor throughput compared to other algorithms</li>
      <li>Not suitable for heavy-load systems</li>
    </ul>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">FCFS vs Other Algorithms (Same Example)</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Total Head Movement</th>
            <th className="p-3 border">Relative Performance</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">FCFS</td>
            <td className="p-3 border">640 tracks</td>
            <td className="p-3 border">Baseline (worst)</td>
          </tr>
          <tr>
            <td className="p-3 border">SSTF</td>
            <td className="p-3 border">~236 tracks</td>
            <td className="p-3 border">63% better</td>
          </tr>
          <tr>
            <td className="p-3 border">SCAN</td>
            <td className="p-3 border">~208 tracks</td>
            <td className="p-3 border">68% better</td>
          </tr>
          <tr>
            <td className="p-3 border">C-SCAN</td>
            <td className="p-3 border">~382 tracks</td>
            <td className="p-3 border">40% better</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* When to Use */}
    <h2 className="text-3xl font-bold mt-8">When to Use FCFS</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Systems with very light I/O load</li>
      <li>When simplicity is more important than performance</li>
      <li>Single-user systems with minimal disk requests</li>
      <li>When request ordering must be preserved (rare)</li>
      <li>Educational purposes to understand baseline performance</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>FCFS processes requests in arrival order - no optimization</li>
      <li>Results in high seek times due to random head movement</li>
      <li>Fair and starvation-free but very inefficient</li>
      <li>Total head movement calculated as sum of |current - next|</li>
      <li>Serves as baseline for comparing other algorithms</li>
      <li>Rarely used in practice for disk scheduling</li>
    </ul>
  </div>
);

export default FCFSDisk;
