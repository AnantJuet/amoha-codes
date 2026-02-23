import React from "react";

const StructuredNaming: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Structured Naming in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Structured naming uses names that are organized in a specific way, typically
      hierarchically. These names are human-readable and often provide hints about
      the location or organization of entities. The most common example is the
      hierarchical namespace used in file systems and DNS.
    </p>

    <h2 className="text-3xl font-bold mt-8">Name Spaces</h2>

    <p className="leading-relaxed">
      A name space is a labeled directed graph where leaf nodes represent named entities
      and directory nodes contain references to other nodes. Each path in the graph
      represents a structured name.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Name Space as Directed Graph:

                    ┌───────────┐
                    │   ROOT    │  (n0)
                    │    "/"    │
                    └─────┬─────┘
                          │
           ┌──────────────┼──────────────┐
           │ home         │ etc          │ usr
           ▼              ▼              ▼
      ┌─────────┐   ┌─────────┐    ┌─────────┐
      │   n1    │   │   n2    │    │   n3    │
      │ "home"  │   │  "etc"  │    │  "usr"  │
      └────┬────┘   └────┬────┘    └────┬────┘
           │             │              │
      ┌────┴────┐        │         ┌────┴────┐
      │ alice   │ bob    │ passwd  │ bin     │ lib
      ▼         ▼        ▼         ▼         ▼
   ┌─────┐ ┌─────┐  ┌─────┐   ┌─────┐   ┌─────┐
   │ n4  │ │ n5  │  │ n6  │   │ n7  │   │ n8  │
   │alice│ │ bob │  │passwd│  │ bin │   │ lib │
   └──┬──┘ └─────┘  └─────┘   └─────┘   └─────┘
      │
      │ docs
      ▼
   ┌─────┐
   │ n9  │ ← Leaf node (file)
   │docs │
   └─────┘

Path Name: /home/alice/docs
Traversal: n0 → n1 → n4 → n9`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Nodes</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Node Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Contains</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Leaf Node</td>
            <td className="p-3 border">
              Represents a named entity (file, device, etc.)
            </td>
            <td className="p-3 border">
              Entity data or reference to entity
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Directory Node</td>
            <td className="p-3 border">
              Contains references to other nodes
            </td>
            <td className="p-3 border">
              Directory table: (label, node) pairs
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Root Node</td>
            <td className="p-3 border">
              Starting point for name resolution
            </td>
            <td className="p-3 border">
              Top-level directory entries
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Absolute vs Relative Path Names</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Absolute Path Names</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Start from the root node</li>
          <li>Begin with separator (/, \)</li>
          <li>Globally unique within namespace</li>
          <li>Independent of current context</li>
        </ul>
        <p className="mt-2 font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-2 rounded">
          /home/alice/documents/report.txt
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Relative Path Names</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Start from current directory</li>
          <li>Do not begin with separator</li>
          <li>Depend on current context</li>
          <li>Shorter and more convenient</li>
        </ul>
        <p className="mt-2 font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-2 rounded">
          ../bob/files/data.csv
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Name Resolution</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Name Resolution Process:

Resolving: /home/alice/docs/report.txt

Step 1: Start at root "/"
┌───────────┐
│   ROOT    │  Directory Table:
│    "/"    │  home → n1
└─────┬─────┘  etc  → n2
      │        usr  → n3
      │ Look up "home"
      ▼
Step 2: Move to "home" directory
┌───────────┐
│   n1      │  Directory Table:
│  "home"   │  alice → n4
└─────┬─────┘  bob   → n5
      │
      │ Look up "alice"
      ▼
Step 3: Move to "alice" directory
┌───────────┐
│   n4      │  Directory Table:
│  "alice"  │  docs    → n9
└─────┬─────┘  desktop → n10
      │
      │ Look up "docs"
      ▼
Step 4: Move to "docs" directory
┌───────────┐
│   n9      │  Directory Table:
│  "docs"   │  report.txt → n15
└─────┬─────┘
      │
      │ Look up "report.txt"
      ▼
Step 5: Return leaf node (file)
┌───────────┐
│   n15     │  ← Entity found!
│report.txt │
└───────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Linking in Name Spaces</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Hard Links</h3>
        <p className="leading-relaxed mb-2">
          Multiple directory entries point to the same node. The node has a
          reference count; deleted only when count reaches zero.
        </p>
        <div className="font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-2 rounded mt-2">
          <pre className="whitespace-pre-wrap text-gray-900">
{`/home/alice/file.txt ──┐
                       ├──► [Node n]
