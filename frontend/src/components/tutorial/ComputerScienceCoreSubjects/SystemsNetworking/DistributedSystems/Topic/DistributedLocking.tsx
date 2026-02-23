import React from "react";

const DistributedLocking: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distributed Locking
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Distributed locking extends traditional locking mechanisms to work across multiple
      nodes in a distributed system. It ensures mutual exclusion and data consistency
      when multiple processes on different machines need to access shared resources.
      Implementing distributed locks correctly is challenging due to network failures,
      clock skew, and the need for fault tolerance. Various approaches exist, from
      centralized lock managers to consensus-based distributed algorithms.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Distributed Locking?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Need for Distributed Locking:

Scenario: Multiple services updating shared resource

+----------+     +----------+     +----------+
| Service  |     | Service  |     | Service  |
|    A     |     |    B     |     |    C     |
+----------+     +----------+     +----------+
     |               |               |
     +-------+-------+-------+-------+
             |               |
             v               v
      +-------------+  +-------------+
      | Shared DB   |  | Shared File |
      +-------------+  +-------------+

Without locking:
- Race conditions
- Lost updates
- Inconsistent state

Common Use Cases:
1. Leader election
2. Rate limiting
3. Distributed cron jobs
4. Inventory reservation
5. Configuration updates
6. Sequential ID generation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed Lock Properties</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Importance</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Safety (Mutual Exclusion)</td>
            <td className="p-3 border">At most one client holds lock at a time</td>
            <td className="p-3 border">Critical - core guarantee</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Liveness (Deadlock Freedom)</td>
            <td className="p-3 border">Lock eventually becomes available</td>
            <td className="p-3 border">Prevents system stalls</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Fault Tolerance</td>
            <td className="p-3 border">Works despite node failures</td>
            <td className="p-3 border">Required for reliability</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600">Fairness</td>
            <td className="p-3 border">Requests served in order (optional)</td>
            <td className="p-3 border">Prevents starvation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Centralized Lock Manager</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Centralized Lock Manager:

           +------------------+
           |  Lock Manager    |
           |    (Single)      |
           +------------------+
           | Lock Table:      |
           | X -> Client A    |
           | Y -> (free)      |
           | Z -> Client B    |
           +------------------+
              /     |     \\
             /      |      \\
            v       v       v
       Client A  Client B  Client C

Protocol:
1. ACQUIRE(resource):
   Client --> Lock Manager: "LOCK(X)"
   If X is free:
     Lock Manager: Mark X as held by Client
     Lock Manager --> Client: "GRANTED"
   Else:
     Lock Manager: Add Client to wait queue
     Lock Manager --> Client: "WAIT" or block

2. RELEASE(resource):
   Client --> Lock Manager: "UNLOCK(X)"
   Lock Manager: Mark X as free
   Lock Manager: Grant to next waiter (if any)

Pros:
- Simple implementation
- Easy deadlock detection (single lock table)

Cons:
- Single point of failure
- Performance bottleneck
- Network hop for every lock`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Primary-Backup Lock Manager</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Primary-Backup for Fault Tolerance:

        +------------------+
        |    Primary LM    |  <-- Handles requests
        +------------------+
               |
          Replication
               |
               v
        +------------------+
        |    Backup LM     |  <-- Takes over on failure
        +------------------+

Operation:
1. All requests go to Primary
2. Primary replicates lock state to Backup
3. On Primary failure:
   - Backup detects via heartbeat
   - Backup becomes new Primary
   - Clients redirect to new Primary

Failover Process:
Primary: LOCK(X, ClientA) --> Replicate --> Backup
Primary: FAILED!
Backup: Detect failure (timeout on heartbeat)
Backup: Become Primary
Backup: Lock table intact, service continues

Challenge: Split-brain
Both think they are Primary!
Solution: Fencing tokens (monotonic IDs)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed Lock with Redis</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Redis Single-Instance Lock:

ACQUIRE LOCK:
SET resource_name client_id NX PX 30000

- NX: Only set if not exists
- PX 30000: Expire in 30 seconds (TTL)
- client_id: Unique identifier for this client

RELEASE LOCK (Lua script for atomicity):
if redis.call("GET", KEYS[1]) == ARGV[1] then
    return redis.call("DEL", KEYS[1])
else
    return 0
end

Why Lua? Atomic check-and-delete prevents:
Client A: GET lock (returns "A")
Client B: Acquires lock (A's TTL expired)
Client A: DEL lock  <-- WRONG! Deletes B's lock

Problems with Single Redis:
1. Redis fails -> lock lost
2. Master-replica: async replication
   - Master grants lock, crashes
   - Replica promoted, doesn't have lock
   - Another client gets same lock!

Solution: Redlock algorithm`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Redlock Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Redlock: Distributed Lock with Multiple Redis Instances

Setup: N independent Redis masters (typically N=5)

+-------+  +-------+  +-------+  +-------+  +-------+
|Redis 1|  |Redis 2|  |Redis 3|  |Redis 4|  |Redis 5|
+-------+  +-------+  +-------+  +-------+  +-------+

Acquire Lock:
1. Get current time T1
2. Try to acquire lock on ALL N instances
   - Use same key, same random value
   - Small timeout per instance
