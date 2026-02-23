import React from "react";

const ConcurrencyControl: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Concurrency Control in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Concurrency control ensures that multiple transactions executing simultaneously
      produce results equivalent to some serial execution of those transactions. In
      distributed systems, this becomes more challenging because transactions may access
      data across multiple nodes, and there is no global clock to order events. Various
      techniques including locking, timestamps, and optimistic approaches are used to
      maintain consistency while maximizing concurrent access.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Concurrency Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Concurrency Problem Illustration:

Without Concurrency Control:
Account Balance = $1000

T1: Withdraw $200        T2: Withdraw $300
     |                        |
     v                        v
Read Balance = $1000    Read Balance = $1000
     |                        |
     v                        v
Balance = 1000 - 200    Balance = 1000 - 300
     |                        |
     v                        v
Write Balance = $800    Write Balance = $700

Final Balance: $700 or $800 (depending on who writes last)
Expected Balance: $500 (1000 - 200 - 300)

LOST UPDATE ANOMALY!

With Proper Concurrency Control:
T1: Read(1000) --> Compute(800) --> Write(800) --> Commit
                                                      |
T2: ------------------------------------------------->|
    Read(800) --> Compute(500) --> Write(500) --> Commit

Final Balance: $500 (Correct!)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Serializability</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Serializability: The Correctness Criterion

A schedule is SERIALIZABLE if it is equivalent to
some serial execution of the same transactions.

Serial Schedule (one at a time):
T1: R(A) W(A) R(B) W(B) COMMIT
                              T2: R(A) W(A) COMMIT

Serializable Concurrent Schedule:
T1: R(A) W(A) -------- R(B) W(B) COMMIT
T2: -------- R(A) W(A) ---------------- COMMIT

Non-Serializable Schedule:
T1: R(A) -------- W(A) -------- COMMIT
T2: ---- R(A) --------- W(A) ---------- COMMIT

This produces different results than any serial order!

Types of Serializability:
+------------------+----------------------------------------+
| Conflict         | Operations on same data, different    |
| Serializability  | transactions, at least one is write   |
+------------------+----------------------------------------+
| View             | Reads see same values, final writes   |
| Serializability  | are the same as some serial schedule  |
+------------------+----------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Concurrency Control Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Pros</th>
            <th className="p-3 border">Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Locking (2PL)</td>
            <td className="p-3 border">Acquire locks before access</td>
            <td className="p-3 border">Straightforward, proven</td>
            <td className="p-3 border">Deadlocks, blocking</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Timestamp Ordering</td>
            <td className="p-3 border">Order by transaction timestamps</td>
            <td className="p-3 border">No deadlocks</td>
            <td className="p-3 border">Cascading aborts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Optimistic (OCC)</td>
            <td className="p-3 border">Validate at commit time</td>
            <td className="p-3 border">High concurrency, no locks</td>
            <td className="p-3 border">Aborts under contention</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600">MVCC</td>
            <td className="p-3 border">Multiple versions of data</td>
            <td className="p-3 border">Readers don't block writers</td>
            <td className="p-3 border">Storage overhead</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Two-Phase Locking (2PL)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Two-Phase Locking Protocol:

Rule: Transaction has two phases:
1. GROWING PHASE: Only acquire locks, never release
2. SHRINKING PHASE: Only release locks, never acquire

      Locks Held
          ^
          |        /\\
          |       /  \\
          |      /    \\
          |     /      \\
          |    /        \\
          +---+----------+---> Time
           Growing   Shrinking
            Phase     Phase
              |
         Lock Point
      (max locks held)

Lock Types:
+------------+------------+------------+
|            | Read Lock  | Write Lock |
+------------+------------+------------+
| Read Lock  | Compatible | Conflict   |
+------------+------------+------------+
| Write Lock | Conflict   | Conflict   |
+------------+------------+------------+

Example:
T1: Lock-S(A) Read(A) Lock-X(B) Write(B) Unlock(A) Unlock(B)
    |<---- Growing Phase ---->|<-- Shrinking Phase -->|

Strict 2PL: Hold all locks until commit/abort
- Prevents cascading aborts
- Most commonly used in practice`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed 2PL</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed Two-Phase Locking:

Centralized Lock Manager:
+-------------+
| Lock Manager|  <-- Single point for all locks
+-------------+
   /    |    \\
  /     |     \\
 v      v      v
+--+  +--+  +--+
|N1|  |N2|  |N3|
+--+  +--+  +--+

Process:
1. T1 at N1 wants to access X at N2
2. T1 --> Lock Manager: "Lock X"
3. Lock Manager: Grant or queue
4. T1 --> N2: "Access X"

Pros: Simple implementation
Cons: Single point of failure, bottleneck

Distributed Lock Managers:
+--+        +--+        +--+
|N1|  <-->  |N2|  <-->  |N3|
|LM|        |LM|        |LM|
+--+        +--+        +--+

Each node manages locks for its local data
- Lock request sent to data's home node
- No single bottleneck
- More complex deadlock detection

Primary Copy Locking:
- One node is primary for each data item
- Lock requests go to primary
- Replicas updated after lock acquired`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Version Concurrency Control (MVCC)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MVCC: Multiple Versions of Data

