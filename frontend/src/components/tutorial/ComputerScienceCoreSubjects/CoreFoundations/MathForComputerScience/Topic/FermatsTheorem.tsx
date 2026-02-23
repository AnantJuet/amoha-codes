import React from 'react';

const FermatsTheorem: React.FC = () => (
  <div className="mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Fermat's Little Theorem</h1>

    <p className="text-lg leading-relaxed">
      Fermat's Little Theorem is a fundamental result in number theory that establishes a relationship
      between prime numbers and modular exponentiation. It's essential for primality testing and cryptography.
    </p>

    <h2 className="text-2xl font-bold mt-8">The Theorem</h2>
    <p className="leading-relaxed">
      If p is a prime number and a is any integer not divisible by p, then:
    </p>
    <p className="leading-relaxed mt-2 font-mono text-xl text-center text-gray-900">
      a^(p-1) ≡ 1 (mod p)
    </p>

    <h3 className="text-xl font-semibold mt-4">Equivalent Form</h3>
    <p className="leading-relaxed">
      For any integer a:
    </p>
    <p className="leading-relaxed mt-2 font-mono text-xl text-center text-gray-900">
      a^p ≡ a (mod p)
    </p>

    <h2 className="text-2xl font-bold mt-8">Examples</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Values</th>
          <th className="p-2 border">Calculation</th>
          <th className="p-2 border">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">p = 7, a = 3</td><td className="p-2 border">3^6 mod 7 = 729 mod 7</td><td className="p-2 border">1 ✓</td></tr>
        <tr><td className="p-2 border">p = 11, a = 2</td><td className="p-2 border">2^10 mod 11 = 1024 mod 11</td><td className="p-2 border">1 ✓</td></tr>
        <tr><td className="p-2 border">p = 5, a = 4</td><td className="p-2 border">4^4 mod 5 = 256 mod 5</td><td className="p-2 border">1 ✓</td></tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold mt-4">Example: Calculate 2^100 mod 13</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Calculation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Apply Fermat</td><td className="p-2 border">2^12 ≡ 1 (mod 13)</td></tr>
        <tr><td className="p-2 border">Decompose 100</td><td className="p-2 border">100 = 12 × 8 + 4</td></tr>
        <tr><td className="p-2 border">Substitute</td><td className="p-2 border">2^100 = (2^12)^8 × 2^4 ≡ 1^8 × 16 (mod 13)</td></tr>
        <tr><td className="p-2 border">Final</td><td className="p-2 border">16 mod 13 = 3</td></tr>
      </tbody>
    </table>
    <p className="mt-2"><strong>2^100 mod 13 = 3</strong></p>

    <h2 className="text-2xl font-bold mt-8">Finding Modular Inverse</h2>
    <p className="leading-relaxed">
      From Fermat's Little Theorem:
    </p>
    <p className="leading-relaxed mt-2 font-mono text-gray-900">
      a^(p-1) ≡ 1 (mod p) → a × a^(p-2) ≡ 1 (mod p)
    </p>
    <p className="leading-relaxed mt-2">
      Therefore, <strong>a^(p-2)</strong> is the modular inverse of a mod p.
    </p>

    <h2 className="text-2xl font-bold mt-8">Fermat Primality Test</h2>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900 overflow-x-auto">
{`function fermatTest(n, k):
    // k = number of iterations
    if n <= 1: return false
    if n <= 3: return true

    for i in range(k):
        a = random(2, n-2)
        if powerMod(a, n-1, n) != 1:
            return false  // Definitely composite

    return true  // Probably prime`}
    </pre>
    <p className="mt-2">
      <strong>Note:</strong> This is a probabilistic test. Carmichael numbers can fool it.
    </p>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">RSA Cryptography</td><td className="p-2 border">Key generation and encryption</td></tr>
        <tr><td className="p-2 border">Primality Testing</td><td className="p-2 border">Fermat and Miller-Rabin tests</td></tr>
        <tr><td className="p-2 border">Computing Large Powers</td><td className="p-2 border">Reducing exponents modulo p-1</td></tr>
        <tr><td className="p-2 border">Modular Inverse</td><td className="p-2 border">a^(-1) ≡ a^(p-2) (mod p)</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Verify 5^10 ≡ 1 (mod 11)</li>
      <li>Calculate 7^222 mod 11 using Fermat's theorem</li>
      <li>Find the inverse of 5 mod 13 using Fermat's theorem</li>
      <li>Compute 3^1000 mod 17</li>
    </ol>

  </div>
);

export default FermatsTheorem;
