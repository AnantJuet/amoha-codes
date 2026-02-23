import React from 'react';

const DeadlockConditions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Necessary Conditions for Deadlock
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      For a deadlock to occur, four necessary conditions must hold simultaneously. These
      conditions were first described by Edward Coffman in 1971 and are known as the
      Coffman Conditions. Understanding these conditions is essential for preventing,
      avoiding, and detecting deadlocks.
    </p>

    {/* The Four Conditions */}
    <h2 className="text-3xl font-bold mt-8">The Four Necessary Conditions</h2>
    <p className="leading-relaxed">
      A deadlock can occur if and only if ALL four of the following conditions hold
      simultaneously:
    </p>

    {/* Condition 1: Mutual Exclusion */}
    <h2 className="text-3xl font-bold mt-8">1. Mutual Exclusion</h2>
    <p className="leading-relaxed">
      At least one resource must be held in a non-sharable mode. Only one process can
      use the resource at a time. If another process requests the resource, it must wait.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Mutual Exclusion Example:
─────────────────────────────────────────────────────────────

    ┌───────────────┐         ┌───────────────┐
    │   Process P1  │         │   Process P2  │
    │               │         │               │
    │   Using       │         │   Waiting     │
    │   Printer     │         │   for         │
    │               │         │   Printer     │
    └───────────────┘         └───────────────┘
           │                         │
           │    ┌─────────────┐      │
           └───►│   PRINTER   │◄─────┘
                │  (1 only)   │
                │             │
                │  Held by P1 │
                └─────────────┘

Only ONE process can use the printer at a time.
P2 must wait until P1 releases it.
`}
      </pre>
    </div>

    {/* Condition 2: Hold and Wait */}
    <h2 className="text-3xl font-bold mt-8">2. Hold and Wait</h2>
    <p className="leading-relaxed">
      A process must be holding at least one resource and waiting to acquire additional
      resources that are currently being held by other processes.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Hold and Wait Example:
─────────────────────────────────────────────────────────────

    ┌───────────────────────────────────┐
    │          Process P1               │
    │                                   │
    │   HOLDING: Resource A             │
    │   WAITING: Resource B             │
    │                                   │
    └───────────────────────────────────┘
           │                    ▲
           │ holds              │ wants
           ▼                    │
    ┌────────────┐       ┌────────────┐
    │ Resource A │       │ Resource B │
    └────────────┘       └────────────┘
                               │
                               │ held by P2
                               ▼
                    ┌───────────────────────────────────┐
                    │          Process P2               │
                    └───────────────────────────────────┘

P1 holds A while waiting for B (held by P2)
`}
      </pre>
    </div>

    {/* Condition 3: No Preemption */}
    <h2 className="text-3xl font-bold mt-8">3. No Preemption</h2>
    <p className="leading-relaxed">
      Resources cannot be forcibly taken away from a process. A resource can only be
      released voluntarily by the process holding it, after it has completed its task.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
No Preemption:
─────────────────────────────────────────────────────────────

    ┌───────────────┐         ┌────────────┐
    │   Process P1  │────────►│  Resource  │
    │   (holding)   │         │  (locked)  │
    └───────────────┘         └────────────┘
                                    │
                                    │ Cannot be
                                    │ forcibly taken
                                    ▼
                              ┌────────────┐
                              │     OS     │
                              │ (no power  │
                              │ to preempt)│
                              └────────────┘

The OS cannot take the resource away from P1.
Only P1 can voluntarily release it.

Contrast with Preemptable Resources:
─────────────────────────────────────────────────────────────
CPU can be preempted (context switch)
Memory can be swapped (with proper handling)
But: Printer mid-job cannot be preempted!
`}
      </pre>
    </div>

    {/* Condition 4: Circular Wait */}
    <h2 className="text-3xl font-bold mt-8">4. Circular Wait</h2>
    <p className="leading-relaxed">
      There exists a set of waiting processes {'{P0, P1, ..., Pn}'} such that P0 is waiting
      for a resource held by P1, P1 is waiting for a resource held by P2, ..., and Pn
      is waiting for a resource held by P0.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Circular Wait (3 Processes):
─────────────────────────────────────────────────────────────

                    ┌─────────────┐
                    │     P0      │
                    │  Holds: R0  │
                    │  Wants: R1  │
                    └──────┬──────┘
                           │
                           │ waits for
                           ▼
    ┌─────────────┐       R1       ┌─────────────┐
    │     P2      │◄──────────────│     P1      │
    │  Holds: R2  │  waits for    │  Holds: R1  │
    │  Wants: R0  │               │  Wants: R2  │
    └──────┬──────┘               └──────┬──────┘
           │                             │
           │          waits for          │
           └──────────────►R2◄───────────┘


    P0 ──waits──► P1 ──waits──► P2 ──waits──► P0
    │                                         │
    └─────────────────────────────────────────┘
               CIRCULAR WAIT
`}
      </pre>
    </div>

    {/* Summary Table */}
    <h2 className="text-3xl font-bold mt-8">Summary of Conditions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Condition</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Key Point</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Mutual Exclusion</td>
            <td className="p-3 border">Resource is non-sharable</td>
            <td className="p-3 border">Only one user at a time</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Hold and Wait</td>
            <td className="p-3 border">Hold resource while waiting for another</td>
            <td className="p-3 border">Process has and wants more</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">No Preemption</td>
            <td className="p-3 border">Cannot force release of resource</td>
            <td className="p-3 border">Voluntary release only</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Circular Wait</td>
            <td className="p-3 border">Cycle in wait graph</td>
            <td className="p-3 border">Chain loops back</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Example: Complete Deadlock */}
    <h2 className="text-3xl font-bold mt-8">Complete Deadlock Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Database Transaction Deadlock:
