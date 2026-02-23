import React from 'react';

const IOScheduling: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      I/O Scheduling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      I/O scheduling is the method by which an operating system decides the order in which
      I/O requests are processed. Effective scheduling can significantly improve throughput
      and reduce latency, especially for mechanical devices like hard disk drives where
      seek time is a major performance factor.
    </p>

    {/* Why I/O Scheduling */}
    <h2 className="text-3xl font-bold mt-8">Why I/O Scheduling Matters</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Hard Disk Drive Access Components:

┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   Total Access Time = Seek Time + Rotational Latency + Transfer Time   │
│                                                                         │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │                                                                 │  │
│   │      Seek Time (3-10 ms)                                       │  │
│   │      • Time to move head to correct track                      │  │
│   │      • LARGEST component - TARGET OF OPTIMIZATION              │  │
│   │                                                                 │  │
│   │      ┌───────────────────────────────────────────────────┐     │  │
│   │      │     ◄───── Head Movement (Seek) ─────►            │     │  │
│   │      │                                                   │     │  │
│   │      │     Track 0    Track 50    Track 100              │     │  │
│   │      │        │          │           │                   │     │  │
│   │      │        ▼          ▼           ▼                   │     │  │
│   │      │      ═════      ═════       ═════                 │     │  │
│   │      │         ◄────────────────────►                    │     │  │
│   │      │              Disk Platters                        │     │  │
│   │      └───────────────────────────────────────────────────┘     │  │
│   │                                                                 │  │
│   │      Rotational Latency (~4 ms for 7200 RPM)                   │  │
│   │      • Time for sector to rotate under head                    │  │
│   │      • Average = half rotation                                 │  │
│   │                                                                 │  │
│   │      Transfer Time (~0.1 ms per sector)                        │  │
│   │      • Time to read/write data                                 │  │
│   │      • Usually negligible compared to seek                     │  │
│   │                                                                 │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│   I/O Scheduling Goal: Minimize total seek time by ordering requests   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Request Queue Example */}
    <h2 className="text-3xl font-bold mt-8">I/O Request Queue Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
I/O Request Queue (Cylinder/Track Numbers):

Current head position: 50
Request queue: 98, 183, 37, 122, 14, 124, 65, 67

Disk with 200 cylinders (0-199):

0    14   37  50  65 67    98     122 124         183       199
├────┼────┼───┼───┼──┼─────┼──────┼───┼───────────┼─────────┤
          ▲       ▲              ▲                ▲
         R3       R7             R4               R2
     ▲                      ▲    ▲
    R5                     R6   R8
                 ▲
                HEAD

Different scheduling algorithms will process these in different orders,
resulting in different total head movements!
`}
      </pre>
    </div>

    {/* FCFS Scheduling */}
    <h2 className="text-3xl font-bold mt-8">1. First-Come, First-Served (FCFS)</h2>
    <p className="leading-relaxed">
      Process requests in the order they arrive. Simple but can result in excessive
      head movement (the "wild swinging" problem).
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
FCFS Example:
Queue: 98, 183, 37, 122, 14, 124, 65, 67
Head starts at: 50

Order: 50 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67

0    14   37  50  65 67    98     122 124         183       199
├────┼────┼───┼───┼──┼─────┼──────┼───┼───────────┼─────────┤
                 │         │               │       │
                 └────────►│               │       │ (1) +48
                           └───────────────┼──────►│ (2) +85
              ┌────────────────────────────┘       │
              │◄───────────────────────────────────┘ (3) -146
              └────────────┬───────────────────────►  (4) +85
      ┌────────────────────┘
      │◄───────────────────────────────────────────  (5) -108
      └────────────────────────────────────────────►  (6) +110
                      ◄────────────────────────────  (7) -59
                        ─►                            (8) +2

Total head movement: 48 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 643 cylinders

Very inefficient! Head moves back and forth excessively.
`}
      </pre>
    </div>

    {/* SSTF Scheduling */}
    <h2 className="text-3xl font-bold mt-8">2. Shortest Seek Time First (SSTF)</h2>
    <p className="leading-relaxed">
      Select the request closest to the current head position. Reduces seek time but
      can cause starvation for distant requests.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
