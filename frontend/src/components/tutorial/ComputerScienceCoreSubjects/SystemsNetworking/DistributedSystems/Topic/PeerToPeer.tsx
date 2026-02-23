import React from "react";

const PeerToPeer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Peer-to-Peer (P2P) Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      In a peer-to-peer (P2P) architecture, nodes in the network have equal roles
      and responsibilities. Each peer can act as both a client and a server,
      sharing resources directly with other peers without the need for a
      centralized server.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Decentralization</h3>
        <p className="leading-relaxed">
          No central server or authority. All peers have equal status and can
          communicate directly with each other.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Self-Organization</h3>
        <p className="leading-relaxed">
          The network organizes itself automatically as peers join and leave.
          No manual configuration required.
        </p>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Resource Sharing</h3>
        <p className="leading-relaxed">
          Peers share their resources (storage, bandwidth, processing power)
          with other peers in the network.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Scalability</h3>
        <p className="leading-relaxed">
          System capacity grows with each new peer. More peers mean more
          available resources.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">P2P Network Topology</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Peer-to-Peer Network:

       ┌──────┐                ┌──────┐
       │Peer A│◄──────────────►│Peer B│
       └──┬───┘                └───┬──┘
          │                        │
          │    ┌──────────────┐    │
          └───►│   Peer C     │◄───┘
               └──────┬───────┘
                      │
          ┌───────────┼───────────┐
          │           │           │
          ▼           ▼           ▼
     ┌──────┐    ┌──────┐    ┌──────┐
     │Peer D│◄──►│Peer E│◄──►│Peer F│
     └──────┘    └──────┘    └──────┘

Each peer can:
- Request data from others (act as client)
- Serve data to others (act as server)
- Route requests to other peers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of P2P Networks</h2>

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
            <td className="p-3 border font-semibold">Pure P2P</td>
            <td className="p-3 border">
              Completely decentralized, no special nodes
            </td>
            <td className="p-3 border">
              Gnutella (original)
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hybrid P2P</td>
            <td className="p-3 border">
              Has central servers for indexing/coordination
            </td>
            <td className="p-3 border">
              Napster, BitTorrent (with tracker)
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Structured P2P</td>
            <td className="p-3 border">
              Uses DHT for organized data placement
            </td>
            <td className="p-3 border">
              Chord, Kademlia
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unstructured P2P</td>
            <td className="p-3 border">
              Random connections, flooding-based search
            </td>
            <td className="p-3 border">
              Gnutella, Freenet
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of P2P</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>No single point of failure:</strong> System continues even if some peers fail</li>
      <li><strong>Scalability:</strong> Resources grow as more peers join</li>
      <li><strong>Cost-effective:</strong> No need for expensive central servers</li>
      <li><strong>Load distribution:</strong> Load is shared among all peers</li>
      <li><strong>Resilience:</strong> Highly resistant to attacks and censorship</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Challenges</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Security:</strong> More vulnerable to malicious peers</li>
      <li><strong>Quality of Service:</strong> Hard to guarantee consistent performance</li>
      <li><strong>Search efficiency:</strong> Finding resources can be slow in unstructured networks</li>
      <li><strong>Free-riding:</strong> Some peers may consume without contributing</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>P2P networks are decentralized with no central authority</li>
        <li>Each peer acts as both client and server</li>
        <li>Highly scalable and fault-tolerant</li>
        <li>Used in file sharing, blockchain, and VoIP applications</li>
        <li>Security and management are primary challenges</li>
      </ul>
    </div>
  </div>
);

export default PeerToPeer;
