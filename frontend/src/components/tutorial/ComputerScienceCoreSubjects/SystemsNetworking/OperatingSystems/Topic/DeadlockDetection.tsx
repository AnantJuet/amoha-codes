import React from 'react';

const DeadlockDetection: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Deadlock Detection
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Deadlock detection is a strategy where the system allows deadlocks to occur but
      periodically checks for their existence. Once a deadlock is detected, the system
      takes corrective action through recovery mechanisms. This approach requires
      different algorithms depending on whether resources have single or multiple instances.
    </p>

    {/* Overview */}
    <h2 className="text-3xl font-bold mt-8">Detection vs Avoidance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Comparison:
─────────────────────────────────────────────────────────────

┌────────────────┬──────────────────────────────────────────┐
│   Avoidance    │              Detection                   │
├────────────────┼──────────────────────────────────────────┤
│ Prevents       │ Allows deadlocks to occur                │
│ deadlock       │                                          │
├────────────────┼──────────────────────────────────────────┤
│ Requires max   │ No advance information needed            │
│ resource need  │                                          │
├────────────────┼──────────────────────────────────────────┤
│ Conservative   │ More optimistic resource allocation      │
├────────────────┼──────────────────────────────────────────┤
│ Lower          │ Higher throughput, but recovery          │
│ overhead       │ cost when deadlock occurs                │
└────────────────┴──────────────────────────────────────────┘

When to use Detection:
─────────────────────────────────────────────────────────────
  - Maximum resource needs unknown
  - Deadlocks are rare
  - Recovery is simple/inexpensive
  - High resource utilization is priority
`}
      </pre>
    </div>

    {/* Single Instance - Wait-For Graph */}
    <h2 className="text-3xl font-bold mt-8">Single Instance Resources: Wait-For Graph</h2>
    <p className="leading-relaxed">
      When each resource type has only one instance, we can use a simplified graph called
      the Wait-For Graph, derived from the Resource Allocation Graph.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Wait-For Graph Construction:
─────────────────────────────────────────────────────────────

Step 1: Start with Resource Allocation Graph (RAG)
Step 2: Remove resource nodes
Step 3: Create edge Pi → Pj if Pi is waiting for a resource
        held by Pj

    Resource Allocation Graph:        Wait-For Graph:
    ───────────────────────────       ─────────────────

         ┌───┐                            ┌────┐
         │R1 │                            │ P1 │
         └─┬─┘                            └────┘
           │                                 │
           ▼                                 │
        ┌────┐    ┌───┐                     ▼
        │ P1 │◄───│R2 │                  ┌────┐
        └────┘    └───┘                  │ P2 │
           │         ▲                   └────┘
           │         │                      │
           ▼         │                      │
        ┌────┐       │                      ▼
        │ P2 │───────┘                   ┌────┐
        └────┘                           │ P3 │
           │                             └────┘
           ▼
        ┌───┐
        │R3 │
        └───┘
           │
           ▼
        ┌────┐
        │ P3 │
        └────┘

    P1 has R1, wants R2 (held by P2)  →  P1 → P2
    P2 has R2, wants R3 (held by P3)  →  P2 → P3
`}
      </pre>
    </div>

    {/* Cycle Detection */}
    <h3 className="text-2xl font-semibold mt-6">Cycle Detection Algorithm</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Deadlock exists if and only if Wait-For Graph contains a cycle.
─────────────────────────────────────────────────────────────

Algorithm: DFS-based Cycle Detection
─────────────────────────────────────────────────────────────

function detectDeadlock():
    for each process P in system:
        visited[P] = false
        inStack[P] = false

    for each process P in system:
        if not visited[P]:
            if hasCycle(P):
                return DEADLOCK_DETECTED

    return NO_DEADLOCK

function hasCycle(P):
    visited[P] = true
    inStack[P] = true

    for each process Q that P is waiting for:
        if not visited[Q]:
            if hasCycle(Q):
                return true
        else if inStack[Q]:
            return true  // Cycle found!

    inStack[P] = false
    return false

