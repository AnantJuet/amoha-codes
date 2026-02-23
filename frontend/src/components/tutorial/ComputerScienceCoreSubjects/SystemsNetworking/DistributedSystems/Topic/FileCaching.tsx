import React from "react";

const FileCaching: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Caching in Distributed File Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Caching is a fundamental technique in distributed file systems to reduce network latency,
      decrease server load, and improve overall performance. By storing frequently accessed data
      closer to the client, caching minimizes remote operations.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Caching in DFS?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Benefits of Caching:

Without Caching:
+--------+                              +--------+
| Client |  -- Every read/write -->    | Server |
+--------+      (High latency)         +--------+
    |                                       |
    |  RTT: ~10-100ms per operation         |
    |<------------------------------------->|

With Caching:
+--------+   +-------+                 +--------+
| Client |-->| Cache |                 | Server |
+--------+   +-------+                 +--------+
    |            |                          |
    | ~0.1ms     |  Occasional sync         |
    |<---------->|<------------------------>|
                     (Background)

Performance Comparison:
+--------------------+------------+------------+
| Operation          | No Cache   | With Cache |
+--------------------+------------+------------+
| Read (cached)      | 10-100ms   | 0.1ms      |
| Write (writeback)  | 10-100ms   | 0.1ms      |
| Metadata lookup    | 5-50ms     | 0.01ms     |
+--------------------+------------+------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Locations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Location</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Characteristics</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Server Memory</td>
            <td className="p-3 border">Cache on file server</td>
            <td className="p-3 border">Reduces disk I/O, shared across clients</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Client Memory</td>
            <td className="p-3 border">RAM cache on client machine</td>
            <td className="p-3 border">Fastest access, volatile</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Client Disk</td>
            <td className="p-3 border">Local disk cache</td>
            <td className="p-3 border">Persistent, survives reboots</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Proxy Cache</td>
            <td className="p-3 border">Intermediate cache server</td>
            <td className="p-3 border">Shared by multiple clients</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Multi-Level Caching:

+------------------+
|   Application    |
+------------------+
         |
+------------------+
| Client Memory    |  L1: Fastest, smallest
| Cache            |  (Recently used blocks)
+------------------+
         |
+------------------+
| Client Disk      |  L2: Fast, larger
| Cache            |  (Working set)
+------------------+
         |
     [ Network ]
         |
+------------------+
| Proxy/Edge       |  L3: Shared cache
| Cache            |  (Multiple clients)
+------------------+
         |
+------------------+
| Server Memory    |  L4: Server-side
| Cache            |  (All clients)
+------------------+
         |
+------------------+
| Server Disk      |  L5: Persistent storage
+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Update Policies</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Write-Through vs Write-Back:

1. Write-Through (Synchronous):
+--------+     +-------+     +--------+
| Client |---->| Cache |---->| Server |
+--------+     +-------+     +--------+
    |              |              |
    | Write X      |              |
    |------------->|------------->|
    |              |    ACK       |
    |              |<-------------|
    |     ACK      |              |
    |<-------------|              |

Characteristics:
- Immediate consistency
- Higher latency
- Safer (no data loss on crash)

2. Write-Back (Delayed):
+--------+     +-------+     +--------+
| Client |---->| Cache |     | Server |
+--------+     +-------+     +--------+
    |              |              |
    | Write X      | (dirty)      |
    |------------->|              |
    |     ACK      |              |
    |<-------------|              |
    |              | (Later)      |
    |              |------------->|
    |              |    ACK       |
    |              |<-------------|

Characteristics:
- Lower latency for writes
- Risk of data loss on crash
- Coalesces multiple writes

3. Write-on-Close (AFS-style):
+--------+     +-------+     +--------+
| Client |---->| Cache |     | Server |
+--------+     +-------+     +--------+
    |              |              |
    | Open         |              |
    |<-------------|<-------------|
    | Write, Write |              |
    |------------->| (local)      |
    | Close        |              |
    |------------->|------------->|
    |              |  Full file   |
    |              |<-------------|`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Consistency Models</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Model</th>
            <th className="p-3 border">Guarantee</th>
            <th className="p-3 border">Used By</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Strict Consistency</td>
            <td className="p-3 border">All reads see latest write immediately</td>
            <td className="p-3 border">Theoretical ideal</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sequential Consistency</td>
            <td className="p-3 border">Operations appear in program order</td>
            <td className="p-3 border">Some DFS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Session Semantics</td>
            <td className="p-3 border">Changes visible after close</td>
            <td className="p-3 border">AFS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Eventual Consistency</td>
            <td className="p-3 border">All replicas converge eventually</td>
            <td className="p-3 border">Cloud storage</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Validation Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. Client-Initiated Validation:

Polling (NFS-style):
+--------+     +--------+
| Client |     | Server |
+--------+     +--------+
    |              |
    | GetAttr(f)   |  "Is my cache valid?"
    |------------->|
    | mtime=T2     |
    |<-------------|
    |              |
    | If mtime changed, invalidate cache

Timeout-based (NFS):
- Check validity every T seconds
- Open: check if (now - last_check) > T
- Typical T: 3-30 seconds for files

2. Server-Initiated Validation (Callbacks):

AFS Callback:
+--------+                      +--------+
| Client |                      | Server |
+--------+                      +--------+
    |                               |
    | Open(f)                       |
    |------------------------------>|
    | Data + Callback Promise       |
    |<------------------------------|
    |                               |
    | [Another client modifies f]   |
    |                               |
    |        Callback Break         |
    |<------------------------------|
    |                               |
    | Cache invalidated             |

3. Lease-Based Validation:

+--------+                      +--------+
| Client |                      | Server |
+--------+                      +--------+
    |                               |
    | Request Lease(f, 60s)         |
    |------------------------------>|
    | Lease Granted (expires T+60)  |
    |<------------------------------|
    |                               |
    | [Cache valid until T+60]      |
    |                               |
    | Renew Lease                   |
    |------------------------------>|
    | Lease Extended                |
    |<------------------------------|`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NFS Caching</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NFS Client-Side Caching:

