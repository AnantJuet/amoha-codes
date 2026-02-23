import React from 'react';

const BankersAlgorithm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Banker's Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Banker's Algorithm is a deadlock avoidance algorithm developed by Edsger Dijkstra.
      It determines whether granting a resource request will leave the system in a safe state.
      Named after a banking system analogy, where a bank must ensure it can satisfy all customer
      loan requests to avoid bankruptcy.
    </p>

    {/* Data Structures */}
    <h2 className="text-3xl font-bold mt-8">Data Structures</h2>
    <p className="leading-relaxed">
      The algorithm uses several data structures to track the system state. Let n be the number
      of processes and m be the number of resource types.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Data Structures for n processes, m resource types:
─────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────┐
│ Available[m]                                                │
│   Vector of length m                                        │
│   Available[j] = number of instances of resource Rj         │
│                  currently available                        │
├─────────────────────────────────────────────────────────────┤
│ Max[n][m]                                                   │
│   Matrix n x m                                              │
│   Max[i][j] = maximum number of Rj that Pi may need         │
│               (declared at process creation)                │
├─────────────────────────────────────────────────────────────┤
│ Allocation[n][m]                                            │
│   Matrix n x m                                              │
│   Allocation[i][j] = number of Rj currently allocated to Pi │
├─────────────────────────────────────────────────────────────┤
│ Need[n][m]                                                  │
│   Matrix n x m                                              │
│   Need[i][j] = Max[i][j] - Allocation[i][j]                 │
│              = additional Rj that Pi may still request      │
└─────────────────────────────────────────────────────────────┘

Relationship:
─────────────────────────────────────────────────────────────
    Need[i][j] = Max[i][j] - Allocation[i][j]

    For all i, j:
        Allocation[i][j] + Need[i][j] = Max[i][j]
`}
      </pre>
    </div>

    {/* Example Setup */}
    <h2 className="text-3xl font-bold mt-8">Worked Example Setup</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Example System:
─────────────────────────────────────────────────────────────
    5 Processes: P0, P1, P2, P3, P4
    3 Resource Types: A (10 instances), B (5 instances), C (7 instances)

Current State at time T0:
─────────────────────────────────────────────────────────────

           Allocation      Max          Need
           A   B   C     A   B   C     A   B   C
         ┌───────────┐ ┌───────────┐ ┌───────────┐
    P0   │ 0   1   0 │ │ 7   5   3 │ │ 7   4   3 │
    P1   │ 2   0   0 │ │ 3   2   2 │ │ 1   2   2 │
    P2   │ 3   0   2 │ │ 9   0   2 │ │ 6   0   0 │
    P3   │ 2   1   1 │ │ 2   2   2 │ │ 0   1   1 │
    P4   │ 0   0   2 │ │ 4   3   3 │ │ 4   3   1 │
         └───────────┘ └───────────┘ └───────────┘

    Available = [3, 3, 2]    (calculated below)

Verification:
─────────────────────────────────────────────────────────────
    Total Resources:        A=10, B=5, C=7
    Total Allocated:        A=0+2+3+2+0=7, B=1+0+0+1+0=2, C=0+0+2+1+2=5
    Available = Total - Allocated = [10-7, 5-2, 7-5] = [3, 3, 2]
`}
      </pre>
    </div>

    {/* Safety Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Safety Algorithm</h2>
    <p className="leading-relaxed">
      The Safety Algorithm determines if the current state is safe by trying to find a safe
      sequence of processes.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Safety Algorithm:
─────────────────────────────────────────────────────────────

1. Initialize:
   Work[m] = Available[m]           // Copy of available
   Finish[n] = false for all i      // No process finished

2. Find process Pi such that:
   (a) Finish[i] == false           // Not yet finished
   (b) Need[i] <= Work              // Can satisfy its needs

   If no such Pi exists, go to step 4.

3. Simulate completion of Pi:
   Work = Work + Allocation[i]      // Pi releases resources
   Finish[i] = true                 // Mark as finished
   Add Pi to safe sequence
   Go to step 2.

4. If Finish[i] == true for all i:
   System is in SAFE state
   Return the safe sequence
   Else:
   System is in UNSAFE state

─────────────────────────────────────────────────────────────
Note: Need[i] <= Work means
      Need[i][j] <= Work[j] for all j (all resource types)
`}
      </pre>
    </div>

    {/* Safety Algorithm Example */}
    <h2 className="text-3xl font-bold mt-8">Safety Algorithm Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Is the system in a SAFE state?
─────────────────────────────────────────────────────────────

Initial:
    Work = [3, 3, 2]
    Finish = [F, F, F, F, F]

