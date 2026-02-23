import React from "react";

const ReplicationReasons: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Reasons for Replication
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Replication is not just a feature but a necessity in modern distributed systems.
      Understanding why systems replicate data helps in designing robust, scalable, and
      reliable distributed architectures. The primary motivations span reliability,
      performance, and scalability dimensions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Primary Reasons for Replication</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`THE FOUR PILLARS OF REPLICATION:

+-------------------+    +-------------------+
|   RELIABILITY     |    |   AVAILABILITY    |
|                   |    |                   |
| - Fault tolerance |    | - 24/7 uptime     |
| - Data durability |    | - Failover        |
| - Disaster recov. |    | - No single point |
+-------------------+    +-------------------+
         |                        |
         +------------------------+
                    |
         +------------------------+
         |                        |
+-------------------+    +-------------------+
|   PERFORMANCE     |    |   SCALABILITY     |
|                   |    |                   |
| - Read scaling    |    | - Handle growth   |
| - Lower latency   |    | - Geographic dist.|
| - Load balancing  |    | - Workload spread |
+-------------------+    +-------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Reliability and Fault Tolerance</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`FAULT TOLERANCE THROUGH REPLICATION:

Without Replication:
+----------+
|  Single  |  <-- Single Point of Failure
|   Node   |  <-- If it fails, ALL data is lost
+----------+
     X (Node fails)
     |
     v
SYSTEM DOWN - DATA LOST!


With Replication (3 replicas):
+----------+  +----------+  +----------+
| Replica1 |  | Replica2 |  | Replica3 |
+----------+  +----------+  +----------+
     X             |              |
(Node fails)       |              |
                   v              v
         SYSTEM CONTINUES - DATA SAFE!


Fault Tolerance Calculation:
============================
N = Number of replicas
F = Number of failures tolerated

For crash failures:    F = N - 1
For Byzantine faults:  F = (N - 1) / 3

Examples:
- 3 replicas can tolerate 2 crashes
- 3 replicas can tolerate 0 Byzantine faults
- 4 replicas can tolerate 1 Byzantine fault`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. High Availability</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AVAILABILITY WITH REPLICATION:

Scenario: Single node with 99.9% uptime
-------------------------------------------
Downtime per year = 365 * 24 * 0.001 = 8.76 hours

Scenario: 3 replicas, each 99.9% uptime
-------------------------------------------
Probability all 3 fail = 0.001 * 0.001 * 0.001 = 0.000000001
Availability = 99.9999999% (9-nines!)
Downtime per year = 0.03 seconds

AVAILABILITY COMPARISON:
========================
Nines    Availability   Downtime/Year
-----    ------------   -------------
  2        99%           3.65 days
  3        99.9%         8.76 hours
  4        99.99%        52.6 minutes
  5        99.999%       5.26 minutes
  6        99.9999%      31.5 seconds


FAILOVER MECHANISM:
===================
Normal Operation:
+----------+  <-- Primary handles all writes
|  Primary |
+----------+
    |   |
    v   v
+------+ +------+
|Backup| |Backup|  <-- Backups ready to take over
+------+ +------+

After Primary Failure:
+----------+  <-- FAILED
|  Primary |
+----------+
    X
+------+ +------+
|Backup| |Backup|
+------+ +------+
    |
    v
+--------+
| NEW    |  <-- Promoted to Primary
|PRIMARY |
+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Performance Improvement</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`READ SCALING WITH REPLICAS:

Without Replication:
Client1 --\
Client2 ---\    +--------+
Client3 ----+-->| Single |  Bottleneck!
Client4 ---/    |  Node  |  All reads go here
Client5 --/     +--------+


With Read Replicas:
Client1 ------> +--------+
                | Replica|
Client2 ------> +--------+
                | Replica|
Client3 ------> +--------+
                | Replica|
Client4 ------> +--------+
                | Primary| (Writes only)
Client5 ------> +--------+
                | Replica|

Load distributed across replicas!


THROUGHPUT COMPARISON:
======================
Configuration          Read Throughput
-------------          ---------------
1 node                 10,000 reads/sec
3 replicas             ~30,000 reads/sec
5 replicas             ~50,000 reads/sec

