import React from "react";

const FlatNaming: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Flat Naming in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Flat naming refers to naming schemes where names are unstructured identifiers with
      no inherent meaning or hierarchy. These names are typically random bit strings that
      cannot be used to locate the entity directly. Resolving flat names requires special
      techniques since the name provides no location hints.
    </p>

    <h2 className="text-3xl font-bold mt-8">Characteristics of Flat Names</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Properties</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>No structure or hierarchy</li>
          <li>Cannot derive location from name</li>
          <li>Usually machine-generated</li>
          <li>Fixed length (often)</li>
          <li>Globally unique</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Examples</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>MAC addresses</li>
          <li>UUIDs/GUIDs</li>
          <li>Object identifiers</li>
          <li>Process IDs</li>
          <li>Content hashes</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Resolution Techniques for Flat Names</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Flat Name Resolution Overview:

┌─────────────────────────────────────────────────────────────────┐
│                 FLAT NAME RESOLUTION METHODS                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Broadcasting        2. Forwarding Pointers                 │
│  ┌─────┐               ┌───┐   ┌───┐   ┌───┐                  │
│  │Query│──►All Nodes   │ A │──►│ B │──►│ C │                  │
│  └─────┘               └───┘   └───┘   └───┘                  │
│                                                                 │
│  3. Home-Based         4. DHT (Distributed Hash Table)         │
│  ┌──────┐              ┌───┬───┬───┬───┐                       │
│  │ Home │◄── Always    │ 0 │ 1 │...│ n │                       │
│  │Server│    knows     └───┴───┴───┴───┘                       │
│  └──────┘    location     Hash Ring                            │
│                                                                 │
│  5. Hierarchical Search                                         │
│       ┌─────┐                                                   │
│       │Root │                                                   │
│       └──┬──┘                                                   │
│      ┌───┴───┐                                                 │
│      ▼       ▼                                                 │
│    ┌───┐   ┌───┐                                               │
│    │ L │   │ R │                                               │
│    └───┘   └───┘                                               │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Broadcasting</h2>

    <p className="leading-relaxed">
      The simplest approach where a message containing the identifier is broadcast to all
      machines. The entity or machine hosting the entity responds with its current address.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Broadcasting Resolution:

Step 1: Client broadcasts lookup request
┌────────┐
│ Client │ ─── "WHERE IS ID:ABC123?" ───►
└────────┘           │
                     │ Broadcast
        ┌────────────┼────────────┐
        ▼            ▼            ▼
    ┌──────┐    ┌──────┐    ┌──────┐
    │Node A│    │Node B│    │Node C│
    │      │    │ABC123│    │      │
    └──────┘    └──┬───┘    └──────┘
                   │
Step 2: Node with entity responds
                   │
                   ▼
    ◄──── "ABC123 is at 192.168.1.20" ────

Example: ARP (Address Resolution Protocol)
┌──────────────────────────────────────────────────┐
│  "Who has IP 192.168.1.1? Tell 192.168.1.100"   │
│                                                  │
│  Response: "192.168.1.1 is at MAC aa:bb:cc:..."│
└──────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Broadcasting</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Advantages</td>
            <td className="p-3 border">
              Simple, no infrastructure needed, always up-to-date
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Disadvantages</td>
            <td className="p-3 border">
              Does not scale, high network load, limited to LAN
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Examples</td>
            <td className="p-3 border">
              ARP, DHCP discovery, mDNS/Bonjour
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Forwarding Pointers</h2>

    <p className="leading-relaxed">
      When an entity moves, it leaves behind a pointer to its new location. Following
      the chain of pointers eventually leads to the entity's current location.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Forwarding Pointers:

Initial: Entity E at Location A
┌───────────┐
│Location A │
│  Entity E │
└───────────┘

After Move 1: Entity E moves to Location B
┌───────────┐      ┌───────────┐
│Location A │──────►│Location B │
│ Pointer   │      │  Entity E │
└───────────┘      └───────────┘

After Move 2: Entity E moves to Location C
┌───────────┐      ┌───────────┐      ┌───────────┐
│Location A │──────►│Location B │──────►│Location C │
│ Pointer   │      │ Pointer   │      │  Entity E │
└───────────┘      └───────────┘      └───────────┘

Resolution: Follow the chain
┌────────┐
│ Client │
└───┬────┘
    │ "Find E"
    ▼
┌───────────┐
│Location A │ ─► "E moved to B"
└───────────┘
    │
    ▼
┌───────────┐
│Location B │ ─► "E moved to C"
└───────────┘
    │
    ▼
