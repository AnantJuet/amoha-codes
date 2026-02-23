import React from 'react';

const Thrashing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Thrashing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Thrashing is a condition where the system spends more time paging (swapping pages
      between memory and disk) than executing actual work. It occurs when processes do
      not have enough memory to hold their working sets, causing constant page faults.
      Thrashing severely degrades system performance and can make a system effectively
      unresponsive.
    </p>

    {/* What is Thrashing */}
    <h2 className="text-3xl font-bold mt-8">Understanding Thrashing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Thrashing Definition:
─────────────────────────────────────────────────────────────

A process is thrashing if it spends more time paging than
executing. When this happens to multiple processes, the
entire system thrashes.

Normal Operation:
    Time: [compute][compute][page fault][compute][compute][pf]...
          ─────────────────────────────────────────────────────
          Mostly computation, occasional page faults

Thrashing:
    Time: [pf][pf][pf][c][pf][pf][pf][pf][c][pf][pf][pf][pf]...
          ─────────────────────────────────────────────────────
          Constant page faults, almost no computation

Symptoms:
─────────────────────────────────────────────────────────────
    - Very high page fault rate
    - Disk constantly busy (paging)
    - CPU utilization drops (waiting for I/O)
    - System becomes unresponsive
    - Simple tasks take extremely long
`}
      </pre>
    </div>

    {/* Cause of Thrashing */}
    <h2 className="text-3xl font-bold mt-8">Causes of Thrashing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
The Thrashing Cycle:
─────────────────────────────────────────────────────────────

1. System detects LOW CPU utilization
   (Processes blocked waiting for page faults)

2. System's response: "CPU is idle, let's increase
   degree of multiprogramming"
   → Load MORE processes into memory

3. More processes = less memory per process
   → More page faults per process

4. More page faults = more I/O wait time
   → CPU utilization drops FURTHER

5. Go back to step 1 → Repeat!

Vicious Cycle Diagram:
─────────────────────────────────────────────────────────────

    ┌──────────────────────────────────────────────────────┐
    │                                                      │
    │   ┌─────────────────┐                               │
    │   │ Low CPU         │                               │
    │   │ Utilization     │                               │
    │   └────────┬────────┘                               │
    │            │                                        │
    │            ▼                                        │
    │   ┌─────────────────┐                               │
    │   │ Add More        │                               │
    │   │ Processes       │                               │
    │   └────────┬────────┘                               │
    │            │                                        │
    │            ▼                                        │
    │   ┌─────────────────┐     ┌─────────────────┐       │
    │   │ Less Memory     │ ──► │ More Page       │       │
    │   │ Per Process     │     │ Faults          │       │
    │   └─────────────────┘     └────────┬────────┘       │
    │                                    │                │
    │                                    ▼                │
    │                           ┌─────────────────┐       │
    │                           │ Processes Wait  │       │
    │                           │ for Paging I/O  │       │
    │                           └────────┬────────┘       │
    │                                    │                │
    └────────────────────────────────────┘                │
             (Back to low CPU utilization)
`}
      </pre>
    </div>

    {/* CPU Utilization Graph */}
    <h2 className="text-3xl font-bold mt-8">CPU Utilization vs Multiprogramming</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
CPU Utilization vs Degree of Multiprogramming:
─────────────────────────────────────────────────────────────

 100% │                    ╭──────╮
      │                 ╭──╯      ╰──╮
      │               ╭─╯            ╰──╮
      │             ╭─╯                 ╰──╮  ← Optimal
 CPU  │           ╭─╯                      ╰──╮
 Util │         ╭─╯                           ╰───╮
      │       ╭─╯                                  ╰──╮
      │     ╭─╯                    THRASHING →         ╰──
      │   ╭─╯                                            ╰
      │ ╭─╯
   0% │─╯
      └────────────────────────────────────────────────────►
        Low                                           High
                   Degree of Multiprogramming
                   (Number of Processes)

Key Points:
─────────────────────────────────────────────────────────────

    1. Initially, adding processes increases CPU utilization
       - More work to do
       - One process waiting = another can run

    2. At some point, optimal utilization is reached
       - Memory is efficiently used
       - Good balance of processes

    3. Beyond optimal, adding more processes causes:
       - Not enough memory per process
       - Excessive page faults
       - CPU utilization DROPS

    4. In thrashing zone:
       - Almost all time spent on paging
       - CPU utilization approaches 0
       - System is essentially frozen
