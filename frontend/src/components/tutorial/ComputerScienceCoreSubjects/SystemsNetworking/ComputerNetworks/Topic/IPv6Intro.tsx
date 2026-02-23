import React from 'react';

const IPv6Intro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IPv6 Introduction
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      IPv6 (Internet Protocol version 6) is the most recent version of the Internet Protocol,
      designed to address the exhaustion of IPv4 addresses. With 128-bit addresses, IPv6 provides
      a virtually unlimited address space along with improved features for security, mobility,
      and auto-configuration.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why IPv6?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Address Exhaustion:</strong> IPv4 has only 4.3 billion addresses</li>
      <li><strong>Internet Growth:</strong> More devices than available IPv4 addresses</li>
      <li><strong>NAT Limitations:</strong> NAT breaks end-to-end connectivity</li>
      <li><strong>Security:</strong> IPsec is mandatory in IPv6</li>
      <li><strong>Efficiency:</strong> Simplified header, no checksum at IP layer</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">IPv6 vs IPv4 Comparison</h2>
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
            <td className="p-3 border">Address Count</td>
            <td className="p-3 border">4.3 billion</td>
            <td className="p-3 border">3.4 x 10^38</td>
          </tr>
          <tr>
            <td className="p-3 border">Notation</td>
            <td className="p-3 border">Dotted decimal</td>
            <td className="p-3 border">Hexadecimal colon</td>
          </tr>
          <tr>
            <td className="p-3 border">Header Size</td>
            <td className="p-3 border">20-60 bytes</td>
            <td className="p-3 border">40 bytes (fixed)</td>
          </tr>
          <tr>
            <td className="p-3 border">Checksum</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Fragmentation</td>
            <td className="p-3 border">Routers and hosts</td>
            <td className="p-3 border">Source only</td>
          </tr>
          <tr>
            <td className="p-3 border">IPsec</td>
            <td className="p-3 border">Optional</td>
            <td className="p-3 border">Mandatory support</td>
          </tr>
          <tr>
            <td className="p-3 border">Broadcast</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No (multicast instead)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">IPv6 Address Format</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    IPv6 Address Format:

    Full notation:
    2001:0db8:85a3:0000:0000:8a2e:0370:7334

    Structure:
    - 128 bits total
    - 8 groups of 16 bits (4 hex digits each)
    - Separated by colons

    Simplification rules:
    1. Leading zeros can be omitted
       0db8 -> db8
       0000 -> 0

    2. One group of consecutive zeros can be ::
       2001:0db8:0000:0000:0000:0000:0000:0001
       becomes
       2001:db8::1

    Examples:
    Loopback: ::1 (0000:0000:0000:0000:0000:0000:0000:0001)
    Unspecified: :: (all zeros)
    Link-local: fe80::1
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">IPv6 Features</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Simplified Header</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Fixed 40-byte header</li>
          <li>Fewer fields (8 vs 12+)</li>
          <li>No header checksum</li>
          <li>Extension headers for options</li>
          <li>Faster processing</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Auto-Configuration</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>SLAAC (Stateless)</li>
          <li>DHCPv6 (Stateful)</li>
          <li>No manual configuration needed</li>
          <li>Neighbor Discovery Protocol</li>
          <li>Plug and play networking</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">IPv6 Address Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Prefix</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Global Unicast</td>
            <td className="p-3 border">2000::/3</td>
            <td className="p-3 border">Public, routable addresses</td>
          </tr>
          <tr>
            <td className="p-3 border">Link-Local</td>
            <td className="p-3 border">fe80::/10</td>
            <td className="p-3 border">Same link only, auto-generated</td>
          </tr>
          <tr>
            <td className="p-3 border">Unique Local</td>
            <td className="p-3 border">fc00::/7</td>
            <td className="p-3 border">Private addresses (like RFC1918)</td>
          </tr>
          <tr>
            <td className="p-3 border">Multicast</td>
            <td className="p-3 border">ff00::/8</td>
            <td className="p-3 border">One-to-many delivery</td>
          </tr>
          <tr>
            <td className="p-3 border">Loopback</td>
            <td className="p-3 border">::1/128</td>
            <td className="p-3 border">Localhost</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>IPv6 uses 128-bit addresses (vs 32-bit IPv4)</li>
        <li>Written in hexadecimal with colons (e.g., 2001:db8::1)</li>
        <li>No broadcast; uses multicast instead</li>
        <li>Simpler 40-byte fixed header</li>
        <li>Built-in support for IPsec and auto-configuration</li>
        <li>Fragmentation only at source, not by routers</li>
      </ul>
    </div>
  </div>
);

export default IPv6Intro;
