import React from "react";

const DataAllocation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Allocation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data Allocation is the process of deciding where to place data fragments in a distributed
      database system. After fragmentation divides relations into fragments, allocation determines
      which sites will store each fragment. The goal is to optimize performance, availability,
      and cost while meeting application requirements.
    </p>

    <h2 className="text-3xl font-bold mt-8">Data Allocation Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Allocation Process:

Step 1: Fragmentation
+------------------+
|  Original Table  |
+------------------+
         |
    Fragment into
         |
    +----+----+
    |    |    |
   F1   F2   F3

Step 2: Allocation (Where to place?)

   F1         F2         F3
    |          |          |
    v          v          v
+------+   +------+   +------+
|Site A|   |Site B|   |Site C|
+------+   +------+   +------+

Allocation Strategies:
1. Non-replicated (Partitioned)
2. Fully Replicated
3. Partially Replicated

Trade-offs:
- Storage Cost vs Availability
- Read Performance vs Write Performance
- Network Traffic vs Redundancy`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Allocation Strategies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Read Perf</th>
            <th className="p-3 border">Write Perf</th>
            <th className="p-3 border">Availability</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Partitioned</td>
            <td className="p-3 border">One copy of each fragment</td>
            <td className="p-3 border">Depends on location</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Fully Replicated</td>
            <td className="p-3 border">All fragments at all sites</td>
            <td className="p-3 border">Very Fast</td>
            <td className="p-3 border">Slow</td>
            <td className="p-3 border">Very High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Partially Replicated</td>
            <td className="p-3 border">Some fragments replicated</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Partitioned (Non-Replicated) Allocation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Partitioned Allocation:

Each fragment stored at exactly one site.

   F1          F2          F3
    |           |           |
    v           v           v
+------+    +------+    +------+
|Site A|    |Site B|    |Site C|
|      |    |      |    |      |
| [F1] |    | [F2] |    | [F3] |
+------+    +------+    +------+

Characteristics:
- No data redundancy
- Minimum storage cost
- Maximum storage efficiency
- Single point of failure per fragment

Example:
EMPLOYEE fragmented by Region:
- F_North -> New York office server
- F_South -> Atlanta office server
- F_West  -> Seattle office server

Advantages:
+ Efficient storage utilization
+ Fast writes (no replication overhead)
+ Clear data ownership

Disadvantages:
- Site failure = data unavailable
- Remote reads can be slow
- No load balancing for reads`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fully Replicated Allocation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Fully Replicated Allocation:

Complete copy of database at every site.

+------+    +------+    +------+
|Site A|    |Site B|    |Site C|
|      |    |      |    |      |
| [F1] |    | [F1] |    | [F1] |
| [F2] |    | [F2] |    | [F2] |
| [F3] |    | [F3] |    | [F3] |
+------+    +------+    +------+

Characteristics:
- Maximum redundancy
- Highest availability
- Fastest read performance
- Most expensive (storage)
- Slowest writes (must update all copies)

Replication Factor = Number of Sites

Example with 3 sites:
- Storage needed: 3x original data
- Write operations: Must update 3 sites
- Read operations: Local access always available

