import React from 'react';

const TCPTimers: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP Timers
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      TCP uses several timers to manage connections and ensure reliable delivery. These timers
      handle retransmission, connection keepalive, connection establishment, and graceful
      termination. Understanding these timers is crucial for troubleshooting TCP performance.
    </p>

    <h2 className="text-3xl font-bold mt-8">TCP Timer Overview</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Timer</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Typical Value</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Retransmission (RTO)</td>
            <td className="p-3 border">Trigger retransmit on loss</td>
            <td className="p-3 border">Dynamic (based on RTT)</td>
          </tr>
          <tr>
            <td className="p-3 border">Persist</td>
            <td className="p-3 border">Probe zero window</td>
            <td className="p-3 border">Starts at RTO, exponential</td>
          </tr>
          <tr>
            <td className="p-3 border">Keepalive</td>
            <td className="p-3 border">Detect dead connections</td>
            <td className="p-3 border">2 hours (configurable)</td>
          </tr>
          <tr>
            <td className="p-3 border">TIME_WAIT</td>
            <td className="p-3 border">Clean connection close</td>
            <td className="p-3 border">2 * MSL (60-240 sec)</td>
          </tr>
          <tr>
            <td className="p-3 border">Connection</td>
            <td className="p-3 border">Establish connection</td>
            <td className="p-3 border">75 seconds (typical)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Retransmission Timer (RTO)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    RTO Calculation (Jacobson's Algorithm):

    Smoothed RTT (SRTT):
    SRTT = (1 - alpha) * SRTT + alpha * RTT_sample
    (alpha = 1/8 typically)

    RTT Variance (RTTVAR):
    RTTVAR = (1 - beta) * RTTVAR + beta * |SRTT - RTT_sample|
    (beta = 1/4 typically)

    RTO Calculation:
    RTO = SRTT + 4 * RTTVAR

    Bounds:
    - Minimum RTO: 1 second (RFC recommends)
    - Maximum RTO: typically 60-120 seconds

    On timeout:
    - RTO doubles (exponential backoff)
    - Retransmit segment
    - Reset after successful ACK
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Persist Timer</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Persist Timer (Zero Window Probe):

    Problem: Deadlock when receiver advertises zero window

    Sender                              Receiver
       |                                   |
       |<-- ACK, Window=0 -----------------| Buffer full
       |                                   |
       | [Cannot send, window=0]           |
       |                                   |
       | [Persist timer expires]           |
       |                                   |
       |-- Window Probe (1 byte) --------->|
       |<-- ACK, Window=0 -----------------| Still full
       |                                   |
       | [Wait longer, exponential backoff]|
       |                                   |
       |-- Window Probe ------------------>|
       |<-- ACK, Window=2000 --------------| Buffer freed!
       |                                   |
       |-- Resume normal transmission ---->|

    Starts at RTO value, backs off exponentially
    Prevents deadlock if window update is lost
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Keepalive Timer</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Detecting Dead Connections</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Idle time:</strong> 2 hours before first probe</li>
        <li><strong>Probe interval:</strong> 75 seconds between probes</li>
        <li><strong>Probe count:</strong> 9 probes before giving up</li>
        <li>Total time: ~2 hours 11 minutes to detect dead peer</li>
        <li>Optional feature (application must enable)</li>
        <li>Controversial: may kill idle but valid connections</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">TIME_WAIT Timer (2*MSL)</h2>
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
            <td className="p-3 border">MSL</td>
            <td className="p-3 border">Maximum Segment Lifetime (30s-2min)</td>
          </tr>
          <tr>
            <td className="p-3 border">Duration</td>
            <td className="p-3 border">2 * MSL = 1-4 minutes</td>
          </tr>
          <tr>
            <td className="p-3 border">Purpose 1</td>
            <td className="p-3 border">Allow retransmit of final ACK</td>
          </tr>
          <tr>
            <td className="p-3 border">Purpose 2</td>
            <td className="p-3 border">Let old segments expire</td>
          </tr>
          <tr>
            <td className="p-3 border">Issue</td>
            <td className="p-3 border">Port exhaustion on busy servers</td>
          </tr>
          <tr>
            <td className="p-3 border">Tuning</td>
            <td className="p-3 border">tcp_tw_reuse, tcp_tw_recycle (Linux)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Linux TCP Timer Settings</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    View/modify TCP timer settings (Linux):

    # Retransmit attempts
    $ cat /proc/sys/net/ipv4/tcp_retries1  # Before reporting error
    $ cat /proc/sys/net/ipv4/tcp_retries2  # Before dropping connection

    # Keepalive settings
    $ cat /proc/sys/net/ipv4/tcp_keepalive_time   # 7200 (2 hours)
    $ cat /proc/sys/net/ipv4/tcp_keepalive_intvl  # 75 seconds
    $ cat /proc/sys/net/ipv4/tcp_keepalive_probes # 9 probes

    # TIME_WAIT tuning
    $ cat /proc/sys/net/ipv4/tcp_fin_timeout      # 60 seconds
    $ echo 1 > /proc/sys/net/ipv4/tcp_tw_reuse    # Reuse TIME_WAIT
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>RTO: adaptive retransmission timer based on RTT</li>
        <li>Persist: prevents deadlock on zero window</li>
        <li>Keepalive: detects dead connections (2+ hours)</li>
        <li>TIME_WAIT: 2*MSL for clean close</li>
        <li>Timers can be tuned for specific use cases</li>
        <li>Exponential backoff prevents network flooding</li>
      </ul>
    </div>
  </div>
);

export default TCPTimers;
