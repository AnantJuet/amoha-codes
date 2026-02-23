import React from 'react';

const IPv4Header: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IPv4 Header Format
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The IPv4 header contains essential information for routing packets across networks.
      It includes fields for addressing, fragmentation, time-to-live, and protocol identification.
      The minimum header size is 20 bytes, which can extend to 60 bytes with options.
    </p>

    <h2 className="text-3xl font-bold mt-8">IPv4 Header Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    IPv4 Header Format (20-60 bytes):

     0                   1                   2                   3
     0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |Version|  IHL  |Type of Service|          Total Length         |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |         Identification        |Flags|      Fragment Offset    |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |  Time to Live |    Protocol   |         Header Checksum       |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                       Source IP Address                       |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                    Destination IP Address                     |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                    Options (if IHL > 5)                       |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Header Fields Explained</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Field</th>
            <th className="p-3 border">Size</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Version</td>
            <td className="p-3 border">4 bits</td>
            <td className="p-3 border">IP version (4 for IPv4)</td>
          </tr>
          <tr>
            <td className="p-3 border">IHL</td>
            <td className="p-3 border">4 bits</td>
            <td className="p-3 border">Header length in 32-bit words (5-15)</td>
          </tr>
          <tr>
            <td className="p-3 border">ToS/DSCP</td>
            <td className="p-3 border">8 bits</td>
            <td className="p-3 border">Quality of service parameters</td>
          </tr>
          <tr>
            <td className="p-3 border">Total Length</td>
            <td className="p-3 border">16 bits</td>
            <td className="p-3 border">Total packet size in bytes (max 65,535)</td>
          </tr>
          <tr>
            <td className="p-3 border">Identification</td>
            <td className="p-3 border">16 bits</td>
            <td className="p-3 border">Unique ID for fragment reassembly</td>
          </tr>
          <tr>
            <td className="p-3 border">Flags</td>
            <td className="p-3 border">3 bits</td>
            <td className="p-3 border">Fragmentation control flags</td>
          </tr>
          <tr>
            <td className="p-3 border">Fragment Offset</td>
            <td className="p-3 border">13 bits</td>
            <td className="p-3 border">Position of fragment in original packet</td>
          </tr>
          <tr>
            <td className="p-3 border">TTL</td>
            <td className="p-3 border">8 bits</td>
            <td className="p-3 border">Maximum hops before discard (0-255)</td>
          </tr>
          <tr>
            <td className="p-3 border">Protocol</td>
            <td className="p-3 border">8 bits</td>
            <td className="p-3 border">Upper layer protocol (TCP=6, UDP=17)</td>
          </tr>
          <tr>
            <td className="p-3 border">Header Checksum</td>
            <td className="p-3 border">16 bits</td>
            <td className="p-3 border">Error detection for header only</td>
          </tr>
          <tr>
            <td className="p-3 border">Source IP</td>
            <td className="p-3 border">32 bits</td>
            <td className="p-3 border">Sender's IP address</td>
          </tr>
          <tr>
            <td className="p-3 border">Destination IP</td>
            <td className="p-3 border">32 bits</td>
            <td className="p-3 border">Receiver's IP address</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fragmentation Fields</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Flags Field (3 bits):
    +---+----+----+
    | 0 | DF | MF |
    +---+----+----+
      ^    ^    ^
      |    |    More Fragments (1 = more to come)
      |    Don't Fragment (1 = don't fragment)
      Reserved (always 0)

    Fragment Offset:
    - Position in original datagram
    - In 8-byte units
    - Allows fragments up to 65,535 bytes

    Example:
    Original: 4000 bytes, MTU: 1500 bytes

    Fragment 1: Offset = 0,    MF = 1, Size = 1480
    Fragment 2: Offset = 185,  MF = 1, Size = 1480
    Fragment 3: Offset = 370,  MF = 0, Size = 1040
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Protocol Numbers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Number</th>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">ICMP</td>
            <td className="p-3 border">Internet Control Message Protocol</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">Transmission Control Protocol</td>
          </tr>
          <tr>
            <td className="p-3 border">17</td>
            <td className="p-3 border">UDP</td>
            <td className="p-3 border">User Datagram Protocol</td>
          </tr>
          <tr>
            <td className="p-3 border">47</td>
            <td className="p-3 border">GRE</td>
            <td className="p-3 border">Generic Routing Encapsulation</td>
          </tr>
          <tr>
            <td className="p-3 border">89</td>
            <td className="p-3 border">OSPF</td>
            <td className="p-3 border">Open Shortest Path First</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">TTL (Time to Live)</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">TTL Purpose and Operation</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Prevents packets from looping forever</li>
        <li>Decremented by 1 at each router hop</li>
        <li>Packet discarded when TTL reaches 0</li>
        <li>ICMP Time Exceeded sent to source</li>
        <li>Default values: Windows=128, Linux=64, Cisco=255</li>
        <li>Used by traceroute to map network paths</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>IPv4 header: minimum 20 bytes, maximum 60 bytes</li>
        <li>IHL field indicates header length in 32-bit words</li>
        <li>TTL prevents infinite routing loops</li>
        <li>Protocol field identifies upper layer (TCP=6, UDP=17)</li>
        <li>Fragmentation uses ID, Flags, and Offset fields</li>
        <li>Header checksum verifies header integrity only</li>
      </ul>
    </div>
  </div>
);

export default IPv4Header;
