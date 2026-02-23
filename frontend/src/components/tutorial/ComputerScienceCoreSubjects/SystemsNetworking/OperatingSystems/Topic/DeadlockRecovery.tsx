import React from 'react';

const DeadlockRecovery: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Deadlock Recovery
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Once a deadlock is detected, the system must recover from it. Deadlock recovery
      involves breaking the circular wait condition by either terminating processes or
      preempting resources. The choice of recovery method depends on the system's
      requirements and the nature of the processes involved.
    </p>

    {/* Recovery Methods Overview */}
    <h2 className="text-3xl font-bold mt-8">Recovery Methods Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Two Main Recovery Approaches:
─────────────────────────────────────────────────────────────

┌────────────────────────────────────────────────────────────┐
│                     DEADLOCK RECOVERY                      │
├────────────────────────────────────────────────────────────┤
│                           │                                │
│    Process Termination    │      Resource Preemption       │
│                           │                                │
│   ┌─────────────────┐     │     ┌─────────────────┐       │
│   │ Abort ALL       │     │     │ Select victim   │       │
│   │ deadlocked      │     │     │ process         │       │
│   │ processes       │     │     └─────────────────┘       │
│   └─────────────────┘     │              │                │
│            OR             │              ▼                │
│   ┌─────────────────┐     │     ┌─────────────────┐       │
│   │ Abort ONE at    │     │     │ Rollback victim │       │
│   │ a time until    │     │     │ to safe state   │       │
│   │ deadlock broken │     │     └─────────────────┘       │
│   └─────────────────┘     │              │                │
│                           │              ▼                │
│                           │     ┌─────────────────┐       │
│                           │     │ May cause       │       │
│                           │     │ starvation      │       │
│                           │     └─────────────────┘       │
└────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Process Termination */}
    <h2 className="text-3xl font-bold mt-8">Method 1: Process Termination</h2>
    <p className="leading-relaxed">
      The simplest recovery method is to terminate one or more processes involved in
      the deadlock, thereby releasing their resources.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Option A: Abort All Deadlocked Processes</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Abort All Deadlocked Processes:
─────────────────────────────────────────────────────────────

    Deadlock Detected:  P1 ←→ P2 ←→ P3 ←→ P1 (cycle)

    Action: Terminate P1, P2, P3 simultaneously

    Before:                    After:
    ┌────┐    ┌────┐          ┌────┐    ┌────┐
    │ P1 │←──►│ P2 │          │ X  │    │ X  │
    └────┘    └────┘          └────┘    └────┘
       ▲         │
       │    ┌────┐             ┌────┐
       └────│ P3 │             │ X  │
            └────┘             └────┘

    All resources freed!

Advantages:
─────────────────────────────────────────────────────────────
    - Definitely breaks the deadlock
    - Simple to implement
    - Fast recovery

Disadvantages:
─────────────────────────────────────────────────────────────
    - High cost: All work done by processes is lost
    - May terminate processes that were almost done
    - Wasteful if only one process needed to break deadlock
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Option B: Abort One Process at a Time</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Abort One at a Time:
─────────────────────────────────────────────────────────────

    Repeat until deadlock is broken:
        1. Select a victim process from deadlocked set
        2. Terminate the victim
        3. Reclaim its resources
        4. Run detection algorithm again
        5. If deadlock still exists, repeat

    Example:
    ─────────────────────────────────────────────────────────

    Initial: {P1, P2, P3, P4} in deadlock

    Iteration 1: Abort P3
        Released resources may allow some processes to continue
        Run detection → {P1, P2, P4} still deadlocked

    Iteration 2: Abort P2
        Released resources break the wait cycle
        Run detection → No deadlock!

    Result: P1 and P4 can continue, only P2 and P3 lost

Advantages:
─────────────────────────────────────────────────────────────
    - Minimal termination (only as many as needed)
    - Potentially less work lost than aborting all

Disadvantages:
─────────────────────────────────────────────────────────────
    - Higher overhead (detection after each abort)
    - More complex to implement
    - Requires victim selection policy
