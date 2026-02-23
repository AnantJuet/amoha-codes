import React from 'react';

const PDUs: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Protocol Data Units (PDUs)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Protocol Data Unit (PDU) is a single unit of information transmitted among peer entities
      of a computer network. It contains the data from the layer above plus the control information
      (header/trailer) added by the current layer. Each layer of the network model has its own
      specific PDU name.
    </p>

    <h2 className="text-3xl font-bold mt-8">PDUs at Each Layer</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    OSI Model PDUs:

    Layer 7 - Application  -----> Data
    Layer 6 - Presentation -----> Data
    Layer 5 - Session      -----> Data
    Layer 4 - Transport    -----> Segment (TCP) / Datagram (UDP)
    Layer 3 - Network      -----> Packet
    Layer 2 - Data Link    -----> Frame
    Layer 1 - Physical     -----> Bits

    TCP/IP Model PDUs:

    Application Layer  -----> Data / Message
    Transport Layer    -----> Segment / Datagram
    Internet Layer     -----> Packet
    Network Access     -----> Frame
    Physical           -----> Bits
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">PDU Structure at Each Layer</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Data (Application Layer)</h3>
    <p className="leading-relaxed">
      The application layer data is the actual user information that needs to be transmitted,
      such as web page content, email text, or file data.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. Segment / Datagram (Transport Layer)</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    TCP Segment:
    +----------------------------------------------+
    | Source Port | Dest Port | Seq Num | Ack Num |
    +----------------------------------------------+
    | Flags | Window | Checksum | Urgent Pointer  |
    +----------------------------------------------+
    |                  DATA                        |
    +----------------------------------------------+

    UDP Datagram:
    +---------------------------+
    | Source Port | Dest Port   |
    +---------------------------+
    |   Length    |  Checksum   |
    +---------------------------+
    |          DATA             |
    +---------------------------+
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Packet (Network/Internet Layer)</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    IP Packet:
    +-----------------------------------------------+
    | Ver | IHL | TOS | Total Length                |
    +-----------------------------------------------+
    | Identification | Flags | Fragment Offset      |
    +-----------------------------------------------+
    | TTL | Protocol | Header Checksum              |
    +-----------------------------------------------+
    |           Source IP Address                   |
    +-----------------------------------------------+
    |         Destination IP Address                |
    +-----------------------------------------------+
    |              SEGMENT/DATAGRAM                 |
    +-----------------------------------------------+
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Frame (Data Link Layer)</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Ethernet Frame:
    +----------+-------------+------------+--------+----------+-----+
    | Preamble | Dest MAC    | Source MAC | Type   |  PACKET  | FCS |
    | (8 bytes)| (6 bytes)   | (6 bytes)  |(2 bytes)|          | (4) |
    +----------+-------------+------------+--------+----------+-----+

    FCS = Frame Check Sequence (CRC for error detection)
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">5. Bits (Physical Layer)</h3>
    <p className="leading-relaxed">
      The frame is converted to a stream of bits (0s and 1s) that are transmitted as electrical
      signals (copper), light pulses (fiber), or radio waves (wireless).
    </p>

    <h2 className="text-3xl font-bold mt-8">PDU Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Layer</th>
            <th className="p-3 border">PDU Name</th>
            <th className="p-3 border">Header Information</th>
            <th className="p-3 border">Addressing</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Application</td>
            <td className="p-3 border">Data/Message</td>
            <td className="p-3 border">Application-specific</td>
            <td className="p-3 border">N/A</td>
          </tr>
          <tr>
            <td className="p-3 border">Transport</td>
            <td className="p-3 border">Segment/Datagram</td>
            <td className="p-3 border">Port numbers, Seq/Ack, Flags</td>
            <td className="p-3 border">Port Numbers</td>
          </tr>
          <tr>
            <td className="p-3 border">Network</td>
            <td className="p-3 border">Packet</td>
            <td className="p-3 border">IP addresses, TTL, Protocol</td>
            <td className="p-3 border">IP Addresses</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Link</td>
            <td className="p-3 border">Frame</td>
            <td className="p-3 border">MAC addresses, Type, FCS</td>
            <td className="p-3 border">MAC Addresses</td>
          </tr>
          <tr>
            <td className="p-3 border">Physical</td>
            <td className="p-3 border">Bits</td>
            <td className="p-3 border">Signal encoding</td>
            <td className="p-3 border">N/A</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">PDU Size Considerations</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">MTU (Maximum Transmission Unit)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Ethernet MTU: 1500 bytes</li>
          <li>Limits packet size at network layer</li>
          <li>Larger packets are fragmented</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">MSS (Maximum Segment Size)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>TCP MSS = MTU - IP header - TCP header</li>
          <li>Typically 1460 bytes for Ethernet</li>
          <li>Negotiated during TCP handshake</li>
        </ul>
      </div>
    </div>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
      <h3 className="font-bold mb-2">Overhead Calculation Example</h3>
      <div className="font-mono text-sm text-gray-900">
        Ethernet Frame (1518 bytes max):<br/>
        - Ethernet Header: 14 bytes<br/>
        - IP Header: 20 bytes (minimum)<br/>
        - TCP Header: 20 bytes (minimum)<br/>
        - FCS Trailer: 4 bytes<br/>
        <br/>
        Maximum TCP Data = 1518 - 14 - 20 - 20 - 4 = 1460 bytes
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>PDU is the unit of data at each network layer</li>
        <li>Names: Data - Segment - Packet - Frame - Bits</li>
        <li>Each PDU contains data from above plus layer-specific header</li>
        <li>Segment is for TCP, Datagram is for UDP</li>
        <li>MTU limits packet size (1500 bytes for Ethernet)</li>
        <li>Headers add overhead, reducing actual data capacity</li>
      </ul>
    </div>
  </div>
);

export default PDUs;
