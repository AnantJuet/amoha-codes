import React from "react";

const Deadlock: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Deadlock in DBMS</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Deadlock occurs when two or more transactions are waiting for each other to release
      locks, creating a circular wait condition. None of the transactions can proceed,
      and the system must intervene to resolve the situation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Deadlock Conditions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Four Necessary Conditions for Deadlock:

1. Mutual Exclusion
   - At least one resource held in exclusive mode

2. Hold and Wait
   - Transaction holds resources while waiting for others

3. No Preemption
   - Resources cannot be forcibly taken away

4. Circular Wait
   - T1 → T2 → T3 → ... → T1 (waiting cycle)

All four conditions must exist for deadlock to occur.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deadlock Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Deadlock Scenario:

Time    T1                      T2
----    --                      --
t1      lock-X(A)
t2                              lock-X(B)
t3      lock-X(B) → WAIT
t4                              lock-X(A) → WAIT

Wait-For Graph:
    T1 --------> T2
    ^            |
    |            |
    +------------+

T1 waiting for T2 (needs B)
T2 waiting for T1 (needs A)
DEADLOCK!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deadlock Handling Strategies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">When to Use</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Prevention</td>
            <td className="p-3 border">Ensure one condition never holds</td>
            <td className="p-3 border">When deadlocks are frequent</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Avoidance</td>
            <td className="p-3 border">Don't grant requests that lead to deadlock</td>
            <td className="p-3 border">When resource needs known</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Detection</td>
            <td className="p-3 border">Detect and resolve deadlocks</td>
            <td className="p-3 border">When deadlocks are rare</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Timeout</td>
            <td className="p-3 border">Abort if waiting too long</td>
            <td className="p-3 border">Simple systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deadlock Prevention Schemes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Prevention using Timestamps:

Each transaction gets timestamp when it starts.
Ti older than Tj means TS(Ti) < TS(Tj)

1. Wait-Die Scheme:
   - Older transaction WAITS for younger
   - Younger transaction DIES (rollback) if blocked by older

   If Ti wants lock held by Tj:
     If TS(Ti) < TS(Tj): Ti waits
     If TS(Ti) > TS(Tj): Ti dies (rollback)

2. Wound-Wait Scheme:
   - Older transaction WOUNDS (rollback) younger
   - Younger transaction WAITS for older

   If Ti wants lock held by Tj:
     If TS(Ti) < TS(Tj): Ti wounds Tj (Tj rollback)
     If TS(Ti) > TS(Tj): Ti waits`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Wait-Die vs Wound-Wait</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example: T1(older) and T2(younger)

Scenario: T2 holds lock, T1 wants it

Wait-Die:
T1 (older) WAITS for T2 (younger)

Wound-Wait:
T1 (older) WOUNDS T2 (younger rolls back)

Scenario: T1 holds lock, T2 wants it

Wait-Die:
T2 (younger) DIES (rolls back)

Wound-Wait:
T2 (younger) WAITS for T1 (older)

Both prevent circular wait → No deadlock possible!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deadlock Detection</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Wait-For Graph:
- Nodes: Transactions
- Edge Ti → Tj: Ti is waiting for Tj

Detection Algorithm:
1. Build wait-for graph
2. Search for cycles
3. If cycle found → Deadlock exists

Example:
T1 → T2 → T3 → T1  (cycle = deadlock)

Resolution (Victim Selection):
- Choose transaction to rollback (victim)
- Criteria for victim selection:
  * Age of transaction
  * Number of updates made
  * Number of locks held
  * Cost to rollback

Roll back victim to break the cycle.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deadlock Recovery</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Total Rollback:</strong> Abort victim completely and restart</li>
        <li><strong>Partial Rollback:</strong> Rollback to savepoint before deadlock</li>
        <li><strong>Starvation Prevention:</strong> Track rollback count, prioritize victims</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Deadlock requires all four conditions</li>
        <li>Wait-Die: Younger dies, older waits</li>
        <li>Wound-Wait: Older wounds, younger waits</li>
        <li>Detection uses wait-for graph cycles</li>
        <li>Recovery involves victim selection and rollback</li>
      </ul>
    </div>
  </div>
);

export default Deadlock;
