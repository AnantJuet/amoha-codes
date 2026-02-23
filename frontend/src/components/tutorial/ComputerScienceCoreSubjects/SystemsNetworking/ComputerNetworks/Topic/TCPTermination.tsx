import React from 'react';

const TCPTermination: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP Connection Termination
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      TCP connection termination is a graceful process that ensures all data is delivered before
      the connection closes. The four-way handshake allows each side to finish sending data
      independently. There's also an abrupt termination using RST for error conditions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Four-Way Handshake (Graceful Close)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Four-Way Handshake:

    Client                                           Server
    State: ESTABLISHED                         State: ESTABLISHED
       |                                              |
       |---------- FIN (Seq=x) ---------------------->|
       |           "No more data from me"             |
    State: FIN_WAIT_1                          State: CLOSE_WAIT
       |                                              |
       |<--------- ACK (Ack=x+1) ---------------------|
       |           "Received your FIN"                |
    State: FIN_WAIT_2                                 |
       |                   (Server finishes sending)  |
       |                                              |
       |<--------- FIN (Seq=y) -----------------------|
       |           "No more data from me"             |
       |                                        State: LAST_ACK
       |---------- ACK (Ack=y+1) -------------------->|
       |           "Received your FIN"                |
    State: TIME_WAIT                           State: CLOSED
       |                                              |
       | (Wait 2*MSL)                                 |
       |                                              |
    State: CLOSED
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Four Steps?</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Half-Close Capability</h3>
      <p className="text-sm mb-2">TCP connections are full-duplex, each direction closes independently:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Client can close its sending side</li>
        <li>Server can still send remaining data</li>
        <li>Server then closes its sending side</li>
        <li>Client acknowledges final close</li>
        <li>Useful when server needs time to process</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Simultaneous Close</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Simultaneous Close (Both sides close at once):

    Client                                    Server
       |                                         |
       |---------- FIN --------->               |
       |               <--------- FIN ----------|
       |                                         |
       |<--------- ACK ----------               |
       |               ---------- ACK --------->|
       |                                         |
    TIME_WAIT                              TIME_WAIT
       |                                         |
    CLOSED                                   CLOSED

    Both enter TIME_WAIT state
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TIME_WAIT State</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Duration</td>
            <td className="p-3 border">2 * MSL (Maximum Segment Lifetime)</td>
          </tr>
          <tr>
            <td className="p-3 border">Typical MSL</td>
            <td className="p-3 border">30 seconds to 2 minutes</td>
          </tr>
          <tr>
            <td className="p-3 border">Total Wait</td>
            <td className="p-3 border">1-4 minutes</td>
          </tr>
          <tr>
            <td className="p-3 border">Purpose 1</td>
            <td className="p-3 border">Retransmit final ACK if lost</td>
          </tr>
          <tr>
            <td className="p-3 border">Purpose 2</td>
            <td className="p-3 border">Let old duplicate packets expire</td>
          </tr>
          <tr>
            <td className="p-3 border">Issue</td>
            <td className="p-3 border">Can cause port exhaustion on busy servers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">RST (Abrupt Close)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    RST (Reset) - Immediate Termination:

    Client                                    Server
       |                                         |
       |---------- RST ------------------------->|
       |                                         |
    CLOSED                                   CLOSED

    When RST is used:
    - Connection refused (no server listening)
    - Connection aborted by application
    - Invalid segment received
    - Firewall blocking connection
    - Process crash

    RST effects:
    - No TIME_WAIT state
    - No graceful close
    - Data may be lost
    - Immediate connection termination
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Graceful vs Abrupt Close</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Graceful (FIN)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>All data delivered</li>
          <li>Application initiated</li>
          <li>TIME_WAIT ensures cleanup</li>
          <li>Both sides finish properly</li>
          <li>Normal termination</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Abrupt (RST)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Data may be lost</li>
          <li>Error condition</li>
          <li>No TIME_WAIT</li>
          <li>Immediate termination</li>
          <li>Abnormal condition</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Four steps: FIN, ACK, FIN, ACK</li>
        <li>Each direction closes independently</li>
        <li>TIME_WAIT lasts 2*MSL (1-4 minutes)</li>
        <li>RST provides immediate termination</li>
        <li>Half-close allows one-way data flow</li>
        <li>Graceful close ensures data delivery</li>
      </ul>
    </div>
  </div>
);

export default TCPTermination;
