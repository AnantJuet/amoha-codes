import React from 'react';

const IPv6Header: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IPv6 Header Format
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The IPv6 header is simplified compared to IPv4, with a fixed size of 40 bytes and fewer
      fields. Optional functionality is handled through extension headers, allowing for more
      efficient processing by routers while maintaining flexibility.
    </p>

    <h2 className="text-3xl font-bold mt-8">IPv6 Header Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    IPv6 Header (40 bytes fixed):

     0                   1                   2                   3
     0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |Version| Traffic Class |           Flow Label                  |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |         Payload Length        |  Next Header  |   Hop Limit   |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                                                               |
    +                                                               +
    |                                                               |
    +                         Source Address                        +
    |                                                               |
    +                                                               +
    |                                                               |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                                                               |
    +                                                               +
    |                                                               |
    +                      Destination Address                      +
    |                                                               |
    +                                                               +
    |                                                               |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Header Fields</h2>
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
            <td className="p-3 border">IP version (always 6)</td>
          </tr>
          <tr>
            <td className="p-3 border">Traffic Class</td>
            <td className="p-3 border">8 bits</td>
            <td className="p-3 border">Priority/QoS (like IPv4 ToS/DSCP)</td>
          </tr>
          <tr>
            <td className="p-3 border">Flow Label</td>
            <td className="p-3 border">20 bits</td>
            <td className="p-3 border">Identifies packet flow for QoS</td>
          </tr>
          <tr>
            <td className="p-3 border">Payload Length</td>
            <td className="p-3 border">16 bits</td>
            <td className="p-3 border">Data size (excludes header)</td>
          </tr>
          <tr>
            <td className="p-3 border">Next Header</td>
            <td className="p-3 border">8 bits</td>
            <td className="p-3 border">Type of next header/protocol</td>
          </tr>
          <tr>
            <td className="p-3 border">Hop Limit</td>
            <td className="p-3 border">8 bits</td>
            <td className="p-3 border">Like TTL, decremented each hop</td>
          </tr>
          <tr>
            <td className="p-3 border">Source Address</td>
            <td className="p-3 border">128 bits</td>
            <td className="p-3 border">Sender's IPv6 address</td>
          </tr>
          <tr>
            <td className="p-3 border">Destination Address</td>
            <td className="p-3 border">128 bits</td>
            <td className="p-3 border">Receiver's IPv6 address</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Extension Headers</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Extension Header Chain:

    +------------+     +------------+     +------------+     +--------+
    | IPv6       | --> | Hop-by-Hop | --> | Routing    | --> | TCP    |
    | Header     |     | Options    |     | Header     |     | Header |
    | Next=0     |     | Next=43    |     | Next=6     |     | + Data |
    +------------+     +------------+     +------------+     +--------+

    Extension headers are processed in order:
    1. Hop-by-Hop Options (0) - Every router examines
    2. Destination Options (60) - First destination
    3. Routing Header (43) - Source routing
    4. Fragment Header (44) - Fragmentation info
    5. Authentication (51) - IPsec AH
    6. ESP (50) - IPsec encryption
    7. Destination Options (60) - Final destination
    8. Upper Layer - TCP (6), UDP (17), ICMPv6 (58)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Next Header Values</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Value</th>
            <th className="p-3 border">Header Type</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Hop-by-Hop</td>
            <td className="p-3 border">Options for every hop</td>
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
            <td className="p-3 border">43</td>
            <td className="p-3 border">Routing</td>
            <td className="p-3 border">Source routing</td>
          </tr>
          <tr>
            <td className="p-3 border">44</td>
            <td className="p-3 border">Fragment</td>
            <td className="p-3 border">Fragmentation info</td>
          </tr>
          <tr>
            <td className="p-3 border">58</td>
            <td className="p-3 border">ICMPv6</td>
            <td className="p-3 border">Control messages</td>
          </tr>
          <tr>
            <td className="p-3 border">59</td>
            <td className="p-3 border">No Next Header</td>
            <td className="p-3 border">Nothing follows</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">IPv6 vs IPv4 Header Comparison</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Removed in IPv6</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Header Length (fixed at 40B)</li>
          <li>Identification, Flags, Offset</li>
          <li>Header Checksum</li>
          <li>Options (moved to extensions)</li>
          <li>Padding</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">New in IPv6</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Flow Label (20 bits)</li>
          <li>Extension headers</li>
          <li>Larger addresses (128-bit)</li>
          <li>Next Header (replaces Protocol)</li>
          <li>Hop Limit (replaces TTL)</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>IPv6 header is fixed at 40 bytes (simpler than IPv4)</li>
        <li>Only 8 fields vs 12+ in IPv4</li>
        <li>No checksum - relies on upper layers</li>
        <li>Extension headers provide optional functionality</li>
        <li>Flow Label enables QoS without deep packet inspection</li>
        <li>Hop Limit replaces TTL with same function</li>
      </ul>
    </div>
  </div>
);

export default IPv6Header;
