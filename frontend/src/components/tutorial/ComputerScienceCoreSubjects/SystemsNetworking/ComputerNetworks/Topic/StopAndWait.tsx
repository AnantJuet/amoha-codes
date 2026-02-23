import React from 'react';

const StopAndWait: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Stop-and-Wait Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Stop-and-Wait is the simplest flow control and error control protocol. The sender transmits
      one frame at a time and waits for an acknowledgment (ACK) from the receiver before sending
      the next frame. It is also known as Stop-and-Wait ARQ (Automatic Repeat reQuest).
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Stop-and-Wait Normal Operation:

    Sender                              Receiver
       |                                   |
       |-------- Frame 0 ---------------->|
       |                                   | (Process frame)
       |<------- ACK 0 -------------------|
       |                                   |
       |-------- Frame 1 ---------------->|
       |                                   | (Process frame)
       |<------- ACK 1 -------------------|
       |                                   |
       |-------- Frame 0 ---------------->|
       ...

    Alternating 0 and 1 sequence numbers
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Handling Scenarios</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Lost Frame</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Lost Frame Scenario:

    Sender                              Receiver
       |                                   |
       |-------- Frame 0 -------X         | Frame lost
       |                                   |
       |  (Timeout)                        |
       |                                   |
       |-------- Frame 0 ---------------->| Retransmit
       |<------- ACK 0 -------------------|
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Lost ACK</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Lost ACK Scenario:

    Sender                              Receiver
       |                                   |
       |-------- Frame 0 ---------------->|
       |         X-------- ACK 0 ---------| ACK lost
       |                                   |
       |  (Timeout)                        |
       |                                   |
       |-------- Frame 0 ---------------->| Duplicate (discarded)
       |<------- ACK 0 -------------------|
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Delayed ACK</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Delayed ACK Scenario:

    Sender                              Receiver
       |                                   |
       |-------- Frame 0 ---------------->|
       |                        ACK 0 (delayed)
       |  (Timeout)               |        |
       |-------- Frame 0 ---------|------->| Duplicate
       |                          v        |
       |<------- ACK 0 (old) --------------|
       |<------- ACK 0 (new) --------------|
       |                                   |
       |-------- Frame 1 ---------------->|
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Efficiency Analysis</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Efficiency Formula</h3>
      <div className="font-mono text-sm text-gray-900">
        a = Propagation delay (T_p) / Transmission time (T_t)<br/><br/>
        Efficiency (eta) = T_t / (T_t + 2*T_p) = 1 / (1 + 2a)<br/><br/>
        For a = 0: Efficiency = 100% (ideal)<br/>
        For a = 1: Efficiency = 33%<br/>
        For a = 10: Efficiency = 4.8%
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Calculation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Given:
    - Link bandwidth = 1 Mbps
    - Frame size = 1000 bits
    - Propagation delay = 10 ms
    - RTT = 20 ms

    Calculations:
    Transmission time = 1000 bits / 1 Mbps = 1 ms
    a = 10 ms / 1 ms = 10

    Efficiency = 1 / (1 + 2*10) = 1/21 = 4.76%

    Throughput = 0.0476 * 1 Mbps = 47.6 Kbps

    Very inefficient for high-delay networks!
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Simple to implement</li>
          <li>Low buffer requirement (1 frame)</li>
          <li>Reliable delivery</li>
          <li>Easy to understand and debug</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Very low efficiency</li>
          <li>Poor for high bandwidth-delay links</li>
          <li>Underutilizes network capacity</li>
          <li>Long idle time waiting for ACK</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Sender waits for ACK before sending next frame</li>
        <li>Uses alternating 0/1 sequence numbers</li>
        <li>Timeout handles lost frames and ACKs</li>
        <li>Efficiency = 1/(1+2a), very low for high-delay links</li>
        <li>Simple but inefficient; replaced by sliding window</li>
      </ul>
    </div>
  </div>
);

export default StopAndWait;
