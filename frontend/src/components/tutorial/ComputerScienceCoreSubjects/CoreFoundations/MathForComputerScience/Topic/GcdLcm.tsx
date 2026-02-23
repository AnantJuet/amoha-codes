import React from 'react';

const GcdLcm: React.FC = () => (
  <div className="mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">GCD and LCM</h1>

    <p className="text-lg leading-relaxed">
      The Greatest Common Divisor (GCD) and Least Common Multiple (LCM) are fundamental concepts
      in number theory with applications in simplifying fractions, cryptography, and scheduling algorithms.
    </p>

    <h2 className="text-2xl font-bold mt-8">Greatest Common Divisor (GCD)</h2>
    <p className="leading-relaxed">
      The GCD of two integers a and b is the largest positive integer that divides both a and b.
    </p>
    <p className="leading-relaxed mt-2">
      <strong>Notation:</strong> GCD(a, b) or gcd(a, b) or (a, b)
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: GCD(48, 18)</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Number</th>
          <th className="p-2 border">Divisors</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">48</td><td className="p-2 border">1, 2, 3, 4, 6, 8, 12, 16, 24, 48</td></tr>
        <tr><td className="p-2 border">18</td><td className="p-2 border">1, 2, 3, 6, 9, 18</td></tr>
        <tr><td className="p-2 border">Common</td><td className="p-2 border">1, 2, 3, 6</td></tr>
      </tbody>
    </table>
    <p className="mt-2"><strong>GCD(48, 18) = 6</strong></p>

    <h2 className="text-2xl font-bold mt-8">Least Common Multiple (LCM)</h2>
    <p className="leading-relaxed">
      The LCM of two integers a and b is the smallest positive integer that is divisible by both a and b.
    </p>
    <p className="leading-relaxed mt-2">
      <strong>Notation:</strong> LCM(a, b) or lcm(a, b) or [a, b]
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: LCM(4, 6)</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Number</th>
          <th className="p-2 border">Multiples</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">4</td><td className="p-2 border">4, 8, 12, 16, 20, 24...</td></tr>
        <tr><td className="p-2 border">6</td><td className="p-2 border">6, 12, 18, 24, 30...</td></tr>
        <tr><td className="p-2 border">Common</td><td className="p-2 border">12, 24, 36...</td></tr>
      </tbody>
    </table>
    <p className="mt-2"><strong>LCM(4, 6) = 12</strong></p>

    <h2 className="text-2xl font-bold mt-8">Relationship Between GCD and LCM</h2>
    <p className="leading-relaxed font-mono text-lg text-gray-900">
      GCD(a, b) × LCM(a, b) = a × b
    </p>
    <p className="leading-relaxed mt-2 font-mono text-lg text-gray-900">
      Therefore: LCM(a, b) = (a × b) / GCD(a, b)
    </p>

    <h3 className="text-xl font-semibold mt-4">Verification with Example</h3>
    <p className="leading-relaxed mt-2">
      For a = 48, b = 18: GCD(48, 18) = 6, LCM(48, 18) = (48 × 18) / 6 = 864 / 6 = 144
    </p>
    <p className="leading-relaxed">
      Check: 6 × 144 = 864 = 48 × 18 ✓
    </p>

    <h2 className="text-2xl font-bold mt-8">Properties</h2>

    <h3 className="text-xl font-semibold mt-4">GCD Properties</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Commutative</td><td className="p-2 border">GCD(a, b) = GCD(b, a)</td></tr>
        <tr><td className="p-2 border">Identity with 0</td><td className="p-2 border">GCD(a, 0) = a</td></tr>
        <tr><td className="p-2 border">Identity with 1</td><td className="p-2 border">GCD(a, 1) = 1</td></tr>
        <tr><td className="p-2 border">Self GCD</td><td className="p-2 border">GCD(a, a) = a</td></tr>
        <tr><td className="p-2 border">Subtraction</td><td className="p-2 border">GCD(a, b) = GCD(a - b, b) for a {">"} b</td></tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold mt-4">LCM Properties</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Commutative</td><td className="p-2 border">LCM(a, b) = LCM(b, a)</td></tr>
        <tr><td className="p-2 border">Identity with 1</td><td className="p-2 border">LCM(a, 1) = a</td></tr>
        <tr><td className="p-2 border">Self LCM</td><td className="p-2 border">LCM(a, a) = a</td></tr>
        <tr><td className="p-2 border">Lower bound</td><td className="p-2 border">LCM(a, b) ≥ max(a, b)</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Methods to Find GCD</h2>

    <h3 className="text-xl font-semibold mt-4">1. Prime Factorization Method</h3>
    <p className="leading-relaxed">
      Find prime factorization of both numbers, then multiply common prime factors with minimum powers.
    </p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900">
{`48 = 2⁴ × 3
18 = 2 × 3²

GCD = 2¹ × 3¹ = 6 (minimum powers of common primes)
LCM = 2⁴ × 3² = 144 (maximum powers of all primes)`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">2. Euclidean Algorithm</h3>
    <p className="leading-relaxed">
      Repeatedly apply: GCD(a, b) = GCD(b, a mod b) until remainder is 0.
    </p>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Calculation</th>
          <th className="p-2 border">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">48 = 18 × 2 + 12</td><td className="p-2 border">GCD(48, 18) = GCD(18, 12)</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">18 = 12 × 1 + 6</td><td className="p-2 border">GCD(18, 12) = GCD(12, 6)</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">12 = 6 × 2 + 0</td><td className="p-2 border">GCD(12, 6) = 6</td></tr>
      </tbody>
    </table>
    <p className="mt-2"><strong>Therefore, GCD(48, 18) = 6</strong></p>

    <h2 className="text-2xl font-bold mt-8">Implementation</h2>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900 overflow-x-auto">
{`// Euclidean Algorithm for GCD
function gcd(a, b):
    while b != 0:
        temp = b
        b = a % b
        a = temp
    return a

// LCM using GCD
function lcm(a, b):
    return (a * b) / gcd(a, b)

// Recursive GCD
function gcdRecursive(a, b):
    if b == 0:
        return a
    return gcdRecursive(b, a % b)`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Simplifying Fractions</td><td className="p-2 border">Divide numerator and denominator by GCD</td></tr>
        <tr><td className="p-2 border">RSA Cryptography</td><td className="p-2 border">Finding modular multiplicative inverse</td></tr>
        <tr><td className="p-2 border">Scheduling</td><td className="p-2 border">Finding when events coincide (LCM of periods)</td></tr>
        <tr><td className="p-2 border">Computer Graphics</td><td className="p-2 border">Calculating aspect ratios</td></tr>
        <tr><td className="p-2 border">Music Theory</td><td className="p-2 border">Finding common rhythmic patterns</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Find GCD(84, 126) using Euclidean algorithm</li>
      <li>Find LCM(12, 18, 24)</li>
      <li>Simplify the fraction 144/192</li>
      <li>If GCD(a, b) = 12 and a × b = 1440, find LCM(a, b)</li>
      <li>Two events occur every 15 and 20 minutes. When will they occur together?</li>
    </ol>

  </div>
);

export default GcdLcm;
