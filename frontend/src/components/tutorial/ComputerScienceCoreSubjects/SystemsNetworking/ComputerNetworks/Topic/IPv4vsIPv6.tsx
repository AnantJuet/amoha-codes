import React from 'react';

const IPv4vsIPv6: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IPv4 vs IPv6 Comparison
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      IPv4 and IPv6 are two versions of the Internet Protocol that define how devices communicate
      over networks. While IPv4 has been the foundation of the internet for decades, IPv6 was
      developed to address its limitations, particularly address exhaustion.
    </p>

    <h2 className="text-3xl font-bold mt-8">Comprehensive Comparison</h2>
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
            <td className="p-3 border">32 bits (4 bytes)</td>
            <td className="p-3 border">128 bits (16 bytes)</td>
          </tr>
          <tr>
            <td className="p-3 border">Address Count</td>
            <td className="p-3 border">~4.3 billion</td>
            <td className="p-3 border">~3.4 x 10^38</td>
          </tr>
          <tr>
            <td className="p-3 border">Notation</td>
            <td className="p-3 border">192.168.1.1 (decimal)</td>
            <td className="p-3 border">2001:db8::1 (hexadecimal)</td>
          </tr>
          <tr>
            <td className="p-3 border">Header Size</td>
            <td className="p-3 border">20-60 bytes (variable)</td>
            <td className="p-3 border">40 bytes (fixed)</td>
          </tr>
          <tr>
            <td className="p-3 border">Header Fields</td>
            <td className="p-3 border">12+ fields</td>
            <td className="p-3 border">8 fields</td>
          </tr>
          <tr>
            <td className="p-3 border">Checksum</td>
            <td className="p-3 border">Header checksum</td>
            <td className="p-3 border">No checksum</td>
          </tr>
          <tr>
            <td className="p-3 border">Fragmentation</td>
            <td className="p-3 border">Routers and sender</td>
            <td className="p-3 border">Sender only</td>
          </tr>
          <tr>
            <td className="p-3 border">Broadcast</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No (multicast instead)</td>
          </tr>
          <tr>
            <td className="p-3 border">IPsec</td>
            <td className="p-3 border">Optional</td>
            <td className="p-3 border">Built-in (mandatory)</td>
          </tr>
          <tr>
            <td className="p-3 border">Configuration</td>
            <td className="p-3 border">Manual or DHCP</td>
            <td className="p-3 border">SLAAC or DHCPv6</td>
          </tr>
          <tr>
            <td className="p-3 border">ARP</td>
            <td className="p-3 border">Uses ARP</td>
            <td className="p-3 border">Uses NDP (ICMPv6)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    IPv4 Address:
    192.168.1.1
    - Dotted decimal notation
    - 4 octets (0-255 each)
    - Easy to remember

    IPv6 Address:
    2001:0db8:85a3:0000:0000:8a2e:0370:7334
    - Hexadecimal with colons
    - 8 groups of 4 hex digits
    - Can be compressed: 2001:db8:85a3::8a2e:370:7334

    Comparison:
    IPv4: 11000000.10101000.00000001.00000001 (binary)
    IPv6: Much longer, shown in hex for readability
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Header Comparison</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">IPv4 Header Fields</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Version (4 bits)</li>
          <li>IHL (4 bits)</li>
          <li>Type of Service (8 bits)</li>
          <li>Total Length (16 bits)</li>
          <li>Identification (16 bits)</li>
          <li>Flags (3 bits)</li>
          <li>Fragment Offset (13 bits)</li>
          <li>TTL (8 bits)</li>
          <li>Protocol (8 bits)</li>
          <li>Header Checksum (16 bits)</li>
          <li>Source/Dest (32 bits each)</li>
          <li>Options (variable)</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">IPv6 Header Fields</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Version (4 bits)</li>
          <li>Traffic Class (8 bits)</li>
          <li>Flow Label (20 bits)</li>
          <li>Payload Length (16 bits)</li>
          <li>Next Header (8 bits)</li>
          <li>Hop Limit (8 bits)</li>
          <li>Source Address (128 bits)</li>
          <li>Destination Address (128 bits)</li>
          <li className="text-gray-500">No checksum</li>
          <li className="text-gray-500">No fragmentation fields</li>
          <li className="text-gray-500">Options via extensions</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Improvements in IPv6</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Improvement</th>
            <th className="p-3 border">Benefit</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Larger Address Space</td>
            <td className="p-3 border">No more address exhaustion</td>
          </tr>
          <tr>
            <td className="p-3 border">No NAT Required</td>
            <td className="p-3 border">True end-to-end connectivity</td>
          </tr>
          <tr>
            <td className="p-3 border">Simplified Header</td>
            <td className="p-3 border">Faster router processing</td>
          </tr>
          <tr>
            <td className="p-3 border">Auto-Configuration</td>
            <td className="p-3 border">Plug-and-play networking</td>
          </tr>
          <tr>
            <td className="p-3 border">Built-in Security</td>
            <td className="p-3 border">IPsec mandatory support</td>
          </tr>
          <tr>
            <td className="p-3 border">Better Multicast</td>
            <td className="p-3 border">Efficient one-to-many delivery</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transition Mechanisms</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">IPv4 to IPv6 Transition</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Dual Stack:</strong> Run both IPv4 and IPv6 simultaneously</li>
        <li><strong>Tunneling:</strong> Encapsulate IPv6 in IPv4 packets (6to4, Teredo)</li>
        <li><strong>Translation:</strong> NAT64/DNS64 for IPv6-only to IPv4 communication</li>
        <li><strong>ISATAP:</strong> IPv6 over IPv4 intranet</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>IPv6 solves IPv4 address exhaustion with 128-bit addresses</li>
        <li>IPv6 has simpler, fixed 40-byte header vs variable IPv4 header</li>
        <li>No broadcast in IPv6; uses multicast for similar functions</li>
        <li>IPv6 removes header checksum for efficiency</li>
        <li>Fragmentation only at source in IPv6, not by routers</li>
        <li>Transition uses dual-stack, tunneling, or translation</li>
      </ul>
    </div>
  </div>
);

export default IPv4vsIPv6;
