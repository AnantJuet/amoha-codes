import React from "react";

const OptimisticCC: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Optimistic Concurrency Control
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Optimistic Concurrency Control (OCC) is based on the assumption that conflicts
      between transactions are rare. Instead of preventing conflicts through locking,
      OCC allows transactions to execute freely and validates them at commit time.
      If a conflict is detected during validation, the transaction is aborted and
      restarted. This approach provides high concurrency for read-heavy workloads
      with infrequent conflicts but can suffer under high contention.
    </p>

    <h2 className="text-3xl font-bold mt-8">OCC Philosophy</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Optimistic vs Pessimistic Approach:

PESSIMISTIC (Locking):
"Conflicts are likely, prevent them upfront"

T1: Lock(X) --> Read(X) --> Compute --> Write(X) --> Unlock(X)
T2: --------- Wait... -----------------------> Lock(X) ...

OPTIMISTIC:
"Conflicts are rare, check at the end"

T1: Read(X) --> Compute --> Validate --> Write(X) --> Commit
T2: Read(X) --> Compute --> Validate --> Conflict! --> Abort

OCC Assumption:
- Most transactions don't conflict
- Locking overhead is wasted when no conflict
- Better to check once at commit than lock throughout

Best suited for:
- Read-heavy workloads
- Short transactions
- Low contention environments`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Three Phases of OCC</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Optimistic Concurrency Control Phases:

+----------------+----------------+----------------+
|     READ       |   VALIDATION   |     WRITE      |
|    PHASE       |     PHASE      |     PHASE      |
+----------------+----------------+----------------+
        |               |                |
   Read data       Check for         Apply changes
   into private    conflicts with    to database
   workspace       other trans.      (if valid)
        |               |                |
        v               v                v
   +--------+      +--------+       +--------+
   | Read   |      | Validate|      | Write  |
   | Set    |      | Read/   |      | Set to |
   | Write  |      | Write   |      | DB     |
   | Set    |      | Sets    |      |        |
   +--------+      +--------+       +--------+

Timeline:
|<-- Read Phase -->|<- Validate ->|<- Write ->|
                   ^              ^
               Start TS        Finish TS`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OCC Validation Rules</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Condition</th>
            <th className="p-3 border">Check</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Condition 1</td>
            <td className="p-3 border">Tj completed before Ti started</td>
            <td className="p-3 border">No overlap, no conflict</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Condition 2</td>
            <td className="p-3 border">Tj completed before Ti's write phase AND WriteSet(Tj) does not intersect ReadSet(Ti)</td>
            <td className="p-3 border">Ti didn't read what Tj wrote</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Condition 3</td>
            <td className="p-3 border">Tj completed read phase before Ti AND WriteSet(Tj) does not intersect ReadSet(Ti) OR WriteSet(Ti)</td>
            <td className="p-3 border">No read-write or write-write conflict</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Validation Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OCC Validation Example:

Transaction Ti being validated
Must check against all concurrent Tj