Attribute Cache:
+------------------+
| File Attributes  |
| - Size           |
| - mtime          |
| - Permissions    |
| Timeout: 3-60s   |
+------------------+

Data Cache:
+------------------+
| File Data Blocks |
| Block 0: [data]  |
| Block 1: [data]  |
| Block 2: [data]  |
+------------------+

Close-to-Open Consistency:
1. Client A opens file
2. Client A writes data
3. Client A closes file (flush to server)
4. Client B opens file
5. Client B sees A's changes

NFS Caching Parameters:
+----------------+-------------+
| Parameter      | Typical     |
+----------------+-------------+
| actimeo (file) | 3-60 sec    |
| acdirmin       | 30 sec      |
| acdirmax       | 60 sec      |
| rsize/wsize    | 32KB-1MB    |
+----------------+-------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AFS Caching (Callbacks)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AFS Callback Mechanism:

Client A              Server              Client B
    |                    |                    |
    | Open(file)         |                    |
    |------------------->|                    |
    | Entire file +      |                    |
    | Callback Promise   |                    |
    |<-------------------|                    |
    |                    |                    |
    | [Uses cache]       |                    |
    |                    |                    |
    |                    |    Open(file)      |
    |                    |<-------------------|
    |                    |    File + Callback |
    |                    |------------------->|
    |                    |                    |
    |                    |    Write + Close   |
    |                    |<-------------------|
    |                    |                    |
    | Callback Break     |                    |
    |<-------------------|                    |
    |                    |                    |
    | [Cache Invalid]    |                    |
    | Must refetch       |                    |

AFS Cache Characteristics:
- Whole-file caching (not blocks)
- Persistent disk cache
- Write-on-close semantics
- Callbacks valid until break
- Reduces server load significantly`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Coherence Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Multiple Writer Problem:

Client A              Server              Client B
    |                    |                    |
    | Read: X=10         |    Read: X=10      |
    |<-------------------|------------------>|
    |                    |                    |
    | [Cache: X=10]      |    [Cache: X=10]   |
    |                    |                    |
    | Write: X=20        |                    |
    |     (local)        |                    |
    |                    |                    |
    |                    |    Write: X=30     |
    |                    |         (local)    |
    |                    |                    |
    | Close (X=20)       |                    |
    |------------------->|                    |
    |                    |    Close (X=30)    |
    |                    |<-------------------|
    |                    |                    |
    | Server: X=30       | (B's write wins)   |
    |                    |                    |
    | What should X be? CONFLICT!             |

Solutions:
1. Locking: Only one writer at a time
2. Versioning: Detect conflicts
3. Last-writer-wins: Simple but lossy
4. Application-level merge: Git-style`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Caching Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">NFS</th>
            <th className="p-3 border">AFS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Cache Unit</td>
            <td className="p-3 border">Blocks (4KB-64KB)</td>
            <td className="p-3 border">Whole files</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cache Location</td>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">Local disk</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Validation</td>
            <td className="p-3 border">Polling (timeout)</td>
            <td className="p-3 border">Callbacks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Write Policy</td>
            <td className="p-3 border">Delayed write-back</td>
            <td className="p-3 border">Write-on-close</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border">Close-to-open</td>
            <td className="p-3 border">Session semantics</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Caching reduces network latency and server load in DFS</li>
        <li>Cache can be at client memory, client disk, proxy, or server</li>
        <li>Write-through is safer; write-back has better performance</li>
        <li>NFS uses timeout-based polling for cache validation</li>
        <li>AFS uses callbacks for server-initiated cache invalidation</li>
        <li>Cache coherence is challenging with multiple concurrent writers</li>
        <li>Close-to-open semantics is common compromise for consistency</li>
      </ul>
    </div>
  </div>
);

export default FileCaching;
