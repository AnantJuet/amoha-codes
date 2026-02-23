import React from 'react';

const ErrorCorrection: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Error Correction
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Error correction, also known as Forward Error Correction (FEC), is the ability to not only
      detect errors but also correct them without retransmission. This is achieved by adding
      sufficient redundant bits that enable the receiver to determine the original data.
    </p>

    <h2 className="text-3xl font-bold mt-8">Error Detection vs Error Correction</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Detection Only</th>
            <th className="p-3 border">Error Correction (FEC)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Action on Error</td>
            <td className="p-3 border">Request retransmission</td>
            <td className="p-3 border">Correct locally</td>
          </tr>
          <tr>
            <td className="p-3 border">Redundancy</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">Latency</td>
            <td className="p-3 border">Higher (retransmit)</td>
            <td className="p-3 border">Lower (no retransmit)</td>
          </tr>
          <tr>
            <td className="p-3 border">Use Case</td>
            <td className="p-3 border">Low error rate channels</td>
            <td className="p-3 border">High error rate, real-time</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hamming Distance</h2>
    <p className="leading-relaxed">
      Hamming distance is the number of bit positions where two codewords differ. It determines
      the error detection and correction capability of a code.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Hamming Distance Example:

    Codeword 1: 10110101
    Codeword 2: 10011001
                  ^ ^  ^
    Differences at positions 3, 4, 7 (3 bits differ)

    Hamming Distance = 3

    Minimum Hamming Distance (d_min) requirements:
    - To detect d errors: d_min >= d + 1
    - To correct d errors: d_min >= 2d + 1

    Example:
    - d_min = 2: Can detect 1-bit errors
    - d_min = 3: Can correct 1-bit errors OR detect 2-bit errors
    - d_min = 5: Can correct 2-bit errors OR detect 4-bit errors
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Correction Techniques</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Block Codes</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Hamming Code</li>
          <li>Reed-Solomon Code</li>
          <li>BCH Code</li>
          <li>Low-Density Parity Check (LDPC)</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Convolutional Codes</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Viterbi decoding</li>
          <li>Used in deep space communication</li>
          <li>Mobile networks (GSM, LTE)</li>
          <li>Turbo codes</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hamming Code Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Hamming (7,4) Code:
    - 4 data bits: D1, D2, D3, D4
    - 3 parity bits: P1, P2, P3
    - 7 total bits transmitted

    Position:  1   2   3   4   5   6   7
    Type:      P1  P2  D1  P3  D2  D3  D4

    Parity Calculations:
    P1 covers positions: 1, 3, 5, 7 (binary: xxx1)
    P2 covers positions: 2, 3, 6, 7 (binary: xx1x)
    P3 covers positions: 4, 5, 6, 7 (binary: x1xx)

    Error Detection:
    Recalculate parities -> "Syndrome"
    Syndrome value = position of error bit
    Syndrome = 0 means no error
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of FEC</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Satellite Communication:</strong> High latency makes retransmission costly</li>
      <li><strong>Deep Space:</strong> NASA uses convolutional/turbo codes</li>
      <li><strong>Storage:</strong> CDs, DVDs, Blu-ray use Reed-Solomon</li>
      <li><strong>Wireless:</strong> Wi-Fi, LTE, 5G use LDPC and turbo codes</li>
      <li><strong>Memory:</strong> ECC RAM uses Hamming codes</li>
      <li><strong>QR Codes:</strong> Use Reed-Solomon for damage tolerance</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Trade-offs</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages of FEC</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>No retransmission needed</li>
          <li>Lower latency</li>
          <li>Works for broadcast/multicast</li>
          <li>Essential for real-time applications</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages of FEC</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Higher bandwidth overhead</li>
          <li>Complex encoding/decoding</li>
          <li>Cannot correct all errors</li>
          <li>Processing power required</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>FEC allows error correction without retransmission</li>
        <li>Hamming distance determines error detection/correction capability</li>
        <li>To correct d errors, need minimum Hamming distance of 2d+1</li>
        <li>Hamming code corrects single-bit errors (d_min = 3)</li>
        <li>Reed-Solomon excellent for burst errors (CDs, QR codes)</li>
        <li>FEC essential for satellite, wireless, and real-time systems</li>
      </ul>
    </div>
  </div>
);

export default ErrorCorrection;
