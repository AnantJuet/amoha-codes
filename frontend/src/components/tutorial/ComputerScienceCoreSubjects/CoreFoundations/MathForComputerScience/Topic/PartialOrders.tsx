import React from 'react';

const PartialOrders: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Partial Orders</h1>

    <p className="text-lg leading-relaxed">
      A partial order is a relation that generalizes the notion of "less than or equal to."
      Unlike total orders, not every pair of elements needs to be comparable. Partial orders
      are fundamental in computer science for scheduling, dependencies, and hierarchies.
    </p>

    <h2 className="text-2xl font-bold mt-8">Definition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Formal Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Reflexive</td>
          <td className="p-2 border font-mono text-gray-900">∀a: aRa</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Antisymmetric</td>
          <td className="p-2 border font-mono text-gray-900">∀a, b: (aRb ∧ bRa) → a = b</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Transitive</td>
          <td className="p-2 border font-mono text-gray-900">∀a, b, c: (aRb ∧ bRc) → aRc</td>
        </tr>
      </tbody>
    </table>
    <p className="mt-2">A set with a partial order is called a <strong>partially ordered set (poset)</strong>.</p>

    <h2 className="text-2xl font-bold mt-8">Examples</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Relation</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">≤ on integers</td>
          <td className="p-2 border">The standard "less than or equal to" is a total order (every pair comparable)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">⊆ on sets</td>
          <td className="p-2 border">Set inclusion is a partial order. {'{'}a{'}'} ⊆ {'{'}a, b{'}'}, but {'{'}a{'}'} and {'{'}b{'}'} are incomparable</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Divisibility on positive integers</td>
          <td className="p-2 border">a | b (a divides b). 2|4 and 2|6, but 4 and 6 are incomparable</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Task dependencies</td>
          <td className="p-2 border">"Task A must complete before Task B" defines a partial order on tasks</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Terminology</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Term</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Comparable</td>
          <td className="p-2 border">a and b are comparable if aRb or bRa</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Incomparable</td>
          <td className="p-2 border">Neither aRb nor bRa holds</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Minimal element</td>
          <td className="p-2 border">No element is smaller (∄b: bRa and b ≠ a)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Maximal element</td>
          <td className="p-2 border">No element is larger</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Minimum (least)</td>
          <td className="p-2 border">Smaller than all others (∀b: aRb)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Maximum (greatest)</td>
          <td className="p-2 border">Larger than all others</td>
        </tr>
      </tbody>
    </table>
    <p className="mt-2 text-sm">Note: Minimal ≠ Minimum! A poset can have multiple minimals but at most one minimum.</p>

    <h2 className="text-2xl font-bold mt-8">Hasse Diagram</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Purpose</td>
          <td className="p-2 border">A visual representation of a partial order</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Vertices</td>
          <td className="p-2 border">Represent elements</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Edges</td>
          <td className="p-2 border">If a {"<"} b and no c with a {"<"} c {"<"} b, draw edge from a (below) to b (above)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Omissions</td>
          <td className="p-2 border">Reflexive loops and transitive edges (implied)</td>
        </tr>
      </tbody>
    </table>
    <p className="mt-3 font-semibold">Example: Divisibility on {'{'}1, 2, 3, 4, 6, 12{'}'}</p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900">
{`      12
     /  \\
    4    6
    |   /|
    2  3 |
     \\ | /
       1`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Total Order vs Partial Order</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Description</th>
          <th className="p-2 border">Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Total Order</td>
          <td className="p-2 border">A partial order where every pair is comparable: ∀a, b: aRb ∨ bRa</td>
          <td className="p-2 border">≤ on integers, alphabetical order</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Partial (not total)</td>
          <td className="p-2 border">Some pairs may be incomparable</td>
          <td className="p-2 border">⊆ on sets, divisibility</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Topological Sort</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Definition</td>
          <td className="p-2 border">A linear extension of a partial order</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Purpose</td>
          <td className="p-2 border">Arranges elements in a sequence respecting the partial order</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Property</td>
          <td className="p-2 border">If a {"<"} b in the partial order, then a comes before b in the sequence</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Note</td>
          <td className="p-2 border">Multiple valid topological sorts may exist for a given poset</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications in CS</h2>
    <ul className="list-disc ml-6 mt-2 space-y-2">
      <li><strong>Build systems:</strong> Compile dependencies (Makefile)</li>
      <li><strong>Package managers:</strong> Install dependencies in order</li>
      <li><strong>Course prerequisites:</strong> Which classes to take first</li>
      <li><strong>Version control:</strong> Commit ancestry is a partial order</li>
      <li><strong>Scheduling:</strong> Task ordering with dependencies</li>
    </ul>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-2">
      <li>Draw the Hasse diagram for divisibility on {'{'}1, 2, 3, 4, 5, 6{'}'}</li>
      <li>Find all minimal and maximal elements of (P({'{'}a, b{'}'}), ⊆)</li>
      <li>Is {"<"} (strict less than) a partial order? Why or why not?</li>
      <li>Give two different topological sorts of: a {"<"} c, b {"<"} c, c {"<"} d</li>
    </ol>
  </div>
);

export default PartialOrders;
