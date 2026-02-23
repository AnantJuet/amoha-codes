import React from 'react';

const RoutingIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Routing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Routing is the process of selecting paths in a network along which to send data packets.
      Routers examine the destination IP address of incoming packets and use routing tables
      to determine the best next hop toward the destination. This enables communication between
      different networks across the internet.
    </p>

    <h2 className="text-3xl font-bold mt-8">Routing Concepts</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Routing Process:

    Source                                         Destination
    192.168.1.10                                   10.0.0.50
         |                                             |
         v                                             ^
    +--------+      +--------+      +--------+    +--------+
    |Router A|----->|Router B|----->|Router C|--->|Router D|
    +--------+      +--------+      +--------+    +--------+
         |              |              |              |
    Next Hop:      Next Hop:      Next Hop:      Directly
    Router B       Router C       Router D       Connected

    Each router:
    1. Receives packet
    2. Examines destination IP
    3. Looks up routing table
    4. Forwards to next hop
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Routing Table</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Sample Routing Table:

    Destination      Mask            Next Hop        Interface   Metric
    -------------------------------------------------------------------------
    10.0.0.0         255.0.0.0       192.168.1.1     eth0        10
    172.16.0.0       255.255.0.0     192.168.1.2     eth0        5
    192.168.1.0      255.255.255.0   0.0.0.0         eth0        0
    192.168.2.0      255.255.255.0   192.168.1.3     eth1        1
    0.0.0.0          0.0.0.0         192.168.1.254   eth0        1

    Fields:
    - Destination: Network address to match
    - Mask: Subnet mask for matching
    - Next Hop: Where to forward (0.0.0.0 = direct)
    - Interface: Physical port to use
    - Metric: Cost/distance (lower = better)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Route Selection</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Longest Prefix Match</h3>
      <p className="text-sm mb-2">When multiple routes match, the most specific (longest prefix) wins:</p>
      <div className="font-mono text-sm text-gray-900">
        <p>Destination IP: 192.168.1.100</p>
        <p className="mt-2">Matching routes:</p>
        <ul className="list-disc list-inside mt-1">
          <li>0.0.0.0/0 (default) - matches</li>
          <li>192.0.0.0/8 - matches</li>
          <li>192.168.0.0/16 - matches</li>
          <li>192.168.1.0/24 - matches (WINNER - longest prefix)</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Routes</h2>
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
            <td className="p-3 border">Connected</td>
            <td className="p-3 border">Directly attached networks</td>
            <td className="p-3 border">192.168.1.0/24 via eth0</td>
          </tr>
          <tr>
            <td className="p-3 border">Static</td>
            <td className="p-3 border">Manually configured</td>
            <td className="p-3 border">ip route add 10.0.0.0/8 via 192.168.1.1</td>
          </tr>
          <tr>
            <td className="p-3 border">Dynamic</td>
            <td className="p-3 border">Learned via protocols</td>
            <td className="p-3 border">OSPF, RIP, BGP</td>
          </tr>
          <tr>
            <td className="p-3 border">Default</td>
            <td className="p-3 border">Gateway of last resort</td>
            <td className="p-3 border">0.0.0.0/0 via gateway</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Routing vs Forwarding</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Routing (Control Plane)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Building the routing table</li>
          <li>Running routing protocols</li>
          <li>Exchanging route information</li>
          <li>Calculating best paths</li>
          <li>Software-based, slower</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Forwarding (Data Plane)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Moving packets hop-by-hop</li>
          <li>Looking up forwarding table</li>
          <li>Switching to correct interface</li>
          <li>Per-packet operation</li>
          <li>Hardware-based, fast</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Routing Metrics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Metric</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Used By</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Hop Count</td>
            <td className="p-3 border">Number of routers</td>
            <td className="p-3 border">RIP</td>
          </tr>
          <tr>
            <td className="p-3 border">Bandwidth</td>
            <td className="p-3 border">Link capacity</td>
            <td className="p-3 border">OSPF, EIGRP</td>
          </tr>
          <tr>
            <td className="p-3 border">Delay</td>
            <td className="p-3 border">Time to traverse link</td>
            <td className="p-3 border">EIGRP</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Administrative value</td>
            <td className="p-3 border">OSPF</td>
          </tr>
          <tr>
            <td className="p-3 border">Path Attributes</td>
            <td className="p-3 border">AS path, policies</td>
            <td className="p-3 border">BGP</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Routing determines the best path for packets</li>
        <li>Routing tables contain destination, next hop, and metric</li>
        <li>Longest prefix match selects most specific route</li>
        <li>Routes can be connected, static, dynamic, or default</li>
        <li>Routing (control plane) builds tables; forwarding (data plane) moves packets</li>
        <li>Metrics help choose between multiple paths</li>
      </ul>
    </div>
  </div>
);

export default RoutingIntro;
