import React from 'react';

const NetworkArchitecture: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Architecture: Client-Server and Peer-to-Peer
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Network architecture defines how computers and devices are organized and how they communicate in a
      network. The two fundamental architectures are Client-Server and Peer-to-Peer (P2P). Each has distinct
      characteristics, advantages, and use cases. Understanding these architectures is crucial for designing
      scalable and efficient network systems.
    </p>

    {/* Overview Diagram */}
    <h2 className="text-3xl font-bold mt-8">Architecture Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  Client-Server Architecture:

       +----------+
       |  SERVER  |  (Centralized)
       | - Data   |
       | - Services|
       +----+-----+
            |
    +-------+-------+-------+
    |       |       |       |
  +-+-+   +-+-+   +-+-+   +-+-+
  |C1 |   |C2 |   |C3 |   |C4 |  (Clients)
  +---+   +---+   +---+   +---+

  Peer-to-Peer Architecture:

  +----+          +----+
  | P1 |<-------->| P2 |
  +----+          +----+
     ^    \\    /    ^
     |      \\  /      |
     |       \\/       |
     |       /\\       |
     |      /  \\      |
     v    /    \\    v
  +----+          +----+
  | P3 |<-------->| P4 |
  +----+          +----+

  (Each peer is both client and server)
`}</pre>
    </div>

    {/* Client-Server */}
    <h2 className="text-3xl font-bold mt-8">Client-Server Architecture</h2>
    <p className="leading-relaxed">
      In client-server architecture, there is a clear distinction between servers that provide services and
      clients that consume those services. The server is a powerful centralized machine that stores data,
      manages resources, and handles requests from multiple clients. Clients send requests to the server
      and receive responses.
    </p>

    <h3 className="text-2xl font-semibold mt-6">How It Works</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Client-Server Request/Response Model:

  +----------+                              +----------+
  |  CLIENT  |                              |  SERVER  |
  +----+-----+                              +----+-----+
       |                                         |
       |    1. Request (e.g., GET /page.html)    |
       |---------------------------------------->|
       |                                         |
       |                                    [Process]
       |                                         |
       |    2. Response (e.g., HTML content)     |
       |<----------------------------------------|
       |                                         |

  Example: Web Browser and Web Server

  +------------+                           +------------+
  |  Browser   |  HTTP Request             |   Apache   |
  | (Chrome)   |-------------------------->|   Server   |
  |            |                           |            |
  |            |  HTTP Response (HTML)     |            |
  |            |<--------------------------|            |
  +------------+                           +------------+

  Example: Email Client and Mail Server

  +------------+                           +------------+
  |  Outlook   |  SMTP/IMAP/POP3           |   Gmail    |
  |  Client    |<------------------------->|   Server   |
  +------------+                           +------------+
`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Types of Servers</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Server Type</th>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Web Server</td>
            <td className="p-3 border">Hosts websites and serves web pages</td>
            <td className="p-3 border">Apache, Nginx, IIS</td>
          </tr>
          <tr>
            <td className="p-3 border">Database Server</td>
            <td className="p-3 border">Stores and manages databases</td>
            <td className="p-3 border">MySQL, PostgreSQL, Oracle</td>
          </tr>
          <tr>
            <td className="p-3 border">File Server</td>
            <td className="p-3 border">Stores and shares files</td>
            <td className="p-3 border">NFS, Samba, Windows File Server</td>
          </tr>
          <tr>
            <td className="p-3 border">Mail Server</td>
            <td className="p-3 border">Handles email communication</td>
            <td className="p-3 border">Exchange, Postfix, Sendmail</td>
          </tr>
          <tr>
            <td className="p-3 border">DNS Server</td>
            <td className="p-3 border">Resolves domain names to IPs</td>
            <td className="p-3 border">BIND, Windows DNS</td>
          </tr>
          <tr>
            <td className="p-3 border">Application Server</td>
            <td className="p-3 border">Hosts business logic applications</td>
            <td className="p-3 border">Tomcat, JBoss, WebSphere</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Advantages of Client-Server</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Centralized Management:</strong> Data and resources managed from a single location</li>
      <li><strong>Security:</strong> Better access control and authentication mechanisms</li>
      <li><strong>Scalability:</strong> Can handle many clients by upgrading server hardware</li>
      <li><strong>Backup:</strong> Easier to backup centralized data</li>
      <li><strong>Reliability:</strong> Dedicated servers ensure consistent service availability</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Disadvantages of Client-Server</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Single Point of Failure:</strong> Server failure affects all clients</li>
      <li><strong>Cost:</strong> Requires expensive server hardware and maintenance</li>
      <li><strong>Network Dependency:</strong> Clients cannot function without server connection</li>
      <li><strong>Bottleneck:</strong> Server can become overloaded with too many requests</li>
    </ul>

    {/* Peer-to-Peer */}
    <h2 className="text-3xl font-bold mt-8">Peer-to-Peer (P2P) Architecture</h2>
    <p className="leading-relaxed">
      In Peer-to-Peer architecture, there is no dedicated server. Each computer (peer) in the network can
      act as both client and server. Peers can share resources directly with each other without requiring
      a central authority. This creates a decentralized network where workload is distributed among all peers.
    </p>

    <h3 className="text-2xl font-semibold mt-6">How It Works</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Peer-to-Peer File Sharing:

  Peer A has: File1, File2
  Peer B has: File3, File4
  Peer C has: File5, File6

  +------+                    +------+
  |Peer A|<------------------>|Peer B|
  |      |   Share files      |      |
  +--+---+                    +--+---+
     |                           |
     |     +------+              |
     +---->|Peer C|<-------------+
           +------+

  Peer B requests File1 from Peer A:

  +------+    Request File1    +------+
  |Peer B|-------------------->|Peer A|
  |      |                     |      |
  |      |    Transfer File1   |      |
  |      |<--------------------|      |
  +------+                     +------+

  Meanwhile, Peer C can request File3 from Peer B:

  +------+    Request File3    +------+
  |Peer C|-------------------->|Peer B|
  +------+<--------------------+------+
             Transfer File3