Ti: ReadSet = {A, B}, WriteSet = {C}
Tj: ReadSet = {C, D}, WriteSet = {A}  (committed during Ti's read phase)

Check Condition 2:
- Did Tj complete before Ti's write phase? Yes
- Does WriteSet(Tj)={A} intersect ReadSet(Ti)={A,B}? YES (A)
- Condition 2 FAILS

Ti must ABORT because:
- Ti read A
- Tj wrote A (after Ti started reading)
- Ti might have read stale value of A

Another Example (Valid):
Ti: ReadSet = {A, B}, WriteSet = {C}
Tj: ReadSet = {D, E}, WriteSet = {F}  (committed during Ti)

Check Condition 2:
- Does WriteSet(Tj)={F} intersect ReadSet(Ti)={A,B}? NO
- Condition 2 PASSES

Ti can COMMIT because no conflict with Tj`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Backward vs Forward Validation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Validation Strategies:

BACKWARD VALIDATION (BOCC):
Validate against COMMITTED transactions

Ti validating:
Check against Tj where Tj committed
during Ti's execution

       Tj committed
           |
    Ti: [  Read  |Validate|Write]
           |     ^
           +-----+
        Check WriteSet(Tj) vs ReadSet(Ti)

If conflict: Ti aborts (Tj already committed)

FORWARD VALIDATION (FOCC):
Validate against ACTIVE transactions

Ti validating:
Check against Tj where Tj is still active

    Ti: [  Read  |Validate|Write]
    Tk: [    Read    |...]
           |         ^
           +---------+
        Check WriteSet(Ti) vs ReadSet(Tk)

If conflict: Can abort Tk instead of Ti!
(Ti is committing, Tk hasn't validated yet)

Comparison:
+------------------+------------------+
| Backward (BOCC)  | Forward (FOCC)   |
+------------------+------------------+
| Simple           | More complex     |
| Validator aborts | Can abort others |
| Less overhead    | More flexible    |
+------------------+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed OCC</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Optimistic CC in Distributed Systems:

Challenge: Validation across multiple nodes

           Coordinator
              |
    +---------+---------+
    |         |         |
  Node A    Node B    Node C
  (data X)  (data Y)  (data Z)

Ti reads X from A, Y from B, writes Z to C

Distributed Validation Protocol:

1. READ PHASE (Distributed):
   - Ti reads from multiple nodes
   - Each node tracks read timestamp

2. VALIDATION PHASE (Coordinated):
   Coordinator --> All nodes: PREPARE-TO-VALIDATE
   Each node:
     - Checks local conflicts
     - Reports ReadSet, WriteSet
   Coordinator:
     - Combines information
     - Makes global validation decision

3. WRITE PHASE (Distributed 2PC):
   If valid: Use 2PC to commit writes
   If invalid: Abort transaction

Challenges:
- Network delays during validation
- Maintaining consistent transaction IDs
- Coordinating validation order`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OCC Comparison with Other Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">OCC</th>
            <th className="p-3 border">2PL</th>
            <th className="p-3 border">Timestamp</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Conflict Detection</td>
            <td className="p-3 border">At commit</td>
            <td className="p-3 border">At access</td>
            <td className="p-3 border">At access</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Blocking</td>
            <td className="p-3 border text-green-600">None</td>
            <td className="p-3 border text-red-600">Yes</td>
            <td className="p-3 border text-green-600">None</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deadlock</td>
            <td className="p-3 border text-green-600">Impossible</td>
            <td className="p-3 border text-red-600">Possible</td>
            <td className="p-3 border text-green-600">Impossible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Restart Cost</td>
            <td className="p-3 border text-red-600">Full transaction</td>
            <td className="p-3 border text-green-600">None (waits)</td>
            <td className="p-3 border text-red-600">Full transaction</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">High Contention</td>
            <td className="p-3 border text-red-600">Many aborts</td>
            <td className="p-3 border text-green-600">Better</td>
            <td className="p-3 border text-red-600">Many aborts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Read-Heavy</td>
            <td className="p-3 border text-green-600">Excellent</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border text-green-600">Excellent</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">OCC in Modern Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OCC in Production Systems:

1. GOOGLE PERCOLATOR (Bigtable)
   - Snapshot isolation with OCC
   - Write at commit timestamp
   - Detect write-write conflicts

2. COCKROACHDB
   - Serializable with OCC
   - Timestamp ordering
   - Retry on conflict

3. TIKV / TIDB
   - Percolator-based
   - Distributed transactions
   - Lock-free reads

4. MEMORY-OPTIMIZED DATABASES
   - Hekaton (SQL Server)
   - Lock-free OCC
   - High throughput for OLTP

5. SOFTWARE TRANSACTIONAL MEMORY (STM)
   - OCC for in-memory transactions
   - Used in Clojure, Haskell
   - Automatic conflict detection

OCC Implementation Pattern:
1. Read into local buffer (copy)
2. Compute on local copy
3. Validate (compare versions)
4. Atomic commit (CAS or 2PC)
5. On conflict: Retry with new copy`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OCC Optimization Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Optimizing OCC Performance:

1. EARLY ABORT
   - Check for obvious conflicts during read phase
   - Abort early if stale read detected
   - Don't waste compute time

2. VERSION NUMBERS
   - Each data item has version number
   - Compare versions instead of values
   - Faster validation

3. BLOOM FILTERS
   - Compact representation of ReadSet/WriteSet
   - Fast intersection test
   - Some false positives OK (just abort)

4. BATCHING
   - Validate multiple transactions together
   - Amortize validation overhead
   - Group commit

5. ADAPTIVE OCC
   - Monitor contention level
   - Switch to locking under high contention
   - Best of both worlds

6. PARALLEL VALIDATION
   - Validate against multiple transactions in parallel
   - Reduces validation latency
   - Needs careful synchronization`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>OCC assumes conflicts are rare and validates at commit time</li>
        <li>Three phases: Read (execute), Validation (check conflicts), Write (commit)</li>
        <li>No locks during execution - high concurrency, no deadlocks</li>
        <li>Backward validation checks against committed transactions</li>
        <li>Forward validation checks against active transactions</li>
        <li>Best for read-heavy workloads with low contention</li>
        <li>Can suffer from high abort rates under heavy write contention</li>
        <li>Used in modern distributed databases like CockroachDB, TiDB</li>
      </ul>
    </div>
  </div>
);

export default OptimisticCC;
