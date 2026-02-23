import React from 'react';

const TCPIPModel: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP/IP Model - Transmission Control Protocol/Internet Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The TCP/IP (Transmission Control Protocol/Internet Protocol) model is a practical, four-layer
      networking model that forms the foundation of the modern Internet. Unlike the theoretical OSI model,
      TCP/IP was developed based on actual protocols and is the standard model used for network communication
      worldwide. It was developed by the Department of Defense (DoD) in the 1970s.
    </p>

    {/* History */}
    <h2 className="text-3xl font-bold mt-8">History and Development</h2>
    <p className="leading-relaxed">
      The TCP/IP model was developed by DARPA (Defense Advanced Research Projects Agency) in the 1970s
      as part of the ARPANET project. Key milestones include:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>1974:</strong> Vint Cerf and Bob Kahn published the TCP protocol specification</li>
      <li><strong>1978:</strong> TCP was split into TCP and IP protocols</li>
      <li><strong>1983:</strong> ARPANET switched to TCP/IP, marking the birth of the Internet</li>
      <li><strong>1989:</strong> Tim Berners-Lee invented the World Wide Web using TCP/IP</li>
    </ul>

    {/* 4 Layers Diagram */}
    <h2 className="text-3xl font-bold mt-8">The Four Layers of TCP/IP Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  TCP/IP Model - 4 Layers:

  Layer    Name              PDU        Function
  ======================================================
    4    Application        Data       User applications
         +-----------------+
    3    Transport         Segment     End-to-end delivery
         +-----------------+
    2    Internet          Packet      Routing & addressing
         +-----------------+
    1    Network Access    Frame       Physical transmission
         +-----------------+

  Alternative Names:
  - Layer 4: Application Layer (also called Process Layer)
  - Layer 3: Transport Layer (also called Host-to-Host Layer)
  - Layer 2: Internet Layer (also called Network Layer)
  - Layer 1: Network Access Layer (also called Link Layer or Network Interface)

  +-----------------------------------------------------------+
  |  Layer 4  |  APPLICATION    | HTTP, FTP, SMTP, DNS, SSH   |
  +-----------------------------------------------------------+
  |  Layer 3  |  TRANSPORT      | TCP, UDP, SCTP              |
  +-----------------------------------------------------------+
  |  Layer 2  |  INTERNET       | IP, ICMP, ARP, RARP         |
  +-----------------------------------------------------------+
  |  Layer 1  |  NETWORK ACCESS | Ethernet, Wi-Fi, PPP        |
  +-----------------------------------------------------------+
