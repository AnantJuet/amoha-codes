import React from "react";

const DistributedDatabases: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Distributed Databases</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A distributed database is a collection of multiple interconnected databases
      spread across different locations, connected via a network. Users access the
      data as if it were a single logical database.
    </p>

    <h2 className="text-3xl font-bold mt-8">Distributed Database Concepts</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed Database System:

          Network
    ┌────────┼────────┐
    │        │        │
  [DB1]    [DB2]    [DB3]
 Site A   Site B   Site C

Key Properties:
1. Data distributed across sites
2. Sites connected by network
3. Appears as single database to users
4. Each site has local autonomy

DDBMS Components:
- Local DBMS at each site
- Distributed transaction manager
- Data communication component`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Distribution Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. Replication: Same data at multiple sites

Full Replication:
Site A: [All Data]
Site B: [All Data]
Site C: [All Data]
+ Fast reads (local access)
- Slow writes (update all copies)
- Storage overhead

2. Fragmentation: Data split across sites

Horizontal (by rows):
Site A: Customers 1-1000
Site B: Customers 1001-2000
Site C: Customers 2001-3000

Vertical (by columns):
Site A: customer_id, name, email
Site B: customer_id, address, phone

3. Hybrid: Combination of both
- Fragment data
- Replicate some fragments`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transparency Levels</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distribution Transparency:

1. Location Transparency
   - User doesn't know where data is stored
   - Same query works regardless of location

2. Fragmentation Transparency
   - User doesn't know data is fragmented
   - System handles fragment access

3. Replication Transparency
   - User doesn't know data is replicated
   - System maintains consistency

Example:
SELECT * FROM customers WHERE id = 1001;
-- User doesn't know:
-- - Which site has this data
-- - If data is fragmented
-- - If multiple copies exist`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CAP Theorem</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CAP Theorem: Can only guarantee 2 of 3

        Consistency
           /\\
          /  \\
         /    \\
        /      \\
       /________\\
Availability  Partition
              Tolerance

C - Consistency: All nodes see same data
A - Availability: Every request gets response
P - Partition Tolerance: Works despite network splits

Trade-offs:
CP: Consistent but may be unavailable (traditional DB)
AP: Available but may be inconsistent (NoSQL)
CA: Not practical in distributed systems

Examples:
- MySQL Cluster: CP
- Cassandra: AP (tunable)
- MongoDB: CP (by default)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Two-Phase Commit (2PC)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`2PC: Ensures atomic commit across sites

Coordinator          Participants
    |                 /    \\
    |              Site1  Site2
    |
Phase 1: Prepare
    |----PREPARE---->|
    |                |
    |<---VOTE YES----|
    |<---VOTE YES----|
    |
Phase 2: Commit
    |----COMMIT----->|
    |                |
    |<----ACK--------|
    |<----ACK--------|

Rules:
- All vote YES → COMMIT
- Any vote NO → ABORT
- Coordinator decides final outcome

Issues:
- Blocking if coordinator fails
- Performance overhead`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed Query Processing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Query Processing in Distributed DB:

Query: SELECT * FROM A JOIN B ON A.id = B.id
A is at Site 1
B is at Site 2

Strategies:

1. Ship A to Site 2
   - Transfer entire A
   - Join locally at Site 2

2. Ship B to Site 1
   - Transfer entire B
   - Join locally at Site 1

3. Semijoin
   - Send A.id to Site 2
   - Site 2 sends matching B rows
   - Reduces data transfer

Optimization considers:
- Data size at each site
- Network bandwidth
- Processing power at sites`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Challenges</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Challenges</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Improved reliability</td>
            <td className="p-3 border">Complexity</td>
          </tr>
          <tr>
            <td className="p-3 border">Better performance (local access)</td>
            <td className="p-3 border">Network dependency</td>
          </tr>
          <tr>
            <td className="p-3 border">Scalability</td>
            <td className="p-3 border">Data consistency</td>
          </tr>
          <tr>
            <td className="p-3 border">Local autonomy</td>
            <td className="p-3 border">Security across sites</td>
          </tr>
          <tr>
            <td className="p-3 border">Fault tolerance</td>
            <td className="p-3 border">Distributed transaction cost</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Distributed DB spans multiple sites</li>
        <li>Data can be replicated or fragmented</li>
        <li>CAP theorem: choose 2 of 3 properties</li>
        <li>2PC ensures atomic distributed commits</li>
        <li>Transparency hides distribution from users</li>
      </ul>
    </div>
  </div>
);

export default DistributedDatabases;
