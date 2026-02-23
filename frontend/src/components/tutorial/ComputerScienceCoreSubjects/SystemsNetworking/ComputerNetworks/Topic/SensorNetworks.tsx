import React from "react";

const SensorNetworks: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Wireless Sensor Networks (WSN)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Wireless Sensor Networks (WSN)</strong> consist of spatially distributed autonomous
      sensors that monitor physical or environmental conditions. These tiny, low-power devices
      cooperatively pass data through the network to a main location for processing.
    </p>

    <h2 className="text-3xl font-bold mt-8">WSN Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Wireless Sensor Network Structure:

   [Sensor]    [Sensor]    [Sensor]
       \\          |          /
        \\         |         /
         \\        |        /
          +-------+-------+
                  |
            [Cluster Head]
                  |
                  v
            [Base Station]
                  |
                  v
            [Internet/User]

Sensor Node Components:
+------------------+
| Sensing Unit     | <- Sensors + ADC
| Processing Unit  | <- MCU + Memory
| Transceiver      | <- Radio
| Power Unit       | <- Battery/Solar
+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">WSN Characteristics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Low Power</td>
            <td className="p-3 border">Battery operated, energy-efficient design</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Small Size</td>
            <td className="p-3 border">Compact nodes for easy deployment</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Self-Organizing</td>
            <td className="p-3 border">Automatic network formation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Multi-hop</td>
            <td className="p-3 border">Data relayed through multiple nodes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data-centric</td>
            <td className="p-3 border">Focus on data rather than node identity</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Routing Protocols</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`WSN Routing Categories:

1. FLAT ROUTING
   - All nodes have same role
   - Examples: SPIN, Directed Diffusion

2. HIERARCHICAL ROUTING
   - Cluster-based organization
   - Examples: LEACH, PEGASIS

3. LOCATION-BASED
   - Geographic routing
   - Examples: GPSR, GAF

LEACH Protocol:
1. Setup Phase: Cluster head election
2. Steady Phase: Data transmission
3. Rotation: Change cluster heads
   (Balances energy consumption)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Environmental:</strong> Forest fire detection, flood monitoring</li>
      <li><strong>Healthcare:</strong> Patient monitoring, drug administration</li>
      <li><strong>Military:</strong> Battlefield surveillance, intrusion detection</li>
      <li><strong>Agriculture:</strong> Soil monitoring, precision farming</li>
      <li><strong>Smart Cities:</strong> Traffic monitoring, pollution sensing</li>
      <li><strong>Industrial:</strong> Machine health monitoring, process control</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Challenges</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`WSN Design Challenges:

ENERGY
- Limited battery life
- Energy harvesting needed
- Sleep scheduling

SCALABILITY
- Thousands of nodes
- Efficient aggregation
- Network management

SECURITY
- Resource constraints
- Key management
- Tamper resistance

RELIABILITY
- Node failures
- Data accuracy
- Fault tolerance`}
      </pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>WSN consists of small, low-power sensor nodes</li>
        <li>Self-organizing with multi-hop communication</li>
        <li>Hierarchical routing (LEACH) improves energy efficiency</li>
        <li>Applications in environment, healthcare, military, IoT</li>
        <li>Main challenge is energy conservation</li>
      </ul>
    </div>
  </div>
);

export default SensorNetworks;