`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Types of P2P Networks</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Pure P2P</td>
            <td className="p-3 border">Completely decentralized, no central server</td>
            <td className="p-3 border">Gnutella, Freenet</td>
          </tr>
          <tr>
            <td className="p-3 border">Hybrid P2P</td>
            <td className="p-3 border">Central server for indexing, P2P for transfer</td>
            <td className="p-3 border">Napster (original)</td>
          </tr>
          <tr>
            <td className="p-3 border">Structured P2P</td>
            <td className="p-3 border">Uses Distributed Hash Table (DHT)</td>
            <td className="p-3 border">BitTorrent, Chord</td>
          </tr>
          <tr>
            <td className="p-3 border">Unstructured P2P</td>
            <td className="p-3 border">Random connections, flooding for search</td>
            <td className="p-3 border">Gnutella, Kazaa</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Advantages of Peer-to-Peer</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>No Single Point of Failure:</strong> Network continues even if some peers leave</li>
      <li><strong>Cost-Effective:</strong> No need for dedicated expensive servers</li>
      <li><strong>Scalability:</strong> Each new peer adds resources to the network</li>
      <li><strong>Resource Sharing:</strong> Efficiently distributes storage and bandwidth</li>
      <li><strong>Resilience:</strong> Highly fault-tolerant due to distributed nature</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Disadvantages of Peer-to-Peer</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Security:</strong> Difficult to implement access control and authentication</li>
      <li><strong>Management:</strong> No centralized administration or monitoring</li>
      <li><strong>Data Consistency:</strong> Hard to maintain consistent data across peers</li>
      <li><strong>Performance:</strong> Depends on peer availability and network conditions</li>
      <li><strong>Legal Issues:</strong> Often associated with copyright infringement</li>
    </ul>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">Client-Server vs Peer-to-Peer</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Parameter</th>
            <th className="p-3 border">Client-Server</th>
            <th className="p-3 border">Peer-to-Peer</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Architecture</td>
            <td className="p-3 border">Centralized</td>
            <td className="p-3 border">Decentralized</td>
          </tr>
          <tr>
            <td className="p-3 border">Roles</td>
            <td className="p-3 border">Distinct (client/server)</td>
            <td className="p-3 border">Equal (all are peers)</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Storage</td>
            <td className="p-3 border">Centralized on server</td>
            <td className="p-3 border">Distributed across peers</td>
          </tr>
          <tr>
            <td className="p-3 border">Scalability</td>
            <td className="p-3 border">Limited by server capacity</td>
            <td className="p-3 border">Scales with more peers</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">High (server infrastructure)</td>
            <td className="p-3 border">Low (shared resources)</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">Easier to implement</td>
            <td className="p-3 border">Difficult to secure</td>
          </tr>
          <tr>
            <td className="p-3 border">Reliability</td>
            <td className="p-3 border">Single point of failure</td>
            <td className="p-3 border">No single point of failure</td>
          </tr>
          <tr>
            <td className="p-3 border">Management</td>
            <td className="p-3 border">Centralized, easier</td>
            <td className="p-3 border">Distributed, complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Bottleneck</td>
            <td className="p-3 border">Server can be bottleneck</td>
            <td className="p-3 border">No single bottleneck</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">Web, Email, Database</td>
            <td className="p-3 border">BitTorrent, Blockchain, Skype</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">When to Use Each Architecture</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Use Client-Server When:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Data security is critical</li>
          <li>Centralized management is needed</li>
          <li>Consistent data is required</li>
          <li>Business applications</li>
          <li>Web services and APIs</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Use P2P When:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Distributing large files</li>
          <li>Cost must be minimized</li>
          <li>High availability is needed</li>
          <li>No central authority required</li>
          <li>Real-time communication (VoIP)</li>
        </ul>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Client-Server: Centralized, clear roles, easier security and management</li>
      <li>P2P: Decentralized, equal peers, better fault tolerance and scalability</li>
      <li>HTTP, SMTP, FTP are client-server protocols</li>
      <li>BitTorrent and Blockchain use P2P architecture</li>
      <li>Modern applications often use hybrid approaches</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Understand the fundamental differences between architectures</li>
        <li>Know advantages and disadvantages of each</li>
        <li>Client-server: Bottleneck at server, single point of failure</li>
        <li>P2P: No bottleneck, no single point of failure, security challenges</li>
        <li>Hybrid models combine benefits of both architectures</li>
      </ul>
    </div>
  </div>
);

export default NetworkArchitecture;