Instead of blocking, keep multiple versions:

Data Item X:
+--------+--------+--------+
| X_v1   | X_v2   | X_v3   |
| Value:5| Value:10| Value:15|
| TS: 100| TS: 150| TS: 200|
+--------+--------+--------+

Transaction T (timestamp 175) reads X:
- Sees X_v2 (timestamp 150 < 175)
- Doesn't see X_v3 (timestamp 200 > 175)

Benefits:
- Readers don't block writers
- Writers don't block readers
- Each transaction sees consistent snapshot

Snapshot Isolation:
T1 (TS=100): Begin --> Read(X=5) --> Read(Y=10) --> Commit
T2 (TS=150): ------ Begin --> Write(X=10) --> Commit ------

T1 sees consistent snapshot from TS=100
T1 doesn't see T2's changes to X

Write Conflicts:
If T1 and T2 both write X:
- First-committer-wins: T2 commits, T1 aborts
- Or: Lock on write (like 2PL)

Used in: PostgreSQL, MySQL InnoDB, Oracle, SQL Server`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Concurrency Control Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">2PL</th>
            <th className="p-3 border">Timestamp</th>
            <th className="p-3 border">OCC</th>
            <th className="p-3 border">MVCC</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Conflict Detection</td>
            <td className="p-3 border">On access</td>
            <td className="p-3 border">On access</td>
            <td className="p-3 border">At commit</td>
            <td className="p-3 border">On write</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deadlock</td>
            <td className="p-3 border text-red-600">Possible</td>
            <td className="p-3 border text-green-600">No</td>
            <td className="p-3 border text-green-600">No</td>
            <td className="p-3 border text-red-600">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Blocking</td>
            <td className="p-3 border text-red-600">Yes</td>
            <td className="p-3 border text-red-600">Aborts instead</td>
            <td className="p-3 border text-green-600">No</td>
            <td className="p-3 border text-green-600">Minimal</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Best For</td>
            <td className="p-3 border">High contention</td>
            <td className="p-3 border">Read-heavy</td>
            <td className="p-3 border">Low contention</td>
            <td className="p-3 border">Read-heavy OLTP</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed Concurrency Challenges</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Challenges Specific to Distributed Systems:

1. GLOBAL SERIALIZABILITY
   Local serializability at each node is NOT enough!

   Node A (Serializable: T1 before T2):
   T1: R(X) W(X)
   T2:          R(X)

   Node B (Serializable: T2 before T1):
   T2: R(Y) W(Y)
   T1:          R(Y)

   Global order: T1 < T2 AND T2 < T1 (Contradiction!)

   Solution: Same order at all nodes

2. NO GLOBAL CLOCK
   How to assign consistent timestamps?
   - Lamport clocks
   - Vector clocks
   - TrueTime (Google Spanner)
   - Hybrid logical clocks

3. NETWORK PARTITIONS
   Node A        |   Node B
   T1 in progress|   T2 in progress
        X--------+--------X
   Cannot coordinate!

4. DISTRIBUTED DEADLOCK
   T1 at Node A: holds lock(X), waits for lock(Y)
   T2 at Node B: holds lock(Y), waits for lock(X)

   Neither node sees full picture!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Global Serializability Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Ensuring Global Serializability:

1. SINGLE LOCK POINT
   - One node coordinates all locks
   - Simple but bottleneck

2. DISTRIBUTED 2PL
   - Lock manager at each node
   - Global deadlock detection needed

3. TIMESTAMP ORDERING
   - Global timestamp assignment
   - Same order enforced everywhere

4. TICKET-BASED
   - Coordinator issues sequence tickets
   - Transactions execute in ticket order

5. SPANNER's APPROACH
   - TrueTime: GPS + atomic clocks
   - Bounded clock uncertainty
   - External consistency guaranteed

TrueTime API:
TT.now() returns [earliest, latest]
Commit-wait: wait until TT.now().earliest > commit_timestamp
Guarantees: If T1 commits before T2 starts,
            T1's timestamp < T2's timestamp`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Concurrency control ensures transactions execute as if serially</li>
        <li>Serializability is the gold standard for correctness</li>
        <li>2PL: Acquire locks in growing phase, release in shrinking phase</li>
        <li>Timestamp ordering uses transaction timestamps to order operations</li>
        <li>Optimistic CC validates at commit, good for low contention</li>
        <li>MVCC keeps multiple versions, readers don't block writers</li>
        <li>Distributed systems need global serializability, not just local</li>
        <li>No global clock makes timestamp ordering challenging in distributed systems</li>
      </ul>
    </div>
  </div>
);

export default ConcurrencyControl;
