import React from 'react';

const ClientServerP2P: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Client-Server and Peer-to-Peer Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Network architecture defines how computers and devices communicate and share resources in a network.
      The two fundamental models are Client-Server Architecture and Peer-to-Peer (P2P) Architecture.
      Understanding these models is essential for designing and implementing efficient network systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">Client-Server Architecture</h2>
    <p className="leading-relaxed">
      Client-Server Architecture is a distributed computing model where clients request services and servers
      provide them. It is the foundation for many modern systems including websites, email, and cloud storage
      platforms. The server is a powerful system that listens for and responds to client requests by
      delivering data or performing tasks.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    +----------+     Request      +----------+
    |  Client  | --------------> |  Server  |
    | (Browser)|                 | (Web/DB) |
    +----------+ <-------------- +----------+
                    Response

    Multiple Clients can connect to one Server:

    +----------+
    | Client 1 |----+
    +----------+    |     +----------+
                    +---->|          |
    +----------+    |     |  SERVER  |
    | Client 2 |----|---->|          |
    +----------+    |     +----------+
                    |
    +----------+    |
    | Client 3 |----+
    +----------+
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">How Client-Server Works</h3>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>User Enters URL:</strong> The user types a website address into the browser</li>
      <li><strong>DNS Lookup:</strong> The browser contacts a DNS server to convert the domain into an IP address</li>
      <li><strong>Establishing Connection:</strong> The browser sends an HTTP/HTTPS request to the server</li>
      <li><strong>Server Responds:</strong> The server sends back website files (HTML, CSS, JavaScript, images)</li>
      <li><strong>Browser Renders:</strong> The client processes and displays the content to the user</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Types of Servers</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Server Type</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Web Server</td>
            <td className="p-3 border">Hosts websites and serves web pages (Apache, Nginx)</td>
          </tr>
          <tr>
            <td className="p-3 border">Database Server</td>
            <td className="p-3 border">Stores and manages data (MySQL, PostgreSQL)</td>
          </tr>
          <tr>
            <td className="p-3 border">Email Server</td>
            <td className="p-3 border">Handles email transmission and storage</td>
          </tr>
          <tr>
            <td className="p-3 border">File Server</td>
            <td className="p-3 border">Provides shared file storage and access</td>
          </tr>
          <tr>
            <td className="p-3 border">Application Server</td>
            <td className="p-3 border">Runs business logic and applications</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Peer-to-Peer (P2P) Architecture</h2>
    <p className="leading-relaxed">
      In P2P Architecture, there is no concept of a central server. Each device (peer) can act as both
      client and server, sharing resources directly with other peers. This decentralized model is commonly
      used in file sharing applications, blockchain networks, and certain communication systems.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    P2P Network - All nodes are equal:

    +--------+          +--------+
    | Peer A |<-------->| Peer B |
    +--------+          +--------+
        ^                   ^
        |                   |
        v                   v
    +--------+          +--------+
    | Peer D |<-------->| Peer C |
    +--------+          +--------+

    Each peer can:
    - Request files from other peers
    - Share files with other peers
    - Route requests to other peers
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Characteristics of P2P</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>No dedicated server - all nodes are equivalent</li>
      <li>Each node can act as both client and server</li>
      <li>Resources are distributed across all peers</li>
      <li>Highly scalable and fault-tolerant</li>
      <li>Difficult to manage and secure</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Comparison: Client-Server vs P2P</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Client-Server</th>
            <th className="p-3 border">Peer-to-Peer</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Central Control</td>
            <td className="p-3 border">Yes - server manages resources</td>
            <td className="p-3 border">No - decentralized</td>
          </tr>
          <tr>
            <td className="p-3 border">Scalability</td>
            <td className="p-3 border">Limited by server capacity</td>
            <td className="p-3 border">Highly scalable</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Higher (server infrastructure)</td>
            <td className="p-3 border">Lower (shared resources)</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">Easier to secure centrally</td>
            <td className="p-3 border">Harder to secure</td>
          </tr>
          <tr>
            <td className="p-3 border">Single Point of Failure</td>
            <td className="p-3 border">Yes - server failure affects all</td>
            <td className="p-3 border">No - network continues</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">Web browsing, Email, Banking</td>
            <td className="p-3 border">BitTorrent, Blockchain, Skype</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-6 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">Client-Server Advantages</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Centralized data management</li>
          <li>Easy to maintain and back up</li>
          <li>Better security control</li>
          <li>Scalable server infrastructure</li>
          <li>Professional administration</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">P2P Advantages</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>No single point of failure</li>
          <li>Cost-effective (no server costs)</li>
          <li>Easy to set up</li>
          <li>Highly scalable</li>
          <li>Resources shared efficiently</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-3 text-red-600 dark:text-red-400">Client-Server Disadvantages</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Server failure affects all clients</li>
          <li>High server costs</li>
          <li>Network congestion at server</li>
          <li>Requires professional IT staff</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-3 text-red-600 dark:text-red-400">P2P Disadvantages</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Difficult to secure</li>
          <li>No centralized management</li>
          <li>Performance depends on peers</li>
          <li>Legal issues (file sharing)</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Client-Server model has dedicated servers providing services to clients</li>
        <li>P2P model treats all nodes equally with no central server</li>
        <li>Client-Server is better for security and centralized management</li>
        <li>P2P is better for scalability and fault tolerance</li>
        <li>Modern systems often use hybrid approaches combining both models</li>
      </ul>
    </div>
  </div>
);

export default ClientServerP2P;
