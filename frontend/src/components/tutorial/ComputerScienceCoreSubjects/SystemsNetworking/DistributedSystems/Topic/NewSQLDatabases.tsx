import React from "react";

const NewSQLDatabases: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      NewSQL Databases
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      NewSQL databases combine the ACID guarantees and SQL interface of traditional relational
      databases with the horizontal scalability and high availability of NoSQL systems. They
      emerged to address the limitations of both approaches, providing the best of both worlds
      for modern distributed applications.
    </p>

    <h2 className="text-3xl font-bold mt-8">NewSQL Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Evolution of Database Systems:

Traditional SQL (1970s-2000s)
+---------------------------+
| ACID Transactions         |
| SQL Standard              |
| Relational Model          |
| Vertical Scaling          |
| Single Node / Primary     |
+---------------------------+
        |
        | Couldn't scale for web-scale apps
        v
NoSQL (2000s-2010s)
+---------------------------+
| BASE / Eventual Consistency|
| Various Query Languages   |
| Flexible Data Models      |
| Horizontal Scaling        |
| Distributed by Design     |
+---------------------------+
        |
        | Missed ACID, SQL, relational model
        v
NewSQL (2010s-Present)
+---------------------------+
| ACID Transactions         |  <-- From SQL
| SQL Standard              |  <-- From SQL
| Relational Model          |  <-- From SQL
| Horizontal Scaling        |  <-- From NoSQL
| Distributed Architecture  |  <-- From NoSQL
| High Availability         |  <-- From NoSQL
+---------------------------+

NewSQL = SQL + NoSQL's Scalability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL vs NoSQL vs NewSQL</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Traditional SQL</th>
            <th className="p-3 border">NoSQL</th>
            <th className="p-3 border">NewSQL</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Model</td>
            <td className="p-3 border">Relational</td>
            <td className="p-3 border">Various</td>
            <td className="p-3 border text-green-600">Relational</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Language</td>
            <td className="p-3 border">SQL</td>
            <td className="p-3 border">Custom APIs</td>
            <td className="p-3 border text-green-600">SQL</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ACID</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Limited/No</td>
            <td className="p-3 border text-green-600">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Horizontal Scale</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border text-green-600">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">High Availability</td>
            <td className="p-3 border">With effort</td>
            <td className="p-3 border">Built-in</td>
            <td className="p-3 border text-green-600">Built-in</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Schema</td>
            <td className="p-3 border">Fixed</td>
            <td className="p-3 border">Flexible</td>
            <td className="p-3 border">Fixed/Evolving</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">NewSQL Architecture Patterns</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NewSQL Architectural Approaches:

1. NEW ARCHITECTURE (Clean Slate)
   Built from scratch for distributed operation.

   +--------+  +--------+  +--------+
   | Node 1 |  | Node 2 |  | Node 3 |
   +--------+  +--------+  +--------+
       |           |           |
       +-----------+-----------+
                   |
         Distributed Consensus
         (Raft, Paxos)

   Examples: CockroachDB, TiDB, YugabyteDB

   Characteristics:
   - Distributed transactions native
   - Automatic sharding
   - Self-healing clusters

2. TRANSPARENT SHARDING MIDDLEWARE
   Layer on top of existing MySQL/PostgreSQL.

   +------------------+
   |  Application     |
   +--------+---------+
            |
   +--------+---------+
   | Sharding Proxy   |
   +--------+---------+
        /   |   \\
   +---+  +-+-+  +---+
   |MySQL||MySQL||MySQL|
   +-----++-----++-----+

   Examples: Vitess (YouTube), ProxySQL

   Characteristics:
   - Uses existing RDBMS
   - Query routing/rewriting
   - Connection pooling

