import React from "react";

const TimestampOrdering: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Timestamp Ordering
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Timestamp ordering is a concurrency control technique that uses timestamps to
      determine the serialization order of transactions. Each transaction receives a
      unique timestamp when it begins, and the system ensures that the execution is
      equivalent to running transactions in timestamp order. Unlike locking-based
      approaches, timestamp ordering is non-blocking and deadlock-free, but may cause
      transaction restarts when conflicts are detected.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Timestamp Ordering (BTO)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Basic Timestamp Ordering Protocol:

Each transaction gets unique timestamp TS(T) at start
Each data item X maintains:
- W-TS(X): Timestamp of last transaction that wrote X
- R-TS(X): Timestamp of last transaction that read X

Rule: If TS(Ti) < TS(Tj), then Ti must appear
      before Tj in equivalent serial schedule

READ Operation - Ti wants to read X:
+--------------------------------------------+
| If TS(Ti) < W-TS(X):                       |
|   REJECT: A later transaction wrote X      |
|   Ti must abort and restart                |
| Else:                                      |
|   READ is allowed                          |
|   R-TS(X) = max(R-TS(X), TS(Ti))           |
+--------------------------------------------+

WRITE Operation - Ti wants to write X:
+--------------------------------------------+
| If TS(Ti) < R-TS(X):                       |
|   REJECT: A later transaction read X       |
|   Ti must abort and restart                |
| If TS(Ti) < W-TS(X):                       |
|   REJECT: A later transaction wrote X      |
|   Ti must abort and restart                |
| Else:                                      |
|   WRITE is allowed                         |
|   W-TS(X) = TS(Ti)                         |
+--------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timestamp Ordering Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example: Two Transactions

Initial: X has W-TS=0, R-TS=0

T1 (TS=100):  Read(X)  Write(X)
T2 (TS=150):       Read(X)      Write(X)

Step-by-step:

1. T1 Read(X):
   TS(T1)=100 >= W-TS(X)=0? YES
   Read allowed, R-TS(X) = 100

2. T2 Read(X):
   TS(T2)=150 >= W-TS(X)=0? YES
   Read allowed, R-TS(X) = 150

3. T1 Write(X):
   TS(T1)=100 >= R-TS(X)=150? NO!
   T1 must ABORT (T2 already read)

4. T1 restarts with new timestamp TS=200

5. T1 Read(X):
   TS(T1)=200 >= W-TS(X)=0? YES
   Read allowed, R-TS(X) = 200

6. T2 Write(X):
   TS(T2)=150 >= R-TS(X)=200? NO!
   T2 must ABORT

This continues... (potentially many restarts)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Thomas Write Rule</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Thomas Write Rule: Optimization for Basic TO

Standard BTO rejects write when TS(Ti) < W-TS(X)
Thomas Write Rule: IGNORE the write instead!

Reasoning:
If TS(Ti) < W-TS(X), a later transaction already wrote X
Ti's write would be overwritten anyway in serial order
So just skip Ti's write (obsolete write rule)

Modified WRITE Operation:
+--------------------------------------------+
| If TS(Ti) < R-TS(X):                       |
|   REJECT: Ti must abort                    |
| Else If TS(Ti) < W-TS(X):                  |
|   IGNORE: Write is obsolete, skip it       |
|   Ti continues (no abort)                  |
| Else:                                      |
|   WRITE is allowed                         |
|   W-TS(X) = TS(Ti)                         |
+--------------------------------------------+

Example:
T1(TS=100), T2(TS=150)

1. T2 Write(X): W-TS(X) = 150
2. T1 Write(X): TS(T1)=100 < W-TS(X)=150
   Without Thomas: T1 aborts
   With Thomas: Write ignored, T1 continues

