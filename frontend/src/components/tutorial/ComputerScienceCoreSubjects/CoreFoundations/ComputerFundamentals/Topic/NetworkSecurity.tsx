import React from 'react';

const NetworkSecurityTheory: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Network Security Overview ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is Network Security?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Network security refers to the practices and measures designed to protect the integrity, confidentiality, and availability of computer networks and the data they carry. It involves implementing tools, technologies, policies, and procedures to safeguard systems from unauthorized access, misuse, and cyberattacks. The goal is to ensure that data transmitted across the network remains safe and secure, protecting sensitive information from hackers and other threats.
    </p>

    <h2 className="text-3xl font-bold mt-6">How Does Network Security Work?</h2>
    <p className="text-lg leading-relaxed">
      Network security uses multiple layers of protection at both the network edge and within the internal environment. Each layer enforces rules and controls to regulate access to network resources. Authorized users can safely utilize the network, while threats are blocked.
    </p>

    <ul className="list-disc list-inside ml-6 text-lg space-y-2">
      <li>
        <strong>Physical Network Security:</strong> Prevents unauthorized physical access to networking equipment using biometric systems, access cards, and other security devices.
      </li>
      <li>
        <strong>Technical Network Security:</strong> Protects stored data and data in transit from unauthorized users and malicious activities.
      </li>
      <li>
        <strong>Administrative Network Security:</strong> Ensures proper user permissions, authorization processes, and network policy enforcement. It also identifies necessary infrastructure improvements.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Types of Network Security</h2>
    <ul className="list-disc list-inside ml-6 text-lg space-y-2">
      <li>
        <strong>Email Security:</strong> Protects email accounts and their contents from unauthorized access, phishing attacks, and data breaches.
      </li>
      <li>
        <strong>Network Segmentation:</strong> Divides network traffic into categories, enforcing security policies and isolating suspicious devices.
      </li>
      <li>
        <strong>Access Control:</strong> Identifies users and devices, enforcing security policies and restricting unauthorized access through Network Access Control (NAC).
      </li>
      <li>
        <strong>Sandboxing:</strong> Executes files or code in a secure, isolated environment to detect and block malicious activity.
      </li>
      <li>
        <strong>Cloud Network Security:</strong> Protects data stored in cloud environments, ensuring safe access and preventing unauthorized use.
      </li>
      <li>
        <strong>Web Security:</strong> Monitors internet usage, blocks malicious websites, and protects organizational websites from vulnerabilities.
      </li>
      <li>
        <strong>Intrusion Prevention System (IPS):</strong> Monitors network activity for malicious behavior, blocks threats, and generates reports in real time.
      </li>
      <li>
        <strong>Antivirus & Anti-Malware Software:</strong> Prevents malware, viruses, Trojans, and worms from entering the network and remediates infections.
      </li>
      <li>
        <strong>Firewall Security:</strong> Monitors and filters incoming and outgoing traffic to prevent unauthorized access while allowing legitimate communication.
      </li>
      <li>
        <strong>Application Security:</strong> Protects sensitive data and code at the application level, including during development and deployment.
      </li>
      <li>
        <strong>Wireless Security:</strong> Secures wireless networks against unauthorized access and exploits targeting wireless communication.
      </li>
      <li>
        <strong>Mobile Device Security:</strong> Regulates which mobile devices can connect, monitors traffic, and ensures secure connections in BYOD environments.
      </li>
      <li>
        <strong>Industrial Network Security:</strong> Protects Industrial Control Systems (ICS) by segmenting OT networks, monitoring devices, and integrating OT insights into IT security.
      </li>
      <li>
        <strong>VPN Security:</strong> Encrypts communication between devices and networks, protecting data and privacy using IPsec or SSL protocols.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Benefits of Network Security</h2>
    <ul className="list-disc list-inside ml-6 text-lg space-y-2">
      <li><strong>Protects Sensitive Data:</strong> Ensures secure access to client and organizational information.</li>
      <li><strong>Prevents Financial Loss:</strong> Reduces the risk of losses due to data breaches or cyber incidents.</li>
      <li><strong>Preserves Reputation:</strong> Maintains trust and credibility by protecting confidential information.</li>
    </ul>

  </div>
);

export default NetworkSecurityTheory;
