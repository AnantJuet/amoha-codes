import React from 'react';

const EuclideanAlgorithm: React.FC = () => (
  <div className="mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Euclidean Algorithm</h1>

    <p className="text-lg leading-relaxed">
      The Euclidean Algorithm is one of the oldest algorithms still in practical use today,
      dating back over 2000 years to ancient Greece. It provides an efficient method for
      computing the Greatest Common Divisor (GCD) of two integers.
    </p>

    <h2 className="text-2xl font-bold mt-8">The Algorithm</h2>
    <p className="leading-relaxed">
      <strong>Key Insight:</strong>
    </p>
    <p className="leading-relaxed mt-2 font-mono text-lg text-gray-900">
      GCD(a, b) = GCD(b, a mod b)
    </p>
    <p className="leading-relaxed mt-2">
      This process repeats until the remainder becomes 0. The last non-zero remainder is the GCD.
    </p>

    <h3 className="text-xl font-semibold mt-4">Algorithm Steps</h3>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>If b = 0, return a (a is the GCD)</li>
      <li>Otherwise, compute a mod b</li>
      <li>Replace a with b, and b with (a mod b)</li>
      <li>Repeat from step 1</li>
    </ol>

    <h2 className="text-2xl font-bold mt-8">Worked Example</h2>
    <h3 className="text-xl font-semibold mt-4">Find GCD(252, 105)</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Calculation</th>
          <th className="p-2 border">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">252 = 105 × 2 + 42</td><td className="p-2 border">GCD(252, 105) = GCD(105, 42)</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">105 = 42 × 2 + 21</td><td className="p-2 border">GCD(105, 42) = GCD(42, 21)</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">42 = 21 × 2 + 0</td><td className="p-2 border">GCD(42, 21) = GCD(21, 0)</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border">b = 0</td><td className="p-2 border">GCD = 21</td></tr>
      </tbody>
    </table>
    <p className="mt-2"><strong>Therefore, GCD(252, 105) = 21</strong></p>

    <h3 className="text-xl font-semibold mt-4">Verification</h3>
    <p className="leading-relaxed">252 = 21 × 12 ✓ and 105 = 21 × 5 ✓</p>
    <p className="leading-relaxed">Both 252 and 105 are divisible by 21, and 21 is the largest such number.</p>

    <h2 className="text-2xl font-bold mt-8">Why Does It Work?</h2>
    <p className="leading-relaxed">
      If d divides both a and b, then d also divides (a - kb) for any integer k.
    </p>
    <p className="leading-relaxed mt-2">
      Since a mod b = a - (a÷b)×b, any common divisor of a and b is also a common
      divisor of b and (a mod b).
    </p>
    <p className="leading-relaxed mt-2">
      Therefore, GCD(a, b) = GCD(b, a mod b).
    </p>

    <h2 className="text-2xl font-bold mt-8">Implementation</h2>

    <h3 className="text-xl font-semibold mt-4">Iterative Version</h3>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900 overflow-x-auto">
{`function gcd(a, b):
    while b != 0:
        temp = b
        b = a % b
        a = temp
    return a`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Recursive Version</h3>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900 overflow-x-auto">
{`function gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Time Complexity</h2>
    <p className="leading-relaxed">
      <strong>Time Complexity: O(log(min(a, b)))</strong>
    </p>
    <p className="leading-relaxed mt-2">
      The algorithm is very efficient! The number of steps is at most proportional
      to the number of digits in the smaller number.
    </p>
    <p className="leading-relaxed mt-2">
      <strong>Lamé's Theorem:</strong> The number of steps is at most 5 times the number
      of digits in the smaller number.
    </p>

    <h2 className="text-2xl font-bold mt-8">GCD of Multiple Numbers</h2>
    <p className="leading-relaxed">
      To find GCD of multiple numbers, apply the algorithm sequentially:
    </p>
    <p className="leading-relaxed mt-2 font-mono text-gray-900">
      GCD(a, b, c) = GCD(GCD(a, b), c)
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: GCD(48, 36, 60)</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Calculation</th>
          <th className="p-2 border">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">GCD(48, 36): 48 = 36 × 1 + 12, 36 = 12 × 3 + 0</td><td className="p-2 border">GCD(48, 36) = 12</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">GCD(12, 60): 60 = 12 × 5 + 0</td><td className="p-2 border">GCD(12, 60) = 12</td></tr>
      </tbody>
    </table>
    <p className="mt-2"><strong>Therefore, GCD(48, 36, 60) = 12</strong></p>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Simplifying Fractions</td><td className="p-2 border">Divide by GCD of numerator and denominator</td></tr>
        <tr><td className="p-2 border">Cryptography</td><td className="p-2 border">RSA key generation, modular inverse computation</td></tr>
        <tr><td className="p-2 border">Computer Graphics</td><td className="p-2 border">Calculating pixel ratios</td></tr>
        <tr><td className="p-2 border">Music Theory</td><td className="p-2 border">Finding common time signatures</td></tr>
        <tr><td className="p-2 border">Scheduling</td><td className="p-2 border">Finding when events coincide</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Find GCD(1071, 462) using the Euclidean algorithm</li>
      <li>Find GCD(144, 89) - show all steps</li>
      <li>Find GCD(48, 72, 120)</li>
      <li>Simplify 252/105 using GCD</li>
      <li>How many steps does GCD(F_n, F_n-1) take? (Fibonacci numbers)</li>
    </ol>

  </div>
);

export default EuclideanAlgorithm;
