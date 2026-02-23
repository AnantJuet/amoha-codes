import React from "react";

const DFSArchitecture: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distributed File System Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      DFS architecture defines how files are organized, accessed, and managed across multiple
      networked computers. Understanding the architectural models helps in designing systems
      that balance performance, scalability, consistency, and fault tolerance.
    </p>

    <h2 className="text-3xl font-bold mt-8">Client-Server Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Traditional Client-Server DFS Architecture:

+----------+  +----------+  +----------+
| Client 1 |  | Client 2 |  | Client 3 |
+----------+  +----------+  +----------+
     |             |             |
     +-------------+-------------+
                   |
              [ Network ]
                   |
     +-------------+-------------+
     |             |             |
+----------+  +----------+  +----------+
| Server 1 |  | Server 2 |  | Server 3 |
| (Files   |  | (Files   |  | (Files   |
|  A-H)    |  |  I-P)    |  |  Q-Z)    |
+----------+  +----------+  +----------+

Characteristics:
- Centralized metadata management
- Server handles all file operations
- Clients make remote procedure calls
- Simple but limited scalability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DFS Service Components</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Operations</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Flat File Service</td>
            <td className="p-3 border">Basic file operations using UFIDs</td>
            <td className="p-3 border">Read, Write, Create, Delete, GetAttributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Directory Service</td>
            <td className="p-3 border">Name-to-UFID mapping</td>
            <td className="p-3 border">Lookup, AddName, RemoveName, GetNames</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Client Module</td>
            <td className="p-3 border">Interface for applications</td>
            <td className="p-3 border">open, close, read, write, seek</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Layered Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DFS Layered Architecture:

CLIENT SIDE                          SERVER SIDE
+------------------------+           +------------------------+
|      Application       |           |     File Service       |
+------------------------+           +------------------------+
           |                                    |
+------------------------+           +------------------------+
|    Client Module       |           |   Directory Service    |
| (UNIX file interface)  |           +------------------------+
+------------------------+                      |
           |                         +------------------------+
+------------------------+           |   Flat File Service    |
|    Virtual File System |           +------------------------+
|         (VFS)          |                      |
+------------------------+           +------------------------+
           |                         |    Storage Module      |
+------------------------+           +------------------------+
|      Local FS          |                      |
+------------------------+           +------------------------+
           |                         |      Local Disk        |
+------------------------+           +------------------------+
|      Local Disk        |
+------------------------+

Data Flow:
1. App calls open("/remote/file")
2. Client Module intercepts call
3. VFS routes to appropriate handler
4. RPC sent to server's Directory Service
5. Directory returns UFID
6. Flat File Service handles I/O
7. Data returned to client`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stateless vs Stateful Servers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Stateless Server</th>
            <th className="p-3 border">Stateful Server</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">State Storage</td>
            <td className="p-3 border">No client state kept</td>
            <td className="p-3 border">Maintains client session info</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Request Format</td>
            <td className="p-3 border">Self-contained (UFID, position, count)</td>
            <td className="p-3 border">Uses file handles, implicit position</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failure Recovery</td>
            <td className="p-3 border">Easy - just retry request</td>
            <td className="p-3 border">Complex - restore state</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Performance</td>
            <td className="p-3 border">More network overhead</td>
            <td className="p-3 border">Better caching, locks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Example</td>
            <td className="p-3 border">NFS v2, v3</td>
            <td className="p-3 border">AFS, NFS v4</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stateless Server Design</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Stateless Server Operations:

Each request contains all information needed:

Read(UFID, position, count) -> data
Write(UFID, position, data) -> void
Create() -> UFID
Delete(UFID) -> void
GetAttributes(UFID) -> Attr
SetAttributes(UFID, Attr) -> void

Example: Reading a file
+---------+                           +---------+
| Client  |                           | Server  |
+---------+                           +---------+
     |                                     |
     | Read(UFID=abc123, pos=0, count=100) |
     |------------------------------------>|
     |                                     |
     |            data[0..99]              |
     |<------------------------------------|
     |                                     |
     | Read(UFID=abc123, pos=100, count=50)|
     |------------------------------------>|
     |                                     |
     |            data[100..149]           |
     |<------------------------------------|

Advantages:
- Server crash: just restart, no state lost
- Client crash: server doesn't need cleanup
- Idempotent operations (can safely retry)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stateful Server Design</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Stateful Server Operations:

Server maintains:
- Open file table
- File positions
- Locks held by clients
- Client session information

Example: Reading a file
+---------+                           +---------+
| Client  |                           | Server  |
+---------+                           +---------+
     |                                     |
     | Open("/path/file", READ)            |
     |------------------------------------>|
     |                                     | Create session
     |            FileHandle=FH1           | Store: FH1->file, pos=0
     |<------------------------------------|
     |                                     |
     | Read(FH1, 100)                      |
     |------------------------------------>|
     |                                     | Lookup FH1, read at pos
     |            data[0..99]              | Update pos=100
     |<------------------------------------|
     |                                     |
     | Read(FH1, 50)                       |
     |------------------------------------>|
     |                                     | pos already at 100
     |            data[100..149]           | Update pos=150
     |<------------------------------------|
     |                                     |
     | Close(FH1)                          |
     |------------------------------------>|
     |                                     | Remove session
     |            OK                       |
     |<------------------------------------|

Advantages:
- Better performance (less data per request)
- Can implement locking and leases
- Supports read-ahead caching`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Master-Slave Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Master-Slave (Master-Worker) Architecture:

                    +----------------+
                    |     Master     |
                    | (Metadata Mgr) |
                    +----------------+
                    | - Namespace    |
                    | - File->Chunk  |
                    | - Chunk->Server|
                    | - Replication  |
                    +----------------+
                           |
         +-----------------+-----------------+
         |                 |                 |
         v                 v                 v
