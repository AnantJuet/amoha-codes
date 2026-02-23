import React from "react";

const NamesIdentifiers: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Names and Identifiers in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      In distributed systems, it is crucial to distinguish between names, identifiers, and
      addresses. Each serves a different purpose in locating and accessing entities across
      the network. Understanding these distinctions is fundamental to designing effective
      naming schemes.
    </p>

    <h2 className="text-3xl font-bold mt-8">Names vs Identifiers vs Addresses</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relationship Between Names, Identifiers, and Addresses:

┌─────────────────────────────────────────────────────────────────┐
│                          ENTITY                                  │
│                    (File, Process, Service)                      │
└─────────────────────────────────────────────────────────────────┘
                               ▲
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
        ▼                      ▼                      ▼
┌───────────────┐    ┌─────────────────┐    ┌───────────────┐
│     NAME      │    │   IDENTIFIER    │    │    ADDRESS    │
├───────────────┤    ├─────────────────┤    ├───────────────┤
│ Human-readable│    │ Machine-friendly│    │ Location info │
│ May change    │    │ Never changes   │    │ Can change    │
│ Multiple OK   │    │ Unique          │    │ Multiple OK   │
└───────────────┘    └─────────────────┘    └───────────────┘
        │                      │                      │
        │                      │                      │
        ▼                      ▼                      ▼
  "myfile.txt"        "550e8400-e29b-    "192.168.1.10:
                       41d4-a716-..."     8080"

Example Mapping:
  Name: "John's Computer"  ──► Identifier: MAC-00:1A:2B:3C:4D:5E
                                              │
                           Address: 10.0.0.25 ◄┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties Comparison</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Identifier</th>
            <th className="p-3 border">Address</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Uniqueness</td>
            <td className="p-3 border">Not required</td>
            <td className="p-3 border">Required (globally unique)</td>
            <td className="p-3 border">Unique within context</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Mutability</td>
            <td className="p-3 border">Can be changed</td>
            <td className="p-3 border">Immutable</td>
            <td className="p-3 border">Can change (mobility)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Human-readable</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Usually not</td>
            <td className="p-3 border">Sometimes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Location info</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reusable</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No (after entity dies)</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">True Identifiers</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        A true identifier must satisfy three properties:
      </p>
      <ol className="list-decimal list-inside leading-relaxed space-y-2">
        <li>Each identifier refers to at most one entity (uniqueness)</li>
        <li>Each entity is referred to by at most one identifier (no aliases)</li>
        <li>An identifier always refers to the same entity (immutability)</li>
      </ol>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Identifiers</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">UUID (Universally Unique Identifier)</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>128-bit identifier</li>
          <li>Generated without central authority</li>
          <li>Extremely low collision probability</li>
          <li>Version 4: Random generation</li>
        </ul>
        <p className="mt-2 font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-2 rounded">
          550e8400-e29b-41d4-a716-446655440000
        </p>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">MAC Address</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>48-bit hardware identifier</li>
          <li>Assigned by manufacturer</li>
          <li>First 24 bits: OUI (vendor)</li>
          <li>Last 24 bits: Device specific</li>
        </ul>
        <p className="mt-2 font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-2 rounded">
          00:1A:2B:3C:4D:5E
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Identifier Generation Methods</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Identifier Generation Approaches:

1. Centralized Counter
   ┌─────────────────┐
   │ Central Server  │
   │   counter = 0   │
   └────────┬────────┘
            │
   Request  │  Return counter++
   ─────────┼─────────────────►
            │
   Problems: Single point of failure, bottleneck

2. Timestamp + Node ID
   ┌─────────────────┐
   │   timestamp     │ + │  node_id  │ + │ sequence │
   │  (64 bits)      │   │ (48 bits) │   │ (16 bits)│
   └─────────────────┘

   Similar to: Twitter Snowflake, UUID v1

3. Random Generation (UUID v4)
   ┌──────────────────────────────────────────┐
   │     122 random bits + 6 version bits     │
   │     Collision probability: 2^-122        │
   └──────────────────────────────────────────┘