Note: Write throughput doesn't scale with replicas
(writes still go to primary or all replicas)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Geographic Distribution and Latency</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`GEO-REPLICATION FOR LOW LATENCY:

Without Geo-Replication:
                     100ms latency
[User in Asia] -----------------> [Server in US]
                  ^
                  |
    High latency due to distance


With Geo-Replication:
                      5ms latency
[User in Asia] ------> [Asia Replica]
                             |
                       (Sync in background)
                             |
                       [US Primary]

GLOBAL DISTRIBUTION:
====================

         [Europe Replica]
               /|\
              / | \
             /  |  \
            /   |   \
           /    |    \
[US Primary]----+----[Asia Replica]
            \   |   /
             \  |  /
              \ | /
               \|/
         [Australia Replica]

Users connect to nearest replica:
- US users      -> US Primary      (~10ms)
- EU users      -> Europe Replica  (~20ms)
- Asia users    -> Asia Replica    (~15ms)
- AU users      -> Australia Rep.  (~25ms)

vs. ALL users going to US Primary:
- US users      -> US Primary      (~10ms)
- EU users      -> US Primary      (~100ms)
- Asia users    -> US Primary      (~150ms)
- AU users      -> US Primary      (~180ms)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. Data Locality</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Locality Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Benefit</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Geographic Locality</td>
            <td className="p-3 border">Data stored near users</td>
            <td className="p-3 border">Reduced network latency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Regulatory Compliance</td>
            <td className="p-3 border">Data stored in specific regions</td>
            <td className="p-3 border">GDPR, data sovereignty laws</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Edge Computing</td>
            <td className="p-3 border">Replicas at edge locations</td>
            <td className="p-3 border">Ultra-low latency for IoT</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CDN Caching</td>
            <td className="p-3 border">Content replicated to PoPs</td>
            <td className="p-3 border">Fast content delivery</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">6. Disaster Recovery</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DISASTER RECOVERY STRATEGIES:

1. COLD STANDBY
================
[Primary DC] ----Periodic Backup----> [Backup DC]
                 (Every few hours)

RTO: Hours to Days
RPO: Hours of data loss
Cost: Low


2. WARM STANDBY
================
[Primary DC] ----Async Replication----> [Warm DC]
                 (Minutes delay)         (Systems ready)

RTO: Minutes to Hours
RPO: Minutes of data loss
Cost: Medium


3. HOT STANDBY
===============
[Primary DC] <--Sync Replication--> [Hot DC]
                (Real-time)          (Active systems)

RTO: Seconds to Minutes
RPO: Zero data loss
Cost: High


DISASTER RECOVERY METRICS:
==========================
RTO (Recovery Time Objective):
- Maximum acceptable downtime
- How long can you be offline?

RPO (Recovery Point Objective):
- Maximum acceptable data loss
- How much data can you afford to lose?

Example Business Requirements:
- Banking: RTO < 1 hour, RPO = 0 (no data loss)
- E-commerce: RTO < 4 hours, RPO < 1 hour
- Blog: RTO < 24 hours, RPO < 24 hours`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cost-Benefit Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Benefit</th>
            <th className="p-3 border">Cost</th>
            <th className="p-3 border">Trade-off</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">High Availability</td>
            <td className="p-3 border text-red-600">Storage cost (N times)</td>
            <td className="p-3 border">Worth it for critical systems</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-green-600">Read Scalability</td>
            <td className="p-3 border text-red-600">Consistency complexity</td>
            <td className="p-3 border">Great for read-heavy workloads</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-green-600">Low Latency</td>
            <td className="p-3 border text-red-600">Network bandwidth</td>
            <td className="p-3 border">Essential for global users</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-green-600">Disaster Recovery</td>
            <td className="p-3 border text-red-600">Infrastructure cost</td>
            <td className="p-3 border">Insurance against catastrophe</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-green-600">Data Durability</td>
            <td className="p-3 border text-red-600">Sync overhead</td>
            <td className="p-3 border">Non-negotiable for data safety</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">When NOT to Replicate</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Scenarios Where Replication May Not Be Needed:
==============================================

1. TEMPORARY/EPHEMERAL DATA
   - Session data that can be regenerated
   - Cached computations
   - Logs that can be re-derived

2. COST-PROHIBITIVE SCENARIOS
   - Very large datasets with low access frequency
   - Development/test environments
   - Non-critical batch processing data

3. STRONG CONSISTENCY REQUIREMENTS
   - When you need immediate consistency across all nodes
   - Transaction-heavy systems (consider single-node first)

4. SIMPLE APPLICATIONS
   - Single-user applications
   - Small-scale services with acceptable downtime

QUESTIONS TO ASK:
=================
- What happens if this data is lost?
- What's the acceptable downtime?
- What's the read vs write ratio?
- Is geographic distribution needed?
- What's the budget for infrastructure?`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Reliability: Replication protects against data loss and node failures</li>
        <li>Availability: Multiple replicas enable 99.999%+ uptime through failover</li>
        <li>Performance: Read replicas scale read throughput linearly</li>
        <li>Latency: Geo-replication brings data closer to users</li>
        <li>Disaster Recovery: Replicas in different regions protect against disasters</li>
        <li>Cost trade-off: Storage and bandwidth costs increase with replication</li>
        <li>Complexity trade-off: Consistency becomes harder to maintain</li>
        <li>Decision factors: Criticality, access patterns, budget, and compliance needs</li>
      </ul>
    </div>
  </div>
);

export default ReplicationReasons;
