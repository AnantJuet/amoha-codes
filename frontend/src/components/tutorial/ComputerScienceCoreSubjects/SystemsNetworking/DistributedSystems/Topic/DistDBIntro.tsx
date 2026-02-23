import React from "react";

const DistDBIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Distributed Databases
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Distributed Database (DDB) is a collection of multiple, logically interrelated databases
      distributed over a computer network. A Distributed Database Management System (DDBMS) is the
      software that manages the distributed database and provides an access mechanism that makes
      the distribution transparent to users.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Distributed Database?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed Database System Overview:

     Site A                    Site B                    Site C
  +-----------+            +-----------+            +-----------+
  |  Local DB |            |  Local DB |            |  Local DB |
  |   (DB_A)  |            |   (DB_B)  |            |   (DB_C)  |
  +-----------+            +-----------+            +-----------+
       |                        |                        |
       |     Communication      |                        |
       +----------Network-------+------------------------+
                            |
                    +---------------+
                    |    DDBMS      |
                    | (Distributed  |
                    | Database      |
                    | Management    |
                    | System)       |
                    +---------------+
                            |
                    +---------------+
                    |  User/Apps    |
                    | (Single View) |
                    +---------------+

Key Idea: Multiple databases appear as ONE to the user`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Centralized vs Distributed Databases</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Centralized Database</th>
            <th className="p-3 border">Distributed Database</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Location</td>
            <td className="p-3 border">Single site</td>
            <td className="p-3 border">Multiple sites</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Single Point of Failure</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No (with replication)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Vertical (scale-up)</td>
            <td className="p-3 border">Horizontal (scale-out)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Availability</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Performance</td>
            <td className="p-3 border">Limited by single machine</td>
            <td className="p-3 border">Parallel processing possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cost</td>
            <td className="p-3 border">Lower initial cost</td>
            <td className="p-3 border">Higher but better TCO at scale</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Distributed Databases?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Motivations for Distributed Databases:

1. ORGANIZATIONAL STRUCTURE
   - Organizations are geographically distributed
   - Data should be close to where it's used
   - Example: Multinational companies with regional offices

2. PERFORMANCE
   - Reduce data transfer over network
   - Local data access is faster
   - Parallel query processing

3. RELIABILITY & AVAILABILITY
   - No single point of failure
   - Replicated data survives node failures
   - Continuous operation even during failures

4. SCALABILITY
   - Add more nodes as data grows
   - Horizontal scaling is more economical
   - Handle increasing workloads

5. ECONOMICS
   - Use commodity hardware
   - Lower cost than mainframes
   - Incremental growth possible`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Distributed Databases</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Homogeneous</td>
            <td className="p-3 border">Same DBMS at all sites, same schema</td>
            <td className="p-3 border">Oracle distributed across sites</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Heterogeneous</td>
            <td className="p-3 border">Different DBMS at different sites</td>
            <td className="p-3 border">Oracle + MySQL + PostgreSQL</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Federated</td>
            <td className="p-3 border">Autonomous databases with integration layer</td>
            <td className="p-3 border">Enterprise data integration</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Homogeneous vs Heterogeneous Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HOMOGENEOUS DISTRIBUTED DATABASE:

  Site 1          Site 2          Site 3
+--------+      +--------+      +--------+
| Oracle |      | Oracle |      | Oracle |
| v19c   |      | v19c   |      | v19c   |
+--------+      +--------+      +--------+
    |               |               |
    +-------+-------+-------+-------+
            |       |       |
     Same DBMS, Same Schema, Same Interface

Advantages:
- Easier to manage
- Uniform query processing
- Simpler transaction management

-------------------------------------------

HETEROGENEOUS DISTRIBUTED DATABASE:

  Site 1          Site 2          Site 3
+--------+      +--------+      +--------+
| Oracle |      | MySQL  |      |Postgres|
+--------+      +--------+      +--------+
    |               |               |
+---+---------------+---------------+---+
|           Middleware Layer            |
|    (Query Translation, Mapping)       |
+---------------------------------------+

Challenges:
- Query translation needed
- Different data types
- Schema mapping complexity`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transparency in Distributed Databases</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Transparency Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">User Benefit</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Location Transparency</td>
            <td className="p-3 border">User doesn't need to know where data is stored</td>
            <td className="p-3 border">Access data without knowing physical location</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fragmentation Transparency</td>
            <td className="p-3 border">User is unaware of data fragmentation</td>
            <td className="p-3 border">Query as if data is not fragmented</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Replication Transparency</td>
            <td className="p-3 border">User is unaware of data replication</td>
            <td className="p-3 border">No need to manage replicas</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concurrency Transparency</td>
            <td className="p-3 border">Concurrent transactions appear sequential</td>
            <td className="p-3 border">Isolation from other users</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failure Transparency</td>
            <td className="p-3 border">Failures are hidden from users</td>
            <td className="p-3 border">Continuous operation despite failures</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">DDBMS Components</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DDBMS Architecture Components:

+--------------------------------------------------+
|                 User Interface                    |
+--------------------------------------------------+
                        |
+--------------------------------------------------+
|              Global Query Processor               |
|  - Query parsing and optimization                 |
|  - Distributed query planning                     |
+--------------------------------------------------+
                        |
+--------------------------------------------------+
|           Global Transaction Manager              |
|  - Distributed transaction coordination           |
|  - Two-phase commit protocol                      |
|  - Deadlock detection                             |
+--------------------------------------------------+
                        |
+--------------------------------------------------+
|             Global Data Dictionary                |
|  - Schema information                             |
|  - Fragmentation details                          |
|  - Allocation information                         |
+--------------------------------------------------+
                        |
    +---------------+---------------+
    |               |               |
+-------+       +-------+       +-------+
| Local |       | Local |       | Local |
| DBMS  |       | DBMS  |       | DBMS  |
| Site1 |       | Site2 |       | Site3 |
+-------+       +-------+       +-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>A Distributed Database is a collection of logically related databases spread across multiple sites</li>
        <li>DDBMS provides transparency, making distribution invisible to users</li>
        <li>Key benefits: improved reliability, availability, performance, and scalability</li>
        <li>Homogeneous systems use the same DBMS; heterogeneous use different DBMSs</li>
        <li>Transparency types: location, fragmentation, replication, concurrency, and failure</li>
        <li>Trade-offs include increased complexity and network dependency</li>
      </ul>
    </div>
  </div>
);

export default DistDBIntro;