3. DATABASE-AS-A-SERVICE
   Cloud-native, serverless scaling.

   Examples: Amazon Aurora, Google Spanner, Azure SQL

   Characteristics:
   - Managed infrastructure
   - Automatic scaling
   - Pay-per-use`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key NewSQL Technologies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Database</th>
            <th className="p-3 border">Architecture</th>
            <th className="p-3 border">Key Features</th>
            <th className="p-3 border">Use Cases</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">CockroachDB</td>
            <td className="p-3 border">Clean slate, Raft</td>
            <td className="p-3 border">Geo-distribution, PostgreSQL compatible</td>
            <td className="p-3 border">Global apps, multi-region</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Google Spanner</td>
            <td className="p-3 border">Clean slate, TrueTime</td>
            <td className="p-3 border">External consistency, managed</td>
            <td className="p-3 border">Global financial systems</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">TiDB</td>
            <td className="p-3 border">Clean slate, Raft</td>
            <td className="p-3 border">MySQL compatible, HTAP</td>
            <td className="p-3 border">MySQL replacement at scale</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600">YugabyteDB</td>
            <td className="p-3 border">Clean slate, Raft</td>
            <td className="p-3 border">PostgreSQL + Cassandra APIs</td>
            <td className="p-3 border">Cloud-native apps</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-red-600">Vitess</td>
            <td className="p-3 border">Sharding middleware</td>
            <td className="p-3 border">MySQL sharding, used by YouTube</td>
            <td className="p-3 border">Scaling existing MySQL</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-yellow-600">Amazon Aurora</td>
            <td className="p-3 border">Cloud-native storage</td>
            <td className="p-3 border">MySQL/PostgreSQL compatible, serverless</td>
            <td className="p-3 border">Cloud workloads on AWS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed Transactions in NewSQL</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`How NewSQL Achieves Distributed ACID:

1. DISTRIBUTED CONSENSUS (Raft/Paxos)
   Ensures all replicas agree on transaction order.

   Transaction: INSERT INTO users VALUES (1, 'Alice')

   Leader       Follower 1    Follower 2
     |              |              |
     | Propose      |              |
     |------------->|              |
     |              |------------->|
     |    Acknowledge              |
     |<-------------|              |
     |<----------------------------|
     | Commit (majority reached)   |
     |------------->|------------->|

   Result: All replicas have consistent data.

2. TWO-PHASE COMMIT (2PC) / OPTIMIZATIONS
   For transactions spanning multiple shards.

   Coordinator     Shard A       Shard B
       |              |              |
       | PREPARE      |              |
       |------------->|------------->|
       |   VOTE YES   |   VOTE YES   |
       |<-------------|<-------------|
       | COMMIT       |              |
       |------------->|------------->|
       |   ACK        |   ACK        |
       |<-------------|<-------------|

3. MVCC (Multi-Version Concurrency Control)
   Readers don't block writers, writers don't block readers.

   Time    Version    Data
   t1      v1         x = 10
   t2      v2         x = 20  (write)
   t3      -          Reader sees v1 (snapshot)
   t4      v2         Reader sees v2 (committed)

4. GLOBAL ORDERING (Spanner's TrueTime)
   GPS + atomic clocks for global timestamp ordering.

   Timestamp     Node A         Node B
   T1            Write X        -
   T2            -              Write Y
   T3            Read X,Y       Read X,Y

   TrueTime ensures T1 < T2 ordering globally.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CockroachDB Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CockroachDB in Action:

Setup: 3-node cluster across regions
- Node 1: us-east (Virginia)
- Node 2: us-west (Oregon)
- Node 3: eu-west (Frankfurt)

Schema:
CREATE TABLE accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner STRING NOT NULL,
  balance DECIMAL NOT NULL,
  region STRING NOT NULL,
  INDEX (region)
);

Geo-Partitioning:
ALTER TABLE accounts PARTITION BY LIST (region) (
  PARTITION us_east VALUES IN ('us-east'),
  PARTITION us_west VALUES IN ('us-west'),
  PARTITION eu VALUES IN ('eu')
);

ALTER PARTITION us_east OF TABLE accounts
  CONFIGURE ZONE USING constraints='[+region=us-east]';

Distributed Transaction:
BEGIN;
  -- Debit from account in us-east
  UPDATE accounts SET balance = balance - 100
  WHERE id = 'acc-1' AND region = 'us-east';

  -- Credit to account in eu-west
  UPDATE accounts SET balance = balance + 100
  WHERE id = 'acc-2' AND region = 'eu';
COMMIT;

