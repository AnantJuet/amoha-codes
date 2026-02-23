import React from 'react';

const VLSM: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      VLSM (Variable Length Subnet Mask)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      VLSM allows a network administrator to use different subnet masks for different subnets
      within the same network address space. This enables more efficient use of IP addresses
      by allocating subnets of varying sizes based on actual requirements rather than using
      a fixed subnet size.
    </p>

    <h2 className="text-3xl font-bold mt-8">VLSM vs Fixed-Length Subnetting</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Fixed-Length (FLSM)</th>
            <th className="p-3 border">Variable-Length (VLSM)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Subnet Size</td>
            <td className="p-3 border">Same for all</td>
            <td className="p-3 border">Varies by need</td>
          </tr>
          <tr>
            <td className="p-3 border">Address Efficiency</td>
            <td className="p-3 border">Poor (wasteful)</td>
            <td className="p-3 border">Excellent</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">More complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Protocol Support</td>
            <td className="p-3 border">All routing protocols</td>
            <td className="p-3 border">Classless protocols only</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">VLSM Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    VLSM Design Steps:

    1. LIST REQUIREMENTS
       - Identify all subnets needed
       - Determine host count for each

    2. SORT BY SIZE
       - Largest subnet first
       - Smallest subnet last

    3. ALLOCATE ADDRESSES
       - Start with largest requirement
       - Assign appropriate prefix length
       - Calculate next available network

    4. REPEAT
       - Continue for each subnet
       - Ensure no overlaps

    Key Rule: Always allocate largest subnets first!
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">VLSM Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Network: 192.168.1.0/24
    Requirements:
    - LAN A: 100 hosts
    - LAN B: 50 hosts
    - LAN C: 25 hosts
    - WAN links: 2 hosts each (3 links)

    Step 1: Sort by size (largest first)
    1. LAN A: 100 hosts -> need /25 (126 hosts)
    2. LAN B: 50 hosts  -> need /26 (62 hosts)
    3. LAN C: 25 hosts  -> need /27 (30 hosts)
    4. WAN 1: 2 hosts   -> need /30 (2 hosts)
    5. WAN 2: 2 hosts   -> need /30 (2 hosts)
    6. WAN 3: 2 hosts   -> need /30 (2 hosts)

    Step 2: Allocate

    LAN A: 192.168.1.0/25
           Network: 192.168.1.0
           Hosts: 192.168.1.1 - 192.168.1.126
           Broadcast: 192.168.1.127

    LAN B: 192.168.1.128/26
           Network: 192.168.1.128
           Hosts: 192.168.1.129 - 192.168.1.190
           Broadcast: 192.168.1.191

    LAN C: 192.168.1.192/27
           Network: 192.168.1.192
           Hosts: 192.168.1.193 - 192.168.1.222
           Broadcast: 192.168.1.223

    WAN 1: 192.168.1.224/30
           Hosts: 192.168.1.225 - 192.168.1.226

    WAN 2: 192.168.1.228/30
           Hosts: 192.168.1.229 - 192.168.1.230

    WAN 3: 192.168.1.232/30
           Hosts: 192.168.1.233 - 192.168.1.234

    Remaining: 192.168.1.236 - 192.168.1.255 (spare)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">VLSM Efficiency Comparison</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Same Requirements - Different Approaches</h3>
      <div className="grid md:grid-cols-2 gap-4 mt-2">
        <div>
          <h4 className="font-semibold">Fixed-Length Subnetting</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Need 6 subnets, use /27</li>
            <li>Each subnet: 30 hosts max</li>
            <li>LAN A (100): Needs 4 /27 subnets!</li>
            <li>Total /27 needed: 8</li>
            <li>Addresses used: 256</li>
            <li>Wasted in WAN: 28 per link</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">VLSM</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Right-sized subnets</li>
            <li>LAN A: 1 /25 (126 hosts)</li>
            <li>WANs use /30 (2 hosts)</li>
            <li>Total addresses: 236</li>
            <li>Spare: 20 addresses</li>
            <li>Efficient utilization!</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">VLSM Requirements</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Classless Routing Protocol:</strong> RIPv2, OSPF, EIGRP, BGP</li>
      <li><strong>Subnet Mask in Updates:</strong> Protocol must include mask</li>
      <li><strong>Careful Planning:</strong> Prevent address overlaps</li>
      <li><strong>Hierarchical Design:</strong> Easier to manage and summarize</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Common VLSM Prefix Lengths</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Prefix</th>
            <th className="p-3 border">Hosts</th>
            <th className="p-3 border">Common Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">/30</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Point-to-point WAN links</td>
          </tr>
          <tr>
            <td className="p-3 border">/31</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Point-to-point (RFC 3021)</td>
          </tr>
          <tr>
            <td className="p-3 border">/32</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Loopback, host route</td>
          </tr>
          <tr>
            <td className="p-3 border">/28</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">Small server farms</td>
          </tr>
          <tr>
            <td className="p-3 border">/24</td>
            <td className="p-3 border">254</td>
            <td className="p-3 border">Standard LAN segment</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>VLSM uses different subnet masks in same network</li>
        <li>Always allocate largest subnets first</li>
        <li>Requires classless routing protocols (RIPv2, OSPF, BGP)</li>
        <li>Significantly more efficient than fixed-length subnetting</li>
        <li>/30 for WAN links, /24 or larger for LANs</li>
        <li>Prevents IP address waste</li>
      </ul>
    </div>
  </div>
);

export default VLSM;
