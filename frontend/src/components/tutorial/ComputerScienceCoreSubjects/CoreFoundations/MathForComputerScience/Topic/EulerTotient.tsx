import React from 'react';

const EulerTotient: React.FC = () => (
  <div className="mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Euler's Totient Function</h1>

    <p className="text-lg leading-relaxed">
      Euler's totient function φ(n) counts the number of integers from 1 to n that are relatively
      prime to n (coprime with n). It's a fundamental function in number theory and cryptography.
    </p>

    <h2 className="text-2xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      φ(n) = count of integers k where 1 ≤ k ≤ n and GCD(k, n) = 1
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: φ(12)</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Numbers 1 to 12</th>
          <th className="p-2 border">Coprime to 12?</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">Yes (GCD = 1)</td></tr>
        <tr><td className="p-2 border">2, 3, 4, 6, 8, 9, 10, 12</td><td className="p-2 border">No (share factors with 12)</td></tr>
        <tr><td className="p-2 border">5, 7, 11</td><td className="p-2 border">Yes (GCD = 1)</td></tr>
      </tbody>
    </table>
    <p className="mt-2"><strong>φ(12) = 4</strong> (coprime numbers: 1, 5, 7, 11)</p>

    <h2 className="text-2xl font-bold mt-8">Formulas</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Case</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">For prime p</td><td className="p-2 border font-mono text-gray-900">φ(p) = p - 1</td></tr>
        <tr><td className="p-2 border">For prime power p^k</td><td className="p-2 border font-mono text-gray-900">φ(p^k) = p^k - p^(k-1) = p^(k-1) × (p - 1)</td></tr>
        <tr><td className="p-2 border">For coprime m, n</td><td className="p-2 border font-mono text-gray-900">φ(m × n) = φ(m) × φ(n)</td></tr>
        <tr><td className="p-2 border">General formula</td><td className="p-2 border font-mono text-gray-900">φ(n) = n × ∏(1 - 1/p) for all prime factors p</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Euler's Theorem</h2>
    <p className="leading-relaxed">
      If GCD(a, n) = 1, then:
    </p>
    <p className="leading-relaxed mt-2 font-mono text-xl text-center text-gray-900">
      a^φ(n) ≡ 1 (mod n)
    </p>
    <p className="leading-relaxed mt-2">
      <strong>Note:</strong> Fermat's Little Theorem is a special case where n is prime (φ(p) = p-1).
    </p>

    <h2 className="text-2xl font-bold mt-8">Common Values</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">n</th>
          <th className="p-2 border">φ(n)</th>
          <th className="p-2 border">Coprime Numbers</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">1</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">1</td><td className="p-2 border">1</td></tr>
        <tr><td className="p-2 border">6</td><td className="p-2 border">2</td><td className="p-2 border">1, 5</td></tr>
        <tr><td className="p-2 border">7 (prime)</td><td className="p-2 border">6</td><td className="p-2 border">1, 2, 3, 4, 5, 6</td></tr>
        <tr><td className="p-2 border">10</td><td className="p-2 border">4</td><td className="p-2 border">1, 3, 7, 9</td></tr>
        <tr><td className="p-2 border">12</td><td className="p-2 border">4</td><td className="p-2 border">1, 5, 7, 11</td></tr>
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
        <tr><td className="p-2 border">RSA Algorithm</td><td className="p-2 border">φ(n) = φ(p×q) = (p-1)(q-1) for key generation</td></tr>
        <tr><td className="p-2 border">Modular Exponentiation</td><td className="p-2 border">Reduce large exponents mod φ(n)</td></tr>
        <tr><td className="p-2 border">Group Theory</td><td className="p-2 border">Order of multiplicative group Z_n* is φ(n)</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Calculate φ(24)</li>
      <li>Calculate φ(100)</li>
      <li>Use Euler's theorem to find 7^222 mod 10</li>
      <li>If p and q are primes, what is φ(p × q)?</li>
    </ol>

  </div>
);

export default EulerTotient;
