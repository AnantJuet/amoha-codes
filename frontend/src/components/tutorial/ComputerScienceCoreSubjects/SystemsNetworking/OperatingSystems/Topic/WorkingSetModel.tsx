import React from 'react';

const WorkingSetModel: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Working Set Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Working Set Model, introduced by Peter Denning in 1968, is a memory management
      approach based on the concept of locality of reference. It defines the working set
      as the set of pages a process is actively using during a recent time window. By
      ensuring each process has enough memory for its working set, the system can prevent
      thrashing while maximizing multiprogramming.
    </p>

    {/* Locality of Reference */}
    <h2 className="text-3xl font-bold mt-8">Locality of Reference</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Locality Principle:
─────────────────────────────────────────────────────────────

Programs tend to access a relatively small subset of their
address space during any short period of time.

Types of Locality:
─────────────────────────────────────────────────────────────

1. TEMPORAL LOCALITY (Locality in Time)
   If a memory location is accessed, it will likely be
   accessed again soon.

   Examples:
   - Loop counter variables
   - Function local variables
   - Recently used data structures

   Code Example:
   for (i = 0; i < 1000; i++) {    // 'i' accessed 1001 times
       sum += array[i];            // 'sum' accessed 1000 times
   }

2. SPATIAL LOCALITY (Locality in Space)
   If a memory location is accessed, nearby locations will
   likely be accessed soon.

   Examples:
   - Sequential array access
   - Code execution (next instruction)
   - Stack operations

   Code Example:
   for (i = 0; i < n; i++) {
       process(array[i]);          // array[0], array[1], array[2]...
       process(array[i+1]);        // adjacent locations
   }

Why Locality Enables Virtual Memory:
─────────────────────────────────────────────────────────────

   Without locality: Would need entire program in memory
   With locality: Only need "active" pages (working set)
   Most pages can stay on disk until needed
`}
      </pre>
    </div>

    {/* Working Set Definition */}
    <h2 className="text-3xl font-bold mt-8">Working Set Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Formal Definition:
─────────────────────────────────────────────────────────────

Working Set WS(t, Δ) = Set of pages referenced in the
                       time interval (t - Δ, t]

Where:
    t = Current time (or current reference)
    Δ = Working set window (lookback period)

The working set is the set of pages used in the LAST Δ
time units (or last Δ page references).

─────────────────────────────────────────────────────────────

Visual Representation:
─────────────────────────────────────────────────────────────

Reference String: 1, 2, 5, 1, 1, 3, 5, 4, 3, 2, 3, 5

Time:     1  2  3  4  5  6  7  8  9  10 11 12
          ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓
Refs:     1  2  5  1  1  3  5  4  3  2  3  5

With Δ = 4 (window size of 4 references):

At t=6:   Window covers refs 3,4,5,6 → pages {5,1,1,3} = {1,3,5}
          │─────────────────│
          3  4  5  6
          5  1  1  3

At t=10:  Window covers refs 7,8,9,10 → pages {5,4,3,2} = {2,3,4,5}
                        │─────────────────│
                        7  8  9  10
                        5  4  3  2

Working Set Size (WSS):
─────────────────────────────────────────────────────────────

    WSS(t, Δ) = |WS(t, Δ)| = number of pages in working set

At t=6:  WSS = 3 (pages 1, 3, 5)
At t=10: WSS = 4 (pages 2, 3, 4, 5)
`}
      </pre>
    </div>

    {/* Working Set Example */}
    <h2 className="text-3xl font-bold mt-8">Worked Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Example: Tracking Working Set Over Time
─────────────────────────────────────────────────────────────

Reference String: 2, 6, 1, 5, 7, 7, 7, 7, 5, 1, 6, 2, 3, 4, 1, 2
Window Size Δ = 5

