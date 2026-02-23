import React from 'react';

const DeadlockAvoidance: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Deadlock Avoidance
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Deadlock avoidance is a strategy where the system dynamically examines resource allocation
      state to ensure that a circular wait condition can never occur. Unlike prevention, which
      restricts resource requests, avoidance requires advance information about resource usage
      and uses algorithms to decide whether granting a request is safe.
    </p>

    {/* Concept Overview */}
    <h2 className="text-3xl font-bold mt-8">Avoidance vs Prevention</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Comparison: Prevention vs Avoidance
─────────────────────────────────────────────────────────────

┌─────────────────┬────────────────────────────────────────┐
│    Approach     │              Description               │
├─────────────────┼────────────────────────────────────────┤
│   Prevention    │ Statically restricts how resources     │
│                 │ can be requested (structural rules)    │
├─────────────────┼────────────────────────────────────────┤
│   Avoidance     │ Dynamically decides at runtime if      │
│                 │ a request can be safely granted        │
└─────────────────┴────────────────────────────────────────┘

Prevention: "You can NEVER request resources this way"
Avoidance:  "You can request, but I'll decide if it's safe"
`}
      </pre>
    </div>

    {/* Requirements */}
    <h2 className="text-3xl font-bold mt-8">Requirements for Deadlock Avoidance</h2>
    <p className="leading-relaxed">
      Avoidance algorithms require advance information about resource usage patterns.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Required Information:
─────────────────────────────────────────────────────────────

1. Maximum Resource Need (Max)
   - Each process declares maximum resources it may need
   - Declared at process creation time
   - Example: "Process P1 may need at most 5 tape drives"

2. Currently Allocated Resources (Allocation)
   - Resources currently held by each process
   - Tracked dynamically by the system

3. Currently Available Resources (Available)
   - Resources not allocated to any process
   - Available = Total - Sum(Allocated)

4. Number of Resource Types
   - System must know all resource types
   - Examples: printers, tape drives, memory blocks
`}
      </pre>
    </div>

    {/* Safe State Concept */}
    <h2 className="text-3xl font-bold mt-8">Safe State Concept</h2>
    <p className="leading-relaxed">
      The core of deadlock avoidance is the concept of a <strong>safe state</strong>. A state
      is safe if the system can allocate resources to each process in some order and still
      avoid deadlock.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Safe State Definition:
─────────────────────────────────────────────────────────────

A system is in a SAFE STATE if there exists a SAFE SEQUENCE
<P1, P2, ..., Pn> of all processes such that:

For each Pi:
  The resources that Pi can still request can be satisfied by:
    - Currently available resources, PLUS
    - Resources held by all Pj where j < i

In other words:
  - Each process can get what it needs
  - Complete its execution
  - Release resources for the next process

─────────────────────────────────────────────────────────────
                    STATE DIAGRAM
─────────────────────────────────────────────────────────────

        ┌─────────────────────────────────────────┐
        │                                         │
        │              ALL STATES                 │
        │                                         │
        │    ┌───────────────────────────────┐   │
        │    │         SAFE STATES           │   │
        │    │                               │   │
        │    │   System can guarantee all    │   │
        │    │   processes will finish       │   │
        │    │                               │   │
        │    └───────────────────────────────┘   │
        │                                         │
        │    ┌──────────────┐                    │
        │    │   UNSAFE     │ ◄─ May lead to     │
        │    │   STATES     │    deadlock        │
        │    │              │                    │
        │    │  ┌────────┐  │                    │
        │    │  │DEADLOCK│  │ ◄─ Definitely      │
        │    │  └────────┘  │    stuck           │
        │    └──────────────┘                    │
        └─────────────────────────────────────────┘

IMPORTANT: Safe → No deadlock (guaranteed)
           Unsafe → Deadlock POSSIBLE (not certain)
           Deadlock → Subset of unsafe states
`}
      </pre>
    </div>

    {/* Safe State Example */}
    <h2 className="text-3xl font-bold mt-8">Safe State Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Example: Single Resource Type (12 Tape Drives)
─────────────────────────────────────────────────────────────

Initial State:
─────────────────────────────────────────────────────────────
    Process    Maximum Need    Current Holding
    ─────────────────────────────────────────
       P0          10               5
       P1           4               2
       P2           9               2
    ─────────────────────────────────────────
    Total Available: 12 - (5 + 2 + 2) = 3 tape drives

Is this state SAFE?
─────────────────────────────────────────────────────────────

Let's try to find a safe sequence:

Step 1: Check P1
    P1 needs at most: 4 - 2 = 2 more
    Available: 3 >= 2  ✓ CAN satisfy P1

    If P1 completes: Available = 3 + 2 = 5

Step 2: Check P0
    P0 needs at most: 10 - 5 = 5 more
    Available: 5 >= 5  ✓ CAN satisfy P0

    If P0 completes: Available = 5 + 5 = 10

Step 3: Check P2
    P2 needs at most: 9 - 2 = 7 more
    Available: 10 >= 7  ✓ CAN satisfy P2

    If P2 completes: Available = 10 + 2 = 12 (all resources)

SAFE SEQUENCE: <P1, P0, P2>
STATE IS SAFE!

─────────────────────────────────────────────────────────────
Visual Timeline:
─────────────────────────────────────────────────────────────

Available: 3    P1 runs    5    P0 runs    10   P2 runs   12
           │──────────────►│──────────────►│──────────────►│
                 +2              +5              +2
`}
      </pre>
    </div>

    {/* Unsafe State Example */}
    <h2 className="text-3xl font-bold mt-8">Unsafe State Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Example: Moving to Unsafe State
