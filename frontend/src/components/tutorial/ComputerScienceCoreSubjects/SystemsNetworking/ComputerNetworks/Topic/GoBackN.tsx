import React from 'react';

const GoBackN: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Go-Back-N ARQ
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Go-Back-N is a sliding window protocol where the sender can transmit multiple frames before
      receiving acknowledgments, but the receiver only accepts frames in order. If a frame is lost
      or damaged, all subsequent frames are discarded and must be retransmitted.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Sender Window Size:</strong> N (up to 2^n - 1 for n-bit sequence)</li>
      <li><strong>Receiver Window Size:</strong> 1 (only accepts next expected frame)</li>
      <li><strong>ACK Type:</strong> Cumulative (ACK n means all frames up to n received)</li>
      <li><strong>Error Handling:</strong> Retransmit from lost frame onwards</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Normal Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Go-Back-N Normal Operation (Window = 4):

    Sender                              Receiver
       |                                   |
       |-------- Frame 0 ---------------->|
       |-------- Frame 1 ---------------->|
       |-------- Frame 2 ---------------->|
       |-------- Frame 3 ---------------->|
       |                                   |
       |<------- ACK 0 -------------------|
       |-------- Frame 4 ---------------->| (window slides)
       |<------- ACK 1 -------------------|
       |-------- Frame 5 ---------------->|
       |<------- ACK 2 -------------------|
       ...
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Scenario: Lost Frame</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Frame Loss Scenario:

    Sender                              Receiver
       |                                   |
       |-------- Frame 0 ---------------->| Accept, send ACK 0
       |-------- Frame 1 -------X         | LOST!
       |-------- Frame 2 ---------------->| Discard (expecting 1)
       |-------- Frame 3 ---------------->| Discard (expecting 1)
       |                                   |
       |<------- ACK 0 -------------------|
       |                                   |
       |  (Timeout for Frame 1)            |
       |                                   |
       |-------- Frame 1 ---------------->| (Go back and retransmit)
       |-------- Frame 2 ---------------->|
       |-------- Frame 3 ---------------->|
       |<------- ACK 1 -------------------|
       |<------- ACK 2 -------------------|
       |<------- ACK 3 -------------------|
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cumulative Acknowledgment</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">ACK Meaning</h3>
      <p className="text-sm">
        ACK n means: "I have received all frames up to and including frame n"<br/><br/>
        If ACK 3 is lost but ACK 5 arrives, sender knows frames 0-5 all received.
        This is why cumulative ACKs are robust to ACK loss.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Window Size Constraint</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Why max window = 2^n - 1?

    With 3-bit sequence (0-7):
    If window = 8 (all 8 values):

    Sender sends: 0,1,2,3,4,5,6,7
    All ACKs lost
    Sender times out, resends: 0,1,2,3,4,5,6,7
    Receiver thinks these are NEW frames (already ACKed 0-7)!

    With window = 7:
    Sender sends: 0,1,2,3,4,5,6
    Even if all ACKs lost, resent 0 is distinguishable
    because receiver is expecting 7 (not 0)

    Maximum Window Size = 2^n - 1
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Efficiency</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">Efficiency Formula</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">N &gt;= 1 + 2a (no errors)</td>
            <td className="p-3 border font-mono text-gray-900">100%</td>
          </tr>
          <tr>
            <td className="p-3 border">N &lt; 1 + 2a (no errors)</td>
            <td className="p-3 border font-mono text-gray-900">N / (1 + 2a)</td>
          </tr>
          <tr>
            <td className="p-3 border">With frame error rate p</td>
            <td className="p-3 border font-mono text-gray-900">(1-p) / (1 + 2ap)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Simple receiver (buffer size = 1)</li>
          <li>Better than Stop-and-Wait</li>
          <li>Cumulative ACKs are robust</li>
          <li>Good for low error rate channels</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Wastes bandwidth on retransmissions</li>
          <li>All frames after error discarded</li>
          <li>Poor for high error rate channels</li>
          <li>Sender must buffer all unacked frames</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Sender window = N, Receiver window = 1</li>
        <li>Receiver discards out-of-order frames</li>
        <li>On error, retransmit from lost frame onwards (go back N)</li>
        <li>Cumulative ACKs: ACK n = all up to n received</li>
        <li>Max window = 2^n - 1 for n-bit sequence numbers</li>
        <li>Efficient for low error rates, wasteful for high error rates</li>
      </ul>
    </div>
  </div>
);

export default GoBackN;
