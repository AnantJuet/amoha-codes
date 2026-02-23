import React from 'react';

const UDP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      UDP (User Datagram Protocol)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      UDP is a connectionless transport layer protocol that provides a simple, unreliable
      datagram service. It adds minimal overhead to IP, making it fast and efficient for
      applications that can tolerate some data loss but need low latency.
    </p>

    <h2 className="text-3xl font-bold mt-8">UDP Characteristics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">UDP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Connection</td>
            <td className="p-3 border">Connectionless</td>
          </tr>
          <tr>
            <td className="p-3 border">Reliability</td>
            <td className="p-3 border">Unreliable (best-effort)</td>
          </tr>
          <tr>
            <td className="p-3 border">Ordering</td>
            <td className="p-3 border">No guarantee</td>
          </tr>
          <tr>
            <td className="p-3 border">Flow Control</td>
            <td className="p-3 border">None</td>
          </tr>
          <tr>
            <td className="p-3 border">Congestion Control</td>
            <td className="p-3 border">None</td>
          </tr>
          <tr>
            <td className="p-3 border">Header Size</td>
            <td className="p-3 border">8 bytes (minimal)</td>
          </tr>
          <tr>
            <td className="p-3 border">Checksum</td>
            <td className="p-3 border">Optional (IPv4), Mandatory (IPv6)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">UDP Header Format</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    UDP Header (8 bytes only):

     0                   1                   2                   3
     0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |          Source Port          |       Destination Port        |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |            Length             |           Checksum            |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                             Data                              |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

    Source Port: 16 bits (0 if not used)
    Destination Port: 16 bits
    Length: Header + Data (min 8 bytes)
    Checksum: Error detection (optional in IPv4)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">UDP Communication</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    UDP is "Fire and Forget":

    Sender                              Receiver
       |                                   |
       |------- UDP Datagram 1 ----------->|
       |                                   |
       |------- UDP Datagram 2 ----X       | (Lost!)
       |                                   |
       |------- UDP Datagram 3 ----------->|
       |                                   |

    No handshake
    No acknowledgments
    No retransmission
    No ordering guarantee

    Datagrams may arrive:
    - Out of order (3 before 1)
    - Duplicated
    - Not at all (lost)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use UDP</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Good for UDP</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Real-time applications</li>
          <li>Streaming media</li>
          <li>Online gaming</li>
          <li>VoIP</li>
          <li>DNS queries</li>
          <li>IoT sensors</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Not Good for UDP</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>File transfers</li>
          <li>Email</li>
          <li>Web browsing</li>
          <li>Financial transactions</li>
          <li>Any data that must arrive complete</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications Using UDP</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Application</th>
            <th className="p-3 border">Port</th>
            <th className="p-3 border">Why UDP?</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">DNS</td>
            <td className="p-3 border">53</td>
            <td className="p-3 border">Small queries, can retry</td>
          </tr>
          <tr>
            <td className="p-3 border">DHCP</td>
            <td className="p-3 border">67, 68</td>
            <td className="p-3 border">Broadcast, no connection yet</td>
          </tr>
          <tr>
            <td className="p-3 border">TFTP</td>
            <td className="p-3 border">69</td>
            <td className="p-3 border">Simple, app handles reliability</td>
          </tr>
          <tr>
            <td className="p-3 border">NTP</td>
            <td className="p-3 border">123</td>
            <td className="p-3 border">Time sync, low latency needed</td>
          </tr>
          <tr>
            <td className="p-3 border">SNMP</td>
            <td className="p-3 border">161</td>
            <td className="p-3 border">Monitoring, can lose some data</td>
          </tr>
          <tr>
            <td className="p-3 border">RTP (VoIP)</td>
            <td className="p-3 border">Dynamic</td>
            <td className="p-3 border">Real-time, delay-sensitive</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">UDP Advantages</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Speed:</strong> No connection setup delay</li>
        <li><strong>Low overhead:</strong> Only 8-byte header</li>
        <li><strong>Broadcast/Multicast:</strong> Supports one-to-many</li>
        <li><strong>No congestion control:</strong> Constant rate possible</li>
        <li><strong>Application control:</strong> App decides reliability</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>UDP is connectionless and unreliable</li>
        <li>Minimal 8-byte header</li>
        <li>No guarantees: may lose, duplicate, reorder</li>
        <li>Fast and low-latency</li>
        <li>Used for DNS, DHCP, VoIP, gaming, streaming</li>
        <li>Application must handle reliability if needed</li>
      </ul>
    </div>
  </div>
);

export default UDP;