Time │ Reference │ Window Contents    │ Working Set  │ WSS
─────┼───────────┼────────────────────┼──────────────┼─────
  1  │     2     │ 2                  │ {2}          │  1
  2  │     6     │ 2, 6               │ {2, 6}       │  2
  3  │     1     │ 2, 6, 1            │ {1, 2, 6}    │  3
  4  │     5     │ 2, 6, 1, 5         │ {1,2,5,6}    │  4
  5  │     7     │ 2, 6, 1, 5, 7      │ {1,2,5,6,7}  │  5
  6  │     7     │ 6, 1, 5, 7, 7      │ {1,5,6,7}    │  4
  7  │     7     │ 1, 5, 7, 7, 7      │ {1,5,7}      │  3
  8  │     7     │ 5, 7, 7, 7, 7      │ {5,7}        │  2
  9  │     5     │ 7, 7, 7, 7, 5      │ {5,7}        │  2
 10  │     1     │ 7, 7, 7, 5, 1      │ {1,5,7}      │  3
 11  │     6     │ 7, 7, 5, 1, 6      │ {1,5,6,7}    │  4
 12  │     2     │ 7, 5, 1, 6, 2      │ {1,2,5,6,7}  │  5
 13  │     3     │ 5, 1, 6, 2, 3      │ {1,2,3,5,6}  │  5
 14  │     4     │ 1, 6, 2, 3, 4      │ {1,2,3,4,6}  │  5
 15  │     1     │ 6, 2, 3, 4, 1      │ {1,2,3,4,6}  │  5
 16  │     2     │ 2, 3, 4, 1, 2      │ {1,2,3,4}    │  4

Observations:
─────────────────────────────────────────────────────────────

- WSS fluctuates between 1 and 5
- During loop (7,7,7,7): WSS shrinks (same page repeated)
- During transition (3,4): WSS grows (new pages accessed)
- Average WSS ≈ 3.5 pages needed for this workload
`}
      </pre>
    </div>

    {/* Choosing Delta */}
    <h2 className="text-3xl font-bold mt-8">Choosing the Window Size (Delta)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Impact of Δ Selection:
─────────────────────────────────────────────────────────────

Δ too SMALL:
    - Working set doesn't capture all active pages
    - Leads to unnecessary page faults
    - May not include pages from outer loops

Δ too LARGE:
    - Working set includes pages no longer needed
    - Wastes memory
    - Approaches total memory footprint

         WSS
          │
          │                         ╭────────────────
          │                     ╭───╯
          │                 ╭───╯
          │             ╭───╯
          │         ╭───╯
          │     ╭───╯
          │ ╭───╯
          │─╯
          └────────────────────────────────────────►
           Small                              Large
                         Delta (Δ)

As Δ increases:
    - WSS increases (includes more pages)
    - Eventually plateaus at total pages ever accessed

Typical Values:
─────────────────────────────────────────────────────────────

    Δ = 10,000 page references (common starting point)

    Tuning: Monitor page fault rate
        Too many faults → increase Δ
        Too few faults (wasting memory) → decrease Δ
`}
      </pre>
    </div>

    {/* Working Set Model for Memory Allocation */}
    <h2 className="text-3xl font-bold mt-8">Working Set Model for Memory Management</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Using Working Set to Prevent Thrashing:
─────────────────────────────────────────────────────────────

Rule: Only run processes whose working sets fit in memory

    D = Σ WSS_i  (Total demand = sum of all working set sizes)

    If D > Available Memory:
        System will thrash
        Must suspend some processes

    If D ≤ Available Memory:
        All processes have enough frames
        No thrashing

Algorithm:
─────────────────────────────────────────────────────────────

1. For each process, track WSS (working set size)

2. Calculate total demand: D = Σ WSS_i

3. If D > Available Memory:
   a. Select process to suspend (swap out entirely)
   b. Choices: lowest priority, largest WSS, etc.
   c. Recalculate D

4. If D < Available Memory - threshold:
   a. There's room for more processes
   b. Resume a suspended process

5. Allocate frames to each process = WSS of that process

Example:
─────────────────────────────────────────────────────────────

    Available Memory: 100 frames

    Process    WSS
    ─────────────────
    P1         25
    P2         30
    P3         20
    P4         35
    ─────────────────
    Total D    110 > 100  → Will thrash!

    Suspend P4 (largest WSS):

    Process    WSS
    ─────────────────
    P1         25
    P2         30
    P3         20
    ─────────────────
    Total D    75 ≤ 100  → OK!

    Remaining 25 frames for new processes or buffer.