3. Get current time T2
4. Lock acquired if:
   - Got lock on MAJORITY (N/2 + 1) instances
   - Elapsed time (T2 - T1) < lock TTL

5. Effective lock time = TTL - (T2 - T1)

6. If failed: Release lock on all instances

Example with N=5:
Client tries all 5, succeeds on 3
Majority = 3, so lock is acquired

Release Lock:
- Send unlock to ALL instances
- Even those where acquire failed
  (may have succeeded but response lost)

Controversy:
- Martin Kleppmann critique: clock assumptions
- Works well in practice with reasonable clocks
- Not suitable for strict correctness requirements`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ZooKeeper Distributed Locks</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ZooKeeper Lock Implementation:

ZooKeeper: Coordination service with strong consistency

Lock Node Structure:
/locks/resource-X/
    lock-0000000001  (Client A)
    lock-0000000002  (Client B)
    lock-0000000003  (Client C)

Acquire Lock:
1. Create sequential ephemeral node:
   CREATE /locks/resource-X/lock- EPHEMERAL SEQUENTIAL
   --> Returns /locks/resource-X/lock-0000000002

2. Get children of /locks/resource-X
   --> [lock-0000000001, lock-0000000002]

3. If my node has LOWEST sequence number:
   --> Lock acquired!

4. Else: Watch the node with next-lowest number
   --> Wait for notification

5. On notification: Go to step 2

Release Lock:
- Delete my ephemeral node
- Or: Let session expire (auto-delete)

Benefits:
- Ephemeral nodes: auto-cleanup on failure
- Sequential: fair ordering
- Watches: efficient waiting (no polling)
- Consensus-based: strong guarantees

Herd Effect Prevention:
Watch only predecessor, not all nodes
Avoids thundering herd on release`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lock Implementation Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Single Redis</th>
            <th className="p-3 border">Redlock</th>
            <th className="p-3 border">ZooKeeper</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border text-red-600">Weak</td>
            <td className="p-3 border text-yellow-600">Better</td>
            <td className="p-3 border text-green-600">Strong (CP)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fault Tolerance</td>
            <td className="p-3 border text-red-600">None</td>
            <td className="p-3 border text-green-600">Minority failures</td>
            <td className="p-3 border text-green-600">Minority failures</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Performance</td>
            <td className="p-3 border text-green-600">Fast</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fairness</td>
            <td className="p-3 border text-red-600">No</td>
            <td className="p-3 border text-red-600">No</td>
            <td className="p-3 border text-green-600">Yes (FIFO)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Auto-release</td>
            <td className="p-3 border text-green-600">TTL</td>
            <td className="p-3 border text-green-600">TTL</td>
            <td className="p-3 border text-green-600">Ephemeral</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fencing Tokens</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Fencing Tokens: Preventing Stale Lock Holders

Problem: Process pause (GC, network delay)

Timeline:
Client A: Acquire lock (token=33) --> GC PAUSE --> Resume, use lock
Client B: Acquire lock (token=34) after A's TTL expires
Client A: Still thinks it has lock!

Both A and B access resource simultaneously!

Solution: Monotonically increasing fencing tokens

Lock Service:
- Each lock acquisition gets unique, increasing token
- Token passed to storage with every operation

Storage:
if (request.token >= last_seen_token) {
    last_seen_token = request.token;
    process(request);
} else {
    reject(request);  // Stale token
}

Example:
Client A: token=33, processes request --> OK
Client B: token=34, processes request --> OK (34 > 33)
Client A: token=33, processes request --> REJECT (33 < 34)

This ensures storage only accepts requests from
the CURRENT lock holder, not stale ones.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed Read-Write Locks</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Read-Write Locks in Distributed Systems:

Allows multiple readers OR single writer

ZooKeeper Implementation:
/locks/resource-X/
    read-0000000001   (Reader A)
    read-0000000002   (Reader B)
    write-0000000003  (Writer C - waiting)
    read-0000000004   (Reader D - waiting)

Read Lock Acquire:
1. Create: /locks/resource-X/read-SEQUENTIAL
2. Get children
3. If no write- node with lower sequence:
   Lock acquired!
4. Else: Watch lowest write- node

Write Lock Acquire:
1. Create: /locks/resource-X/write-SEQUENTIAL
2. Get children
3. If my node is lowest:
   Lock acquired!
4. Else: Watch node with next-lower sequence

Compatibility:
+-------+--------+-------+
|       | Reader | Writer|
+-------+--------+-------+
| Reader| YES    | NO    |
+-------+--------+-------+
| Writer| NO     | NO    |
+-------+--------+-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Distributed locks provide mutual exclusion across multiple nodes</li>
        <li>Key properties: safety (mutual exclusion), liveness (deadlock freedom), fault tolerance</li>
        <li>Centralized lock manager is simple but single point of failure</li>
        <li>Redis single-instance: simple but not fault-tolerant</li>
        <li>Redlock: majority-based, tolerates minority failures</li>
        <li>ZooKeeper: strong consistency with ephemeral sequential nodes</li>
        <li>Fencing tokens prevent stale lock holders from causing issues</li>
        <li>TTL and ephemeral nodes prevent locks from being held forever</li>
      </ul>
    </div>
  </div>
);

export default DistributedLocking;