+----------------+ +----------------+ +----------------+
|    Slave 1     | |    Slave 2     | |    Slave 3     |
| (Chunk Server) | | (Chunk Server) | | (Chunk Server) |
+----------------+ +----------------+ +----------------+
| Chunk A1, B2   | | Chunk A2, C1   | | Chunk B1, C2   |
+----------------+ +----------------+ +----------------+

File Access Flow:
1. Client asks Master for chunk locations
2. Master returns chunk server addresses
3. Client contacts chunk servers directly
4. Data flows between client and chunk servers
5. Master only handles metadata (not data)

Examples: GFS, HDFS`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cluster-Based Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cluster-Based DFS Architecture:

Metadata Cluster              Data Cluster
+----+----+----+              +----+----+----+----+----+
| M1 | M2 | M3 |              | D1 | D2 | D3 | D4 | D5 |
+----+----+----+              +----+----+----+----+----+
     |                               |
     | Consensus Protocol            | Data Replication
     | (Paxos/Raft)                  | (Chain/Quorum)
     |                               |
+----------+                  +----------+
| Metadata |                  |   Data   |
|  VIP     |                  |  Router  |
+----------+                  +----------+
     |                               |
     +----------- Clients -----------+

Characteristics:
- No single point of failure
- Metadata replicated via consensus
- Data distributed with replication factor
- Horizontal scalability for both metadata and data

Examples: Ceph, GlusterFS`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed Hash Table (DHT) Based</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DHT-Based P2P Architecture:

Consistent Hashing Ring:

                    Node A (0-90)
                         |
        +----------------+----------------+
        |                                 |
   Node D (270-360)               Node B (90-180)
        |                                 |
        +----------------+----------------+
                         |
                    Node C (180-270)

File Placement:
hash("file1.txt") = 45  -> Node A
hash("file2.txt") = 123 -> Node B
hash("file3.txt") = 200 -> Node C
hash("file4.txt") = 300 -> Node D

Replication:
File stored at hash location + N successors
"file1.txt" at Node A, B, C (3x replication)

Advantages:
- No central metadata server
- O(log N) lookup complexity
- Automatic load balancing
- Easy node addition/removal

Examples: Cassandra FS, IPFS`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Architecture Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Architecture</th>
            <th className="p-3 border">Scalability</th>
            <th className="p-3 border">Fault Tolerance</th>
            <th className="p-3 border">Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Client-Server</td>
            <td className="p-3 border text-yellow-600">Limited</td>
            <td className="p-3 border text-red-600">Low</td>
            <td className="p-3 border text-green-600">Simple</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Master-Slave</td>
            <td className="p-3 border text-green-600">High (data)</td>
            <td className="p-3 border text-yellow-600">Medium</td>
            <td className="p-3 border text-yellow-600">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cluster-Based</td>
            <td className="p-3 border text-green-600">Very High</td>
            <td className="p-3 border text-green-600">High</td>
            <td className="p-3 border text-red-600">Complex</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DHT P2P</td>
            <td className="p-3 border text-green-600">Very High</td>
            <td className="p-3 border text-green-600">High</td>
            <td className="p-3 border text-red-600">Complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DFS has three core services: Flat File, Directory, and Client Module</li>
        <li>Stateless servers are simpler but have more network overhead</li>
        <li>Stateful servers enable better caching and locking</li>
        <li>Master-slave separates metadata from data for scalability</li>
        <li>Cluster-based eliminates single points of failure</li>
        <li>DHT enables fully decentralized file location</li>
        <li>Architecture choice depends on scale, consistency, and performance needs</li>
      </ul>
    </div>
  </div>
);

export default DFSArchitecture;
