import React from 'react';

const SlowStart: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP Slow Start
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Slow Start is the initial phase of TCP congestion control. Despite its name, it grows
      the congestion window exponentially, doubling it with each round-trip time. This allows
      TCP to quickly probe the network's capacity without immediately causing congestion.
    </p>

    <h2 className="text-3xl font-bold mt-8">Slow Start Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Slow Start Algorithm:

    1. Initialize: cwnd = 1 MSS (or IW = 2-4 MSS)

    2. For each ACK received:
       cwnd = cwnd + 1 MSS

    3. Effect per RTT:
       cwnd doubles (1 -> 2 -> 4 -> 8 -> 16 ...)

    4. Continue until:
       - cwnd >= ssthresh (switch to congestion avoidance)
       - OR packet loss (reduce cwnd)
       - OR cwnd >= rwnd (receiver limited)

    Initial Window (IW):
    - RFC 2581: 1-2 MSS
    - RFC 3390: up to 4 MSS
    - RFC 6928: up to 10 MSS (common today)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Exponential Growth</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Slow Start Growth Example:

    RTT 1: cwnd = 1 MSS
           Send 1 segment
           Receive 1 ACK -> cwnd = 2

    RTT 2: cwnd = 2 MSS
           Send 2 segments
           Receive 2 ACKs -> cwnd = 4

    RTT 3: cwnd = 4 MSS
           Send 4 segments
           Receive 4 ACKs -> cwnd = 8

    RTT 4: cwnd = 8 MSS
           Send 8 segments
           Receive 8 ACKs -> cwnd = 16

    Graph:
    cwnd
    ^
    |                       * 16
    |                    *
    |                 *  8
    |              *
    |           *  4
    |        *
    |     *  2
    |  *
    |* 1
    +----------------------------> RTT
      1     2     3     4
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Slow Start Threshold (ssthresh)</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Transition Point</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Initial ssthresh: typically 64KB or larger</li>
        <li>When cwnd reaches ssthresh, switch to congestion avoidance</li>
        <li>On packet loss: ssthresh = cwnd / 2</li>
        <li>After timeout: cwnd = 1, restart slow start</li>
        <li>ssthresh remembers safe transmission rate</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Slow Start Scenarios</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">New connection</td>
            <td className="p-3 border">Start with cwnd = IW, ssthresh = large</td>
          </tr>
          <tr>
            <td className="p-3 border">cwnd reaches ssthresh</td>
            <td className="p-3 border">Switch to congestion avoidance</td>
          </tr>
          <tr>
            <td className="p-3 border">Timeout</td>
            <td className="p-3 border">ssthresh = cwnd/2, cwnd = 1, slow start</td>
          </tr>
          <tr>
            <td className="p-3 border">3 dup ACKs (Reno)</td>
            <td className="p-3 border">ssthresh = cwnd/2, cwnd = ssthresh</td>
          </tr>
          <tr>
            <td className="p-3 border">Idle connection</td>
            <td className="p-3 border">May restart slow start</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Example with ssthresh = 16 MSS:

    Phase 1: Slow Start (exponential)
    RTT 1: cwnd = 1  -> 2
    RTT 2: cwnd = 2  -> 4
    RTT 3: cwnd = 4  -> 8
    RTT 4: cwnd = 8  -> 16 (reached ssthresh!)

    Phase 2: Congestion Avoidance (linear)
    RTT 5: cwnd = 16 -> 17
    RTT 6: cwnd = 17 -> 18
    ...
    RTT N: cwnd = 32 -> TIMEOUT!

    Phase 3: Reset
    ssthresh = 32/2 = 16
    cwnd = 1
    Back to slow start...
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why "Slow" Start?</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Historical Context</h3>
        <p className="text-sm">Originally, TCP would immediately send a full window of data. Slow start was "slower" than this approach.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Actually Fast</h3>
        <p className="text-sm">Exponential growth means slow start is quite aggressive. It quickly probes network capacity.</p>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Slow start grows cwnd exponentially (doubles per RTT)</li>
        <li>Starts with cwnd = 1 MSS (or IW = 2-10 MSS)</li>
        <li>Continues until cwnd {">="} ssthresh</li>
        <li>Then switches to congestion avoidance</li>
        <li>On timeout: ssthresh = cwnd/2, cwnd = 1</li>
        <li>Restarts after loss or idle period</li>
      </ul>
    </div>
  </div>
);

export default SlowStart;