─────────────────────────────────────────────────────────────

From the previous safe state, suppose P2 requests 1 more drive:

Before Request:                After Granting Request:
─────────────────────          ─────────────────────
P0: 5/10  Available: 3         P0: 5/10  Available: 2
P1: 2/4                        P1: 2/4
P2: 2/9                        P2: 3/9
                               (Gave 1 drive to P2)

Is the NEW state safe?
─────────────────────────────────────────────────────────────

Try to find a safe sequence:

Check P0: needs 5 more, have 2  ✗ Cannot satisfy
Check P1: needs 2 more, have 2  ✓ Can satisfy → Available = 4
Check P2: needs 6 more, have 4  ✗ Cannot satisfy

After P1 completes (only option): Available = 4
  Check P0: needs 5 more, have 4  ✗ Cannot satisfy
  Check P2: needs 6 more, have 4  ✗ Cannot satisfy

NO SAFE SEQUENCE EXISTS!
STATE IS UNSAFE!

─────────────────────────────────────────────────────────────
The Avoidance Decision:
─────────────────────────────────────────────────────────────

When P2 requests 1 more drive:
  Current state: SAFE
  State after granting: UNSAFE

  DECISION: DENY the request!

  P2 must wait until granting would leave system in safe state.
`}
      </pre>
    </div>

    {/* Avoidance Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Avoidance Algorithms</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Available Algorithms:
─────────────────────────────────────────────────────────────

┌────────────────────────────────────────────────────────────┐
│ Algorithm                │ Resource Type    │ Method       │
├────────────────────────────────────────────────────────────┤
│ Resource Allocation      │ Single instance  │ Graph-based  │
│ Graph (RAG) with         │ per type         │ cycle        │
│ Claim Edges              │                  │ detection    │
├────────────────────────────────────────────────────────────┤
│ Banker's Algorithm       │ Multiple         │ Safe state   │
│                          │ instances        │ simulation   │
│                          │ per type         │              │
└────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Resource Allocation Graph with Claim Edges */}
    <h2 className="text-3xl font-bold mt-8">Resource Allocation Graph with Claim Edges</h2>
    <p className="leading-relaxed">
      For single-instance resources, we extend the RAG with claim edges (dashed arrows)
      that indicate a process may request a resource in the future.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Extended RAG Edges:
─────────────────────────────────────────────────────────────

    Request Edge:   Pi ─────────► Rj    (Pi wants Rj)
    Assignment:     Pi ◄───────── Rj    (Pi holds Rj)
    Claim Edge:     Pi - - - - -► Rj    (Pi may need Rj later)

Safety Check:
─────────────────────────────────────────────────────────────
When Pi requests Rj:
  1. Convert claim edge Pi ---► Rj to request edge Pi ───► Rj
  2. If request can be granted, temporarily convert to
     assignment: Pi ◄─── Rj
  3. Check if resulting graph has a CYCLE
  4. If cycle exists → UNSAFE → deny request
  5. If no cycle → SAFE → grant request

Example:
─────────────────────────────────────────────────────────────

    Initial State:            After P1 requests R2:
    ─────────────────         ─────────────────────

         ┌───┐                      ┌───┐
         │R1 │                      │R1 │
         └─┬─┘                      └─┬─┘
           │                          │
           ▼                          ▼
        ┌────┐    ┌───┐           ┌────┐    ┌───┐
        │ P1 │◄───│R2 │           │ P1 │◄───│R2 │
        └────┘    └───┘           └────┘    └───┘
           │         ▲               │         ▲
           │         │               │         │
           ▼         │               ▼         │
        ┌────┐       │            ┌────┐       │
        │ P2 │───────┘            │ P2 │───────┘
        └────┘                    └────┘
           ▲                         ▲
           └──── R1 assigned         └──── P2 has R1,
                 to P2                     wants R2

    P1 ←R2, P2 ←R1             CYCLE: P1→R1→P2→R2→P1
    P2 →R2 (request)           State is UNSAFE!

    If P1 had a claim edge     Do not grant P2's request
    P1 ---> R1                 for R2!
`}
      </pre>
    </div>

    {/* Banker's Algorithm Overview */}
    <h2 className="text-3xl font-bold mt-8">Banker's Algorithm Overview</h2>
    <p className="leading-relaxed">
      The Banker's Algorithm is the most commonly used avoidance algorithm, designed for
      systems with multiple instances of each resource type. It is named after a banking
      analogy where a banker must decide whether to grant loans.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Banking Analogy:
─────────────────────────────────────────────────────────────

    Bank has fixed capital (resources)

    Customers (processes) may request loans (resources)
    Each customer declares maximum credit line (max need)

    Bank grants loan only if:
      - It can still satisfy maximum possible requests
      - Of all existing customers
      - With remaining capital

    Otherwise, customer must wait

    Bank never enters state where it cannot satisfy
    at least one customer's maximum request.

─────────────────────────────────────────────────────────────

Data Structures (for n processes, m resource types):
─────────────────────────────────────────────────────────────

    Available[m]         Vector of available resources

    Max[n][m]           Maximum demand of each process

    Allocation[n][m]    Currently allocated to each process

    Need[n][m]          Remaining need of each process
                        Need[i][j] = Max[i][j] - Allocation[i][j]

Algorithm Components:
─────────────────────────────────────────────────────────────

    1. Safety Algorithm:
       Check if current state is safe

    2. Resource Request Algorithm:
       When Pi requests resources:
       - Pretend to grant the request
       - Run Safety Algorithm
       - If safe: grant for real
       - If unsafe: deny, Pi must wait
`}
      </pre>
    </div>

    {/* Algorithm Flow */}
    <h2 className="text-3xl font-bold mt-8">Avoidance Algorithm Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Request Handling Flowchart:
─────────────────────────────────────────────────────────────

    Process Pi requests resources Request[i]
                    │
                    ▼
    ┌───────────────────────────────────┐
    │ Is Request[i] <= Need[i]?         │
    │ (Asking for no more than declared)│
    └───────────────────────────────────┘
                    │
         No        │         Yes
         │         │          │
         ▼         │          ▼
    ┌─────────┐    │   ┌─────────────────────────────────┐
    │ ERROR!  │    │   │ Is Request[i] <= Available?     │
    │ Process │    │   │ (Are resources available now?)  │
    │exceeded │    │   └─────────────────────────────────┘
    │ claim   │    │              │
    └─────────┘    │     No      │         Yes
                   │      │       │          │
                   │      ▼       │          ▼
                   │ ┌─────────┐  │   ┌─────────────────┐
                   │ │Pi waits │  │   │ SIMULATE grant: │
                   │ │resources│  │   │ Update state    │
                   │ │not      │  │   │ temporarily     │
                   │ │available│  │   └─────────────────┘
                   │ └─────────┘  │          │
                   │              │          ▼
                   │              │   ┌─────────────────┐
                   │              │   │ Run SAFETY      │
                   │              │   │ ALGORITHM       │
                   │              │   └─────────────────┘
                   │              │          │
                   │              │   Safe   │   Unsafe
                   │              │    │     │      │
                   │              │    ▼     │      ▼
                   │              │ ┌──────┐ │ ┌────────┐
                   │              │ │GRANT │ │ │ DENY   │
                   │              │ │for   │ │ │ Request│
                   │              │ │real  │ │ │ Pi     │
                   │              │ └──────┘ │ │ waits  │
                   │              │          │ └────────┘
                   │              │          │
                   └──────────────┴──────────┘
`}
      </pre>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Flexibility</td>
            <td className="p-3 border">Less restrictive than prevention</td>
            <td className="p-3 border">Requires advance knowledge of max needs</td>
          </tr>
          <tr>
            <td className="p-3 border">Resource Use</td>
            <td className="p-3 border">Better utilization than prevention</td>
            <td className="p-3 border">Conservative; may deny safe requests</td>
          </tr>
          <tr>
            <td className="p-3 border">Overhead</td>
            <td className="p-3 border">Only runs on resource requests</td>
            <td className="p-3 border">O(n^2 * m) per request</td>
          </tr>
          <tr>
            <td className="p-3 border">Guarantees</td>
            <td className="p-3 border">No deadlock ever occurs</td>
            <td className="p-3 border">Fixed number of processes/resources</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Practical Considerations */}
    <h2 className="text-3xl font-bold mt-8">Practical Considerations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
When to Use Deadlock Avoidance:
─────────────────────────────────────────────────────────────

SUITABLE when:
  - Maximum resource needs can be determined in advance
  - Number of processes is relatively fixed
  - Number of resources is relatively fixed
  - Deadlock cost is high (critical systems)
  - Resources are expensive (databases, banking)

NOT SUITABLE when:
  - Process count changes dynamically
  - Resource needs are unpredictable
  - Overhead cannot be tolerated
  - Resources are cheap (easier to add more)

Real-World Usage:
─────────────────────────────────────────────────────────────
  - Database systems (lock management)
  - Real-time embedded systems
  - Financial transaction systems
  - Air traffic control systems
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Avoidance dynamically decides whether to grant resource requests</li>
      <li>Requires advance declaration of maximum resource needs</li>
      <li>A safe state guarantees processes can complete without deadlock</li>
      <li>Unsafe state means deadlock is possible but not certain</li>
      <li>RAG with claim edges works for single-instance resources</li>
      <li>Banker's Algorithm handles multiple instances per resource type</li>
      <li>Avoidance is conservative: may deny requests that would not cause deadlock</li>
      <li>Overhead is O(n^2 * m) per resource request</li>
    </ul>
  </div>
);

export default DeadlockAvoidance;
