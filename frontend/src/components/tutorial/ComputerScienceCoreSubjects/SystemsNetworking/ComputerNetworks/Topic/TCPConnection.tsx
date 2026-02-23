import React from 'react';

const TCPConnection: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP Connection Management
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      TCP is a connection-oriented protocol that requires establishing a connection before
      data transfer and terminating it afterward. Connection management involves the 3-way
      handshake for establishment, data transfer phase, and 4-way handshake for termination.
    </p>

    <h2 className="text-3xl font-bold mt-8">Connection Establishment (3-Way Handshake)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    3-Way Handshake:

    Client                                    Server
    (Active Open)                        (Passive Open)
       |                                      |
       |-------- SYN (Seq=x) --------------->|
       |         (SYN=1, ACK=0)              |
       |                                      |
       |<------ SYN+ACK (Seq=y, Ack=x+1) ----|
       |         (SYN=1, ACK=1)              |
       |                                      |
       |-------- ACK (Ack=y+1) ------------->|
       |         (SYN=0, ACK=1)              |
       |                                      |
    ESTABLISHED                          ESTABLISHED

    Purpose:
    1. SYN: Client initiates, sends ISN (x)
    2. SYN+ACK: Server acknowledges, sends its ISN (y)
    3. ACK: Client confirms, connection open
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Connection Termination (4-Way Handshake)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    4-Way Handshake (Graceful Close):

    Client                                    Server
       |                                      |
       |-------- FIN (Seq=x) --------------->|
       |         "I'm done sending"          |
       |                                      |
       |<------- ACK (Ack=x+1) --------------|
       |         "Received your FIN"         |
       |                                      |
       |<------- FIN (Seq=y) ----------------|
       |         "I'm done sending too"      |
       |                                      |
       |-------- ACK (Ack=y+1) ------------->|
       |         "Received your FIN"         |
       |                                      |
    TIME_WAIT (2*MSL)                    CLOSED
       |
    CLOSED

    Why 4 steps? Each direction closes independently.
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TCP State Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Simplified TCP State Machine:

                         CLOSED
                           |
              passive open | active open/SYN
                    +------+------+
                    |             |
                 LISTEN      SYN_SENT
                    |             |
               SYN/SYN+ACK   SYN+ACK/ACK
                    |             |
               SYN_RCVD <---------+
                    |
                  ACK
                    |
                ESTABLISHED
                    |
            +-------+-------+
            |               |
         FIN/ACK        close/FIN
            |               |
        CLOSE_WAIT      FIN_WAIT_1
            |               |
         close/FIN      ACK or FIN
            |               |
        LAST_ACK        FIN_WAIT_2 or CLOSING
            |               |
           ACK          FIN/ACK
            |               |
          CLOSED       TIME_WAIT (2*MSL)
                            |
                         CLOSED
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TCP States Explained</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">State</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">CLOSED</td>
            <td className="p-3 border">No connection exists</td>
          </tr>
          <tr>
            <td className="p-3 border">LISTEN</td>
            <td className="p-3 border">Server waiting for connection requests</td>
          </tr>
          <tr>
            <td className="p-3 border">SYN_SENT</td>
            <td className="p-3 border">Client sent SYN, waiting for SYN+ACK</td>
          </tr>
          <tr>
            <td className="p-3 border">SYN_RECEIVED</td>
            <td className="p-3 border">Server received SYN, sent SYN+ACK</td>
          </tr>
          <tr>
            <td className="p-3 border">ESTABLISHED</td>
            <td className="p-3 border">Connection open, data can flow</td>
          </tr>
          <tr>
            <td className="p-3 border">FIN_WAIT_1</td>
            <td className="p-3 border">Sent FIN, waiting for ACK or FIN</td>
          </tr>
          <tr>
            <td className="p-3 border">FIN_WAIT_2</td>
            <td className="p-3 border">Received ACK of FIN, waiting for FIN</td>
          </tr>
          <tr>
            <td className="p-3 border">CLOSE_WAIT</td>
            <td className="p-3 border">Received FIN, waiting for app to close</td>
          </tr>
          <tr>
            <td className="p-3 border">LAST_ACK</td>
            <td className="p-3 border">Sent FIN, waiting for final ACK</td>
          </tr>
          <tr>
            <td className="p-3 border">TIME_WAIT</td>
            <td className="p-3 border">Wait 2*MSL before full close</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">TIME_WAIT State</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Why TIME_WAIT (2*MSL)?</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>MSL:</strong> Maximum Segment Lifetime (typically 30s-2min)</li>
        <li>Ensures final ACK reaches other end</li>
        <li>Allows old duplicate segments to expire</li>
        <li>Prevents new connection from receiving old data</li>
        <li>Duration: 2 * MSL = 1-4 minutes</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>3-way handshake: SYN, SYN+ACK, ACK</li>
        <li>4-way termination: FIN, ACK, FIN, ACK</li>
        <li>Each direction closes independently</li>
        <li>TIME_WAIT ensures clean close (2*MSL)</li>
        <li>RST immediately terminates connection</li>
        <li>States tracked by both client and server</li>
      </ul>
    </div>
  </div>
);

export default TCPConnection;
