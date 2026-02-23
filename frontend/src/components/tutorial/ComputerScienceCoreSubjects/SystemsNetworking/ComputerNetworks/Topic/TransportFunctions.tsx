import React from 'react';

const TransportFunctions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Transport Layer Functions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Transport Layer (Layer 4) provides end-to-end communication services for applications.
      It is responsible for segmentation, flow control, error control, and multiplexing.
      The two main transport protocols are TCP (reliable) and UDP (unreliable but fast).
    </p>

    <h2 className="text-3xl font-bold mt-8">Position in OSI Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    OSI Model - Transport Layer:

    +------------------------+
    |   Application Layer    |   Layer 7
    +------------------------+
    |   Presentation Layer   |   Layer 6
    +------------------------+
    |   Session Layer        |   Layer 5
    +------------------------+
    |   TRANSPORT LAYER      |   Layer 4  <-- THIS LAYER
    +------------------------+
    |   Network Layer        |   Layer 3
    +------------------------+
    |   Data Link Layer      |   Layer 2
    +------------------------+
    |   Physical Layer       |   Layer 1
    +------------------------+

    Transport PDU: Segment (TCP) or Datagram (UDP)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Functions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">TCP</th>
            <th className="p-3 border">UDP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Segmentation</td>
            <td className="p-3 border">Break data into segments</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiplexing</td>
            <td className="p-3 border">Multiple apps on one IP</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Connection</td>
            <td className="p-3 border">Establish session</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Reliability</td>
            <td className="p-3 border">Guaranteed delivery</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Flow Control</td>
            <td className="p-3 border">Prevent buffer overflow</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Control</td>
            <td className="p-3 border">Detect/retransmit errors</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Detection only</td>
          </tr>
          <tr>
            <td className="p-3 border">Ordering</td>
            <td className="p-3 border">Maintain sequence</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Segmentation and Reassembly</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Segmentation Process:

    Application Data:
    +--------------------------------------------------+
    |              Large Data Block (10 KB)            |
    +--------------------------------------------------+
                          |
                    Segmentation
                          |
                          v
    +----------+  +----------+  +----------+  +----------+
    | Segment 1|  | Segment 2|  | Segment 3|  | Segment 4|
    | Seq: 0   |  | Seq: 1460|  | Seq: 2920|  | Seq: 4380|
    +----------+  +----------+  +----------+  +----------+

    Each segment:
    - Has transport header (TCP/UDP)
    - Has sequence number (TCP)
    - Is passed to network layer
    - Can arrive out of order
    - Reassembled at destination
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multiplexing and Demultiplexing</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Multiplexing (Multiple apps sharing one connection):

    Browser   Email     SSH
    (Port 80) (Port 25) (Port 22)
       |         |         |
       v         v         v
    +---------------------------+
    |      Transport Layer      |
    |   Combines into one IP    |
    +---------------------------+
              |
              v
    +---------------------------+
    |      Network Layer        |
    |    Single IP Address      |
    +---------------------------+

    Demultiplexing (Delivering to correct app):
    - Uses destination port number
    - TCP: 5-tuple (src IP, src port, dst IP, dst port, protocol)
    - UDP: 2-tuple (dst IP, dst port)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TCP vs UDP</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">TCP (Transmission Control Protocol)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Connection-oriented</li>
          <li>Reliable delivery</li>
          <li>In-order delivery</li>
          <li>Flow control (sliding window)</li>
          <li>Congestion control</li>
          <li>Used for: HTTP, FTP, SSH, Email</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">UDP (User Datagram Protocol)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Connectionless</li>
          <li>Best-effort delivery</li>
          <li>No ordering guarantee</li>
          <li>No flow control</li>
          <li>Minimal overhead</li>
          <li>Used for: DNS, DHCP, VoIP, Gaming</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Transport layer provides end-to-end communication</li>
        <li>Port numbers enable multiplexing/demultiplexing</li>
        <li>TCP: reliable, ordered, connection-oriented</li>
        <li>UDP: fast, simple, connectionless</li>
        <li>Segments data for transmission</li>
        <li>PDU: Segment (TCP) or Datagram (UDP)</li>
      </ul>
    </div>
  </div>
);

export default TransportFunctions;
