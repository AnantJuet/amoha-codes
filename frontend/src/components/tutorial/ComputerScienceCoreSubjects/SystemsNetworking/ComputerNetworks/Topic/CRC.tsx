import React from 'react';

const CRC: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cyclic Redundancy Check (CRC)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cyclic Redundancy Check (CRC) is a powerful error detection technique based on polynomial
      division. It treats the data as a large polynomial and divides it by a fixed generator
      polynomial to produce a remainder called the CRC. CRC can detect burst errors effectively.
    </p>

    <h2 className="text-3xl font-bold mt-8">How CRC Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    CRC Process:

    Given:
    - Data (D): The message to be sent
    - Generator (G): The divisor polynomial (n bits)
    - CRC: n-1 bit remainder

    SENDER:
    1. Append (n-1) zeros to data: D * 2^(n-1)
    2. Divide by generator using XOR (modulo-2)
    3. CRC = Remainder of division
    4. Transmit: Data + CRC (replacing the zeros)

    RECEIVER:
    1. Divide received data by same generator
    2. If remainder = 0: No error
    3. If remainder != 0: Error detected
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CRC Calculation Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Example:
    Data (D): 1101011011
    Generator (G): 10011 (5 bits, so CRC is 4 bits)

    Step 1: Append 4 zeros to data
    D': 1101011011 0000

    Step 2: Perform modulo-2 division (XOR)

         1100001010  (Quotient - not used)
        ____________
    10011)11010110110000
          10011
          -----
           10011
           10011
           -----
            00001
            00000
            -----
             00011
             00000
             -----
              00110
              00000
              -----
               01101
               00000
               -----
                11011
                10011
                -----
                 10000
                 10011
                 -----
                  00110
                  00000
                  -----
                   01100
                   00000
                   -----
                    1100  <- CRC (Remainder)

    Step 3: Transmit: 1101011011 1100

    Verification: Divide 11010110111100 by 10011
    If remainder = 0, no error!
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common CRC Polynomials</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Polynomial</th>
            <th className="p-3 border">Binary</th>
            <th className="p-3 border">Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">CRC-8</td>
            <td className="p-3 border">x^8+x^2+x+1</td>
            <td className="p-3 border">100000111</td>
            <td className="p-3 border">ATM headers</td>
          </tr>
          <tr>
            <td className="p-3 border">CRC-16</td>
            <td className="p-3 border">x^16+x^15+x^2+1</td>
            <td className="p-3 border">11000000000000101</td>
            <td className="p-3 border">USB, Modbus</td>
          </tr>
          <tr>
            <td className="p-3 border">CRC-32</td>
            <td className="p-3 border">x^32+x^26+x^23+...</td>
            <td className="p-3 border">33-bit value</td>
            <td className="p-3 border">Ethernet, ZIP</td>
          </tr>
          <tr>
            <td className="p-3 border">CRC-CCITT</td>
            <td className="p-3 border">x^16+x^12+x^5+1</td>
            <td className="p-3 border">10001000000100001</td>
            <td className="p-3 border">HDLC, X.25</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Detection Capabilities</h2>
    <p className="leading-relaxed">
      A well-chosen CRC polynomial can detect:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>All single-bit errors</li>
      <li>All double-bit errors (if polynomial has at least 3 terms)</li>
      <li>All odd-number bit errors (if polynomial has (x+1) as factor)</li>
      <li>All burst errors of length less than or equal to n-1 (CRC length)</li>
      <li>Most burst errors of length greater than n-1</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">CRC vs Checksum</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">CRC</th>
            <th className="p-3 border">Checksum</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Method</td>
            <td className="p-3 border">Polynomial division</td>
            <td className="p-3 border">Addition</td>
          </tr>
          <tr>
            <td className="p-3 border">Burst Error Detection</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">Good</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower</td>
          </tr>
          <tr>
            <td className="p-3 border">Used In</td>
            <td className="p-3 border">Ethernet, HDLC, ZIP</td>
            <td className="p-3 border">TCP, UDP, IP</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Ethernet:</strong> Uses CRC-32 in Frame Check Sequence (FCS)</li>
      <li><strong>HDLC/PPP:</strong> Uses CRC-16 or CRC-32</li>
      <li><strong>Storage:</strong> Hard drives, SSDs, ZIP files</li>
      <li><strong>Communication:</strong> Modems, USB, Bluetooth</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>CRC uses polynomial division with XOR operations</li>
        <li>Append n-1 zeros, divide by generator, remainder is CRC</li>
        <li>Receiver divides by same generator; remainder 0 means no error</li>
        <li>Excellent for detecting burst errors</li>
        <li>CRC-32 used in Ethernet; CRC-16 in HDLC</li>
        <li>More powerful than parity and checksum</li>
      </ul>
    </div>
  </div>
);

export default CRC;
