import React from 'react';

const WebProtocolsTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Web Protocols ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Web Protocols
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      A <strong>protocol</strong> is a set of predefined rules that govern how data is exchanged between devices over the internet. Protocols ensure communication is structured, reliable, and secure. They dictate how data is sent, received, formatted, and processed.
    </p>

    <p className="text-lg leading-relaxed">
      While there are over 200 protocols across networking, security, and applications, over 90% of internet communication relies on key protocols such as <strong>HTTP, HTTPS, TCP/IP, FTP, and DNS</strong>. Without these, devices would not be able to understand each other.
    </p>

    {/* ================= How Protocols Work ================= */}
    <h2 className="text-3xl font-bold mt-6">How Web Protocols Operate Across the TCP/IP Model</h2>
    <p className="text-lg leading-relaxed">
      Web protocols operate across the TCP/IP model, which consists of four layers: 
      <strong>Application, Transport, Network, and Network Access</strong>. Each layer has specific roles:
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Application Layer:</strong> Handles HTTP, HTTPS, FTP, DNS, and other web services.</li>
      <li><strong>Transport Layer:</strong> Uses TCP or UDP to segment data and ensure delivery.</li>
      <li><strong>Network Layer:</strong> Assigns IP addresses and routes data via IP and ICMP.</li>
      <li><strong>Network Access Layer:</strong> Manages physical transmission via Ethernet, Wi-Fi, etc.</li>
    </ul>

    <p className="text-lg leading-relaxed">
      On the receiving end, the process reverses from the Network Access Layer up to the Application Layer. This modular structure ensures scalable, reliable, and interoperable communication.
    </p>

    {/* ================= Common Web Protocols ================= */}
    <h2 className="text-3xl font-bold mt-6">Common Web Protocols</h2>

    <h3 className="text-2xl font-semibold mt-4">1. HTTP (HyperText Transfer Protocol)</h3>
    <p className="text-lg leading-relaxed">
      Transfers hypertext over the internet. Allows browsers to request and display web pages. Not secure; data can be intercepted.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. HTTPS (HyperText Transfer Protocol Secure)</h3>
    <p className="text-lg leading-relaxed">
      Secure version of HTTP. Encrypts data using SSL/TLS. Ensures privacy for sensitive information like passwords or credit cards.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li>Establish TCP connection</li>
      <li>Server sends public key</li>
      <li>Client generates session key and encrypts with server's key</li>
      <li>Data is encrypted and transmitted securely</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. TCP (Transmission Control Protocol)</h3>
    <p className="text-lg leading-relaxed">
      Ensures reliable, ordered delivery of data. Breaks large data into packets, retransmits lost packets, and reassembles them.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li>SYN: Client requests connection</li>
      <li>SYN-ACK: Server acknowledges</li>
      <li>ACK: Client confirms</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">4. IP (Internet Protocol)</h3>
    <p className="text-lg leading-relaxed">
      Assigns unique addresses to devices and ensures correct routing of data packets from source to destination.
    </p>

    <h3 className="text-2xl font-semibold mt-4">5. DNS (Domain Name System)</h3>
    <p className="text-lg leading-relaxed">
      Translates domain names into IP addresses, enabling devices to locate each other. Functions like an internet phonebook.
    </p>

    <h3 className="text-2xl font-semibold mt-4">6. FTP (File Transfer Protocol)</h3>
    <p className="text-lg leading-relaxed">
      Transfers files between client and server. Allows uploading, downloading, and managing remote files. Uses Control and Data channels. Not secure compared to SFTP/FTPS.
    </p>

    {/* ================= How Web Protocols Work ================= */}
    <h2 className="text-3xl font-bold mt-6">How Web Protocols Work Together</h2>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li>DNS translates domain names to IP addresses.</li>
      <li>TCP establishes a reliable connection.</li>
      <li>HTTP/HTTPS requests content from servers.</li>
      <li>SSL/TLS encrypts data if HTTPS is used.</li>
      <li>Server responds and browser displays content.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Conclusion</h2>
    <p className="text-lg leading-relaxed">
      Web protocols are the backbone of the internet. They enable structured, secure, and reliable communication between devices. Understanding them is crucial for developers to build secure, efficient, and functional web applications. They power everything online—from browsing and streaming to e-commerce and file sharing.
    </p>
  </div>
);

export default WebProtocolsTutorial;
