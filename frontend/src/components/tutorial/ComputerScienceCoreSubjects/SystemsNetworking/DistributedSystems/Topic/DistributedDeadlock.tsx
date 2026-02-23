import React from "react";

const DistributedDeadlock: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distributed Deadlock
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Distributed deadlock occurs when transactions across multiple nodes in a distributed
      system are waiting for each other in a circular fashion, with no transaction able
      to proceed. Unlike local deadlocks where a single system can detect and resolve the
      cycle, distributed deadlocks span multiple nodes, making detection and resolution
      significantly more challenging. Various strategies including centralized detection,
      distributed algorithms, and timeout-based prevention are used to handle this problem.
    </p>

    <h2 className="text-3xl font-bold mt-8">Distributed Deadlock Scenario</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed Deadlock Example:

       Node A                    Node B
+------------------+      +------------------+
|  Transaction T1  |      |  Transaction T2  |
|  holds: Lock(X)  |      |  holds: Lock(Y)  |
|  waits: Lock(Y)  |      |  waits: Lock(X)  |
+------------------+      +------------------+
        |                         |
        |   "I need Y"            |   "I need X"
        +----------> X <----------+
                     |
             DEADLOCK!

Neither T1 nor T2 can proceed:
- T1 waits for T2 to release Y
- T2 waits for T1 to release X
- Circular wait across nodes

Local View (incomplete):
Node A sees: T1 holds X, waits for Y (somewhere)
Node B sees: T2 holds Y, waits for X (somewhere)

Neither node sees the complete cycle!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Wait-For Graph (WFG)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Wait-For Graph: Deadlock Detection Tool

Nodes: Transactions
Edges: Ti -> Tj means Ti waits for Tj

Local WFG (Node A):     Local WFG (Node B):
    T1 -> T3                T2 -> T4
    T3 -> T5                T4 -> T1 (external)
    T5 -> ? (external)

Global WFG (Combined):
    +----+     +----+     +----+
    | T1 | --> | T3 | --> | T5 |
    +----+     +----+     +----+
      ^                      |
      |      +----+          |
      +------| T4 | <--------+
             +----+
               ^
               |
             +----+
             | T2 |
             +----+

Cycle: T1 -> T3 -> T5 -> T4 -> T1

DEADLOCK DETECTED!