`}
      </pre>
    </div>

    {/* Implementation */}
    <h2 className="text-3xl font-bold mt-8">Implementation Approaches</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Challenge: Tracking exact working set is expensive
─────────────────────────────────────────────────────────────

Need to know: Which pages were accessed in last Δ references?
True tracking requires updating on every memory reference!

Approximation Methods:
─────────────────────────────────────────────────────────────

Method 1: Timer Interrupt with Reference Bit
─────────────────────────────────────────────────────────────

    At each timer interrupt (every T milliseconds):
        1. Copy reference bit to "in-working-set" bit
        2. Clear reference bit

    Page is in working set if:
        - Reference bit = 1 (accessed since last interrupt), OR
        - In-working-set bit = 1 (accessed in previous interval)

    This approximates Δ ≈ T (time-based window)

Method 2: History Bits
─────────────────────────────────────────────────────────────

    Each page has n history bits (e.g., 8 bits)
    At each timer interrupt:
        1. Shift history right
        2. Insert current reference bit at left

    Working set = pages with any bit set in history
    Window Δ ≈ n * T

    History:   10110100
               ↑──────↑
              Recent  Older

Method 3: Page Fault Frequency (PFF)
─────────────────────────────────────────────────────────────

    Instead of tracking working set directly:
    Monitor page fault rate as proxy

    High fault rate → working set not in memory → add frames
    Low fault rate → working set fits → maybe remove frames

    (Covered in detail in Page Fault Frequency topic)
`}
      </pre>
    </div>

    {/* Working Set Transitions */}
    <h2 className="text-3xl font-bold mt-8">Working Set Transitions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Working Set Changes During Execution:
─────────────────────────────────────────────────────────────

Programs have phases with different working sets:

Phase 1: Initialization
    - Load configuration
    - Initialize data structures
    - WSS: init pages + data pages

Phase 2: Main Processing
    - Different code and data
    - WSS may be larger or smaller

Phase 3: Cleanup
    - Write results
    - Close files
    - WSS: output pages

Transition Periods:
─────────────────────────────────────────────────────────────

During phase transitions:
    - Working set changes rapidly
    - Page fault rate temporarily increases
    - This is NORMAL (not thrashing)

Diagram:
    WSS │
        │     ╭──────╮
        │    ╱        ╲    ╭──────────╮
        │───╯          ╲──╯            ╲───
        │
        └────────────────────────────────────► Time
         Init    Trans.   Main     Trans.  Cleanup

    During transitions: Brief spike in page faults
    Within phases: Stable working set, low faults
`}
      </pre>
    </div>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">Working Set Model Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Fixed Allocation</th>
            <th className="p-3 border">Working Set Model</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Frame Allocation</td>
            <td className="p-3 border">Static per process</td>
            <td className="p-3 border">Dynamic based on WSS</td>
          </tr>
          <tr>
            <td className="p-3 border">Thrashing Prevention</td>
            <td className="p-3 border">No guarantee</td>
            <td className="p-3 border">Built-in protection</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Efficiency</td>
            <td className="p-3 border">May waste memory</td>
            <td className="p-3 border">Matches actual need</td>
          </tr>
          <tr>
            <td className="p-3 border">Overhead</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Higher (tracking)</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Working set is the set of pages accessed in a recent time window</li>
      <li>Based on principle of locality (temporal and spatial)</li>
      <li>WSS (working set size) indicates memory needed for efficient execution</li>
      <li>Total demand D = sum of all process working set sizes</li>
      <li>If D exceeds memory, system will thrash</li>
      <li>Suspend processes when D is too high; resume when space available</li>
      <li>Window size (delta) must be tuned: too small = faults, too large = waste</li>
      <li>Approximated using reference bits and timer interrupts</li>
    </ul>
  </div>
);

export default WorkingSetModel;
