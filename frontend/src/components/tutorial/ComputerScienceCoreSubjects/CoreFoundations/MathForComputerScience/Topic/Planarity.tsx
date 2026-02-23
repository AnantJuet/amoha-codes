import React from 'react';

const Planarity: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Planarity</h1>

    <p className="text-lg leading-relaxed">
      A planar graph can be drawn on a plane without edge crossings. Understanding planarity
      is important for circuit design, map drawing, and graph algorithms.
    </p>

    <h2 className="text-2xl font-bold mt-8">Euler's Formula</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Formula</strong></td>
          <td className="p-2 border">V - E + F = 2</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>V</strong></td>
          <td className="p-2 border">Number of vertices</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>E</strong></td>
          <td className="p-2 border">Number of edges</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>F</strong></td>
          <td className="p-2 border">Number of faces (including outer/infinite face)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Kuratowski's Theorem</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Statement</strong></td>
          <td className="p-2 border">A graph is planar if and only if it contains no subdivision of K5 or K3,3</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>K5</strong></td>
          <td className="p-2 border">Complete graph on 5 vertices</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>K3,3</strong></td>
          <td className="p-2 border">Complete bipartite graph (3 vertices each partition)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Subdivision</strong></td>
          <td className="p-2 border">Adding vertices along edges</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Edge Bound</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>General Bound</strong></td>
          <td className="p-2 border">For a planar graph: E ≤ 3V - 6 (for V ≥ 3)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Bipartite Bound</strong></td>
          <td className="p-2 border">For a planar bipartite graph: E ≤ 2V - 4</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Example: K5</strong></td>
          <td className="p-2 border">K5 has 10 edges but 3(5)-6 = 9, so K5 is not planar</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Example: K3,3</strong></td>
          <td className="p-2 border">K3,3 has 9 edges but 2(6)-4 = 8, so K3,3 is not planar</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Planar Graph Properties</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Minimum degree vertex</td>
          <td className="p-2 border">Every planar graph has a vertex of degree at most 5</td>
        </tr>
        <tr>
          <td className="p-2 border">Chromatic number</td>
          <td className="p-2 border">At most 4 (Four Color Theorem)</td>
        </tr>
        <tr>
          <td className="p-2 border">Face degree sum</td>
          <td className="p-2 border">Sum of face degrees = 2E</td>
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
          <td className="p-2 border">Verify Euler's formula for a cube graph</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Is K3,3 planar? Prove using edge bound.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Planarity;
