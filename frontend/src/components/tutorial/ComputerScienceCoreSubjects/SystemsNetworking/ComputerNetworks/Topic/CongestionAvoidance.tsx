import React from 'react';

const CongestionAvoidance: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP Congestion Avoidance
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Congestion Avoidance is the phase of TCP congestion control that follows Slow Start.
      Once the congestion window (cwnd) reaches the slow start threshold (ssthresh), TCP
      switches to a more conservative linear growth rate to carefully probe for additional
      available bandwidth.
    </p>

    <h2 className="text-3xl font-bold mt-8">Congestion Avoidance Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Congestion Avoidance Algorithm:

    When cwnd >= ssthresh:

    For each ACK received:
        cwnd = cwnd + (MSS * MSS) / cwnd
        OR equivalently:
        cwnd = cwnd + MSS / cwnd (per ACK)

    Effect per RTT:
        cwnd increases by approximately 1 MSS

    Additive Increase:
        cwnd_new = cwnd_old + 1 MSS (per RTT)

    This is the "AI" in AIMD:
        Additive Increase, Multiplicative Decrease
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Linear Growth</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Congestion Avoidance Growth:

    ssthresh = 16 MSS (from previous congestion)

    RTT 5:  cwnd = 16 MSS, send 16 segments
            Receive 16 ACKs -> cwnd = 17

    RTT 6:  cwnd = 17 MSS, send 17 segments
            Receive 17 ACKs -> cwnd = 18

    RTT 7:  cwnd = 18 MSS -> 19
    RTT 8:  cwnd = 19 MSS -> 20
    ...

    Graph comparison:
    cwnd
    ^
    |                              * CA (linear)
    |                           *
    |                        *
    |                     *
    |        ssthresh *___*
    |                /
    |               / Slow Start
    |              /  (exponential)
    |             /
    |            /
    |           /
    |__________/__________________________> RTT
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AIMD (Additive Increase, Multiplicative Decrease)</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Rule</th>
            <th className="p-3 border">Formula</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">No Loss</td>
            <td className="p-3 border">Additive Increase</td>
            <td className="p-3 border">cwnd = cwnd + 1 MSS (per RTT)</td>
          </tr>
          <tr>
            <td className="p-3 border">Loss (3 dup ACKs)</td>
            <td className="p-3 border">Multiplicative Decrease</td>
            <td className="p-3 border">cwnd = cwnd / 2</td>
          </tr>
          <tr>
            <td className="p-3 border">Loss (Timeout)</td>
            <td className="p-3 border">Severe Decrease</td>
            <td className="p-3 border">cwnd = 1 MSS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Linear Growth?</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Slow Start Problem</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Exponential growth too aggressive</li>
          <li>Quickly overshoots capacity</li>
          <li>Causes congestion</li>
          <li>Many packet losses</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">CA Solution</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Linear growth is careful</li>
          <li>Probes bandwidth slowly</li>
          <li>Detects congestion earlier</li>
          <li>Fewer packet losses</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sawtooth Pattern</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    AIMD creates characteristic sawtooth pattern:

    cwnd
    ^
    |        /\\          /\\          /\\
    |       /  \\        /  \\        /  \\
    |      /    \\      /    \\      /    \\
    |     /      \\    /      \\    /      \\
    |    /        \\  /        \\  /        \\
    |   /          \\/          \\/          \\
    |  /
    | /
    |/
    +-----------------------------------------> time
          ^           ^           ^
          |           |           |
       Loss        Loss        Loss

    - Linear increase during congestion avoidance
    - Multiplicative decrease on loss (halve cwnd)
    - Repeat
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fairness</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">AIMD Achieves Fairness</h3>
      <p className="text-sm mb-2">Multiple TCP connections converge to fair share:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>All connections increase at same rate</li>
        <li>All decrease by same proportion on loss</li>
        <li>Eventually reach equal bandwidth share</li>
        <li>Mathematical proof of convergence</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>CA begins when cwnd {">="} ssthresh</li>
        <li>Linear growth: +1 MSS per RTT</li>
        <li>AIMD: Additive Increase, Multiplicative Decrease</li>
        <li>Creates sawtooth pattern in cwnd</li>
        <li>Achieves fair bandwidth sharing</li>
        <li>More conservative than slow start</li>
      </ul>
    </div>
  </div>
);

export default CongestionAvoidance;
