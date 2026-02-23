import React from "react";

const DistDBArchitecture: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distributed Database Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Distributed Database Architecture defines how data is organized, stored, and managed across
      multiple sites in a network. The architecture determines how components interact, how data
      is distributed, and how transparency is achieved for end users.
    </p>

    <h2 className="text-3xl font-bold mt-8">Reference Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ANSI/SPARC Extended Architecture for DDBMS:

                    +-------------------------+
                    |    Global External      |
                    |    Schema (GES)         |
                    |  (User Views)           |
                    +-------------------------+
                              |
                    +-------------------------+
                    |    Global Conceptual    |
                    |    Schema (GCS)         |
                    |  (Logical Structure)    |
                    +-------------------------+
                              |
        +---------------------+---------------------+
        |                     |                     |
+---------------+     +---------------+     +---------------+
| Local         |     | Local         |     | Local         |
| Conceptual    |     | Conceptual    |     | Conceptual    |
| Schema (LCS)  |     | Schema (LCS)  |     | Schema (LCS)  |
+---------------+     +---------------+     +---------------+
        |                     |                     |
+---------------+     +---------------+     +---------------+
| Local         |     | Local         |     | Local         |
| Internal      |     | Internal      |     | Internal      |
| Schema (LIS)  |     | Schema (LIS)  |     | Schema (LIS)  |
+---------------+     +---------------+     +---------------+
        |                     |                     |
    [Site 1]              [Site 2]              [Site 3]`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Schema Levels</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Schema Level</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Global External Schema</td>
            <td className="p-3 border">User views of the distributed data</td>
            <td className="p-3 border">Application-specific data views</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Global Conceptual Schema</td>
            <td className="p-3 border">Logical view of entire database</td>
            <td className="p-3 border">Global data definitions and relationships</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fragmentation Schema</td>
            <td className="p-3 border">How data is divided into fragments</td>
            <td className="p-3 border">Define horizontal/vertical fragments</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Allocation Schema</td>
            <td className="p-3 border">Where fragments are stored</td>
            <td className="p-3 border">Map fragments to physical sites</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Local Conceptual Schema</td>
            <td className="p-3 border">Logical view at each site</td>
            <td className="p-3 border">Site-specific data structure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Local Internal Schema</td>
            <td className="p-3 border">Physical storage at each site</td>
            <td className="p-3 border">Indexes, storage structures</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Architecture Types</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Client-Server Architecture</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Client-Server Distributed Database:

+----------+     +----------+     +----------+
| Client 1 |     | Client 2 |     | Client 3 |
+----------+     +----------+     +----------+
      |               |               |
      +-------+-------+-------+-------+
              |       |       |
              |   NETWORK     |
              |               |
      +-------+-------+-------+-------+
      |               |               |
+----------+     +----------+     +----------+
| Server A |     | Server B |     | Server C |
| (DB_A)   |     | (DB_B)   |     | (DB_C)   |
+----------+     +----------+     +----------+

Characteristics:
- Clear separation of concerns
- Clients handle presentation
- Servers manage data
- Can have multiple servers with different data`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Peer-to-Peer Architecture</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Peer-to-Peer Distributed Database:

+----------+         +----------+
| Node A   |<------->| Node B   |
| (Client+ |         | (Client+ |
|  Server) |         |  Server) |
+----------+         +----------+
      ^                   ^
      |                   |
      |    +----------+   |
      +--->| Node C   |<--+
           | (Client+ |
           |  Server) |
           +----------+

