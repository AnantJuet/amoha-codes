import React from 'react';

const SlidingWindow: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Sliding Window Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Sliding Window is a flow control mechanism that allows a sender to transmit multiple frames
      before receiving acknowledgments. It maintains a window of frames that can be outstanding
      (sent but not yet acknowledged), significantly improving efficiency over Stop-and-Wait.
    </p>

    <h2 className="text-3xl font-bold mt-8">Window Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Sliding Window Visualization:

    Sender's View (Window size = 4):

    Frame:    0   1   2   3   4   5   6   7   8   ...
    Status: [Acked][Acked][Sent][Sent][Sent][Can Send][Not yet]
                    |-------- Window --------|

    - Frames 0,1: Acknowledged, removed from window
    - Frames 2,3,4: Sent, waiting for ACK
    - Frame 5: Can send (within window)
    - Frames 6+: Cannot send yet (outside window)

    When ACK for frame 2 arrives:
    Frame:    0   1   2   3   4   5   6   7   8   ...
    Status:         [Acked][Sent][Sent][Sent][Can Send][Not yet]
                          |-------- Window --------|
    Window slides right
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sender and Receiver Windows</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Sender Window</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Tracks frames that can be sent</li>
          <li>Holds sent but unacknowledged frames</li>
          <li>Slides right when ACK received</li>
          <li>Size determines max outstanding frames</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Receiver Window</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Tracks frames expected to receive</li>
          <li>Buffer for out-of-order frames</li>
          <li>Slides right when frame delivered</li>
          <li>Size varies by protocol type</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Sliding Window</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Sender Window</th>
            <th className="p-3 border">Receiver Window</th>
            <th className="p-3 border">On Error</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Go-Back-N</td>
            <td className="p-3 border">N (2^n - 1 max)</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Retransmit all from error</td>
          </tr>
          <tr>
            <td className="p-3 border">Selective Repeat</td>
            <td className="p-3 border">N (2^(n-1) max)</td>
            <td className="p-3 border">N</td>
            <td className="p-3 border">Retransmit only lost frame</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Window Size Constraints</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Maximum Window Size</h3>
      <div className="font-mono text-sm text-gray-900">
        For n-bit sequence numbers:<br/><br/>
        Go-Back-N: Max window = 2^n - 1<br/>
        Selective Repeat: Max window = 2^(n-1)<br/><br/>
        Example (3-bit sequence, numbers 0-7):<br/>
        Go-Back-N: Max window = 7<br/>
        Selective Repeat: Max window = 4
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Efficiency</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Efficiency Formula:

    Let:
    - a = Propagation delay / Transmission time
    - N = Window size

    If N >= 1 + 2a:
        Efficiency = 100% (channel fully utilized)

    If N < 1 + 2a:
        Efficiency = N / (1 + 2a)

    Example:
    a = 4 (propagation = 4 * transmission)
    1 + 2a = 9

    Window = 10: Efficiency = 100%
    Window = 5:  Efficiency = 5/9 = 55.6%
    Window = 1:  Efficiency = 1/9 = 11.1% (Stop-and-Wait)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Piggybacking</h2>
    <p className="leading-relaxed">
      In bidirectional communication, ACKs can be attached to outgoing data frames instead of
      being sent separately. This is called piggybacking and reduces overhead.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Piggybacking Example:

    Without Piggybacking:        With Piggybacking:
    A ---- Data 0 ----> B        A ---- Data 0 ----> B
    A <--- ACK 0 ------ B        A <-- Data 0,ACK 0-- B
    A <--- Data 0 ----- B        A -- Data 1,ACK 0--> B
    A ---- ACK 0 -----> B        A <-- Data 1,ACK 1-- B

    ACK carried with data frame, fewer total transmissions
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Sliding window allows multiple frames in transit</li>
        <li>Window slides right as ACKs are received</li>
        <li>Go-Back-N: Receiver window = 1, retransmit all from error</li>
        <li>Selective Repeat: Receiver window = N, retransmit only lost</li>
        <li>Efficiency near 100% when window size &gt;= 1 + 2a</li>
        <li>Piggybacking combines ACKs with data frames</li>
      </ul>
    </div>
  </div>
);

export default SlidingWindow;
