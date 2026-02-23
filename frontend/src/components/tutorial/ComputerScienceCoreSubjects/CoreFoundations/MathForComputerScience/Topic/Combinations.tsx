import React from 'react';

const Combinations: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Combinations</h1>

    <p className="text-lg leading-relaxed">
      A combination is a selection of objects where order doesn't matter. Combinations answer
      the question "How many ways can we choose r items from n items?" and are fundamental
      in probability theory and algorithm analysis.
    </p>

    <h2 className="text-2xl font-bold mt-8">Combination Formula</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">The number of ways to choose r objects from n objects (order doesn't matter):</p>
            <p className="font-mono text-xl text-center mt-2 text-gray-900">C(n, r) = n! / (r! x (n-r)!)</p>
            <p className="mt-2">Also written as: nCr, or (n choose r)</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Permutation vs Combination</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Permutation</th>
          <th className="p-2 border">Combination</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Order</td>
          <td className="p-2 border">Matters</td>
          <td className="p-2 border">Doesn't matter</td>
        </tr>
        <tr>
          <td className="p-2 border">Formula</td>
          <td className="p-2 border font-mono text-gray-900">n!/(n-r)!</td>
          <td className="p-2 border font-mono text-gray-900">n!/(r!(n-r)!)</td>
        </tr>
        <tr>
          <td className="p-2 border">Example</td>
          <td className="p-2 border">Passwords</td>
          <td className="p-2 border">Lottery numbers</td>
        </tr>
      </tbody>
    </table>

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
          <td className="p-2 border"><strong>Committee Selection</strong></td>
          <td className="p-2 border">Choose 3 people from 10 for a committee.</td>
          <td className="p-2 border font-mono text-gray-900">C(10, 3) = 10!/(3! x 7!) = 120 ways</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Poker Hand</strong></td>
          <td className="p-2 border">How many 5-card hands from a 52-card deck?</td>
          <td className="p-2 border font-mono text-gray-900">C(52, 5) = 2,598,960 hands</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Properties of Combinations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 space-y-2 text-gray-900">
      <p className="font-mono text-gray-900">C(n, 0) = C(n, n) = 1</p>
      <p className="font-mono text-gray-900">C(n, 1) = C(n, n-1) = n</p>
      <p className="font-mono text-gray-900">C(n, r) = C(n, n-r) (symmetry)</p>
      <p className="font-mono text-gray-900">C(n, r) = C(n-1, r-1) + C(n-1, r) (Pascal's identity)</p>
      <p className="font-mono text-gray-900">Sum of C(n, k) for k=0 to n = 2^n</p>
    </div>

    <h2 className="text-2xl font-bold mt-8">Combinations with Repetition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">Choosing r items from n types when repetition is allowed:</p>
            <p className="font-mono text-center mt-2 text-gray-900">C(n + r - 1, r) = C(n + r - 1, n - 1)</p>
          </td>
        </tr>
      </tbody>
    </table>

    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example: Fruit Selection</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p>Select 5 fruits from 3 types (apples, oranges, bananas). Repetition allowed.</p>
            <p className="font-mono mt-2 text-gray-900">C(3 + 5 - 1, 5) = C(7, 5) = 21 ways</p>
          </td>
        </tr>
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
        <tr>
          <td className="p-2 border"><strong>Probability</strong></td>
          <td className="p-2 border">Calculating odds in games of chance</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Binomial Theorem</strong></td>
          <td className="p-2 border">Coefficients in (x+y)^n expansion</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Algorithm Analysis</strong></td>
          <td className="p-2 border">Counting subsets and selections</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Network Design</strong></td>
          <td className="p-2 border">Choosing links between nodes</td>
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
          <td className="p-2 border">How many ways to choose 4 cards from 52?</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Calculate C(20, 17) using symmetry property</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">How many subsets does a set with 6 elements have?</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">Choose 3 pizza toppings from 8 options (no repetition)</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Combinations;
