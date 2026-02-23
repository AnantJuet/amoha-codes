import React from "react";

const FileNaming: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Naming in Distributed File Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      File naming in distributed file systems is crucial for location transparency and efficient
      file access. The naming scheme determines how files are identified, located, and accessed
      across multiple servers in a distributed environment.
    </p>

    <h2 className="text-3xl font-bold mt-8">Naming Concepts</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Key Naming Terminology:

Name Space:
+----------------------------------------+
|  Collection of all valid names in the  |
|  file system (the naming domain)       |
+----------------------------------------+

Name Resolution:
+------------+     +----------------+     +----------+
| Human Name | --> | Name Service   | --> | Resource |
| /docs/a.txt|     | (Lookup)       |     | Location |
+------------+     +----------------+     +----------+

Identifier Types:
+------------------+----------------------------------+
| Type             | Example                          |
+------------------+----------------------------------+
| Human-readable   | /home/user/documents/report.pdf  |
| Machine-oriented | UFID: abc123-def456-789012       |
| Location-based   | server3:/disk2/block47           |
+------------------+----------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Name Space Structures</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Structure</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Flat</td>
            <td className="p-3 border">No hierarchy, unique identifiers</td>
            <td className="p-3 border">UUID: 550e8400-e29b...</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hierarchical</td>
            <td className="p-3 border">Tree structure with directories</td>
            <td className="p-3 border">/home/user/file.txt</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network-attached</td>
            <td className="p-3 border">Server name in path</td>
            <td className="p-3 border">//server/share/file</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Uniform</td>
            <td className="p-3 border">Same namespace everywhere</td>
            <td className="p-3 border">/afs/cs.cmu.edu/user/...</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Mounting in DFS</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Mounting Remote File Systems:

Before Mounting:
Client File System:            Server File System:
       /                              /
      / \\                            / \\
   home  usr                     export  var
    |                               |
  user                           shared
                                    |
                                 projects

After Mounting (mount server:/export/shared /home/user/remote):

Client File System (Unified View):
            /
           / \\
        home  usr
         |
       user
         |
      remote  <-- Mount Point
         |
      projects  (from server:/export/shared)

Mount Types:
1. Hard Mount: Block until server responds
2. Soft Mount: Return error after timeout
3. Automount: Mount on first access`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Location-Independent Naming</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Location Independence vs Location Transparency:

Location Transparency (Hiding location):
+---------------------+
| Name: /shared/doc   |
+---------------------+
         |
         v (hidden from user)
+---------------------+
| Location: Server A  |
+---------------------+

Location Independence (Name unchanged when file moves):

Time T1:                        Time T2:
+----------+                    +----------+
| /doc/a   |                    | /doc/a   |  <- Same name
+----------+                    +----------+
     |                               |
     v                               v
+----------+                    +----------+
| Server A |  -- File moves --> | Server B |
+----------+                    +----------+

Achieved using:
- Unique File Identifiers (UFIDs)
- Indirection through name service
- Version-independent references`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Unique File Identifiers (UFID)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`UFID Structure:

+--------------------------------------------------+
|                    UFID (128-256 bits)            |
+--------------------------------------------------+
| Server ID | Volume ID | File Number | Timestamp   |
| (32 bits) | (32 bits) | (48 bits)   | (16 bits)   |
+--------------------------------------------------+

Example:
UFID: 192.168.1.5:vol3:00004578:2026

Name Resolution:
+------------------+
| /home/user/doc   |
+------------------+
         |
    Directory Lookup
         |
         v
+----------------------------------+
| Directory Entry:                 |
| Name: "doc"                      |
| UFID: 192.168.1.5:vol3:00004578  |
+----------------------------------+
         |
    Location Lookup
         |
         v
+----------------------------------+
| File Location:                   |
| Server: 192.168.1.5              |
| Volume: vol3                     |
| Inode: 4578                      |
+----------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Name Resolution Approaches</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Pros/Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Iterative</td>
            <td className="p-3 border">Client contacts each name server</td>
            <td className="p-3 border">More client load, less server load</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Recursive</td>
            <td className="p-3 border">Server resolves and returns result</td>
            <td className="p-3 border">Less client load, more server load</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Server-controlled</td>
            <td className="p-3 border">Server chooses next hop</td>
            <td className="p-3 border">Flexible, but complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Iterative vs Recursive Resolution</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Iterative Resolution (Client-driven):

Client              NS1            NS2            NS3
  |                  |              |              |
  |--resolve(/a/b/c)->|              |              |
  |<--"NS2 for /a"---|              |              |
  |                  |              |              |
  |--resolve(/a/b/c)--------------->|              |
  |<--"NS3 for /a/b"----------------|              |
  |                  |              |              |
  |--resolve(/a/b/c)------------------------------>|
  |<--"Location: Server5"--------------------------|

Recursive Resolution (Server-driven):

Client              NS1            NS2            NS3
  |                  |              |              |
  |--resolve(/a/b/c)->|              |              |
  |                  |--resolve---->|              |
  |                  |              |--resolve---->|
  |                  |              |<--Location---|
  |                  |<--Location---|              |
  |<--Location-------|              |              |

Comparison:
                    Iterative       Recursive
Client complexity   High            Low
Server load         Low             High
Cache efficiency    Lower           Higher
Failure handling    Easier          Harder`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Name Space Distribution</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Partitioning the Name Space:

