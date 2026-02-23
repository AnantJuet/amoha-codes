import React from 'react';

const RelationRepresentation: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Representing Relations</h1>

    <p className="text-lg leading-relaxed">
      Relations can be represented in multiple ways depending on the context and the operations
      we need to perform. Each representation has its advantages for different applications
      in computer science and mathematics.
    </p>

    <h2 className="text-2xl font-bold mt-8">1. Set of Ordered Pairs</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Description</td>
          <td className="p-2 border">The most direct representation</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Example</td>
          <td className="p-2 border font-mono text-gray-900">R = {'{'}(1, 2), (1, 3), (2, 3), (3, 3){'}'}</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Pros</td>
          <td className="p-2 border">Explicit, easy to understand</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Cons</td>
          <td className="p-2 border">Inefficient for large relations, hard to check properties</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">2. Matrix Representation</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Definition</td>
          <td className="p-2 border">For relation R on set A = {'{'}a₁, a₂, ..., aₙ{'}'}, matrix M where M[i][j] = 1 if (aᵢ, aⱼ) ∈ R, else 0</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Example</td>
          <td className="p-2 border">R = {'{'}(1,2), (1,3), (2,3), (3,3){'}'} on {'{'}1, 2, 3{'}'}</td>
        </tr>
      </tbody>
    </table>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-3 font-mono text-sm text-gray-900">
{`    1  2  3
1 [ 0  1  1 ]
2 [ 0  0  1 ]
3 [ 0  0  1 ]`}
    </pre>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Matrix Characteristic</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Reflexive</td>
          <td className="p-2 border">All diagonal entries are 1</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Symmetric</td>
          <td className="p-2 border">M = Mᵀ (matrix equals its transpose)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Antisymmetric</td>
          <td className="p-2 border">If M[i][j] = 1 and i ≠ j, then M[j][i] = 0</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Matrix Operations</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Operation</th>
          <th className="p-2 border">Matrix Computation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Composition (S ∘ R)</td>
          <td className="p-2 border">Boolean matrix multiplication M_R × M_S</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Inverse (R⁻¹)</td>
          <td className="p-2 border">Transpose of matrix Mᵀ</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Union (R ∪ S)</td>
          <td className="p-2 border">M_R ∨ M_S (element-wise OR)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Intersection (R ∩ S)</td>
          <td className="p-2 border">M_R ∧ M_S (element-wise AND)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">3. Directed Graph (Digraph)</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Structure</td>
          <td className="p-2 border">Vertices represent elements, directed edges represent relationships</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Construction</td>
          <td className="p-2 border">Draw a vertex for each element; Draw an arrow from a to b if (a, b) ∈ R; Self-loops represent (a, a) pairs</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Example</td>
          <td className="p-2 border font-mono text-gray-900">R = {'{'}(1,2), (2,3), (3,1){'}'} forms a cycle: 1 → 2 → 3 → 1</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Graph Properties</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Graph Characteristic</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Reflexive</td>
          <td className="p-2 border">Every vertex has a self-loop</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Symmetric</td>
          <td className="p-2 border">Every edge has a reverse edge (bidirectional)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Antisymmetric</td>
          <td className="p-2 border">No bidirectional edges (except self-loops)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Transitive</td>
          <td className="p-2 border">If path a→b→c exists, then edge a→c exists</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">4. Arrow Diagram</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Use Case</td>
          <td className="p-2 border">For relations between different sets A and B</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Construction</td>
          <td className="p-2 border">Draw elements of A on the left, B on the right; Draw arrows from a ∈ A to b ∈ B if (a, b) ∈ R</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Application</td>
          <td className="p-2 border">Useful for visualizing functions and mappings between sets</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">5. Adjacency List</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Description</td>
          <td className="p-2 border">For each element, list all elements it's related to</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Example</td>
          <td className="p-2 border font-mono text-gray-900">R = {'{'}(1,2), (1,3), (2,3){'}'} → 1: [2, 3], 2: [3], 3: []</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Pros</td>
          <td className="p-2 border">Space-efficient for sparse relations</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Choosing a Representation</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Task</th>
          <th className="p-2 border">Best Representation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Check if (a,b) ∈ R</td>
          <td className="p-2 border">Matrix (O(1))</td>
        </tr>
        <tr>
          <td className="p-2 border">Composition</td>
          <td className="p-2 border">Matrix multiplication</td>
        </tr>
        <tr>
          <td className="p-2 border">Find all related to a</td>
          <td className="p-2 border">Adjacency list</td>
        </tr>
        <tr>
          <td className="p-2 border">Visualize structure</td>
          <td className="p-2 border">Digraph</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-2">
      <li>Draw the matrix for R = {'{'}(a,a), (a,b), (b,c), (c,a){'}'} on {'{'}a, b, c{'}'}</li>
      <li>Draw the digraph for the "divides" relation on {'{'}1, 2, 3, 4{'}'}</li>
      <li>Given matrix, write R as set of pairs and draw digraph</li>
      <li>Compute R ∘ R using matrix multiplication</li>
    </ol>
  </div>
);

export default RelationRepresentation;
