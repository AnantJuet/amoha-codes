import React from "react";

const FileReplication: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Replication in Distributed File Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      File replication is a key technique in distributed file systems that maintains multiple
      copies of files across different servers to improve availability, fault tolerance, and
      read performance. Proper replication strategy is essential for building reliable systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Replicate Files?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Benefits of Replication:

1. Fault Tolerance:
   Without Replication:          With Replication (3x):
   +--------+                    +--------+ +--------+ +--------+
   | File A |                    | File A | | File A | | File A |
   | Server |                    |Server 1| |Server 2| |Server 3|
   +--------+                    +--------+ +--------+ +--------+
       |                              |          |          |
     [FAIL]                        [FAIL]       OK         OK
       |                              |          |          |
   DATA LOST!                    Data still available!

2. Improved Read Performance:
   +--------+
   | Client |
   +--------+
       |
   +---+---+---+
   |   |   |   |
   v   v   v   v
  S1  S2  S3  S4  (Read from nearest/fastest replica)

3. Geographic Distribution:
   US Client --> US Replica (low latency)
   EU Client --> EU Replica (low latency)
   Asia Client --> Asia Replica (low latency)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Replication Terminology</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Term</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Replica</td>
            <td className="p-3 border">Copy of a file/data</td>
            <td className="p-3 border">File copy on Server B</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Replication Factor</td>
            <td className="p-3 border">Number of copies</td>
            <td className="p-3 border">RF=3 means 3 copies</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Primary Replica</td>
            <td className="p-3 border">Main copy for writes</td>
            <td className="p-3 border">Leader in consensus</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Secondary Replica</td>
            <td className="p-3 border">Backup copies</td>
            <td className="p-3 border">Followers in consensus</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Quorum</td>
            <td className="p-3 border">Minimum replicas for decision</td>
            <td className="p-3 border">Majority (N/2 + 1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Replication Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. Synchronous Replication:

Client      Primary     Secondary1   Secondary2
   |           |            |            |
   | Write(X)  |            |            |
   |---------->|            |            |
   |           | Replicate  |            |
   |           |----------->|            |
   |           |     |      | Replicate  |
   |           |     |      |----------->|
   |           |     |      |    ACK     |
   |           |     |      |<-----------|
   |           |    ACK     |            |
   |           |<-----------|            |
   |    ACK    |            |            |
   |<----------|            |            |

+ Strong consistency (all replicas updated)
- Higher latency (wait for all replicas)
- Lower availability (fails if replica unavailable)

2. Asynchronous Replication:

Client      Primary     Secondary1   Secondary2
   |           |            |            |
   | Write(X)  |            |            |
   |---------->|            |            |
   |    ACK    |            |            |
   |<----------|            |            |
   |           | (Later)    |            |
   |           |----------->|            |
   |           |            |----------->|

+ Lower latency (immediate response)
+ Higher availability
- Risk of data loss if primary fails before replication
- Temporary inconsistency between replicas`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Primary-Backup Replication</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Primary-Backup (Master-Slave) Model:

                    +---------+
                    | Primary |
                    | (Write) |
                    +---------+
                         |
         +---------------+---------------+
         |               |               |
         v               v               v
    +---------+     +---------+     +---------+
    | Backup1 |     | Backup2 |     | Backup3 |
    | (Read)  |     | (Read)  |     | (Read)  |
    +---------+     +---------+     +---------+

Write Path:
1. Client sends write to Primary
2. Primary executes write locally
3. Primary sends update to all Backups
4. Backups acknowledge
5. Primary responds to client

Read Path:
- Client can read from any replica
- May read slightly stale data from backup

Failover:
+---------+    FAIL    +---------+
| Primary | ---------> | Backup1 |
+---------+            +---------+
                            |
                       Promoted to
                         Primary`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Quorum-Based Replication</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Quorum Voting Protocol:

N = Total replicas
W = Write quorum (replicas to write)
R = Read quorum (replicas to read)

Constraint: W + R > N (ensures overlap)

Example: N=5, W=3, R=3

Write Operation (W=3):
+---+   +---+   +---+   +---+   +---+
| 1 |   | 2 |   | 3 |   | 4 |   | 5 |
+---+   +---+   +---+   +---+   +---+
  |       |       |
  v       v       v
[Write] [Write] [Write]   -       -

3 out of 5 ACK = Write successful

Read Operation (R=3):
+---+   +---+   +---+   +---+   +---+
| 1 |   | 2 |   | 3 |   | 4 |   | 5 |
+---+   +---+   +---+   +---+   +---+
  |               |       |
  v               v       v
[Read]    -     [Read]  [Read]    -

At least one of the 3 has latest version

Common Configurations:
+--------+-----+-----+------------------+
| Config | W   | R   | Behavior         |
+--------+-----+-----+------------------+
| N=3    | 2   | 2   | Balanced         |
| N=3    | 1   | 3   | Fast writes      |
| N=3    | 3   | 1   | Fast reads       |
| N=5    | 3   | 3   | Fault tolerant   |
+--------+-----+-----+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Chain Replication</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Chain Replication Model:

Write Path:
Client --> Head --> Middle --> ... --> Tail --> ACK

+--------+     +--------+     +--------+     +--------+
| Head   | --> | Node 2 | --> | Node 3 | --> | Tail   |
| Write  |     |        |     |        |     |  ACK   |
+--------+     +--------+     +--------+     +--------+
    ^                                             |
    |                                             |
 Client ------------------------------------------|
              (Response from Tail)

Read Path:
Client --> Tail --> Response

Advantages:
- Simple consistency (writes flow in order)
- Strong consistency for reads (from tail)
- High throughput (pipeline writes)

Failure Handling:
- Head fails: Next becomes head
- Tail fails: Previous becomes tail
- Middle fails: Skip the failed node

+--------+     +--------+     +--------+
| Head   | --> | FAILED | --> | Tail   |
+--------+     +--------+     +--------+
    |                             ^
    +-----------------------------+
         (Bypass failed node)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Replica Placement Strategies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Rack-Aware</td>
            <td className="p-3 border">Spread replicas across racks</td>
            <td className="p-3 border">Tolerate rack failures</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Datacenter-Aware</td>
            <td className="p-3 border">Replicas in different DCs</td>
            <td className="p-3 border">Disaster recovery</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Geographic</td>
            <td className="p-3 border">Replicas in different regions</td>
            <td className="p-3 border">Low latency globally</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Random</td>
            <td className="p-3 border">Random placement</td>
            <td className="p-3 border">Load balancing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">HDFS Replication Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HDFS Default Replication (RF=3):

Datacenter Layout:
+-------------------- Datacenter ---------------------+
|                                                     |
|  Rack 1              Rack 2              Rack 3     |
|  +------+            +------+            +------+   |
|  | DN 1 |            | DN 4 |            | DN 7 |   |
|  +------+            +------+            +------+   |
|  | DN 2 |            | DN 5 |            | DN 8 |   |
|  +------+            +------+            +------+   |
|  | DN 3 |            | DN 6 |            | DN 9 |   |
|  +------+            +------+            +------+   |
|                                                     |
+-----------------------------------------------------+

Replica Placement Policy:
1st Replica: On local rack (where client is)
2nd Replica: On different rack
3rd Replica: Same rack as 2nd, different node

Example for file "data.txt":
+--------+         +--------+         +--------+
| Rack 1 |         | Rack 2 |         | Rack 3 |
+--------+         +--------+         +--------+
| DN1    |         | DN4    |         |        |
|[Rep 1] |         |[Rep 2] |         |        |
+--------+         +--------+         +--------+
|        |         | DN5    |         |        |
|        |         |[Rep 3] |         |        |
+--------+         +--------+         +--------+

Benefits:
- Survives single node failure (3 copies)
- Survives rack failure (copies on 2 racks)
- Minimizes cross-rack traffic (2/3 on same rack)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Consistency Models for Replicas</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Consistency Spectrum:

Strong <----------------------------------------> Weak
Consistency                                    Consistency

Linearizability    Sequential    Causal    Eventual
     |                |            |          |
All ops appear    All ops in   Respects   Replicas
in real-time     some total   causality  eventually
order            order                    converge

Trade-offs:
+----------------+-------------+---------------+
| Consistency    | Latency     | Availability  |
+----------------+-------------+---------------+
| Strong         | High        | Lower         |
| Eventual       | Low         | Higher        |
+----------------+-------------+---------------+

Eventual Consistency Flow:
T0: Write X=1 to Primary
T1: Primary has X=1, Replicas have X=0 (stale)
T2: Replication in progress...
T3: All replicas have X=1 (converged)

"Eventually" means: If no new writes, all replicas
will converge to the same value.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conflict Resolution</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Handling Concurrent Updates:

Scenario: Two clients update same file simultaneously

Client A: X = "hello"     Client B: X = "world"
     |                         |
     v                         v
Replica 1: X="hello"    Replica 2: X="world"

Resolution Strategies:

1. Last-Writer-Wins (LWW):
   - Use timestamps
   - Latest timestamp wins
   - Simple but may lose data

2. Version Vectors:
   Client A: [A:1, B:0] X="hello"
   Client B: [A:0, B:1] X="world"
   Conflict detected: Neither dominates
   -> Application resolves

3. CRDTs (Conflict-free Replicated Data Types):
   - Operations designed to commute
   - G-Counter: Only increments
   - OR-Set: Add/Remove sets
   - Automatic convergence

4. Application-Level Merge:
   - Git-style conflict markers
   - User resolves manually
   - Complex but preserves data`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Replication Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System</th>
            <th className="p-3 border">Default RF</th>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Consistency</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">HDFS</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Rack-aware, pipeline</td>
            <td className="p-3 border">Strong (single writer)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">GFS</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Chunk-based</td>
            <td className="p-3 border">Relaxed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cassandra</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Quorum-based</td>
            <td className="p-3 border">Tunable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ceph</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">CRUSH algorithm</td>
            <td className="p-3 border">Strong</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Replication provides fault tolerance, availability, and performance</li>
        <li>Synchronous replication ensures consistency but increases latency</li>
        <li>Asynchronous replication offers lower latency but risks data loss</li>
        <li>Quorum systems require W + R greater than N for consistency</li>
        <li>Chain replication simplifies consistency with ordered propagation</li>
        <li>Replica placement should consider rack and datacenter topology</li>
        <li>Conflict resolution strategies: LWW, version vectors, CRDTs</li>
      </ul>
    </div>
  </div>
);

export default FileReplication;