`}
      </pre>
    </div>

    {/* Victim Selection Criteria */}
    <h2 className="text-3xl font-bold mt-8">Victim Selection Criteria</h2>
    <p className="leading-relaxed">
      When aborting processes one at a time, the system must decide which process to
      terminate. Several factors can be considered:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Factors for Selecting Victim:
─────────────────────────────────────────────────────────────

1. Priority of the Process
   ─────────────────────────────────────────────────────────
   Lower priority processes are preferred victims
   Cost: Loss of low-importance work

2. Time Consumed (CPU time, I/O done)
   ─────────────────────────────────────────────────────────
   Prefer aborting processes that have used less time
   Reasoning: Less work lost

3. Time Remaining (if known)
   ─────────────────────────────────────────────────────────
   Prefer aborting processes that are just starting
   vs. those almost complete

4. Resources Used
   ─────────────────────────────────────────────────────────
   Abort processes holding many resources
   More resources released = faster recovery

5. Resources Needed to Complete
   ─────────────────────────────────────────────────────────
   Prefer aborting processes needing many more resources
   They may cause future deadlocks

6. Number of Processes to be Terminated
   ─────────────────────────────────────────────────────────
   Choose victim that minimizes total processes aborted

7. Interactive vs. Batch
   ─────────────────────────────────────────────────────────
   Prefer aborting batch processes
   Interactive users notice delays more

Cost Function Example:
─────────────────────────────────────────────────────────────
    Cost(P) = w1 * priority(P)
            + w2 * time_consumed(P)
            + w3 * resources_held(P)
            + w4 * resources_needed(P)
            + w5 * process_type(P)

    Select P with MINIMUM cost as victim
`}
      </pre>
    </div>

    {/* Resource Preemption */}
    <h2 className="text-3xl font-bold mt-8">Method 2: Resource Preemption</h2>
    <p className="leading-relaxed">
      Instead of terminating processes, resources can be forcibly taken from some
      processes and given to others to break the deadlock.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Resource Preemption Process:
─────────────────────────────────────────────────────────────

    1. SELECT VICTIM
       Choose which process will have resources preempted
       Use similar criteria as process termination

    2. ROLLBACK
       Take resources from victim
       Roll victim back to a safe state where it can restart

    3. STARVATION PREVENTION
       Ensure same process is not always selected as victim
       Track number of rollbacks per process

─────────────────────────────────────────────────────────────

Example: Preemption Flow
─────────────────────────────────────────────────────────────

    Deadlock: P1 holds R1, wants R2
              P2 holds R2, wants R1

    Before Preemption:
    ┌────┐         ┌────┐
    │ P1 │─────────│ R1 │ (allocated)
    └────┘         └────┘
       │
       │ wants
       ▼
    ┌────┐         ┌────┐
    │ R2 │─────────│ P2 │ (allocated)
    └────┘         └────┘
                      │
                      │ wants R1
                      ▼

    Select P2 as victim, preempt R2:

    After Preemption:
    ┌────┐         ┌────┐
    │ P1 │─────────│ R1 │ (still has)
    └────┘         └────┘
       │
       │ gets R2
       ▼
    ┌────┐         ┌────┐
    │ R2 │         │ P2 │ ──► ROLLED BACK
    └────┘         └────┘     (lost R2)
       │
       └──────────►P1 (given to P1)

    P1 can now complete
    P2 must restart from checkpoint
`}
      </pre>
    </div>

    {/* Rollback Strategies */}
    <h3 className="text-2xl font-semibold mt-6">Rollback Strategies</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Rollback Options:
─────────────────────────────────────────────────────────────

Option 1: Total Rollback (Abort)
─────────────────────────────────────────────────────────────
    - Rollback to beginning of process
    - Restart from scratch
    - Simplest but most costly
    - Same as process termination

Option 2: Partial Rollback (Checkpoint)
─────────────────────────────────────────────────────────────
    - Roll back to most recent checkpoint
    - Checkpoint = saved state before resource acquisition
    - Less work lost than total rollback
    - Requires checkpointing mechanism

    Process Execution with Checkpoints:
    ──────────────────────────────────────────────────────

    Start ──► CP1 ──► Get R1 ──► CP2 ──► Get R2 ──► CP3
                                            │
                                            ▼ DEADLOCK!
                                         Rollback to CP2
                                            │
                                            ▼
                                    Resume from CP2
                                    (R1 still held, R2 released)

Checkpoint Requirements:
─────────────────────────────────────────────────────────────
    - Save process state (registers, memory)
    - Save resource allocation state
    - Must be taken at safe points (consistent state)
    - Storage overhead for checkpoints
`}
      </pre>
    </div>

    {/* Starvation Prevention */}
    <h2 className="text-3xl font-bold mt-8">Starvation Prevention</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Problem: Same Process Always Selected as Victim
─────────────────────────────────────────────────────────────

    If cost function always picks the same process,
    that process may never complete (starvation).

    Example:
        P1 has lowest priority
        Every deadlock → P1 is victim
        P1 restarts → deadlock again → P1 victim again
        P1 NEVER completes!

Solutions:
─────────────────────────────────────────────────────────────

Solution 1: Include Rollback Count in Cost
─────────────────────────────────────────────────────────────
    Cost(P) = base_cost(P) + k * rollback_count(P)

    As P is rolled back more, it becomes less likely victim

Solution 2: Maximum Rollback Limit
─────────────────────────────────────────────────────────────
    if rollback_count(P) > MAX_ROLLBACKS:
        P cannot be selected as victim
        Choose another process

