import React from 'react';

const DiskSchedulingIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Disk Scheduling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Disk scheduling is the process of determining the order in which disk I/O requests are serviced.
      Since disk access is significantly slower than memory access, efficient scheduling can dramatically
      improve system performance by minimizing the time spent moving the disk head.
    </p>

    {/* Why Disk Scheduling */}
    <h2 className="text-3xl font-bold mt-8">Why Disk Scheduling is Important</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Mechanical Delay:</strong> Disk access involves physical head movement, which is orders
        of magnitude slower than electronic operations.
      </li>
      <li>
        <strong>Multiple Requests:</strong> Multiple processes may have pending I/O requests simultaneously.
      </li>
      <li>
        <strong>Throughput:</strong> Good scheduling increases the number of requests serviced per unit time.
      </li>
      <li>
        <strong>Response Time:</strong> Reduces average waiting time for I/O requests.
      </li>
    </ul>

    {/* Disk Access Time Components */}
    <h2 className="text-3xl font-bold mt-8">Components of Disk Access Time</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Total Disk Access Time = Seek Time + Rotational Latency + Transfer Time

Timeline of Disk Access:
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ◄────── Seek Time ──────►◄── Rotational ──►◄─ Transfer ─►         │
│                               Latency          Time                 │
│  ├──────────────────────────┼───────────────┼─────────────┤         │
│  │                          │               │             │         │
│  Request    Head reaches    Sector under    Data          Done      │
│  Issued     target track    head            transferred             │
│                                                                     │
│  ~3-15 ms                   ~2-6 ms         < 1 ms                  │
│  (LONGEST)                  (MODERATE)      (SHORTEST)              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Seek Time */}
    <h2 className="text-3xl font-bold mt-8">Seek Time</h2>
    <p className="leading-relaxed">
      Seek time is the time required for the disk arm to move the read/write head to the desired track
      (cylinder). This is typically the largest component of disk access time.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Head Movement:

    Track 0     Track 50    Track 100   Track 150   Track 199
    │           │           │           │           │
    ▼           ▼           ▼           ▼           ▼
    ├───────────┼───────────┼───────────┼───────────┤
                            │
                         Current
                         Position
                            │
    ◄───────────────────────┤───────────────────────►
         Seek to Track 0         Seek to Track 199
         (100 tracks)            (99 tracks)

Seek Time Factors:
- Distance to travel (number of tracks)
- Acceleration/deceleration of arm
- Settling time for precise positioning

Seek Time = a + b × distance
where:
  a = fixed overhead (arm startup)
  b = time per track
`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Seek Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Typical Time</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Minimum Seek</td>
            <td className="p-3 border">Adjacent track</td>
            <td className="p-3 border">~1 ms</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Seek</td>
            <td className="p-3 border">1/3 of total tracks</td>
            <td className="p-3 border">~8-10 ms</td>
          </tr>
          <tr>
            <td className="p-3 border">Maximum Seek</td>
            <td className="p-3 border">Full stroke (end to end)</td>
            <td className="p-3 border">~15-20 ms</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Rotational Latency */}
    <h2 className="text-3xl font-bold mt-8">Rotational Latency</h2>
    <p className="leading-relaxed">
      Rotational latency is the time waiting for the desired sector to rotate under the read/write head
      after the head has reached the correct track.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Rotational Latency Visualization:

    Current Position of Head (fixed after seek)
                    │
                    ▼
        ┌───────────────────────┐
       ╱    Sector 5    Sector 6 ╲
      │                           │
     │  Sector 4        ↻         │ Sector 7
      │         Rotation          │
       ╲    Sector 3    Sector 2 ╱
        └───────────────────────┘
                    ↑
              Target: Sector 2

    Head is at Sector 5, needs Sector 2
    Must wait for disk to rotate ~270°

Rotational Latency Calculation:

    Full Rotation Time = 60 / RPM seconds

    For 7200 RPM disk:
    Full rotation = 60 / 7200 = 0.00833 s = 8.33 ms

    Average Rotational Latency = Full Rotation / 2
                               = 8.33 / 2 = 4.17 ms

    (Average because sector could be anywhere from 0° to 360° away)
`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Disk Speed (RPM)</th>
            <th className="p-3 border">Full Rotation</th>
            <th className="p-3 border">Avg. Rotational Latency</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">5400 RPM</td>
            <td className="p-3 border">11.11 ms</td>
            <td className="p-3 border">5.56 ms</td>
          </tr>
          <tr>
            <td className="p-3 border">7200 RPM</td>
            <td className="p-3 border">8.33 ms</td>
            <td className="p-3 border">4.17 ms</td>
          </tr>
          <tr>
            <td className="p-3 border">10000 RPM</td>
            <td className="p-3 border">6.00 ms</td>
            <td className="p-3 border">3.00 ms</td>
          </tr>
          <tr>
            <td className="p-3 border">15000 RPM</td>
            <td className="p-3 border">4.00 ms</td>
            <td className="p-3 border">2.00 ms</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Transfer Time */}
    <h2 className="text-3xl font-bold mt-8">Transfer Time</h2>
    <p className="leading-relaxed">
      Transfer time is the time to read or write the data once the head is positioned correctly.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Transfer Time Calculation:

Transfer Time = (Bytes to Transfer) / (Transfer Rate)

