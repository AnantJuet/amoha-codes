import React from 'react';

const ClassfulAddressing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Classful Addressing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Classful addressing was the original IPv4 address allocation method that divided the
      address space into fixed classes (A, B, C, D, E). Each class had a predetermined boundary
      between network and host portions, determined by the leading bits of the address.
    </p>

    <h2 className="text-3xl font-bold mt-8">Classful Address Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Classful Address Structures:

    Class A:  0NNNNNNN.HHHHHHHH.HHHHHHHH.HHHHHHHH
              |<--Net->|<--------Host---------->|
              8 bits net, 24 bits host

    Class B:  10NNNNNN.NNNNNNNN.HHHHHHHH.HHHHHHHH
              |<-----Network---->|<----Host---->|
              16 bits net, 16 bits host

    Class C:  110NNNNN.NNNNNNNN.NNNNNNNN.HHHHHHHH
              |<---------Network-------->|<Host>|
              24 bits net, 8 bits host

    N = Network bit, H = Host bit
    Leading bits determine the class automatically
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Default Subnet Masks</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Class</th>
            <th className="p-3 border">Default Mask</th>
            <th className="p-3 border">CIDR</th>
            <th className="p-3 border">Binary</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">A</td>
            <td className="p-3 border">255.0.0.0</td>
            <td className="p-3 border">/8</td>
            <td className="p-3 border font-mono text-xs text-gray-900">11111111.00000000.00000000.00000000</td>
          </tr>
          <tr>
            <td className="p-3 border">B</td>
            <td className="p-3 border">255.255.0.0</td>
            <td className="p-3 border">/16</td>
            <td className="p-3 border font-mono text-xs text-gray-900">11111111.11111111.00000000.00000000</td>
          </tr>
          <tr>
            <td className="p-3 border">C</td>
            <td className="p-3 border">255.255.255.0</td>
            <td className="p-3 border">/24</td>
            <td className="p-3 border font-mono text-xs text-gray-900">11111111.11111111.11111111.00000000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Calculation Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Given IP: 172.16.50.100

    Step 1: Identify Class
    - First octet: 172 (128-191 range)
    - Class B

    Step 2: Apply Default Mask
    - Class B mask: 255.255.0.0

    Step 3: Calculate Network Address
    IP:     172.16.50.100
    Mask:   255.255.0.0
    AND:    172.16.0.0    (Network Address)

    Step 4: Calculate Broadcast Address
    Network: 172.16.0.0
    Broadcast: 172.16.255.255 (all host bits = 1)

    Step 5: Host Range
    First Host:  172.16.0.1
    Last Host:   172.16.255.254
    Total Hosts: 65,534
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Classful Routing</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Characteristics</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>No subnet mask in routing updates</li>
          <li>Class determines mask automatically</li>
          <li>All subnets same size</li>
          <li>Cannot support VLSM</li>
          <li>Protocols: RIPv1, IGRP</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Limitations</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Fixed subnet boundaries</li>
          <li>Address wastage</li>
          <li>Summarization at class boundary only</li>
          <li>Discontiguous networks not supported</li>
          <li>No supernetting capability</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Space Distribution</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    IPv4 Address Space Distribution:

    Total IPv4 Addresses: 4,294,967,296 (2^32)

    Class A: 50% of address space
    - 128 networks (0-127)
    - 16,777,214 hosts each
    - Total: 2,147,483,648 addresses

    Class B: 25% of address space
    - 16,384 networks
    - 65,534 hosts each
    - Total: 1,073,741,824 addresses

    Class C: 12.5% of address space
    - 2,097,152 networks
    - 254 hosts each
    - Total: 536,870,912 addresses

    Class D + E: 12.5% (Multicast + Reserved)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Classful Addressing Failed</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Problem</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Address Exhaustion</td>
            <td className="p-3 border">Limited Class B networks</td>
            <td className="p-3 border">Only 16,384 Class B available</td>
          </tr>
          <tr>
            <td className="p-3 border">Address Waste</td>
            <td className="p-3 border">Class A too large for most</td>
            <td className="p-3 border">Need 1000 hosts, get 16M</td>
          </tr>
          <tr>
            <td className="p-3 border">Inflexibility</td>
            <td className="p-3 border">Only 3 network sizes</td>
            <td className="p-3 border">254, 65534, or 16M hosts</td>
          </tr>
          <tr>
            <td className="p-3 border">Routing Table Growth</td>
            <td className="p-3 border">Many Class C for medium orgs</td>
            <td className="p-3 border">1000 hosts needs 4 Class C</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transition to CIDR</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <p className="mb-2">CIDR (Classless Inter-Domain Routing) replaced classful addressing in 1993:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Variable-length subnet masks (any prefix length)</li>
        <li>Efficient address allocation</li>
        <li>Route aggregation (supernetting)</li>
        <li>No class boundaries</li>
        <li>Notation: 192.168.1.0/24 instead of class assumptions</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Classful addressing used fixed network/host boundaries</li>
        <li>Class determined by leading bits of IP address</li>
        <li>Default masks: /8 (A), /16 (B), /24 (C)</li>
        <li>Major problem: address wastage and inflexibility</li>
        <li>Replaced by CIDR for efficient address allocation</li>
        <li>Legacy routing protocols (RIPv1, IGRP) were classful</li>
      </ul>
    </div>
  </div>
);

export default ClassfulAddressing;
