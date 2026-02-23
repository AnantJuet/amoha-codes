import React from 'react';

const EquivalenceRelations: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Equivalence Relations</h1>

    <p className="text-lg leading-relaxed">
      An equivalence relation is a special type of relation that formalizes the notion of
      "sameness" or "equivalence" between elements. It partitions a set into disjoint groups
      of equivalent elements called equivalence classes.
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
          <td className="p-2 border font-mono text-gray-900">∀a ∈ A: aRa</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Symmetric</td>
          <td className="p-2 border font-mono text-gray-900">∀a, b ∈ A: aRb → bRa</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Transitive</td>
          <td className="p-2 border font-mono text-gray-900">∀a, b, c ∈ A: (aRb ∧ bRc) → aRc</td>
        </tr>
      </tbody>
    </table>
    <p className="mt-2">A relation R on set A is an equivalence relation if it satisfies all three properties above.</p>

    <h2 className="text-2xl font-bold mt-8">Examples of Equivalence Relations</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Relation</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Equality (=)</td>
          <td className="p-2 border">aRb iff a = b. The most basic equivalence relation.</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Congruence modulo n</td>
          <td className="p-2 border">a ≡ b (mod n) iff n divides (a - b). Example: 7 ≡ 2 (mod 5) since 5 divides 7-2=5</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Same remainder when divided by n</td>
          <td className="p-2 border">Groups integers into n classes based on their remainder</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Same parity</td>
          <td className="p-2 border">aRb iff both are even or both are odd. Two equivalence classes: {'{'}..., -2, 0, 2, 4, ...{'}'} and {'{'}..., -1, 1, 3, 5, ...{'}'}</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Equivalence Classes</h2>
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
          <td className="p-2 border font-mono text-gray-900">[a] = {'{'}x ∈ A | xRa{'}'}</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Meaning</td>
          <td className="p-2 border">All elements equivalent to a form a single class</td>
        </tr>
      </tbody>
    </table>
    <p className="mt-3 font-semibold">Example: Integers mod 3</p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900">
{`[0] = {..., -6, -3, 0, 3, 6, 9, ...}
[1] = {..., -5, -2, 1, 4, 7, 10, ...}
[2] = {..., -4, -1, 2, 5, 8, 11, ...}`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Partition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Coverage</td>
          <td className="p-2 border">Every element belongs to exactly one class</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Non-empty</td>
          <td className="p-2 border">Classes are non-empty</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Disjoint</td>
          <td className="p-2 border">Classes are pairwise disjoint (no overlap)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Complete</td>
          <td className="p-2 border">Union of all classes equals A</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Quotient Set</td>
          <td className="p-2 border">The set of all equivalence classes is denoted A/R</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Key Theorem</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Statement</th>
          <th className="p-2 border">Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-mono text-gray-900">[a] = [b] ⟺ aRb</td>
          <td className="p-2 border">Two elements are in the same equivalence class if and only if they are related</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications in CS</h2>
    <ul className="list-disc ml-6 mt-2 space-y-2">
      <li><strong>Hash tables:</strong> Elements with same hash are in same equivalence class</li>
      <li><strong>Union-Find:</strong> Data structure for equivalence classes</li>
      <li><strong>String equality:</strong> Case-insensitive comparison</li>
      <li><strong>Graph connectivity:</strong> Connected components are equivalence classes</li>
      <li><strong>Type systems:</strong> Type equivalence</li>
    </ul>

    <h2 className="text-2xl font-bold mt-8">Partition to Equivalence Relation</h2>
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
          <td className="p-2 border">Given a partition of set A, we can define an equivalence relation</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Formula</td>
          <td className="p-2 border font-mono text-gray-900">aRb ⟺ a and b are in the same partition block</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Key Insight</td>
          <td className="p-2 border">Every partition induces an equivalence relation, and vice versa</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-2">
      <li>Prove that "has the same birthday as" is an equivalence relation</li>
      <li>Find all equivalence classes of integers under mod 4</li>
      <li>Is "≤" an equivalence relation? Why or why not?</li>
      <li>Given partition &#123;&#123;1,3&#125;, &#123;2,4&#125;&#125; of &#123;1,2,3,4&#125;, write the equivalence relation</li>
    </ol>
  </div>
);

export default EquivalenceRelations;
