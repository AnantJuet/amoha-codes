import React from 'react';

const PageFaultFrequency: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Page Fault Frequency (PFF)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Page Fault Frequency (PFF) is a memory management strategy that controls thrashing
      by monitoring the page fault rate of each process. Instead of tracking the working
      set directly, PFF uses page fault rate as an indicator of whether a process has
      enough memory. This approach is simpler to implement than the working set model
      while achieving similar goals.
    </p>

    {/* Concept */}
    <h2 className="text-3xl font-bold mt-8">PFF Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Core Idea:
─────────────────────────────────────────────────────────────

Page Fault Rate = Indicator of Memory Adequacy

    HIGH fault rate → Process needs MORE memory
    LOW fault rate  → Process may have TOO MUCH memory

PFF Control Strategy:
─────────────────────────────────────────────────────────────

    1. Define upper bound (U) and lower bound (L) for fault rate
    2. Monitor page fault rate for each process
    3. Take action when rate crosses thresholds:

    Fault Rate │
               │    ┌───────────────────────────────────
    Upper (U)  │────┤  If rate > U: INCREASE frames
               │    │
               │    │  (Process is thrashing)
               │    │
               │    │  TARGET ZONE
               │    │
               │    │  (Acceptable performance)
               │    │
    Lower (L)  │────┤  If rate < L: DECREASE frames
               │    │
               │    │  (Process has excess memory)
               │    └───────────────────────────────────
               │
               └────────────────────────────────────────► Time

Key Insight:
─────────────────────────────────────────────────────────────

    - Don't need to know exact working set size
    - Just react to actual performance (fault rate)
    - Simpler than tracking which pages are in working set
`}
      </pre>
    </div>

    {/* Algorithm */}
    <h2 className="text-3xl font-bold mt-8">PFF Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Page Fault Frequency Algorithm:
─────────────────────────────────────────────────────────────

Parameters:
    U = Upper threshold (faults per time unit)
    L = Lower threshold (faults per time unit)
    Measurement period = T time units

For each process P, at end of each period:
    Calculate: fault_rate = faults_in_period / T

    If fault_rate > U:
        Add more frames to process P
        If no free frames available:
            Suspend another process (or P itself)

    Else If fault_rate < L:
        Remove some frames from process P
        (Freed frames go to global pool or other processes)

    Else:
        No action (rate is acceptable)

─────────────────────────────────────────────────────────────

Pseudocode:
─────────────────────────────────────────────────────────────

function PFF_Control():
    for each process P:
        rate = P.page_faults / PERIOD

        if rate > UPPER_THRESHOLD:
            if free_frames_available():
                allocate_frame_to(P)
                P.frame_count++
            else:
                // System overloaded
                suspend_lowest_priority_process()

        else if rate < LOWER_THRESHOLD:
            if P.frame_count > MINIMUM_FRAMES:
                reclaim_frame_from(P)
                P.frame_count--
                add_to_free_pool()

        P.page_faults = 0  // Reset counter for next period
`}
      </pre>
    </div>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Worked Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Example System:
─────────────────────────────────────────────────────────────

Total Physical Frames: 100
Upper Threshold U: 0.5 faults/second
Lower Threshold L: 0.1 faults/second
Measurement Period: 1 second
Free Frame Pool: 10 frames initially

Initial State:
─────────────────────────────────────────────────────────────
Process │ Frames │ Faults/sec │ Action
────────┼────────┼────────────┼─────────────────────────────
   P1   │   20   │    0.3     │ None (within thresholds)
   P2   │   15   │    0.8     │ Rate > U → Add frame
   P3   │   25   │    0.05    │ Rate < L → Remove frame
   P4   │   30   │    0.2     │ None (within thresholds)
────────┴────────┴────────────┴─────────────────────────────

Actions:
    P2: Add 1 frame (was at 15, now 16)
    P3: Remove 1 frame (was at 25, now 24)
    Free pool: 10 - 1 + 1 = 10 (unchanged)

After Adjustments:
─────────────────────────────────────────────────────────────
Process │ Frames │ Expected Improvement
────────┼────────┼─────────────────────────────
   P1   │   20   │ Stable
   P2   │   16   │ Fault rate should decrease
   P3   │   24   │ Fault rate may increase slightly
   P4   │   30   │ Stable
