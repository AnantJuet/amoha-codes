import React from 'react';

const Ethernet: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Ethernet (IEEE 802.3)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Ethernet is the most widely used LAN technology, standardized as IEEE 802.3. It defines
      wiring and signaling standards for the physical layer, and data link layer protocols for
      addressing and media access. Ethernet supports speeds from 10 Mbps to 400 Gbps and beyond.
    </p>

    <h2 className="text-3xl font-bold mt-8">Ethernet Frame Format</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Ethernet II (DIX) Frame:

    +----------+--------+--------+------+----------+-----+
    | Preamble | Dest   | Source | Type |   Data   | FCS |
    | 8 bytes  | MAC    | MAC    | 2B   | 46-1500B | 4B  |
    +----------+--------+--------+------+----------+-----+
               | 6 bytes| 6 bytes|

    Preamble: 7 bytes of 10101010 + 1 byte SFD (10101011)
    Dest MAC: Destination MAC address
    Source MAC: Source MAC address
    Type/Length: Protocol type (Ethernet II) or length (802.3)
    Data: Payload from upper layers (46-1500 bytes)
    FCS: Frame Check Sequence (CRC-32)

    Minimum frame: 64 bytes (excluding preamble)
    Maximum frame: 1518 bytes (excluding preamble)
    Jumbo frames: Up to 9000 bytes
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">MAC Address</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">MAC Address Format</h3>
      <div className="font-mono text-lg text-gray-900">00:1A:2B:3C:4D:5E</div>
      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
        <li>48 bits (6 bytes)</li>
        <li>First 3 bytes: OUI (Organizationally Unique Identifier)</li>
        <li>Last 3 bytes: Network Interface Controller (NIC) specific</li>
        <li>Broadcast: FF:FF:FF:FF:FF:FF</li>
        <li>Multicast: First byte odd number (LSB = 1)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ethernet Standards Evolution</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Standard</th>
            <th className="p-3 border">Speed</th>
            <th className="p-3 border">Media</th>
            <th className="p-3 border">Max Distance</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">10BASE-T</td>
            <td className="p-3 border">10 Mbps</td>
            <td className="p-3 border">Cat3 UTP</td>
            <td className="p-3 border">100m</td>
          </tr>
          <tr>
            <td className="p-3 border">100BASE-TX</td>
            <td className="p-3 border">100 Mbps</td>
            <td className="p-3 border">Cat5 UTP</td>
            <td className="p-3 border">100m</td>
          </tr>
          <tr>
            <td className="p-3 border">1000BASE-T</td>
            <td className="p-3 border">1 Gbps</td>
            <td className="p-3 border">Cat5e/6 UTP</td>
            <td className="p-3 border">100m</td>
          </tr>
          <tr>
            <td className="p-3 border">10GBASE-T</td>
            <td className="p-3 border">10 Gbps</td>
            <td className="p-3 border">Cat6a/7</td>
            <td className="p-3 border">100m</td>
          </tr>
          <tr>
            <td className="p-3 border">10GBASE-SR</td>
            <td className="p-3 border">10 Gbps</td>
            <td className="p-3 border">MMF</td>
            <td className="p-3 border">300m</td>
          </tr>
          <tr>
            <td className="p-3 border">10GBASE-LR</td>
            <td className="p-3 border">10 Gbps</td>
            <td className="p-3 border">SMF</td>
            <td className="p-3 border">10km</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Half-Duplex vs Full-Duplex</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Half-Duplex</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>One direction at a time</li>
          <li>Uses CSMA/CD</li>
          <li>Collisions possible</li>
          <li>Hubs create shared medium</li>
          <li>Legacy, rarely used</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Full-Duplex</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Both directions simultaneously</li>
          <li>No CSMA/CD needed</li>
          <li>No collisions</li>
          <li>Switches provide point-to-point</li>
          <li>Modern standard</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ethernet Devices</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Device</th>
            <th className="p-3 border">Layer</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Repeater/Hub</td>
            <td className="p-3 border">Physical (1)</td>
            <td className="p-3 border">Regenerates signals, shared medium</td>
          </tr>
          <tr>
            <td className="p-3 border">Bridge</td>
            <td className="p-3 border">Data Link (2)</td>
            <td className="p-3 border">Filters by MAC, separates collision domains</td>
          </tr>
          <tr>
            <td className="p-3 border">Switch</td>
            <td className="p-3 border">Data Link (2)</td>
            <td className="p-3 border">Multi-port bridge, MAC table</td>
          </tr>
          <tr>
            <td className="p-3 border">Router</td>
            <td className="p-3 border">Network (3)</td>
            <td className="p-3 border">Routes by IP, separates broadcast domains</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Ethernet is IEEE 802.3, the dominant LAN technology</li>
        <li>Frame: Preamble + MAC addresses + Type + Data + FCS</li>
        <li>Min frame 64 bytes, max 1518 bytes (jumbo up to 9000)</li>
        <li>MAC address: 48-bit hardware address</li>
        <li>Modern Ethernet: Full-duplex, switched, no collisions</li>
        <li>Speeds: 10M, 100M, 1G, 10G, 25G, 40G, 100G, 400G</li>
      </ul>
    </div>
  </div>
);

export default Ethernet;
