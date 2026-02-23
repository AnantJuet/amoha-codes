import React from 'react';

const ErrorDetection: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Error Detection in Data Link Layer
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Error detection is the process of identifying errors that occur during data transmission
      due to noise, interference, or other factors. The Data Link Layer adds redundant bits
      (check bits) to the data that allow the receiver to detect if errors have occurred.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Errors</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Single-Bit Error</h3>
        <p className="text-sm mb-2">Only one bit in the data unit is changed.</p>
        <div className="font-mono text-xs text-gray-900 bg-gray-100 p-2 rounded">
          Sent: 10110001<br/>
          Received: 1011<span className="text-red-500">1</span>001
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Burst Error</h3>
        <p className="text-sm mb-2">Multiple consecutive bits are changed.</p>
        <div className="font-mono text-xs text-gray-900 bg-gray-100 p-2 rounded">
          Sent: 10110001<br/>
          Received: 10<span className="text-red-500">001</span>001
        </div>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Detection Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Error Detection Methods:

                    Error Detection
                          |
        +-----------------+-----------------+
        |                 |                 |
      Parity           Checksum            CRC
      Check                           (Cyclic Redundancy
        |                                  Check)
    +---+---+
    |       |
   Simple  2D
   Parity  Parity
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Parity Check</h2>
    <p className="leading-relaxed">
      Parity check adds one extra bit (parity bit) to make the total number of 1s either
      even (even parity) or odd (odd parity).
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Simple Parity (Even Parity):

    Data: 1011001
    Count of 1s: 4 (even)
    Parity bit: 0 (to keep it even)
    Transmitted: 10110010

    Data: 1011101
    Count of 1s: 5 (odd)
    Parity bit: 1 (to make it even)
    Transmitted: 10111011

    Limitation: Cannot detect even number of bit errors
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Two-Dimensional Parity</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    2D Parity Check:

    Data arranged in rows and columns:

         Data bits    Row Parity
         1 0 1 1  ->    1
         1 1 0 1  ->    1
         0 1 1 0  ->    0
         ---------
    Col: 0 0 0 0       (0) <- Corner parity

    Can detect and correct single-bit errors
    Can detect (but not correct) some multi-bit errors
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Checksum</h2>
    <p className="leading-relaxed">
      Checksum divides data into segments, adds them together, and takes the ones complement
      of the sum. The receiver performs the same operation; if the result is all 1s, no error.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Checksum Calculation (simplified):

    Data: 10011001 11100010 00100100

    Step 1: Add segments
      10011001
    + 11100010
    -----------
     101111011 -> Carry: 1, Sum: 01111011
    + 00000001 (wrap around carry)
    -----------
      01111100
    + 00100100
    -----------
      10100000

    Step 2: Take ones complement
    Checksum: 01011111

    Transmit: Data + Checksum
    Receiver adds all; result should be all 1s (11111111)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Cyclic Redundancy Check (CRC)</h2>
    <p className="leading-relaxed">
      CRC is the most powerful error detection technique used in networks. It treats data
      as a polynomial and divides it by a generator polynomial to produce a remainder (CRC).
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    CRC Calculation:

    Data: 1101011011
    Generator: 10011 (CRC-4)

    Step 1: Append (n-1) zeros to data
    1101011011 0000

    Step 2: Divide using XOR (modulo-2 division)
    Result: Remainder = CRC bits

    Step 3: Replace appended zeros with CRC
    Transmitted: 1101011011 1110

    At receiver:
    - Divide received data by generator
    - If remainder is 0, no error detected
    - If remainder non-zero, error detected
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Detection Capability</th>
            <th className="p-3 border">Overhead</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Simple Parity</td>
            <td className="p-3 border">Single-bit errors</td>
            <td className="p-3 border">1 bit</td>
            <td className="p-3 border">Memory, simple systems</td>
          </tr>
          <tr>
            <td className="p-3 border">2D Parity</td>
            <td className="p-3 border">Single + some burst</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Memory systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Checksum</td>
            <td className="p-3 border">Good for random errors</td>
            <td className="p-3 border">16-32 bits</td>
            <td className="p-3 border">TCP/IP, UDP</td>
          </tr>
          <tr>
            <td className="p-3 border">CRC</td>
            <td className="p-3 border">Excellent for burst</td>
            <td className="p-3 border">16-32 bits</td>
            <td className="p-3 border">Ethernet, HDLC</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Error detection identifies transmission errors using redundant bits</li>
        <li>Parity check: Simple, detects odd number of bit errors</li>
        <li>Checksum: Adds data segments, used in TCP/IP</li>
        <li>CRC: Most powerful, excellent for burst errors, used in Ethernet</li>
        <li>Detection only identifies errors; correction requires retransmission or FEC</li>
      </ul>
    </div>
  </div>
);

export default ErrorDetection;
