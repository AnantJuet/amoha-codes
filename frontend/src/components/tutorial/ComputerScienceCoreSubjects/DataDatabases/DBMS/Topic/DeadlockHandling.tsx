import React from "react";

const DeadlockHandling: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Deadlock Handling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A deadlock occurs when two or more transactions are waiting for each other to
      release locks, creating a cycle of dependencies where no transaction can proceed.
      Proper deadlock handling is essential for database reliability.
    </p>

    <h2 className="text-3xl font-bold mt-8">Deadlock Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Transaction T1:          Transaction T2:
Lock(A)
                         Lock(B)
Request Lock(B)
  -> Waiting for T2      Request Lock(A)
                           -> Waiting for T1

Deadlock! Both transactions are waiting for each other.

Wait-for Graph:
T1 -----> T2  (T1 waits for T2 to release B)
T2 -----> T1  (T2 waits for T1 to release A)

Cycle detected = Deadlock`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deadlock Handling Strategies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">When Used</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Prevention</td>
            <td className="p-3 border">Prevent deadlock from occurring</td>
            <td className="p-3 border">High-conflict systems</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Avoidance</td>
            <td className="p-3 border">Avoid unsafe states</td>
            <td className="p-3 border">Known resource needs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Detection</td>
            <td className="p-3 border">Detect and resolve deadlocks</td>
            <td className="p-3 border">Most common approach</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Timeout</td>
            <td className="p-3 border">Abort after waiting too long</td>
            <td className="p-3 border">Simple systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Deadlock Prevention</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Wait-Die Scheme (Older waits, Younger dies):
- If Ti (older) requests lock held by Tj (younger): Ti WAITS
- If Ti (younger) requests lock held by Tj (older): Ti ABORTS

Wound-Wait Scheme (Older wounds, Younger waits):
- If Ti (older) requests lock held by Tj (younger): Tj ABORTS
- If Ti (younger) requests lock held by Tj (older): Ti WAITS

Example with timestamps (lower = older):
T1 (ts=5), T2 (ts=10)

Wait-Die:
  T1 requests lock held by T2: T1 waits (older waits)
  T2 requests lock held by T1: T2 aborts (younger dies)

Wound-Wait:
  T1 requests lock held by T2: T2 aborts (older wounds)
  T2 requests lock held by T1: T2 waits (younger waits)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Deadlock Detection</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Wait-For Graph Algorithm:

1. Create a directed graph:
   - Node for each active transaction
   - Edge Ti -> Tj if Ti is waiting for Tj

2. Periodically check for cycles
   - Use DFS (Depth-First Search)
   - Cycle = Deadlock

3. If deadlock detected:
   - Select a victim transaction
   - Roll back the victim
   - Release victim's locks

Victim Selection Criteria:
- Transaction that has done least work
- Transaction with fewest locks
- Transaction with longest remaining time
- Youngest transaction (to avoid starvation)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Timeout-Based Approach</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed mb-2">Simple approach used by many databases:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Set a timeout period for lock waits</li>
        <li>If transaction waits longer than timeout, assume deadlock</li>
        <li>Abort the waiting transaction</li>
        <li>Transaction can retry after abort</li>
      </ul>
      <div className="mt-4 font-mono text-gray-900">
        <p>Pros: Simple, no detection overhead</p>
        <p>Cons: May abort transactions unnecessarily</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deadlock Recovery</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`After deadlock detection, recovery options:

1. Total Rollback:
   - Abort victim transaction completely
   - Release all its locks
   - Transaction must restart from beginning

2. Partial Rollback (Savepoints):
   - Roll back victim to a savepoint
   - Release locks acquired after savepoint
   - Continue from savepoint

Steps:
1. Select victim (minimize cost)
2. Rollback victim
3. Release victim's locks
4. Allow other transactions to proceed
5. Restart victim (if total rollback)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Deadlock = cycle in wait-for graph</li>
        <li>Prevention: Wait-Die and Wound-Wait schemes</li>
        <li>Detection: Periodically check for cycles</li>
        <li>Timeout: Simple but may have false positives</li>
        <li>Recovery requires selecting and rolling back a victim</li>
        <li>Avoid starvation by limiting rollback count</li>
      </ul>
    </div>
  </div>
);

export default DeadlockHandling;
