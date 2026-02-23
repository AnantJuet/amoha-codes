import React from 'react';

const NumberConversions: React.FC = () => (
  <div className="mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Binary, Octal, Hexadecimal Conversions</h1>

    <p className="text-lg leading-relaxed">
      Converting between number systems is a fundamental skill in computer science. This tutorial
      covers all conversion methods between binary, octal, decimal, and hexadecimal systems.
    </p>

    <h2 className="text-2xl font-bold mt-8">Decimal to Binary Conversion</h2>
    <p className="leading-relaxed">
      To convert decimal to binary, repeatedly divide by 2 and record the remainders. Read the
      remainders from bottom to top.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: Convert 25&#8321;&#8320; to Binary</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Division</th>
          <th className="p-2 border">Quotient</th>
          <th className="p-2 border">Remainder</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">25 ÷ 2</td><td className="p-2 border">12</td><td className="p-2 border">1</td></tr>
        <tr><td className="p-2 border">12 ÷ 2</td><td className="p-2 border">6</td><td className="p-2 border">0</td></tr>
        <tr><td className="p-2 border">6 ÷ 2</td><td className="p-2 border">3</td><td className="p-2 border">0</td></tr>
        <tr><td className="p-2 border">3 ÷ 2</td><td className="p-2 border">1</td><td className="p-2 border">1</td></tr>
        <tr><td className="p-2 border">1 ÷ 2</td><td className="p-2 border">0</td><td className="p-2 border">1</td></tr>
      </tbody>
    </table>
    <p className="mt-2"><strong>Reading bottom to top: 25&#8321;&#8320; = 11001&#8322;</strong></p>

    <h2 className="text-2xl font-bold mt-8">Binary to Decimal Conversion</h2>
    <p className="leading-relaxed">
      Multiply each bit by its place value (power of 2) and sum the results.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: Convert 11001&#8322; to Decimal</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Position</th>
          <th className="p-2 border">4</th>
          <th className="p-2 border">3</th>
          <th className="p-2 border">2</th>
          <th className="p-2 border">1</th>
          <th className="p-2 border">0</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Binary Digit</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td></tr>
        <tr><td className="p-2 border">Place Value</td><td className="p-2 border">16</td><td className="p-2 border">8</td><td className="p-2 border">4</td><td className="p-2 border">2</td><td className="p-2 border">1</td></tr>
        <tr><td className="p-2 border">Contribution</td><td className="p-2 border">16</td><td className="p-2 border">8</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td></tr>
      </tbody>
    </table>
    <p className="mt-2"><strong>11001&#8322; = 16 + 8 + 0 + 0 + 1 = 25&#8321;&#8320;</strong></p>

    <h2 className="text-2xl font-bold mt-8">Decimal to Hexadecimal Conversion</h2>
    <p className="leading-relaxed">
      Repeatedly divide by 16 and record remainders. Convert remainders 10-15 to A-F.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: Convert 255&#8321;&#8320; to Hexadecimal</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Division</th>
          <th className="p-2 border">Quotient</th>
          <th className="p-2 border">Remainder</th>
          <th className="p-2 border">Hex Digit</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">255 ÷ 16</td><td className="p-2 border">15</td><td className="p-2 border">15</td><td className="p-2 border">F</td></tr>
        <tr><td className="p-2 border">15 ÷ 16</td><td className="p-2 border">0</td><td className="p-2 border">15</td><td className="p-2 border">F</td></tr>
      </tbody>
    </table>
    <p className="mt-2"><strong>Reading bottom to top: 255&#8321;&#8320; = FF&#8321;&#8326;</strong></p>

    <h2 className="text-2xl font-bold mt-8">Binary to Hexadecimal Conversion</h2>
    <p className="leading-relaxed">
      Group binary digits into sets of 4 (from right to left), then convert each group to its hex equivalent.
    </p>

    <h3 className="text-xl font-semibold mt-4">Binary to Hex Reference Table</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Binary</th>
          <th className="p-2 border">Hex</th>
          <th className="p-2 border">Binary</th>
          <th className="p-2 border">Hex</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border font-mono text-gray-900">0000</td><td className="p-2 border">0</td><td className="p-2 border font-mono text-gray-900">1000</td><td className="p-2 border">8</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">0001</td><td className="p-2 border">1</td><td className="p-2 border font-mono text-gray-900">1001</td><td className="p-2 border">9</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">0010</td><td className="p-2 border">2</td><td className="p-2 border font-mono text-gray-900">1010</td><td className="p-2 border">A</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">0011</td><td className="p-2 border">3</td><td className="p-2 border font-mono text-gray-900">1011</td><td className="p-2 border">B</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">0100</td><td className="p-2 border">4</td><td className="p-2 border font-mono text-gray-900">1100</td><td className="p-2 border">C</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">0101</td><td className="p-2 border">5</td><td className="p-2 border font-mono text-gray-900">1101</td><td className="p-2 border">D</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">0110</td><td className="p-2 border">6</td><td className="p-2 border font-mono text-gray-900">1110</td><td className="p-2 border">E</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">0111</td><td className="p-2 border">7</td><td className="p-2 border font-mono text-gray-900">1111</td><td className="p-2 border">F</td></tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold mt-4">Example: Convert 11010110&#8322; to Hexadecimal</h3>
    <p className="leading-relaxed mt-2">
      Group into 4s: 1101 0110 → 1101 = D, 0110 = 6 → <strong>11010110&#8322; = D6&#8321;&#8326;</strong>
    </p>

    <h2 className="text-2xl font-bold mt-8">Binary to Octal Conversion</h2>
    <p className="leading-relaxed">
      Group binary digits into sets of 3 (from right to left), then convert each group to octal.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: Convert 11010110&#8322; to Octal</h3>
    <p className="leading-relaxed mt-2">
      Group into 3s: 011 010 110 → 011 = 3, 010 = 2, 110 = 6 → <strong>11010110&#8322; = 326&#8328;</strong>
    </p>

    <h2 className="text-2xl font-bold mt-8">Quick Conversion Reference</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Conversion</th>
          <th className="p-2 border">Method</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Decimal → Binary</td><td className="p-2 border">Divide by 2, read remainders upward</td></tr>
        <tr><td className="p-2 border">Binary → Decimal</td><td className="p-2 border">Sum of (bit × 2^position)</td></tr>
        <tr><td className="p-2 border">Binary → Hex</td><td className="p-2 border">Group by 4 bits</td></tr>
        <tr><td className="p-2 border">Binary → Octal</td><td className="p-2 border">Group by 3 bits</td></tr>
        <tr><td className="p-2 border">Hex → Binary</td><td className="p-2 border">Each hex digit = 4 bits</td></tr>
        <tr><td className="p-2 border">Octal → Binary</td><td className="p-2 border">Each octal digit = 3 bits</td></tr>
      </tbody>
    </table>

  </div>
);

export default NumberConversions;
