import React from 'react';

const EulerianHamiltonian: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Eulerian and Hamiltonian Paths</h1>

    <p className="text-lg leading-relaxed">
      Eulerian and Hamiltonian paths are fundamental concepts in graph theory that deal with
      traversing graphs under specific constraints. They have important applications in routing,
      circuit design, and optimization problems.
    </p>

    <h2 className="text-2xl font-bold mt-8">Eulerian Path</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Definition</strong></td>
          <td className="p-2 border">Visits every EDGE exactly once</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Existence Condition</strong></td>
          <td className="p-2 border">Exists if and only if 0 or 2 vertices have odd degree</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Eulerian Circuit</strong></td>
          <td className="p-2 border">Eulerian path that starts and ends at the same vertex (0 odd-degree vertices)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Algorithm</strong></td>
          <td className="p-2 border">Hierholzer's algorithm - O(E)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Hamiltonian Path</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Definition</strong></td>
          <td className="p-2 border">Visits every VERTEX exactly once</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Complexity</strong></td>
          <td className="p-2 border">NP-complete to determine existence</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Hamiltonian Cycle</strong></td>
          <td className="p-2 border">Hamiltonian path that starts and ends at the same vertex</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Approach</strong></td>
          <td className="p-2 border">Backtracking, dynamic programming (Held-Karp)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Eulerian vs Hamiltonian</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Eulerian</th>
          <th className="p-2 border">Hamiltonian</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Visits</td>
          <td className="p-2 border">Every edge exactly once</td>
          <td className="p-2 border">Every vertex exactly once</td>
        </tr>
        <tr>
          <td className="p-2 border">Existence check</td>
          <td className="p-2 border">Polynomial time</td>
          <td className="p-2 border">NP-complete</td>
        </tr>
        <tr>
          <td className="p-2 border">Finding path</td>
          <td className="p-2 border">O(E)</td>
          <td className="p-2 border">Exponential (worst case)</td>
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
          <td className="p-2 border">Does a graph with degrees (2,2,2,2,4) have an Eulerian circuit?</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">Does K5 have a Hamiltonian cycle?</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default EulerianHamiltonian;
