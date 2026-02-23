import React from 'react';

const SelectiveRepeat: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Selective Repeat ARQ
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Selective Repeat is an advanced sliding window protocol where the receiver can accept
      frames out of order and buffer them. Only the specific lost or damaged frames are
      retransmitted, making it more efficient than Go-Back-N for channels with higher error rates.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Sender Window Size:</strong> N (up to 2^(n-1) for n-bit sequence)</li>
      <li><strong>Receiver Window Size:</strong> N (same as sender)</li>
      <li><strong>ACK Type:</strong> Individual ACKs for each frame</li>
      <li><strong>Error Handling:</strong> Retransmit only the lost/damaged frame</li>
      <li><strong>Buffering:</strong> Receiver buffers out-of-order frames</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Normal Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Selective Repeat Operation (Window = 4):

    Sender                              Receiver
       |                                   | Receiver buffer: [_][_][_][_]
       |-------- Frame 0 ---------------->| Buffer: [0][_][_][_]
       |-------- Frame 1 ---------------->| Buffer: [0][1][_][_]
       |-------- Frame 2 ---------------->| Buffer: [0][1][2][_]
       |-------- Frame 3 ---------------->| Buffer: [0][1][2][3]
       |                                   | Deliver 0,1,2,3 to upper layer
       |<------- ACK 0 -------------------|
       |<------- ACK 1 -------------------|
       |<------- ACK 2 -------------------|
       |<------- ACK 3 -------------------|
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Scenario: Lost Frame</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Frame Loss in Selective Repeat:

    Sender                              Receiver
       |                                   | Buffer: [_][_][_][_]
       |-------- Frame 0 ---------------->| Buffer: [0][_][_][_]
       |-------- Frame 1 -------X         | LOST!
       |-------- Frame 2 ---------------->| Buffer: [0][_][2][_] (buffered!)
       |-------- Frame 3 ---------------->| Buffer: [0][_][2][3] (buffered!)
       |                                   |
       |<------- ACK 0 -------------------|
       |<------- NAK 1 -------------------| (or timeout)
       |<------- ACK 2 -------------------|
       |<------- ACK 3 -------------------|
       |                                   |
       |-------- Frame 1 ---------------->| Buffer: [0][1][2][3]
       |                                   | Deliver 0,1,2,3 to upper layer
       |<------- ACK 1 -------------------|

    Only Frame 1 retransmitted (not 2,3)!
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Window Size Constraint</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Why max window = 2^(n-1)?

    With 3-bit sequence (0-7), if window = 5:

    Sender sends: 0,1,2,3,4
    All ACKs lost
    Sender window: [0,1,2,3,4]
    Receiver delivered 0-4, now expects: [5,6,7,0,1]

    Sender retransmits 0 (thinking it was lost)
    Receiver accepts it as NEW frame 0!

    Problem: Overlap between old and new windows

    With window = 4:
    Sender window:   [0,1,2,3]
    Receiver expects: [4,5,6,7]
    No overlap! Safe.

    Maximum Window Size = 2^(n-1) = 2^n / 2
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: Go-Back-N vs Selective Repeat</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Go-Back-N</th>
            <th className="p-3 border">Selective Repeat</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Receiver Window</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">N</td>
          </tr>
          <tr>
            <td className="p-3 border">Max Window (n bits)</td>
            <td className="p-3 border">2^n - 1</td>
            <td className="p-3 border">2^(n-1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Out-of-Order Frames</td>
            <td className="p-3 border">Discarded</td>
            <td className="p-3 border">Buffered</td>
          </tr>
          <tr>
            <td className="p-3 border">Retransmission</td>
            <td className="p-3 border">All from error</td>
            <td className="p-3 border">Only lost frame</td>
          </tr>
          <tr>
            <td className="p-3 border">ACK Type</td>
            <td className="p-3 border">Cumulative</td>
            <td className="p-3 border">Individual</td>
          </tr>
          <tr>
            <td className="p-3 border">Receiver Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Bandwidth Efficiency</td>
            <td className="p-3 border">Lower (errors)</td>
            <td className="p-3 border">Higher (errors)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Only lost frames retransmitted</li>
          <li>More bandwidth efficient</li>
          <li>Better for high error rate channels</li>
          <li>Out-of-order frames accepted</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Complex receiver logic</li>
          <li>Larger receiver buffer needed</li>
          <li>Smaller maximum window size</li>
          <li>Reordering logic required</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Both sender and receiver have window size N</li>
        <li>Receiver buffers out-of-order frames</li>
        <li>Only lost/damaged frames are retransmitted</li>
        <li>Max window = 2^(n-1) to avoid ambiguity</li>
        <li>More efficient than Go-Back-N for high error channels</li>
        <li>More complex but wastes less bandwidth on errors</li>
      </ul>
    </div>
  </div>
);

export default SelectiveRepeat;
