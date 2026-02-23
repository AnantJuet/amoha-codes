import React from 'react';

const OSIModel: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      OSI Model - Open Systems Interconnection
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The OSI (Open Systems Interconnection) Model is a conceptual framework that standardizes the functions
      of a communication system into seven distinct layers. Developed by the International Organization for
      Standardization (ISO) in 1984, this model helps understand how data travels across a network and ensures
      interoperability between different systems and vendors.
    </p>

    {/* History */}
    <h2 className="text-3xl font-bold mt-8">History and Purpose</h2>
    <p className="leading-relaxed">
      Before the OSI model, different manufacturers created proprietary networking systems that could not
      communicate with each other. The ISO developed the OSI model to:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>Provide a universal set of standards for network communication</li>
      <li>Enable interoperability between different vendors products</li>
      <li>Simplify network design by breaking it into manageable layers</li>
      <li>Allow changes in one layer without affecting other layers</li>
    </ul>

    {/* 7 Layers Diagram */}
    <h2 className="text-3xl font-bold mt-8">The Seven Layers of OSI Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  OSI Model - 7 Layers:

  Layer    Name             Data Unit    Function
  ======================================================
    7    Application        Data        User interface
         +-----------------+
    6    Presentation       Data        Data formatting
         +-----------------+
    5    Session            Data        Session management
         +-----------------+
    4    Transport         Segment      End-to-end delivery
         +-----------------+
    3    Network           Packet       Routing & addressing
         +-----------------+
    2    Data Link         Frame        Node-to-node delivery
         +-----------------+
    1    Physical           Bits        Physical transmission
         +-----------------+

  Memory Aid (Top to Bottom): "All People Seem To Need Data Processing"
  Memory Aid (Bottom to Top): "Please Do Not Throw Sausage Pizza Away"

  +-----------------------------------------------------------+
  |  Layer 7  |  APPLICATION   | HTTP, FTP, SMTP, DNS, Telnet |
  +-----------------------------------------------------------+
  |  Layer 6  |  PRESENTATION  | SSL/TLS, JPEG, MPEG, ASCII   |
  +-----------------------------------------------------------+
  |  Layer 5  |  SESSION       | NetBIOS, RPC, PPTP           |
  +-----------------------------------------------------------+
  |  Layer 4  |  TRANSPORT     | TCP, UDP, SCTP               |
  +-----------------------------------------------------------+
  |  Layer 3  |  NETWORK       | IP, ICMP, ARP, RARP, OSPF    |
  +-----------------------------------------------------------+
  |  Layer 2  |  DATA LINK     | Ethernet, PPP, MAC, HDLC     |
  +-----------------------------------------------------------+
  |  Layer 1  |  PHYSICAL      | Cables, Hubs, Repeaters      |
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
            <th className="p-3 border">Devices</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Application</td>
            <td className="p-3 border">Data</td>
            <td className="p-3 border">Network services to applications</td>
            <td className="p-3 border">Gateway, Firewall</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Presentation</td>
            <td className="p-3 border">Data</td>
            <td className="p-3 border">Data translation and encryption</td>
            <td className="p-3 border">Gateway</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Session</td>
            <td className="p-3 border">Data</td>
            <td className="p-3 border">Session establishment and management</td>
            <td className="p-3 border">Gateway</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Transport</td>
            <td className="p-3 border">Segment</td>
            <td className="p-3 border">Reliable end-to-end delivery</td>
            <td className="p-3 border">Gateway, Firewall</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Network</td>
            <td className="p-3 border">Packet</td>
            <td className="p-3 border">Logical addressing and routing</td>
            <td className="p-3 border">Router, L3 Switch</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Data Link</td>
            <td className="p-3 border">Frame</td>
            <td className="p-3 border">Physical addressing, framing</td>
            <td className="p-3 border">Switch, Bridge, NIC</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Physical</td>
            <td className="p-3 border">Bits</td>
            <td className="p-3 border">Physical transmission of bits</td>
            <td className="p-3 border">Hub, Repeater, Cables</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Encapsulation */}
    <h2 className="text-3xl font-bold mt-8">Data Encapsulation Process</h2>
    <p className="leading-relaxed">
      As data moves down the OSI layers from sender, each layer adds its own header (and sometimes trailer)
      to the data. This process is called encapsulation. At the receiver, the reverse process
      (decapsulation) removes headers at each layer.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Encapsulation (Sender Side):

  Layer 7-5: +--------+
             |  DATA  |  (Application data)
             +--------+

  Layer 4:   +-----+--------+
             | TH  |  DATA  |  (Segment: Transport Header added)
             +-----+--------+

  Layer 3:   +-----+-----+--------+
             | NH  | TH  |  DATA  |  (Packet: Network Header added)
             +-----+-----+--------+

  Layer 2:   +-----+-----+-----+--------+-----+
             | DH  | NH  | TH  |  DATA  | DT  |  (Frame: Data Link Header & Trailer)
             +-----+-----+-----+--------+-----+

  Layer 1:   01100101010101110101011101010111  (Bits transmitted)


  Legend:
  TH = Transport Header (Port numbers, Seq#)
  NH = Network Header (IP addresses)
  DH = Data Link Header (MAC addresses)
  DT = Data Link Trailer (CRC checksum)

  Decapsulation (Receiver Side) - Reverse process:
  Bits -> Frame -> Packet -> Segment -> Data
`}</pre>
    </div>

    {/* Layer Interaction */}
    <h2 className="text-3xl font-bold mt-8">Layer Interaction</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  Communication Between Two Hosts:

  Host A                                        Host B
  +-------------+                          +-------------+
  | Application |<------------------------>| Application |
  +-------------+                          +-------------+
  |Presentation |<------------------------>|Presentation |
  +-------------+                          +-------------+
  |   Session   |<------------------------>|   Session   |
  +-------------+                          +-------------+
  |  Transport  |<------------------------>|  Transport  |
  +-------------+                          +-------------+
  |   Network   |<--------+    +---------->|   Network   |
  +-------------+         |    |           +-------------+
  |  Data Link  |<-----+  |    |  +------->|  Data Link  |
  +-------------+      |  |    |  |        +-------------+
  |  Physical   |<--+  |  |    |  |  +---->|  Physical   |
  +-------------+   |  |  |    |  |  |     +-------------+
                    |  |  |    |  |  |
                 +--+--+--+----+--+--+--+
                 |       Network         |
                 |     (Routers,         |
                 |      Switches)        |
                 +-----------------------+

  Virtual communication: Layers communicate with peer layers
  Actual data flow: Down through sender, across network, up through receiver
`}</pre>
    </div>

    {/* Layer Categories */}
    <h2 className="text-3xl font-bold mt-8">Layer Categories</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Upper Layers (5-7)</h3>
        <p className="text-sm mb-2">Application-oriented layers</p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Focus on user interface and data formatting</li>
          <li>Software-based implementation</li>
          <li>Handle application protocols</li>
          <li>Also called Host Layers</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Lower Layers (1-4)</h3>
        <p className="text-sm mb-2">Network-oriented layers</p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Focus on data transport and delivery</li>
          <li>Hardware and software implementation</li>
          <li>Handle network communication</li>
          <li>Also called Media Layers</li>
        </ul>
      </div>
    </div>

    {/* Brief Layer Functions */}
    <h2 className="text-3xl font-bold mt-8">Brief Layer Functions</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-3">
      <li>
        <strong>Physical Layer:</strong> Transmits raw bit streams over physical medium. Defines
        electrical, mechanical, and procedural specifications for cables, connectors, and signaling.
      </li>
      <li>
        <strong>Data Link Layer:</strong> Provides node-to-node data transfer and handles error detection.
        Responsible for MAC addressing and framing.
      </li>
      <li>
        <strong>Network Layer:</strong> Handles logical addressing (IP) and routing of packets between
        different networks. Determines the best path for data delivery.
      </li>
      <li>
        <strong>Transport Layer:</strong> Ensures reliable end-to-end data delivery with error recovery,
        flow control, and segmentation. Uses TCP or UDP protocols.
      </li>
      <li>
        <strong>Session Layer:</strong> Establishes, manages, and terminates sessions between applications.
        Handles synchronization and dialog control.
      </li>
      <li>
        <strong>Presentation Layer:</strong> Translates data formats, handles encryption/decryption,
        and compression. Ensures data is in a usable format.
      </li>
      <li>
        <strong>Application Layer:</strong> Provides network services directly to end-user applications.
        Includes protocols like HTTP, FTP, SMTP, and DNS.
      </li>
    </ul>

    {/* Protocols at Each Layer */}
    <h2 className="text-3xl font-bold mt-8">Common Protocols at Each Layer</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Layer</th>
            <th className="p-3 border">Protocols/Standards</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Application (7)</td>
            <td className="p-3 border">HTTP, HTTPS, FTP, TFTP, SMTP, POP3, IMAP, DNS, DHCP, Telnet, SSH, SNMP</td>
          </tr>
          <tr>
            <td className="p-3 border">Presentation (6)</td>
            <td className="p-3 border">SSL/TLS, JPEG, GIF, PNG, MPEG, ASCII, EBCDIC, MIDI</td>
          </tr>
          <tr>
            <td className="p-3 border">Session (5)</td>
            <td className="p-3 border">NetBIOS, PPTP, RPC, SCP, PAP, NFS</td>
          </tr>
          <tr>
            <td className="p-3 border">Transport (4)</td>
            <td className="p-3 border">TCP, UDP, SCTP, SPX</td>
          </tr>
          <tr>
            <td className="p-3 border">Network (3)</td>
            <td className="p-3 border">IP, ICMP, IGMP, ARP, RARP, OSPF, BGP, RIP</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Link (2)</td>
            <td className="p-3 border">Ethernet, PPP, HDLC, Frame Relay, ATM, IEEE 802.3, 802.11</td>
          </tr>
          <tr>
            <td className="p-3 border">Physical (1)</td>
            <td className="p-3 border">RS-232, V.35, Ethernet physical, USB, Bluetooth PHY</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages of OSI Model</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Provides a universal language for networking</li>
      <li>Reduces complexity by dividing into layers</li>
      <li>Standardizes interfaces between layers</li>
      <li>Facilitates modular engineering</li>
      <li>Ensures interoperability between vendors</li>
      <li>Accelerates evolution by isolating changes to specific layers</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Limitations of OSI Model</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Theoretical model - not directly implemented</li>
      <li>Session and Presentation layers have limited real-world protocols</li>
      <li>TCP/IP model is more widely used in practice</li>
      <li>Some protocols do not fit neatly into specific layers</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>OSI has 7 layers; TCP/IP has 4 layers</li>
      <li>Data flows down layers at sender and up at receiver</li>
      <li>Each layer adds header during encapsulation</li>
      <li>PDUs: Bits (L1), Frame (L2), Packet (L3), Segment (L4), Data (L5-7)</li>
      <li>Layers communicate with peer layers virtually</li>
      <li>Lower layers (1-4) handle transport; Upper layers (5-7) handle application</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Know all 7 layers and their PDUs</li>
        <li>Remember devices that operate at each layer</li>
        <li>Understand encapsulation and decapsulation process</li>
        <li>Know common protocols at each layer</li>
        <li>Compare OSI with TCP/IP model</li>
        <li>Memory aids: All People Seem To Need Data Processing (top to bottom)</li>
      </ul>
    </div>
  </div>
);

export default OSIModel;
