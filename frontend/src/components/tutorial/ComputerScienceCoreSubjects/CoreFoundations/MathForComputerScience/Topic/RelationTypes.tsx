import React from 'react';

const RelationTypes: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Types of Relations</h1>

    <p className="text-lg leading-relaxed">
      Relations can have various properties that characterize their behavior. Understanding
      these properties helps identify the type of relation and how it can be used in
      mathematical and computational contexts.
    </p>

    <h2 className="text-2xl font-bold mt-8">Reflexive</h2>
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
          <td className="p-2 border font-mono text-gray-900">∀a ∈ A: (a, a) ∈ R</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Meaning</td>
          <td className="p-2 border">Every element is related to itself</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Reflexive Examples</td>
          <td className="p-2 border">"=" (equals), "≤", "divides"</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Not Reflexive</td>
          <td className="p-2 border">{"<"} (strict less than), "is parent of"</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Matrix/Graph</td>
          <td className="p-2 border">All diagonal entries are 1; Every vertex has a self-loop</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Irreflexive</h2>
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
          <td className="p-2 border font-mono text-gray-900">∀a ∈ A: (a, a) ∉ R</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Meaning</td>
          <td className="p-2 border">No element is related to itself</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Irreflexive Examples</td>
          <td className="p-2 border">{"<"}, {">"}, "is parent of", "≠"</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Not Irreflexive</td>
          <td className="p-2 border">"≤", "divides"</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Note</td>
          <td className="p-2 border">A relation can be neither reflexive nor irreflexive!</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Symmetric</h2>
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
          <td className="p-2 border font-mono text-gray-900">∀a, b: (a, b) ∈ R → (b, a) ∈ R</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Meaning</td>
          <td className="p-2 border">If a is related to b, then b is related to a</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Symmetric Examples</td>
          <td className="p-2 border">"=", "is sibling of", "≠", "is married to"</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Not Symmetric</td>
          <td className="p-2 border">{"<"}, "is parent of", "divides"</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Matrix/Graph</td>
          <td className="p-2 border">M = Mᵀ (symmetric matrix); If edge a→b exists, then b→a exists (bidirectional)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Antisymmetric</h2>
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
          <td className="p-2 border font-mono text-gray-900">∀a, b: ((a, b) ∈ R ∧ (b, a) ∈ R) → a = b</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Meaning</td>
          <td className="p-2 border">If a is related to b and b is related to a, then a = b</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Antisymmetric Examples</td>
          <td className="p-2 border">"≤", {"<"}, "divides", "⊆"</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Not Antisymmetric</td>
          <td className="p-2 border">"is sibling of"</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Note</td>
          <td className="p-2 border">Antisymmetric ≠ not symmetric! A relation can be both.</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Asymmetric</h2>
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
          <td className="p-2 border font-mono text-gray-900">∀a, b: (a, b) ∈ R → (b, a) ∉ R</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Meaning</td>
          <td className="p-2 border">If a is related to b, then b is NOT related to a</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Asymmetric Examples</td>
          <td className="p-2 border">{"<"}, {">"}, "is parent of"</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Not Asymmetric</td>
          <td className="p-2 border">"≤" (since (a, a) ∈ R and (a, a) ∈ R)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Note</td>
          <td className="p-2 border">Asymmetric = Antisymmetric + Irreflexive</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Transitive</h2>
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
          <td className="p-2 border font-mono text-gray-900">∀a, b, c: ((a, b) ∈ R ∧ (b, c) ∈ R) → (a, c) ∈ R</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Meaning</td>
          <td className="p-2 border">If a relates to b and b relates to c, then a relates to c</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Transitive Examples</td>
          <td className="p-2 border">{"<"}, "≤", "=", "divides", "is ancestor of"</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Not Transitive</td>
          <td className="p-2 border">"is parent of", "≠"</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Summary Table</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Relation</th>
          <th className="p-2 border text-center">Refl</th>
          <th className="p-2 border text-center">Sym</th>
          <th className="p-2 border text-center">AntiSym</th>
          <th className="p-2 border text-center">Trans</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">=</td>
          <td className="p-2 border text-center">Yes</td>
          <td className="p-2 border text-center">Yes</td>
          <td className="p-2 border text-center">Yes</td>
          <td className="p-2 border text-center">Yes</td>
        </tr>
        <tr>
          <td className="p-2 border">≤</td>
          <td className="p-2 border text-center">Yes</td>
          <td className="p-2 border text-center">No</td>
          <td className="p-2 border text-center">Yes</td>
          <td className="p-2 border text-center">Yes</td>
        </tr>
        <tr>
          <td className="p-2 border">{"<"}</td>
          <td className="p-2 border text-center">No</td>
          <td className="p-2 border text-center">No</td>
          <td className="p-2 border text-center">Yes</td>
          <td className="p-2 border text-center">Yes</td>
        </tr>
        <tr>
          <td className="p-2 border">≠</td>
          <td className="p-2 border text-center">No</td>
          <td className="p-2 border text-center">Yes</td>
          <td className="p-2 border text-center">No</td>
          <td className="p-2 border text-center">No</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-2">
      <li>Classify "is a subset of" (⊆) as reflexive/symmetric/antisymmetric/transitive</li>
      <li>Give an example of a relation that is both symmetric and antisymmetric</li>
      <li>Is "has the same birthday as" reflexive? Symmetric? Transitive?</li>
      <li>For R = {'{'}(1,1), (1,2), (2,1), (2,2){'}'} on {'{'}1,2,3{'}'}, check all properties</li>
    </ol>
  </div>
);

export default RelationTypes;
