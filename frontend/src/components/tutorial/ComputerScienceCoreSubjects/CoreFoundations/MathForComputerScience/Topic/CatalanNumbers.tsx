import React from 'react';

const CatalanNumbers: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Catalan Numbers</h1>

    <p className="text-lg leading-relaxed">
      Catalan numbers are a sequence of natural numbers that appear in various counting problems.
      They count structures like balanced parentheses, binary trees, and many other combinatorial objects.
    </p>

    <h2 className="text-2xl font-bold mt-8">Formula</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-mono text-center text-lg text-gray-900">C(n) = C(2n, n) / (n+1) = (2n)! / ((n+1)! x n!)</p>
            <p className="mt-4">First few values: 1, 1, 2, 5, 14, 42, 132, 429, 1430, ...</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Recurrence</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-mono text-gray-900">C(0) = 1</p>
      <p className="font-mono text-gray-900">C(n+1) = Sum of C(i) x C(n-i) for i = 0 to n</p>
      <p className="font-mono mt-2 text-gray-900">Or: C(n+1) = (2(2n+1)/(n+2)) x C(n)</p>
    </div>

    <h2 className="text-2xl font-bold mt-8">What Catalan Numbers Count</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Structure</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Balanced Parentheses</strong></td>
          <td className="p-2 border">Number of ways to arrange n pairs of parentheses</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Binary Trees</strong></td>
          <td className="p-2 border">Number of full binary trees with n+1 leaves</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Paths</strong></td>
          <td className="p-2 border">Monotonic paths from (0,0) to (n,n) that don't cross diagonal</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Triangulations</strong></td>
          <td className="p-2 border">Ways to triangulate a convex polygon with n+2 sides</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Stack-sortable permutations</strong></td>
          <td className="p-2 border">Permutations sortable using a stack</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Example: Balanced Parentheses</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">For n = 3 (3 pairs), C(3) = 5 arrangements:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <div className="font-mono space-y-1 text-gray-900">
              <p>((()))</p>
              <p>(()())</p>
              <p>(())()</p>
              <p>()(())</p>
              <p>()()()</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications in CS</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Expression Parsing</strong></td>
          <td className="p-2 border">Valid parenthesization of expressions</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Binary Search Trees</strong></td>
          <td className="p-2 border">Number of distinct BSTs with n nodes</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Matrix Chain Multiplication</strong></td>
          <td className="p-2 border">Ways to parenthesize matrices</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Dyck Paths</strong></td>
          <td className="p-2 border">Ballot problems and random walks</td>
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
          <td className="p-2 border">Calculate C(4) and list all balanced parentheses for n=4</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">How many distinct BSTs can be formed with nodes 1, 2, 3, 4?</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">How many ways to triangulate a hexagon?</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CatalanNumbers;
