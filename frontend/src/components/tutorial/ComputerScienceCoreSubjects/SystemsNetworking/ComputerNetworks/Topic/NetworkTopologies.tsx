import React from 'react';

const NetworkTopologies: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Topologies
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Network topology refers to the arrangement or layout of different elements (nodes, links) in a computer
      network. It describes how devices are interconnected and how data flows between them. Topology can be
      physical (actual layout of cables and devices) or logical (how data flows regardless of physical design).
      The choice of topology affects network performance, cost, reliability, and scalability.
    </p>

    {/* Types Overview */}
    <h2 className="text-3xl font-bold mt-8">Types of Network Topologies</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg text-center">
        <h3 className="font-bold text-lg">Bus</h3>
        <p className="text-sm">Single backbone cable</p>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <h3 className="font-bold text-lg">Star</h3>
        <p className="text-sm">Central hub/switch</p>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <h3 className="font-bold text-lg">Ring</h3>
        <p className="text-sm">Circular connection</p>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <h3 className="font-bold text-lg">Mesh</h3>
        <p className="text-sm">Multiple interconnections</p>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <h3 className="font-bold text-lg">Tree</h3>
        <p className="text-sm">Hierarchical structure</p>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <h3 className="font-bold text-lg">Hybrid</h3>
        <p className="text-sm">Combination of topologies</p>
      </div>
    </div>

    {/* Bus Topology */}
    <h2 className="text-3xl font-bold mt-8">1. Bus Topology</h2>
    <p className="leading-relaxed">
      In bus topology, all devices are connected to a single backbone cable (the bus). Data sent by any
      device travels along the bus in both directions until it reaches the destination. Each end of the
      bus has a terminator to prevent signal reflection.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Bus Topology:

  Terminator                                              Terminator
      |                                                        |
      T========+=========+=========+=========+=========+======T
               |         |         |         |         |
            +--+--+   +--+--+   +--+--+   +--+--+   +--+--+
            | PC1 |   | PC2 |   | PC3 |   | PC4 |   | PC5 |
            +-----+   +-----+   +-----+   +-----+   +-----+

  ======== : Backbone Cable (Coaxial/Ethernet)
  T        : Terminator (absorbs signal, prevents reflection)
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Simple and easy to install</td>
            <td className="p-3 border">Single point of failure (backbone)</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost-effective (less cabling)</td>
            <td className="p-3 border">Performance degrades with more devices</td>
          </tr>
          <tr>
            <td className="p-3 border">Works well for small networks</td>
            <td className="p-3 border">Difficult to troubleshoot</td>
          </tr>
          <tr>
            <td className="p-3 border">Failure of one node does not affect others</td>
            <td className="p-3 border">Limited cable length and number of nodes</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Star Topology */}
    <h2 className="text-3xl font-bold mt-8">2. Star Topology</h2>
    <p className="leading-relaxed">
      In star topology, all devices are connected to a central device (hub or switch). The central device
      acts as a server, and the peripheral devices act as clients. All communication passes through the
      central hub. This is the most common topology used in modern LANs.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Star Topology:

                    +-----+
                    | PC1 |
                    +--+--+
                       |
        +-----+     +--+--+     +-----+
        | PC2 +-----+ HUB/+-----+ PC3 |
        +-----+     |SWITCH     +-----+
                    +--+--+
                       |
        +-----+        |        +-----+
        | PC4 +--------+--------+ PC5 |
        +-----+                 +-----+

  Central device: Hub (Layer 1) or Switch (Layer 2)
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Easy to install and manage</td>
            <td className="p-3 border">Central device failure brings down entire network</td>
          </tr>
          <tr>
            <td className="p-3 border">Easy to detect and isolate faults</td>
            <td className="p-3 border">Requires more cable than bus topology</td>
          </tr>
          <tr>
            <td className="p-3 border">Failure of one node does not affect network</td>
            <td className="p-3 border">Performance depends on central device capacity</td>
          </tr>
          <tr>
            <td className="p-3 border">Easy to add new devices</td>
            <td className="p-3 border">Higher cost due to central device and cabling</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Ring Topology */}
    <h2 className="text-3xl font-bold mt-8">3. Ring Topology</h2>
    <p className="leading-relaxed">
      In ring topology, each device is connected to exactly two other devices, forming a circular pathway
      for data. Data travels in one direction (unidirectional) around the ring until it reaches its
      destination. Token Ring and FDDI use this topology.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Ring Topology:

              +-----+
              | PC1 |
              +--+--+
                 |
    +-----+      |      +-----+
    | PC5 +------+------+ PC2 |
    +--+--+             +--+--+
       |                   |
       |    Data Flow      |
       |    --------->     |
       |                   |
    +--+--+             +--+--+
    | PC4 +------+------+ PC3 |
    +-----+      |      +-----+
                 |
         (Circular Path)

  Data flows in one direction (unidirectional)
  Token passing controls access to the network
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Equal access to all nodes (token passing)</td>
            <td className="p-3 border">Single break can disable entire network</td>
          </tr>
          <tr>
            <td className="p-3 border">No collisions (deterministic)</td>
            <td className="p-3 border">Difficult to add or remove devices</td>
          </tr>
          <tr>
            <td className="p-3 border">Performs better under heavy load than bus</td>
            <td className="p-3 border">Troubleshooting is difficult</td>
          </tr>
          <tr>
            <td className="p-3 border">Predictable performance</td>
            <td className="p-3 border">Slower than star topology</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Mesh Topology */}
    <h2 className="text-3xl font-bold mt-8">4. Mesh Topology</h2>
    <p className="leading-relaxed">
      In mesh topology, each device is connected to every other device in the network. This provides
      multiple paths for data transmission, ensuring high reliability and fault tolerance. Mesh can be
      full mesh (every device connected to every other) or partial mesh (some devices have multiple connections).
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Full Mesh Topology (4 nodes):

              +-----+
              | PC1 |
              +--+--+
             /   |   \\
            /    |    \\
           /     |     \\
    +-----+      |      +-----+
    | PC4 +------+------+ PC2 |
    +--+--+      |      +--+--+
       \\        |        /
        \\       |       /
         \\      |      /
          +-----+-----+
              | PC3 |
              +-----+

  Number of links in full mesh = n(n-1)/2
  For 4 nodes: 4(4-1)/2 = 6 links
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">High reliability and fault tolerance</td>
            <td className="p-3 border">Very expensive (many cables and ports)</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiple paths ensure data delivery</td>
            <td className="p-3 border">Complex installation and management</td>
          </tr>
          <tr>
            <td className="p-3 border">No traffic congestion</td>
            <td className="p-3 border">Impractical for large number of devices</td>
          </tr>
          <tr>
            <td className="p-3 border">Easy to diagnose faults</td>
            <td className="p-3 border">Requires multiple NICs per device</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Formula:</strong> For n devices in a full mesh topology:<br/>
        Number of cables = n(n-1)/2<br/>
        Number of I/O ports per device = (n-1)<br/>
        Example: For 5 devices: Cables = 5(4)/2 = 10, Ports per device = 4
      </p>
    </div>

    {/* Tree Topology */}
    <h2 className="text-3xl font-bold mt-8">5. Tree Topology</h2>
    <p className="leading-relaxed">
      Tree topology, also known as hierarchical topology, combines characteristics of bus and star
      topologies. It has a root node (main hub) at the top, with secondary hubs connected to it, forming
      a tree-like structure. It is commonly used in wide area networks.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Tree Topology:

                    +--------+
                    | Root   |  (Level 0)
                    |  Hub   |
                    +---+----+
                        |
           +------------+------------+
           |                         |
       +---+----+               +----+---+
       | Hub 1  | (Level 1)     | Hub 2  |
       +---+----+               +---+----+
           |                        |
     +-----+-----+            +-----+-----+
     |     |     |            |     |     |
   +-+-+ +-+-+ +-+-+        +-+-+ +-+-+ +-+-+
   |PC1| |PC2| |PC3|        |PC4| |PC5| |PC6|
   +---+ +---+ +---+        +---+ +---+ +---+
                                (Level 2)
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Scalable and extensible</td>
            <td className="p-3 border">Root hub failure affects entire network</td>
          </tr>
          <tr>
            <td className="p-3 border">Easy to manage hierarchically</td>
            <td className="p-3 border">More cabling required</td>
          </tr>
          <tr>
            <td className="p-3 border">Error detection is easier</td>
            <td className="p-3 border">Dependent on backbone cable</td>
          </tr>
          <tr>
            <td className="p-3 border">Point-to-point wiring for segments</td>
            <td className="p-3 border">Configuration becomes complex as it grows</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Hybrid Topology */}
    <h2 className="text-3xl font-bold mt-8">6. Hybrid Topology</h2>
    <p className="leading-relaxed">
      Hybrid topology is a combination of two or more different topologies. For example, a star-bus
      topology combines star and bus topologies. Large enterprise networks often use hybrid topologies
      to leverage the advantages of multiple topology types.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Hybrid Topology (Star-Ring):

        Star Section               Ring Section

           +-----+                    +-----+
           | PC1 |                    | PC5 |
           +--+--+                    +--+--+
              |                          |
  +-----+  +--+--+  +-----+          +--+-+--+
  | PC2 +--+ HUB +--+ PC3 |          |  PC6  |
  +-----+  +--+--+  +-----+          +---+---+
              |                          |
           +--+--+                    +--+--+
           | PC4 |--------------------+ PC7 |
           +-----+   Connection       +-----+

  Different sections use different topologies
  Connected via gateways or routers
