import React from 'react';

const NetworkTopologyTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Network Topology ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Types of Network Topology
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Nov, 2025</p>

    <p className="text-lg leading-relaxed">
      Network topology defines the arrangement of devices (nodes) and connections (links) in a network. It determines how data flows, how devices are interconnected, and impacts performance, cost, reliability, and security.
    </p>

    <p className="text-lg leading-relaxed">
      <strong>Physical Topology:</strong> The actual layout of cables and devices.<br />
      <strong>Logical Topology:</strong> How data moves across the network, independent of physical layout.
    </p>

    {/* ================= Topology Types ================= */}
    <h2 className="text-3xl font-bold mt-6">1. Point-to-Point Topology</h2>
    <p className="text-lg leading-relaxed">
      Simplest topology connecting two nodes directly: one sender and one receiver. Offers high bandwidth.
    </p>

    {/* ================= Mesh Topology ================= */}
    <h2 className="text-3xl font-bold mt-6">2. Mesh Topology</h2>
    <p className="text-lg leading-relaxed">
      Every device is connected to every other device via dedicated links. Protocols like AHCP and DHCP are used.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li>Total ports per device = N - 1</li>
      <li>Total links required = N * (N-1) / 2</li>
      <li><strong>Advantages:</strong> Fast communication, robust, reliable, secure.</li>
      <li><strong>Disadvantages:</strong> Complex installation, high cabling and maintenance cost.</li>
      <li><strong>Example:</strong> Internet backbone, military communication, aircraft navigation.</li>
    </ul>

    {/* ================= Star Topology ================= */}
    <h2 className="text-3xl font-bold mt-6">3. Star Topology</h2>
    <p className="text-lg leading-relaxed">
      All devices connect to a central hub. The hub can be active (intelligent) or passive (broadcasting). Commonly uses RJ-45 or coaxial cables.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Advantages:</strong> Easy setup, robust (single link failure only affects that link), easy fault isolation, cost-effective cabling.</li>
      <li><strong>Disadvantages:</strong> Hub failure affects the entire network, performance depends on hub, higher installation cost.</li>
      <li><strong>Example:</strong> LAN in offices, wireless networks.</li>
    </ul>

    {/* ================= Bus Topology ================= */}
    <h2 className="text-3xl font-bold mt-6">4. Bus Topology</h2>
    <p className="text-lg leading-relaxed">
      All devices share a single backbone cable. Bi-directional and multipoint connection. Uses MAC protocols like CSMA, TDMA, Pure Aloha.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Advantages:</strong> Minimal cabling, low cost, simple installation.</li>
      <li><strong>Disadvantages:</strong> Backbone failure crashes network, collisions with heavy traffic, limited security, adding new devices slows the network.</li>
      <li><strong>Example:</strong> Ethernet LAN, cable TV networks.</li>
    </ul>

    {/* ================= Ring Topology ================= */}
    <h2 className="text-3xl font-bold mt-6">5. Ring Topology</h2>
    <p className="text-lg leading-relaxed">
      Devices connected in a circular fashion, with data passing through nodes sequentially. Token Ring protocol is used. Dual-ring allows bidirectional flow.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Advantages:</strong> High-speed transmission, minimal collisions, low cost.</li>
      <li><strong>Disadvantages:</strong> Single node failure can disrupt network, difficult troubleshooting, less secure.</li>
    </ul>

    {/* ================= Tree Topology ================= */}
    <h2 className="text-3xl font-bold mt-6">6. Tree Topology</h2>
    <p className="text-lg leading-relaxed">
      Hierarchical structure based on Star topology. Central hub connects to secondary hubs, which connect to devices. Protocols like DHCP and SAC are used.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Advantages:</strong> Easier to add devices, isolates sections, hierarchical control.</li>
      <li><strong>Disadvantages:</strong> Central hub failure affects entire network, high cabling cost, complex reconfiguration.</li>
      <li><strong>Example:</strong> Large organizational hierarchies.</li>
    </ul>

    {/* ================= Hybrid Topology ================= */}
    <h2 className="text-3xl font-bold mt-6">7. Hybrid Topology</h2>
    <p className="text-lg leading-relaxed">
      Combination of two or more different topologies, allowing flexibility in design and scalability. Each sub-topology uses its own protocol.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Advantages:</strong> Flexible, easily expandable.</li>
      <li><strong>Disadvantages:</strong> Complex to design, expensive hubs, high infrastructure cost.</li>
    </ul>

  </div>
);

export default NetworkTopologyTutorial;
