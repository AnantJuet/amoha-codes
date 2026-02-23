import React from "react";

const DFSIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Distributed File Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Distributed File System (DFS) is a file system that allows access to files from multiple
      hosts sharing via a computer network. This enables programs to store and access remote files
      exactly as they would local ones, allowing users to access files from any network computer.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Distributed File System?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed File System Overview:

Traditional File System:
+----------------+
|   Application  |
+----------------+
        |
+----------------+
|   File System  |
+----------------+
        |
+----------------+
|   Local Disk   |
+----------------+

Distributed File System:
+----------------+
|   Application  |
+----------------+
        |
+----------------+
|   DFS Client   |
+----------------+
        |
     Network
        |
+--------+--------+--------+
|        |        |        |
v        v        v        v
+------+ +------+ +------+ +------+
|Server| |Server| |Server| |Server|
|  1   | |  2   | |  3   | |  4   |
+------+ +------+ +------+ +------+
|Disk 1| |Disk 2| |Disk 3| |Disk 4|
+------+ +------+ +------+ +------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics of DFS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Benefit</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Transparency</td>
            <td className="p-3 border">Users see a unified file system</td>
            <td className="p-3 border">Ease of use, location independence</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Can add more storage nodes</td>
            <td className="p-3 border">Handles growing data volumes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fault Tolerance</td>
            <td className="p-3 border">Data replicated across nodes</td>
            <td className="p-3 border">System continues despite failures</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concurrency</td>
            <td className="p-3 border">Multiple users access simultaneously</td>
            <td className="p-3 border">Collaborative work environment</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Transparency in DFS</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Transparency Types:

1. Location Transparency:
   User Request: open("/documents/report.txt")
   DFS Resolution:
   +----------+     +------------------+
   |  Client  | --> | Name Resolution  |
   +----------+     +------------------+
                            |
                    /documents/report.txt
                            |
                            v
                    Server 3, Disk 2, Block 47

2. Access Transparency:
   Same API for local and remote files:
   open(), read(), write(), close()

3. Replication Transparency:
   +--------+
   | File X |
   +--------+
       |
   +---+---+---+
   |   |   |   |
   v   v   v   v
  S1  S2  S3  S4  (4 replicas, user sees one file)

4. Failure Transparency:
   Server fails --> System switches to replica
   User operation continues without interruption

5. Migration Transparency:
   File moved from Server A to Server B
   Client continues accessing without change`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DFS vs Local File System</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Local File System</th>
            <th className="p-3 border">Distributed File System</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Storage</td>
            <td className="p-3 border">Single machine</td>
            <td className="p-3 border">Multiple machines across network</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Access</td>
            <td className="p-3 border">Local only</td>
            <td className="p-3 border">Remote via network</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Latency</td>
            <td className="p-3 border">Microseconds</td>
            <td className="p-3 border">Milliseconds to seconds</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failure Mode</td>
            <td className="p-3 border">Total failure</td>
            <td className="p-3 border">Partial failures possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Limited by hardware</td>
            <td className="p-3 border">Horizontally scalable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border">Immediate</td>
            <td className="p-3 border">May have delays</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Core Components of DFS</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DFS Core Components:

+--------------------------------------------------+
|                     DFS Client                    |
|  +------------+  +------------+  +-------------+ |
|  |  VFS Layer |  | Cache Mgr  |  | RPC Client  | |
|  +------------+  +------------+  +-------------+ |
+--------------------------------------------------+
                        |
                     Network
                        |
+--------------------------------------------------+
|                     DFS Server                    |
|  +------------+  +------------+  +-------------+ |
|  | Name Server|  | File Server|  | Lock Server | |
|  +------------+  +------------+  +-------------+ |
|                                                  |
|  +------------+  +------------+  +-------------+ |
|  | Storage Mgr|  | Replication|  | Metadata    | |
|  +------------+  +------------+  +-------------+ |
+--------------------------------------------------+

Key Components:
1. Client Module: Interfaces with applications
2. Server Module: Manages file storage
3. Name Service: Maps file names to locations
4. Lock Service: Handles concurrent access
5. Replication Service: Maintains copies`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DFS Design Goals</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Network Transparency:</strong> Users should not need to know file locations</li>
        <li><strong>High Availability:</strong> Files accessible even during partial system failures</li>
        <li><strong>Data Integrity:</strong> Protect against data corruption and loss</li>
        <li><strong>Performance:</strong> Minimize network overhead and latency</li>
        <li><strong>Heterogeneity:</strong> Support different OS and hardware platforms</li>
        <li><strong>Security:</strong> Authentication, authorization, and encryption</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common DFS Implementations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System</th>
            <th className="p-3 border">Developer</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">NFS</td>
            <td className="p-3 border">Sun Microsystems</td>
            <td className="p-3 border">Unix/Linux file sharing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AFS</td>
            <td className="p-3 border">Carnegie Mellon</td>
            <td className="p-3 border">Wide-area file sharing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">GFS</td>
            <td className="p-3 border">Google</td>
            <td className="p-3 border">Large-scale data processing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">HDFS</td>
            <td className="p-3 border">Apache</td>
            <td className="p-3 border">Big data analytics</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ceph</td>
            <td className="p-3 border">Red Hat</td>
            <td className="p-3 border">Object, block, and file storage</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DFS provides transparent access to files stored on remote servers</li>
        <li>Transparency includes location, access, replication, failure, and migration</li>
        <li>Key challenges: consistency, availability, partition tolerance (CAP theorem)</li>
        <li>DFS must handle network latency, partial failures, and concurrent access</li>
        <li>Common implementations: NFS, AFS, GFS, HDFS, Ceph</li>
        <li>Design goals: transparency, availability, integrity, performance, security</li>
      </ul>
    </div>
  </div>
);

export default DFSIntro;