┌───────────┐
│Location C │ ─► "E is HERE"
└───────────┘`}
      </pre>
    </div>

    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Chain Shortening:</h4>
      <p className="leading-relaxed">
        To reduce chain length, once the entity is found, the client can update its
        reference to point directly to the current location. Intermediate pointers
        can also be updated or garbage collected.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Home-Based Approach</h2>

    <p className="leading-relaxed">
      Each entity is assigned a home location (home agent) that always knows the
      entity's current address. Clients contact the home to find the current location.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Home-Based Resolution:

┌─────────────────────────────────────────────────────────┐
│                    HOME AGENT                            │
│            (Fixed, well-known location)                  │
│  ┌─────────────────────────────────────┐               │
│  │  Entity ID  │  Current Address      │               │
│  ├─────────────┼───────────────────────┤               │
│  │  E1         │  192.168.1.50         │               │
│  │  E2         │  10.0.0.25            │               │
│  └─────────────┴───────────────────────┘               │
└─────────────────────────────────────────────────────────┘
         ▲                    │
         │                    │
    (1) Query             (2) Return
    "Where is E1?"        "192.168.1.50"
         │                    │
         │                    ▼
    ┌────────┐          ┌─────────────┐
    │ Client │          │  Entity E1  │
    └────────┘          │192.168.1.50 │
         │              └─────────────┘
         │                    ▲
         └────────────────────┘
            (3) Direct Communication

When Entity Moves:
┌───────────┐   "My new addr:    ┌─────────────┐
│  Entity   │   10.0.0.100"     │  HOME AGENT │
│  (moved)  │ ──────────────────►│   Update    │
└───────────┘                    └─────────────┘`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Home-Based</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Advantages</td>
            <td className="p-3 border">
              Simple, single lookup, entity can move freely
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Disadvantages</td>
            <td className="p-3 border">
              Single point of failure, home may be far away, overhead
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Examples</td>
            <td className="p-3 border">
              Mobile IP, cellular networks
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Distributed Hash Tables (DHT)</h2>

    <p className="leading-relaxed">
      DHTs provide a scalable, decentralized way to locate entities. Names are hashed
      to determine which node is responsible for storing the name-to-address mapping.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DHT (Chord Example):

Hash Space: 0 to 2^m - 1 (circular)

              0
              │
        ┌─────┴─────┐
       7│           │1
        │   Hash    │
       6│   Ring    │2
        │           │
        └─────┬─────┘
          5   │   3
              4

Nodes positioned by hash(node_id):
- Node A at position 1
- Node B at position 4
- Node C at position 6

Storing key K:
- hash(K) = 3
- Responsible node = successor(3) = Node B (at 4)

Lookup Process:
┌────────┐
│ Client │  "Lookup key K"
└───┬────┘
    │
    ▼  hash(K) = 3
┌────────┐
│ Node A │  "3 not in my range (1-3)"
│  at 1  │  "Forward to successor"
└───┬────┘
    │
    ▼
┌────────┐
│ Node B │  "3 is in my range (4)"
│  at 4  │  "K maps to address X"
└────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. Hierarchical Search</h2>

    <p className="leading-relaxed">
      The network is divided into domains organized hierarchically. Each domain has
      a directory node that knows about entities in its domain and can forward
      queries up the hierarchy.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Hierarchical Location Service:

                    ┌─────────────┐
                    │   Root Dir  │
                    │   (Global)  │
                    └──────┬──────┘
                           │
            ┌──────────────┼──────────────┐
            ▼              ▼              ▼
       ┌─────────┐   ┌─────────┐   ┌─────────┐
       │Domain A │   │Domain B │   │Domain C │
       │  Dir    │   │  Dir    │   │  Dir    │
       └────┬────┘   └────┬────┘   └────┬────┘
            │             │             │
       ┌────┴────┐   ┌────┴────┐   ┌────┴────┐
       ▼         ▼   ▼         ▼   ▼         ▼
    ┌─────┐ ┌─────┐┌─────┐ ┌─────┐┌─────┐ ┌─────┐
    │Leaf │ │Leaf ││Leaf │ │Leaf ││Leaf │ │Leaf │
    │ A1  │ │ A2  ││ B1  │ │ B2  ││ C1  │ │ C2  │
    └─────┘ └─────┘└─────┘ └─────┘└─────┘ └─────┘

Lookup: Entity E in Leaf A1 searches for Entity X in Leaf C2

1. A1 checks local → not found
2. A1 asks Domain A Dir → not found
3. Domain A asks Root → Root knows Domain C has X
4. Root returns pointer to Domain C Dir
5. Domain C Dir returns pointer to Leaf C2
6. A1 contacts C2 directly`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Flat Naming Techniques</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Scalability</th>
            <th className="p-3 border">Lookup Cost</th>
            <th className="p-3 border">Update Cost</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Broadcasting</td>
            <td className="p-3 border">Poor (LAN only)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Forwarding Pointers</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">O(chain length)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Home-Based</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DHT</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hierarchical</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Flat names have no structure - cannot derive location from name</li>
        <li>Broadcasting is simple but only works in local networks</li>
        <li>Forwarding pointers leave trail when entity moves - chains can grow</li>
        <li>Home-based uses fixed home agent - simple but can be bottleneck</li>
        <li>DHTs distribute responsibility - O(log n) lookups with Chord</li>
        <li>Hierarchical search organizes domains - good for locality</li>
        <li>Each technique has trade-offs between scalability, latency, and complexity</li>
      </ul>
    </div>
  </div>
);

export default FlatNaming;
