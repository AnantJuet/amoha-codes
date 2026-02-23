import React from 'react';

const ExtendedEuclidean: React.FC = () => (
  <div className="mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Extended Euclidean Algorithm</h1>

    <p className="text-lg leading-relaxed">
      The Extended Euclidean Algorithm extends the basic Euclidean algorithm to find not only the GCD
      of two integers a and b, but also integers x and y such that ax + by = GCD(a, b). This is known
      as Bézout's identity.
    </p>

    <h2 className="text-2xl font-bold mt-8">Bézout's Identity</h2>
    <p className="leading-relaxed">
      For any integers a and b (not both zero), there exist integers x and y such that:
    </p>
    <p className="leading-relaxed mt-2 font-mono text-lg text-center text-gray-900">
      ax + by = GCD(a, b)
    </p>

    <h2 className="text-2xl font-bold mt-8">The Algorithm</h2>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900 overflow-x-auto">
{`function extendedGCD(a, b):
    if b == 0:
        return (a, 1, 0)  // GCD, x, y where a*1 + b*0 = a

    (gcd, x1, y1) = extendedGCD(b, a % b)

    // Update x and y using results of recursive call
    x = y1
    y = x1 - (a // b) * y1

    return (gcd, x, y)`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Worked Example</h2>
    <h3 className="text-xl font-semibold mt-4">Find x, y such that 35x + 15y = GCD(35, 15)</h3>

    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Forward Pass</td><td className="p-2 border">35 = 15 × 2 + 5, then 15 = 5 × 3 + 0 → GCD = 5</td></tr>
        <tr><td className="p-2 border">Back Substitution</td><td className="p-2 border">5 = 35 - 15 × 2 = 35 × 1 + 15 × (-2)</td></tr>
        <tr><td className="p-2 border">Result</td><td className="p-2 border">x = 1, y = -2</td></tr>
        <tr><td className="p-2 border">Verify</td><td className="p-2 border">35(1) + 15(-2) = 35 - 30 = 5 ✓</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Finding Modular Inverse</h2>
    <p className="leading-relaxed">
      The modular inverse of a mod n exists if GCD(a, n) = 1.
    </p>
    <p className="leading-relaxed mt-2">
      If ax + ny = 1, then ax ≡ 1 (mod n), so x is the modular inverse of a.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: Find inverse of 7 mod 26</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Calculation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">26 = 7 × 3 + 5</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">7 = 5 × 1 + 2</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">5 = 2 × 2 + 1</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border">2 = 1 × 2 + 0</td></tr>
        <tr><td className="p-2 border">Back-sub</td><td className="p-2 border">1 = 5 - 2×2 = 5 - 2(7-5) = 3(5) - 2(7) = 3(26-3×7) - 2(7) = 3(26) - 11(7)</td></tr>
        <tr><td className="p-2 border">Result</td><td className="p-2 border">7 × (-11) ≡ 1 (mod 26), so -11 mod 26 = 15</td></tr>
        <tr><td className="p-2 border">Verify</td><td className="p-2 border">7 × 15 = 105 = 4×26 + 1 ≡ 1 (mod 26) ✓</td></tr>
      </tbody>
    </table>
    <p className="mt-2"><strong>The inverse of 7 mod 26 is 15</strong></p>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">RSA Cryptography</td><td className="p-2 border">Computing private keys</td></tr>
        <tr><td className="p-2 border">Linear Diophantine Equations</td><td className="p-2 border">Solving ax + by = c</td></tr>
        <tr><td className="p-2 border">Chinese Remainder Theorem</td><td className="p-2 border">Combining congruences</td></tr>
        <tr><td className="p-2 border">Modular Division</td><td className="p-2 border">a/b mod n = a × (b⁻¹) mod n</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Find x, y such that 120x + 23y = GCD(120, 23)</li>
      <li>Find the modular inverse of 17 mod 43</li>
      <li>Solve: 3x ≡ 7 (mod 11)</li>
      <li>Find x, y for 252x + 198y = GCD(252, 198)</li>
    </ol>

  </div>
);

export default ExtendedEuclidean;