Use Cases:
- Read-heavy workloads
- High availability requirements
- Small to medium databases
- Reference data / lookup tables`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Partially Replicated Allocation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Partially Replicated Allocation:

Some fragments replicated based on access patterns.

+------+    +------+    +------+
|Site A|    |Site B|    |Site C|
|      |    |      |    |      |
| [F1] |    | [F1] |    | [F2] |
| [F2] |    | [F3] |    | [F3] |
+------+    +------+    +------+

Fragment Allocation Matrix:
         | Site A | Site B | Site C |
---------|--------|--------|--------|
   F1    |   X    |   X    |        |
   F2    |   X    |        |   X    |
   F3    |        |   X    |   X    |

Replication Factor:
- F1: 2 (Sites A, B)
- F2: 2 (Sites A, C)
- F3: 2 (Sites B, C)

Design Considerations:
1. Frequently accessed fragments -> More replicas
2. Hot data -> Replicate at accessing sites
3. Critical data -> Higher replication factor
4. Large data -> Fewer replicas (cost)

This is the most common strategy in practice.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Allocation Factors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Factor</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Access Frequency</td>
            <td className="p-3 border">How often data is accessed from each site</td>
            <td className="p-3 border">Place data near frequent accessors</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Read/Write Ratio</td>
            <td className="p-3 border">Proportion of reads vs writes</td>
            <td className="p-3 border">More reads = more replication beneficial</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network Cost</td>
            <td className="p-3 border">Communication cost between sites</td>
            <td className="p-3 border">Minimize remote access</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Storage Cost</td>
            <td className="p-3 border">Cost of storing data at each site</td>
            <td className="p-3 border">Balance with replication benefits</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Availability Requirement</td>
            <td className="p-3 border">Required uptime and fault tolerance</td>
            <td className="p-3 border">Higher = more replication</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Site Capacity</td>
            <td className="p-3 border">Processing and storage capacity</td>
            <td className="p-3 border">Constrain allocation options</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cost Model for Allocation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Allocation Cost Model:

Total Cost = Query Processing Cost + Update Cost + Storage Cost

For fragment Fi at site Sj:

Query Cost:
QC(Fi, Sj) = SUM over all queries q accessing Fi:
             freq(q) * [local_cost(q) + remote_cost(q) * distance(origin, Sj)]

Update Cost:
UC(Fi) = SUM over all updates u:
         freq(u) * num_replicas(Fi) * update_cost(u)

Storage Cost:
SC(Fi, Sj) = size(Fi) * storage_rate(Sj)

-----------------------------------------

Example Calculation:

Fragment F1 (size: 100MB)
Sites: A (local), B (remote)
Queries: Q1 (100/day, reads F1), Q2 (50/day, reads F1)
Updates: U1 (20/day, modifies F1)

Option 1: F1 at Site A only
- Query cost from A: 150 * 1 = 150
- Query cost from B: 0 (no queries from B)
- Update cost: 20 * 1 * 1 = 20
- Storage: 100 * 1 = 100
- Total: 270

Option 2: F1 replicated at A and B
- Query cost from A: 150 * 1 = 150
- Query cost from B: Local access
- Update cost: 20 * 2 * 1 = 40
- Storage: 100 * 2 = 200
- Total: 390 (but faster reads from B)

Choose based on specific requirements.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Allocation Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Simple Allocation Algorithm:

INPUT:
- Set of fragments F = {F1, F2, ..., Fn}
- Set of sites S = {S1, S2, ..., Sm}
- Access patterns and frequencies
- Cost functions

ALGORITHM:
1. For each fragment Fi:
   a. Calculate benefit of placing at each site:
      benefit(Fi, Sj) = query_cost_reduction(Fi, Sj)
                      - update_cost_increase(Fi, Sj)
                      - storage_cost(Fi, Sj)

   b. Sort sites by benefit

   c. Allocate Fi to site(s) with highest benefit
      - Single copy: highest benefit site
      - Replicated: all sites with benefit > threshold

   d. If availability requirement not met:
      - Add replicas at next best sites

2. Validate allocation:
   - Check storage constraints
   - Verify availability requirements
   - Ensure query performance goals met

3. Iterate and optimize:
   - Adjust based on actual usage patterns
   - Rebalance if access patterns change

OUTPUT:
Allocation matrix A[fragment][site] = {0, 1}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Replication Strategies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Consistency</th>
            <th className="p-3 border">Performance</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Synchronous</td>
            <td className="p-3 border">Strong (all replicas updated)</td>
            <td className="p-3 border">Slower writes</td>
            <td className="p-3 border">Financial systems</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Asynchronous</td>
            <td className="p-3 border">Eventual consistency</td>
            <td className="p-3 border">Fast writes</td>
            <td className="p-3 border">Social media, caching</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Semi-Synchronous</td>
            <td className="p-3 border">Quorum-based</td>
            <td className="p-3 border">Balanced</td>
            <td className="p-3 border">E-commerce, general apps</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Real-World Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`E-Commerce Company - Data Allocation Example:

Sites:
- US-East (Virginia)
- US-West (Oregon)
- EU (Frankfurt)
- Asia (Singapore)

Data Fragments:
1. Products (reference data, read-heavy)
2. Orders_US, Orders_EU, Orders_Asia (transactional)
3. Users_US, Users_EU, Users_Asia (user profiles)
4. Inventory (frequently updated)

Allocation Decision:

+-------------+--------+--------+------+------+
| Fragment    | US-E   | US-W   | EU   | Asia |
+-------------+--------+--------+------+------+
| Products    |   X    |   X    |  X   |  X   | <- Full replication
| Orders_US   |   X    |   X    |      |      | <- Regional + backup
| Orders_EU   |        |        |  X   |      | <- Regional only
| Orders_Asia |        |        |      |  X   | <- Regional only
| Users_US    |   X    |   X    |      |      | <- Regional + backup
| Users_EU    |   X    |        |  X   |      | <- Regional + DR
| Users_Asia  |        |        |  X   |  X   | <- Regional + DR
| Inventory   |   X    |        |      |      | <- Single master
+-------------+--------+--------+------+------+

Rationale:
- Products: Read everywhere, change rarely -> Full replication
- Orders: Written by region, backed up for DR
- Users: Regional primary with cross-region DR
- Inventory: Single source of truth (consistency critical)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data allocation decides where to place fragments after fragmentation</li>
        <li>Three strategies: Partitioned (no replication), Fully Replicated, Partially Replicated</li>
        <li>Key factors: access patterns, read/write ratio, network cost, availability needs</li>
        <li>Replication improves read performance and availability but increases write cost</li>
        <li>Cost model balances query cost, update cost, and storage cost</li>
        <li>Partial replication is most common, balancing performance and cost</li>
        <li>Allocation should be re-evaluated as access patterns change over time</li>
      </ul>
    </div>
  </div>
);

export default DataAllocation;
