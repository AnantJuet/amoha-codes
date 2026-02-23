import React from 'react';

const NumberSystems: React.FC = () => (
  <div className="mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Number Systems</h1>

    <p className="text-lg leading-relaxed">
      A number system is a way of representing numbers using a consistent set of symbols and rules.
      In computer science, understanding different number systems is crucial because computers
      operate using binary (base-2) arithmetic, while humans typically use decimal (base-10).
    </p>

    <h2 className="text-2xl font-bold mt-8">Types of Number Systems</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">System</th>
          <th className="p-2 border">Base</th>
          <th className="p-2 border">Digits Used</th>
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Binary</td><td className="p-2 border">2</td><td className="p-2 border">0, 1</td><td className="p-2 border">1010&#8322; = 10&#8321;&#8320;</td></tr>
        <tr><td className="p-2 border">Octal</td><td className="p-2 border">8</td><td className="p-2 border">0-7</td><td className="p-2 border">12&#8328; = 10&#8321;&#8320;</td></tr>
        <tr><td className="p-2 border">Decimal</td><td className="p-2 border">10</td><td className="p-2 border">0-9</td><td className="p-2 border">10&#8321;&#8320;</td></tr>
        <tr><td className="p-2 border">Hexadecimal</td><td className="p-2 border">16</td><td className="p-2 border">0-9, A-F</td><td className="p-2 border">A&#8321;&#8326; = 10&#8321;&#8320;</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Binary Number System (Base-2)</h2>
    <p className="leading-relaxed">
      The binary system uses only two digits: 0 and 1. Each digit is called a <strong>bit</strong> (binary digit).
      Computers use binary because electronic circuits can easily represent two states: on (1) and off (0).
    </p>

    <h3 className="text-xl font-semibold mt-4">Place Values in Binary</h3>
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
        <tr><td className="p-2 border">Power of 2</td><td className="p-2 border">2&#8308;</td><td className="p-2 border">2&#179;</td><td className="p-2 border">2&#178;</td><td className="p-2 border">2&#185;</td><td className="p-2 border">2&#8304;</td></tr>
        <tr><td className="p-2 border">Value</td><td className="p-2 border">16</td><td className="p-2 border">8</td><td className="p-2 border">4</td><td className="p-2 border">2</td><td className="p-2 border">1</td></tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold mt-4">Example: Convert 1011&#8322; to Decimal</h3>
    <p className="leading-relaxed mt-2">
      1011&#8322; = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = <strong>11&#8321;&#8320;</strong>
    </p>

    <h2 className="text-2xl font-bold mt-8">Octal Number System (Base-8)</h2>
    <p className="leading-relaxed">
      The octal system uses digits 0-7. It was popular in early computing because it provides
      a convenient way to represent binary numbers (each octal digit represents exactly 3 binary digits).
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: Convert 157&#8328; to Decimal</h3>
    <p className="leading-relaxed mt-2">
      157&#8328; = 1×8² + 5×8¹ + 7×8⁰ = 64 + 40 + 7 = <strong>111&#8321;&#8320;</strong>
    </p>

    <h2 className="text-2xl font-bold mt-8">Hexadecimal Number System (Base-16)</h2>
    <p className="leading-relaxed">
      Hexadecimal uses digits 0-9 and letters A-F (where A=10, B=11, C=12, D=13, E=14, F=15).
      It's widely used in computing because each hex digit represents exactly 4 binary digits,
      making it a compact way to represent binary data.
    </p>

    <h3 className="text-xl font-semibold mt-4">Hexadecimal Digits</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Hex</th>
          <th className="p-2 border">A</th>
          <th className="p-2 border">B</th>
          <th className="p-2 border">C</th>
          <th className="p-2 border">D</th>
          <th className="p-2 border">E</th>
          <th className="p-2 border">F</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Decimal</td><td className="p-2 border">10</td><td className="p-2 border">11</td><td className="p-2 border">12</td><td className="p-2 border">13</td><td className="p-2 border">14</td><td className="p-2 border">15</td></tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold mt-4">Example: Convert 2AF&#8321;&#8326; to Decimal</h3>
    <p className="leading-relaxed mt-2">
      2AF&#8321;&#8326; = 2×16² + 10×16¹ + 15×16⁰ = 512 + 160 + 15 = <strong>687&#8321;&#8320;</strong>
    </p>

    <h2 className="text-2xl font-bold mt-8">Applications in Computer Science</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Number System</th>
          <th className="p-2 border">Applications</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Binary</td><td className="p-2 border">CPU operations, memory addresses, boolean logic</td></tr>
        <tr><td className="p-2 border">Octal</td><td className="p-2 border">Unix file permissions (chmod 755)</td></tr>
        <tr><td className="p-2 border">Hexadecimal</td><td className="p-2 border">Memory addresses, color codes (#FF5733), MAC addresses</td></tr>
        <tr><td className="p-2 border">Decimal</td><td className="p-2 border">Human-readable output, user interfaces</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Convert 11001&#8322; to decimal</li>
      <li>Convert 45&#8321;&#8320; to binary</li>
      <li>Convert 3E&#8321;&#8326; to decimal</li>
      <li>Convert 255&#8321;&#8320; to hexadecimal</li>
      <li>Convert 347&#8328; to binary</li>
    </ol>

  </div>
);

export default NumberSystems;
