import React from 'react';

const DataLinkFunctions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Link Layer Functions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Data Link Layer (Layer 2) is responsible for node-to-node delivery of data between
      directly connected devices. It takes packets from the Network Layer and encapsulates them
      into frames for transmission over the physical medium, providing reliable link-level communication.
    </p>

    <h2 className="text-3xl font-bold mt-8">Position in OSI Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    OSI Model:
    +------------------------+
    |    Application (7)     |
    +------------------------+
    |    Presentation (6)    |
    +------------------------+
    |    Session (5)         |
    +------------------------+
    |    Transport (4)       |
    +------------------------+
    |    Network (3)         |  <- Packets
    +------------------------+
    |    Data Link (2)       |  <- THIS LAYER (Frames)
    +------------------------+
    |    Physical (1)        |  <- Bits
    +------------------------+
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sub-layers of Data Link Layer</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">LLC (Logical Link Control)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Upper sub-layer (IEEE 802.2)</li>
          <li>Flow control</li>
          <li>Error control</li>
          <li>Multiplexing of protocols</li>
          <li>Interface with Network layer</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">MAC (Media Access Control)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Lower sub-layer</li>
          <li>Physical addressing (MAC address)</li>
          <li>Media access control (CSMA/CD, CSMA/CA)</li>
          <li>Frame delimiting</li>
          <li>Interface with Physical layer</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Functions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Framing</td>
            <td className="p-3 border">Encapsulates packets into frames with header and trailer</td>
          </tr>
          <tr>
            <td className="p-3 border">Physical Addressing</td>
            <td className="p-3 border">Adds MAC addresses to identify source and destination</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Detection</td>
            <td className="p-3 border">Detects errors using CRC, checksum, or parity</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Correction</td>
            <td className="p-3 border">Corrects errors using techniques like Hamming code</td>
          </tr>
          <tr>
            <td className="p-3 border">Flow Control</td>
            <td className="p-3 border">Prevents sender from overwhelming receiver</td>
          </tr>
          <tr>
            <td className="p-3 border">Access Control</td>
            <td className="p-3 border">Determines which device can use shared medium</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Frame Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Generic Frame Format:

    +-------+--------+--------+---------+-------+
    | Flag  | Header |  Data  | Trailer | Flag  |
    +-------+--------+--------+---------+-------+

    Header contains:
    - Destination MAC address
    - Source MAC address
    - Type/Length field

    Trailer contains:
    - Error detection code (FCS/CRC)

    Flags mark beginning and end of frame
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Services Provided</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Unacknowledged Connectionless:</strong> No connection setup, no acknowledgment (LAN)</li>
      <li><strong>Acknowledged Connectionless:</strong> No connection but frames are acknowledged (Wi-Fi)</li>
      <li><strong>Acknowledged Connection-oriented:</strong> Connection setup, acknowledgments, flow control</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Data Link Layer Protocols</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">LAN Protocols</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Ethernet (IEEE 802.3)</li>
          <li>Wi-Fi (IEEE 802.11)</li>
          <li>Token Ring (IEEE 802.5)</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">WAN Protocols</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>PPP (Point-to-Point Protocol)</li>
          <li>HDLC (High-Level Data Link Control)</li>
          <li>Frame Relay</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Data Link Layer provides node-to-node delivery</li>
        <li>Divided into LLC (upper) and MAC (lower) sub-layers</li>
        <li>Handles framing, addressing, error detection/correction</li>
        <li>Uses MAC addresses for physical addressing</li>
        <li>Provides flow control and media access control</li>
        <li>Devices: Switches, Bridges operate at this layer</li>
      </ul>
    </div>
  </div>
);

export default DataLinkFunctions;