Result:
- Transaction spans continents
- Full ACID guarantees
- Automatic coordination
- ~200-300ms latency for cross-region`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Google Spanner Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Google Spanner: Globally Distributed Database

Architecture:
+--------------------------------------------------+
|                  Spanner API                      |
+--------------------------------------------------+
                        |
+--------------------------------------------------+
|               Zone 1 (US-East)                    |
|  +-----------+  +-----------+  +-----------+     |
|  | Spanserver|  | Spanserver|  | Spanserver|     |
|  | (Paxos    |  | (Paxos    |  | (Paxos    |     |
|  |  Leader)  |  |  Replica) |  |  Replica) |     |
|  +-----------+  +-----------+  +-----------+     |
+--------------------------------------------------+
                        |
+--------------------------------------------------+
|               Zone 2 (EU-West)                    |
|  +-----------+  +-----------+  +-----------+     |
|  | Spanserver|  | Spanserver|  | Spanserver|     |
+--------------------------------------------------+
                        |
+--------------------------------------------------+
|               Zone 3 (Asia)                       |
|  +-----------+  +-----------+  +-----------+     |
|  | Spanserver|  | Spanserver|  | Spanserver|     |
+--------------------------------------------------+

TrueTime API:
TT.now() returns [earliest, latest] timestamp interval
- Uses GPS receivers + atomic clocks
- Uncertainty typically 1-7ms
- Enables external consistency

External Consistency:
If T1 commits before T2 starts (real time),
then T1's commit timestamp < T2's commit timestamp.

This is stronger than serializable isolation!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use NewSQL</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">Recommended</th>
            <th className="p-3 border">Reason</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Need ACID + Scale</td>
            <td className="p-3 border font-semibold text-green-600">NewSQL</td>
            <td className="p-3 border">Core NewSQL value proposition</td>
          </tr>
          <tr>
            <td className="p-3 border">Multi-region deployment</td>
            <td className="p-3 border font-semibold text-green-600">NewSQL</td>
            <td className="p-3 border">Built-in geo-distribution</td>
          </tr>
          <tr>
            <td className="p-3 border">Existing SQL expertise</td>
            <td className="p-3 border font-semibold text-green-600">NewSQL</td>
            <td className="p-3 border">SQL compatibility, easy migration</td>
          </tr>
          <tr>
            <td className="p-3 border">High write throughput only</td>
            <td className="p-3 border font-semibold text-blue-600">NoSQL</td>
            <td className="p-3 border">NoSQL often faster for writes</td>
          </tr>
          <tr>
            <td className="p-3 border">Simple key-value access</td>
            <td className="p-3 border font-semibold text-blue-600">NoSQL</td>
            <td className="p-3 border">Lower overhead without SQL</td>
          </tr>
          <tr>
            <td className="p-3 border">Single-server workload</td>
            <td className="p-3 border font-semibold text-purple-600">Traditional SQL</td>
            <td className="p-3 border">Simpler, mature, lower cost</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Challenges and Considerations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NewSQL Challenges:

1. LATENCY
   Distributed transactions have inherent latency.
   - Cross-region: 100-300ms
   - Same region: 5-20ms
   - Compare to local RDBMS: <1ms

   Mitigation: Geo-partitioning, follower reads

2. COMPLEXITY
   More moving parts than single-node database.
   - Cluster management
   - Network partitions
   - Distributed debugging

   Mitigation: Managed services, good tooling

3. COST
   Multiple nodes = higher infrastructure cost.
   - Minimum 3 nodes for HA
   - Network transfer costs
   - Operational overhead

   Mitigation: Evaluate TCO, right-size clusters

4. MATURITY
   Newer than traditional RDBMS (decades old).
   - Fewer DBAs with expertise
   - Smaller ecosystem
   - Edge cases still being discovered

   Mitigation: Active communities, vendor support

5. WRITE AMPLIFICATION
   Consensus requires multiple writes.
   - 3x writes for 3 replicas
   - Cross-region replication overhead

   Mitigation: Batch writes, async replication modes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>NewSQL combines ACID transactions and SQL with horizontal scalability</li>
        <li>Three architectural approaches: clean slate, sharding middleware, cloud-native</li>
        <li>Uses distributed consensus (Raft/Paxos) for consistency across replicas</li>
        <li>Key players: CockroachDB, Google Spanner, TiDB, YugabyteDB, Vitess</li>
        <li>Ideal for applications needing both transactions and scale (e.g., global finance)</li>
        <li>Trade-offs: higher latency for distributed transactions, more operational complexity</li>
        <li>Consider when: outgrowing single-node SQL but need ACID guarantees</li>
      </ul>
    </div>
  </div>
);

export default NewSQLDatabases;
