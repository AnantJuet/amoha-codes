import React from "react";

const NamingIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Naming in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Naming is a fundamental concept in distributed systems that allows entities such as
      processes, services, files, and resources to be identified and accessed. A well-designed
      naming system enables location transparency, resource sharing, and efficient communication
      between distributed components.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Naming?</h2>
    <p className="leading-relaxed">
      A name in a distributed system is a string of bits or characters that is used to refer
      to an entity. Entities can be anything from processes, users, mailboxes, files, printers,
      to web pages. Names are essential for accessing and managing resources across a distributed
      environment where components are physically separated.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Naming is Important</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Naming System Overview:

┌─────────────────────────────────────────────────────────────┐
│                    NAMING SYSTEM                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  User/Application                                           │
│       │                                                     │
│       ▼                                                     │
│  ┌─────────────┐                                           │
│  │    NAME     │  "www.example.com"                        │
│  └──────┬──────┘                                           │
│         │                                                   │
│         ▼  Name Resolution                                  │
│  ┌─────────────┐                                           │
│  │  IDENTIFIER │  "192.168.1.100"                          │
│  └──────┬──────┘                                           │
│         │                                                   │
│         ▼  Address Lookup                                   │
│  ┌─────────────┐                                           │
│  │   ADDRESS   │  Physical location/port                   │
│  └──────┬──────┘                                           │
│         │                                                   │
│         ▼                                                   │
│  ┌─────────────┐                                           │
│  │   ENTITY    │  The actual resource                      │
│  └─────────────┘                                           │
└─────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Concepts in Naming</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Concept</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Name</td>
            <td className="p-3 border">
              Human-readable string to identify an entity
            </td>
            <td className="p-3 border">www.google.com</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Identifier</td>
            <td className="p-3 border">
              Unique reference that never changes for an entity
            </td>
            <td className="p-3 border">UUID, MAC address</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Address</td>
            <td className="p-3 border">
              Special name that represents access point location
            </td>
            <td className="p-3 border">IP address, port number</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Access Point</td>
            <td className="p-3 border">
              Interface through which an entity can be accessed
            </td>
            <td className="p-3 border">Network socket, API endpoint</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Names</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Flat Names</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Random bit strings</li>
          <li>No structure or hierarchy</li>
          <li>Cannot derive location</li>
          <li>Must search to resolve</li>
        </ul>
        <p className="text-sm mt-2 italic">Example: MAC address, GUID</p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Structured Names</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Hierarchical organization</li>
          <li>Human-readable format</li>
          <li>Location hints embedded</li>
          <li>Easy to parse and navigate</li>
        </ul>
        <p className="text-sm mt-2 italic">Example: DNS names, file paths</p>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Attribute-Based Names</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Describe entity properties</li>
          <li>Search by attributes</li>
          <li>Flexible querying</li>
          <li>Used in directory services</li>
        </ul>
        <p className="text-sm mt-2 italic">Example: LDAP queries, X.500</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Name Resolution Process</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Name Resolution Steps:

Step 1: Application requests resource by name
┌─────────────┐
│ Application │ ─── "file:///home/user/doc.txt" ───►
└─────────────┘

Step 2: Name sent to naming service
                    ┌──────────────────┐
───────────────────►│  Naming Service  │
                    │  (Name Server)   │
                    └────────┬─────────┘
                             │
Step 3: Service looks up name│in its database
                             ▼
                    ┌──────────────────┐
                    │  Name Database   │
                    │  ┌────────────┐  │
                    │  │ name→addr  │  │
                    │  └────────────┘  │
                    └────────┬─────────┘
                             │
Step 4: Address returned     │
◄────────────────────────────┘
   "192.168.1.50:8080"

Step 5: Application connects to address
┌─────────────┐              ┌──────────┐
│ Application │─────────────►│  Entity  │
└─────────────┘              └──────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Goals of a Naming System</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Goal</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Location Transparency</td>
            <td className="p-3 border">
              Names should not reveal physical location of resources
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Location Independence</td>
            <td className="p-3 border">
              Name should not need to change when resource moves
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">
              System should handle growth in names and requests efficiently
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fault Tolerance</td>
            <td className="p-3 border">
              Naming service should remain available despite failures
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Security</td>
            <td className="p-3 border">
              Protect against unauthorized name registration and lookups
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Naming System Architectures</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Centralized</h3>
        <p className="leading-relaxed">
          Single server maintains all name-to-address mappings. Simple but creates
          a single point of failure and scalability bottleneck.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Distributed</h3>
        <p className="leading-relaxed">
          Multiple servers share the naming database. Provides fault tolerance,
          load balancing, and better scalability. Used by DNS.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Naming Systems</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>DNS (Domain Name System):</strong> Maps domain names to IP addresses</li>
      <li><strong>LDAP:</strong> Directory service for organizations and resources</li>
      <li><strong>X.500:</strong> ISO standard for directory services</li>
      <li><strong>JNDI:</strong> Java Naming and Directory Interface</li>
      <li><strong>GNS:</strong> Global Name Service for distributed systems</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Names provide human-readable references to distributed entities</li>
        <li>Identifiers are unique and immutable references to entities</li>
        <li>Addresses are special names indicating access point locations</li>
        <li>Name resolution is the process of converting names to addresses</li>
        <li>Three main types: Flat, Structured, and Attribute-based names</li>
        <li>Good naming systems provide transparency, scalability, and fault tolerance</li>
        <li>Distributed naming systems avoid single point of failure</li>
      </ul>
    </div>
  </div>
);

export default NamingIntro;