`}</pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Topology Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Parameter</th>
            <th className="p-3 border">Bus</th>
            <th className="p-3 border">Star</th>
            <th className="p-3 border">Ring</th>
            <th className="p-3 border">Mesh</th>
            <th className="p-3 border">Tree</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border">Cabling</td>
            <td className="p-3 border">Minimum</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Maximum</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border">Reliability</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border">Scalability</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Difficult</td>
            <td className="p-3 border">Difficult</td>
            <td className="p-3 border">Very Good</td>
          </tr>
          <tr>
            <td className="p-3 border">Troubleshooting</td>
            <td className="p-3 border">Difficult</td>
            <td className="p-3 border">Easy</td>
            <td className="p-3 border">Difficult</td>
            <td className="p-3 border">Easy</td>
            <td className="p-3 border">Moderate</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Bus topology uses terminators to prevent signal reflection</li>
      <li>Star topology is most common in modern LANs using switches</li>
      <li>Ring topology provides equal access through token passing</li>
      <li>Full mesh requires n(n-1)/2 links for n devices</li>
      <li>Tree topology is hierarchical, combining bus and star</li>
      <li>Physical and logical topologies may differ in the same network</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Calculate number of links in mesh topology: n(n-1)/2</li>
        <li>Know which topology has single point of failure (Bus, Star central device)</li>
        <li>Understand token passing in ring topology</li>
        <li>Compare reliability: Mesh is greater than Star is greater than Ring is greater than Bus</li>
        <li>Ethernet uses bus/star topology, Token Ring uses ring topology</li>
      </ul>
    </div>
  </div>
);

export default NetworkTopologies;
