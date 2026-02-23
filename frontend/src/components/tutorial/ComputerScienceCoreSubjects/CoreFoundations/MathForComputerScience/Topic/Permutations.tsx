import React from 'react';

const Permutations: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Permutations</h1>

    <p className="text-lg leading-relaxed">
      A permutation is an arrangement of objects in a specific order. Unlike combinations,
      the order matters in permutations. Understanding permutations is crucial for analyzing
      algorithms and solving counting problems.
    </p>

    <h2 className="text-2xl font-bold mt-8">Permutation Formula</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">The number of ways to arrange r objects from n distinct objects:</p>
            <p className="font-mono text-xl text-center mt-2 text-gray-900">P(n, r) = n! / (n-r)!</p>
            <p className="mt-2">When r = n: P(n, n) = n! (arranging all objects)</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Factorial</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-mono text-gray-900">n! = n x (n-1) x (n-2) x ... x 2 x 1</p>
      <p className="mt-2">0! = 1 (by definition)</p>
      <div className="mt-2">
        <p>1! = 1</p>
        <p>2! = 2</p>
        <p>3! = 6</p>
        <p>4! = 24</p>
        <p>5! = 120</p>
        <p>6! = 720</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-8">Examples</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example</th>
          <th className="p-2 border">Problem</th>
          <th className="p-2 border">Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Arranging Books</strong></td>
          <td className="p-2 border">In how many ways can 5 different books be arranged on a shelf?</td>
          <td className="p-2 border font-mono text-gray-900">P(5, 5) = 5! = 120 ways</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Selecting Officers</strong></td>
          <td className="p-2 border">From 10 people, select a president, VP, and secretary (different people).</td>
          <td className="p-2 border font-mono text-gray-900">P(10, 3) = 10!/7! = 10 x 9 x 8 = 720 ways</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Permutations with Repetition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">When arranging n objects where some are identical:</p>
            <p className="font-mono text-center mt-2 text-gray-900">n! / (n1! x n2! x ... x nk!)</p>
            <p className="mt-2">where n1, n2, ..., nk are counts of each type of identical object.</p>
          </td>
        </tr>
      </tbody>
    </table>

    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example: Arranging "MISSISSIPPI"</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p>Total letters: 11 (M=1, I=4, S=4, P=2)</p>
            <p className="font-mono mt-2 text-gray-900">11! / (1! x 4! x 4! x 2!) = 34,650 arrangements</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Circular Permutations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold">Arranging n objects in a circle:</p>
      <p className="font-mono text-center mt-2 text-gray-900">(n-1)!</p>
      <p className="mt-2">We divide by n because rotations are considered the same.</p>
    </div>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Cryptography</strong></td>
          <td className="p-2 border">Counting possible key arrangements</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Sorting Algorithms</strong></td>
          <td className="p-2 border">n! possible orderings to search through</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Scheduling</strong></td>
          <td className="p-2 border">Task ordering problems</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>DNA Sequences</strong></td>
          <td className="p-2 border">Possible arrangements of nucleotides</td>
        </tr>
      </tbody>
    </table>

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
          <td className="p-2 border">How many ways to arrange 7 people in a row?</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">How many 4-letter "words" from the letters A, B, C, D, E (no repetition)?</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">How many arrangements of "BANANA"?</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">How many ways to seat 8 people around a round table?</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Permutations;
