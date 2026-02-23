import React from 'react';

const NetworkLayerFunctions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Layer Functions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Network Layer (Layer 3) is responsible for delivering packets from the source host to the
      destination host across multiple networks. It provides logical addressing, routing, and
      forwarding capabilities that enable internetworking between different networks.
    </p>

    <h2 className="text-3xl font-bold mt-8">Position in OSI Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    OSI Model - Network Layer:

    +------------------------+
    |   Application Layer    |   Layer 7
    +------------------------+
    |   Presentation Layer   |   Layer 6
    +------------------------+
    |   Session Layer        |   Layer 5
    +------------------------+
    |   Transport Layer      |   Layer 4
    +------------------------+
    |   NETWORK LAYER        |   Layer 3  <-- THIS LAYER
    +------------------------+
    |   Data Link Layer      |   Layer 2
    +------------------------+
    |   Physical Layer       |   Layer 1
    +------------------------+
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Functions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Protocol/Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Logical Addressing</td>
            <td className="p-3 border">Assigns IP addresses to identify hosts</td>
            <td className="p-3 border">IPv4, IPv6</td>
          </tr>
          <tr>
            <td className="p-3 border">Routing</td>
            <td className="p-3 border">Determines best path for packets</td>
            <td className="p-3 border">RIP, OSPF, BGP</td>
          </tr>
          <tr>
            <td className="p-3 border">Forwarding</td>
            <td className="p-3 border">Moves packets to next hop</td>
            <td className="p-3 border">Router forwarding table</td>
          </tr>
          <tr>
            <td className="p-3 border">Fragmentation</td>
            <td className="p-3 border">Breaks packets to fit MTU</td>
            <td className="p-3 border">IP fragmentation</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Handling</td>
            <td className="p-3 border">Reports errors and diagnostics</td>
            <td className="p-3 border">ICMP</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Logical Addressing</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Logical vs Physical Addressing:

    Physical (MAC) Address:        Logical (IP) Address:
    +-------------------+         +-------------------+
    | 00:1A:2B:3C:4D:5E |         | 192.168.1.100     |
    +-------------------+         +-------------------+
    - Layer 2 (Data Link)         - Layer 3 (Network)
    - Hardware-based              - Software-assigned
    - Local scope                 - Global scope
    - Flat structure              - Hierarchical
    - Burned into NIC             - Configurable

    IP Address enables:
    - Identification of hosts across networks
    - Hierarchical addressing (network + host)
    - Routing decisions based on network portion
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Routing vs Forwarding</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Routing (Control Plane)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Building routing tables</li>
          <li>Running routing protocols</li>
          <li>Computing best paths</li>
          <li>Exchanging routing information</li>
          <li>Slower, periodic updates</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Forwarding (Data Plane)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Moving packets hop-by-hop</li>
          <li>Looking up forwarding table</li>
          <li>Switching to output port</li>
          <li>Per-packet operation</li>
          <li>Fast, hardware-based</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Packet Fragmentation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Fragmentation Example:

    Original Packet: 4000 bytes
    MTU of next network: 1500 bytes

    +------------------+
    |  4000 byte       |
    |  packet          |
    +------------------+
           |
           v  Fragmentation
    +--------+ +--------+ +--------+
    | Frag 1 | | Frag 2 | | Frag 3 |
    | 1500B  | | 1500B  | | 1000B  |
    | Offset | | Offset | | Offset |
    |   0    | |  1480  | |  2960  |
    +--------+ +--------+ +--------+

    - Each fragment has same ID
    - Offset indicates position
    - MF flag set on all but last
    - Reassembly at destination
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Network Layer Protocols</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">IP (IPv4/IPv6)</td>
            <td className="p-3 border">Addressing and routing</td>
          </tr>
          <tr>
            <td className="p-3 border">ICMP</td>
            <td className="p-3 border">Error reporting and diagnostics</td>
          </tr>
          <tr>
            <td className="p-3 border">ARP</td>
            <td className="p-3 border">IP to MAC address resolution</td>
          </tr>
          <tr>
            <td className="p-3 border">RARP</td>
            <td className="p-3 border">MAC to IP address resolution</td>
          </tr>
          <tr>
            <td className="p-3 border">IGMP</td>
            <td className="p-3 border">Multicast group management</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Network Layer provides logical addressing using IP addresses</li>
        <li>Routing determines paths; forwarding moves packets</li>
        <li>Fragmentation allows packets to traverse networks with smaller MTUs</li>
        <li>Key protocols: IP, ICMP, ARP, RARP, IGMP</li>
        <li>Enables end-to-end delivery across multiple networks</li>
        <li>Routers are the primary network layer devices</li>
      </ul>
    </div>
  </div>
);

export default NetworkLayerFunctions;
