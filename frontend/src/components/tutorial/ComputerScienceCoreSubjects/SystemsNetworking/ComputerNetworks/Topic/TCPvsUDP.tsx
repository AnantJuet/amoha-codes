import React from 'react';

const TCPvsUDP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP vs UDP Comparison
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      TCP and UDP are the two main transport layer protocols. TCP provides reliable,
      ordered delivery with connection management, while UDP offers fast, connectionless
      transmission. The choice between them depends on application requirements.
    </p>

    <h2 className="text-3xl font-bold mt-8">Comprehensive Comparison</h2>
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
            <td className="p-3 border">Guaranteed delivery</td>
            <td className="p-3 border">Best-effort (unreliable)</td>
          </tr>
          <tr>
            <td className="p-3 border">Ordering</td>
            <td className="p-3 border">Ordered delivery</td>
            <td className="p-3 border">No ordering</td>
          </tr>
          <tr>
            <td className="p-3 border">Flow Control</td>
            <td className="p-3 border">Yes (sliding window)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Congestion Control</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Header Size</td>
            <td className="p-3 border">20-60 bytes</td>
            <td className="p-3 border">8 bytes</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Slower</td>
            <td className="p-3 border">Faster</td>
          </tr>
          <tr>
            <td className="p-3 border">Overhead</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower</td>
          </tr>
          <tr>
            <td className="p-3 border">Broadcast/Multicast</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">State</td>
            <td className="p-3 border">Stateful</td>
            <td className="p-3 border">Stateless</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Visual Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    TCP Communication:

    Client              Server
       |-- SYN -------->|
       |<- SYN+ACK -----|     Connection setup
       |-- ACK -------->|
       |                |
       |== Data 1 =====>|
       |<===== ACK =====|     Reliable transfer
       |== Data 2 =====>|     with acknowledgments
       |<===== ACK =====|
       |                |
       |-- FIN -------->|
       |<- FIN+ACK -----|     Connection teardown
       |-- ACK -------->|


    UDP Communication:

    Client              Server
       |                |
       |== Data 1 =====>|     No connection
       |== Data 2 =====>|     No acknowledgments
       |== Data 3 =====>|     Fire and forget
       |                |
       (Data 2 may be lost, no one knows!)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use TCP</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Use TCP When</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Data must arrive complete</li>
          <li>Order matters</li>
          <li>Reliability is critical</li>
          <li>Error recovery needed</li>
          <li>Long-lived connections</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">TCP Applications</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>HTTP/HTTPS (web)</li>
          <li>FTP (file transfer)</li>
          <li>SMTP/POP3/IMAP (email)</li>
          <li>SSH (secure shell)</li>
          <li>Database connections</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use UDP</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Use UDP When</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Speed is critical</li>
          <li>Some loss is acceptable</li>
          <li>Real-time data</li>
          <li>Broadcast/multicast needed</li>
          <li>Simple request-response</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">UDP Applications</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>DNS (queries)</li>
          <li>DHCP (configuration)</li>
          <li>VoIP (voice calls)</li>
          <li>Online gaming</li>
          <li>Video streaming</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Performance Comparison</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Latency and Throughput</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>TCP Latency:</strong> Higher (connection setup + ACKs)</li>
        <li><strong>UDP Latency:</strong> Lower (no setup, no ACKs)</li>
        <li><strong>TCP Throughput:</strong> Limited by congestion control</li>
        <li><strong>UDP Throughput:</strong> Limited only by network capacity</li>
        <li><strong>TCP Jitter:</strong> Higher (retransmissions)</li>
        <li><strong>UDP Jitter:</strong> Lower (no retransmissions)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Decision Flowchart</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Choose TCP or UDP:

    Is data loss acceptable?
         |
    +----+----+
    |         |
   NO        YES
    |         |
   TCP       Is low latency critical?
              |
         +----+----+
         |         |
        YES       NO
         |         |
        UDP       Consider TCP
         |         (reliability may help)
    Real-time?
         |
        YES
         |
        UDP
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>TCP: reliable, ordered, connection-oriented</li>
        <li>UDP: fast, simple, connectionless</li>
        <li>TCP for files, web, email, databases</li>
        <li>UDP for DNS, VoIP, gaming, streaming</li>
        <li>TCP has more overhead but guarantees delivery</li>
        <li>UDP is faster but may lose data</li>
      </ul>
    </div>
  </div>
);

export default TCPvsUDP;
