import React from 'react';

const NetworkDevicesTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Network Devices ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Network Devices
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Network devices are hardware components in computer networking that operate across the OSI and TCP/IP layers. They enable communication, manage traffic, interconnect networks, and provide security.
    </p>

    <h2 className="text-3xl font-bold mt-6">Functions of Network Devices</h2>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li>Transmit and receive data between devices.</li>
      <li>Allow devices to connect efficiently and securely.</li>
      <li>Manage traffic and reduce network congestion.</li>
      <li>Control access and provide security against unauthorized activity.</li>
      <li>Extend network coverage and solve signal attenuation problems.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Common Networking Devices</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Access Point (AP)</h3>
    <p className="text-lg leading-relaxed">
      Creates a wireless local area network (WLAN) allowing devices like laptops, smartphones, or IoT devices to connect to a wired network. Commonly used in offices, homes, and public areas.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Modem</h3>
    <p className="text-lg leading-relaxed">
      Stands for Modulator/Demodulator. Converts digital signals to analog and vice versa for transmission over telephone lines, cable, or wireless. Types include:
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li>DSL Modem: Slower, uses telephone lines.</li>
      <li>Cable Modem: Faster, uses TV cables.</li>
      <li>Wireless Modem: Provides Wi-Fi access.</li>
      <li>Cellular Modem: Uses mobile networks.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Firewall</h3>
    <p className="text-lg leading-relaxed">
      Security device that filters incoming and outgoing network traffic. Blocks unauthorized access and protects against hackers and malware. Can be hardware, software, or cloud-based.
    </p>

    <h3 className="text-2xl font-semibold mt-4">4. Repeater</h3>
    <p className="text-lg leading-relaxed">
      Operates at the Physical Layer. Regenerates and amplifies weak signals to extend network range. Common in large LANs or WANs to overcome signal attenuation.
    </p>

    <h3 className="text-2xl font-semibold mt-4">5. Hub</h3>
    <p className="text-lg leading-relaxed">
      Multiport repeater in star topology. Broadcasts data to all connected devices. Less efficient than switches due to collisions.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li>Active Hub: Amplifies signals.</li>
      <li>Passive Hub: Relays signals without amplification.</li>
      <li>Intelligent Hub: Provides monitoring and management.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">6. Bridge</h3>
    <p className="text-lg leading-relaxed">
      Operates at Data Link Layer (Layer 2). Connects and filters traffic between two LAN segments using MAC addresses. Types:
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li>Transparent Bridge: Learns MAC addresses automatically.</li>
      <li>Source Routing Bridge: Follows sender-specified routes.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">7. Switch</h3>
    <p className="text-lg leading-relaxed">
      Advanced bridge with multiple ports. Operates at Layer 2, selectively forwarding packets and reducing collisions. Types:
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li>Unmanaged Switch: Plug-and-play.</li>
      <li>Managed Switch: Supports VLANs, QoS, and aggregation.</li>
      <li>Layer 2 Switch: For local forwarding.</li>
      <li>Layer 3 Switch: For routing between networks.</li>
      <li>PoE Switch: Provides power and data over the same cable.</li>
      <li>Gigabit Switch: High-speed Ethernet support.</li>
      <li>Modular Switch: Expandable for large networks.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">8. Router</h3>
    <p className="text-lg leading-relaxed">
      Operates at Network Layer (Layer 3). Routes data between networks using IP addresses. Maintains routing tables and divides broadcast domains.
    </p>

    <h3 className="text-2xl font-semibold mt-4">9. Gateway</h3>
    <p className="text-lg leading-relaxed">
      Connects networks using different architectures or protocols. Acts as a protocol converter. Can operate at any OSI layer.
    </p>

    <h3 className="text-2xl font-semibold mt-4">10. Brouter (Bridging Router)</h3>
    <p className="text-lg leading-relaxed">
      Hybrid device with features of both a Bridge and Router. Routes packets between networks and filters traffic within LANs.
    </p>

    <h3 className="text-2xl font-semibold mt-4">11. NIC (Network Interface Card)</h3>
    <p className="text-lg leading-relaxed">
      Hardware adapter enabling a computer to connect to a network. Operates at Layer 2, has a unique MAC address, and can be wired (Ethernet) or wireless (Wi-Fi).
    </p>

  </div>
);

export default NetworkDevicesTutorial;