Where Transfer Rate depends on:
- Disk rotation speed
- Recording density
- Interface speed (SATA, SAS, etc.)

Example:
- Transfer 4 KB sector
- Disk: 7200 RPM, 500 sectors per track
- Bytes per track = 500 × 512 = 256 KB

Time for full track = 60 / 7200 = 8.33 ms
Transfer rate = 256 KB / 8.33 ms = 30.7 MB/s

Transfer time for 4 KB = 4 KB / 30.7 MB/s ≈ 0.13 ms

Transfer time is usually negligible compared to seek and rotational latency.
`}
      </pre>
    </div>

    {/* Disk Scheduling Goals */}
    <h2 className="text-3xl font-bold mt-8">Goals of Disk Scheduling</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Minimize Seek Time:</strong> The primary goal since seek time dominates disk access.
      </li>
      <li>
        <strong>Maximize Throughput:</strong> Service as many requests as possible per unit time.
      </li>
      <li>
        <strong>Minimize Response Time:</strong> Reduce the average time a request waits to be serviced.
      </li>
      <li>
        <strong>Avoid Starvation:</strong> Ensure all requests are eventually serviced.
      </li>
      <li>
        <strong>Fairness:</strong> Give reasonable service to all processes.
      </li>
    </ul>

    {/* Disk Request Queue */}
    <h2 className="text-3xl font-bold mt-8">Disk Request Queue</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Disk Request Queue Example:

    Current Head Position: Track 53

    Request Queue (Track Numbers):
    ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
    │  98 │ 183 │  37 │ 122 │  14 │ 124 │  65 │  67 │
    └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
      ▲
      First request in queue

    Disk Track Range: 0 to 199

    The scheduler must decide the order to service these requests
    to minimize total head movement.

                    0                                           199
    Track Number:   ├───────────────────────────────────────────┤
                    │     │          │    │  │    │  │        │ │
    Requests:       14    37        53    65 67   98 122 124  183
                                     ↑
                               Current Head
`}
      </pre>
    </div>

    {/* Scheduling Metrics */}
    <h2 className="text-3xl font-bold mt-8">Scheduling Performance Metrics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Metric</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">How to Calculate</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Total Head Movement</td>
            <td className="p-3 border">Sum of all track-to-track movements</td>
            <td className="p-3 border">Sum of |next - current| for all requests</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Seek Length</td>
            <td className="p-3 border">Average tracks moved per request</td>
            <td className="p-3 border">Total movement / Number of requests</td>
          </tr>
          <tr>
            <td className="p-3 border">Throughput</td>
            <td className="p-3 border">Requests serviced per second</td>
            <td className="p-3 border">Number of requests / Total time</td>
          </tr>
          <tr>
            <td className="p-3 border">Response Time</td>
            <td className="p-3 border">Time from request to completion</td>
            <td className="p-3 border">Wait time + Service time</td>
          </tr>
          <tr>
            <td className="p-3 border">Variance</td>
            <td className="p-3 border">Predictability of service</td>
            <td className="p-3 border">Spread of response times</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Overview of Scheduling Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Overview of Disk Scheduling Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Full Name</th>
            <th className="p-3 border">Basic Approach</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">FCFS</td>
            <td className="p-3 border">First Come First Serve</td>
            <td className="p-3 border">Service in arrival order</td>
          </tr>
          <tr>
            <td className="p-3 border">SSTF</td>
            <td className="p-3 border">Shortest Seek Time First</td>
            <td className="p-3 border">Service nearest request</td>
          </tr>
          <tr>
            <td className="p-3 border">SCAN</td>
            <td className="p-3 border">Elevator Algorithm</td>
            <td className="p-3 border">Move in one direction, then reverse</td>
          </tr>
          <tr>
            <td className="p-3 border">C-SCAN</td>
            <td className="p-3 border">Circular SCAN</td>
            <td className="p-3 border">One direction only, jump to start</td>
          </tr>
          <tr>
            <td className="p-3 border">LOOK</td>
            <td className="p-3 border">LOOK Algorithm</td>
            <td className="p-3 border">Like SCAN but reverse at last request</td>
          </tr>
          <tr>
            <td className="p-3 border">C-LOOK</td>
            <td className="p-3 border">Circular LOOK</td>
            <td className="p-3 border">Like C-SCAN but jump at last request</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Algorithm Selection */}
    <h2 className="text-3xl font-bold mt-8">Choosing a Disk Scheduling Algorithm</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>FCFS is simple but offers poor performance</li>
      <li>SSTF gives good throughput but may cause starvation</li>
      <li>SCAN and C-SCAN provide fair service with good throughput</li>
      <li>LOOK and C-LOOK improve on SCAN by avoiding unnecessary movement</li>
      <li>For SSDs, scheduling is less critical due to no seek time</li>
      <li>Modern systems often combine algorithms or use adaptive scheduling</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Disk access time = Seek time + Rotational latency + Transfer time</li>
      <li>Seek time is the dominant factor in disk access time</li>
      <li>Disk scheduling aims to minimize total head movement</li>
      <li>Average rotational latency is half of one full rotation</li>
      <li>Different algorithms trade off throughput, response time, and fairness</li>
      <li>The best algorithm depends on workload characteristics</li>
    </ul>
  </div>
);

export default DiskSchedulingIntro;
