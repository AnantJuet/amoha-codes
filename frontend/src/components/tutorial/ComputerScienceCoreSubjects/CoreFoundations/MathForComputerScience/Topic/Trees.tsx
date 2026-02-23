import React from 'react';

const Trees: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Trees</h1>

    <p className="text-lg leading-relaxed">
      A tree is a connected graph with no cycles. Trees are fundamental data structures and
      appear everywhere in computer science: file systems, DOM, organizational hierarchies,
      and many algorithms use tree structures.
    </p>

    <h2 className="text-2xl font-bold mt-8">Equivalent Definitions</h2>
    <p className="mt-3">For a graph G with n vertices, these are equivalent:</p>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">1</td>
          <td className="p-2 border">G is a tree (connected and acyclic)</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">G is connected with exactly n-1 edges</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">G is acyclic with exactly n-1 edges</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">There is exactly one path between any two vertices</td>
        </tr>
        <tr>
          <td className="p-2 border">5</td>
          <td className="p-2 border">G is connected, but removing any edge disconnects it</td>
        </tr>
        <tr>
          <td className="p-2 border">6</td>
          <td className="p-2 border">G is acyclic, but adding any edge creates a cycle</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Tree Terminology</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Term</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Root</strong></td>
          <td className="p-2 border">Designated top vertex (for rooted trees)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Parent</strong></td>
          <td className="p-2 border">Vertex directly above in the tree</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Child</strong></td>
          <td className="p-2 border">Vertex directly below</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Leaf</strong></td>
          <td className="p-2 border">Vertex with no children (degree 1, or 0 for root-only tree)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Internal node</strong></td>
          <td className="p-2 border">Non-leaf vertex</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Siblings</strong></td>
          <td className="p-2 border">Vertices with the same parent</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Ancestors</strong></td>
          <td className="p-2 border">All vertices on path from root to vertex</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Descendants</strong></td>
          <td className="p-2 border">All vertices in the subtree below</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Depth</strong></td>
          <td className="p-2 border">Distance from root</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Height</strong></td>
          <td className="p-2 border">Maximum depth of any vertex</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Types of Trees</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>Binary Tree</strong></td>
          <td className="p-2 border">Each node has at most 2 children (left and right)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Complete Binary Tree</strong></td>
          <td className="p-2 border">All levels filled except possibly the last, which is filled left to right</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Full Binary Tree</strong></td>
          <td className="p-2 border">Every node has 0 or 2 children (no single-child nodes)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Perfect Binary Tree</strong></td>
          <td className="p-2 border">All internal nodes have 2 children, all leaves at same depth</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Binary Tree Properties</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Max nodes at level k</td>
          <td className="p-2 border">2^k</td>
        </tr>
        <tr>
          <td className="p-2 border">Max nodes in tree of height h</td>
          <td className="p-2 border">2^(h+1) - 1</td>
        </tr>
        <tr>
          <td className="p-2 border">Min height for n nodes</td>
          <td className="p-2 border">floor(log2 n)</td>
        </tr>
        <tr>
          <td className="p-2 border">In a full binary tree</td>
          <td className="p-2 border">leaves = internal nodes + 1</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Spanning Tree</h2>
    <p className="mt-3">A spanning tree of graph G is a subgraph that:</p>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Vertices</td>
          <td className="p-2 border">Includes all vertices of G</td>
        </tr>
        <tr>
          <td className="p-2 border">Structure</td>
          <td className="p-2 border">Is a tree (connected, acyclic)</td>
        </tr>
        <tr>
          <td className="p-2 border">Edges</td>
          <td className="p-2 border">Has exactly V-1 edges</td>
        </tr>
      </tbody>
    </table>
    <p className="mt-3">Every connected graph has at least one spanning tree.</p>

    <h2 className="text-2xl font-bold mt-8">Forest</h2>
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
          <td className="p-2 border">An acyclic graph (possibly disconnected)</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Edge Count</strong></td>
          <td className="p-2 border">A forest with n vertices and k connected components has n - k edges</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Components</strong></td>
          <td className="p-2 border">Each connected component of a forest is a tree</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Domain</th>
          <th className="p-2 border">Application</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border"><strong>File systems</strong></td>
          <td className="p-2 border">Directory hierarchy</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>HTML/XML</strong></td>
          <td className="p-2 border">DOM tree</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Databases</strong></td>
          <td className="p-2 border">B-trees, indexing</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Compilers</strong></td>
          <td className="p-2 border">Parse trees, AST</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Networks</strong></td>
          <td className="p-2 border">Spanning trees for broadcasting</td>
        </tr>
        <tr>
          <td className="p-2 border"><strong>Algorithms</strong></td>
          <td className="p-2 border">Decision trees, game trees</td>
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
          <td className="p-2 border">A tree has 10 vertices. How many edges does it have?</td>
        </tr>
        <tr>
          <td className="p-2 border">2</td>
          <td className="p-2 border">What's the maximum height of a binary tree with 15 nodes?</td>
        </tr>
        <tr>
          <td className="p-2 border">3</td>
          <td className="p-2 border">How many leaf nodes can a full binary tree with 15 nodes have?</td>
        </tr>
        <tr>
          <td className="p-2 border">4</td>
          <td className="p-2 border">Prove that every tree with at least 2 vertices has at least 2 leaves</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Trees;
