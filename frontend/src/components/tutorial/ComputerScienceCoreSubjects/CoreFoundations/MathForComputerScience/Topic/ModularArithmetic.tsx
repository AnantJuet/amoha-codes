import React from 'react';

const ModularArithmetic: React.FC = () => (
  <div className="mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Modular Arithmetic</h1>

    <p className="text-lg leading-relaxed">
      Modular arithmetic is a system of arithmetic for integers where numbers "wrap around" upon
      reaching a certain value called the modulus. It's fundamental to cryptography, computer
      science, and many mathematical applications.
    </p>

    <h2 className="text-2xl font-bold mt-8">The Modulo Operation</h2>
    <p className="leading-relaxed">
      a mod n = r means when a is divided by n, the remainder is r.
    </p>
    <p className="leading-relaxed mt-2">
      We write: a ≡ r (mod n) - "a is congruent to r modulo n"
    </p>

    <h3 className="text-xl font-semibold mt-4">Examples</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Expression</th>
          <th className="p-2 border">Result</th>
          <th className="p-2 border">Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">17 mod 5</td><td className="p-2 border">2</td><td className="p-2 border">17 = 5 × 3 + 2</td></tr>
        <tr><td className="p-2 border">23 mod 7</td><td className="p-2 border">2</td><td className="p-2 border">23 = 7 × 3 + 2</td></tr>
        <tr><td className="p-2 border">100 mod 10</td><td className="p-2 border">0</td><td className="p-2 border">100 = 10 × 10 + 0</td></tr>
        <tr><td className="p-2 border">-7 mod 5</td><td className="p-2 border">3</td><td className="p-2 border">-7 = 5 × (-2) + 3</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Clock Analogy</h2>
    <p className="leading-relaxed">
      Think of a 12-hour clock. Hours "wrap around" after 12. If it's 10 o'clock and
      you add 5 hours, you get 3 o'clock, not 15 o'clock.
    </p>
    <p className="leading-relaxed mt-2 font-mono text-gray-900">
      (10 + 5) mod 12 = 15 mod 12 = 3
    </p>
    <p className="leading-relaxed">
      This is modular arithmetic with modulus 12!
    </p>

    <h2 className="text-2xl font-bold mt-8">Properties of Modular Arithmetic</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Operation</th>
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Addition</td><td className="p-2 border font-mono text-gray-900">(a + b) mod n = ((a mod n) + (b mod n)) mod n</td><td className="p-2 border">(17 + 23) mod 5 = (2 + 3) mod 5 = 0</td></tr>
        <tr><td className="p-2 border">Subtraction</td><td className="p-2 border font-mono text-gray-900">(a - b) mod n = ((a mod n) - (b mod n) + n) mod n</td><td className="p-2 border">(17 - 23) mod 5 = (2 - 3 + 5) mod 5 = 4</td></tr>
        <tr><td className="p-2 border">Multiplication</td><td className="p-2 border font-mono text-gray-900">(a × b) mod n = ((a mod n) × (b mod n)) mod n</td><td className="p-2 border">(17 × 23) mod 5 = (2 × 3) mod 5 = 1</td></tr>
        <tr><td className="p-2 border">Exponentiation</td><td className="p-2 border font-mono text-gray-900">a^b mod n computed using modular exponentiation</td><td className="p-2 border">Crucial for cryptography</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Congruence</h2>
    <p className="leading-relaxed">
      Two integers a and b are congruent modulo n if they have the same remainder when divided by n.
    </p>
    <p className="leading-relaxed mt-2 font-mono text-gray-900">
      a ≡ b (mod n) ⟺ n | (a - b) (n divides a - b)
    </p>

    <h3 className="text-xl font-semibold mt-4">Examples</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Congruence</th>
          <th className="p-2 border">Verification</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">17 ≡ 2 (mod 5)</td><td className="p-2 border">17 - 2 = 15, and 5 | 15</td></tr>
        <tr><td className="p-2 border">23 ≡ 2 (mod 7)</td><td className="p-2 border">23 - 2 = 21, and 7 | 21</td></tr>
        <tr><td className="p-2 border">17 ≡ 23 (mod 6)</td><td className="p-2 border">23 - 17 = 6, and 6 | 6</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Modular Multiplicative Inverse</h2>
    <p className="leading-relaxed">
      The modular inverse of a modulo n is a number x such that:
    </p>
    <p className="leading-relaxed mt-2 font-mono text-lg text-center text-gray-900">
      a × x ≡ 1 (mod n)
    </p>
    <p className="leading-relaxed mt-2">
      The inverse exists only if GCD(a, n) = 1 (a and n are coprime).
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: Find inverse of 3 mod 7</h3>
    <p className="leading-relaxed mt-2">
      We need x such that 3x ≡ 1 (mod 7)
    </p>
    <p className="leading-relaxed">
      Testing: 3 × 1 = 3, 3 × 2 = 6, 3 × 3 = 9 ≡ 2, 3 × 4 = 12 ≡ 5, 3 × 5 = 15 ≡ 1 ✓
    </p>
    <p className="leading-relaxed mt-2">
      <strong>The inverse of 3 mod 7 is 5</strong>
    </p>

    <h2 className="text-2xl font-bold mt-8">Fast Modular Exponentiation</h2>
    <p className="leading-relaxed">
      Computing a^b mod n directly is impractical for large b. We use the binary exponentiation method.
    </p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900 overflow-x-auto">
{`function powerMod(base, exp, mod):
    result = 1
    base = base % mod
    while exp > 0:
        if exp % 2 == 1:  // exp is odd
            result = (result * base) % mod
        exp = exp // 2   // divide exp by 2
        base = (base * base) % mod
    return result

// Time Complexity: O(log exp)`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Applications in Computer Science</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">How Modular Arithmetic is Used</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">RSA Encryption</td><td className="p-2 border">Uses modular exponentiation with large primes</td></tr>
        <tr><td className="p-2 border">Hash Functions</td><td className="p-2 border">Modulo operation distributes values into buckets</td></tr>
        <tr><td className="p-2 border">Checksums</td><td className="p-2 border">ISBN, credit card numbers use modular arithmetic</td></tr>
        <tr><td className="p-2 border">Random Number Generators</td><td className="p-2 border">Linear congruential generators</td></tr>
        <tr><td className="p-2 border">Circular Buffers</td><td className="p-2 border">Array index wrapping</td></tr>
        <tr><td className="p-2 border">Calendar Calculations</td><td className="p-2 border">Days of the week (mod 7)</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Calculate 347 mod 23</li>
      <li>Find (25 × 37) mod 11</li>
      <li>Compute 2^10 mod 13 using binary exponentiation</li>
      <li>Find the modular inverse of 5 mod 11</li>
      <li>If today is Wednesday, what day will it be after 100 days?</li>
    </ol>

  </div>
);

export default ModularArithmetic;