Challenge: Building global WFG in distributed system
- No single node has complete view
- Edges cross node boundaries
- WFG changes dynamically`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deadlock Handling Strategies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Pros</th>
            <th className="p-3 border">Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Prevention</td>
            <td className="p-3 border">Design to avoid deadlock conditions</td>
            <td className="p-3 border">No runtime detection needed</td>
            <td className="p-3 border">Restrictive, lower concurrency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Avoidance</td>
            <td className="p-3 border">Don't grant requests that may deadlock</td>
            <td className="p-3 border">No deadlocks, no recovery</td>
            <td className="p-3 border">Requires future knowledge</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Detection</td>
            <td className="p-3 border">Find cycles, break them</td>
            <td className="p-3 border">High concurrency</td>
            <td className="p-3 border">Detection overhead, victim selection</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600">Timeout</td>
            <td className="p-3 border">Abort after waiting too long</td>
            <td className="p-3 border">Simple, no detection needed</td>
            <td className="p-3 border">May abort non-deadlocked transactions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deadlock Prevention: Wait-Die and Wound-Wait</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Timestamp-Based Prevention Schemes:

Each transaction has timestamp (older = lower timestamp)

WAIT-DIE (Non-preemptive):
If Ti wants lock held by Tj:
  If TS(Ti) < TS(Tj):  -- Ti is older
    Ti WAITS for Tj
  Else:                -- Ti is younger
    Ti DIES (aborts, restarts with same timestamp)

Example:
T1 (TS=100), T2 (TS=150)
T1 wants lock held by T2: T1 waits (100 < 150)
T2 wants lock held by T1: T2 dies (150 > 100)

WOUND-WAIT (Preemptive):
If Ti wants lock held by Tj:
  If TS(Ti) < TS(Tj):  -- Ti is older
    Ti WOUNDS Tj (Tj aborts, Ti gets lock)
  Else:                -- Ti is younger
    Ti WAITS for Tj

Example:
T1 (TS=100), T2 (TS=150)
T1 wants lock held by T2: T2 wounded, T1 proceeds
T2 wants lock held by T1: T2 waits (150 > 100)

Both schemes:
- Prevent cycles (older transactions never wait for younger)
- Older transactions have priority
- Aborted transactions keep timestamp (avoid starvation)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Centralized Deadlock Detection</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Centralized Deadlock Detector:

                +---------------------+
                | Deadlock Detector   |
                | (Central Server)    |
                | Global WFG          |
                +---------------------+
                    /     |     \\
                   /      |      \\
                  v       v       v
              Node A   Node B   Node C
              Local    Local    Local
              WFG      WFG      WFG

Protocol:
1. Each node maintains local wait-for graph
2. Periodically send local WFG to detector
3. Detector builds global WFG
4. Detector searches for cycles
5. If cycle found: Select victim, notify nodes

Building Global WFG:
Node A sends: T1->T3, T3->Tex (external)
Node B sends: T2->T1, Tex->T2
Detector: T1->T3->Tex->T2->T1 (CYCLE!)

Challenges:
- Single point of failure
- Communication overhead
- Delayed detection (periodic)
- False deadlocks (stale information)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed Detection: Edge Chasing</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Edge Chasing (Path Pushing) Algorithm:

Idea: Send probes along wait-for edges
If probe returns to originator: DEADLOCK!

Probe Format: (initiator, sender, receiver)

Example:
T1 at Node A waits for T2 at Node B
T2 at Node B waits for T3 at Node C
T3 at Node C waits for T1 at Node A

Step 1: T1 sends probe (T1, T1, T2) to Node B
Step 2: Node B: T2 waits for T3
        Forward (T1, T2, T3) to Node C
Step 3: Node C: T3 waits for T1
        Forward (T1, T3, T1) to Node A
Step 4: Node A receives probe initiated by T1
        Probe returned! DEADLOCK DETECTED!

Probe Propagation:
    Node A          Node B          Node C
    (T1)            (T2)            (T3)
      |               |               |
      | (T1,T1,T2)    |               |
      |-------------->|               |
      |               | (T1,T2,T3)    |
      |               |-------------->|
      |               |               | (T1,T3,T1)
      |<------------------------------|
      |                               |
   DEADLOCK!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Chandy-Misra-Haas Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Chandy-Misra-Haas: Distributed Detection for AND Model

AND Model: Process waits for ALL requested resources

Algorithm:
1. When Ti at site Si waits for Tj at site Sj:
   If Si != Sj (cross-site wait):
     Send probe(Ti, Ti, Tj) to Sj

2. When site Sk receives probe(Ti, Tm, Tn):
   If Tn is waiting for Tp:
     If Tp == Ti: DEADLOCK!
     Else if Tp is waiting (not local):
       Forward probe(Ti, Tn, Tp)

3. If Tn == Ti at any point: DEADLOCK

Pseudo-code:
On receiving probe(i, m, n) at site of process Pn:
  if Pn is blocked:
    if i == n:
      DEADLOCK detected
    else:
      for each process Pp that Pn is waiting for:
        if Pp is at different site:
          send probe(i, n, p) to site of Pp

Optimization: Only initiate probes from
lowest-numbered process in potential cycle
(reduces duplicate detection)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Phantom Deadlocks</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Phantom Deadlock: False Detection

Problem: Deadlock that appears to exist but doesn't

Scenario:
Time T0: T1 waits for T2 (Node A)
Time T1: T2 releases lock, T1 proceeds
Time T2: T2 waits for T3 (Node B)
Time T3: Detector sees T1->T2, T2->T3
         But T1->T2 is stale!

Timeline:
Node A: T1->T2 (reported) ... T1 proceeds (not reported yet)
Node B: T2->T3 (reported)
Detector: Sees T1->T2->T3 (phantom cycle?)

Causes:
1. Stale information due to network delay
2. Snapshot inconsistency across nodes
3. Timing of report collection

Prevention:
- Use timestamps on wait-for edges
- Verify deadlock before taking action
- Use global snapshot algorithms

Detection of Phantom:
Before aborting victim:
1. Query actual wait state
2. Confirm cycle still exists
3. Only then abort transaction`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Victim Selection</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Criterion</th>
            <th className="p-3 border">Select Transaction With</th>
            <th className="p-3 border">Rationale</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Least Work Done</td>
            <td className="p-3 border">Minimum CPU time used</td>
            <td className="p-3 border">Minimize wasted work</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fewest Locks</td>
            <td className="p-3 border">Minimum locks held</td>
            <td className="p-3 border">Unblock most transactions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Youngest</td>
            <td className="p-3 border">Most recent timestamp</td>
            <td className="p-3 border">Older transactions prioritized</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Farthest from Completion</td>
            <td className="p-3 border">Most remaining operations</td>
            <td className="p-3 border">Near-complete transactions preserved</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fewest Restarts</td>
            <td className="p-3 border">Least times aborted</td>
            <td className="p-3 border">Prevent starvation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timeout-Based Approach</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Timeout: Simple Deadlock Resolution

Strategy: Abort transactions that wait too long

Implementation:
set_timeout(transaction, duration)
on_timeout:
  abort(transaction)
  restart(transaction)

Advantages:
- Simple to implement
- No detection overhead
- Works for any deadlock

Disadvantages:
- May abort non-deadlocked transactions
  (just slow, not deadlocked)
- Timeout too short: Unnecessary aborts
- Timeout too long: Poor responsiveness

Adaptive Timeout:
- Monitor average lock wait time
- Adjust timeout dynamically
- Longer timeout for long transactions

timeout = base_timeout + (locks_held * factor)

Used in Practice:
- Many distributed databases use timeout
- Often combined with detection
- Simple, predictable behavior
- Acceptable for most applications`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detection Algorithm Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Messages</th>
            <th className="p-3 border">Detection Time</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Centralized</td>
            <td className="p-3 border">Periodic</td>
            <td className="p-3 border">O(n) per round</td>
            <td className="p-3 border">Depends on period</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Edge Chasing</td>
            <td className="p-3 border">On-demand</td>
            <td className="p-3 border">O(cycle length)</td>
            <td className="p-3 border">Fast (immediate)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Chandy-Misra-Haas</td>
            <td className="p-3 border">On-demand</td>
            <td className="p-3 border">O(edges in WFG)</td>
            <td className="p-3 border">Fast</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Timeout</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Timeout duration</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Distributed deadlock spans multiple nodes with circular waits</li>
        <li>No single node has complete view of the wait-for graph</li>
        <li>Prevention (Wait-Die, Wound-Wait) avoids deadlocks using timestamps</li>
        <li>Centralized detection collects local WFGs at a coordinator</li>
        <li>Edge chasing sends probes along wait-for edges</li>
        <li>Phantom deadlocks can occur due to stale information</li>
        <li>Victim selection minimizes cost of breaking deadlock</li>
        <li>Timeout is simple but may abort non-deadlocked transactions</li>
      </ul>
    </div>
  </div>
);

export default DistributedDeadlock;
