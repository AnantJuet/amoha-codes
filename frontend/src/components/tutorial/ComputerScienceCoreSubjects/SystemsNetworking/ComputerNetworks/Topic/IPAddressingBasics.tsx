import React from 'react';

const IPAddressingBasics: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IP Addressing Basics
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An IP (Internet Protocol) address is a unique numerical identifier assigned to every device
      connected to a network that uses IP for communication. It serves two main purposes:
      host identification and location addressing, enabling routing of packets across the internet.
    </p>

    <h2 className="text-3xl font-bold mt-8">IPv4 Address Format</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    IPv4 Address Structure:

    Dotted Decimal Notation:     192.168.1.100

    Binary Representation:
    +----------+----------+----------+----------+
    | 11000000 | 10101000 | 00000001 | 01100100 |
    +----------+----------+----------+----------+
        192   .    168   .    1     .   100

    - 32 bits total (4 bytes)
    - Divided into 4 octets
    - Each octet: 0-255
    - Total addresses: 2^32 = 4.3 billion
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Network and Host Portions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    IP Address Components:

    192.168.1.100 with subnet mask 255.255.255.0

    IP Address:   11000000.10101000.00000001.01100100
    Subnet Mask:  11111111.11111111.11111111.00000000
                  |<-- Network ID -->|<-- Host ID -->|

    Network ID:   192.168.1.0    (Identifies the network)
    Host ID:      0.0.0.100      (Identifies the host)

    - Network portion: Identifies the network
    - Host portion: Identifies the device on that network
    - Subnet mask determines the boundary
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of IP Addresses</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Unicast</td>
            <td className="p-3 border">One-to-one communication</td>
            <td className="p-3 border">192.168.1.100</td>
          </tr>
          <tr>
            <td className="p-3 border">Broadcast</td>
            <td className="p-3 border">One-to-all in network</td>
            <td className="p-3 border">192.168.1.255</td>
          </tr>
          <tr>
            <td className="p-3 border">Multicast</td>
            <td className="p-3 border">One-to-many (group)</td>
            <td className="p-3 border">224.0.0.1</td>
          </tr>
          <tr>
            <td className="p-3 border">Loopback</td>
            <td className="p-3 border">Self-communication</td>
            <td className="p-3 border">127.0.0.1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Public vs Private Addresses</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Public Addresses</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Globally unique</li>
          <li>Routable on internet</li>
          <li>Assigned by ISPs</li>
          <li>Limited availability</li>
          <li>Requires registration</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Private Addresses</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Can be reused</li>
          <li>Not routable on internet</li>
          <li>Used within organizations</li>
          <li>Requires NAT for internet</li>
          <li>RFC 1918 defined</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Private Address Ranges</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Class</th>
            <th className="p-3 border">Range</th>
            <th className="p-3 border">CIDR</th>
            <th className="p-3 border">Addresses</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">A</td>
            <td className="p-3 border">10.0.0.0 - 10.255.255.255</td>
            <td className="p-3 border">10.0.0.0/8</td>
            <td className="p-3 border">16,777,216</td>
          </tr>
          <tr>
            <td className="p-3 border">B</td>
            <td className="p-3 border">172.16.0.0 - 172.31.255.255</td>
            <td className="p-3 border">172.16.0.0/12</td>
            <td className="p-3 border">1,048,576</td>
          </tr>
          <tr>
            <td className="p-3 border">C</td>
            <td className="p-3 border">192.168.0.0 - 192.168.255.255</td>
            <td className="p-3 border">192.168.0.0/16</td>
            <td className="p-3 border">65,536</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Special IP Addresses</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>0.0.0.0:</strong> Default route, this network</li>
        <li><strong>127.0.0.0/8:</strong> Loopback (localhost)</li>
        <li><strong>169.254.0.0/16:</strong> Link-local (APIPA)</li>
        <li><strong>224.0.0.0/4:</strong> Multicast addresses</li>
        <li><strong>255.255.255.255:</strong> Limited broadcast</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>IPv4 addresses are 32-bit numbers in dotted decimal notation</li>
        <li>Subnet mask separates network and host portions</li>
        <li>Public addresses are globally routable; private are not</li>
        <li>Private ranges: 10.x.x.x, 172.16-31.x.x, 192.168.x.x</li>
        <li>Address types: Unicast, Broadcast, Multicast, Loopback</li>
        <li>NAT allows private addresses to access the internet</li>
      </ul>
    </div>
  </div>
);

export default IPAddressingBasics;