Characteristics:
- Each node can be client and server
- No central coordinator
- Symmetric capabilities
- More resilient to failures`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Multi-Database System (MDBS)</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Multi-Database System Architecture:

        +---------------------------+
        |    Global Application     |
        +---------------------------+
                    |
        +---------------------------+
        |      MDBS Middleware      |
        | (Integration & Mapping)   |
        +---------------------------+
          /         |         \\
         /          |          \\
+--------+    +--------+    +--------+
| DBMS 1 |    | DBMS 2 |    | DBMS 3 |
|(Oracle)|    |(MySQL) |    |(Mongo) |
+--------+    +--------+    +--------+
     |             |             |
+--------+    +--------+    +--------+
| Local  |    | Local  |    | Local  |
| Apps   |    | Apps   |    | Apps   |
+--------+    +--------+    +--------+

Characteristics:
- Autonomous local databases
- Loose coupling
- Preserves local independence
- Integration through middleware`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Architecture Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Client-Server</th>
            <th className="p-3 border">Peer-to-Peer</th>
            <th className="p-3 border">MDBS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Autonomy</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Heterogeneity</td>
            <td className="p-3 border">Homogeneous</td>
            <td className="p-3 border">Usually Homogeneous</td>
            <td className="p-3 border">Heterogeneous</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Distribution</td>
            <td className="p-3 border">Centralized control</td>
            <td className="p-3 border">Distributed control</td>
            <td className="p-3 border">Federated control</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Case</td>
            <td className="p-3 border">Enterprise apps</td>
            <td className="p-3 border">Collaborative systems</td>
            <td className="p-3 border">Legacy integration</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Component Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DDBMS Component Architecture:

+----------------------------------------------------------+
|                    User Interface Layer                   |
+----------------------------------------------------------+
                            |
+----------------------------------------------------------+
|                  Query Processing Layer                   |
|  +----------------+  +---------------+  +---------------+ |
|  | Query Parser   |  | Query         |  | Query         | |
|  |                |  | Optimizer     |  | Executor      | |
|  +----------------+  +---------------+  +---------------+ |
+----------------------------------------------------------+
                            |
+----------------------------------------------------------+
|                Transaction Management Layer               |
|  +----------------+  +---------------+  +---------------+ |
|  | Transaction    |  | Concurrency   |  | Recovery      | |
|  | Coordinator    |  | Control       |  | Manager       | |
|  +----------------+  +---------------+  +---------------+ |
+----------------------------------------------------------+
                            |
+----------------------------------------------------------+
|                 Data Management Layer                     |
|  +----------------+  +---------------+  +---------------+ |
|  | Data           |  | Replication   |  | Fragmentation | |
|  | Dictionary     |  | Manager       |  | Manager       | |
|  +----------------+  +---------------+  +---------------+ |
+----------------------------------------------------------+
                            |
+----------------------------------------------------------+
|                   Communication Layer                     |
|  +----------------+  +---------------+  +---------------+ |
|  | Network        |  | Message       |  | Protocol      | |
|  | Interface      |  | Handler       |  | Manager       | |
|  +----------------+  +---------------+  +---------------+ |
+----------------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Distribution Strategies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Pros</th>
            <th className="p-3 border">Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Partitioned</td>
            <td className="p-3 border">Data divided among sites</td>
            <td className="p-3 border">No redundancy, efficient storage</td>
            <td className="p-3 border">Lower availability</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Replicated (Full)</td>
            <td className="p-3 border">Complete copy at each site</td>
            <td className="p-3 border">High availability, fast reads</td>
            <td className="p-3 border">High storage, slow writes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Partially Replicated</td>
            <td className="p-3 border">Some data replicated</td>
            <td className="p-3 border">Balance of both approaches</td>
            <td className="p-3 border">Complex management</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Autonomy Dimensions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Three Dimensions of Autonomy in DDBMS:

1. DESIGN AUTONOMY
   - Freedom to choose data model
   - Freedom to define schema
   - Freedom to select constraints
   Example: Each site can use different naming conventions

2. COMMUNICATION AUTONOMY
   - Freedom to decide what to share
   - Freedom to choose when to respond
   - Control over incoming requests
   Example: Site can reject certain queries

3. EXECUTION AUTONOMY
   - Freedom to execute local operations
   - Control over transaction ordering
   - Independent scheduling
   Example: Local transactions get priority

Autonomy Spectrum:
|--------------|-----------------|--------------|
Tight          Partial           Full
Integration    Integration       Autonomy
(Homogeneous)  (Federated)      (Multi-DB)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DDBMS architecture extends ANSI/SPARC with global and local schemas</li>
        <li>Three main architectures: Client-Server, Peer-to-Peer, Multi-Database</li>
        <li>Global schema provides unified view; local schemas handle site-specific storage</li>
        <li>Data distribution can be partitioned, fully replicated, or partially replicated</li>
        <li>Autonomy levels: design, communication, and execution autonomy</li>
        <li>Architecture choice depends on requirements: consistency, availability, integration needs</li>
      </ul>
    </div>
  </div>
);

export default DistDBArchitecture;
