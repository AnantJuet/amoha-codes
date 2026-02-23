import React from 'react';

const Subnetting: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Subnetting
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Subnetting is the practice of dividing a network into smaller, more manageable sub-networks
      (subnets). It involves borrowing bits from the host portion of an IP address to create
      additional network addresses, allowing better organization, improved security, and more
      efficient use of IP addresses.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Subnet?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Reduced Broadcast Traffic:</strong> Smaller broadcast domains</li>
      <li><strong>Improved Security:</strong> Isolate network segments</li>
      <li><strong>Better Organization:</strong> Logical grouping of hosts</li>
      <li><strong>Efficient Address Use:</strong> Allocate addresses as needed</li>
      <li><strong>Easier Troubleshooting:</strong> Isolate network problems</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Subnetting Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Subnetting a Class C Network:

    Original: 192.168.1.0/24 (254 hosts)

    Borrow 2 bits from host portion:

    Original:   NNNNNNNN.NNNNNNNN.NNNNNNNN.HHHHHHHH
    Subnetted:  NNNNNNNN.NNNNNNNN.NNNNNNNN.SSHHHHHHH
                                          ^^
                                     Subnet bits

    New mask: /26 (255.255.255.192)

    Results:
    - 2^2 = 4 subnets
    - 2^6 - 2 = 62 hosts per subnet

    Subnet 0: 192.168.1.0/26   (hosts .1 - .62)
    Subnet 1: 192.168.1.64/26  (hosts .65 - .126)
    Subnet 2: 192.168.1.128/26 (hosts .129 - .190)
    Subnet 3: 192.168.1.192/26 (hosts .193 - .254)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Subnet Calculation Formulas</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Key Formulas</h3>
      <div className="font-mono text-sm space-y-2 text-gray-900">
        <p><strong>Number of Subnets:</strong> 2^n (n = subnet bits borrowed)</p>
        <p><strong>Hosts per Subnet:</strong> 2^h - 2 (h = remaining host bits)</p>
        <p><strong>Block Size:</strong> 256 - subnet mask octet value</p>
        <p><strong>Network Address:</strong> First address in block (host bits = 0)</p>
        <p><strong>Broadcast Address:</strong> Last address in block (host bits = 1)</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Subnet Reference Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">CIDR</th>
            <th className="p-3 border">Subnet Mask</th>
            <th className="p-3 border">Block Size</th>
            <th className="p-3 border">Subnets</th>
            <th className="p-3 border">Hosts</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">/25</td>
            <td className="p-3 border">255.255.255.128</td>
            <td className="p-3 border">128</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">126</td>
          </tr>
          <tr>
            <td className="p-3 border">/26</td>
            <td className="p-3 border">255.255.255.192</td>
            <td className="p-3 border">64</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">62</td>
          </tr>
          <tr>
            <td className="p-3 border">/27</td>
            <td className="p-3 border">255.255.255.224</td>
            <td className="p-3 border">32</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">30</td>
          </tr>
          <tr>
            <td className="p-3 border">/28</td>
            <td className="p-3 border">255.255.255.240</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">14</td>
          </tr>
          <tr>
            <td className="p-3 border">/29</td>
            <td className="p-3 border">255.255.255.248</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">32</td>
            <td className="p-3 border">6</td>
          </tr>
          <tr>
            <td className="p-3 border">/30</td>
            <td className="p-3 border">255.255.255.252</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">64</td>
            <td className="p-3 border">2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Subnetting Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Problem: Subnet 10.0.0.0/8 to create 1000 subnets

    Solution:
    1. Find bits needed for 1000 subnets
       2^10 = 1024 >= 1000, so need 10 subnet bits

    2. New prefix length
       Original: /8
       New: /8 + 10 = /18

    3. Calculate hosts per subnet
       Host bits: 32 - 18 = 14
       Hosts: 2^14 - 2 = 16,382

    4. New subnet mask
       /18 = 255.255.192.0

    5. Block size in third octet
       256 - 192 = 64

    Subnets:
    10.0.0.0/18   (10.0.0.1 - 10.0.63.254)
    10.0.64.0/18  (10.0.64.1 - 10.0.127.254)
    10.0.128.0/18 (10.0.128.1 - 10.0.191.254)
    10.0.192.0/18 (10.0.192.1 - 10.0.255.254)
    10.1.0.0/18   ...and so on
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Quick Subnetting Method</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Magic Number Method</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Block size = 256 - mask value</li>
          <li>Subnets start at multiples of block</li>
          <li>Network = first IP in block</li>
          <li>Broadcast = last IP in block</li>
          <li>Hosts = everything between</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Example: 192.168.1.0/27</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Mask: 255.255.255.224</li>
          <li>Block: 256-224 = 32</li>
          <li>Subnets: .0, .32, .64, .96...</li>
          <li>First subnet: .0 - .31</li>
          <li>Hosts: .1 - .30 (30 hosts)</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Subnetting borrows host bits to create network bits</li>
        <li>Subnets = 2^n, Hosts = 2^h - 2</li>
        <li>Block size = 256 - subnet mask value</li>
        <li>Each subnet has network and broadcast addresses</li>
        <li>More subnets = fewer hosts per subnet</li>
        <li>/30 is commonly used for point-to-point links (2 hosts)</li>
      </ul>
    </div>
  </div>
);

export default Subnetting;
