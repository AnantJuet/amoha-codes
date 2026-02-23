import React from 'react';

const CongestionControl: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP Congestion Control
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Congestion control prevents the sender from overwhelming the network. Unlike flow control
      (which protects the receiver), congestion control adapts the transmission rate based on
      network conditions. TCP uses a congestion window (cwnd) that grows and shrinks based
      on feedback from the network.
    </p>

    <h2 className="text-3xl font-bold mt-8">Flow Control vs Congestion Control</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Flow Control</th>
            <th className="p-3 border">Congestion Control</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Protects</td>
            <td className="p-3 border">Receiver</td>
            <td className="p-3 border">Network</td>
          </tr>
          <tr>
            <td className="p-3 border">Window</td>
            <td className="p-3 border">rwnd (advertised)</td>
            <td className="p-3 border">cwnd (calculated)</td>
          </tr>
          <tr>
            <td className="p-3 border">Feedback</td>
            <td className="p-3 border">Explicit (TCP header)</td>
            <td className="p-3 border">Implicit (packet loss)</td>
          </tr>
          <tr>
            <td className="p-3 border">Problem</td>
            <td className="p-3 border">Buffer overflow</td>
            <td className="p-3 border">Network congestion</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Effective Window</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Sending Rate Limit</h3>
      <div className="font-mono text-sm text-gray-900">
        <p>Effective Window = min(cwnd, rwnd)</p>
        <p className="mt-2">The sender transmits at the smaller of:</p>
        <ul className="list-disc list-inside mt-1">
          <li>What the receiver can handle (rwnd)</li>
          <li>What the network can handle (cwnd)</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Congestion Control Phases</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    TCP Congestion Control Phases:

    cwnd
    ^
    |                    * Congestion!
    |                   *  (packet loss)
    |                  *
    |                 *    ssthresh = cwnd/2
    |                *     cwnd = 1 MSS
    |       ssthresh*______|
    |              /|      |
    |             / |  Congestion
    |            /  |  Avoidance
    |           /   |  (linear)
    |          /    |
    |    Slow /     |
    |   Start/      |
    |  (exp) /      |
    |       /       |
    |______/________|__________________> time
           ssthresh

    1. Slow Start: Exponential growth until ssthresh
    2. Congestion Avoidance: Linear growth after ssthresh
    3. Congestion Detection: Packet loss triggers reduction
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Congestion Detection</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Indication</th>
            <th className="p-3 border">Severity</th>
            <th className="p-3 border">Response</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">3 Duplicate ACKs</td>
            <td className="p-3 border">Mild congestion</td>
            <td className="p-3 border">Fast retransmit + fast recovery</td>
          </tr>
          <tr>
            <td className="p-3 border">Timeout</td>
            <td className="p-3 border">Severe congestion</td>
            <td className="p-3 border">Slow start from cwnd = 1</td>
          </tr>
          <tr>
            <td className="p-3 border">ECN (if enabled)</td>
            <td className="p-3 border">Early warning</td>
            <td className="p-3 border">Reduce cwnd preemptively</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">TCP Congestion Algorithms</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Traditional</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li><strong>Tahoe:</strong> Original (1988)</li>
          <li><strong>Reno:</strong> Added fast recovery</li>
          <li><strong>NewReno:</strong> Improved fast recovery</li>
          <li><strong>CUBIC:</strong> Linux default</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Modern</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li><strong>BBR:</strong> Google's algorithm</li>
          <li><strong>QUIC:</strong> UDP-based transport</li>
          <li>Model-based approach</li>
          <li>Better for high-latency networks</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Response to Packet Loss:

    Tahoe (timeout or 3 dup ACKs):
    - ssthresh = cwnd / 2
    - cwnd = 1 MSS
    - Enter slow start

    Reno (3 dup ACKs):
    - ssthresh = cwnd / 2
    - cwnd = ssthresh (fast recovery)
    - Enter congestion avoidance

    Reno (timeout):
    - Same as Tahoe

    CUBIC:
    - Uses cubic function for cwnd growth
    - Better utilization of high-bandwidth links
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Congestion control protects the network</li>
        <li>cwnd limits data in flight based on network</li>
        <li>Effective window = min(cwnd, rwnd)</li>
        <li>Packet loss signals congestion</li>
        <li>Slow start + congestion avoidance + fast recovery</li>
        <li>Modern algorithms: CUBIC, BBR</li>
      </ul>
    </div>
  </div>
);

export default CongestionControl;
