import React from 'react';

const ComputerNetworkingTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Basics of Computer Networking ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Basics of Computer Networking
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 18 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      A computer network is a collection of interconnected devices that share resources and information. These devices can include computers, servers, printers, and other hardware. Networks allow efficient exchange of data for applications such as email, file sharing, and internet browsing.
    </p>

    {/* ================= Basic Terminologies ================= */}
    <h2 className="text-3xl font-bold mt-6">Basic Terminologies</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li><strong>Network:</strong> A group of connected devices that communicate and share data.</li>
      <li><strong>Node:</strong> Any device that can send, receive, or forward data (computers, mobiles, printers, servers, etc.).</li>
      <li><strong>Networking Devices:</strong> Hardware that manages and supports networking (routers, switches, hubs, access points).</li>
      <li><strong>Transmission Media:</strong> The medium through which data travels.
        <ul className="list-disc list-inside ml-6">
          <li>Wired: Ethernet cables, optical fiber</li>
          <li>Wireless: Wi-Fi, Bluetooth, infrared</li>
        </ul>
      </li>
      <li><strong>Service Provider Networks:</strong> Networks provided by ISPs or mobile carriers for leased network access.</li>
    </ul>

    {/* ================= How a Network Works ================= */}
    <h2 className="text-3xl font-bold mt-6">How a Computer Network Works</h2>
    <p className="text-lg leading-relaxed">
      Networks are made up of <strong>Nodes</strong> and <strong>Links</strong>. Nodes are devices like computers or routers, and Links are the physical or wireless media connecting them. Networks communicate using <strong>protocols</strong> and each device has a unique <strong>IP Address</strong>. Firewalls monitor traffic to allow or block data based on rules.
    </p>

    {/* ================= Network Architecture ================= */}
    <h2 className="text-3xl font-bold mt-6">Types of Network Architecture</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li><strong>Client-Server Architecture:</strong> Central servers manage client devices.</li>
      <li><strong>Peer-to-Peer (P2P) Architecture:</strong> No central server; all devices can act as client or server.</li>
    </ul>

    {/* ================= Network Devices ================= */}
    <h2 className="text-3xl font-bold mt-6">Network Devices</h2>
    <p className="text-lg leading-relaxed">
      Networks use devices to manage communication between nodes:
    </p>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li><strong>Router:</strong> Connects multiple networks and directs data packets.</li>
      <li><strong>Switch:</strong> Connects devices within a network; forwards data only to the intended device.</li>
      <li><strong>Hub:</strong> Basic device connecting multiple devices; sends data to all devices.</li>
      <li><strong>Bridge:</strong> Connects and filters traffic between networks; reduces network congestion.</li>
      <li><strong>Gateway:</strong> Connects different types of networks; translates protocols.</li>
      <li><strong>Access Point (AP):</strong> Provides wireless connectivity and extends wired networks to Wi-Fi.</li>
      <li><strong>Modem:</strong> Converts digital signals to analog and vice versa; provides internet access.</li>
      <li><strong>Firewall:</strong> Monitors and controls incoming/outgoing traffic for security.</li>
    </ul>

    {/* ================= Goals of Networks ================= */}
    <h2 className="text-3xl font-bold mt-6">Goals of Networks</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Convenience: Simplify computer use for users.</li>
      <li>Efficiency: Optimize hardware resources for better performance.</li>
      <li>Resource Management: Allocate CPU, memory, I/O, and storage efficiently.</li>
      <li>Security & Protection: Safeguard data from unauthorized access.</li>
      <li>Reliability & Fault Tolerance: Ensure smooth operations and recovery from failures.</li>
      <li>Scalability: Support growth in users, devices, and processes.</li>
    </ul>

    {/* ================= Uses of Computer Networks ================= */}
    <h2 className="text-3xl font-bold mt-6">Uses of Computer Networks</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Communication: Email, chat, and video conferencing.</li>
      <li>Resource Sharing: Printers, scanners, and files.</li>
      <li>Remote Access: Access systems and data from anywhere.</li>
      <li>Collaboration: Teamwork on projects, sharing and reviewing work.</li>
      <li>E-commerce: Online shopping and secure payment systems.</li>
      <li>Education: Support online learning, research, and student-teacher collaboration.</li>
    </ul>

    {/* ================= Characteristics of Networks ================= */}
    <h2 className="text-3xl font-bold mt-6">Characteristics of Networks</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li><strong>Security:</strong> Protects data using firewalls, encryption, and authentication.</li>
      <li><strong>Reliability:</strong> Ensures data and resources are always available; redundancy prevents downtime.</li>
      <li><strong>Scalability:</strong> Ability to grow without performance loss.</li>
      <li><strong>High Performance:</strong> Fast data transfer, low latency, high throughput.</li>
      <li><strong>Quality of Service (QoS):</strong> Prioritizes important data for smooth communication.</li>
    </ul>

  </div>
);

export default ComputerNetworkingTutorial;
