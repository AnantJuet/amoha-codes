import React from 'react';

const InternetLayer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Internet Layer
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Internet Layer is the second layer of the TCP/IP model, responsible for routing data packets
      across different networks to ensure they reach their correct destination. It corresponds to the
      Network Layer (Layer 3) of the OSI model and handles logical addressing, routing, and packet forwarding.
    </p>

    <h2 className="text-3xl font-bold mt-8">Position in TCP/IP Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    TCP/IP Model:
    +------------------------+
    |    Application Layer   |
    +------------------------+
    |    Transport Layer     |  <- Receives segments
    +------------------------+
    |    Internet Layer      |  <- THIS LAYER (Packets)
    +------------------------+
    |  Network Access Layer  |  <- Sends frames
    +------------------------+

    Internet Layer handles:
    - IP Addressing
    - Routing
    - Packet forwarding
    - Fragmentation
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Functions</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">IP Addressing</h3>
        <p className="text-sm">Assigns unique IP addresses to devices for identification and communication across networks.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Routing</h3>
        <p className="text-sm">Determines the optimal path for packets to travel from source to destination across networks.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Packetization</h3>
        <p className="text-sm">Encapsulates transport layer segments into IP packets with source and destination addresses.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Fragmentation</h3>
        <p className="text-sm">Splits large packets into smaller fragments to fit network MTU and reassembles at destination.</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Internet Layer Protocols</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Full Name</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">IP</td>
            <td className="p-3 border">Internet Protocol</td>
            <td className="p-3 border">Addressing and routing packets</td>
          </tr>
          <tr>
            <td className="p-3 border">ICMP</td>
            <td className="p-3 border">Internet Control Message Protocol</td>
            <td className="p-3 border">Error reporting and diagnostics (ping)</td>
          </tr>
          <tr>
            <td className="p-3 border">ARP</td>
            <td className="p-3 border">Address Resolution Protocol</td>
            <td className="p-3 border">Maps IP addresses to MAC addresses</td>
          </tr>
          <tr>
            <td className="p-3 border">RARP</td>
            <td className="p-3 border">Reverse ARP</td>
            <td className="p-3 border">Maps MAC addresses to IP addresses</td>
          </tr>
          <tr>
            <td className="p-3 border">IGMP</td>
            <td className="p-3 border">Internet Group Management Protocol</td>
            <td className="p-3 border">Manages multicast group membership</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">IP Packet Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    IPv4 Header (20-60 bytes):
    +-------+-------+---------------+-------------------------------+
    |Version| IHL   | Type of Serv  |        Total Length           |
    +-------+-------+---------------+-------------------------------+
    |      Identification           |Flags|    Fragment Offset      |
    +-------------------------------+-----+-------------------------+
    |   TTL |  Protocol             |     Header Checksum           |
    +-------+-----------------------+-------------------------------+
    |                    Source IP Address                          |
    +---------------------------------------------------------------+
    |                  Destination IP Address                       |
    +---------------------------------------------------------------+
    |                    Options (if any)                           |
    +---------------------------------------------------------------+
    |                         Data                                  |
    +---------------------------------------------------------------+

    Key Fields:
    - Version: IP version (4 or 6)
    - TTL: Time to Live (hop count)
    - Protocol: Upper layer protocol (TCP=6, UDP=17)
    - Source/Dest IP: 32-bit addresses
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Routing Process</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Packet Reception:</strong> Router receives an IP packet on an interface</li>
      <li><strong>Destination Check:</strong> Examines the destination IP address in the header</li>
      <li><strong>Routing Table Lookup:</strong> Searches routing table for best matching route</li>
      <li><strong>TTL Decrement:</strong> Decreases Time to Live by 1 (discards if TTL=0)</li>
      <li><strong>Forwarding:</strong> Sends packet to next hop or delivers if destination is local</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">IPv4 vs IPv6</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">IPv4</th>
            <th className="p-3 border">IPv6</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Address Size</td>
            <td className="p-3 border">32 bits</td>
            <td className="p-3 border">128 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Address Format</td>
            <td className="p-3 border">Dotted decimal (192.168.1.1)</td>
            <td className="p-3 border">Hexadecimal (2001:db8::1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Address Space</td>
            <td className="p-3 border">~4.3 billion</td>
            <td className="p-3 border">~340 undecillion</td>
          </tr>
          <tr>
            <td className="p-3 border">Header Size</td>
            <td className="p-3 border">20-60 bytes (variable)</td>
            <td className="p-3 border">40 bytes (fixed)</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">Optional (IPSec)</td>
            <td className="p-3 border">Built-in (IPSec mandatory)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Internet Layer handles logical addressing and routing</li>
        <li>IP is the core protocol for packet delivery</li>
        <li>ICMP provides error reporting and diagnostics</li>
        <li>ARP maps IP addresses to MAC addresses</li>
        <li>Routers operate at the Internet Layer</li>
        <li>IPv6 addresses IPv4 address exhaustion with 128-bit addresses</li>
      </ul>
    </div>
  </div>
);

export default InternetLayer;