Global Layer (Root):
+------+
|  /   |  (managed by global name service)
+------+
   |
+--+--+--+--+
|  |  |  |  |
v  v  v  v  v
org edu com net gov

Administrative Layer:
/edu
  |
  +-- cmu.edu (CMU's name server)
  |     +-- cs (CS dept server)
  |     +-- ece (ECE dept server)
  |
  +-- mit.edu (MIT's name server)
        +-- csail

Managerial Layer:
/edu/cmu.edu/cs/users/
  |
  +-- alice (Alice's home)
  |     +-- projects
  |     +-- documents
  |
  +-- bob (Bob's home)

Name Server Hierarchy:
+------------------+
| Global NS (root) |
+------------------+
        |
+-------+-------+
|               |
v               v
+--------+  +--------+
| NS:edu |  | NS:com |
+--------+  +--------+
    |
+---+---+
|       |
v       v
+-------+ +-------+
|NS:cmu | |NS:mit |
+-------+ +-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Symbolic and Hard Links</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Links in Distributed File Systems:

Hard Link:
Multiple directory entries point to same UFID
+--------+          +--------+
|/dir1/a |--------->|  UFID  |
+--------+     +--->| (File) |
               |    +--------+
+--------+     |
|/dir2/b |-----+
+--------+

Symbolic (Soft) Link:
Entry contains path to another file
+--------+     +----------------+     +--------+
|/dir1/a |---->| "/dir2/target" |---->| target |
+--------+     | (Symlink)      |     | (File) |
               +----------------+     +--------+

Distributed Link Challenges:
1. Hard links: Usually restricted to same server
2. Symbolic links: Can span servers
3. Dangling links: Target deleted
4. Cycles: A -> B -> C -> A

Remote Links:
+--------+     +------------------+     +---------+
|/local/a|---->|"server2:/path/b" |---->| Remote  |
+--------+     | (Remote Symlink) |     | File    |
               +------------------+     +---------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Naming Approaches Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System</th>
            <th className="p-3 border">Naming Approach</th>
            <th className="p-3 border">Example Path</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">NFS</td>
            <td className="p-3 border">Mount-based, non-uniform</td>
            <td className="p-3 border">/mnt/server/share/file</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AFS</td>
            <td className="p-3 border">Global uniform namespace</td>
            <td className="p-3 border">/afs/cs.cmu.edu/user/file</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">GFS</td>
            <td className="p-3 border">Single namespace per cluster</td>
            <td className="p-3 border">/gfs/path/to/file</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">HDFS</td>
            <td className="p-3 border">Hierarchical, single namespace</td>
            <td className="p-3 border">hdfs://cluster/path/file</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SMB/CIFS</td>
            <td className="p-3 border">UNC paths with server names</td>
            <td className="p-3 border">\\server\share\file</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Name space is the collection of all valid names in the file system</li>
        <li>Location transparency hides where files are stored</li>
        <li>Location independence means file names stay same when files move</li>
        <li>UFIDs provide unique, location-independent file identification</li>
        <li>Name resolution can be iterative (client-driven) or recursive (server-driven)</li>
        <li>Mounting integrates remote file systems into local namespace</li>
        <li>Global namespace (AFS-style) provides uniform view across all clients</li>
      </ul>
    </div>
  </div>
);

export default FileNaming;
