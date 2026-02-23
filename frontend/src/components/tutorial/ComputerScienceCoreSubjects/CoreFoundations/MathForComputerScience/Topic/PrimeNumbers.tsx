import React from 'react';

const PrimeNumbers: React.FC = () => (
  <div className="mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Prime Numbers and Primality Testing</h1>

    <p className="text-lg leading-relaxed">
      A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
      Prime numbers are fundamental in computer science, especially in cryptography where they form the
      basis of RSA encryption and other security protocols.
    </p>

    <h2 className="text-2xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      A number p {">"} 1 is prime if its only divisors are 1 and p.
    </p>
    <p className="leading-relaxed mt-2">
      <strong>First 20 primes:</strong> 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71
    </p>
    <p className="leading-relaxed mt-2">
      <strong>Note:</strong> 2 is the only even prime number. All other even numbers are divisible by 2.
    </p>

    <h2 className="text-2xl font-bold mt-8">Properties of Prime Numbers</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Fundamental Theorem of Arithmetic</td><td className="p-2 border">Every integer greater than 1 can be uniquely expressed as a product of primes</td></tr>
        <tr><td className="p-2 border">Infinitude</td><td className="p-2 border">There are infinitely many prime numbers (proved by Euclid)</td></tr>
        <tr><td className="p-2 border">Distribution</td><td className="p-2 border">Primes become less frequent as numbers get larger, but never stop appearing</td></tr>
        <tr><td className="p-2 border">Prime Gap</td><td className="p-2 border">The difference between consecutive primes can be arbitrarily large</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Basic Primality Testing</h2>
    <p className="leading-relaxed">
      The simplest way to check if n is prime is to test divisibility by all numbers from 2 to √n.
    </p>

    <h3 className="text-xl font-semibold mt-4">Algorithm (Trial Division)</h3>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900 overflow-x-auto">
{`function isPrime(n):
    if n <= 1:
        return false
    if n <= 3:
        return true
    if n % 2 == 0 or n % 3 == 0:
        return false
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return false
        i = i + 6
    return true`}
    </pre>
    <p className="mt-2"><strong>Time Complexity:</strong> O(√n)</p>

    <h2 className="text-2xl font-bold mt-8">Sieve of Eratosthenes</h2>
    <p className="leading-relaxed">
      An efficient algorithm to find all primes up to a given limit n. It works by iteratively
      marking the multiples of each prime starting from 2.
    </p>

    <h3 className="text-xl font-semibold mt-4">Algorithm Steps</h3>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Create a boolean array of size n+1, initialize all as true</li>
      <li>Mark 0 and 1 as not prime (false)</li>
      <li>For each number i from 2 to √n: If i is still marked as prime, mark all multiples of i as not prime</li>
      <li>All remaining true values are prime numbers</li>
    </ol>
    <p className="mt-2"><strong>Time Complexity:</strong> O(n log log n)</p>

    <h3 className="text-xl font-semibold mt-4">Example: Find primes up to 30</h3>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Initial</td><td className="p-2 border">2 3 4 5 6 7 8 9 10 11 12 13 14 15...30</td></tr>
        <tr><td className="p-2 border">After 2</td><td className="p-2 border">2 3 X 5 X 7 X 9 X 11 X 13 X 15...</td></tr>
        <tr><td className="p-2 border">After 3</td><td className="p-2 border">2 3 X 5 X 7 X X X 11 X 13 X X...</td></tr>
        <tr><td className="p-2 border">Result</td><td className="p-2 border">Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Miller-Rabin Primality Test</h2>
    <p className="leading-relaxed">
      A probabilistic primality test that's much faster for large numbers. It's commonly used
      in cryptographic applications.
    </p>

    <h3 className="text-xl font-semibold mt-4">Key Concepts</h3>
    <ul className="list-disc ml-6 mt-2 space-y-1">
      <li>Based on Fermat's Little Theorem</li>
      <li>Can definitively prove a number is composite</li>
      <li>Probabilistically determines if a number is "probably prime"</li>
      <li>Error probability decreases with more iterations</li>
    </ul>
    <p className="mt-2"><strong>Time Complexity:</strong> O(k log³ n) where k is number of iterations</p>

    <h2 className="text-2xl font-bold mt-8">Applications in Computer Science</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">How Primes are Used</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">RSA Encryption</td><td className="p-2 border">Uses large prime numbers (hundreds of digits)</td></tr>
        <tr><td className="p-2 border">Hash Tables</td><td className="p-2 border">Prime table sizes reduce collisions</td></tr>
        <tr><td className="p-2 border">Random Number Generators</td><td className="p-2 border">Prime moduli in linear congruential generators</td></tr>
        <tr><td className="p-2 border">Error Detection</td><td className="p-2 border">Cyclic redundancy checks (CRC)</td></tr>
        <tr><td className="p-2 border">Cryptographic Protocols</td><td className="p-2 border">Diffie-Hellman key exchange</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Check if 97 is prime using trial division</li>
      <li>Find all primes between 1 and 50 using Sieve of Eratosthenes</li>
      <li>Find the prime factorization of 84</li>
      <li>What is the 25th prime number?</li>
      <li>Prove that there is no largest prime number</li>
    </ol>

  </div>
);

export default PrimeNumbers;
