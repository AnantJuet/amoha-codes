import React from 'react';

const GreedyIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Greedy Algorithms
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Greedy algorithms make locally optimal choices at each step with the hope of finding a globally
      optimal solution. They don't reconsider past choices - they commit to the best option available now.
    </p>

    <h2 className="text-2xl font-bold mt-6">How Greedy Works</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li><strong>Choose:</strong> Make the best choice available at the moment</li>
      <li><strong>Commit:</strong> Add this choice to the solution</li>
      <li><strong>Check:</strong> Verify constraints are satisfied</li>
      <li><strong>Repeat:</strong> Continue until solution is complete</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">When Does Greedy Work?</h2>
    <p className="leading-relaxed">Greedy algorithms work when the problem has:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Greedy Choice Property</h4>
        <p className="text-sm mt-1">A globally optimal solution can be reached by making locally optimal choices</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Optimal Substructure</h4>
        <p className="text-sm mt-1">Optimal solution to problem contains optimal solutions to subproblems</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Classic Greedy Algorithms</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Fractional Knapsack:</strong> Take items by value/weight ratio</li>
      <li><strong>Activity Selection:</strong> Select non-overlapping activities</li>
      <li><strong>Huffman Coding:</strong> Build optimal prefix-free codes</li>
      <li><strong>Dijkstra's Algorithm:</strong> Find shortest paths</li>
      <li><strong>Prim's/Kruskal's:</strong> Find minimum spanning tree</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Example: Coin Change (When Greedy Works)</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p><strong>Coins:</strong> [25, 10, 5, 1] (US currency)</p>
      <p><strong>Amount:</strong> 41 cents</p>
      <p className="mt-2"><strong>Greedy approach:</strong></p>
      <ul className="list-disc list-inside text-sm mt-1">
        <li>Take 1 quarter (25) → 16 remaining</li>
        <li>Take 1 dime (10) → 6 remaining</li>
        <li>Take 1 nickel (5) → 1 remaining</li>
        <li>Take 1 penny (1) → 0 remaining</li>
      </ul>
      <p className="text-green-600 mt-2"><strong>Result:</strong> 4 coins (optimal!)</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">When Greedy Fails</h2>
    <div className="bg-red-50 p-4 rounded-lg">
      <p><strong>Coins:</strong> [1, 3, 4]</p>
      <p><strong>Amount:</strong> 6</p>
      <p className="mt-2"><strong>Greedy:</strong> 4 + 1 + 1 = 3 coins</p>
      <p className="text-red-600"><strong>Optimal:</strong> 3 + 3 = 2 coins</p>
      <p className="text-sm text-gray-600 mt-2">Here, greedy doesn't give optimal solution!</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Greedy vs Dynamic Programming</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Greedy</th>
            <th className="p-3 border">Dynamic Programming</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Approach</td>
            <td className="p-3 border">Top-down, one choice</td>
            <td className="p-3 border">Bottom-up, all choices</td>
          </tr>
          <tr>
            <td className="p-3 border">Guarantee</td>
            <td className="p-3 border">Not always optimal</td>
            <td className="p-3 border">Always optimal</td>
          </tr>
          <tr>
            <td className="p-3 border">Efficiency</td>
            <td className="p-3 border">Usually faster</td>
            <td className="p-3 border">Usually slower</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Important:</strong> Always verify that greedy gives optimal solution for your problem.
        If not, consider Dynamic Programming instead.
      </p>
    </div>
  </div>
);

export default GreedyIntro;
