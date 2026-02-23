import React from 'react';

const NetworkAccessLayer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Access Layer (Link Layer)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Network Access Layer, also known as the Link Layer or Network Interface Layer, is the lowest
      layer of the TCP/IP model. It combines the functions of the Physical and Data Link layers of the
      OSI model and is responsible for the physical transmission of data over the network medium.
    </p>

    <h2 className="text-3xl font-bold mt-8">Position in TCP/IP Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    TCP/IP Model Layers:
    +------------------------+
    |    Application Layer   |  <- User applications
    +------------------------+
    |    Transport Layer     |  <- TCP, UDP
    +------------------------+
    |    Internet Layer      |  <- IP, ICMP, ARP
    +------------------------+
    |  Network Access Layer  |  <- THIS LAYER
    +------------------------+       (Ethernet, Wi-Fi, etc.)
           |
           v
    [Physical Network Medium]
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Functions of Network Access Layer</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Frame Encapsulation:</strong> Encapsulates IP packets into frames for transmission</li>
      <li><strong>Physical Addressing:</strong> Uses MAC addresses to identify devices on the local network</li>
      <li><strong>Media Access Control:</strong> Controls how devices access the physical medium</li>
      <li><strong>Error Detection:</strong> Detects errors in transmitted frames using checksums</li>
      <li><strong>Signal Encoding:</strong> Converts data into electrical or optical signals</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Protocols and Technologies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technology</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Ethernet (IEEE 802.3)</td>
            <td className="p-3 border">Wired LAN</td>
            <td className="p-3 border">Most common wired network technology</td>
          </tr>
          <tr>
            <td className="p-3 border">Wi-Fi (IEEE 802.11)</td>
            <td className="p-3 border">Wireless LAN</td>
            <td className="p-3 border">Wireless local area network</td>
          </tr>
          <tr>
            <td className="p-3 border">PPP</td>
            <td className="p-3 border">Point-to-Point</td>
            <td className="p-3 border">Serial link protocol for dial-up</td>
          </tr>
          <tr>
            <td className="p-3 border">Token Ring</td>
            <td className="p-3 border">LAN</td>
            <td className="p-3 border">Token-passing ring topology (legacy)</td>
          </tr>
          <tr>
            <td className="p-3 border">FDDI</td>
            <td className="p-3 border">Fiber</td>
            <td className="p-3 border">Fiber distributed data interface</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ethernet Frame Format</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Ethernet Frame Structure:
    +----------+----------+------+------+------+---------+-----+
    | Preamble | SFD      | Dest | Src  | Type | Payload | FCS |
    |  7 bytes | 1 byte   | MAC  | MAC  | 2B   | 46-1500 | 4B  |
    +----------+----------+------+------+------+---------+-----+
                          |  6B  |  6B  |

    Preamble: Synchronization pattern (10101010...)
    SFD: Start Frame Delimiter (10101011)
    Dest MAC: Destination MAC address
    Src MAC: Source MAC address
    Type/Length: Protocol type or frame length
    Payload: Data from upper layers (46-1500 bytes)
    FCS: Frame Check Sequence (CRC-32)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">MAC Addressing</h2>
    <p className="leading-relaxed">
      Media Access Control (MAC) addresses are 48-bit hardware addresses that uniquely identify
      network interface cards. They are assigned by manufacturers and are typically represented
      in hexadecimal notation.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <h3 className="font-bold mb-2">MAC Address Format</h3>
      <div className="font-mono text-lg text-gray-900">AA:BB:CC:DD:EE:FF</div>
      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
        <li>First 3 bytes (AA:BB:CC): OUI - Organizationally Unique Identifier (manufacturer)</li>
        <li>Last 3 bytes (DD:EE:FF): NIC-specific identifier</li>
        <li>Broadcast address: FF:FF:FF:FF:FF:FF</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Media Access Control Methods</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">CSMA/CD (Ethernet)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Carrier Sense Multiple Access with Collision Detection</li>
          <li>Listen before transmitting</li>
          <li>Detect collisions and retransmit</li>
          <li>Used in wired Ethernet networks</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">CSMA/CA (Wi-Fi)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Carrier Sense Multiple Access with Collision Avoidance</li>
          <li>Avoid collisions before they happen</li>
          <li>Uses RTS/CTS mechanism</li>
          <li>Used in wireless networks</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relationship with Internet Layer</h2>
    <p className="leading-relaxed">
      The Network Access Layer works closely with the Internet Layer through the Address Resolution
      Protocol (ARP), which maps IP addresses to MAC addresses. When a device needs to send data
      to another device on the local network, it uses ARP to find the destination MAC address.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    ARP Operation:

    1. Device A wants to send to IP 192.168.1.5
    2. Device A broadcasts: "Who has 192.168.1.5?"
    3. Device B (192.168.1.5) replies: "I am 192.168.1.5, my MAC is AA:BB:CC:DD:EE:FF"
    4. Device A caches the mapping and sends the frame
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Network Access Layer is the lowest layer of TCP/IP model</li>
        <li>Combines Physical and Data Link layer functions from OSI</li>
        <li>Handles frame encapsulation and physical addressing (MAC)</li>
        <li>Includes technologies like Ethernet, Wi-Fi, and PPP</li>
        <li>Uses CSMA/CD for wired and CSMA/CA for wireless media access</li>
        <li>Works with ARP to map IP addresses to MAC addresses</li>
      </ul>
    </div>
  </div>
);

export default NetworkAccessLayer;