`}</pre>
    </div>

    {/* Layer Summary Table */}
    <h2 className="text-3xl font-bold mt-8">Layer Overview</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Layer</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">PDU</th>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Protocols</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Application</td>
            <td className="p-3 border">Data/Message</td>
            <td className="p-3 border">User interface, application protocols</td>
            <td className="p-3 border">HTTP, FTP, SMTP, DNS, Telnet, SSH</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Transport</td>
            <td className="p-3 border">Segment/Datagram</td>
            <td className="p-3 border">End-to-end delivery, flow control</td>
            <td className="p-3 border">TCP, UDP, SCTP</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Internet</td>
            <td className="p-3 border">Packet/Datagram</td>
            <td className="p-3 border">Logical addressing, routing</td>
            <td className="p-3 border">IP, ICMP, ARP, RARP, IGMP</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Network Access</td>
            <td className="p-3 border">Frame/Bits</td>
            <td className="p-3 border">Physical transmission, framing</td>
            <td className="p-3 border">Ethernet, Wi-Fi, PPP, Token Ring</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Application Layer */}
    <h2 className="text-3xl font-bold mt-8">1. Application Layer</h2>
    <p className="leading-relaxed">
      The Application Layer is the topmost layer that provides services directly to end-user applications.
      It combines the functionalities of OSI's Application, Presentation, and Session layers.
    </p>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Functions</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Provides user interface for network services</li>
          <li>Handles data representation and encoding</li>
          <li>Manages application-level protocols</li>
          <li>Supports email, file transfer, web browsing</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Common Protocols</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li><strong>HTTP/HTTPS:</strong> Web browsing (Port 80/443)</li>
          <li><strong>FTP:</strong> File transfer (Port 20/21)</li>
          <li><strong>SMTP:</strong> Email sending (Port 25)</li>
          <li><strong>DNS:</strong> Domain name resolution (Port 53)</li>
          <li><strong>SSH:</strong> Secure shell (Port 22)</li>
        </ul>
      </div>
    </div>

    {/* Transport Layer */}
    <h2 className="text-3xl font-bold mt-8">2. Transport Layer</h2>
    <p className="leading-relaxed">
      The Transport Layer provides end-to-end communication services for applications. It is responsible
      for segmentation, flow control, error control, and connection management.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">TCP</th>
            <th className="p-3 border">UDP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Connection</td>
            <td className="p-3 border">Connection-oriented</td>
            <td className="p-3 border">Connectionless</td>
          </tr>
          <tr>
            <td className="p-3 border">Reliability</td>
            <td className="p-3 border">Reliable (acknowledgments)</td>
            <td className="p-3 border">Unreliable (best effort)</td>
          </tr>
          <tr>
            <td className="p-3 border">Flow Control</td>
            <td className="p-3 border">Yes (sliding window)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Slower (overhead)</td>
            <td className="p-3 border">Faster (minimal overhead)</td>
          </tr>
          <tr>
            <td className="p-3 border">Use Case</td>
            <td className="p-3 border">Web, Email, File Transfer</td>
            <td className="p-3 border">Streaming, DNS, Gaming</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Internet Layer */}
    <h2 className="text-3xl font-bold mt-8">3. Internet Layer</h2>
    <p className="leading-relaxed">
      The Internet Layer is responsible for logical addressing, routing, and forwarding packets across
      different networks. This layer corresponds to the OSI Network Layer.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Internet Layer Protocols:

  +----------------------------------------------------------+
  |                  IP (Internet Protocol)                   |
  |  - Logical addressing (IPv4/IPv6)                        |
  |  - Packet routing and forwarding                         |
  |  - Fragmentation and reassembly                          |
  +----------------------------------------------------------+
  |                     ICMP                                  |
  |  - Error reporting (Destination Unreachable)             |
  |  - Diagnostic functions (Ping, Traceroute)               |
  +----------------------------------------------------------+
  |                      ARP                                  |
  |  - Maps IP addresses to MAC addresses                    |
  |  - Maintains ARP cache/table                             |
  +----------------------------------------------------------+
  |                     RARP                                  |
  |  - Maps MAC addresses to IP addresses                    |
  |  - Used by diskless workstations                         |
  +----------------------------------------------------------+
`}</pre>
    </div>

    {/* Network Access Layer */}
    <h2 className="text-3xl font-bold mt-8">4. Network Access Layer</h2>
    <p className="leading-relaxed">
      The Network Access Layer combines the OSI Physical and Data Link layers. It handles physical
      addressing (MAC), framing, and the actual transmission of data over the physical medium.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Physical Addressing:</strong> Uses MAC addresses (48-bit hardware addresses)</li>
      <li><strong>Framing:</strong> Encapsulates packets into frames with headers and trailers</li>
      <li><strong>Error Detection:</strong> Uses CRC (Cyclic Redundancy Check) for error detection</li>
      <li><strong>Media Access Control:</strong> Controls when devices can transmit (CSMA/CD, CSMA/CA)</li>
    </ul>

    {/* Data Flow */}
    <h2 className="text-3xl font-bold mt-8">Data Flow in TCP/IP</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  Sender                                          Receiver
  +-------------+                            +-------------+
  | Application |                            | Application |
  |   (Data)    |                            |   (Data)    |
  +------+------+                            +------+------+
         |                                          ^
         v                                          |
  +------+------+                            +------+------+
  |  Transport  |                            |  Transport  |
  |  (Segment)  |                            |  (Segment)  |
  +------+------+                            +------+------+
         |                                          ^
         v                                          |
  +------+------+                            +------+------+
  |  Internet   |                            |  Internet   |
  |  (Packet)   |                            |  (Packet)   |
  +------+------+                            +------+------+
         |                                          ^
         v                                          |
  +------+------+                            +------+------+
  |   Network   |                            |   Network   |
  |   Access    |     Physical Medium        |   Access    |
  |   (Frame)   | =========================> |   (Frame)   |
  +-------------+        (Bits)              +-------------+

  Encapsulation:  Data -> Segment -> Packet -> Frame -> Bits
  Decapsulation:  Bits -> Frame -> Packet -> Segment -> Data