Benefit: Fewer unnecessary aborts
Caveat: Not recoverable without additional measures`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timestamp Ordering Properties</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Basic TO</th>
            <th className="p-3 border">With Thomas Rule</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Serializability</td>
            <td className="p-3 border text-green-600">Conflict serializable</td>
            <td className="p-3 border text-green-600">View serializable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deadlock</td>
            <td className="p-3 border text-green-600">Free</td>
            <td className="p-3 border text-green-600">Free</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Starvation</td>
            <td className="p-3 border text-red-600">Possible</td>
            <td className="p-3 border text-red-600">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cascading Aborts</td>
            <td className="p-3 border text-red-600">Possible</td>
            <td className="p-3 border text-red-600">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Recoverability</td>
            <td className="p-3 border text-red-600">Not guaranteed</td>
            <td className="p-3 border text-red-600">Not guaranteed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Strict Timestamp Ordering</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Strict Timestamp Ordering: Ensuring Recoverability

Problem with Basic TO:
T1(TS=100): Write(X, 10)
T2(TS=150): Read(X)     --> sees 10
T1:         ABORT!
T2:         Commit?     --> Has dirty read!

T2 read uncommitted data from T1. If T1 aborts,
T2 must also abort (cascading abort).

Solution: Strict TO

Rule: A transaction Ti can read/write X only after
      all transactions Tj with TS(Tj) < TS(Ti)
      that wrote X have committed or aborted.

Implementation:
- Maintain commit/abort status with timestamps
- Buffer writes until transaction commits
- Read checks if writer committed

Read(X) by Ti:
1. Find latest write where TS(writer) < TS(Ti)
2. If writer committed: Read value
3. If writer active: WAIT
4. If writer aborted: Find earlier committed write

This prevents cascading aborts but adds delays.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed Timestamp Ordering</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Timestamp Ordering in Distributed Systems:

Challenge: Generating globally unique timestamps
without a global clock

Solution 1: Centralized Timestamp Server
+--------------------+
| Timestamp Server   |
| Counter: 1001      |
+--------------------+
    /     |     \\
   v      v      v
 Node A  Node B  Node C

Each transaction requests timestamp from server
- Simple but single point of failure
- Network latency for every transaction

Solution 2: Lamport-style Timestamps
Format: (counter, node_id)

Node A: (1, A), (2, A), (3, A)...
Node B: (1, B), (2, B), (3, B)...

Ordering: (c1, n1) < (c2, n2) if
  c1 < c2, or (c1 == c2 and n1 < n2)

On message receive: counter = max(local, received) + 1

Solution 3: TrueTime (Google Spanner)
Uses GPS + atomic clocks
TT.now() returns interval [earliest, latest]
Commit-wait ensures consistent ordering`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multiversion Timestamp Ordering</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Multiversion Timestamp Ordering (MVTO):

Keep multiple versions of each data item
Each version has write timestamp

Data Item X versions:
+--------+--------+--------+
| X_v1   | X_v2   | X_v3   |
| Val:5  | Val:10 | Val:15 |
| WTS:50 | WTS:100| WTS:150|
+--------+--------+--------+

READ by Ti:
- Find version Xk where WTS(Xk) is largest
  but WTS(Xk) <= TS(Ti)
- Return Xk value
- Update R-TS(Xk) = max(R-TS(Xk), TS(Ti))
- NEVER rejected (always finds valid version)

WRITE by Ti:
- Find version Xk where WTS(Xk) is largest
  but WTS(Xk) <= TS(Ti)
- If R-TS(Xk) > TS(Ti):
    REJECT (a later transaction read this version)
- Else:
    Create new version with WTS = TS(Ti)

Example:
T1(TS=75) Read(X): Returns X_v1 (WTS=50 <= 75)
T2(TS=125) Read(X): Returns X_v2 (WTS=100 <= 125)
T1(TS=75) Write(X): Creates X with WTS=75
                    (between v1 and v2)

Benefit: Reads never wait or abort
Drawback: Storage overhead for versions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: TO vs 2PL</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Timestamp Ordering</th>
            <th className="p-3 border">Two-Phase Locking</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Conflict Resolution</td>
            <td className="p-3 border">Abort and restart</td>
            <td className="p-3 border">Wait for lock</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deadlock</td>
            <td className="p-3 border text-green-600">Impossible</td>
            <td className="p-3 border text-red-600">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Blocking</td>
            <td className="p-3 border text-green-600">None (in basic TO)</td>
            <td className="p-3 border text-red-600">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">High Contention</td>
            <td className="p-3 border text-red-600">Many restarts</td>
            <td className="p-3 border text-green-600">Better (waits)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Low Contention</td>
            <td className="p-3 border text-green-600">Efficient</td>
            <td className="p-3 border">Lock overhead</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Distributed</td>
            <td className="p-3 border text-green-600">No distributed deadlock</td>
            <td className="p-3 border text-red-600">Distributed deadlock</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timestamp Ordering Variants</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Timestamp Ordering Variants:

1. BASIC TIMESTAMP ORDERING (BTO)
   - Simple read/write timestamp checks
   - Aborts on conflict
   - Conflict serializable

2. THOMAS WRITE RULE
   - Ignores obsolete writes
   - Fewer aborts
   - View serializable (not conflict)

3. STRICT TIMESTAMP ORDERING
   - Waits for committing transactions
   - No cascading aborts
   - Recoverable schedules

4. MULTIVERSION TO (MVTO)
   - Multiple versions per data item
   - Reads never blocked or aborted
   - Storage overhead

5. TIMESTAMP ORDERING WITH VALIDATION
   - Similar to optimistic CC
   - Timestamp assigned at validation
   - Better ordering decisions

6. WOUND-WAIT / WAIT-DIE
   - Combines timestamps with locking
   - Older transactions have priority
   - Used in some distributed databases`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Each transaction gets a unique timestamp at start</li>
        <li>Operations are checked against read and write timestamps of data items</li>
        <li>Conflicting operations cause the later (by real time) transaction to abort</li>
        <li>Timestamp ordering is deadlock-free but may cause many restarts</li>
        <li>Thomas Write Rule ignores obsolete writes to reduce aborts</li>
        <li>Strict TO waits for committers to prevent cascading aborts</li>
        <li>Multiversion TO keeps multiple versions so reads never abort</li>
        <li>Works well for low-contention, read-heavy workloads</li>
      </ul>
    </div>
  </div>
);

export default TimestampOrdering;