Complexity: O(V + E) where V = processes, E = wait edges
`}
      </pre>
    </div>

    {/* Single Instance Example */}
    <h3 className="text-2xl font-semibold mt-6">Single Instance Example</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Example: Cycle Detection
─────────────────────────────────────────────────────────────

System State:
    P1 holds R1, requests R2 (held by P2)
    P2 holds R2, requests R3 (held by P3)
    P3 holds R3, requests R1 (held by P1)
    P4 holds R4, requests R2 (held by P2)

Wait-For Graph:
─────────────────────────────────────────────────────────────

        ┌────┐ ◄─────────────┐
        │ P1 │               │
        └────┘               │
           │                 │
           │                 │
           ▼                 │
        ┌────┐            ┌────┐
        │ P2 │ ◄──────────│ P4 │
        └────┘            └────┘
           │
           │
           ▼
        ┌────┐
        │ P3 │
        └────┘
           │
           │
           └─────────────────┘ (back to P1)

DFS Traversal:
─────────────────────────────────────────────────────────────

Start from P1:
    Visit P1, mark in stack
    P1 → P2: Visit P2, mark in stack
    P2 → P3: Visit P3, mark in stack
    P3 → P1: P1 already in stack!

    CYCLE DETECTED: P1 → P2 → P3 → P1

DEADLOCK EXISTS involving processes {P1, P2, P3}
Note: P4 is NOT in the deadlock (it waits for P2 but isn't part of cycle)
`}
      </pre>
    </div>

    {/* Multiple Instance - Detection Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Multiple Instance Resources: Detection Algorithm</h2>
    <p className="leading-relaxed">
      When resources may have multiple instances, we need an algorithm similar to
      the Banker's Safety Algorithm but optimized for detection rather than avoidance.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Data Structures (n processes, m resource types):
─────────────────────────────────────────────────────────────

    Available[m]     - Currently available instances of each type
    Allocation[n][m] - Resources currently allocated to each process
    Request[n][m]    - Current requests (NOT maximum, just current)

Note: Unlike Banker's Algorithm, we use Request (current pending)
      instead of Need (maximum remaining).

─────────────────────────────────────────────────────────────
Detection Algorithm:
─────────────────────────────────────────────────────────────

1. Initialize:
   Work[m] = Available[m]
   For each process i:
       If Allocation[i] == 0:
           Finish[i] = true   // Process not holding any resources
       Else:
           Finish[i] = false

2. Find an index i such that both:
   (a) Finish[i] == false
   (b) Request[i] <= Work

   If no such i exists, go to step 4.

3. Assume process i will complete:
   Work = Work + Allocation[i]
   Finish[i] = true
   Go to step 2.

4. If Finish[i] == false for some i:
   Process i is DEADLOCKED
   All processes with Finish[i] = false are in deadlock.
`}
      </pre>
    </div>

    {/* Multiple Instance Example */}
    <h2 className="text-3xl font-bold mt-8">Multiple Instance Detection Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Example System:
─────────────────────────────────────────────────────────────
    5 Processes: P0, P1, P2, P3, P4
    3 Resource Types: A (7), B (2), C (6)

Current State:
─────────────────────────────────────────────────────────────
           Allocation      Request
           A   B   C      A   B   C
         ┌───────────┐  ┌───────────┐
    P0   │ 0   1   0 │  │ 0   0   0 │  (no request pending)
    P1   │ 2   0   0 │  │ 2   0   2 │
    P2   │ 3   0   3 │  │ 0   0   0 │  (no request pending)
    P3   │ 2   1   1 │  │ 1   0   0 │
    P4   │ 0   0   2 │  │ 0   0   2 │
         └───────────┘  └───────────┘

    Total Allocated: A=7, B=2, C=6
    Available = [7-7, 2-2, 6-6] = [0, 0, 0]