4. Hash-Based (Content Addressing)
   ┌─────────┐      SHA-256      ┌──────────────┐
   │ Content │ ─────────────────►│   Hash ID    │
   └─────────┘                   └──────────────┘

   Same content = Same identifier
   Used in: Git, IPFS, BitTorrent`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Access Points and Addresses</h2>

    <p className="leading-relaxed mt-2">
      An entity can have multiple access points, and each access point has an address.
      The relationship between entities and addresses is many-to-many.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Entity-Access Point Relationship:

              ┌─────────────────────────────────────┐
              │           Web Server                 │
              │          (Single Entity)             │
              └─────────────────────────────────────┘
                    │                │
                    ▼                ▼
           ┌───────────────┐ ┌───────────────┐
           │ Access Point 1│ │ Access Point 2│
           │   Port 80     │ │   Port 443    │
           └───────┬───────┘ └───────┬───────┘
                   │                 │
                   ▼                 ▼
           ┌───────────────┐ ┌───────────────┐
           │   Address 1   │ │   Address 2   │
           │192.168.1.10:80│ │192.168.1.10:443│
           └───────────────┘ └───────────────┘

Mobile Entity Example:
              ┌─────────────┐
              │  Laptop     │  (Entity moves)
              │  ID: ABC123 │
              └─────────────┘
                    │
         ┌─────────┴─────────┐
         │                   │
         ▼                   ▼
   Home Network        Office Network
   192.168.1.50        10.0.0.75
   (old address)       (new address)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Name-to-Address Binding</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Binding Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Static Binding</td>
            <td className="p-3 border">
              Name permanently bound to address at creation time
            </td>
            <td className="p-3 border">/etc/hosts file entries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dynamic Binding</td>
            <td className="p-3 border">
              Name-address mapping can change during entity lifetime
            </td>
            <td className="p-3 border">DNS records, DHCP</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Late Binding</td>
            <td className="p-3 border">
              Address resolved only when entity is accessed
            </td>
            <td className="p-3 border">Service discovery</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Aliases and Synonyms</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Aliases (Multiple Names)</h3>
        <p className="leading-relaxed">
          Multiple names can refer to the same entity. Useful for providing
          alternative access paths or backward compatibility.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
          <li>www.example.com</li>
          <li>example.com</li>
          <li>web.example.com</li>
        </ul>
        <p className="text-sm mt-2 italic">All point to same server</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Symbolic Links</h3>
        <p className="leading-relaxed">
          A name that points to another name rather than directly to an entity.
          Common in file systems.
        </p>
        <div className="font-mono text-sm mt-2 bg-gray-100 text-gray-900 p-2 rounded">
          {"/usr/bin/python3 -> python3.9"}
        </div>
        <p className="text-sm mt-2 italic">Soft link to actual binary</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Identifier Comparison</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Identifier Type</th>
            <th className="p-3 border">Size</th>
            <th className="p-3 border">Generation</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">UUID</td>
            <td className="p-3 border">128 bits</td>
            <td className="p-3 border">Decentralized</td>
            <td className="p-3 border">General purpose</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MAC Address</td>
            <td className="p-3 border">48 bits</td>
            <td className="p-3 border">Manufacturer</td>
            <td className="p-3 border">Network interfaces</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">OID</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">Hierarchical</td>
            <td className="p-3 border">SNMP, X.500</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hash (SHA-256)</td>
            <td className="p-3 border">256 bits</td>
            <td className="p-3 border">Content-derived</td>
            <td className="p-3 border">Content addressing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Names are human-readable and can have multiple names per entity</li>
        <li>Identifiers are unique, immutable, and refer to exactly one entity</li>
        <li>Addresses indicate location and can change as entities move</li>
        <li>True identifiers satisfy: uniqueness, no aliases, immutability</li>
        <li>UUIDs allow decentralized identifier generation</li>
        <li>Content-based addressing uses hash of content as identifier</li>
        <li>Binding can be static, dynamic, or late (resolved at access time)</li>
      </ul>
    </div>
  </div>
);

export default NamesIdentifiers;