/home/bob/link.txt ────┘
                    refcount = 2`}
          </pre>
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Symbolic Links (Soft Links)</h3>
        <p className="leading-relaxed mb-2">
          A leaf node that contains a path name to another node. Resolution
          follows the symbolic link to find the actual entity.
        </p>
        <div className="font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-2 rounded mt-2">
          <pre className="whitespace-pre-wrap text-gray-900">
{`/home/alice/shortcut
    │
    └──► contains: "/home/bob/data"
              │
              └──► [Actual Node]`}
          </pre>
        </div>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Mounting in Distributed Systems</h2>

    <p className="leading-relaxed">
      Mounting allows different name spaces to be combined into a single unified
      name space. A mount point in one name space refers to a node in another
      name space, possibly on a different machine.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Mounting Remote Name Space:

Local Machine (Client)              Remote Machine (Server)
┌─────────────────────┐            ┌─────────────────────┐
│         /           │            │         /           │
│        ┌┴┐          │            │        ┌┴┐          │
│      home usr       │            │      data exports   │
│       /             │            │        │            │
│    alice            │            │      shared         │
│      │              │            │       /│\           │
│   ┌──┴──┐           │            │   doc pic vid      │
│  docs  remote ══════╪════════════╪══►  [files...]     │
│        (mount)      │            │                     │
└─────────────────────┘            └─────────────────────┘

After mounting:
/home/alice/remote/doc → Remote:/data/shared/doc

Mount Information:
┌───────────────────────────────────────────────────────┐
│  Mount Point: /home/alice/remote                      │
│  Server:      192.168.1.100                           │
│  Protocol:    NFS                                     │
│  Remote Path: /data/shared                            │
└───────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Name Space Distribution</h2>

    <p className="leading-relaxed">
      Large-scale name spaces are typically partitioned and distributed across
      multiple name servers. The name space is divided into layers based on
      how often the data changes and how it's used.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Layer</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Characteristics</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Global Layer</td>
            <td className="p-3 border">
              Top-level nodes (root, major domains)
            </td>
            <td className="p-3 border">
              Highly stable, replicated worldwide, cached extensively
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Administrational Layer</td>
            <td className="p-3 border">
              Organization-level nodes
            </td>
            <td className="p-3 border">
              Relatively stable, managed by organizations
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Managerial Layer</td>
            <td className="p-3 border">
              Lower-level nodes (hosts, files)
            </td>
            <td className="p-3 border">
              Changes frequently, local management
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DNS Name Space Layers Example:

┌─────────────────────────────────────────────────────────────────┐
│  GLOBAL LAYER                                                   │
│  ┌─────┐                                                       │
│  │  .  │  Root                                                 │
│  └──┬──┘                                                       │
│     ├── com ── org ── edu ── net ── gov                        │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  ADMINISTRATIONAL LAYER                                         │
│     │                                                           │
│     └── example.com                                             │
│            ├── www                                              │
│            ├── mail                                             │
│            └── ftp                                              │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  MANAGERIAL LAYER                                               │
│            │                                                    │
│            └── server1.example.com                              │
│            └── workstation.example.com                          │
│            └── printer.example.com                              │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Iterative vs Recursive Resolution</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Iterative Resolution</h3>
        <p className="leading-relaxed mb-2">
          Client contacts each name server in sequence. Server returns address
          of next server to contact.
        </p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Client does all the work</li>
          <li>Servers have lower load</li>
          <li>Client needs more logic</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Recursive Resolution</h3>
        <p className="leading-relaxed mb-2">
          Each server contacts the next server on behalf of the client. Final
          result is passed back through the chain.
        </p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Servers do the work</li>
          <li>Client is simpler</li>
          <li>Better caching at servers</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Caching in Name Resolution</h2>

    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Benefits of Caching:</h4>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>Reduces resolution latency for repeated lookups</li>
        <li>Decreases load on name servers</li>
        <li>Improves availability when servers are unreachable</li>
      </ul>
      <h4 className="font-bold mb-2 mt-4">Cache Considerations:</h4>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>TTL (Time-To-Live) determines cache validity</li>
        <li>Stale cache entries can cause inconsistency</li>
        <li>Cache invalidation is challenging in distributed systems</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Structured names are organized hierarchically in name spaces</li>
        <li>Name spaces use directed graphs with directory and leaf nodes</li>
        <li>Absolute paths start from root; relative paths from current context</li>
        <li>Hard links share the same node; symbolic links store path names</li>
        <li>Mounting combines different name spaces into a unified view</li>
        <li>Large name spaces are distributed across global, admin, and managerial layers</li>
        <li>Resolution can be iterative (client-driven) or recursive (server-driven)</li>
        <li>Caching improves performance but requires careful TTL management</li>
      </ul>
    </div>
  </div>
);

export default StructuredNaming;