`}
      </pre>
    </div>

    {/* Working Set Connection */}
    <h2 className="text-3xl font-bold mt-8">Working Set and Thrashing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Working Set Definition:
─────────────────────────────────────────────────────────────

The working set of a process is the set of pages the process
is actively using during a time window.

    WS(t, Δ) = pages referenced in time interval (t-Δ, t)

Where:
    t = current time
    Δ = working set window size

Thrashing and Working Set:
─────────────────────────────────────────────────────────────

    Thrashing occurs when:
        Sum of all working sets > Available physical memory

        Σ WS_i > Physical Memory

    In symbols:
        If WS(P1) + WS(P2) + ... + WS(Pn) > RAM
        → System will thrash

Example:
─────────────────────────────────────────────────────────────

    Physical Memory: 100 frames

    Process P1: Working set = 40 pages
    Process P2: Working set = 35 pages
    Process P3: Working set = 30 pages
    ─────────────────────────────────────
    Total needed: 105 pages

    105 > 100 → NOT ENOUGH MEMORY → THRASHING!

    At any time, some pages of the working set are NOT in memory.
    Those pages cause page faults when accessed.
    Since they're in the working set, they'll be accessed frequently.
    Result: Constant page faults → Thrashing
`}
      </pre>
    </div>

    {/* Effects of Thrashing */}
    <h2 className="text-3xl font-bold mt-8">Effects of Thrashing</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Normal</th>
            <th className="p-3 border">Thrashing</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">CPU Utilization</td>
            <td className="p-3 border">70-90%</td>
            <td className="p-3 border">&lt; 10%</td>
          </tr>
          <tr>
            <td className="p-3 border">Page Fault Rate</td>
            <td className="p-3 border">Low (occasional)</td>
            <td className="p-3 border">Extremely high</td>
          </tr>
          <tr>
            <td className="p-3 border">Disk Activity</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Constant (100%)</td>
          </tr>
          <tr>
            <td className="p-3 border">Response Time</td>
            <td className="p-3 border">Milliseconds</td>
            <td className="p-3 border">Minutes or more</td>
          </tr>
          <tr>
            <td className="p-3 border">Throughput</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Near zero</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Prevention Methods */}
    <h2 className="text-3xl font-bold mt-8">Prevention and Control Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Method 1: Working Set Model
─────────────────────────────────────────────────────────────

Idea: Track each process's working set
      Only run processes if their working sets fit in memory

Implementation:
    - Calculate working set size for each process
    - Sum all working set sizes
    - If sum > available memory:
        Suspend some processes until working sets fit
        Resume when memory becomes available

    Σ WS_i ≤ Available Memory

Advantages:
    - Prevents thrashing proactively
    - Each process gets enough memory to run efficiently

Disadvantages:
    - Working set calculation has overhead
    - Need to track page references over window

─────────────────────────────────────────────────────────────

Method 2: Page Fault Frequency (PFF)
─────────────────────────────────────────────────────────────

Idea: Monitor page fault rate per process
      Adjust memory allocation based on fault rate

Implementation:
    - Set upper and lower bounds for fault rate
    - If process fault rate > upper bound:
        Give it more frames (or suspend other processes)
    - If process fault rate < lower bound:
        Take some frames away (give to other processes)

    Upper Bound ────────────────────── Too many faults
                     Target Zone
    Lower Bound ────────────────────── Too few (wasting memory)

Advantages:
    - Simpler than working set model
    - Reacts dynamically to actual behavior

─────────────────────────────────────────────────────────────

Method 3: Load Control (Swap Out)
─────────────────────────────────────────────────────────────

Idea: When thrashing detected, reduce multiprogramming level
      Swap out entire processes to disk

Implementation:
    If system is thrashing:
        1. Select victim process (low priority, waiting)
        2. Swap out all its pages to disk
        3. Free memory for remaining processes
        4. When memory available, swap process back in

