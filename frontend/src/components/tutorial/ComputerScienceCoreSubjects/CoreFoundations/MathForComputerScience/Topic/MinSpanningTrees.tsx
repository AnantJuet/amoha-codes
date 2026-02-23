import React from 'react';

const MinSpanningTrees: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Minimum Spanning Trees</h1>

    <p className="text-lg leading-relaxed">
      A minimum spanning tree (MST) connects all vertices with minimum total edge weight.
      Two classic algorithms: Kruskal's and Prim's.
    </p>

    <h2 className="text-2xl font-bold mt-8">Kruskal's Algorithm</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Approach</strong></td>
          <td className="p-2 border">Sort edges by weight, add edges that don't create cycles</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Time Complexity</strong></td>
          <td className="p-2 border">O(E log E)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Data Structure</strong></td>
          <td className="p-2 border">Union-Find (Disjoint Set Union)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Prim's Algorithm</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Approach</strong></td>
          <td className="p-2 border">Grow tree from starting vertex, always adding minimum weight edge</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Time Complexity</strong></td>
          <td className="p-2 border">O(E log V)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Data Structure</strong></td>
          <td className="p-2 border">Priority Queue (Min-Heap)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Algorithm Comparison</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Kruskal's</th>
          <th className="p-2 border">Prim's</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Strategy</td>
          <td className="p-2 border">Edge-based (global)</td>
          <td className="p-2 border">Vertex-based (local)</td>
        </tr>
        <tr>
          <td className="p-2 border">Best for</td>
          <td className="p-2 border">Sparse graphs</td>
          <td className="p-2 border">Dense graphs</td>
        </tr>
        <tr>
          <td className="p-2 border">Time</td>
          <td className="p-2 border">O(E log E)</td>
          <td className="p-2 border">O(E log V)</td>
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
          <td className="p-2 border">Apply Kruskal's algorithm to find MST of a given weighted graph</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Apply Prim's algorithm starting from vertex A</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default MinSpanningTrees;
