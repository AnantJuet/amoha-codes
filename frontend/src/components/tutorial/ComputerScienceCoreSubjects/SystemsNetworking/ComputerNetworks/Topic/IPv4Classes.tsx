import React from 'react';

const IPv4Classes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IPv4 Address Classes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      IPv4 addresses were originally divided into five classes (A, B, C, D, E) based on the
      leading bits of the address. This classful addressing scheme determined the network and
      host portions of each address, though it has largely been replaced by CIDR for more
      efficient address allocation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Class Identification</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Class Identification by First Octet:

    Class A: 0xxxxxxx  (0-127)    First bit = 0
    Class B: 10xxxxxx  (128-191)  First 2 bits = 10
    Class C: 110xxxxx  (192-223)  First 3 bits = 110
    Class D: 1110xxxx  (224-239)  First 4 bits = 1110
    Class E: 1111xxxx  (240-255)  First 4 bits = 1111

    Quick Rule:
    0-126   = Class A (127 is loopback)
    128-191 = Class B
    192-223 = Class C
    224-239 = Class D (Multicast)
    240-255 = Class E (Reserved)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Class Details</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Class</th>
            <th className="p-3 border">Range</th>
            <th className="p-3 border">Default Mask</th>
            <th className="p-3 border">Networks</th>
            <th className="p-3 border">Hosts/Network</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">A</td>
            <td className="p-3 border">1.0.0.0 - 126.255.255.255</td>
            <td className="p-3 border">255.0.0.0 (/8)</td>
            <td className="p-3 border">126</td>
            <td className="p-3 border">16,777,214</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">B</td>
            <td className="p-3 border">128.0.0.0 - 191.255.255.255</td>
            <td className="p-3 border">255.255.0.0 (/16)</td>
            <td className="p-3 border">16,384</td>
            <td className="p-3 border">65,534</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">C</td>
            <td className="p-3 border">192.0.0.0 - 223.255.255.255</td>
            <td className="p-3 border">255.255.255.0 (/24)</td>
            <td className="p-3 border">2,097,152</td>
            <td className="p-3 border">254</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">D</td>
            <td className="p-3 border">224.0.0.0 - 239.255.255.255</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border" colSpan={2}>Multicast</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">E</td>
            <td className="p-3 border">240.0.0.0 - 255.255.255.255</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border" colSpan={2}>Reserved/Experimental</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Network and Host Portions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Class A:  N.H.H.H    (8 network bits, 24 host bits)
              |<-->|<-------->|
              Net     Host

    Class B:  N.N.H.H    (16 network bits, 16 host bits)
              |<------>|<---->|
                Net      Host

    Class C:  N.N.N.H    (24 network bits, 8 host bits)
              |<----------->|<>|
                  Net       Host

    Example Class A: 10.1.2.3
    - Network: 10.0.0.0
    - Host: 0.1.2.3
    - Usable hosts: 2^24 - 2 = 16,777,214

    Example Class C: 192.168.1.100
    - Network: 192.168.1.0
    - Host: 0.0.0.100
    - Usable hosts: 2^8 - 2 = 254
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Class Usage</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Class A</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Large organizations</li>
          <li>ISPs</li>
          <li>Government agencies</li>
          <li>Very few networks</li>
          <li>Millions of hosts each</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Class B</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Medium organizations</li>
          <li>Universities</li>
          <li>Large companies</li>
          <li>Moderate networks</li>
          <li>Thousands of hosts</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Class C</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Small organizations</li>
          <li>Small businesses</li>
          <li>Home networks</li>
          <li>Many networks</li>
          <li>Up to 254 hosts</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Special Addresses in Each Class</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Network Address:</strong> All host bits = 0 (e.g., 192.168.1.0)</li>
        <li><strong>Broadcast Address:</strong> All host bits = 1 (e.g., 192.168.1.255)</li>
        <li><strong>Usable Hosts:</strong> 2^n - 2 (subtract network and broadcast)</li>
        <li><strong>127.x.x.x:</strong> Reserved for loopback (not usable Class A)</li>
        <li><strong>0.x.x.x:</strong> Reserved for this network (not usable)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Problems with Classful Addressing</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Address Wastage:</strong> Class A gives 16 million hosts, rarely needed</li>
      <li><strong>Inflexibility:</strong> Fixed boundaries between network and host</li>
      <li><strong>Limited Classes:</strong> Only three sizes available</li>
      <li><strong>Routing Table Growth:</strong> Many small Class C networks</li>
      <li><strong>Solution:</strong> CIDR (Classless Inter-Domain Routing)</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Class A: 1-126, /8 mask, 16M hosts per network</li>
        <li>Class B: 128-191, /16 mask, 65K hosts per network</li>
        <li>Class C: 192-223, /24 mask, 254 hosts per network</li>
        <li>Class D: Multicast, Class E: Reserved</li>
        <li>Usable hosts = 2^(host bits) - 2</li>
        <li>Classful addressing replaced by CIDR for efficiency</li>
      </ul>
    </div>
  </div>
);

export default IPv4Classes;