Solution 3: Aging Mechanism
─────────────────────────────────────────────────────────────
    Decrease priority cost over time
    Eventually, even low-priority processes are protected

Example with Rollback Count:
─────────────────────────────────────────────────────────────
    Initially: P1 cost=10, P2 cost=15, P3 cost=20
    k = 5

    Deadlock 1: Select P1 (cost 10)
        P1 rollback_count = 1
        New P1 cost = 10 + 5*1 = 15

    Deadlock 2: P1=15, P2=15, P3=20
        Tie between P1, P2 → select P2
        P2 rollback_count = 1
        New P2 cost = 15 + 5*1 = 20

    Deadlock 3: P1=15, P2=20, P3=20
        Select P1 (lowest)
        P1 rollback_count = 2
        New P1 cost = 10 + 5*2 = 20

    Now all costs equal (20) - fairer distribution
`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Recovery Methods Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Work Lost</th>
            <th className="p-3 border">Overhead</th>
            <th className="p-3 border">Complexity</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Abort All</td>
            <td className="p-3 border">Maximum</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Simple systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Abort One-by-One</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">General use</td>
          </tr>
          <tr>
            <td className="p-3 border">Total Rollback</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">No checkpoints</td>
          </tr>
          <tr>
            <td className="p-3 border">Partial Rollback</td>
            <td className="p-3 border">Minimal</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Complex</td>
            <td className="p-3 border">Critical systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Practical Considerations */}
    <h2 className="text-3xl font-bold mt-8">Practical Considerations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Real-World Implementation Challenges:
─────────────────────────────────────────────────────────────

1. Determining Safe Rollback Point
   - Process may have performed I/O operations
   - External effects cannot be undone
   - Network messages already sent
   - Files already modified

2. Resource State Consistency
   - Resource may be in inconsistent state when preempted
   - Database transactions need special handling
   - Must ensure resource is usable after preemption

3. Communication with Rolled-Back Process
   - Process needs to know it was rolled back
   - May need to re-request resources
   - Must handle potential repeat deadlock

4. Overhead of Checkpointing
   - Frequent checkpoints = more overhead
   - Infrequent checkpoints = more work lost
   - Finding optimal checkpoint interval

Database Systems Example:
─────────────────────────────────────────────────────────────
    Transaction T1: UPDATE accounts SET balance = balance - 100
                    WHERE id = 1
    Transaction T2: UPDATE accounts SET balance = balance + 100
                    WHERE id = 2

    Deadlock between T1 and T2

    Recovery: Roll back one transaction (T2)
              Database returns to consistent state
              T2 must retry from beginning
              Uses transaction log for rollback
`}
      </pre>
    </div>

    {/* Combined Approach */}
    <h2 className="text-3xl font-bold mt-8">Combined Approach</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Typical System Recovery Strategy:
─────────────────────────────────────────────────────────────

    1. Detect deadlock using detection algorithm

    2. Determine minimum set of processes to resolve
       (may use heuristics)

    3. For each victim:
       a. If checkpoints exist → partial rollback
       b. If no checkpoints → total rollback (terminate)

    4. Re-run detection to verify deadlock broken

    5. Allow remaining processes to continue

    6. Rolled-back processes restart when resources available

Flowchart:
─────────────────────────────────────────────────────────────

    DEADLOCK DETECTED
           │
           ▼
    ┌───────────────────┐
    │ Select victim(s)  │
    │ using cost func   │
    └───────────────────┘
           │
           ▼
    ┌───────────────────┐
    │ Checkpoint exists?│
    └───────────────────┘
        │          │
       Yes         No
        │          │
        ▼          ▼
    ┌────────┐  ┌────────────┐
    │Partial │  │ Terminate  │
    │Rollback│  │ Process    │
    └────────┘  └────────────┘
        │          │
        └────┬─────┘
             │
             ▼
    ┌───────────────────┐
    │ Release resources │
    └───────────────────┘
             │
             ▼
    ┌───────────────────┐
    │ Re-run detection  │
    └───────────────────┘
        │          │
    Deadlock    No Deadlock
        │          │
        ▼          ▼
    (repeat)    RECOVERED!
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Recovery breaks deadlock by releasing resources from some processes</li>
      <li>Process termination: abort all deadlocked or one at a time</li>
      <li>Resource preemption: take resources without terminating process</li>
      <li>Victim selection considers priority, resources held, time consumed</li>
      <li>Rollback can be total (restart) or partial (checkpoint)</li>
      <li>Starvation must be prevented to avoid repeated victimization</li>
      <li>Include rollback count in cost function to ensure fairness</li>
      <li>Real systems often combine multiple recovery strategies</li>
    </ul>
  </div>
);

export default DeadlockRecovery;
