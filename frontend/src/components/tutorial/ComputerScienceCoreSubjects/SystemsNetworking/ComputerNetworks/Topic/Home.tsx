import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Computer Networks Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Computer Networks Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Welcome to the comprehensive Computer Networks tutorial on Amoha Codes. Computer Networks form the backbone of
      modern digital communication, enabling devices to exchange data and share resources across the globe. This tutorial
      covers all fundamental and advanced concepts required for academic excellence, competitive examinations, and
      technical interviews.
    </p>

    {/* What You Will Learn */}
    <h2 className="text-3xl font-bold mt-8">What You Will Learn</h2>
    <p className="leading-relaxed">
      This tutorial provides in-depth coverage of computer networking concepts, from basic principles to advanced topics.
      Whether you're preparing for university examinations, GATE, technical interviews, or seeking to understand how the
      Internet and modern networks function, this guide will help you master the subject.
    </p>

    {/* Course Structure */}
    <h2 className="text-3xl font-bold mt-8">Course Structure</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S.No</th>
            <th className="p-3 border">Topic</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Introduction</td>
            <td className="p-3 border">Network basics, types, topologies, and components</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">OSI Model</td>
            <td className="p-3 border">All 7 layers of OSI reference model in detail</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">TCP/IP Model</td>
            <td className="p-3 border">Internet protocol suite and its layers</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Physical Layer</td>
            <td className="p-3 border">Transmission media, multiplexing, and switching</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Data Link Layer</td>
            <td className="p-3 border">Framing, error detection, flow control, MAC protocols</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Network Layer</td>
            <td className="p-3 border">IP addressing, subnetting, routing algorithms, IPv4/IPv6</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Transport Layer</td>
            <td className="p-3 border">TCP, UDP, congestion control, flow control</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">Application Layer</td>
            <td className="p-3 border">HTTP, DNS, DHCP, FTP, SMTP, and other protocols</td>
          </tr>
          <tr>
            <td className="p-3 border">9</td>
            <td className="p-3 border">Network Security</td>
            <td className="p-3 border">Cryptography, firewalls, SSL/TLS, VPN</td>
          </tr>
          <tr>
            <td className="p-3 border">10</td>
            <td className="p-3 border">Wireless Networks</td>
            <td className="p-3 border">Wi-Fi, Bluetooth, mobile networks, IEEE 802.11</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Why Learn Computer Networks */}
    <h2 className="text-3xl font-bold mt-8">Why Learn Computer Networks?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Foundation of Internet:</strong> Understanding how the Internet works at a fundamental level</li>
      <li><strong>Essential for System Design:</strong> Critical knowledge for designing distributed systems and web applications</li>
      <li><strong>Interview Preparation:</strong> A core subject in technical interviews for software engineering and networking roles</li>
      <li><strong>Academic Requirement:</strong> Mandatory subject in computer science and IT curricula worldwide</li>
      <li><strong>GATE & Competitive Exams:</strong> Important topic with significant weightage in GATE CS/IT</li>
      <li><strong>Career Opportunities:</strong> Opens doors to network engineering, cybersecurity, and cloud computing</li>
    </ul>

    {/* Key Concepts Covered */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts Covered</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Network Models</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>OSI 7-Layer Model</li>
          <li>TCP/IP 4-Layer Model</li>
          <li>Protocol Data Units (PDUs)</li>
          <li>Encapsulation & Decapsulation</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">IP Addressing</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>IPv4 and IPv6 Addressing</li>
          <li>Subnetting & CIDR</li>
          <li>NAT & VLSM</li>
          <li>Address Classes</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Protocols</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>TCP & UDP</li>
          <li>HTTP, HTTPS, FTP</li>
          <li>DNS, DHCP, SMTP</li>
          <li>ARP, ICMP, OSPF, BGP</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Security</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Encryption (Symmetric & Asymmetric)</li>
          <li>SSL/TLS Protocols</li>
          <li>Firewalls & VPN</li>
          <li>Digital Signatures & Certificates</li>
        </ul>
      </div>
    </div>

    {/* Prerequisites */}
    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Basic understanding of computer architecture</li>
      <li>Familiarity with binary and hexadecimal number systems</li>
      <li>Basic programming knowledge (helpful but not mandatory)</li>
      <li>Understanding of basic data structures</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Network Knowledge</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Web Development:</strong> Understanding client-server communication, HTTP protocols</li>
      <li><strong>Cloud Computing:</strong> Designing and managing cloud infrastructure and services</li>
      <li><strong>Cybersecurity:</strong> Implementing security measures and understanding network vulnerabilities</li>
      <li><strong>IoT Development:</strong> Building connected devices and sensor networks</li>
      <li><strong>Network Administration:</strong> Managing enterprise networks and troubleshooting issues</li>
      <li><strong>System Design:</strong> Architecting scalable distributed systems</li>
    </ul>

    {/* Getting Started */}
    <h2 className="text-3xl font-bold mt-8">Getting Started</h2>
    <p className="leading-relaxed">
      Begin your journey by exploring the Introduction section, which covers the fundamental concepts of computer
      networking including types of networks, topologies, and network components. Each topic builds upon previous
      concepts, so following the sequential order is recommended for beginners. Experienced learners can navigate
      directly to specific topics of interest using the sidebar.
    </p>

    <p className="leading-relaxed mt-4">
      Each topic includes detailed explanations, diagrams, examples, and practice problems to reinforce your
      understanding. The content is designed to match the depth and rigor expected in academic courses, GATE
      preparation, and technical interviews.
    </p>

    {/* Important Topics for GATE */}
    <h2 className="text-3xl font-bold mt-8">Important Topics for GATE</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>IP Addressing and Subnetting</li>
      <li>TCP/UDP Protocols and Headers</li>
      <li>Sliding Window Protocols (Go-Back-N, Selective Repeat)</li>
      <li>Error Detection (CRC, Hamming Code)</li>
      <li>Routing Algorithms (Distance Vector, Link State)</li>
      <li>Congestion Control Algorithms</li>
      <li>DNS and DHCP</li>
      <li>Network Security Basics</li>
    </ul>
  </div>
);

export default Home;
