import React from 'react';

const RecurrenceRelations: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Recurrence Relations</h1>

    <p className="text-lg leading-relaxed">
      A recurrence relation defines a sequence where each term is expressed as a function of
      preceding terms. They're fundamental in algorithm analysis (like analyzing recursive algorithms)
      and in expressing mathematical sequences.
    </p>

    <h2 className="text-2xl font-bold mt-8">Famous Examples</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Recurrence</th>
          <th className="p-2 border">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Fibonacci Sequence</strong></td>
          <td className="p-2 border font-mono text-gray-900">F(n) = F(n-1) + F(n-2), F(0) = 0, F(1) = 1</td>
          <td className="p-2 border">Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Factorial</strong></td>
          <td className="p-2 border font-mono text-gray-900">n! = n x (n-1)!, 0! = 1</td>
          <td className="p-2 border">-</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Tower of Hanoi</strong></td>
          <td className="p-2 border font-mono text-gray-900">T(n) = 2T(n-1) + 1, T(1) = 1</td>
          <td className="p-2 border">Solution: T(n) = 2^n - 1 moves</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Solving Linear Recurrences</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <h3 className="font-bold">Characteristic Equation Method:</h3>
      <p className="mt-2">For a(n) = c1*a(n-1) + c2*a(n-2):</p>
      <ol className="list-decimal ml-6 mt-2">
        <li>Write characteristic equation: x^2 = c1*x + c2</li>
        <li>Find roots r1, r2</li>
        <li>General solution: a(n) = A*r1^n + B*r2^n</li>
        <li>Use initial conditions to find A and B</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-8">Algorithm Analysis Recurrences</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Algorithm</th>
          <th className="p-2 border">Recurrence</th>
          <th className="p-2 border">Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Binary Search</strong></td>
          <td className="p-2 border font-mono text-gray-900">T(n) = T(n/2) + O(1)</td>
          <td className="p-2 border">T(n) = O(log n)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Merge Sort</strong></td>
          <td className="p-2 border font-mono text-gray-900">T(n) = 2T(n/2) + O(n)</td>
          <td className="p-2 border">T(n) = O(n log n)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Master Theorem (Preview)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p>For recurrences of the form T(n) = aT(n/b) + f(n):</p>
      <p className="mt-2">The solution depends on comparing f(n) with n^(log_b(a))</p>
      <p className="text-sm mt-1">(Covered in detail in Algorithms & Complexity section)</p>
    </div>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">1</td>
          <td className="p-2 border">Solve: a(n) = 3a(n-1) - 2a(n-2), a(0) = 1, a(1) = 3</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Find a closed form for T(n) = T(n-1) + n, T(1) = 1</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">Calculate F(10) where F is Fibonacci</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">Solve the Tower of Hanoi recurrence explicitly</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RecurrenceRelations;