────────┴────────┴─────────────────────────────

Next Period Measurements:
─────────────────────────────────────────────────────────────
Process │ Frames │ Faults/sec │ Action
────────┼────────┼────────────┼─────────────────────────────
   P1   │   20   │    0.25    │ None
   P2   │   16   │    0.6     │ Still > U → Add another frame
   P3   │   24   │    0.15    │ Now within range → None
   P4   │   30   │    0.12    │ None

P2's fault rate decreased but still too high.
Continue adding frames until rate drops below U.
`}
      </pre>
    </div>

    {/* Inter-Fault Time Method */}
    <h2 className="text-3xl font-bold mt-8">Alternative: Inter-Fault Time Method</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Using Time Between Faults:
─────────────────────────────────────────────────────────────

Instead of counting faults per period, measure time since
last fault. This gives instantaneous feedback.

Parameters:
    T_threshold = Minimum acceptable time between faults

On each page fault for process P:
    T_current = time_since_last_fault(P)

    If T_current < T_threshold:
        // Faults too frequent
        Add a frame to P (if available)

    Else:
        // Faults are infrequent
        // Pages not used since last fault can be reclaimed
        Remove pages not used in last T_current interval

─────────────────────────────────────────────────────────────

Example:
─────────────────────────────────────────────────────────────

T_threshold = 100 ms

Timeline for Process P:
    Fault 1 ─────────────────── Fault 2 ────── Fault 3 ─────
             400 ms (> 100)           50 ms (< 100)

At Fault 2:
    Time since Fault 1 = 400 ms > T_threshold
    Action: Remove any pages not accessed in last 400 ms

At Fault 3:
    Time since Fault 2 = 50 ms < T_threshold
    Action: Add a frame (faults too frequent)

Advantages:
    - Immediate response to thrashing
    - Combined with page reclamation
    - No periodic measurement needed
`}
      </pre>
    </div>

    {/* Comparison with Working Set */}
    <h2 className="text-3xl font-bold mt-8">PFF vs Working Set Model</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Working Set</th>
            <th className="p-3 border">PFF</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">What it tracks</td>
            <td className="p-3 border">Pages in use</td>
            <td className="p-3 border">Fault rate</td>
          </tr>
          <tr>
            <td className="p-3 border">Overhead</td>
            <td className="p-3 border">Higher (track pages)</td>
            <td className="p-3 border">Lower (count faults)</td>
          </tr>
          <tr>
            <td className="p-3 border">Precision</td>
            <td className="p-3 border">More precise</td>
            <td className="p-3 border">Less precise</td>
          </tr>
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Complex</td>
            <td className="p-3 border">Simpler</td>
          </tr>
          <tr>
            <td className="p-3 border">Response time</td>
            <td className="p-3 border">Proactive</td>
            <td className="p-3 border">Reactive</td>
          </tr>
          <tr>
            <td className="p-3 border">Thrashing prevention</td>
            <td className="p-3 border">Prevents before it happens</td>
            <td className="p-3 border">Reacts when it happens</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Threshold Selection */}
    <h2 className="text-3xl font-bold mt-8">Selecting Thresholds</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Guidelines for Threshold Selection:
─────────────────────────────────────────────────────────────

Upper Threshold (U):
    - Too high: Allows thrashing before correction
    - Too low: Adds frames unnecessarily
    - Typical: 0.5 to 2 faults per 100 ms

Lower Threshold (L):
    - Too high: Takes frames too aggressively
    - Too low: Wastes memory on idle pages
    - Typical: 0.1 to 0.5 faults per 100 ms

Gap between U and L:
    - Too narrow: System oscillates (add/remove constantly)
    - Too wide: Slow to respond to changes

Recommended: U = 5L to 10L

Example Settings:
─────────────────────────────────────────────────────────────

    Measurement Period: 100 ms

    Conservative:
        U = 2 faults/100ms
        L = 0.2 faults/100ms
        (Wide gap, stable but slower response)

    Aggressive:
        U = 1 fault/100ms
        L = 0.5 faults/100ms
        (Narrow gap, responsive but may oscillate)

