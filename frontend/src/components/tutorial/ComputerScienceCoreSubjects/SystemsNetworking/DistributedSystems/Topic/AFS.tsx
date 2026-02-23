import React from "react";

const AFS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Andrew File System (AFS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Andrew File System (AFS) is a distributed file system developed at Carnegie Mellon
      University in the 1980s. AFS was designed to be highly scalable and provide a global
      namespace, making it particularly suitable for large organizations with thousands of
      users and workstations.
    </p>

    <h2 className="text-3xl font-bold mt-8">AFS Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AFS Architecture:

Global Namespace:
/afs
├── cs.cmu.edu
│   ├── user
│   │   ├── alice
│   │   └── bob
│   └── project
├── mit.edu
│   └── user
└── stanford.edu
    └── user

All clients see the same namespace!

AFS Components:
+------------------+
|   Application    |
+------------------+
|   AFS Client     |
|   (Cache Mgr)    |
+------------------+
        |
    [ Network ]
        |
+------------------+     +------------------+
|   File Server    |     |  Volume Location |
|   (fileserver)   |     |  Server (vldb)   |
+------------------+     +------------------+
        |
+------------------+
|   Vice Storage   |
+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AFS vs NFS Design Goals</h2>
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
            <td className="p-3 border font-semibold">Scale</td>
            <td className="p-3 border">Department level</td>
            <td className="p-3 border">Organization/global level</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Namespace</td>
            <td className="p-3 border">Per-client mounts</td>
            <td className="p-3 border">Global, uniform</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Caching</td>
            <td className="p-3 border">Memory-based, blocks</td>
            <td className="p-3 border">Disk-based, whole files</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border">Close-to-open, polling</td>
            <td className="p-3 border">Callbacks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Security</td>
            <td className="p-3 border">UID-based trust</td>
            <td className="p-3 border">Kerberos authentication</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">AFS Volumes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AFS Volume Concept:

A Volume is a unit of:
- Administration (quotas, replication)
- Location (can be moved between servers)
- Backup (snapshot entire volume)

Volume Structure:
+-------------------+
|     Volume        |
| "user.alice"      |
+-------------------+
| Files:            |
|  /home/.profile   |
|  /home/doc1.txt   |
|  /home/project/   |
+-------------------+

Volume Types:
+----------+----------------------------------------+
| Type     | Description                            |
+----------+----------------------------------------+
| RW       | Read-Write volume (primary)            |
| RO       | Read-Only replica                      |
| BK       | Backup volume (snapshot)               |
+----------+----------------------------------------+

Volume Location Database (VLDB):
+----------------+----------+----------------+
| Volume Name    | Type     | Server         |
+----------------+----------+----------------+
| user.alice     | RW       | server1        |
| user.alice     | RO       | server2        |
| user.alice     | RO       | server3        |
| user.alice     | BK       | backup1        |
+----------------+----------+----------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AFS Callback Mechanism</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AFS Callback Protocol:

Initial File Access:
+---------+                              +---------+
| Client  |    Fetch(file)               | Server  |
+---------+ ---------------------------> +---------+
     |      File data +                       |
     |      Callback Promise                  |
     | <--------------------------------      |
     |                                        |
     | [Cache file locally]                   |
     | [Callback valid until broken]          |

Callback States:
- Valid: Cache is up-to-date
- Broken: Cache may be stale, must revalidate

Callback Break Scenario:
+---------+                              +---------+
|Client A |                              | Server  |
+---------+                              +---------+
     |                                        |
     | [Has file cached with callback]        |
     |                                        |
     |    +--------+                          |
     |    |Client B| Store(file, new_data)    |
     |    +--------+ -----------------------> |
     |                                        |
     |       Callback Break                   |
     | <------------------------------------- |
     |                                        |
     | [Invalidate cache]                     |
     | [Must fetch again before use]          |

Callback Advantages:
- No polling needed
- Server pushes invalidations
- Reduces network traffic
- Better scalability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Whole-File Caching</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AFS Whole-File Caching:

On Open:
+--------+                              +--------+
| Client |    Open("/afs/.../file")     | Server |
+--------+ ---------------------------> +--------+
         |                                   |
         |    Transfer entire file           |
         | <-------------------------------  |
         |                                   |
         | [Store in local disk cache]       |
         | [All reads from local cache]      |

On Close:
+--------+                              +--------+
| Client |    Close(file)               | Server |
+--------+                              +--------+
         |                                   |
         | [If modified: send entire file]   |
         | ------------------------------->  |
         |                                   |

Local Cache Structure:
/cache/
├── CacheItems      (data files)
├── CacheInfo       (metadata)
└── CacheVolumes    (volume info)

Cache Size: Typically 100MB - several GB

Comparison with Block Caching:
+------------------+------------------+
| Whole-File (AFS) | Block (NFS)      |
+------------------+------------------+
| Entire file      | 4KB-64KB blocks  |
| stored locally   | in memory        |
+------------------+------------------+
| Disk-based       | Memory-based     |
| (persistent)     | (volatile)       |
+------------------+------------------+
| Good for small   | Good for large   |
| files, repeated  | files, random    |
| access           | access           |
+------------------+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AFS Session Semantics</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Session Semantics (Write-on-Close):

Timeline:
Client A              Server              Client B
   |                    |                    |
T1 | Open(file)         |                    |
   |<-------------------|                    |
   | [cached: v1]       |                    |
   |                    |                    |
T2 |                    |    Open(file)      |
   |                    |------------------->|
   |                    |    [cached: v1]    |
   |                    |                    |
T3 | Write(data_A)      |                    |
   | [local change]     |                    |
   |                    |                    |
T4 |                    |    Write(data_B)   |
   |                    |    [local change]  |
   |                    |                    |
T5 | Close()            |                    |
   |------------------->|                    |
   | [v2 = A's changes] |                    |
   |                    |    Callback Break  |
   |                    |------------------->|
   |                    |                    |
T6 |                    |    Close()         |
   |                    |<-------------------|
   |                    | [v3 = B's changes] |

Result: Last writer wins (B's version)
A's changes lost (conflict not detected)

This is AFS's deliberate design choice:
- Simple semantics
- Suitable for most use cases
- Not suitable for concurrent editing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AFS Security</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AFS Security Model:

Authentication (Kerberos):
+--------+     +--------+     +--------+
| Client | --> |  KDC   | --> | Server |
+--------+     +--------+     +--------+
     |              |              |
     | 1. Get TGT   |              |
     |<-------------|              |
     |              |              |
     | 2. Get service ticket       |
     |<-------------|              |
     |              |              |
     | 3. Present ticket to server |
     |---------------------------->|
     |              |              |
     | 4. Access granted           |
     |<----------------------------|

Access Control Lists (ACLs):
AFS uses directory-level ACLs:

$ fs listacl /afs/cs.cmu.edu/user/alice
Access list for /afs/cs.cmu.edu/user/alice is:
Normal rights:
  alice rlidwka
  system:administrators rlidwka
  system:anyuser l

ACL Permissions:
+------+--------------------------------+
| Perm | Meaning                        |
+------+--------------------------------+
| r    | Read files                     |
| l    | List directory                 |
| i    | Insert (create files)          |
| d    | Delete files                   |
| w    | Write files                    |
| k    | Lock files                     |
| a    | Administer (change ACL)        |
+------+--------------------------------+

Groups:
- system:anyuser     (all users)
- system:authuser    (authenticated users)
- pts groups         (custom groups)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AFS Replication and Backup</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Volume Replication:

Read-Only Replication:
+----------+     vos release     +----------+
| RW Volume| -----------------> | RO Volume|
| server1  |                    | server2  |
+----------+                    +----------+
                                     |
                                +----------+
                                | RO Volume|
                                | server3  |
                                +----------+

Access Pattern:
- Writes go to RW volume
- Reads can use any RO replica
- Client prefers nearest replica

Backup Volumes:
$ vos backup user.alice

Creates point-in-time snapshot:
+----------+     snapshot     +----------+
| RW Volume| --------------> | BK Volume|
| user.alice                 |user.alice.backup
+----------+                  +----------+

Users access backup via:
/afs/.cs.cmu.edu/user/alice  (RW)
/afs/cs.cmu.edu/user/.alice  (BK - yesterday's snapshot)

Volume Operations:
+------------------+--------------------------------+
| Command          | Purpose                        |
+------------------+--------------------------------+
| vos create       | Create new volume              |
| vos release      | Update RO replicas             |
| vos backup       | Create backup snapshot         |
| vos move         | Move volume to another server  |
| vos dump/restore | Export/import volume           |
+------------------+--------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AFS Scalability</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Why AFS Scales Better:

1. Reduced Server Load:
NFS: Every read/write hits server
AFS: Only open/close contact server

Workload Analysis:
+--------------------+----------+----------+
| Metric             | NFS      | AFS      |
+--------------------+----------+----------+
| Open               | 1 RPC    | 1 RPC    |
| Read (10 times)    | 10 RPCs  | 0 RPCs   |
| Write (5 times)    | 5 RPCs   | 0 RPCs   |
| Close              | 1 RPC    | 1 RPC    |
+--------------------+----------+----------+
| Total              | 17 RPCs  | 2 RPCs   |
+--------------------+----------+----------+

2. Callback vs Polling:
NFS: Client polls every 3-60 seconds
AFS: Server notifies only when needed

3. Clients per Server:
+------------------+-------------------+
| System           | Clients/Server    |
+------------------+-------------------+
| NFS              | ~50-100           |
| AFS              | ~200-300          |
+------------------+-------------------+

4. Wide-Area Efficiency:
- Whole-file caching good for WAN
- RO replicas distributed geographically
- Works well with high-latency links`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern AFS: OpenAFS</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>OpenAFS:</strong> Open-source implementation of AFS protocol</li>
        <li><strong>Platforms:</strong> Linux, macOS, Windows, Solaris, AIX</li>
        <li><strong>Authentication:</strong> Kerberos v5 integration</li>
        <li><strong>Use Cases:</strong> Universities, research institutions, enterprises</li>
        <li><strong>Alternatives:</strong> NFSv4 with similar features, cloud storage</li>
        <li><strong>Active Development:</strong> Continued updates and security patches</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>AFS provides a global, uniform namespace across organizations</li>
        <li>Volumes are the unit of administration, location, and backup</li>
        <li>Callbacks enable efficient cache consistency without polling</li>
        <li>Whole-file caching reduces server load for repeated access</li>
        <li>Session semantics: changes visible only after close (last writer wins)</li>
        <li>Kerberos provides strong authentication; ACLs control access</li>
        <li>AFS designed for scale: supports hundreds of clients per server</li>
      </ul>
    </div>
  </div>
);

export default AFS;