Step 1: Find process where Need <= Work
─────────────────────────────────────────────────────────────
    P0: Need=[7,4,3], Work=[3,3,2]  7>3? YES → Cannot satisfy
    P1: Need=[1,2,2], Work=[3,3,2]  1<=3, 2<=3, 2<=2 → CAN satisfy ✓

    Select P1:
    Work = Work + Allocation[P1] = [3,3,2] + [2,0,0] = [5,3,2]
    Finish = [F, T, F, F, F]
    Safe sequence: <P1>

Step 2: Continue
─────────────────────────────────────────────────────────────
    P0: Need=[7,4,3], Work=[5,3,2]  7>5? YES → Cannot satisfy
    P2: Need=[6,0,0], Work=[5,3,2]  6>5? YES → Cannot satisfy
    P3: Need=[0,1,1], Work=[5,3,2]  0<=5, 1<=3, 1<=2 → CAN satisfy ✓

    Select P3:
    Work = Work + Allocation[P3] = [5,3,2] + [2,1,1] = [7,4,3]
    Finish = [F, T, F, T, F]
    Safe sequence: <P1, P3>

Step 3: Continue
─────────────────────────────────────────────────────────────
    P0: Need=[7,4,3], Work=[7,4,3]  7<=7, 4<=4, 3<=3 → CAN satisfy ✓

    Select P0:
    Work = Work + Allocation[P0] = [7,4,3] + [0,1,0] = [7,5,3]
    Finish = [T, T, F, T, F]
    Safe sequence: <P1, P3, P0>

Step 4: Continue
─────────────────────────────────────────────────────────────
    P2: Need=[6,0,0], Work=[7,5,3]  6<=7, 0<=5, 0<=3 → CAN satisfy ✓

    Select P2:
    Work = Work + Allocation[P2] = [7,5,3] + [3,0,2] = [10,5,5]
    Finish = [T, T, T, T, F]
    Safe sequence: <P1, P3, P0, P2>

Step 5: Continue
─────────────────────────────────────────────────────────────
    P4: Need=[4,3,1], Work=[10,5,5]  4<=10, 3<=5, 1<=5 → CAN satisfy ✓

    Select P4:
    Work = Work + Allocation[P4] = [10,5,5] + [0,0,2] = [10,5,7]
    Finish = [T, T, T, T, T]
    Safe sequence: <P1, P3, P0, P2, P4>

All Finish[i] = true
─────────────────────────────────────────────────────────────
SYSTEM IS SAFE!
Safe Sequence: <P1, P3, P0, P2, P4>
`}
      </pre>
    </div>

    {/* Resource Request Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Resource Request Algorithm</h2>
    <p className="leading-relaxed">
      When process Pi makes a request, the Resource Request Algorithm determines whether
      the request can be safely granted.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Resource Request Algorithm:
─────────────────────────────────────────────────────────────

Let Request[i] = request vector for process Pi
    Request[i][j] = number of instances of Rj that Pi requests

1. Validate Request:
   If Request[i] > Need[i]:
       ERROR! Process exceeded maximum claim
       Terminate or handle error

2. Check Availability:
   If Request[i] > Available:
       Pi must WAIT (resources not available)
       Block the process, exit algorithm

3. Simulate Granting (pretend allocation):
   Available = Available - Request[i]
   Allocation[i] = Allocation[i] + Request[i]
   Need[i] = Need[i] - Request[i]

4. Run Safety Algorithm on new state:
   If SAFE:
       Commit the changes (grant request for real)
       Pi continues execution with resources
   If UNSAFE:
       Rollback the simulation:
       Available = Available + Request[i]
       Allocation[i] = Allocation[i] - Request[i]
       Need[i] = Need[i] + Request[i]
       Pi must WAIT
`}
      </pre>
    </div>

    {/* Resource Request Example */}
    <h2 className="text-3xl font-bold mt-8">Resource Request Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Example 1: P1 requests [1, 0, 2]
─────────────────────────────────────────────────────────────

Step 1: Validate
    Request[1] = [1, 0, 2]
    Need[1]    = [1, 2, 2]
    Request[1] <= Need[1]?  [1,0,2] <= [1,2,2]?  YES ✓

Step 2: Check Availability
    Request[1] = [1, 0, 2]
    Available  = [3, 3, 2]
    Request[1] <= Available?  [1,0,2] <= [3,3,2]?  YES ✓

Step 3: Simulate Grant
    Available  = [3,3,2] - [1,0,2] = [2, 3, 0]
    Allocation[1] = [2,0,0] + [1,0,2] = [3, 0, 2]
    Need[1]    = [1,2,2] - [1,0,2] = [0, 2, 0]