SSTF Example:
Queue: 98, 183, 37, 122, 14, 124, 65, 67
Head starts at: 50

Closest to 50? → 65 (distance 15)
Closest to 65? → 67 (distance 2)
Closest to 67? → 37 (distance 30)
Closest to 37? → 14 (distance 23)
Closest to 14? → 98 (distance 84)
Closest to 98? → 122 (distance 24)
Closest to 122? → 124 (distance 2)
Closest to 124? → 183 (distance 59)

Order: 50 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183

0    14   37  50  65 67    98     122 124         183       199
├────┼────┼───┼───┼──┼─────┼──────┼───┼───────────┼─────────┤
                 │   ▲  ▲
                 └──►└──┘  +15, +2
              ◄──────┘
           ◄──┘            -30, -23
              ─────────────────────────►  +84
                           ───►───►       +24, +2
                              ─────────────────────►  +59

Total head movement: 15 + 2 + 30 + 23 + 84 + 24 + 2 + 59 = 236 cylinders

Much better than FCFS! But requests at edges may starve.
`}
      </pre>
    </div>

    {/* SCAN Scheduling */}
    <h2 className="text-3xl font-bold mt-8">3. SCAN (Elevator Algorithm)</h2>
    <p className="leading-relaxed">
      Head moves in one direction, servicing all requests until it reaches the end,
      then reverses direction. Like an elevator in a building.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
SCAN Example:
Queue: 98, 183, 37, 122, 14, 124, 65, 67
Head starts at: 50, moving toward 0

Phase 1: Move toward 0, service requests on the way
50 → 37 → 14 → 0 (end)

Phase 2: Reverse, move toward 199, service remaining
0 → 65 → 67 → 98 → 122 → 124 → 183

Order: 50 → 37 → 14 → 0 → 65 → 67 → 98 → 122 → 124 → 183

0    14   37  50  65 67    98     122 124         183       199
├────┼────┼───┼───┼──┼─────┼──────┼───┼───────────┼─────────┤
│    ◄────◄───┘
◄────┘                     (Head reaches 0)
└────────────────────────────►──►──────────►───►────────────►

50 → 37:  13
37 → 14:  23
14 → 0:   14
0 → 65:   65
65 → 67:  2
67 → 98:  31
98 → 122: 24
122 → 124: 2
124 → 183: 59

Total head movement: 13 + 23 + 14 + 65 + 2 + 31 + 24 + 2 + 59 = 233 cylinders

Consistent, no starvation, predictable response time!
`}
      </pre>
    </div>

    {/* C-SCAN Scheduling */}
    <h2 className="text-3xl font-bold mt-8">4. C-SCAN (Circular SCAN)</h2>
    <p className="leading-relaxed">
      Like SCAN, but when reaching the end, immediately returns to the beginning
      without servicing requests on the return trip. Provides more uniform wait times.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
C-SCAN Example:
Queue: 98, 183, 37, 122, 14, 124, 65, 67
Head starts at: 50, moving toward 199

Phase 1: Move toward 199, service requests on the way
50 → 65 → 67 → 98 → 122 → 124 → 183 → 199 (end)

Phase 2: Jump to 0, continue toward 199, service remaining
0 → 14 → 37

Order: 50 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 0 → 14 → 37

0    14   37  50  65 67    98     122 124         183       199
├────┼────┼───┼───┼──┼─────┼──────┼───┼───────────┼─────────┤
                 └──►──►───────────►───►───────────────────►│
│◄───────────────────────────────────────────────────────────┘
└───►───►                   (Jump back to start, no service)

50 → 65:  15
65 → 67:  2
67 → 98:  31
98 → 122: 24
122 → 124: 2
124 → 183: 59
183 → 199: 16
199 → 0:  (jump, may not count as head movement or count as 199)
0 → 14:   14
14 → 37:  23

Total: 15 + 2 + 31 + 24 + 2 + 59 + 16 + 14 + 23 = 186 cylinders (excluding jump)

