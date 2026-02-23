import React from 'react';

const BitStuffing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Bit Stuffing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Bit stuffing is a framing technique used to ensure that the flag pattern marking frame
      boundaries never appears in the data portion of the frame. After every sequence of five
      consecutive 1s in the data, a 0 bit is automatically inserted by the sender and removed
      by the receiver.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Flag Pattern Problem</h2>
    <p className="leading-relaxed">
      In protocols like HDLC, the flag pattern 01111110 marks the start and end of frames.
      If this pattern appears in the data, the receiver would incorrectly identify it as a
      frame boundary.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Flag Pattern: 01111110

    Problem:
    Data: ...data...01111110...more data...
                   ^^^^^^^^
                   Looks like a flag!
                   Receiver thinks frame ends here
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bit Stuffing Rule</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">The Rule</h3>
      <p className="text-lg font-mono text-gray-900">
        After FIVE consecutive 1s in data, INSERT a 0 bit.
      </p>
    </div>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Bit Stuffing Process:

    SENDER (Stuffing):
    Original:     01111110  (would look like flag)
                      ^
    After 5 ones, insert 0:
    Stuffed:      011111010
                       ^
                  Inserted 0

    RECEIVER (Unstuffing):
    Received:     011111010
    After 5 ones, remove following 0:
    Recovered:    01111110  (original data)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Example: Sending data with multiple 1s sequences

    Original Data:    0111111011111110111100
                        |||||    |||||
                        5 ones   5 ones

    Step 1: Find sequences of 5 consecutive 1s
                      01111110 11111110 111100
                        ^^^^^    ^^^^^

    Step 2: Insert 0 after each sequence of 5 ones
                      011111[0]10 111111[0]10 111100
                            ^          ^
                        stuffed    stuffed

    Stuffed Data:     0111110101111101011110
                            ^       ^
                       Inserted   Inserted

    At Receiver:
    1. Look for 5 consecutive 1s
    2. Remove the 0 that follows
    3. Original data recovered
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete HDLC Frame Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    HDLC Frame with Bit Stuffing:

    Original data: 01111111 (8 bits, 7 ones in a row)

    Without stuffing:
    |01111110| data: 01111111 |01111110|
       FLAG            ^         FLAG
               False flag detection!

    With bit stuffing:
    |01111110| data: 011111011 |01111110|
       FLAG         ^^^^^^^     FLAG
                 Safe: 5 ones + stuffed 0 + remaining 1

    Receiver removes stuffed 0 to recover: 01111111
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why 5 Ones?</h2>
    <p className="leading-relaxed">
      The flag pattern is 01111110 which has six consecutive 1s. By stuffing after five 1s,
      we ensure six consecutive 1s can never appear in the data, making the flag unique.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Pattern</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">01111110</td>
            <td className="p-3 border">Flag (never in data after stuffing)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">01111101</td>
            <td className="p-3 border">Data with stuffed 0 (safe)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">01111111</td>
            <td className="p-3 border">7 ones: Abort signal (special)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Works with any bit pattern</li>
          <li>Not tied to byte boundaries</li>
          <li>Minimal overhead for most data</li>
          <li>Easy to resynchronize</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Variable frame length</li>
          <li>Processing at bit level</li>
          <li>Worst case: 20% overhead</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Where Bit Stuffing is Used</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>HDLC:</strong> High-Level Data Link Control</li>
      <li><strong>Frame Relay:</strong> WAN protocol</li>
      <li><strong>PPP (in HDLC-like framing mode)</strong></li>
      <li><strong>USB:</strong> Universal Serial Bus (NRZI encoding)</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Bit stuffing inserts 0 after five consecutive 1s</li>
        <li>Prevents flag pattern (01111110) from appearing in data</li>
        <li>Receiver removes stuffed 0s to recover original data</li>
        <li>Works at bit level, not byte level</li>
        <li>Used in HDLC, Frame Relay, and other protocols</li>
        <li>Maximum overhead is about 20% (worst case)</li>
      </ul>
    </div>
  </div>
);

export default BitStuffing;
