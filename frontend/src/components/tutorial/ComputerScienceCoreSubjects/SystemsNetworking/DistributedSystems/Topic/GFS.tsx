import React from "react";

const GFS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Google File System (GFS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Google File System (GFS) is a scalable distributed file system designed for large
      distributed data-intensive applications. Developed by Google and described in their 2003
      paper, GFS pioneered many concepts that influenced modern distributed storage systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">GFS Design Assumptions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`GFS Design Philosophy:

1. Component Failures are the Norm:
   +-------+  +-------+  +-------+  +-------+
   |Server1|  |Server2|  |Server3|  |Server4|
   | [OK]  |  | [FAIL]|  | [OK]  |  | [OK]  |
   +-------+  +-------+  +-------+  +-------+
   With 1000s of servers, failures happen daily

2. Files are Huge:
   Traditional: KB to MB files
   GFS: Multi-GB files are common
   Design for large files, not millions of small ones

3. Append-Heavy Workload:
   +------------------+
   |  Existing Data   |
   +------------------+
   |  New Data        | <-- Most writes are appends
   +------------------+
   Random writes are rare

4. Co-design Application and FS:
   Applications designed knowing GFS semantics
   Relaxed consistency acceptable

5. High Sustained Bandwidth over Low Latency:
   Optimize for throughput (batch processing)
   Not optimized for real-time applications`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">GFS Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`GFS Architecture Overview:

                    +----------------+
                    |     Master     |
                    | (Single Point) |
                    +----------------+
                    | - Namespace    |
                    | - File->Chunks |
                    | - Chunk->Servers|
                    | - Chunk leases |
                    +----------------+
                           ^
                           | Metadata ops
                           | (control path)
                           |
     +---------------------+---------------------+
     |                     |                     |
+--------+            +--------+            +--------+
| Client |            | Client |            | Client |
+--------+            +--------+            +--------+
     |                     |                     |
     |          Data path (direct to chunkservers)
     |                     |                     |
     +---------------------+---------------------+
     |                     |                     |
+----------+          +----------+          +----------+
|Chunkserver|          |Chunkserver|          |Chunkserver|
|  CS 1    |          |  CS 2    |          |  CS 3    |
+----------+          +----------+          +----------+
| Chunk A  |          | Chunk A  |          | Chunk B  |
| Chunk B  |          | Chunk C  |          | Chunk C  |
| Chunk D  |          | Chunk D  |          | Chunk A  |
+----------+          +----------+          +----------+

Key Insight: Separate metadata and data paths`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">GFS Components</h2>
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
            <td className="p-3 border font-semibold">Master</td>
            <td className="p-3 border">Metadata management</td>
            <td className="p-3 border">Single master, all metadata in memory</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Chunkserver</td>
            <td className="p-3 border">Data storage</td>
            <td className="p-3 border">Stores chunks as Linux files</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Client</td>
            <td className="p-3 border">Application interface</td>
            <td className="p-3 border">Links with application, caches metadata</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Chunk</td>
            <td className="p-3 border">Data unit</td>
            <td className="p-3 border">64MB fixed size, 64-bit handle</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Chunk Design</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Chunk Characteristics:

Size: 64 MB (much larger than typical FS blocks)

File to Chunk Mapping:
+------------------------------------------+
|              Large File (1.5 GB)          |
+------------------------------------------+
| Chunk 0 | Chunk 1 | Chunk 2 | ... |Chunk23|
| (64MB)  | (64MB)  | (64MB)  |     |(32MB) |
+---------+---------+---------+-----+-------+

Each chunk:
+---------------------------+
| 64-bit Chunk Handle       |  Unique identifier
+---------------------------+
| Version Number            |  Detects stale replicas
+---------------------------+
| Checksum                  |  Data integrity
+---------------------------+

Advantages of Large Chunks:
+ Reduces metadata size (fewer chunks)
+ Reduces client-master interaction
+ Persistent TCP connections to chunkservers
+ Reduces network overhead

Disadvantages:
- Small files = "hot spots" on single server
- Internal fragmentation

Mitigation for hot spots:
- Higher replication for popular small files
- Staggered client requests`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Master Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Master Metadata:

1. Namespace (directory tree):
   /gfs/data/logs/2026/
   Stored persistently in operation log

2. File-to-Chunk Mapping:
   +------------+------------------------+
   | File       | Chunks                 |
   +------------+------------------------+
   | /data/log1 | [chunk_1, chunk_2, ...] |
   | /data/log2 | [chunk_5, chunk_6, ...] |
   +------------+------------------------+
   Stored persistently in operation log

3. Chunk Locations:
   +----------+----------------------+
   | Chunk    | Servers              |
   +----------+----------------------+
   | chunk_1  | [CS1, CS2, CS3]      |
   | chunk_2  | [CS2, CS4, CS5]      |
   +----------+----------------------+
   NOT persistent - rebuilt from chunkservers at startup

Master Memory Usage:
- ~64 bytes metadata per chunk
- 64MB chunks -> ~64 bytes per 64MB
- 1 PB storage -> ~1 GB master memory

Operation Log:
- All metadata mutations logged
- Flushed before responding to client
- Checkpoint periodically
- Replay log on restart`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Read Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`GFS Read Flow:

+--------+                  +--------+                  +------------+
| Client |                  | Master |                  |Chunkservers|
+--------+                  +--------+                  +------------+
     |                           |                            |
     | 1. Read(filename,         |                            |
     |    byte_offset)           |                            |
     |                           |                            |
     | 2. Translate to           |                            |
     |    (filename, chunk_index)|                            |
     |                           |                            |
     | 3. Send request           |                            |
     |-------------------------->|                            |
     |                           |                            |
     | 4. Return                 |                            |
     |    (chunk_handle,         |                            |
     |     chunk_locations)      |                            |
     |<--------------------------|                            |
     |                           |                            |
     | 5. Cache metadata         |                            |
     |                           |                            |
     | 6. Send Read(chunk_handle,|                            |
     |    byte_range) to nearest |                            |
     |    chunkserver            |                            |
     |------------------------------------------------->      |
     |                           |                            |
     | 7. Receive data           |                            |
     |<-------------------------------------------------      |
     |                           |                            |

Client caches chunk locations (not data)
Metadata cache expires after timeout`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Write Operation with Leases</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`GFS Write Flow (with Primary):

Master grants lease to one replica (Primary)

+--------+     +--------+     +---------+     +---------+
| Client |     | Master |     | Primary |     |Secondary|
+--------+     +--------+     +---------+     +---------+
     |              |              |              |
     | 1. Request lease holder     |              |
     |------------->|              |              |
     |              |              |              |
     | 2. Primary + secondaries    |              |
     |<-------------|              |              |
     |              |              |              |
     | 3. Push data to all replicas               |
     |--------------------------->|------------->|
     |              |              |              |
     | 4. Write request to Primary |              |
     |--------------------------->|              |
     |              |              |              |
     |              | 5. Primary serializes writes |
     |              |    Assigns sequence numbers  |
     |              |              |              |
     |              | 6. Forward to secondaries    |
     |              |              |------------->|
     |              |              |              |
     |              | 7. Secondaries acknowledge   |
     |              |              |<-------------|
     |              |              |              |
     | 8. Primary responds to client              |
     |<---------------------------|              |

Lease Duration: 60 seconds
Extended as long as mutations occur
If primary fails: master grants lease to another`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Record Append Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Atomic Record Append:

Traditional Write:
- Client specifies offset
- Concurrent writes may interleave

Record Append:
- Client provides data only
- GFS chooses offset
- Atomically appends at least once

+--------+                              +---------+
| Client |                              | Primary |
+--------+                              +---------+
     |                                       |
     | RecordAppend(data)                    |
     |-------------------------------------->|
     |                                       |
     | Primary chooses offset                |
     | (end of current chunk)                |
     |                                       |
     |    If fits in chunk:                  |
     |    Append and return offset           |
     |                                       |
     |    If doesn't fit:                    |
     |    Pad chunk, allocate new chunk      |
     |    Retry append                       |
     |                                       |
     | offset (or retry on different chunk)  |
     |<--------------------------------------|

Consistency:
- At-least-once semantics
- May have duplicate records
- Application must handle duplicates
- All replicas have data at same offset`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">GFS Consistency Model</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation Type</th>
            <th className="p-3 border">Concurrent Writes</th>
            <th className="p-3 border">Serial Writes</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Write (random)</td>
            <td className="p-3 border">Consistent but undefined</td>
            <td className="p-3 border">Defined</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Record Append</td>
            <td className="p-3 border">Defined interspersed with inconsistent</td>
            <td className="p-3 border">Defined</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Consistency Definitions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`GFS Consistency States:

Consistent: All replicas have same data
Defined: Consistent + reflects complete mutations

File Region States:
+-------------+------------------+-------------------+
|             | Write            | Record Append     |
+-------------+------------------+-------------------+
| Serial      | Defined          | Defined           |
| success     |                  | (interspersed)    |
+-------------+------------------+-------------------+
| Concurrent  | Consistent       | Defined           |
| success     | but undefined    | (interspersed)    |
+-------------+------------------+-------------------+
| Failure     | Inconsistent     | Inconsistent      |
|             |                  | (padding)         |
+-------------+------------------+-------------------+

Example of undefined but consistent:
Client 1: Write "AAAA" at offset 0
Client 2: Write "BBBB" at offset 0
Result: All replicas have same data
        But could be "AABB" or "BBAA" or "ABAB"
        (order undefined)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fault Tolerance Mechanisms</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`GFS Fault Tolerance:

1. Chunk Replication (Default: 3 replicas)
   +--------+     +--------+     +--------+
   | CS 1   |     | CS 2   |     | CS 3   |
   | Chunk A|     | Chunk A|     | Chunk A|
   +--------+     +--------+     +--------+
       |              |              |
    Primary        Secondary      Secondary

2. Master Replication:
   +----------+     +----------+     +----------+
   | Master   | --> | Shadow 1 | --> | Shadow 2 |
   | (Active) |     | (Standby)|     | (Standby)|
   +----------+     +----------+     +----------+

   Operation log replicated synchronously
   Shadows provide read-only access

3. Chunk Integrity:
   +------------------------+
   | Chunk (64 MB)          |
   +------------------------+
   | Block 1 | Checksum 1   | 64KB block + 32-bit checksum
   | Block 2 | Checksum 2   |
   | ...     | ...          |
   +------------------------+

   Checksums verified on every read
   Corruption detected -> read from replica

4. Garbage Collection:
   - Deleted files renamed to hidden name
   - Actual deletion after 3 days
   - Orphan chunks detected and removed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">GFS Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Traditional DFS</th>
            <th className="p-3 border">GFS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">File Size</td>
            <td className="p-3 border">KB to MB</td>
            <td className="p-3 border">GB to TB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Block Size</td>
            <td className="p-3 border">4KB - 64KB</td>
            <td className="p-3 border">64MB chunks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Workload</td>
            <td className="p-3 border">Random R/W</td>
            <td className="p-3 border">Sequential, append</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border">Strong</td>
            <td className="p-3 border">Relaxed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Master</td>
            <td className="p-3 border">Distributed</td>
            <td className="p-3 border">Single (simplified)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>GFS designed for large files, append-heavy workloads, and high throughput</li>
        <li>Single master for metadata; simplifies design but limits scalability</li>
        <li>64MB chunks reduce master memory and client-master interactions</li>
        <li>Data flows directly between clients and chunkservers</li>
        <li>Leases and primary replicas serialize concurrent writes</li>
        <li>Record append provides at-least-once atomic append semantics</li>
        <li>Relaxed consistency model: applications must handle duplicates</li>
        <li>GFS influenced HDFS, Colossus, and many modern distributed systems</li>
      </ul>
    </div>
  </div>
);

export default GFS;
