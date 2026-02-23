import React from "react";

const HDFS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hadoop Distributed File System (HDFS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Hadoop Distributed File System (HDFS) is an open-source distributed file system
      designed to run on commodity hardware. Inspired by Google File System (GFS), HDFS is
      the primary storage system used by Hadoop applications for storing and processing
      large-scale data sets.
    </p>

    <h2 className="text-3xl font-bold mt-8">HDFS Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HDFS Design Goals:

1. Hardware Failure Tolerance:
   Designed for clusters of commodity machines
   Assumes failures are the norm, not exception

2. Streaming Data Access:
   Optimized for batch processing
   High throughput over low latency

3. Large Data Sets:
   Files typically GB to TB in size
   Single cluster can store petabytes

4. Simple Coherency Model:
   Write-once, read-many access pattern
   Appends supported, no random writes

5. Data Locality:
   Move computation to data
   MapReduce jobs run where data is stored

HDFS File Structure:
+------------------------------------------+
|           Large File (512 MB)            |
+------------------------------------------+
| Block 0  | Block 1  | Block 2  | Block 3 |
| (128 MB) | (128 MB) | (128 MB) | (128 MB)|
+----------+----------+----------+---------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HDFS Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HDFS Architecture:

                    +------------------+
                    |    NameNode      |
                    | (Master Server)  |
                    +------------------+
                    | - Namespace      |
                    | - Block mapping  |
                    | - Replication    |
                    +------------------+
                           ^
                           | Heartbeats
                           | Block reports
                           |
     +---------------------+---------------------+
     |                     |                     |
+----------+          +----------+          +----------+
| DataNode |          | DataNode |          | DataNode |
|    1     |          |    2     |          |    3     |
+----------+          +----------+          +----------+
| Block A  |          | Block A  |          | Block B  |
| Block B  |          | Block C  |          | Block C  |
| Block D  |          | Block D  |          | Block A  |
+----------+          +----------+          +----------+

    Local Disk            Local Disk           Local Disk

Client Access:
+--------+
| Client |
+--------+
    |
    | 1. Get block locations from NameNode
    | 2. Read/Write directly to DataNodes
    |
    v`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HDFS Components</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Role</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">NameNode</td>
            <td className="p-3 border">Master / Metadata</td>
            <td className="p-3 border">Manages namespace, block mapping</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DataNode</td>
            <td className="p-3 border">Worker / Data storage</td>
            <td className="p-3 border">Stores blocks, serves read/write</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Secondary NameNode</td>
            <td className="p-3 border">Checkpoint helper</td>
            <td className="p-3 border">Merges edits with fsimage</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Block</td>
            <td className="p-3 border">Data unit</td>
            <td className="p-3 border">128MB default, replicated 3x</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Client</td>
            <td className="p-3 border">User interface</td>
            <td className="p-3 border">CLI, Java API, WebHDFS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">NameNode Details</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NameNode Responsibilities:

1. Namespace Management:
   /user/hadoop/data/
   ├── file1.txt
   ├── file2.csv
   └── subdir/
       └── file3.parquet

2. Block Mapping:
   +------------+---------------------------+
   | File       | Blocks                    |
   +------------+---------------------------+
   | file1.txt  | [blk_1, blk_2]            |
   | file2.csv  | [blk_3, blk_4, blk_5]     |
   +------------+---------------------------+

3. Block Locations (in memory):
   +------------+------------------------+
   | Block      | DataNodes              |
   +------------+------------------------+
   | blk_1      | [DN1, DN2, DN3]        |
   | blk_2      | [DN2, DN3, DN4]        |
   +------------+------------------------+

NameNode Storage:

1. FsImage (Checkpoint):
   - Complete namespace snapshot
   - File-to-block mappings
   - Loaded into memory on startup

2. EditLog (Journal):
   - All namespace modifications
   - Appended for each operation
   - Replayed on restart

Checkpoint Process:
+----------+      +-------------------+
| FsImage  | ---> | Secondary NameNode|
| EditLog  |      | (Checkpoint Node) |
+----------+      +-------------------+
                         |
                  Merge and create
                  new FsImage
                         |
                         v
                  +-------------+
                  | New FsImage |
                  +-------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DataNode Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DataNode Functions:

1. Block Storage:
   /dfs/data/
   ├── current/
   │   ├── BP-xxx/
   │   │   ├── blk_1
   │   │   ├── blk_1.meta  (checksum)
   │   │   ├── blk_2
   │   │   └── blk_2.meta
   │   └── VERSION
   └── in_use.lock

2. Heartbeat (every 3 seconds):
   DataNode -----> NameNode
   "I'm alive, here's my status"

   If no heartbeat for 10 minutes:
   NameNode marks DataNode as dead
   Triggers re-replication

3. Block Report (hourly):
   DataNode -----> NameNode
   "Here are all my blocks: [blk_1, blk_2, ...]"

   NameNode uses this to:
   - Verify block locations
   - Detect missing/corrupt blocks
   - Update block mapping

4. Data Integrity:
   +---------------+
   | Block Data    |
   +---------------+
   | Checksum 1    | CRC-32 per 512 bytes
   | Checksum 2    |
   | Checksum 3    |
   +---------------+

   Verified on read
   Corrupt blocks reported to NameNode`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HDFS Read Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HDFS Read Flow:

+--------+                  +----------+                  +----------+
| Client |                  | NameNode |                  | DataNodes|
+--------+                  +----------+                  +----------+
     |                           |                             |
     | 1. open(file)             |                             |
     |-------------------------->|                             |
     |                           |                             |
     | 2. Block locations        |                             |
     |    (sorted by distance)   |                             |
     |<--------------------------|                             |
     |                           |                             |
     | 3. read() - Connect to    |                             |
     |    nearest DataNode       |                             |
     |-------------------------------------------------->      |
     |                           |                             |
     | 4. Streaming data         |                             |
     |<--------------------------------------------------      |
     |                           |                             |
     | 5. If error, try next DN  |                             |
     |                           |                             |
     | 6. close()                |                             |
     |                           |                             |

Distance Calculation:
1. Same node (distance = 0)
2. Same rack (distance = 2)
3. Different rack (distance = 4)
4. Different datacenter (distance = 6)

Client reads from closest replica for performance`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HDFS Write Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HDFS Write Flow (Pipeline):

+--------+     +----------+     +------+     +------+     +------+
| Client |     | NameNode |     | DN1  |     | DN2  |     | DN3  |
+--------+     +----------+     +------+     +------+     +------+
     |              |              |            |            |
     | 1. create()  |              |            |            |
     |------------->|              |            |            |
     |              |              |            |            |
     | 2. Allocate block           |            |            |
     |    Return: DN1, DN2, DN3    |            |            |
     |<-------------|              |            |            |
     |              |              |            |            |
     | 3. Setup pipeline           |            |            |
     |--------------------------->|----------->|----------->|
     |              |              |            |            |
     | 4. Write packets (64KB)     |            |            |
     |--------------------------->|----------->|----------->|
     |              |              |            |            |
     | 5. ACK (reverse pipeline)   |            |            |
     |<---------------------------|<-----------|<-----------|
     |              |              |            |            |
     | 6. More packets...          |            |            |
     |              |              |            |            |
     | 7. close()   |              |            |            |
     |              |              |            |            |
     | 8. Complete block           |            |            |
     |------------->|              |            |            |

Pipeline Write:
- Client streams to first DataNode
- Each DN forwards to next
- ACKs flow back through pipeline
- Efficient use of bandwidth`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Block Placement Strategy</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Rack-Aware Replica Placement:

Default Replication Factor: 3

+-------------------- Datacenter ---------------------+
|                                                     |
|     Rack 1              Rack 2              Rack 3  |
|   +--------+          +--------+          +--------+|
|   | DN 1   |          | DN 4   |          | DN 7   ||
|   |[Rep 1] |          |        |          |        ||
|   +--------+          +--------+          +--------+|
|   | DN 2   |          | DN 5   |          | DN 8   ||
|   |[Rep 2] |          |        |          |        ||
|   +--------+          +--------+          +--------+|
|   | DN 3   |          | DN 6   |          | DN 9   ||
|   |        |          |[Rep 3] |          |        ||
|   +--------+          +--------+          +--------+|
|                                                     |
+-----------------------------------------------------+

Placement Rules:
1. First replica: Local node or random node
2. Second replica: Different rack
3. Third replica: Same rack as second, different node

Benefits:
- Survives single node failure (3 copies)
- Survives rack failure (copies on 2 racks)
- Write: 2/3 replicas on local rack (fast)
- Read: Can read from local rack (fast)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HDFS High Availability</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HDFS HA Architecture:

Without HA (Single NameNode):
+----------+
| NameNode | <-- Single Point of Failure!
+----------+

With HA (Active/Standby):
+-------------+     +-------------+
|   Active    |     |   Standby   |
|  NameNode   |     |  NameNode   |
+-------------+     +-------------+
       |                   |
       +--------+----------+
                |
        +---------------+
        | Shared Edits  |
        | (JournalNodes)|
        +---------------+
        | JN1 | JN2 | JN3 |
        +-----+-----+-----+

Components:
1. Active NameNode: Handles all client operations
2. Standby NameNode: Ready for failover
3. JournalNodes: Store edit logs (quorum-based)
4. ZooKeeper: Leader election and fencing

Failover Process:
1. ZK detects Active NN failure
2. ZKFC triggers failover
3. Standby becomes new Active
4. Clients reconnect to new Active

Fencing: Prevents split-brain
- SSH fencing: Kill old NameNode process
- STONITH: Shoot The Other Node In The Head`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HDFS Federation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HDFS Federation (Multiple Namespaces):

Problem: Single NameNode limits scalability
Solution: Multiple independent NameNodes

+----------+     +----------+     +----------+
|NameNode 1|     |NameNode 2|     |NameNode 3|
| /user    |     | /project |     | /tmp     |
+----------+     +----------+     +----------+
     |                |                |
     +----------------+----------------+
                      |
              Shared DataNodes
                      |
     +----------------+----------------+
     |                |                |
+----------+     +----------+     +----------+
| DataNode |     | DataNode |     | DataNode |
|  1       |     |  2       |     |  3       |
+----------+     +----------+     +----------+

Each DataNode stores blocks from all NameNodes
Block Pools: Blocks grouped by NameNode

Benefits:
- Scale namespace horizontally
- Isolate namespaces (multi-tenancy)
- Each NN operates independently`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HDFS Commands</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-none leading-relaxed space-y-2 font-mono text-sm text-gray-900">
        <li><strong>hdfs dfs -ls /path</strong> - List directory contents</li>
        <li><strong>hdfs dfs -put local remote</strong> - Upload file to HDFS</li>
        <li><strong>hdfs dfs -get remote local</strong> - Download file from HDFS</li>
        <li><strong>hdfs dfs -cat /path/file</strong> - Display file contents</li>
        <li><strong>hdfs dfs -mkdir /path</strong> - Create directory</li>
        <li><strong>hdfs dfs -rm /path/file</strong> - Delete file</li>
        <li><strong>hdfs dfsadmin -report</strong> - Cluster status report</li>
        <li><strong>hdfs fsck /path</strong> - Check filesystem health</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">HDFS vs GFS Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">HDFS</th>
            <th className="p-3 border">GFS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Block Size</td>
            <td className="p-3 border">128 MB (configurable)</td>
            <td className="p-3 border">64 MB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Replication</td>
            <td className="p-3 border">3 (configurable)</td>
            <td className="p-3 border">3</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Master HA</td>
            <td className="p-3 border">Active-Standby</td>
            <td className="p-3 border">Shadow masters</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Append</td>
            <td className="p-3 border">Supported</td>
            <td className="p-3 border">Record append</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">License</td>
            <td className="p-3 border">Open Source (Apache)</td>
            <td className="p-3 border">Proprietary (Google)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>HDFS is designed for large files, streaming access, and batch processing</li>
        <li>NameNode manages metadata; DataNodes store actual block data</li>
        <li>Default block size is 128MB; default replication factor is 3</li>
        <li>Rack-aware placement ensures fault tolerance and performance</li>
        <li>Pipeline write streams data through DataNodes efficiently</li>
        <li>HDFS HA eliminates single point of failure with Active-Standby</li>
        <li>Federation allows horizontal scaling of namespace</li>
        <li>Write-once, read-many model (no random writes, appends only)</li>
      </ul>
    </div>
  </div>
);

export default HDFS;
