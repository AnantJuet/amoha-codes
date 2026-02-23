import React from 'react';

const CNIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is a Computer Network?
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Computer Network is a collection of interconnected computing devices that can exchange data and share
      resources with each other. These devices, also called nodes, communicate using a set of rules known as
      protocols over wired or wireless connections. Computer networks form the foundation of modern digital
      communication and enable services like the Internet, email, file sharing, and video conferencing.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      A Computer Network is defined as a telecommunications network that allows computers and other devices to
      exchange data. The connection between nodes can be established through cables (wired) or through radio
      waves (wireless). The primary purpose of networking is to enable communication, resource sharing, and
      collaborative processing among connected devices.
    </p>

    {/* Visual Diagram */}
    <h2 className="text-3xl font-bold mt-8">Basic Network Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
    +----------+        +----------+        +----------+
    | Computer |        |  Server  |        | Computer |
    |    A     |        |          |        |    B     |
    +----+-----+        +----+-----+        +----+-----+
         |                   |                   |
         |                   |                   |
    =====+=========+=========+=========+=========+=====
                   |                   |
              +----+-----+        +----+-----+
              |  Router  |        | Printer  |
              +----------+        +----------+
                   |
              [Internet]

      Legend: ===== Network Connection (LAN/Ethernet)
`}</pre>
    </div>

    {/* Components of Network */}
    <h2 className="text-3xl font-bold mt-8">Components of a Computer Network</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Nodes</td>
            <td className="p-3 border">Devices connected to the network (computers, servers, printers, smartphones)</td>
          </tr>
          <tr>
            <td className="p-3 border">Links</td>
            <td className="p-3 border">Communication pathways (cables, wireless connections) that connect nodes</td>
          </tr>
          <tr>
            <td className="p-3 border">Network Interface Card (NIC)</td>
            <td className="p-3 border">Hardware that enables devices to connect to the network</td>
          </tr>
          <tr>
            <td className="p-3 border">Network Devices</td>
            <td className="p-3 border">Hubs, switches, routers, modems that facilitate communication</td>
          </tr>
          <tr>
            <td className="p-3 border">Protocols</td>
            <td className="p-3 border">Rules governing communication (TCP/IP, HTTP, FTP)</td>
          </tr>
          <tr>
            <td className="p-3 border">Network Software</td>
            <td className="p-3 border">Operating systems and applications that manage network operations</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Objectives of Computer Networks */}
    <h2 className="text-3xl font-bold mt-8">Objectives of Computer Networks</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Resource Sharing:</strong> Allow multiple users to share hardware resources like printers,
        scanners, and storage devices, reducing costs and improving efficiency.
      </li>
      <li>
        <strong>Data Sharing:</strong> Enable the exchange of files and information between computers
        located at different places, facilitating collaboration.
      </li>
      <li>
        <strong>Communication:</strong> Provide means for electronic communication through email, instant
        messaging, video conferencing, and VoIP.
      </li>
      <li>
        <strong>Remote Access:</strong> Allow users to access data and applications from remote locations,
        enabling work from anywhere.
      </li>
      <li>
        <strong>Reliability:</strong> Provide backup and redundancy by maintaining copies of data on
        multiple systems.
      </li>
      <li>
        <strong>Cost Reduction:</strong> Reduce hardware costs through shared resources and eliminate the
        need for individual peripherals at each workstation.
      </li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Computer Networks</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Resource Sharing</h3>
        <p className="text-sm">Share expensive hardware like printers, scanners, and storage devices among multiple users.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Centralized Management</h3>
        <p className="text-sm">Centrally manage data, applications, and security policies from a single location.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Enhanced Communication</h3>
        <p className="text-sm">Enable fast and efficient communication through email, chat, and video calls.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Scalability</h3>
        <p className="text-sm">Easily add new devices and users to the network as the organization grows.</p>
      </div>
    </div>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of Computer Networks</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Security Risks:</strong> Networks are vulnerable to hacking, malware, and unauthorized access</li>
      <li><strong>Setup Cost:</strong> Initial setup requires significant investment in hardware and software</li>
      <li><strong>Dependency:</strong> Network failure can disrupt operations for all connected users</li>
      <li><strong>Maintenance:</strong> Requires skilled personnel for ongoing maintenance and troubleshooting</li>
      <li><strong>Virus Spread:</strong> Malware can spread quickly across connected devices</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Computer Networks</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Internet:</strong> The global network connecting billions of devices worldwide</li>
      <li><strong>Banking:</strong> ATM networks, online banking, and financial transactions</li>
      <li><strong>E-commerce:</strong> Online shopping, payment processing, and inventory management</li>
      <li><strong>Healthcare:</strong> Telemedicine, electronic health records, and medical imaging</li>
      <li><strong>Education:</strong> E-learning platforms, virtual classrooms, and digital libraries</li>
      <li><strong>Entertainment:</strong> Streaming services, online gaming, and social media</li>
      <li><strong>Business:</strong> Email, video conferencing, and collaborative work tools</li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Real-World Example</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-3">
      <p className="leading-relaxed">
        <strong>Office Network Scenario:</strong> Consider a small office with 10 employees. Instead of
        buying 10 printers, the office sets up a network where all computers are connected to a single
        shared printer. Additionally, a central file server stores all documents, allowing any employee
        to access files from their workstation. This setup reduces costs by 90% for printing hardware
        while improving collaboration and data management.
      </p>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>A network requires at least two connected devices to exist</li>
      <li>Networks use protocols to ensure proper communication between devices</li>
      <li>The Internet is the largest computer network in the world</li>
      <li>Networks can be classified by size: PAN, LAN, MAN, WAN</li>
      <li>Security is a critical consideration in network design and management</li>
      <li>Modern networks support both wired and wireless connections</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Understand the basic terminology: nodes, links, protocols</li>
        <li>Know the difference between various network types (LAN, WAN, MAN)</li>
        <li>Understand network components and their functions</li>
        <li>Be familiar with the layered architecture concept</li>
      </ul>
    </div>
  </div>
);

export default CNIntroduction;
