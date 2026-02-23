import React from 'react';

const Checksum: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Checksum
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Checksum is an error detection technique that generates a fixed-size value from a block of
      data. The sender calculates the checksum and appends it to the data. The receiver performs
      the same calculation and compares the result to verify data integrity.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Checksum Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Checksum Process:

    SENDER:
    1. Divide data into n-bit segments
    2. Add all segments using 1's complement arithmetic
    3. Take 1's complement of the sum = Checksum
    4. Send data + checksum

    RECEIVER:
    1. Divide received data into n-bit segments (including checksum)
    2. Add all segments using 1's complement arithmetic
    3. Take 1's complement of the sum
    4. If result is 0, no error; otherwise, error detected
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checksum Calculation Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Example: 16-bit checksum

    Data to send: 10011001 10101010 01100101 11001010

    Step 1: Split into 16-bit words
    Word 1: 10011001 10101010
    Word 2: 01100101 11001010

    Step 2: Add words (with wraparound)
    10011001 10101010
  + 01100101 11001010
  --------------------
    11111111 01010100

    Step 3: 1's complement (flip all bits)
    Checksum: 00000000 10101011

    Step 4: Transmit
    Data + Checksum: 10011001 10101010 01100101 11001010 00000000 10101011

    VERIFICATION at Receiver:
    Add all including checksum:
    10011001 10101010
  + 01100101 11001010
  + 00000000 10101011
  --------------------
    11111111 11111111

    1's complement = 00000000 00000000 = 0 (No error!)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1's Complement Arithmetic</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Key Rules</h3>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>Carry out of MSB is added back to LSB (wraparound)</li>
        <li>1's complement: Invert all bits (0s become 1s, 1s become 0s)</li>
        <li>Adding a number and its 1's complement gives all 1s</li>
      </ul>
    </div>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Wraparound Example (8-bit):

      11110000
    + 10100000
    ----------
    1 01010000  <- Carry out!
    + 00000001  <- Add carry back
    ----------
      01010001
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Internet Checksum (IP, TCP, UDP)</h2>
    <p className="leading-relaxed">
      The Internet protocols use a 16-bit checksum calculated over the header (and sometimes data).
      This is known as the Internet Checksum defined in RFC 1071.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Checksum Coverage</th>
            <th className="p-3 border">Mandatory?</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">IPv4</td>
            <td className="p-3 border">Header only</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">IPv6</td>
            <td className="p-3 border">None (relies on lower layers)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">Header + Data + Pseudo-header</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">UDP</td>
            <td className="p-3 border">Header + Data + Pseudo-header</td>
            <td className="p-3 border">Optional (IPv4)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Simple to compute</li>
          <li>Fast (uses addition only)</li>
          <li>Detects common errors</li>
          <li>Widely used in Internet protocols</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Cannot detect all error patterns</li>
          <li>Swapped segments not detected</li>
          <li>Weaker than CRC for burst errors</li>
          <li>Does not correct errors</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Checksum adds data segments and takes 1's complement</li>
        <li>Receiver adds all segments including checksum; result should be 0</li>
        <li>Uses 1's complement arithmetic with wraparound</li>
        <li>Used in IP, TCP, UDP headers</li>
        <li>Simple and fast but weaker than CRC for burst errors</li>
      </ul>
    </div>
  </div>
);

export default Checksum;
