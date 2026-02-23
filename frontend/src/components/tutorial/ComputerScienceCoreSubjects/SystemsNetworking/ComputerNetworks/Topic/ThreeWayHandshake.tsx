import React from 'react';

const ThreeWayHandshake: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP Three-Way Handshake
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The three-way handshake is the process used by TCP to establish a reliable connection
      between a client and server. It synchronizes sequence numbers, negotiates connection
      parameters, and ensures both sides are ready to exchange data.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Three Steps</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Three-Way Handshake Process:

    Client                                           Server
    State: CLOSED                              State: LISTEN
       |                                              |
       |                                              |
    State: SYN_SENT                                   |
       |                                              |
       |---------- SYN (Seq=100) ------------------->|
       |           Flags: SYN=1                       |
       |           "I want to connect"          State: SYN_RCVD
       |                                              |
       |<--------- SYN+ACK (Seq=300, Ack=101) -------|
       |           Flags: SYN=1, ACK=1                |
       |           "OK, let's connect"                |
       |                                              |
    State: ESTABLISHED                                |
       |                                              |
       |---------- ACK (Ack=301) -------------------->|
       |           Flags: ACK=1                       |
       |           "Connection confirmed"       State: ESTABLISHED
       |                                              |
       |============= DATA TRANSFER ==================|
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step-by-Step Breakdown</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Segment</th>
            <th className="p-3 border">Flags</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">SYN</td>
            <td className="p-3 border">SYN=1, ACK=0</td>
            <td className="p-3 border">Client sends ISN, requests connection</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">SYN+ACK</td>
            <td className="p-3 border">SYN=1, ACK=1</td>
            <td className="p-3 border">Server ACKs client, sends own ISN</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">ACK</td>
            <td className="p-3 border">SYN=0, ACK=1</td>
            <td className="p-3 border">Client ACKs server, connection established</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sequence Number Synchronization</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    ISN (Initial Sequence Number) Exchange:

    Step 1: Client chooses ISN = 100
            Sends: Seq=100

    Step 2: Server chooses ISN = 300
            Sends: Seq=300, Ack=101 (100+1)
            "I expect byte 101 next"

    Step 3: Client confirms
            Sends: Ack=301 (300+1)
            "I expect byte 301 next"

    After handshake:
    - Client's next Seq: 101
    - Server's next Seq: 301
    - Both know each other's ISN

    ISN is typically random for security
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Three Steps?</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Why Not Two Steps?</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>No confirmation from client</li>
          <li>Old SYN could create ghost connection</li>
          <li>Server wastes resources</li>
          <li>Seq number not synchronized</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Three Steps Ensures</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Both sides ready</li>
          <li>Both seq numbers exchanged</li>
          <li>Connection is bidirectional</li>
          <li>Old segments rejected</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">SYN Flood Attack</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Security Vulnerability</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Attacker sends many SYN packets</li>
        <li>Uses fake source IP addresses</li>
        <li>Server allocates resources for each SYN</li>
        <li>Half-open connections fill queue</li>
        <li>Legitimate connections denied</li>
      </ul>
      <p className="mt-2 font-semibold">Defenses: SYN cookies, rate limiting, firewalls</p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Connection Parameters</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Negotiated During Handshake</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>MSS:</strong> Maximum Segment Size</li>
        <li><strong>Window Scale:</strong> For larger windows</li>
        <li><strong>SACK:</strong> Selective Acknowledgment</li>
        <li><strong>Timestamps:</strong> RTT calculation</li>
        <li>Sent in SYN/SYN+ACK options</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Three steps: SYN, SYN+ACK, ACK</li>
        <li>Synchronizes sequence numbers (ISN)</li>
        <li>Both sides confirm readiness</li>
        <li>Options negotiated in SYN segments</li>
        <li>Prevents old duplicate connections</li>
        <li>Vulnerable to SYN flood attacks</li>
      </ul>
    </div>
  </div>
);

export default ThreeWayHandshake;
