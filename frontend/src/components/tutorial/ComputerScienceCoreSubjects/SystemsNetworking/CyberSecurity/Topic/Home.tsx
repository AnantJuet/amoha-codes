import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Cybersecurity Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cybersecurity Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Welcome to the comprehensive Cybersecurity tutorial on Amoha Codes. Cybersecurity is the practice of protecting
      systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing,
      or destroying sensitive information, extorting money, or interrupting normal business processes. This tutorial
      covers all fundamental and advanced concepts required for academic excellence, competitive examinations, and
      technical interviews.
    </p>

    {/* What You Will Learn */}
    <h2 className="text-3xl font-bold mt-8">What You Will Learn</h2>
    <p className="leading-relaxed">
      This tutorial provides in-depth coverage of cybersecurity concepts, from basic principles to advanced topics.
      Whether you're preparing for university examinations, security certifications, technical interviews, or seeking
      to understand how to protect digital assets and infrastructure, this guide will help you master the subject.
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
            <td className="p-3 border">Cybersecurity fundamentals, CIA Triad, threats, and attack vectors</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Cryptography</td>
            <td className="p-3 border">Symmetric, asymmetric encryption, hash functions, digital signatures</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Network Security</td>
            <td className="p-3 border">Firewalls, IDS/IPS, VPN, SSL/TLS protocols</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Web Security</td>
            <td className="p-3 border">OWASP Top 10, XSS, SQL Injection, CSRF attacks and prevention</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Authentication & Authorization</td>
            <td className="p-3 border">OAuth, JWT, MFA, session management, access control</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Malware</td>
            <td className="p-3 border">Viruses, worms, trojans, ransomware, and malware analysis</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Ethical Hacking</td>
            <td className="p-3 border">Penetration testing, vulnerability assessment, social engineering</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">Security Protocols</td>
            <td className="p-3 border">IPSec, SSH, HTTPS, Kerberos, and other security protocols</td>
          </tr>
          <tr>
            <td className="p-3 border">9</td>
            <td className="p-3 border">Tools & Frameworks</td>
            <td className="p-3 border">Nmap, Wireshark, Metasploit, NIST, MITRE ATT&CK</td>
          </tr>
          <tr>
            <td className="p-3 border">10</td>
            <td className="p-3 border">Incident Response</td>
            <td className="p-3 border">IR lifecycle, digital forensics, threat intelligence</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Why Learn Cybersecurity */}
    <h2 className="text-3xl font-bold mt-8">Why Learn Cybersecurity?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>High Demand:</strong> Cybersecurity professionals are in high demand across all industries worldwide</li>
      <li><strong>Protecting Digital Assets:</strong> Understanding how to safeguard sensitive data and critical systems</li>
      <li><strong>Career Opportunities:</strong> Opens doors to roles like Security Analyst, Penetration Tester, CISO, and more</li>
      <li><strong>Essential Knowledge:</strong> Critical for software developers, system administrators, and IT professionals</li>
      <li><strong>Certifications:</strong> Foundation for certifications like CISSP, CEH, CompTIA Security+, OSCP</li>
      <li><strong>Evolving Threat Landscape:</strong> Stay ahead of emerging threats and attack techniques</li>
    </ul>

    {/* Key Concepts Covered */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts Covered</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Security Fundamentals</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>CIA Triad (Confidentiality, Integrity, Availability)</li>
          <li>Defense in Depth</li>
          <li>Cyber Kill Chain</li>
          <li>Security Policies and Governance</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Cryptography</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Symmetric & Asymmetric Encryption</li>
          <li>Hash Functions (MD5, SHA)</li>
          <li>Digital Signatures & Certificates</li>
          <li>Public Key Infrastructure (PKI)</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Web Security</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>OWASP Top 10 Vulnerabilities</li>
          <li>XSS, SQL Injection, CSRF</li>
          <li>Authentication & Session Management</li>
          <li>Input Validation & Sanitization</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Network Security</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Firewalls & IDS/IPS</li>
          <li>VPN & Secure Tunneling</li>
          <li>SSL/TLS & HTTPS</li>
          <li>Network Segmentation & DMZ</li>
        </ul>
      </div>
    </div>

    {/* Prerequisites */}
    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Basic understanding of computer networks (TCP/IP, HTTP)</li>
      <li>Familiarity with operating systems (Windows, Linux)</li>
      <li>Basic programming knowledge (Python, JavaScript helpful)</li>
      <li>Understanding of web technologies (HTML, HTTP, APIs)</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Cybersecurity Knowledge</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Enterprise Security:</strong> Protecting corporate networks, data centers, and cloud infrastructure</li>
      <li><strong>Web Application Security:</strong> Securing websites and web applications from attacks</li>
      <li><strong>Network Defense:</strong> Implementing firewalls, IDS/IPS, and secure network architectures</li>
      <li><strong>Incident Response:</strong> Detecting, analyzing, and responding to security incidents</li>
      <li><strong>Compliance:</strong> Meeting regulatory requirements like GDPR, HIPAA, PCI-DSS</li>
      <li><strong>Penetration Testing:</strong> Identifying vulnerabilities before attackers do</li>
    </ul>

    {/* Getting Started */}
    <h2 className="text-3xl font-bold mt-8">Getting Started</h2>
    <p className="leading-relaxed">
      Begin your journey by exploring the Introduction section, which covers the fundamental concepts of cybersecurity
      including the CIA Triad, types of cyber threats, and security principles. Each topic builds upon previous
      concepts, so following the sequential order is recommended for beginners. Experienced learners can navigate
      directly to specific topics of interest using the sidebar.
    </p>

    <p className="leading-relaxed mt-4">
      Each topic includes detailed explanations, real-world examples, diagrams, and practical scenarios to reinforce
      your understanding. The content is designed to match the depth and rigor expected in academic courses, security
      certifications, and technical interviews.
    </p>

    {/* Important Certifications */}
    <h2 className="text-3xl font-bold mt-8">Related Security Certifications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>CompTIA Security+</li>
      <li>Certified Ethical Hacker (CEH)</li>
      <li>CISSP (Certified Information Systems Security Professional)</li>
      <li>OSCP (Offensive Security Certified Professional)</li>
      <li>CISM (Certified Information Security Manager)</li>
      <li>AWS Certified Security Specialty</li>
    </ul>
  </div>
);

export default Home;
