import React from "react";

const AdHocNetworks: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Ad Hoc Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Ad Hoc Networks</strong> are decentralized wireless networks that do not rely on
      pre-existing infrastructure like routers or access points. Devices communicate directly
      with each other, forming a temporary network that can be set up quickly and dynamically.
    </p>

    <h2 className="text-3xl font-bold mt-8">Ad Hoc Network Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Infrastructure vs Ad Hoc:

INFRASTRUCTURE MODE:              AD HOC MODE:
+--------+                        +--------+
| Device |--+                     | Device |
+--------+  |    +------+         +--------+
            +--->|  AP  |              |
+--------+  |    +------+         +--------+
| Device |--+        |            | Device |----+
+--------+       Internet         +--------+    |
                                       |        |
                                  +--------+    |
                                  | Device |----+
                                  +--------+

Ad Hoc Characteristics:
- No central controller
- Peer-to-peer communication
- Self-organizing
- Dynamic topology`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Ad Hoc Networks</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Applications</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">MANET</td>
            <td className="p-3 border">Mobile Ad Hoc Network</td>
            <td className="p-3 border">Military, emergency response</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">VANET</td>
            <td className="p-3 border">Vehicular Ad Hoc Network</td>
            <td className="p-3 border">Traffic management, V2V communication</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">FANET</td>
            <td className="p-3 border">Flying Ad Hoc Network</td>
            <td className="p-3 border">Drone swarms, aerial surveillance</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">WSN</td>
            <td className="p-3 border">Wireless Sensor Network</td>
            <td className="p-3 border">Environmental monitoring, IoT</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Routing Protocols</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Ad Hoc Routing Categories:

1. PROACTIVE (Table-Driven)
   - Maintain routes continuously
   - Quick route availability
   - Higher overhead
   Examples: DSDV, OLSR

2. REACTIVE (On-Demand)
   - Find routes when needed
   - Lower overhead
   - Route discovery delay
   Examples: AODV, DSR

3. HYBRID
   - Combine both approaches
   - Zone-based routing
   Examples: ZRP

AODV Route Discovery:
Source --RREQ--> [Broadcast flood]
                      |
Destination <--RREP-- [Unicast reply]`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Challenges</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Ad Hoc Network Challenges:

1. DYNAMIC TOPOLOGY
   - Nodes move frequently
   - Links break and form
   - Route maintenance overhead

2. LIMITED RESOURCES
   - Battery power constraints
   - Limited bandwidth
   - Processing limitations

3. SECURITY
   - No central authentication
   - Vulnerable to attacks
   - Trust establishment

4. SCALABILITY
   - Routing overhead increases
   - Hidden terminal problem
   - Collision management

5. QUALITY OF SERVICE
   - Variable link quality
   - Delay guarantees difficult
   - Bandwidth reservation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Military:</strong> Battlefield communication without infrastructure</li>
      <li><strong>Emergency Response:</strong> Disaster recovery networks</li>
      <li><strong>Conferences:</strong> Quick file sharing among participants</li>
      <li><strong>Gaming:</strong> Multiplayer games without internet</li>
      <li><strong>IoT:</strong> Sensor networks and smart devices</li>
      <li><strong>Vehicular:</strong> Vehicle-to-vehicle safety communication</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Ad hoc networks operate without central infrastructure</li>
        <li>Nodes communicate directly in peer-to-peer fashion</li>
        <li>Routing can be proactive, reactive, or hybrid</li>
        <li>Challenges include mobility, security, and scalability</li>
        <li>Used in military, emergency, and IoT applications</li>
      </ul>
    </div>
  </div>
);

export default AdHocNetworks;
