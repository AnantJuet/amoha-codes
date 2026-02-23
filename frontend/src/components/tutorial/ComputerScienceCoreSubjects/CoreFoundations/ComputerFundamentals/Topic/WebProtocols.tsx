import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Web Protocols ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Web Protocols
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      A protocol is a set of predefined rules that handle how data is exchanged between computers over the Internet.
      It ensures that devices can communicate in a structured, reliable, and secure manner.
      In essence, protocols dictate how data is sent, received, formatted, and processed.
    </p>

    <p className="leading-relaxed">
      While there are over 200 recognized protocols in use today across various domains like networking, security, and applications,
      more than 90% of internet communication relies on a few key protocols—HTTP, HTTPS, TCP/IP, FTP, and DNS—commonly known as web protocols.
      Without these protocols, devices wouldn't be able to understand each other, rendering online communication impossible.
    </p>

    <h2 className="text-2xl font-bold mt-6 ">
      Example: How Web Protocols Work Together
    </h2>
    <ul className="list-decimal list-inside space-y-2 leading-relaxed">
      <li><strong>DNS Protocol</strong> translates the domain name into an IP address.</li>
      <li><strong>TCP/IP Protocol</strong> manages the routing and delivery of data.</li>
      <li><strong>HTTP/HTTPS Protocol</strong> handles the actual exchange of webpage content.</li>
    </ul>

    <p className="leading-relaxed">
      <strong>Note:</strong> Before jumping into web protocols, it's important to understand the layers of the TCP/IP Model
      and how these protocols work together to enable smooth and efficient data transmission.
    </p>

    {/* ================= TCP/IP Model ================= */}
    <h2 className="text-3xl font-bold  mt-8">
      How Web Protocols Operate Across the TCP/IP Model
    </h2>

    <p className="leading-relaxed">
      Web protocols operate across the TCP/IP model, which consists of four layers:
      <strong> Application Layer</strong>, <strong>Transport Layer</strong>,
      <strong> Network Layer</strong>, and <strong>Network Access Layer</strong>.
      Unlike the OSI model’s seven layers, TCP/IP combines multiple OSI layers into broader functional blocks.
    </p>

    <p className="leading-relaxed">
      When data is transmitted, the Application Layer initiates communication (via HTTP, HTTPS, FTP, DNS).
      The Transport Layer (TCP/UDP) ensures reliable delivery. The Network Layer assigns IP addresses and routes packets.
      The Network Access Layer manages physical data transmission over Ethernet or Wi-Fi.
    </p>

    <p className="leading-relaxed">
      On the receiving end, the process happens in reverse — ensuring data flows securely and accurately between users and servers.
      <strong> Most web protocols operate in the Application and Transport layers.</strong>
    </p>

    {/* ================= How Web Protocols Work ================= */}
    <h2 className="text-3xl font-bold  mt-8">
      How Web Protocols Work Behind Every Website
    </h2>
    <p className="leading-relaxed">
      Web protocols function like departments in a company, each handling specific tasks for efficient and secure data transfer.
      Here are the most common web protocols:
    </p>

    {/* ================= Individual Protocols ================= */}
    <h3 className="text-2xl font-semibold mt-6 ">1. HTTP (Hyper Text Transfer Protocol)</h3>
    <p className="leading-relaxed">
      HTTP transfers hypertext over the Internet and defines how browsers request pages from servers.
      It’s not secure — data can be intercepted — but it allows sharing of text, images, and multimedia content.
    </p>

    <h3 className="text-2xl font-semibold mt-6 ">2. HTTPS (HyperText Transfer Protocol Secure)</h3>
    <p className="leading-relaxed">
      HTTPS is the secure version of HTTP, encrypting data via SSL/TLS to keep personal and payment details private.
      It’s used for banking, shopping, and login pages.
    </p>
    <ul className="list-decimal list-inside space-y-2 leading-relaxed">
      <li>Establishes a stable TCP connection.</li>
      <li>Server sends its public key (SSL certificate).</li>
      <li>Client encrypts a session key using this public key.</li>
      <li>All communication thereafter is encrypted and secure.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6 ">3. TCP (Transmission Control Protocol)</h3>
    <p className="leading-relaxed">
      TCP ensures reliable, ordered delivery of data. It breaks data into packets and reassembles them in order.
      If packets are lost, TCP retransmits them.
    </p>
    <ul className="list-decimal list-inside space-y-2 leading-relaxed">
      <li><strong>SYN:</strong> Client sends a request to connect.</li>
      <li><strong>SYN+ACK:</strong> Server acknowledges and agrees.</li>
      <li><strong>ACK:</strong> Client confirms — connection established.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6 ">4. IP (Internet Protocol)</h3>
    <p className="leading-relaxed">
      IP assigns unique addresses to devices and routes packets from source to destination — like a digital postal system.
    </p>
    <ul className="list-decimal list-inside space-y-2 leading-relaxed">
      <li>Sender encapsulates data with source and destination IPs.</li>
      <li>Routers find the most efficient delivery path.</li>
      <li>Receiver processes data intended for its IP.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6 ">5. DNS (Domain Name System)</h3>
    <p className="leading-relaxed">
      DNS acts like the Internet’s phonebook, translating domain names into IP addresses so browsers can locate websites.
    </p>
    <ul className="list-decimal list-inside space-y-2 leading-relaxed">
      <li>Browser checks local cache or OS cache for IP.</li>
      <li>If not found, request goes to DNS resolver → root server → TLD → authoritative nameserver.</li>
      <li>IP is returned and used to connect to the website.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6 ">6. FTP (File Transfer Protocol)</h3>
    <p className="leading-relaxed">
      FTP transfers files between a client and server.
      It uses two channels — Control (for commands) and Data (for file transfers).
      However, it lacks encryption, so SFTP/FTPS are more secure alternatives.
    </p>

    {/* ================= Working of Web Protocols ================= */}
    <h2 className="text-3xl font-bold  mt-8">
      Working of Web Protocols
    </h2>
    <ul className="list-decimal list-inside space-y-2 leading-relaxed">
      <li>DNS translates the domain into an IP address.</li>
      <li>A TCP connection is established with the server.</li>
      <li>HTTP/HTTPS requests are made for web content.</li>
      <li>SSL/TLS encrypts data if the site is secure.</li>
      <li>The server sends the requested content to the browser.</li>
    </ul>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold  mt-8">
      Conclusion
    </h2>
    <p className="leading-relaxed">
      Web protocols define the rules that make the internet function — allowing devices, browsers, and servers to communicate.
      Without them, websites wouldn’t load, and secure communication wouldn’t exist.
      For developers, understanding these protocols is vital for building fast, secure, and reliable web applications.
      They are the invisible engines powering everything online — from browsing and streaming to shopping and data transfer.
    </p>

  </div>
);

export default Home;