More uniform wait time than SCAN!
`}
      </pre>
    </div>

    {/* LOOK and C-LOOK */}
    <h2 className="text-3xl font-bold mt-8">5. LOOK and C-LOOK</h2>
    <p className="leading-relaxed">
      Similar to SCAN and C-SCAN, but the head only goes as far as the last request
      in each direction, not to the physical end of the disk.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
LOOK vs SCAN:

SCAN: Head always goes to physical end (0 or 199)
LOOK: Head only goes to last request in that direction

C-LOOK Example:
Queue: 98, 183, 37, 122, 14, 124, 65, 67
Head starts at: 50, moving toward 199

Order: 50 → 65 → 67 → 98 → 122 → 124 → 183 → (reverse at 183, not 199)
       → jump to 14 → 37

0    14   37  50  65 67    98     122 124         183       199
├────┼────┼───┼───┼──┼─────┼──────┼───┼───────────┼─────────┤
                 └──►──►───────────►───►───────────►│
 │◄──────────────────────────────────────────────────┘
 └───►───►                   (Only go to furthest request!)

50 → 65:  15
65 → 67:  2
67 → 98:  31
98 → 122: 24
122 → 124: 2
124 → 183: 59
183 → 14: (jump)
14 → 37:  23

Total: 15 + 2 + 31 + 24 + 2 + 59 + 23 = 156 cylinders

More efficient than SCAN/C-SCAN by not going to disk ends unnecessarily!
`}
      </pre>
    </div>

    {/* Algorithm Comparison */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Head Movement</th>
            <th className="p-3 border">Starvation</th>
            <th className="p-3 border">Variance</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">FCFS</td>
            <td className="p-3 border">Highest (643)</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Light load, fairness priority</td>
          </tr>
          <tr>
            <td className="p-3 border">SSTF</td>
            <td className="p-3 border">Low (236)</td>
            <td className="p-3 border">Yes (edges)</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Throughput priority</td>
          </tr>
          <tr>
            <td className="p-3 border">SCAN</td>
            <td className="p-3 border">Medium (233)</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">General purpose</td>
          </tr>
          <tr>
            <td className="p-3 border">C-SCAN</td>
            <td className="p-3 border">Medium (186)</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Lowest</td>
            <td className="p-3 border">Uniform wait time needed</td>
          </tr>
          <tr>
            <td className="p-3 border">LOOK</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Improved SCAN</td>
          </tr>
          <tr>
            <td className="p-3 border">C-LOOK</td>
            <td className="p-3 border">Lowest (156)</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Best for HDDs</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* SSD Note */}
    <h2 className="text-3xl font-bold mt-8">Note: SSDs and I/O Scheduling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
SSDs vs HDDs in I/O Scheduling:

┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   HDD (Hard Disk Drive):                                               │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │ • Mechanical head movement → Seek time matters!                 │  │
│   │ • I/O scheduling (SCAN, C-LOOK) significantly improves speed    │  │
│   │ • Random access is slow                                         │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│   SSD (Solid State Drive):                                             │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │ • No mechanical parts → No seek time!                           │  │
│   │ • Random access nearly as fast as sequential                    │  │
│   │ • I/O scheduling algorithms provide minimal benefit             │  │
│   │ • Simple FIFO or deadline schedulers often used                 │  │
│   │ • Focus shifts to: parallelism, write amplification, wear level │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│   Modern Linux I/O Schedulers:                                         │
│   • mq-deadline: Good for SSDs, low latency                           │
│   • bfq (Budget Fair Queueing): Good for interactive workloads        │
│   • none/noop: For NVMe SSDs with internal queuing                    │
│   • kyber: For fast devices (NVMe)                                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>I/O scheduling optimizes the order of disk requests to minimize seek time</li>
      <li>FCFS is simple but inefficient; SSTF reduces seeks but may cause starvation</li>
      <li>SCAN (elevator) and C-SCAN provide predictable, starvation-free scheduling</li>
      <li>LOOK and C-LOOK improve on SCAN by not going to disk ends unnecessarily</li>
      <li>C-LOOK generally provides the best performance for HDDs</li>
      <li>SSDs do not benefit much from traditional I/O scheduling (no seek time)</li>
      <li>Modern systems may use different schedulers for HDDs vs SSDs</li>
    </ul>
  </div>
);

export default IOScheduling;
