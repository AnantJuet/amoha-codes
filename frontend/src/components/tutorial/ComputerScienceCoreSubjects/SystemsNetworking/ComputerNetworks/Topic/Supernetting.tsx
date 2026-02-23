import React from 'react';

const Supernetting: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Supernetting (Route Aggregation)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Supernetting is the opposite of subnetting - it combines multiple smaller networks into
      a single larger network. Also known as route aggregation or route summarization, supernetting
      reduces the number of entries in routing tables by representing multiple networks with
      one summary route.
    </p>

    <h2 className="text-3xl font-bold mt-8">Supernetting vs Subnetting</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Subnetting</th>
            <th className="p-3 border">Supernetting</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Operation</td>
            <td className="p-3 border">Divides networks</td>
            <td className="p-3 border">Combines networks</td>
          </tr>
          <tr>
            <td className="p-3 border">Prefix Length</td>
            <td className="p-3 border">Increases (/24 to /26)</td>
            <td className="p-3 border">Decreases (/24 to /22)</td>
          </tr>
          <tr>
            <td className="p-3 border">Network Bits</td>
            <td className="p-3 border">Borrows from host</td>
            <td className="p-3 border">Returns to host</td>
          </tr>
          <tr>
            <td className="p-3 border">Purpose</td>
            <td className="p-3 border">Create smaller networks</td>
            <td className="p-3 border">Reduce routing entries</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Supernetting Requirements</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Rules for Supernetting:

    1. CONTIGUOUS ADDRESSES
       Networks must be adjacent in address space
       OK:     192.168.0.0/24, 192.168.1.0/24
       Not OK: 192.168.0.0/24, 192.168.5.0/24

    2. POWER OF 2
       Number of networks must be power of 2
       OK: 2, 4, 8, 16 networks
       Not OK: 3, 5, 6, 7 networks

    3. FIRST ADDRESS DIVISIBILITY
       First network address must be divisible by
       total number of networks being combined

       Combining 4 networks (/24 to /22):
       OK:     192.168.0.0 (0 div by 4 = 0)
       OK:     192.168.4.0 (4 div by 4 = 1)
       Not OK: 192.168.1.0 (1 not div by 4)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Supernetting Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Combine these four /24 networks:

    192.168.0.0/24  = 11000000.10101000.00000000.xxxxxxxx
    192.168.1.0/24  = 11000000.10101000.00000001.xxxxxxxx
    192.168.2.0/24  = 11000000.10101000.00000010.xxxxxxxx
    192.168.3.0/24  = 11000000.10101000.00000011.xxxxxxxx
                                        ^^^^^^
                                        These bits differ

    Step 1: Find common bits
    - First 22 bits are identical
    - Bits 23-24 differ among the networks

    Step 2: Calculate new prefix
    - Original prefix: /24
    - Bits varying: 2
    - New prefix: 24 - 2 = 22

    Result: 192.168.0.0/22

    This single /22 route represents all four /24 networks
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Benefits of Supernetting</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Routing Efficiency</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Fewer routing table entries</li>
          <li>Faster route lookups</li>
          <li>Less memory required</li>
          <li>Reduced CPU usage</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Network Stability</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Fewer routing updates</li>
          <li>Reduced network traffic</li>
          <li>Improved convergence</li>
          <li>Better scalability</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Supernet Calculation Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Networks Combined</th>
            <th className="p-3 border">From /24</th>
            <th className="p-3 border">From /16</th>
            <th className="p-3 border">Bits Freed</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">/23</td>
            <td className="p-3 border">/15</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">/22</td>
            <td className="p-3 border">/14</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">/21</td>
            <td className="p-3 border">/13</td>
            <td className="p-3 border">3</td>
          </tr>
          <tr>
            <td className="p-3 border">16</td>
            <td className="p-3 border">/20</td>
            <td className="p-3 border">/12</td>
            <td className="p-3 border">4</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Real-World Application</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">ISP Route Aggregation</h3>
      <p className="text-sm mb-2">
        ISPs use supernetting extensively to manage internet routing tables:
      </p>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>ISP owns 192.168.0.0/16 block</li>
        <li>Assigns /24 networks to customers</li>
        <li>Advertises single /16 to other ISPs</li>
        <li>Internal routing knows individual /24s</li>
        <li>External world sees only one route</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Supernetting combines multiple networks into one</li>
        <li>Networks must be contiguous and power of 2</li>
        <li>First address must be divisible by network count</li>
        <li>Reduces routing table size and improves efficiency</li>
        <li>Commonly used by ISPs for route aggregation</li>
        <li>New prefix = original prefix - log2(networks combined)</li>
      </ul>
    </div>
  </div>
);

export default Supernetting;
