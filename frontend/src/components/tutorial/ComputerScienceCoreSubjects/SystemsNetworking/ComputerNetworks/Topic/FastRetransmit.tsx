import React from 'react';

const FastRetransmit: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP Fast Retransmit and Fast Recovery
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Fast Retransmit and Fast Recovery are TCP mechanisms that allow quicker recovery from
      packet loss without waiting for a timeout. When a sender receives three duplicate ACKs,
      it immediately retransmits the lost segment and adjusts the congestion window to maintain
      throughput.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Problem: Timeout is Slow</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Without Fast Retransmit:

    Sender                              Receiver
       |-- Segment 1 ------------------>|
       |-- Segment 2 ----X (lost!)      |
       |-- Segment 3 ------------------>| Out of order!
       |-- Segment 4 ------------------>| Out of order!
       |-- Segment 5 ------------------>| Out of order!
       |<-- ACK 1 ----------------------|
       |<-- ACK 1 (dup) ----------------|  Still waiting
       |<-- ACK 1 (dup) ----------------|  for segment 2
       |<-- ACK 1 (dup) ----------------|
       |                                |
       | ... Wait for timeout ...       |
       | (RTO: 1-3 seconds!)            |
       |                                |
       |-- Retransmit Segment 2 ------->|
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fast Retransmit</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Fast Retransmit Algorithm:

    Sender                              Receiver
       |-- Segment 1 ------------------>|
       |-- Segment 2 ----X (lost!)      |
       |-- Segment 3 ------------------>| Out of order!
       |<-- ACK 1 ----------------------|
       |<-- ACK 1 (dup 1) --------------|  Dup ACK #1
       |-- Segment 4 ------------------>|
       |<-- ACK 1 (dup 2) --------------|  Dup ACK #2
       |-- Segment 5 ------------------>|
       |<-- ACK 1 (dup 3) --------------|  Dup ACK #3
       |                                |
       |  3 dup ACKs = RETRANSMIT NOW!  |
       |                                |
       |-- Retransmit Segment 2 ------->|
       |<-- ACK 5 (cumulative) ---------|  All received!

    No timeout needed! Retransmit immediately.
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why 3 Duplicate ACKs?</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>1-2 dup ACKs might be due to reordering</li>
        <li>3 dup ACKs strongly suggests packet loss</li>
        <li>Balance between speed and false positives</li>
        <li>Reordering rarely causes 3+ duplicates</li>
        <li>4+ would be too slow to react</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fast Recovery (TCP Reno)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Fast Recovery Algorithm:

    On receiving 3 duplicate ACKs:
    1. ssthresh = cwnd / 2
    2. Retransmit lost segment
    3. cwnd = ssthresh + 3 MSS (for 3 dup ACKs received)
    4. For each additional dup ACK:
       cwnd = cwnd + 1 MSS (inflate window)
    5. When new ACK arrives (acknowledges new data):
       cwnd = ssthresh (deflate window)
       Enter congestion avoidance

    Key insight:
    - Dup ACKs indicate data is still flowing
    - Don't need to start from cwnd = 1
    - Keep the pipe full while recovering
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: Tahoe vs Reno</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Event</th>
            <th className="p-3 border">TCP Tahoe</th>
            <th className="p-3 border">TCP Reno</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">3 Dup ACKs</td>
            <td className="p-3 border">ssthresh=cwnd/2, cwnd=1, slow start</td>
            <td className="p-3 border">ssthresh=cwnd/2, cwnd=ssthresh, fast recovery</td>
          </tr>
          <tr>
            <td className="p-3 border">Timeout</td>
            <td className="p-3 border">ssthresh=cwnd/2, cwnd=1, slow start</td>
            <td className="p-3 border">ssthresh=cwnd/2, cwnd=1, slow start</td>
          </tr>
          <tr>
            <td className="p-3 border">Performance</td>
            <td className="p-3 border">Slower recovery</td>
            <td className="p-3 border">Faster recovery</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Visual Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    cwnd over time:

    Tahoe (on 3 dup ACKs):
    |        *
    |       *
    |      *   <- ssthresh (half)
    |     *
    |    *        *
    |   *        *
    |  *        *   <- Slow start from 1
    | *        *
    |*--------*-------------------> time
         loss

    Reno (on 3 dup ACKs):
    |        *
    |       *
    |      *
    |     *   <- ssthresh (half)
    |    * *  <- Fast recovery starts here
    |     * *
    |      * *
    |       * * <- Continue from ssthresh
    +----------------------------------> time
         loss
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>3 duplicate ACKs trigger fast retransmit</li>
        <li>No need to wait for timeout (much faster)</li>
        <li>Fast recovery: cwnd = ssthresh, not 1</li>
        <li>Reno outperforms Tahoe on single packet loss</li>
        <li>Dup ACKs indicate network is still working</li>
        <li>Timeout still used for severe congestion</li>
      </ul>
    </div>
  </div>
);

export default FastRetransmit;
