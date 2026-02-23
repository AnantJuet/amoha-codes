import React from 'react';

const TCPFlowControl: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP Flow Control
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Flow control is a mechanism that prevents a fast sender from overwhelming a slow receiver.
      TCP implements flow control using a sliding window protocol, where the receiver advertises
      how much buffer space it has available, and the sender limits its transmission accordingly.
    </p>

    <h2 className="text-3xl font-bold mt-8">Sliding Window Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Sliding Window Flow Control:

    Sender's View:
    +---+---+---+---+---+---+---+---+---+---+
    | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |
    +---+---+---+---+---+---+---+---+---+---+
    |ACKed  |Sent   |Can    |Cannot send   |
    |       |wait   |send   |yet           |
            |<---- Window ---->|

    Receiver advertises: Window = 4
    Sender can have 4 unacknowledged segments in flight

    As ACKs arrive, window slides forward:
    +---+---+---+---+---+---+---+---+---+---+
    | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |
    +---+---+---+---+---+---+---+---+---+---+
    |ACKed      |Sent   |Can    |Cannot    |
                |wait   |send   |send      |
                |<---- Window ---->|
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Receive Window (rwnd)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Receive Buffer Management:

    Receiver Buffer (4KB example):
    +-------------------------------------------+
    |  Used by App  |  Received  |  Available  |
    |    (read)     |  (waiting) |   (empty)   |
    +-------------------------------------------+
                    |<--- rwnd advertised ---->|

    rwnd = Buffer Size - (Received - Read)

    Example:
    Buffer size: 4096 bytes
    Data received: 2000 bytes
    App read: 500 bytes
    rwnd = 4096 - (2000 - 500) = 2596 bytes

    Sender sees: Window: 2596 in TCP header
    Sender limits transmission to 2596 bytes
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Window Field in TCP Header</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Window Advertisement</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>16-bit field in TCP header</li>
        <li>Maximum value: 65,535 bytes</li>
        <li>Updated with every ACK sent</li>
        <li>Receiver controls sender's rate</li>
        <li>Window Scaling option for larger windows</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Zero Window</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Zero Window Situation:

    Sender                              Receiver
       |                                   |
       |===== Data ======================>|
       |                                   | Buffer full!
       |<==== ACK, Window=0 ==============|
       |                                   |
       |     STOP SENDING                  |
       |                                   |
       |---- Window Probe (1 byte) ------>| Periodic
       |<==== ACK, Window=0 ==============| Still full
       |                                   |
       |---- Window Probe --------------->|
       |<==== ACK, Window=2000 ===========| App read data!
       |                                   |
       |===== Resume sending ============>|

    Persist Timer prevents deadlock:
    - Sender probes receiver periodically
    - Receiver responds with current window
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Window Scaling</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scale Factor</th>
            <th className="p-3 border">Multiplier</th>
            <th className="p-3 border">Max Window</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">65,535 bytes</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">128</td>
            <td className="p-3 border">~8 MB</td>
          </tr>
          <tr>
            <td className="p-3 border">14</td>
            <td className="p-3 border">16,384</td>
            <td className="p-3 border">~1 GB</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Silly Window Syndrome</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Problem</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Receiver advertises tiny windows</li>
          <li>Sender sends tiny segments</li>
          <li>High overhead (40B header for 1B data)</li>
          <li>Network becomes inefficient</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Solutions</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li><strong>Receiver:</strong> Don't advertise small windows</li>
          <li>Wait until buffer is half empty or MSS</li>
          <li><strong>Sender:</strong> Nagle's algorithm</li>
          <li>Buffer small data, send in larger chunks</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Flow control prevents receiver buffer overflow</li>
        <li>Receiver advertises available buffer in Window field</li>
        <li>Sender limits unACKed data to receiver's window</li>
        <li>Zero window causes sender to pause</li>
        <li>Window scaling allows windows greater than 64KB</li>
        <li>Silly window syndrome solved by Nagle's algorithm</li>
      </ul>
    </div>
  </div>
);

export default TCPFlowControl;
