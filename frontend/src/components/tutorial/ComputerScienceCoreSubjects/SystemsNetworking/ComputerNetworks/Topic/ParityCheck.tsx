import React from 'react';

const ParityCheck: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Parity Check
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Parity check is the simplest error detection technique that adds a single redundant bit
      (parity bit) to the data. The parity bit is chosen to make the total number of 1s in the
      transmitted data either even (even parity) or odd (odd parity).
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Parity</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Even Parity</h3>
        <p className="text-sm">Parity bit makes total number of 1s even.</p>
        <div className="font-mono text-sm text-gray-900 mt-2 bg-gray-100 p-2 rounded">
          Data: 1011001 (4 ones)<br/>
          Parity: 0<br/>
          Sent: 10110010 (4 ones - even)
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Odd Parity</h3>
        <p className="text-sm">Parity bit makes total number of 1s odd.</p>
        <div className="font-mono text-sm text-gray-900 mt-2 bg-gray-100 p-2 rounded">
          Data: 1011001 (4 ones)<br/>
          Parity: 1<br/>
          Sent: 10110011 (5 ones - odd)
        </div>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">How Parity Check Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Even Parity Example:

    SENDER:
    Data:        1 0 1 1 0 0 1  (4 ones)
    Parity bit:  0              (keeps it even)
    Transmitted: 1 0 1 1 0 0 1 0

    RECEIVER (No Error):
    Received:    1 0 1 1 0 0 1 0
    Count 1s:    4 (even) - OK!

    RECEIVER (1-bit Error):
    Received:    1 0 1 1 1 0 1 0  (bit flipped)
                         ^
    Count 1s:    5 (odd) - ERROR DETECTED!
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parity Calculation</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Formula (Even Parity)</h3>
      <p className="font-mono text-gray-900">
        Parity bit = XOR of all data bits<br/>
        P = D1 XOR D2 XOR D3 XOR ... XOR Dn
      </p>
    </div>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Example Calculation:

    Data: 1 0 1 1 0 0 1

    P = 1 XOR 0 XOR 1 XOR 1 XOR 0 XOR 0 XOR 1
      = 1 XOR 1 XOR 1 XOR 0 XOR 0 XOR 1
      = 0 XOR 1 XOR 0 XOR 0 XOR 1
      = 1 XOR 0 XOR 0 XOR 1
      = 1 XOR 0 XOR 1
      = 1 XOR 1
      = 0

    Parity bit = 0 (for even parity)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Two-Dimensional Parity</h2>
    <p className="leading-relaxed">
      2D parity arranges data in a matrix and calculates parity for each row and column.
      This can detect and even correct single-bit errors.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Two-Dimensional (2D) Parity:

    Original Data (4x7 bits):
         D1 D2 D3 D4 D5 D6 D7   Row P
    R1:  1  0  1  1  0  0  1  |  0
    R2:  1  1  0  0  1  1  0  |  0
    R3:  0  1  1  1  0  1  0  |  0
    R4:  1  1  0  1  0  0  1  |  0
    --------------------------------
    Col: 1  1  0  1  1  0  0  |  0  <- Corner

    Error Detection & Correction:
    If bit at R2,D3 flips (0->1):
    - R2 parity fails
    - D3 column parity fails
    - Intersection: R2,D3 is the error!
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Limitations of Parity Check</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Error Type</th>
            <th className="p-3 border">Simple Parity</th>
            <th className="p-3 border">2D Parity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1-bit error</td>
            <td className="p-3 border">Detected</td>
            <td className="p-3 border">Detected & Corrected</td>
          </tr>
          <tr>
            <td className="p-3 border">2-bit error</td>
            <td className="p-3 border">NOT detected</td>
            <td className="p-3 border">Detected</td>
          </tr>
          <tr>
            <td className="p-3 border">Odd-bit errors</td>
            <td className="p-3 border">Detected</td>
            <td className="p-3 border">Detected</td>
          </tr>
          <tr>
            <td className="p-3 border">Even-bit errors</td>
            <td className="p-3 border">NOT detected</td>
            <td className="p-3 border">Some detected</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>RAM/Memory:</strong> ECC memory uses parity for error detection</li>
      <li><strong>Serial Communication:</strong> RS-232 and UART protocols</li>
      <li><strong>Hard Drives:</strong> RAID systems for data integrity</li>
      <li><strong>Simple Protocols:</strong> Low-overhead error checking</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Parity check adds one redundant bit for error detection</li>
        <li>Even parity: total 1s must be even; Odd parity: total 1s must be odd</li>
        <li>Simple parity detects only odd number of bit errors</li>
        <li>2D parity can detect and correct single-bit errors</li>
        <li>Parity bit = XOR of all data bits</li>
        <li>Simple but limited; used in memory and serial communication</li>
      </ul>
    </div>
  </div>
);

export default ParityCheck;
