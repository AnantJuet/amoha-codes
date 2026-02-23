import React from 'react';

const ChineseRemainder: React.FC = () => (
  <div className="mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Chinese Remainder Theorem</h1>

    <p className="text-lg leading-relaxed">
      The Chinese Remainder Theorem (CRT) provides a way to solve systems of simultaneous congruences
      with pairwise coprime moduli. It has important applications in cryptography, computer arithmetic,
      and coding theory.
    </p>

    <h2 className="text-2xl font-bold mt-8">The Theorem</h2>
    <p className="leading-relaxed">
      Given pairwise coprime moduli n&#8321;, n&#8322;, ..., n&#8342; and any integers a&#8321;, a&#8322;, ..., a&#8342;, the system:
    </p>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Congruence</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border font-mono text-gray-900">x ≡ a&#8321; (mod n&#8321;)</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">x ≡ a&#8322; (mod n&#8322;)</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">...</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">x ≡ a&#8342; (mod n&#8342;)</td></tr>
      </tbody>
    </table>
    <p className="mt-2">
      has a <strong>unique solution</strong> modulo N = n&#8321; × n&#8322; × ... × n&#8342;
    </p>

    <h2 className="text-2xl font-bold mt-8">Constructive Solution</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Compute N = n&#8321; × n&#8322; × ... × n&#8342;</li>
      <li>For each i, compute N&#7522; = N / n&#7522;</li>
      <li>Find y&#7522; such that N&#7522; × y&#7522; ≡ 1 (mod n&#7522;) (using Extended Euclidean)</li>
      <li>The solution is: x = Σ(a&#7522; × N&#7522; × y&#7522;) mod N</li>
    </ol>

    <h2 className="text-2xl font-bold mt-8">Worked Example</h2>
    <h3 className="text-xl font-semibold mt-4">Solve the system:</h3>
    <p className="leading-relaxed font-mono text-gray-900">x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 2 (mod 7)</p>

    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Calculation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Compute N</td><td className="p-2 border">N = 3 × 5 × 7 = 105</td></tr>
        <tr><td className="p-2 border">Find N&#8321;</td><td className="p-2 border">N&#8321; = 105/3 = 35, find y&#8321;: 35y&#8321; ≡ 1 (mod 3) → y&#8321; = 2</td></tr>
        <tr><td className="p-2 border">Find N&#8322;</td><td className="p-2 border">N&#8322; = 105/5 = 21, find y&#8322;: 21y&#8322; ≡ 1 (mod 5) → y&#8322; = 1</td></tr>
        <tr><td className="p-2 border">Find N&#8323;</td><td className="p-2 border">N&#8323; = 105/7 = 15, find y&#8323;: 15y&#8323; ≡ 1 (mod 7) → y&#8323; = 1</td></tr>
        <tr><td className="p-2 border">Calculate x</td><td className="p-2 border">x = (2×35×2 + 3×21×1 + 2×15×1) mod 105 = 233 mod 105 = 23</td></tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold mt-4">Verification</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Check</th>
          <th className="p-2 border">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">23 mod 3</td><td className="p-2 border">2 ✓</td></tr>
        <tr><td className="p-2 border">23 mod 5</td><td className="p-2 border">3 ✓</td></tr>
        <tr><td className="p-2 border">23 mod 7</td><td className="p-2 border">2 ✓</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">RSA Optimization</td><td className="p-2 border">Speed up decryption using CRT</td></tr>
        <tr><td className="p-2 border">Large Integer Arithmetic</td><td className="p-2 border">Represent large numbers as residues</td></tr>
        <tr><td className="p-2 border">Secret Sharing</td><td className="p-2 border">Shamir's scheme uses polynomial interpolation</td></tr>
        <tr><td className="p-2 border">Scheduling Problems</td><td className="p-2 border">Finding common event times</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Solve: x ≡ 1 (mod 2), x ≡ 2 (mod 3), x ≡ 3 (mod 5)</li>
      <li>Find the smallest positive integer that leaves remainder 1, 2, 3 when divided by 3, 5, 7</li>
      <li>Solve: x ≡ 3 (mod 4), x ≡ 4 (mod 5)</li>
    </ol>

  </div>
);

export default ChineseRemainder;