─────────────────────────────────────────────────────────────
Transaction T1:                Transaction T2:
  BEGIN                          BEGIN
  UPDATE Account SET             UPDATE Account SET
    balance=balance-100            balance=balance+100
    WHERE id=1;                    WHERE id=2;
  (T1 locks Row 1)               (T2 locks Row 2)

  UPDATE Account SET             UPDATE Account SET
    balance=balance+100            balance=balance-100
    WHERE id=2;                    WHERE id=1;
  (T1 waits for Row 2)           (T2 waits for Row 1)
  ...blocked...                  ...blocked...

Checking the Four Conditions:
─────────────────────────────────────────────────────────────
1. Mutual Exclusion:  Row locks are exclusive (only one writer)
2. Hold and Wait:     T1 holds Row 1, waits for Row 2
                      T2 holds Row 2, waits for Row 1
3. No Preemption:     Cannot force a transaction to give up its lock
4. Circular Wait:     T1 → Row 2 → T2 → Row 1 → T1

ALL FOUR CONDITIONS MET → DEADLOCK!
`}
      </pre>
    </div>

    {/* Necessary vs Sufficient */}
    <h2 className="text-3xl font-bold mt-8">Necessary vs Sufficient</h2>
    <p className="leading-relaxed">
      These four conditions are <strong>necessary</strong> but not <strong>sufficient</strong>:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>All four present:</strong> Deadlock <em>may</em> occur (not guaranteed)
      </li>
      <li>
        <strong>Any one missing:</strong> Deadlock <em>cannot</em> occur
      </li>
    </ul>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
               ┌────────────────────────┐
               │   All 4 Conditions     │
               │        Present         │
               └───────────┬────────────┘
                           │
                           ▼
               ┌────────────────────────┐
               │  Deadlock is POSSIBLE  │ ← Not guaranteed
               │  (may or may not occur)│
               └────────────────────────┘

               ┌────────────────────────┐
               │  Any Condition ABSENT  │
               └───────────┬────────────┘
                           │
                           ▼
               ┌────────────────────────┐
               │ Deadlock is IMPOSSIBLE │ ← Guaranteed
               └────────────────────────┘
`}
      </pre>
    </div>

    {/* Breaking Each Condition */}
    <h2 className="text-3xl font-bold mt-8">Strategies for Breaking Each Condition</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Condition</th>
            <th className="p-3 border">Prevention Strategy</th>
            <th className="p-3 border">Feasibility</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Mutual Exclusion</td>
            <td className="p-3 border">Use sharable resources, spooling</td>
            <td className="p-3 border">Limited (some resources inherently exclusive)</td>
          </tr>
          <tr>
            <td className="p-3 border">Hold and Wait</td>
            <td className="p-3 border">Request all at once, or release before new request</td>
            <td className="p-3 border">Possible but wasteful</td>
          </tr>
          <tr>
            <td className="p-3 border">No Preemption</td>
            <td className="p-3 border">Allow preemption of resources</td>
            <td className="p-3 border">Only for some resource types</td>
          </tr>
          <tr>
            <td className="p-3 border">Circular Wait</td>
            <td className="p-3 border">Impose ordering on resource requests</td>
            <td className="p-3 border">Practical and commonly used</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>All four Coffman conditions must be present for deadlock to occur</li>
      <li>Breaking any one condition prevents deadlock</li>
      <li>The conditions are necessary but not sufficient</li>
      <li>Different conditions have different ease of prevention</li>
      <li>Circular wait prevention is the most practical approach</li>
    </ul>
  </div>
);

export default DeadlockConditions;
