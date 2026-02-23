import React from "react";

const TimestampProtocols: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Timestamp-Based Protocols</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Timestamp-based protocols use timestamps to order transactions and ensure
      serializability. Each transaction gets a unique timestamp when it starts,
      and this timestamp determines the transaction order.
    </p>

    <h2 className="text-3xl font-bold mt-8">Timestamp Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Timestamp Assignment:

TS(Ti) = Timestamp of transaction Ti

Assigned when transaction starts:
- System clock value, OR
- Logical counter

Older transaction = Smaller timestamp
Younger transaction = Larger timestamp

Example:
T1 starts at time 100 → TS(T1) = 100
T2 starts at time 150 → TS(T2) = 150
T3 starts at time 200 → TS(T3) = 200

Order: T1 < T2 < T3 (T1 is oldest)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Item Timestamps</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Each data item X maintains:

W-TS(X): Write timestamp
- Largest timestamp of transaction that successfully wrote X

R-TS(X): Read timestamp
- Largest timestamp of transaction that successfully read X

Example:
Initial: W-TS(X) = 0, R-TS(X) = 0

T1 (TS=100) reads X → R-TS(X) = 100
T2 (TS=150) writes X → W-TS(X) = 150
T3 (TS=200) reads X → R-TS(X) = 200

Current: W-TS(X) = 150, R-TS(X) = 200`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Basic Timestamp Ordering Protocol</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Read Operation - Ti wants to read X:

If TS(Ti) < W-TS(X):
   - Ti is trying to read a value written by younger transaction
   - REJECT: Rollback Ti

Else:
   - Allow read
   - Update R-TS(X) = max(R-TS(X), TS(Ti))


Write Operation - Ti wants to write X:

If TS(Ti) < R-TS(X):
   - Ti is trying to overwrite a value already read by younger transaction
   - REJECT: Rollback Ti

Else If TS(Ti) < W-TS(X):
   - Ti is trying to overwrite a value written by younger transaction
   - REJECT: Rollback Ti (basic protocol)

Else:
   - Allow write
   - Update W-TS(X) = TS(Ti)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Basic TSO</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example Execution:
T1: TS = 100
T2: TS = 150
Data X: W-TS(X) = 0, R-TS(X) = 0

1. T1 reads X:
   TS(T1)=100 >= W-TS(X)=0 ✓
   Allow read, R-TS(X) = 100

2. T2 reads X:
   TS(T2)=150 >= W-TS(X)=0 ✓
   Allow read, R-TS(X) = 150

3. T1 writes X:
   TS(T1)=100 < R-TS(X)=150 ✗
   REJECT! T2 already read X
   T1 must rollback and restart with new timestamp

4. After T1 restarts as T1' (TS=200):
   T1' writes X:
   TS(T1')=200 >= R-TS(X)=150 ✓
   TS(T1')=200 >= W-TS(X)=0 ✓
   Allow write, W-TS(X) = 200`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Thomas Write Rule</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Thomas Write Rule (Optimization):

Standard Rule:
If TS(Ti) < W-TS(X): Rollback Ti

Thomas Write Rule:
If TS(Ti) < W-TS(X): Skip write (obsolete write)

Idea: If a younger transaction already wrote X,
      Ti's write is obsolete and can be ignored.

Example:
T1 (TS=100), T2 (TS=150), T3 (TS=200)

1. T3 writes X → W-TS(X) = 200
2. T1 tries to write X:
   Standard: Rollback T1
   Thomas:   Skip write (T1's value obsolete anyway)

Benefits:
- Fewer rollbacks
- Better performance
- Still maintains serializability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lock vs Timestamp Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Locking</th>
            <th className="p-3 border">Timestamp</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Conflicts</td>
            <td className="p-3 border">Wait for lock</td>
            <td className="p-3 border">Rollback younger/older</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deadlock</td>
            <td className="p-3 border text-red-500">Possible</td>
            <td className="p-3 border text-green-500">Not possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Starvation</td>
            <td className="p-3 border">Possible</td>
            <td className="p-3 border">Possible (restarts)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cascading Rollback</td>
            <td className="p-3 border">Prevented (Strict 2PL)</td>
            <td className="p-3 border">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Order</td>
            <td className="p-3 border">Determined by locks</td>
            <td className="p-3 border">Predetermined by TS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multiversion Timestamp</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Multiversion Concurrency Control (MVCC):

Keep multiple versions of each data item.
Each version has a write timestamp.

X: [X@100] → [X@150] → [X@200]
              version     version

Read Operation - Ti reads X:
Find version with largest W-TS <= TS(Ti)

Example:
X has versions: X@100, X@150, X@200
T1 (TS=175) reads X → Gets X@150
T2 (TS=210) reads X → Gets X@200

Benefits:
- Reads never blocked or rejected
- Each transaction sees consistent snapshot
- Used in PostgreSQL, Oracle, MySQL InnoDB`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Timestamps order transactions</li>
        <li>R-TS, W-TS track data item access</li>
        <li>No deadlocks (no waiting for locks)</li>
        <li>Thomas Write Rule reduces rollbacks</li>
        <li>MVCC: Multiple versions, reads never block</li>
      </ul>
    </div>
  </div>
);

export default TimestampProtocols;
