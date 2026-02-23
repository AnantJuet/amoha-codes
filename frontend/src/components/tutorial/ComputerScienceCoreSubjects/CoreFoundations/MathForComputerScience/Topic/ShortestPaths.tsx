import React from 'react';

const ShortestPaths: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Shortest Paths</h1>

    <p className="text-lg leading-relaxed">
      Finding the shortest path between vertices is one of the most important graph problems.
      Different algorithms apply depending on whether the graph is weighted and whether we need
      single-source or all-pairs shortest paths.
    </p>

    <h2 className="text-2xl font-bold mt-8">Dijkstra's Algorithm</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Purpose</strong></td>
          <td className="p-2 border">Single-source shortest paths with non-negative weights</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Time Complexity</strong></td>
          <td className="p-2 border">O((V + E) log V) with priority queue</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Requirement</strong></td>
          <td className="p-2 border">All edge weights must be greater than or equal to 0</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Bellman-Ford Algorithm</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Purpose</strong></td>
          <td className="p-2 border">Handles negative weights, detects negative cycles</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Time Complexity</strong></td>
          <td className="p-2 border">O(V x E)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Floyd-Warshall Algorithm</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Purpose</strong></td>
          <td className="p-2 border">All-pairs shortest paths using dynamic programming</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Time Complexity</strong></td>
          <td className="p-2 border">O(V^3)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Algorithm Comparison</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Algorithm</th>
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Negative Weights</th>
          <th className="p-2 border">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Dijkstra</td>
          <td className="p-2 border">Single-source</td>
          <td className="p-2 border">No</td>
          <td className="p-2 border">O((V+E) log V)</td>
        </tr>
        <tr>
          <td className="p-2 border">Bellman-Ford</td>
          <td className="p-2 border">Single-source</td>
          <td className="p-2 border">Yes</td>
          <td className="p-2 border">O(V x E)</td>
        </tr>
        <tr>
          <td className="p-2 border">Floyd-Warshall</td>
          <td className="p-2 border">All-pairs</td>
          <td className="p-2 border">Yes</td>
          <td className="p-2 border">O(V^3)</td>
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
          <td className="p-2 border">Apply Dijkstra's algorithm to find shortest paths from vertex A</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Why doesn't Dijkstra work with negative edge weights?</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ShortestPaths;
