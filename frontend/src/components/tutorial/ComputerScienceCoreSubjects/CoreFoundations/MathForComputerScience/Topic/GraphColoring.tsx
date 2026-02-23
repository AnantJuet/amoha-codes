import React from 'react';

const GraphColoring: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Graph Coloring</h1>

    <p className="text-lg leading-relaxed">
      Graph coloring assigns colors to vertices such that no two adjacent vertices share
      the same color. The chromatic number X(G) is the minimum colors needed.
    </p>

    <h2 className="text-2xl font-bold mt-8">Chromatic Number</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Graph Type</th>
          <th className="p-2 border">Chromatic Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Complete Graph Kn</strong></td>
          <td className="p-2 border">X(Kn) = n (needs n colors)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Even Cycle</strong></td>
          <td className="p-2 border">X(Cycle) = 2</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Odd Cycle</strong></td>
          <td className="p-2 border">X(Cycle) = 3</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Bipartite Graph</strong></td>
          <td className="p-2 border">X(Bipartite) = 2 (two-colorable)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Tree</strong></td>
          <td className="p-2 border">X(Tree) = 2 (if more than one vertex)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Four Color Theorem</h2>
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
          <td className="p-2 border">Every planar graph can be colored with at most 4 colors</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Proof</strong></td>
          <td className="p-2 border">First major theorem proved with computer assistance (1976)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Application</strong></td>
          <td className="p-2 border">Map coloring - adjacent regions need different colors</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Greedy Coloring Algorithm</h2>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-3 font-mono text-sm text-gray-900">
{`1. Order vertices v1, v2, ..., vn
2. For each vertex vi:
   - Assign the smallest color not used by neighbors`}
    </pre>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Time Complexity</strong></td>
          <td className="p-2 border">O(V + E)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Guarantee</strong></td>
          <td className="p-2 border">Uses at most max_degree + 1 colors</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Optimality</strong></td>
          <td className="p-2 border">Not always optimal (depends on vertex ordering)</td>
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
          <td className="p-2 border"><strong>Scheduling</strong></td>
          <td className="p-2 border">Exams, meetings without conflicts</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Register allocation</strong></td>
          <td className="p-2 border">Compiler optimization</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Map coloring</strong></td>
          <td className="p-2 border">Adjacent regions different colors</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Frequency assignment</strong></td>
          <td className="p-2 border">Radio channels without interference</td>
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
          <td className="p-2 border">What is the chromatic number of a cycle with 5 vertices?</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Color a Petersen graph with minimum colors</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default GraphColoring;
