import React from 'react';

const RIP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      RIP (Routing Information Protocol)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      RIP is one of the oldest distance vector routing protocols, using hop count as its metric.
      It's simple to configure and suitable for small networks, but limited by its maximum
      hop count of 15 and slow convergence. RIPv2 added support for VLSM and authentication.
    </p>

    <h2 className="text-3xl font-bold mt-8">RIP Versions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">RIPv1</th>
            <th className="p-3 border">RIPv2</th>
            <th className="p-3 border">RIPng</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Classful/Classless</td>
            <td className="p-3 border">Classful</td>
            <td className="p-3 border">Classless</td>
            <td className="p-3 border">Classless</td>
          </tr>
          <tr>
            <td className="p-3 border">VLSM/CIDR</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">IP Version</td>
            <td className="p-3 border">IPv4</td>
            <td className="p-3 border">IPv4</td>
            <td className="p-3 border">IPv6</td>
          </tr>
          <tr>
            <td className="p-3 border">Updates</td>
            <td className="p-3 border">Broadcast</td>
            <td className="p-3 border">Multicast 224.0.0.9</td>
            <td className="p-3 border">Multicast ff02::9</td>
          </tr>
          <tr>
            <td className="p-3 border">Authentication</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes (MD5)</td>
            <td className="p-3 border">IPsec</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">RIP Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    RIP Message Exchange:

    Router A                              Router B
       |                                     |
       |<--- RIP Response (every 30 sec) ---|
       |     Network | Metric               |
       |     10.0.0.0 | 1                    |
       |     172.16.0.0 | 2                  |
       |                                     |
       |--- RIP Response (every 30 sec) --->|
       |     Network | Metric               |
       |     192.168.1.0 | 1                 |
       |                                     |

    RIP Packet (UDP Port 520):
    +------------+------------+
    | Command    | Version    |
    +------------+------------+
    | Route Entry 1           |
    | - Address Family        |
    | - IP Address            |
    | - Subnet Mask (v2)      |
    | - Next Hop (v2)         |
    | - Metric (1-16)         |
    +-------------------------+
    | ... up to 25 entries    |
    +-------------------------+
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RIP Timers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Timer</th>
            <th className="p-3 border">Default</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Update</td>
            <td className="p-3 border">30 seconds</td>
            <td className="p-3 border">Send routing table to neighbors</td>
          </tr>
          <tr>
            <td className="p-3 border">Invalid</td>
            <td className="p-3 border">180 seconds</td>
            <td className="p-3 border">Mark route invalid if no update</td>
          </tr>
          <tr>
            <td className="p-3 border">Hold-down</td>
            <td className="p-3 border">180 seconds</td>
            <td className="p-3 border">Ignore updates for failed routes</td>
          </tr>
          <tr>
            <td className="p-3 border">Flush</td>
            <td className="p-3 border">240 seconds</td>
            <td className="p-3 border">Remove route from table</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">RIP Configuration</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Cisco IOS RIPv2 Configuration:

    Router(config)# router rip
    Router(config-router)# version 2
    Router(config-router)# network 192.168.1.0
    Router(config-router)# network 10.0.0.0
    Router(config-router)# no auto-summary
    Router(config-router)# passive-interface GigabitEthernet0/0

    Verification:
    Router# show ip protocols
    Router# show ip route rip
    Router# debug ip rip

    Linux (using quagga/frr):
    router rip
      network 192.168.1.0/24
      network 10.0.0.0/8
      version 2
      no auto-summary
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RIP Loop Prevention</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Split Horizon</h3>
        <p className="text-sm">Never advertise a route back out the interface where it was learned.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Route Poisoning</h3>
        <p className="text-sm">Advertise failed routes with metric 16 (infinity).</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Poison Reverse</h3>
        <p className="text-sm">Send metric 16 back to the source of a route.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Hold-down Timer</h3>
        <p className="text-sm">Ignore updates for routes marked as possibly down.</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">RIP Limitations</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Max 15 hops:</strong> 16 = unreachable</li>
        <li><strong>Slow convergence:</strong> Can take minutes</li>
        <li><strong>Hop count only:</strong> Ignores bandwidth, delay</li>
        <li><strong>Periodic updates:</strong> Bandwidth overhead</li>
        <li><strong>No load balancing:</strong> Unless equal cost</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>RIP uses hop count metric (max 15)</li>
        <li>Updates sent every 30 seconds via UDP port 520</li>
        <li>RIPv2 supports VLSM, multicast, authentication</li>
        <li>Simple but limited for large networks</li>
        <li>Uses split horizon, route poisoning for loop prevention</li>
        <li>Administrative distance: 120</li>
      </ul>
    </div>
  </div>
);

export default RIP;
