import React from 'react';

const EncapsulationDecapsulation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Encapsulation and Decapsulation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Encapsulation and Decapsulation are fundamental processes in network communication. Encapsulation
      is the process of adding headers (and sometimes trailers) to data as it moves down the protocol
      stack, while Decapsulation is the reverse process of removing these headers as data moves up
      the stack at the receiving end.
    </p>

    <h2 className="text-3xl font-bold mt-8">Encapsulation Process</h2>
    <p className="leading-relaxed">
      When data is sent from one device to another, each layer of the TCP/IP or OSI model adds its
      own control information (header) to the data. This process is called encapsulation. The data
      unit at each layer has a specific name.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    ENCAPSULATION (Sender Side):

    Application Layer
    +------------------+
    |      DATA        |  <- Application data
    +------------------+
           |
           v  Add Application Header
    Transport Layer
    +--------+------------------+
    |TCP/UDP |      DATA        |  <- Segment (TCP) / Datagram (UDP)
    | Header |                  |
    +--------+------------------+
           |
           v  Add IP Header
    Internet Layer
    +------+--------+------------------+
    |  IP  |TCP/UDP |      DATA        |  <- Packet
    |Header| Header |                  |
    +------+--------+------------------+
           |
           v  Add Frame Header & Trailer
    Network Access Layer
    +-------+------+--------+------------------+-------+
    | Frame |  IP  |TCP/UDP |      DATA        | Frame |  <- Frame
    |Header |Header| Header |                  |Trailer|
    +-------+------+--------+------------------+-------+
           |
           v
    Physical Layer: Transmit as Bits (0101010101...)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Decapsulation Process</h2>
    <p className="leading-relaxed">
      At the receiving end, the reverse process occurs. Each layer removes its respective header,
      processes the information, and passes the remaining data to the layer above. This continues
      until the original data reaches the application.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    DECAPSULATION (Receiver Side):

    Physical Layer: Receive Bits (0101010101...)
           |
           v
    Network Access Layer
    +-------+------+--------+------------------+-------+
    | Frame |  IP  |TCP/UDP |      DATA        | Frame |
    |Header |Header| Header |                  |Trailer|
    +-------+------+--------+------------------+-------+
           |
           v  Remove Frame Header & Verify FCS
    Internet Layer
    +------+--------+------------------+
    |  IP  |TCP/UDP |      DATA        |
    |Header| Header |                  |
    +------+--------+------------------+
           |
           v  Remove IP Header, Check Destination
    Transport Layer
    +--------+------------------+
    |TCP/UDP |      DATA        |
    | Header |                  |
    +--------+------------------+
           |
           v  Remove Transport Header, Reassemble
    Application Layer
    +------------------+
    |      DATA        |  <- Original data delivered
    +------------------+
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Protocol Data Units (PDUs)</h2>
    <p className="leading-relaxed">
      Each layer works with data in a specific format called a Protocol Data Unit (PDU).
      The PDU name changes at each layer to reflect the encapsulation that has occurred.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Layer</th>
            <th className="p-3 border">PDU Name</th>
            <th className="p-3 border">Header Added</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Application</td>
            <td className="p-3 border">Data / Message</td>
            <td className="p-3 border">Application-specific</td>
          </tr>
          <tr>
            <td className="p-3 border">Transport</td>
            <td className="p-3 border">Segment (TCP) / Datagram (UDP)</td>
            <td className="p-3 border">TCP/UDP Header (ports, seq, etc.)</td>
          </tr>
          <tr>
            <td className="p-3 border">Internet</td>
            <td className="p-3 border">Packet</td>
            <td className="p-3 border">IP Header (source/dest IP, TTL)</td>
          </tr>
          <tr>
            <td className="p-3 border">Network Access</td>
            <td className="p-3 border">Frame</td>
            <td className="p-3 border">Frame Header + Trailer (MAC, FCS)</td>
          </tr>
          <tr>
            <td className="p-3 border">Physical</td>
            <td className="p-3 border">Bits</td>
            <td className="p-3 border">Signal encoding</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Web Page Request</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>When you visit a website:</strong>
      </p>
      <ol className="list-decimal list-inside space-y-2 mt-2">
        <li><strong>Application:</strong> Browser creates HTTP GET request</li>
        <li><strong>Transport:</strong> TCP adds port numbers (80/443), sequence numbers</li>
        <li><strong>Internet:</strong> IP adds source and destination IP addresses</li>
        <li><strong>Network Access:</strong> Ethernet adds MAC addresses and FCS</li>
        <li><strong>Physical:</strong> Bits are transmitted as electrical/optical signals</li>
      </ol>
      <p className="mt-2">
        At the web server, the process reverses - each layer removes its header and passes
        data up until the HTTP request reaches the web server application.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Encapsulation Matters</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Modularity</h3>
        <p className="text-sm">Each layer operates independently, making it easier to update or replace protocols without affecting other layers.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Interoperability</h3>
        <p className="text-sm">Standardized headers allow devices from different vendors to communicate.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Error Handling</h3>
        <p className="text-sm">Each layer can detect and handle errors specific to its function.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Addressing</h3>
        <p className="text-sm">Different addressing schemes (IP, MAC) are used at appropriate layers.</p>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Encapsulation adds headers as data moves down the stack</li>
        <li>Decapsulation removes headers as data moves up the stack</li>
        <li>Each layer has its own PDU name: Data, Segment, Packet, Frame, Bits</li>
        <li>Headers contain control information for that layer's protocol</li>
        <li>This process enables modular, interoperable network communication</li>
        <li>Only the destination layer processes its respective header</li>
      </ul>
    </div>
  </div>
);

export default EncapsulationDecapsulation;
