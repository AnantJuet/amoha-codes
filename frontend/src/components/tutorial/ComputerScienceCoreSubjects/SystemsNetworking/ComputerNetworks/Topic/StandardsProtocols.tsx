import React from 'react';

const StandardsProtocols: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Standards and Protocols
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Network standards and protocols are the foundation of computer networking. Standards define the rules
      and specifications that ensure interoperability between different devices and systems, while protocols
      specify how data is formatted, transmitted, and received across networks.
    </p>

    <h2 className="text-3xl font-bold mt-8">What are Network Standards?</h2>
    <p className="leading-relaxed">
      Network standards are documented agreements containing technical specifications or other precise
      criteria to be used consistently as rules, guidelines, or definitions to ensure that materials,
      products, processes, and services are fit for their purpose. They enable different hardware and
      software from various vendors to work together seamlessly.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Standards Organizations</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Organization</th>
            <th className="p-3 border">Full Name</th>
            <th className="p-3 border">Focus Area</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">IEEE</td>
            <td className="p-3 border">Institute of Electrical and Electronics Engineers</td>
            <td className="p-3 border">LAN/MAN standards (802.x series)</td>
          </tr>
          <tr>
            <td className="p-3 border">IETF</td>
            <td className="p-3 border">Internet Engineering Task Force</td>
            <td className="p-3 border">Internet protocols (TCP/IP, HTTP)</td>
          </tr>
          <tr>
            <td className="p-3 border">ISO</td>
            <td className="p-3 border">International Organization for Standardization</td>
            <td className="p-3 border">OSI Model, international standards</td>
          </tr>
          <tr>
            <td className="p-3 border">ITU</td>
            <td className="p-3 border">International Telecommunication Union</td>
            <td className="p-3 border">Telecommunications standards</td>
          </tr>
          <tr>
            <td className="p-3 border">W3C</td>
            <td className="p-3 border">World Wide Web Consortium</td>
            <td className="p-3 border">Web standards (HTML, CSS, XML)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">What are Network Protocols?</h2>
    <p className="leading-relaxed">
      A network protocol is a set of rules and conventions that govern how data is formatted, transmitted,
      received, and acknowledged between devices in a network. Protocols ensure that devices from different
      manufacturers can communicate effectively with each other.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Key Elements of a Protocol</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Syntax:</strong> The structure or format of data, including field sizes and order</li>
      <li><strong>Semantics:</strong> The meaning of each section of bits and how they are interpreted</li>
      <li><strong>Timing:</strong> When data should be sent and how fast it can be transmitted</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Common Network Protocols by Layer</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">OSI Layer</th>
            <th className="p-3 border">Protocols</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Application (7)</td>
            <td className="p-3 border">HTTP, FTP, SMTP, DNS, SNMP</td>
            <td className="p-3 border">User applications and services</td>
          </tr>
          <tr>
            <td className="p-3 border">Presentation (6)</td>
            <td className="p-3 border">SSL/TLS, JPEG, MPEG</td>
            <td className="p-3 border">Data formatting and encryption</td>
          </tr>
          <tr>
            <td className="p-3 border">Session (5)</td>
            <td className="p-3 border">NetBIOS, PPTP, RPC</td>
            <td className="p-3 border">Session management</td>
          </tr>
          <tr>
            <td className="p-3 border">Transport (4)</td>
            <td className="p-3 border">TCP, UDP, SCTP</td>
            <td className="p-3 border">End-to-end communication</td>
          </tr>
          <tr>
            <td className="p-3 border">Network (3)</td>
            <td className="p-3 border">IP, ICMP, ARP, OSPF, BGP</td>
            <td className="p-3 border">Routing and addressing</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Link (2)</td>
            <td className="p-3 border">Ethernet, PPP, HDLC</td>
            <td className="p-3 border">Node-to-node delivery</td>
          </tr>
          <tr>
            <td className="p-3 border">Physical (1)</td>
            <td className="p-3 border">RS-232, USB, Bluetooth</td>
            <td className="p-3 border">Physical transmission</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">IEEE 802 Standards Family</h2>
    <p className="leading-relaxed">
      The IEEE 802 standards deal with local area networks and metropolitan area networks. These standards
      are essential for understanding modern networking infrastructure.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Standard</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">IEEE 802.1</td>
            <td className="p-3 border">Bridging</td>
            <td className="p-3 border">LAN/MAN bridging, VLANs</td>
          </tr>
          <tr>
            <td className="p-3 border">IEEE 802.3</td>
            <td className="p-3 border">Ethernet</td>
            <td className="p-3 border">Wired LAN standard (CSMA/CD)</td>
          </tr>
          <tr>
            <td className="p-3 border">IEEE 802.11</td>
            <td className="p-3 border">Wi-Fi</td>
            <td className="p-3 border">Wireless LAN standards</td>
          </tr>
          <tr>
            <td className="p-3 border">IEEE 802.15</td>
            <td className="p-3 border">WPAN</td>
            <td className="p-3 border">Bluetooth, Zigbee</td>
          </tr>
          <tr>
            <td className="p-3 border">IEEE 802.16</td>
            <td className="p-3 border">WiMAX</td>
            <td className="p-3 border">Broadband wireless access</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Internet Protocol Suite (TCP/IP)</h2>
    <p className="leading-relaxed">
      The TCP/IP protocol suite is the foundation of the Internet. It defines how data should be
      packetized, addressed, transmitted, routed, and received at the destination.
    </p>

    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">TCP (Transmission Control Protocol)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Connection-oriented protocol</li>
          <li>Reliable, ordered delivery</li>
          <li>Error detection and correction</li>
          <li>Flow and congestion control</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">UDP (User Datagram Protocol)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Connectionless protocol</li>
          <li>Fast but unreliable</li>
          <li>No guaranteed delivery</li>
          <li>Used for streaming, gaming</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">IP (Internet Protocol)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Logical addressing (IP addresses)</li>
          <li>Packet routing</li>
          <li>IPv4 (32-bit) and IPv6 (128-bit)</li>
          <li>Best-effort delivery</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">ICMP (Internet Control Message Protocol)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Error reporting</li>
          <li>Diagnostic functions (ping)</li>
          <li>Network management</li>
          <li>Path MTU discovery</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">RFCs (Request for Comments)</h2>
    <p className="leading-relaxed">
      RFCs are formal documents from the IETF that describe Internet standards, protocols, procedures,
      and events. They are the official documentation for Internet protocols.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <h3 className="font-bold mb-2">Important RFCs</h3>
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li><strong>RFC 791:</strong> Internet Protocol (IP)</li>
        <li><strong>RFC 793:</strong> Transmission Control Protocol (TCP)</li>
        <li><strong>RFC 768:</strong> User Datagram Protocol (UDP)</li>
        <li><strong>RFC 2616:</strong> HTTP/1.1</li>
        <li><strong>RFC 5321:</strong> Simple Mail Transfer Protocol (SMTP)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Standards Matter</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Benefits</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Interoperability between vendors</li>
          <li>Reduced development costs</li>
          <li>Consistent quality and performance</li>
          <li>Global compatibility</li>
          <li>Easier troubleshooting</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Without Standards</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Proprietary solutions only</li>
          <li>Incompatible systems</li>
          <li>Higher costs</li>
          <li>Limited innovation</li>
          <li>Vendor lock-in</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Standards ensure interoperability between different network devices</li>
        <li>Protocols define the rules for data communication</li>
        <li>IEEE, IETF, ISO, and ITU are major standards organizations</li>
        <li>TCP/IP is the foundation protocol suite of the Internet</li>
        <li>RFCs document Internet standards and protocols</li>
        <li>IEEE 802 standards cover LAN and WLAN technologies</li>
      </ul>
    </div>
  </div>
);

export default StandardsProtocols;