This is a reactive measure when prevention fails.
`}
      </pre>
    </div>

    {/* Local vs Global Replacement */}
    <h2 className="text-3xl font-bold mt-8">Local vs Global Page Replacement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Impact on Thrashing:
─────────────────────────────────────────────────────────────

LOCAL REPLACEMENT:
    - Process can only replace its OWN pages
    - Fixed allocation per process
    - One process thrashing doesn't affect others directly

    Process P1: [frames 1-10] only
    Process P2: [frames 11-20] only

    If P1 thrashes, P2 is unaffected
    P1 can't steal P2's frames

GLOBAL REPLACEMENT:
    - Any page can be replaced for any process
    - Flexible allocation
    - One thrashing process affects ALL processes

    All processes share frame pool [1-20]

    If P1 causes many faults:
        P1 steals pages from P2
        Now P2 also faults more
        P2 steals from P1
        Both end up thrashing!

Recommendation:
─────────────────────────────────────────────────────────────

    - Local replacement prevents thrashing from spreading
    - Global replacement gives better overall utilization
    - Many systems use HYBRID approach:
        Local allocation per process
        With occasional global rebalancing based on PFF
`}
      </pre>
    </div>

    {/* Detection */}
    <h2 className="text-3xl font-bold mt-8">Detecting Thrashing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Indicators of Thrashing:
─────────────────────────────────────────────────────────────

1. CPU Utilization
   - Monitor: /proc/stat, top, vmstat
   - Thrashing: User CPU very low, System/Wait very high

2. Page Fault Rate
   - Monitor: vmstat, /proc/vmstat
   - Thrashing: pgfault/s very high

3. Swap Activity
   - Monitor: vmstat si/so columns
   - Thrashing: Constant swap in/out

4. Disk I/O
   - Monitor: iostat
   - Thrashing: Disk utilization at 100% for paging

Example vmstat output during thrashing:
─────────────────────────────────────────────────────────────

procs -------memory------ -swap-- -----io---- -system-- ----cpu----
 r  b   swpd   free  buff   si   so    bi    bo   in   cs us sy wa
 0  8  89432   1024    64  5000 4800  5000  4800 1000  800  1  5 94
 0 10  89432   1024    64  4500 5200  4500  5200 1200  900  0  4 96

Key indicators:
    - b (blocked) processes: 8-10 (high, waiting for I/O)
    - free memory: 1024 KB (very low)
    - si/so (swap): 5000/4800 (very high)
    - wa (I/O wait): 94-96% (almost all time waiting)
    - us (user): 0-1% (almost no useful work)

DIAGNOSIS: Severe thrashing!
`}
      </pre>
    </div>

    {/* Real-World Example */}
    <h2 className="text-3xl font-bold mt-8">Real-World Scenario</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Scenario: Web Server Under Load
─────────────────────────────────────────────────────────────

Server: 8GB RAM, handling web requests

Normal operation:
    - 50 worker processes
    - Each needs ~100MB working set
    - Total: 5GB needed, 3GB free buffer
    - Response time: 50ms
    - CPU: 70%

Heavy load arrives:
    - Traffic spikes, more workers spawned
    - 100 worker processes
    - Each needs ~100MB
    - Total needed: 10GB > 8GB available!

Thrashing begins:
    - Workers start page faulting
    - Each request takes 500ms (10x slower)
    - CPU: 5% (waiting for I/O)
    - Queue builds up
    - More workers spawned (bad!)
    - System becomes unresponsive

Resolution:
    - Limit max worker processes (80)
    - Add more RAM (16GB)
    - Or use load balancer to distribute
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Thrashing occurs when system spends more time paging than executing</li>
      <li>Caused by insufficient memory for process working sets</li>
      <li>Vicious cycle: low CPU leads to more processes, worsening thrashing</li>
      <li>Working Set Model prevents thrashing by ensuring adequate memory</li>
      <li>Page Fault Frequency (PFF) monitors and adjusts allocation dynamically</li>
      <li>Local replacement prevents one process from affecting others</li>
      <li>Detection via CPU utilization, page fault rate, swap activity</li>
      <li>Resolution: reduce multiprogramming or add physical memory</li>
    </ul>
  </div>
);

export default Thrashing;