`}</pre>
    </div>

    {/* Protocol Suite */}
    <h2 className="text-3xl font-bold mt-8">TCP/IP Protocol Suite</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  TCP/IP Protocol Stack:

  +------------------------------------------------------------+
  |              APPLICATION LAYER                              |
  |  +------+ +------+ +------+ +------+ +------+ +------+     |
  |  | HTTP | | FTP  | | SMTP | | DNS  | | SNMP | | SSH  |     |
  |  +------+ +------+ +------+ +------+ +------+ +------+     |
  +------------------------------------------------------------+
  |              TRANSPORT LAYER                                |
  |  +-------------------------+ +-------------------------+    |
  |  |          TCP            | |          UDP            |    |
  |  | (Reliable, Ordered)     | | (Fast, Best-effort)     |    |
  |  +-------------------------+ +-------------------------+    |
  +------------------------------------------------------------+
  |              INTERNET LAYER                                 |
  |  +--------+ +--------+ +--------+ +--------+ +--------+    |
  |  |   IP   | |  ICMP  | |  ARP   | |  RARP  | |  IGMP  |    |
  |  +--------+ +--------+ +--------+ +--------+ +--------+    |
  +------------------------------------------------------------+
  |              NETWORK ACCESS LAYER                           |
  |  +----------+ +----------+ +----------+ +----------+        |
  |  | Ethernet | |   PPP    | | Wi-Fi    | | Frame    |        |
  |  |          | |          | | (802.11) | | Relay    |        |
  |  +----------+ +----------+ +----------+ +----------+        |
  +------------------------------------------------------------+
`}</pre>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of TCP/IP Model</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Practical model based on actual protocols (not theoretical)</li>
      <li>Highly scalable - supports millions of devices worldwide</li>
      <li>Platform independent - works across different operating systems</li>
      <li>Open standard - freely available and not controlled by any company</li>
      <li>Supports multiple routing protocols</li>
      <li>Foundation of the modern Internet</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages of TCP/IP Model</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Does not clearly separate services, interfaces, and protocols</li>
      <li>Cannot describe other protocol stacks (model is specific to TCP/IP)</li>
      <li>Network Access Layer does not distinguish between Physical and Data Link</li>
      <li>Session and Presentation layer concepts are not explicitly defined</li>
      <li>Difficult to replace protocols (tightly coupled)</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>TCP/IP has 4 layers vs OSI's 7 layers</li>
      <li>Application layer combines OSI layers 5, 6, and 7</li>
      <li>Network Access layer combines OSI layers 1 and 2</li>
      <li>TCP is reliable; UDP is fast but unreliable</li>
      <li>IP provides logical addressing; ARP maps IP to MAC</li>
      <li>ICMP is used for error reporting and diagnostics</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Know all 4 layers and their PDUs</li>
        <li>Understand TCP vs UDP differences</li>
        <li>Remember port numbers for common protocols</li>
        <li>Know the role of IP, ARP, ICMP protocols</li>
        <li>Compare TCP/IP with OSI model</li>
        <li>Understand encapsulation at each layer</li>
        <li>Three-way handshake (SYN, SYN-ACK, ACK) for TCP</li>
      </ul>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-8">Practice Questions</h2>
    <ol className="list-decimal list-inside leading-relaxed space-y-4 mt-4">
      <li>
        <strong>Question:</strong> Which protocol operates at both the Transport and Internet layers?
        <p className="ml-6 mt-2 text-sm">
          <strong>Answer:</strong> None. Each protocol operates at a specific layer. TCP and UDP operate
          at the Transport layer, while IP operates at the Internet layer.
        </p>
      </li>
      <li>
        <strong>Question:</strong> What is the PDU at the Internet layer of TCP/IP model?
        <p className="ml-6 mt-2 text-sm">
          <strong>Answer:</strong> Packet (or Datagram). The Internet layer uses IP packets for routing.
        </p>
      </li>
      <li>
        <strong>Question:</strong> Which layer is responsible for end-to-end reliability in TCP/IP?
        <p className="ml-6 mt-2 text-sm">
          <strong>Answer:</strong> Transport Layer (when using TCP protocol).
        </p>
      </li>
    </ol>
  </div>
);

export default TCPIPModel;
