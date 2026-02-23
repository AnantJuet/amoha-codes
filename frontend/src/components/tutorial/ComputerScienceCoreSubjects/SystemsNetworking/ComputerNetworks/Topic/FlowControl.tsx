import React from 'react';

const FlowControl: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Flow Control in Data Link Layer
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Flow control is a mechanism that manages the rate of data transmission between sender and
      receiver to prevent the sender from overwhelming the receiver with data faster than it can
      process. It ensures efficient use of resources and prevents buffer overflow at the receiver.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Flow Control?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Speed Mismatch:</strong> Sender may be faster than receiver</li>
      <li><strong>Buffer Overflow:</strong> Prevent receiver's buffer from overflowing</li>
      <li><strong>Processing Time:</strong> Receiver needs time to process incoming data</li>
      <li><strong>Efficient Transmission:</strong> Optimize network resource usage</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Flow Control Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Flow Control Techniques:

                    Flow Control
                         |
          +--------------+--------------+
          |                             |
    Stop-and-Wait                 Sliding Window
                                       |
                           +-----------+-----------+
                           |                       |
                      Go-Back-N              Selective Repeat
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Stop-and-Wait Protocol</h2>
    <p className="leading-relaxed">
      The simplest flow control mechanism where the sender transmits one frame and waits for an
      acknowledgment (ACK) before sending the next frame.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Stop-and-Wait:

    Sender                          Receiver
       |                               |
       |-------- Frame 0 ------------>|
       |                               | Process
       |<------- ACK 0 ---------------|
       |                               |
       |-------- Frame 1 ------------>|
       |                               | Process
       |<------- ACK 1 ---------------|
       |                               |

    Efficiency = T_transmission / (T_transmission + 2*T_propagation)
               = 1 / (1 + 2a)  where a = T_prop / T_trans
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Sliding Window Protocol</h2>
    <p className="leading-relaxed">
      Allows multiple frames to be in transit simultaneously. The sender maintains a window of
      frames it can send without waiting for acknowledgments, improving efficiency.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Sliding Window Concept:

    Sender Window (size = 4):
    |0|1|2|3|4|5|6|7|8|9|...
    [=======]           <- Can send frames 0,1,2,3

    After ACK for 0:
    |0|1|2|3|4|5|6|7|8|9|...
      [=======]         <- Window slides, can send 1,2,3,4

    Window Size determines:
    - How many frames can be outstanding (unacknowledged)
    - Maximum throughput of the protocol
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Flow Control Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Stop-and-Wait</th>
            <th className="p-3 border">Go-Back-N</th>
            <th className="p-3 border">Selective Repeat</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Window Size (Sender)</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">N (up to 2^n - 1)</td>
            <td className="p-3 border">N (up to 2^(n-1))</td>
          </tr>
          <tr>
            <td className="p-3 border">Window Size (Receiver)</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">N</td>
          </tr>
          <tr>
            <td className="p-3 border">Retransmission</td>
            <td className="p-3 border">Single frame</td>
            <td className="p-3 border">All from error</td>
            <td className="p-3 border">Only lost frames</td>
          </tr>
          <tr>
            <td className="p-3 border">Efficiency</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Efficiency Formulas</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <p className="font-mono text-sm text-gray-900">
        Let a = Propagation time / Transmission time<br/><br/>
        Stop-and-Wait: Efficiency = 1 / (1 + 2a)<br/>
        Sliding Window: Efficiency = N / (1 + 2a) if N &lt; 1+2a<br/>
                                   = 1 if N &gt;= 1+2a<br/><br/>
        For maximum efficiency: Window size N &gt;= 1 + 2a
      </p>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Flow control prevents sender from overwhelming receiver</li>
        <li>Stop-and-Wait: Simple but inefficient (window size = 1)</li>
        <li>Sliding Window: Multiple frames in transit, better efficiency</li>
        <li>Go-Back-N: Retransmits all frames from error point</li>
        <li>Selective Repeat: Retransmits only lost/error frames</li>
        <li>Efficiency depends on window size and propagation delay</li>
      </ul>
    </div>
  </div>
);

export default FlowControl;
