import React from 'react';

const TCP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP (Transmission Control Protocol)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      TCP is a connection-oriented transport layer protocol that provides reliable, ordered,
      and error-checked delivery of data. It establishes a connection before data transfer,
      ensures all data arrives correctly, and handles flow control and congestion control.
    </p>

    <h2 className="text-3xl font-bold mt-8">TCP Characteristics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Connection-Oriented</td>
            <td className="p-3 border">3-way handshake before data transfer</td>
          </tr>
          <tr>
            <td className="p-3 border">Reliable Delivery</td>
            <td className="p-3 border">Acknowledgments and retransmissions</td>
          </tr>
          <tr>
            <td className="p-3 border">Ordered Delivery</td>
            <td className="p-3 border">Sequence numbers ensure correct order</td>
          </tr>
          <tr>
            <td className="p-3 border">Flow Control</td>
            <td className="p-3 border">Sliding window prevents overflow</td>
          </tr>
          <tr>
            <td className="p-3 border">Congestion Control</td>
            <td className="p-3 border">Adapts to network conditions</td>
          </tr>
          <tr>
            <td className="p-3 border">Full Duplex</td>
            <td className="p-3 border">Bidirectional communication</td>
          </tr>
          <tr>
            <td className="p-3 border">Byte Stream</td>
            <td className="p-3 border">No message boundaries</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">TCP Connection Lifecycle</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    TCP Connection Lifecycle:

    1. CONNECTION ESTABLISHMENT (3-way handshake)
       Client              Server
          |--- SYN -------->|
          |<-- SYN+ACK -----|
          |--- ACK -------->|
       Connection Established

    2. DATA TRANSFER
       Client              Server
          |==== Data ======>|
          |<==== ACK =======|
          |<==== Data ======|
          |==== ACK =======>|
       Bidirectional

    3. CONNECTION TERMINATION (4-way handshake)
       Client              Server
          |--- FIN -------->|
          |<-- ACK ---------|
          |<-- FIN ---------|
          |--- ACK -------->|
       Connection Closed
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Reliability Mechanisms</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Acknowledgments</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Receiver confirms data receipt</li>
          <li>ACK number = next expected byte</li>
          <li>Cumulative acknowledgments</li>
          <li>Selective ACK (SACK) optional</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Retransmission</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Timeout-based retransmission</li>
          <li>Fast retransmit (3 dup ACKs)</li>
          <li>RTO (Retransmission Timeout)</li>
          <li>Adaptive timeout calculation</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sequence Numbers</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Sequence Number Example:

    Initial Sequence Number (ISN): 1000

    Segment 1: Seq=1000, Data=500 bytes
    Segment 2: Seq=1500, Data=500 bytes
    Segment 3: Seq=2000, Data=500 bytes

    Receiver sends: ACK=2500 (expecting byte 2500 next)

    If Segment 2 is lost:
    Receiver sends: ACK=1500 (still waiting for byte 1500)
    After retransmission: ACK=2500

    Sequence numbers wrap around at 2^32
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications Using TCP</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Application</th>
            <th className="p-3 border">Port</th>
            <th className="p-3 border">Why TCP?</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">HTTP/HTTPS</td>
            <td className="p-3 border">80/443</td>
            <td className="p-3 border">Web pages must load completely</td>
          </tr>
          <tr>
            <td className="p-3 border">FTP</td>
            <td className="p-3 border">20/21</td>
            <td className="p-3 border">File transfers need reliability</td>
          </tr>
          <tr>
            <td className="p-3 border">SSH</td>
            <td className="p-3 border">22</td>
            <td className="p-3 border">Command integrity required</td>
          </tr>
          <tr>
            <td className="p-3 border">SMTP</td>
            <td className="p-3 border">25</td>
            <td className="p-3 border">Emails must be delivered</td>
          </tr>
          <tr>
            <td className="p-3 border">Database</td>
            <td className="p-3 border">Various</td>
            <td className="p-3 border">Data consistency critical</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">TCP State Diagram</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Key TCP States</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>CLOSED:</strong> No connection</li>
        <li><strong>LISTEN:</strong> Server waiting for connections</li>
        <li><strong>SYN_SENT:</strong> Client sent SYN, waiting</li>
        <li><strong>SYN_RECEIVED:</strong> Server received SYN, sent SYN+ACK</li>
        <li><strong>ESTABLISHED:</strong> Connection open, data transfer</li>
        <li><strong>FIN_WAIT_1/2:</strong> Closing, waiting for FIN</li>
        <li><strong>TIME_WAIT:</strong> Waiting before final close (2*MSL)</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>TCP is connection-oriented and reliable</li>
        <li>Uses 3-way handshake for connection</li>
        <li>Sequence numbers ensure ordered delivery</li>
        <li>ACKs confirm receipt, triggers retransmit</li>
        <li>Flow control prevents receiver overflow</li>
        <li>Congestion control adapts to network</li>
      </ul>
    </div>
  </div>
);

export default TCP;