Tuning Process:
─────────────────────────────────────────────────────────────

    1. Start with moderate values (U=1, L=0.2 faults/100ms)
    2. Monitor system behavior:
       - Too many suspensions → increase U
       - Frequent thrashing → decrease U
       - Memory underutilized → increase L
       - Oscillating allocations → widen gap
    3. Adjust based on workload characteristics
`}
      </pre>
    </div>

    {/* System-Wide PFF */}
    <h2 className="text-3xl font-bold mt-8">System-Wide vs Per-Process PFF</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Per-Process PFF (Standard):
─────────────────────────────────────────────────────────────

    Each process has its own fault rate tracked
    Frames transferred between processes

    Process P1: rate > U → take frame from P2 (rate < L)

    Problem: What if ALL processes need more frames?

System-Wide PFF:
─────────────────────────────────────────────────────────────

    Monitor total system fault rate

    If system_fault_rate > SYSTEM_UPPER:
        Degree of multiprogramming too high
        SWAP OUT entire process

    If system_fault_rate < SYSTEM_LOWER:
        Room for more processes
        SWAP IN suspended process

Combining Both Approaches:
─────────────────────────────────────────────────────────────

    Layer 1: Per-process PFF
        - Adjust frames between processes
        - Balance local allocation

    Layer 2: System-wide PFF
        - Adjust number of processes
        - Control overall memory pressure

    ┌─────────────────────────────────────────────────────┐
    │              System-Wide PFF                        │
    │  ┌────────────────────────────────────────────────┐ │
    │  │                                                │ │
    │  │     P1      P2      P3      P4     (Swapped)   │ │
    │  │   ┌────┐  ┌────┐  ┌────┐  ┌────┐     ┌────┐    │ │
    │  │   │ PFF│  │ PFF│  │ PFF│  │ PFF│     │ P5 │    │ │
    │  │   └────┘  └────┘  └────┘  └────┘     └────┘    │ │
    │  │      Per-Process PFF Layer            Disk     │ │
    │  └────────────────────────────────────────────────┘ │
    │                                                     │
    │  If total demand too high: Swap out P4              │
    │  If memory available: Swap in P5                    │
    └─────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Simple to implement (just count faults)</td>
            <td className="p-3 border">Reactive, not proactive</td>
          </tr>
          <tr>
            <td className="p-3 border">Low overhead</td>
            <td className="p-3 border">Some thrashing before correction</td>
          </tr>
          <tr>
            <td className="p-3 border">Works for any workload</td>
            <td className="p-3 border">Threshold tuning required</td>
          </tr>
          <tr>
            <td className="p-3 border">Adapts to changing behavior</td>
            <td className="p-3 border">May oscillate with poor thresholds</td>
          </tr>
          <tr>
            <td className="p-3 border">No need to track individual pages</td>
            <td className="p-3 border">Doesn't identify which pages are hot</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Real-World Usage */}
    <h2 className="text-3xl font-bold mt-8">Real-World Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Linux Memory Management (Simplified):
─────────────────────────────────────────────────────────────

Linux uses a combination of techniques:

1. Page Reclaim (kswapd daemon)
   - Monitors free memory levels
   - Reclaims pages when memory is low
   - Uses LRU-like lists (active/inactive)

2. Out-of-Memory Killer (OOM Killer)
   - When system runs out of memory
   - Selects process to kill based on heuristics
   - Like extreme version of PFF (rate too high → kill)

3. Memory Pressure Feedback
   - Processes can query memory pressure
   - Adjust their own behavior (e.g., drop caches)

Windows Memory Management:
─────────────────────────────────────────────────────────────

Working Set Trimming:
   - Each process has min/max working set
   - When memory is low, trim working sets
   - Pages moved to standby list (soft fault if needed)

Similar to PFF in concept:
   - High faults → increase working set (up to max)
   - System pressure → trim working sets
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>PFF uses page fault rate as proxy for memory adequacy</li>
      <li>Upper threshold: rate above means process needs more frames</li>
      <li>Lower threshold: rate below means process has excess frames</li>
      <li>Simpler to implement than working set model</li>
      <li>Reactive approach: responds to faults after they occur</li>
      <li>System-wide PFF controls degree of multiprogramming</li>
      <li>Threshold selection is critical: too narrow causes oscillation</li>
      <li>Often combined with other techniques in real operating systems</li>
    </ul>
  </div>
);

export default PageFaultFrequency;