Step 4: Run Safety Algorithm
    New State:
           Allocation      Need
           A   B   C     A   B   C    Available = [2, 3, 0]
    P0   │ 0   1   0 │ │ 7   4   3 │
    P1   │ 3   0   2 │ │ 0   2   0 │  ← Updated
    P2   │ 3   0   2 │ │ 6   0   0 │
    P3   │ 2   1   1 │ │ 0   1   1 │
    P4   │ 0   0   2 │ │ 4   3   1 │

    Safety Check:
    Work = [2, 3, 0]

    P1: Need=[0,2,0] <= [2,3,0]? YES
        Work = [2,3,0] + [3,0,2] = [5,3,2], Finish[1]=T

    P3: Need=[0,1,1] <= [5,3,2]? YES
        Work = [5,3,2] + [2,1,1] = [7,4,3], Finish[3]=T

    P0: Need=[7,4,3] <= [7,4,3]? YES
        Work = [7,4,3] + [0,1,0] = [7,5,3], Finish[0]=T

    P2: Need=[6,0,0] <= [7,5,3]? YES
        Work = [7,5,3] + [3,0,2] = [10,5,5], Finish[2]=T

    P4: Need=[4,3,1] <= [10,5,5]? YES
        Work = [10,5,5] + [0,0,2] = [10,5,7], Finish[4]=T

    All processes can finish → STATE IS SAFE!
    Safe sequence: <P1, P3, P0, P2, P4>

DECISION: GRANT the request!
`}
      </pre>
    </div>

    {/* Another Request Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Denied Request</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Example 2: P4 requests [3, 3, 0] (after P1's request granted)
─────────────────────────────────────────────────────────────

Current State (after P1's request):
    Available = [2, 3, 0]

Step 1: Validate
    Request[4] = [3, 3, 0]
    Need[4]    = [4, 3, 1]
    [3,3,0] <= [4,3,1]?  YES ✓

Step 2: Check Availability
    Request[4] = [3, 3, 0]
    Available  = [2, 3, 0]
    [3,3,0] <= [2,3,0]?  3 > 2  NO ✗

DECISION: P4 must WAIT!
    Resources not currently available.
    P4 is blocked until more resources become free.

─────────────────────────────────────────────────────────────

Example 3: P0 requests [0, 2, 0] (from original state)
─────────────────────────────────────────────────────────────

Original State:
    Available = [3, 3, 2]

Step 1: Validate
    Request[0] = [0, 2, 0]
    Need[0]    = [7, 4, 3]
    [0,2,0] <= [7,4,3]?  YES ✓

Step 2: Check Availability
    [0,2,0] <= [3,3,2]?  YES ✓

Step 3: Simulate Grant
    Available = [3,3,2] - [0,2,0] = [3, 1, 2]
    Allocation[0] = [0,1,0] + [0,2,0] = [0, 3, 0]
    Need[0] = [7,4,3] - [0,2,0] = [7, 2, 3]

Step 4: Safety Check with Available = [3, 1, 2]
    P0: Need=[7,2,3] <= [3,1,2]?  7>3  NO
    P1: Need=[1,2,2] <= [3,1,2]?  2>1  NO
    P2: Need=[6,0,0] <= [3,1,2]?  6>3  NO
    P3: Need=[0,1,1] <= [3,1,2]?  YES ✓
        Work = [3,1,2] + [2,1,1] = [5,2,3]

    P0: Need=[7,2,3] <= [5,2,3]?  7>5  NO
    P1: Need=[1,2,2] <= [5,2,3]?  YES ✓
        Work = [5,2,3] + [2,0,0] = [7,2,3]

    P0: Need=[7,2,3] <= [7,2,3]?  YES ✓
        Work = [7,2,3] + [0,3,0] = [7,5,3]  ← Note: Using simulated allocation

    ... (P2 and P4 can now proceed)

    STATE IS SAFE! Sequence: <P3, P1, P0, P2, P4>

DECISION: GRANT the request!
`}
      </pre>
    </div>

    {/* Algorithm Complexity */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Complexity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Complexity</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Safety Algorithm</td>
            <td className="p-3 border">O(n^2 * m)</td>
            <td className="p-3 border">n iterations, each checking n processes with m resources</td>
          </tr>
          <tr>
            <td className="p-3 border">Request Validation</td>
            <td className="p-3 border">O(m)</td>
            <td className="p-3 border">Compare m resource values</td>
          </tr>
          <tr>
            <td className="p-3 border">State Update</td>
            <td className="p-3 border">O(m)</td>
            <td className="p-3 border">Update m values in vectors</td>
          </tr>
          <tr>
            <td className="p-3 border">Total per Request</td>
            <td className="p-3 border">O(n^2 * m)</td>
            <td className="p-3 border">Dominated by Safety Algorithm</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Visual Flowchart */}
    <h2 className="text-3xl font-bold mt-8">Complete Algorithm Flowchart</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Resource Request Flow:
─────────────────────────────────────────────────────────────

         ┌─────────────────────────────┐
         │   Pi requests Request[i]    │
         └─────────────────────────────┘
                       │
                       ▼
         ┌─────────────────────────────┐
         │  Request[i] <= Need[i] ?    │
         └─────────────────────────────┘
                       │
              No       │       Yes
               │       │        │
               ▼       │        ▼
         ┌──────────┐  │  ┌─────────────────────────────┐
         │  ERROR!  │  │  │  Request[i] <= Available?  │
         │ Exceeded │  │  └─────────────────────────────┘
         │  claim   │  │              │
         └──────────┘  │     No       │       Yes
                       │      │       │        │
                       │      ▼       │        ▼
                       │  ┌───────┐   │  ┌──────────────────┐
                       │  │ WAIT  │   │  │ Simulate Grant:  │
                       │  └───────┘   │  │ Update state     │
                       │              │  │ temporarily      │
                       │              │  └──────────────────┘
                       │              │        │
                       │              │        ▼
                       │              │  ┌──────────────────┐
                       │              │  │ Run Safety       │
                       │              │  │ Algorithm        │
                       │              │  └──────────────────┘
                       │              │        │
                       │              │ Unsafe │  Safe
                       │              │   │    │   │
                       │              │   ▼    │   ▼
                       │              │ ┌────┐ │ ┌───────────┐
                       │              │ │WAIT│ │ │  GRANT!   │
                       │              │ │Roll│ │ │  Commit   │
                       │              │ │back│ │ │  changes  │
                       │              │ └────┘ │ └───────────┘
                       └──────────────┴────────┘
`}
      </pre>
    </div>

    {/* Pseudocode */}
    <h2 className="text-3xl font-bold mt-8">Pseudocode Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
// Global Data Structures
int Available[m];        // Available resources
int Max[n][m];          // Maximum demand
int Allocation[n][m];   // Current allocation
int Need[n][m];         // Remaining need

bool SafetyAlgorithm() {
    int Work[m];
    bool Finish[n];

    // Initialize
    for (int j = 0; j < m; j++)
        Work[j] = Available[j];
    for (int i = 0; i < n; i++)
        Finish[i] = false;

    // Find safe sequence
    int count = 0;
    while (count < n) {
        bool found = false;
        for (int i = 0; i < n; i++) {
            if (!Finish[i] && Need[i] <= Work) {
                // Can satisfy Pi
                for (int j = 0; j < m; j++)
                    Work[j] += Allocation[i][j];
                Finish[i] = true;
                found = true;
                count++;
                break;
            }
        }
        if (!found) return false;  // Unsafe!
    }
    return true;  // Safe!
}

bool ResourceRequest(int i, int Request[]) {
    // Step 1: Validate
    if (Request > Need[i])
        error("Exceeded maximum claim");

    // Step 2: Check availability
    if (Request > Available)
        return WAIT;

    // Step 3: Simulate grant
    for (int j = 0; j < m; j++) {
        Available[j] -= Request[j];
        Allocation[i][j] += Request[j];
        Need[i][j] -= Request[j];
    }

    // Step 4: Safety check
    if (SafetyAlgorithm()) {
        return GRANTED;  // Keep changes
    } else {
        // Rollback
        for (int j = 0; j < m; j++) {
            Available[j] += Request[j];
            Allocation[i][j] -= Request[j];
            Need[i][j] += Request[j];
        }
        return WAIT;
    }
}
`}
      </pre>
    </div>

    {/* Limitations */}
    <h2 className="text-3xl font-bold mt-8">Limitations of Banker's Algorithm</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Maximum needs must be known:</strong> Processes must declare max at creation time</li>
      <li><strong>Fixed number of processes:</strong> Adding/removing processes is complex</li>
      <li><strong>Fixed number of resources:</strong> Resource count must remain constant</li>
      <li><strong>Conservative approach:</strong> May deny requests that would not cause deadlock</li>
      <li><strong>Processes must release resources:</strong> Algorithm assumes eventual completion</li>
      <li><strong>Overhead:</strong> O(n^2 * m) for each request may be too expensive</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Banker's Algorithm prevents deadlock by ensuring safe state is maintained</li>
      <li>Uses four data structures: Available, Max, Allocation, and Need</li>
      <li>Safety Algorithm finds if a safe sequence exists</li>
      <li>Resource Request Algorithm validates and simulates before granting</li>
      <li>Request is granted only if resulting state is safe</li>
      <li>Time complexity is O(n^2 * m) per resource request</li>
      <li>Requires advance knowledge of maximum resource needs</li>
    </ul>
  </div>
);

export default BankersAlgorithm;
