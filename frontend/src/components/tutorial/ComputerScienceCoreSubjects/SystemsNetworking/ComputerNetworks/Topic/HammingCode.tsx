import React from 'react';

const HammingCode: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hamming Code
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Hamming code is an error-correcting code invented by Richard Hamming in 1950. It can detect
      and correct single-bit errors, making it one of the first practical forward error correction
      codes. Hamming codes are widely used in ECC memory and data transmission systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">Hamming Code Structure</h2>
    <p className="leading-relaxed">
      In Hamming code, parity bits are placed at positions that are powers of 2 (1, 2, 4, 8, 16...).
      Data bits fill the remaining positions. Each parity bit covers specific positions based on
      the binary representation of positions.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Hamming (7,4) Code Layout:

    Position: 1   2   3   4   5   6   7
    Type:     P1  P2  D1  P4  D2  D3  D4
    Binary:   001 010 011 100 101 110 111

    Parity Coverage (based on binary position):
    P1 (001): Covers positions with bit 0 set: 1,3,5,7
    P2 (010): Covers positions with bit 1 set: 2,3,6,7
    P4 (100): Covers positions with bit 2 set: 4,5,6,7
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Encoding Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Example: Encode data bits D1=1, D2=0, D3=1, D4=1

    Step 1: Place data bits at non-power-of-2 positions
    Position: 1   2   3   4   5   6   7
    Value:    P1  P2  1   P4  0   1   1

    Step 2: Calculate parity bits (even parity)

    P1 covers positions 1,3,5,7: P1, 1, 0, 1
    P1 = 1 XOR 0 XOR 1 = 0

    P2 covers positions 2,3,6,7: P2, 1, 1, 1
    P2 = 1 XOR 1 XOR 1 = 1

    P4 covers positions 4,5,6,7: P4, 0, 1, 1
    P4 = 0 XOR 1 XOR 1 = 0

    Step 3: Final encoded word
    Position: 1   2   3   4   5   6   7
    Value:    0   1   1   0   0   1   1

    Transmitted: 0110011
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Detection and Correction</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Example: Received 0110111 (error at position 5)

    Step 1: Recalculate parities (syndrome calculation)

    Check P1 (positions 1,3,5,7): 0 XOR 1 XOR 1 XOR 1 = 1 (Error!)
    Check P2 (positions 2,3,6,7): 1 XOR 1 XOR 1 XOR 1 = 0 (OK)
    Check P4 (positions 4,5,6,7): 0 XOR 1 XOR 1 XOR 1 = 1 (Error!)

    Step 2: Calculate syndrome
    Syndrome = P4 P2 P1 = 1 0 1 (binary) = 5 (decimal)

    Step 3: Error is at position 5
    Received:  0 1 1 0 1 1 1
    Position:  1 2 3 4 5 6 7
                     ^
                   Error!

    Step 4: Flip bit at position 5
    Corrected: 0 1 1 0 0 1 1

    Original data: D1=1, D2=0, D3=1, D4=1 (positions 3,5,6,7)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hamming Code Variants</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Code</th>
            <th className="p-3 border">Data Bits</th>
            <th className="p-3 border">Parity Bits</th>
            <th className="p-3 border">Total</th>
            <th className="p-3 border">Capability</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Hamming(7,4)</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Correct 1-bit</td>
          </tr>
          <tr>
            <td className="p-3 border">Hamming(15,11)</td>
            <td className="p-3 border">11</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">15</td>
            <td className="p-3 border">Correct 1-bit</td>
          </tr>
          <tr>
            <td className="p-3 border">SECDED (8,4)</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">Correct 1, detect 2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Formula for Parity Bits</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Number of Parity Bits Required</h3>
      <p className="font-mono text-gray-900">
        For m data bits, need r parity bits where:<br/>
        2^r &gt;= m + r + 1
      </p>
      <div className="mt-2 text-sm">
        <p>Example: For 4 data bits (m=4):</p>
        <p>2^3 = 8 &gt;= 4 + 3 + 1 = 8</p>
        <p>So r = 3 parity bits needed</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>ECC Memory (RAM):</strong> Server memory uses SECDED Hamming</li>
      <li><strong>Data Storage:</strong> Error correction in storage systems</li>
      <li><strong>Satellite Communication:</strong> Basic error correction</li>
      <li><strong>Digital Signal Processing:</strong> Data integrity</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Hamming code can detect and correct single-bit errors</li>
        <li>Parity bits placed at power-of-2 positions (1, 2, 4, 8...)</li>
        <li>Syndrome value indicates position of error bit</li>
        <li>Hamming distance = 3, so corrects 1-bit errors</li>
        <li>SECDED adds extra parity to detect 2-bit errors</li>
        <li>Widely used in ECC memory systems</li>
      </ul>
    </div>
  </div>
);

export default HammingCode;
