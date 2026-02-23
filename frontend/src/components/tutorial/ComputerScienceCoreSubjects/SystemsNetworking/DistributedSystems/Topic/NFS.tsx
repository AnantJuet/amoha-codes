import React from "react";

const NFS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network File System (NFS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Network File System (NFS) is a distributed file system protocol originally developed
      by Sun Microsystems in 1984. NFS allows a system to share directories and files with others
      over a network, enabling users to access remote files as if they were local.
    </p>

    <h2 className="text-3xl font-bold mt-8">NFS Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NFS Architecture:

+-------------------+                    +-------------------+
|   NFS Client      |                    |   NFS Server      |
+-------------------+                    +-------------------+
| Application       |                    | NFS Server Daemon |
+-------------------+                    | (nfsd)            |
| System Calls      |                    +-------------------+
| (open,read,write) |                    | VFS Layer         |
+-------------------+                    +-------------------+
| VFS Layer         |                    | Local File System |
+-------------------+                    | (ext4, xfs)       |
| NFS Client        |                    +-------------------+
| (nfs module)      |                    | Physical Storage  |
+-------------------+                    +-------------------+
        |                                        |
        +----------- RPC/XDR over TCP/UDP -------+
                     (Network)

Key Components:
- VFS: Virtual File System (interface layer)
- RPC: Remote Procedure Call (communication)
- XDR: External Data Representation (encoding)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NFS Versions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Version</th>
            <th className="p-3 border">Year</th>
            <th className="p-3 border">Key Features</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">NFS v2</td>
            <td className="p-3 border">1989</td>
            <td className="p-3 border">UDP only, 32-bit, stateless</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NFS v3</td>
            <td className="p-3 border">1995</td>
            <td className="p-3 border">TCP support, 64-bit files, async writes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NFS v4</td>
            <td className="p-3 border">2000</td>
            <td className="p-3 border">Stateful, compound ops, strong security</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NFS v4.1</td>
            <td className="p-3 border">2010</td>
            <td className="p-3 border">pNFS (parallel NFS), sessions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NFS v4.2</td>
            <td className="p-3 border">2016</td>
            <td className="p-3 border">Server-side copy, sparse files, labeling</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">NFS Protocol Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NFS v3 Operations:

File Operations:
+----------------+----------------------------------+
| Operation      | Description                      |
+----------------+----------------------------------+
| LOOKUP         | Get file handle from name        |
| READ           | Read data from file              |
| WRITE          | Write data to file               |
| CREATE         | Create a new file                |
| REMOVE         | Delete a file                    |
| RENAME         | Rename a file                    |
| GETATTR        | Get file attributes              |
| SETATTR        | Set file attributes              |
+----------------+----------------------------------+

Directory Operations:
+----------------+----------------------------------+
| READDIR        | Read directory entries           |
| READDIRPLUS    | Read entries with attributes     |
| MKDIR          | Create directory                 |
| RMDIR          | Remove directory                 |
+----------------+----------------------------------+

Link Operations:
+----------------+----------------------------------+
| LINK           | Create hard link                 |
| SYMLINK        | Create symbolic link             |
| READLINK       | Read symbolic link               |
+----------------+----------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NFS File Handle</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NFS File Handle (fhandle):

Structure (opaque to client):
+--------------------------------------------------+
|                  File Handle                      |
+--------------------------------------------------+
| File System ID | Inode Number | Generation Number |
| (identifies    | (file within | (detects reuse   |
|  mount point)  |  filesystem) |  of inode)       |
+--------------------------------------------------+

File Access Flow:
1. Client: LOOKUP("/home/user/file.txt")
   +--------+                           +--------+
   | Client |   LOOKUP "file.txt"       | Server |
   |        | ------------------------> |        |
   |        |   fhandle = 0x1234abcd    |        |
   |        | <------------------------ |        |
   +--------+                           +--------+

2. Client: READ(fhandle, offset, count)
   +--------+                           +--------+
   | Client |   READ(0x1234abcd,0,1024) | Server |
   |        | ------------------------> |        |
   |        |   data[0..1023]           |        |
   |        | <------------------------ |        |
   +--------+                           +--------+

Benefits of File Handles:
- Server is stateless (no open file table)
- Client crash doesn't affect server
- Server crash: client retries with same handle`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NFS Mounting</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NFS Mount Process:

Server Configuration (/etc/exports):
/home/shared  192.168.1.0/24(rw,sync,no_subtree_check)
/data         *(ro,sync)

Client Mount Command:
$ mount -t nfs server:/home/shared /mnt/shared

Mount Protocol:
+--------+                              +--------+
| Client |    MOUNT("/home/shared")     | Server |
|        | ---------------------------> | mountd |
|        |    Root fhandle              |        |
|        | <--------------------------- |        |
+--------+                              +--------+

After Mounting:
Client View:
    /
    ├── home
    ├── var
    └── mnt
        └── shared  <-- NFS mounted
            ├── file1.txt
            └── file2.txt

/etc/fstab entry for persistent mount:
server:/home/shared /mnt/shared nfs defaults,_netdev 0 0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NFS Caching and Consistency</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NFS Client Caching:

Attribute Cache:
- Caches file metadata (size, mtime, permissions)
- Timeout-based invalidation
- Default: 3-60 seconds for files, 30-60 for directories

Data Cache:
- Caches file data in client memory
- Validated against server on open

Close-to-Open Consistency:
T1: Client A opens file
T2: Client A writes data
T3: Client A closes file (data flushed to server)
T4: Client B opens file (fetches fresh data)
T5: Client B reads data (sees A's changes)

+----------+                              +----------+
| Client A |                              | Client B |
+----------+                              +----------+
     |                                         |
     | open()                                  |
     | write("hello")                          |
     | close() -----> [Flush to Server]        |
     |                                         |
     |                     open() <--- [Get fresh copy]
     |                     read() -> "hello"
     |                     close()

Cache Parameters (mount options):
- actimeo=n     : Attribute cache timeout
- noac          : Disable attribute caching
- lookupcache=  : Control directory caching`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NFS v3 vs NFS v4</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">NFS v3</th>
            <th className="p-3 border">NFS v4</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">State</td>
            <td className="p-3 border">Stateless</td>
            <td className="p-3 border">Stateful</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Transport</td>
            <td className="p-3 border">UDP or TCP</td>
            <td className="p-3 border">TCP only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Port</td>
            <td className="p-3 border">Multiple (rpcbind)</td>
            <td className="p-3 border">Single (2049)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Security</td>
            <td className="p-3 border">AUTH_SYS, Kerberos</td>
            <td className="p-3 border">Built-in RPCSEC_GSS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Locking</td>
            <td className="p-3 border">Separate NLM protocol</td>
            <td className="p-3 border">Integrated</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Operations</td>
            <td className="p-3 border">Individual RPCs</td>
            <td className="p-3 border">Compound operations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">NFS v4 Compound Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NFS v4 Compound Request:

Single RPC with multiple operations:

NFS v3 (Multiple RPCs):
Client                              Server
   |  LOOKUP("dir")                    |
   |---------------------------------->|
   |  handle1                          |
   |<----------------------------------|
   |  LOOKUP("subdir")                 |
   |---------------------------------->|
   |  handle2                          |
   |<----------------------------------|
   |  LOOKUP("file")                   |
   |---------------------------------->|
   |  handle3                          |
   |<----------------------------------|
   |  READ(handle3, 0, 4096)           |
   |---------------------------------->|
   |  data                             |
   |<----------------------------------|

   4 round trips!

NFS v4 (Single Compound RPC):
Client                              Server
   |  COMPOUND {                       |
   |    PUTROOTFH,                     |
   |    LOOKUP("dir"),                 |
   |    LOOKUP("subdir"),              |
   |    LOOKUP("file"),                |
   |    READ(0, 4096)                  |
   |  }                                |
   |---------------------------------->|
   |  COMPOUND_RESPONSE {              |
   |    OK, OK, OK, OK, data           |
   |  }                                |
   |<----------------------------------|

   1 round trip!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">pNFS (Parallel NFS)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`pNFS Architecture (NFS v4.1+):

Traditional NFS:
+--------+     All I/O      +--------+
| Client | ---------------> | Server |
+--------+                  +--------+
                                |
                           +----+----+
                           |         |
                        [Disk]   [Disk]

pNFS (Parallel NFS):
+--------+     Metadata     +----------+
| Client | ---------------> | Metadata |
+--------+                  | Server   |
    |                       +----------+
    |
    | Data (parallel)
    |
    +-------+-------+-------+
    |       |       |       |
    v       v       v       v
+------+ +------+ +------+ +------+
|Data 1| |Data 2| |Data 3| |Data 4|
|Server| |Server| |Server| |Server|
+------+ +------+ +------+ +------+

pNFS Flow:
1. Client requests layout from metadata server
2. Metadata server returns data server locations
3. Client reads/writes directly to data servers
4. Aggregated bandwidth from all data servers

Layout Types:
- Files: Striped across data servers
- Blocks: Block-level access (SAN)
- Objects: Object storage devices`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NFS Security</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NFS Security Mechanisms:

1. AUTH_SYS (Unix Authentication):
   - UID/GID sent with each request
   - Server trusts client's assertion
   - No encryption
   - Vulnerable to spoofing

2. AUTH_GSS (Kerberos):
   - Strong authentication
   - Optional integrity/privacy

   Security Flavors:
   +------------+---------------+------------+
   | Flavor     | Authentication| Encryption |
   +------------+---------------+------------+
   | krb5       | Yes           | No         |
   | krb5i      | Yes           | Integrity  |
   | krb5p      | Yes           | Privacy    |
   +------------+---------------+------------+

Export Security (/etc/exports):
/secure  *(sec=krb5p,rw)

NFS v4 ACLs:
- Rich access control (similar to Windows)
- Allow/Deny permissions
- Inheritance support
- Example: user:alice:rwx,group:staff:rx`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NFS Performance Tuning</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>rsize/wsize:</strong> Increase read/write block size (32KB-1MB)</li>
        <li><strong>async:</strong> Enable asynchronous writes (risk of data loss)</li>
        <li><strong>noatime:</strong> Disable access time updates</li>
        <li><strong>nconnect:</strong> Multiple TCP connections per mount (v4.1+)</li>
        <li><strong>TCP:</strong> Use TCP for reliable networks, UDP for low-latency</li>
        <li><strong>Jumbo frames:</strong> Enable 9000 MTU for better throughput</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>NFS is a widely-used distributed file system since 1984</li>
        <li>NFS v3 is stateless; NFS v4 is stateful with integrated locking</li>
        <li>File handles provide location-independent file identification</li>
        <li>Close-to-open consistency model for cache coherence</li>
        <li>NFS v4 uses compound operations to reduce round trips</li>
        <li>pNFS enables parallel data access for improved scalability</li>
        <li>Security options: AUTH_SYS (basic) or Kerberos (strong)</li>
      </ul>
    </div>
  </div>
);

export default NFS;
