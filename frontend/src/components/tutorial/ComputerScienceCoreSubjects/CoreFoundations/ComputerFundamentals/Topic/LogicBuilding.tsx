import React from 'react';

const LogicBuildingTutorial: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Logic Building Problems ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Logic Building Problems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 20 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Logic building involves creating clear, step-by-step methods to solve problems using simple rules and principles.
      It is the core of programming, enabling developers to think critically, reason, and arrive at efficient solutions.
    </p>

    <h2 className="text-3xl font-bold mt-6">Why Logic Building Matters</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
        <h3 className="font-semibold text-blue-800">Problem Solving</h3>
        <p className="text-sm mt-1">Break complex problems into smaller, manageable steps that can be solved systematically.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
        <h3 className="font-semibold text-green-800">Interview Preparation</h3>
        <p className="text-sm mt-1">Technical interviews heavily test logical thinking and problem-solving abilities.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
        <h3 className="font-semibold text-purple-800">Code Quality</h3>
        <p className="text-sm mt-1">Strong logic leads to cleaner, more efficient, and maintainable code.</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
        <h3 className="font-semibold text-orange-800">Debugging Skills</h3>
        <p className="text-sm mt-1">Logical thinking helps identify and fix bugs more effectively.</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-6">Tips for Improving Logic</h2>
    <ul className="list-disc list-inside space-y-2 text-lg">
      <li><strong>Understand the Problem:</strong> Carefully read and comprehend the problem statement. Identify inputs, outputs, and constraints.</li>
      <li><strong>Generate Examples:</strong> Create sample input and output cases to understand scenarios and edge cases.</li>
      <li><strong>Draw Observations:</strong> Identify patterns and relationships in the examples. Look for mathematical formulas or recurring structures.</li>
      <li><strong>Start Basic, Then Optimize:</strong> Begin with a simple (brute force) solution and improve efficiency gradually.</li>
      <li><strong>Dry Run Your Code:</strong> Trace through your solution with sample inputs before coding.</li>
      <li><strong>Practice Regularly:</strong> Consistent practice is key to developing strong logic building skills.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Problem-Solving Framework</h2>
    <pre className="bg-gray-100 text-black p-4 rounded-md font-mono mt-3 overflow-x-auto">
{`Step 1: Understand the Problem
├── Read the problem statement carefully
├── Identify inputs and expected outputs
├── Note constraints (time, space, value ranges)
└── Ask clarifying questions if needed

Step 2: Plan Your Approach
├── Think of multiple approaches
├── Consider time and space complexity
├── Choose the most suitable approach
└── Write pseudocode or draw diagrams

Step 3: Implement the Solution
├── Write clean, readable code
├── Handle edge cases
├── Use meaningful variable names
└── Add comments for complex logic

Step 4: Test and Debug
├── Test with sample inputs
├── Test edge cases (empty, single element, large)
├── Debug if results don't match
└── Optimize if needed`}
    </pre>

    {/* ================= Concepts ================= */}
    <h2 className="text-3xl font-bold mt-6">Concepts & Problems</h2>

    {/* Maths for Computer Science */}
    <h3 className="text-2xl font-semibold mt-4">Maths for Computer Science</h3>

    <h4 className="text-xl font-semibold mt-3 text-blue-700">Basic Problems</h4>
    <ul className="list-disc list-inside space-y-1 text-lg ml-4">
      <li>Even/Odd Check - Check if a number is divisible by 2</li>
      <li>Multiplication Table - Print table for a given number</li>
      <li>Sum of Natural Numbers - 1 + 2 + 3 + ... + n</li>
      <li>Sum of Squares - 1² + 2² + 3² + ... + n²</li>
      <li>Swap Two Numbers - Exchange values without extra variable</li>
      <li>Closest Number - Find closest to a target</li>
      <li>Dice Problem - Probability calculations</li>
      <li>Nth Term of AP - Using formula: a + (n-1)d</li>
    </ul>

    <h4 className="text-xl font-semibold mt-3 text-green-700">Easy Problems</h4>
    <ul className="list-disc list-inside space-y-1 text-lg ml-4">
      <li>Sum of Digits - Add all digits of a number</li>
      <li>Reverse Digits - Reverse a number (123 → 321)</li>
      <li>Prime Testing - Check if number has only 2 factors</li>
      <li>Check Power - Is number a power of 2, 3, etc.</li>
      <li>Distance Between Two Points - Using distance formula</li>
      <li>Valid Triangle - Sum of any two sides {'>'} third side</li>
      <li>Overlapping Rectangles - Check if two rectangles overlap</li>
      <li>Factorial - n! = n × (n-1) × ... × 1</li>
      <li>GCD/HCF - Greatest Common Divisor (Euclidean algorithm)</li>
      <li>LCM - Least Common Multiple = (a × b) / GCD(a, b)</li>
      <li>Perfect Number - Sum of divisors equals the number</li>
      <li>Armstrong Number - Sum of digits raised to power equals number</li>
      <li>Palindrome Number - Same forwards and backwards</li>
      <li>Nth Fibonacci Number - 0, 1, 1, 2, 3, 5, 8, ...</li>
      <li>Decimal to Binary - Convert base 10 to base 2</li>
    </ul>

    <h4 className="text-xl font-semibold mt-3 text-purple-700">Medium Problems</h4>
    <ul className="list-disc list-inside space-y-1 text-lg ml-4">
      <li>Square Root - Using binary search or Newton's method</li>
      <li>3 Divisors - Numbers with exactly 3 divisors (perfect squares of primes)</li>
      <li>Divisibility Rules - Check divisibility by 4, 11, 13, etc.</li>
      <li>nPr and nCr - Permutations and Combinations</li>
      <li>Pascal's Triangle - Binomial coefficients pattern</li>
      <li>All Factors - Find all divisors of a number</li>
      <li>Prime Factorization - Break into prime factors</li>
      <li>Modular Exponentiation - (a^b) % m efficiently</li>
      <li>Catalan Numbers - Count valid parentheses, BSTs, etc.</li>
      <li>Power Set - All subsets of a set</li>
      <li>Next Permutation - Lexicographically next arrangement</li>
    </ul>

    <h4 className="text-xl font-semibold mt-3 text-red-700">Hard Problems</h4>
    <ul className="list-disc list-inside space-y-1 text-lg ml-4">
      <li>Sieve of Eratosthenes - Find all primes up to n efficiently</li>
      <li>Super Prime - Primes at prime positions</li>
      <li>Clock Angle Problem - Angle between hour and minute hands</li>
      <li>Tower of Hanoi - Move disks using recursion</li>
      <li>Rat and Poisoned - Logic puzzle</li>
      <li>8 Puzzle Problem - Sliding puzzle solver</li>
      <li>Euler's Totient Function - Count of coprimes</li>
      <li>Josephus Problem - Circular elimination</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Example: Fibonacci Number</h2>
    <pre className="bg-gray-100 text-black p-4 rounded-md font-mono mt-3 overflow-x-auto">
{`// Problem: Find the nth Fibonacci number
// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)

// Approach 1: Recursive (O(2^n) - inefficient)
function fibRecursive(n) {
    if (n <= 1) return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Approach 2: Iterative (O(n) - efficient)
function fibIterative(n) {
    if (n <= 1) return n;

    let prev2 = 0, prev1 = 1;
    for (let i = 2; i <= n; i++) {
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}

// Example: fibIterative(10) = 55`}
    </pre>

    <h2 className="text-3xl font-bold mt-6">Example: Prime Check</h2>
    <pre className="bg-gray-100 text-black p-4 rounded-md font-mono mt-3 overflow-x-auto">
{`// Problem: Check if a number is prime
// Prime: Only divisible by 1 and itself

function isPrime(n) {
    // Edge cases
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    // Check for factors up to √n
    // Only check numbers of form 6k±1
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// Examples:
// isPrime(17) = true
// isPrime(18) = false
// isPrime(97) = true`}
    </pre>

    <h2 className="text-3xl font-bold mt-6">Common Patterns to Master</h2>
    <table className="min-w-full border border-gray-300 mt-3">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Pattern</th>
          <th className="border border-gray-300 px-4 py-2">Example Problems</th>
          <th className="border border-gray-300 px-4 py-2">Key Technique</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Digit Manipulation</td>
          <td className="border border-gray-300 px-4 py-2">Reverse, Sum of Digits</td>
          <td className="border border-gray-300 px-4 py-2">n % 10, n / 10</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Number Theory</td>
          <td className="border border-gray-300 px-4 py-2">GCD, LCM, Primes</td>
          <td className="border border-gray-300 px-4 py-2">Euclidean Algorithm, Sieve</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Recursion</td>
          <td className="border border-gray-300 px-4 py-2">Factorial, Fibonacci, Hanoi</td>
          <td className="border border-gray-300 px-4 py-2">Base case + Recursive case</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Bit Manipulation</td>
          <td className="border border-gray-300 px-4 py-2">Power of 2, Count bits</td>
          <td className="border border-gray-300 px-4 py-2">AND, OR, XOR, Shifts</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Mathematical Series</td>
          <td className="border border-gray-300 px-4 py-2">AP, GP, Squares</td>
          <td className="border border-gray-300 px-4 py-2">Formulas: n(n+1)/2</td>
        </tr>
      </tbody>
    </table>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Pro Tip:</strong> Don't just solve problems - understand why your solution works.
        Analyze time and space complexity, and try to think of alternative approaches. This deeper
        understanding will help you tackle new problems more effectively.
      </p>
    </div>

  </div>
);

export default LogicBuildingTutorial;
