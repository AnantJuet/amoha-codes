import React from 'react';

const CIDR: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      CIDR (Classless Inter-Domain Routing)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      CIDR is a method of allocating IP addresses and routing that replaced the classful
      addressing scheme. It allows for more flexible division of IP address space by using
      variable-length subnet masks (VLSM), enabling efficient allocation of addresses and
      reducing routing table sizes through route aggregation.
    </p>

    <h2 className="text-3xl font-bold mt-8">CIDR Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    CIDR Notation Format:

    IP Address / Prefix Length
    192.168.1.0/24

    The prefix length indicates how many bits are network bits:

    /24 = 255.255.255.0    (24 network bits, 8 host bits)
    /16 = 255.255.0.0      (16 network bits, 16 host bits)
    /8  = 255.0.0.0        (8 network bits, 24 host bits)
    /28 = 255.255.255.240  (28 network bits, 4 host bits)

    Example:
    10.0.0.0/8      - Class A equivalent
    172.16.0.0/12   - Private Class B space
    192.168.1.0/24  - Class C equivalent
    192.168.1.0/26  - Quarter of Class C (64 addresses)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CIDR vs Classful</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Classful</th>
            <th className="p-3 border">CIDR</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Subnet Mask</td>
            <td className="p-3 border">Fixed by class</td>
            <td className="p-3 border">Variable length</td>
          </tr>
          <tr>
            <td className="p-3 border">Network Sizes</td>
            <td className="p-3 border">3 sizes only</td>
            <td className="p-3 border">Any power of 2</td>
          </tr>
          <tr>
            <td className="p-3 border">Address Efficiency</td>
            <td className="p-3 border">Poor (wasteful)</td>
            <td className="p-3 border">Efficient</td>
          </tr>
          <tr>
            <td className="p-3 border">Route Aggregation</td>
            <td className="p-3 border">Class boundary only</td>
            <td className="p-3 border">Flexible supernetting</td>
          </tr>
          <tr>
            <td className="p-3 border">Notation</td>
            <td className="p-3 border">192.168.1.0</td>
            <td className="p-3 border">192.168.1.0/24</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">CIDR Block Sizes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Prefix</th>
            <th className="p-3 border">Subnet Mask</th>
            <th className="p-3 border">Total IPs</th>
            <th className="p-3 border">Usable Hosts</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">/30</td>
            <td className="p-3 border">255.255.255.252</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border">/28</td>
            <td className="p-3 border">255.255.255.240</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">14</td>
          </tr>
          <tr>
            <td className="p-3 border">/26</td>
            <td className="p-3 border">255.255.255.192</td>
            <td className="p-3 border">64</td>
            <td className="p-3 border">62</td>
          </tr>
          <tr>
            <td className="p-3 border">/24</td>
            <td className="p-3 border">255.255.255.0</td>
            <td className="p-3 border">256</td>
            <td className="p-3 border">254</td>
          </tr>
          <tr>
            <td className="p-3 border">/22</td>
            <td className="p-3 border">255.255.252.0</td>
            <td className="p-3 border">1,024</td>
            <td className="p-3 border">1,022</td>
          </tr>
          <tr>
            <td className="p-3 border">/16</td>
            <td className="p-3 border">255.255.0.0</td>
            <td className="p-3 border">65,536</td>
            <td className="p-3 border">65,534</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Route Aggregation (Supernetting)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Route Aggregation Example:

    Individual networks:
    192.168.0.0/24
    192.168.1.0/24
    192.168.2.0/24
    192.168.3.0/24

    Binary analysis:
    192.168.0.0 = 11000000.10101000.00000000.00000000
    192.168.1.0 = 11000000.10101000.00000001.00000000
    192.168.2.0 = 11000000.10101000.00000010.00000000
    192.168.3.0 = 11000000.10101000.00000011.00000000
                                    ^^^^^^
                                    First 22 bits identical

    Aggregated route:
    192.168.0.0/22 (covers all four /24 networks)

    Benefits:
    - 4 routing table entries become 1
    - Reduced routing table size
    - Faster route lookups
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CIDR Calculation Example</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Calculate network details for 172.16.35.123/20</h3>
      <div className="font-mono text-sm text-gray-900">
        <p className="mb-2">Step 1: Convert to binary</p>
        <p>IP: 10101100.00010000.00100011.01111011</p>
        <p>Mask: 11111111.11111111.11110000.00000000 (/20)</p>
        <p className="mt-2 mb-2">Step 2: Calculate network address (AND)</p>
        <p>Network: 172.16.32.0</p>
        <p className="mt-2 mb-2">Step 3: Calculate broadcast (all host bits = 1)</p>
        <p>Broadcast: 172.16.47.255</p>
        <p className="mt-2 mb-2">Step 4: Host range</p>
        <p>First host: 172.16.32.1</p>
        <p>Last host: 172.16.47.254</p>
        <p>Total hosts: 2^12 - 2 = 4,094</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Benefits of CIDR</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Address Efficiency</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Allocate exact size needed</li>
          <li>Reduce address wastage</li>
          <li>Better utilization of IPv4</li>
          <li>Delay IPv4 exhaustion</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Routing Efficiency</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Route aggregation</li>
          <li>Smaller routing tables</li>
          <li>Faster lookups</li>
          <li>Less router memory</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>CIDR notation: IP/prefix (e.g., 192.168.1.0/24)</li>
        <li>Prefix length specifies network bits (1-32)</li>
        <li>Enables variable-length subnet masks (VLSM)</li>
        <li>Supports route aggregation (supernetting)</li>
        <li>More efficient than classful addressing</li>
        <li>Usable hosts = 2^(32-prefix) - 2</li>
      </ul>
    </div>
  </div>
);

export default CIDR;