`}
      </pre>
    </div>

    {/* Detection Algorithm Execution */}
    <h3 className="text-2xl font-semibold mt-6">Algorithm Execution</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Step 1: Initialize
─────────────────────────────────────────────────────────────
    Work = [0, 0, 0]

    Check allocations:
    P0: Alloc=[0,1,0] != 0 → Finish[0] = false
    P1: Alloc=[2,0,0] != 0 → Finish[1] = false
    P2: Alloc=[3,0,3] != 0 → Finish[2] = false
    P3: Alloc=[2,1,1] != 0 → Finish[3] = false
    P4: Alloc=[0,0,2] != 0 → Finish[4] = false

    Finish = [F, F, F, F, F]

Step 2: Find process where Request <= Work
─────────────────────────────────────────────────────────────
Iteration 1:
    P0: Finish[0]=F, Request[0]=[0,0,0] <= Work=[0,0,0]? YES ✓
    SELECT P0

Step 3: P0 can complete
─────────────────────────────────────────────────────────────
    Work = Work + Allocation[0] = [0,0,0] + [0,1,0] = [0, 1, 0]
    Finish[0] = true
    Finish = [T, F, F, F, F]

Step 2: Continue search
─────────────────────────────────────────────────────────────
Iteration 2:
    P1: Request[1]=[2,0,2] <= Work=[0,1,0]? 2>0 NO ✗
    P2: Request[2]=[0,0,0] <= Work=[0,1,0]? YES ✓
    SELECT P2

Step 3: P2 can complete
─────────────────────────────────────────────────────────────
    Work = [0,1,0] + [3,0,3] = [3, 1, 3]
    Finish[2] = true
    Finish = [T, F, T, F, F]

Step 2: Continue search
─────────────────────────────────────────────────────────────
Iteration 3:
    P1: Request[1]=[2,0,2] <= Work=[3,1,3]? YES ✓
    SELECT P1

Step 3: P1 can complete
─────────────────────────────────────────────────────────────
    Work = [3,1,3] + [2,0,0] = [5, 1, 3]
    Finish[1] = true
    Finish = [T, T, T, F, F]

Step 2: Continue search
─────────────────────────────────────────────────────────────
Iteration 4:
    P3: Request[3]=[1,0,0] <= Work=[5,1,3]? YES ✓
    SELECT P3

Step 3: P3 can complete
─────────────────────────────────────────────────────────────
    Work = [5,1,3] + [2,1,1] = [7, 2, 4]
    Finish[3] = true
    Finish = [T, T, T, T, F]

Step 2: Continue search
─────────────────────────────────────────────────────────────
Iteration 5:
    P4: Request[4]=[0,0,2] <= Work=[7,2,4]? YES ✓
    SELECT P4

Step 3: P4 can complete
─────────────────────────────────────────────────────────────
    Work = [7,2,4] + [0,0,2] = [7, 2, 6]
    Finish[4] = true
    Finish = [T, T, T, T, T]

Step 4: Final Check
─────────────────────────────────────────────────────────────
    All Finish[i] = true

RESULT: NO DEADLOCK
`}
      </pre>
    </div>

    {/* Deadlock Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Deadlock Detected</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Modified Example (with deadlock):
─────────────────────────────────────────────────────────────
    Change P2's request to [0, 0, 1]

           Allocation      Request
           A   B   C      A   B   C
    P0   │ 0   1   0 │  │ 0   0   0 │
    P1   │ 2   0   0 │  │ 2   0   2 │
    P2   │ 3   0   3 │  │ 0   0   1 │  ← Changed!
    P3   │ 2   1   1 │  │ 1   0   0 │
    P4   │ 0   0   2 │  │ 0   0   2 │

    Available = [0, 0, 0]

Detection Algorithm:
─────────────────────────────────────────────────────────────

Step 1: Initialize
    Work = [0, 0, 0]
    Finish = [F, F, F, F, F]

Step 2: Find process
    P0: Request=[0,0,0] <= [0,0,0]? YES ✓
    SELECT P0
    Work = [0,0,0] + [0,1,0] = [0, 1, 0]
    Finish = [T, F, F, F, F]

Step 2: Continue
    P1: Request=[2,0,2] <= [0,1,0]? NO ✗
    P2: Request=[0,0,1] <= [0,1,0]? 1>0 NO ✗
    P3: Request=[1,0,0] <= [0,1,0]? 1>0 NO ✗
    P4: Request=[0,0,2] <= [0,1,0]? 2>0 NO ✗

    NO PROCESS CAN BE SELECTED!

Step 4: Check Finish
    Finish = [T, F, F, F, F]
    Not all true!

RESULT: DEADLOCK DETECTED!
    Deadlocked processes: {P1, P2, P3, P4}
`}
      </pre>
    </div>

    {/* When to Invoke Detection */}
    <h2 className="text-3xl font-bold mt-8">When to Invoke Detection Algorithm</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">When Invoked</th>
            <th className="p-3 border">Pros</th>
            <th className="p-3 border">Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Every Request</td>
            <td className="p-3 border">On each resource request</td>
            <td className="p-3 border">Immediate detection</td>
            <td className="p-3 border">High overhead</td>
          </tr>
          <tr>
            <td className="p-3 border">Periodic</td>
            <td className="p-3 border">Every N seconds/minutes</td>
            <td className="p-3 border">Balanced overhead</td>
            <td className="p-3 border">Delayed detection</td>
          </tr>
          <tr>
            <td className="p-3 border">CPU-based</td>
            <td className="p-3 border">CPU drops below threshold</td>
            <td className="p-3 border">Symptom-based</td>
            <td className="p-3 border">May miss deadlocks</td>
          </tr>
          <tr>
            <td className="p-3 border">Request Denial</td>
            <td className="p-3 border">When request cannot be granted</td>
            <td className="p-3 border">Targeted checking</td>
            <td className="p-3 border">May still miss some</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Single vs Multiple Instance Detection</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Single Instance</th>
            <th className="p-3 border">Multiple Instance</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Method</td>
            <td className="p-3 border">Wait-For Graph</td>
            <td className="p-3 border">Detection Algorithm</td>
          </tr>
          <tr>
            <td className="p-3 border">Detection Condition</td>
            <td className="p-3 border">Cycle in graph</td>
            <td className="p-3 border">Cannot complete all processes</td>
          </tr>
          <tr>
            <td className="p-3 border">Time Complexity</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(n^2 * m)</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Required</td>
            <td className="p-3 border">Who waits for whom</td>
            <td className="p-3 border">Allocation, Request, Available</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Detection allows deadlocks to occur, then identifies them</li>
      <li>Single instance: Use Wait-For Graph and detect cycles</li>
      <li>Multiple instance: Use detection algorithm similar to Safety Algorithm</li>
      <li>Detection algorithm uses current Request, not maximum Need</li>
      <li>Processes with no allocation are assumed to be able to finish</li>
      <li>Deadlocked processes are those with Finish[i] = false after algorithm</li>
      <li>Detection frequency is a trade-off between overhead and detection delay</li>
      <li>After detection, recovery mechanisms must be applied</li>
    </ul>
  </div>
);

export default DeadlockDetection;
