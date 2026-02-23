import React from 'react';

const StaticDynamicRouting: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Static vs Dynamic Routing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Routing can be configured manually (static) or learned automatically through routing
      protocols (dynamic). Each approach has advantages and use cases. Most networks use a
      combination of both for optimal operation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Static Routing</th>
            <th className="p-3 border">Dynamic Routing</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Configuration</td>
            <td className="p-3 border">Manual by admin</td>
            <td className="p-3 border">Automatic via protocols</td>
          </tr>
          <tr>
            <td className="p-3 border">Adaptability</td>
            <td className="p-3 border">No automatic changes</td>
            <td className="p-3 border">Adapts to network changes</td>
          </tr>
          <tr>
            <td className="p-3 border">Scalability</td>
            <td className="p-3 border">Poor (manual updates)</td>
            <td className="p-3 border">Good (automatic updates)</td>
          </tr>
          <tr>
            <td className="p-3 border">Overhead</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Protocol traffic</td>
          </tr>
          <tr>
            <td className="p-3 border">CPU/Memory</td>
            <td className="p-3 border">Minimal</td>
            <td className="p-3 border">Higher requirements</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">More secure (no protocol)</td>
            <td className="p-3 border">Protocol vulnerabilities</td>
          </tr>
          <tr>
            <td className="p-3 border">Best For</td>
            <td className="p-3 border">Small, stable networks</td>
            <td className="p-3 border">Large, complex networks</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Static Routing</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Static Route Configuration:

    Linux:
    $ ip route add 10.0.0.0/8 via 192.168.1.1
    $ ip route add default via 192.168.1.254

    Cisco IOS:
    Router(config)# ip route 10.0.0.0 255.0.0.0 192.168.1.1
    Router(config)# ip route 0.0.0.0 0.0.0.0 192.168.1.254

    Components:
    - Destination network
    - Subnet mask
    - Next-hop IP or exit interface
    - Optional: metric/administrative distance

    Use Cases:
    - Default gateway (0.0.0.0/0)
    - Stub networks (single exit point)
    - Backup routes
    - Security (no routing protocol exposure)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dynamic Routing</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Dynamic Routing Operation:

    +--------+       Routing        +--------+
    |Router A|<---  Updates  --->   |Router B|
    +--------+      (RIP/OSPF/BGP)  +--------+
         |                              |
    Routing Table                  Routing Table
    automatically                  automatically
    updated                        updated

    Process:
    1. Routers discover neighbors
    2. Exchange routing information
    3. Calculate best paths
    4. Build routing table
    5. Continuously update on changes

    Protocols:
    - RIP (simple, hop count)
    - OSPF (link-state, cost)
    - EIGRP (Cisco, composite metric)
    - BGP (internet, path vector)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Static Routing Advantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Pros</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>No routing protocol overhead</li>
          <li>Predictable path selection</li>
          <li>Lower CPU/memory usage</li>
          <li>More secure (no protocol attacks)</li>
          <li>Simple to understand</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Cons</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Manual configuration required</li>
          <li>No automatic failover</li>
          <li>Doesn't scale well</li>
          <li>Error-prone for large networks</li>
          <li>Requires network knowledge</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dynamic Routing Advantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Pros</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Automatic route discovery</li>
          <li>Adapts to topology changes</li>
          <li>Automatic failover</li>
          <li>Scales to large networks</li>
          <li>Load balancing possible</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Cons</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Protocol overhead (bandwidth)</li>
          <li>Higher resource usage</li>
          <li>Convergence time during changes</li>
          <li>More complex to troubleshoot</li>
          <li>Security vulnerabilities</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Administrative Distance</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Route Preference (lower = preferred)</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Connected:</strong> 0</li>
        <li><strong>Static:</strong> 1</li>
        <li><strong>EIGRP:</strong> 90</li>
        <li><strong>OSPF:</strong> 110</li>
        <li><strong>RIP:</strong> 120</li>
        <li><strong>External BGP:</strong> 20</li>
        <li><strong>Internal BGP:</strong> 200</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Static routes are manually configured; dynamic are learned</li>
        <li>Static: simple, secure, but doesn't adapt</li>
        <li>Dynamic: scalable, adaptive, but has overhead</li>
        <li>Most networks use both approaches</li>
        <li>Administrative distance determines route preference</li>
        <li>Choose based on network size and requirements</li>
      </ul>
    </div>
  </div>
);

export default StaticDynamicRouting;
