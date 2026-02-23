import React from 'react';

const FunctionTypes: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Types of Functions</h1>

    <p className="text-lg leading-relaxed">
      Functions can be classified based on how they map elements between domain and codomain.
      Understanding these types is crucial for proving properties about functions and for
      applications in cryptography, data structures, and algorithm analysis.
    </p>

    <h2 className="text-2xl font-bold mt-8">Injective (One-to-One)</h2>
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
          <td className="p-2 border font-mono text-gray-900">∀a₁, a₂ ∈ A: f(a₁) = f(a₂) → a₁ = a₂</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Meaning</td>
          <td className="p-2 border">Different inputs always produce different outputs. No two elements map to the same value.</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Injective Example</td>
          <td className="p-2 border">f(x) = 2x is injective</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Not Injective</td>
          <td className="p-2 border">f(x) = x² is not (f(-2) = f(2) = 4)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Pigeonhole Principle</td>
          <td className="p-2 border">If |A| {">"} |B|, no function f: A → B can be injective</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Surjective (Onto)</h2>
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
          <td className="p-2 border font-mono text-gray-900">∀b ∈ B: ∃a ∈ A: f(a) = b</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Meaning</td>
          <td className="p-2 border">Every element in the codomain is "hit" by some input. Range = Codomain.</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Surjective Example</td>
          <td className="p-2 border">f: Z → Z, f(x) = x + 1 is surjective</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Not Surjective</td>
          <td className="p-2 border">f: Z → Z, f(x) = 2x is not (odd numbers not hit)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Cardinality Rule</td>
          <td className="p-2 border">If |A| {"<"} |B|, no function f: A → B can be surjective</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Bijective (One-to-One and Onto)</h2>
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
          <td className="p-2 border">A function that is both injective AND surjective</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Meaning</td>
          <td className="p-2 border">Perfect pairing: each element in A maps to exactly one unique element in B, and vice versa</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Bijective Examples</td>
          <td className="p-2 border">f: Z → Z, f(x) = x + 5; f: R → R, f(x) = 3x - 7</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Not Bijective</td>
          <td className="p-2 border">f: R → R, f(x) = x² (neither)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Also Known As</td>
          <td className="p-2 border">One-to-one correspondences</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Visualizing Function Types</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Type</th>
          <th className="p-2 border text-center">Multiple inputs → same output?</th>
          <th className="p-2 border text-center">All outputs hit?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Injective</td>
          <td className="p-2 border text-center">No</td>
          <td className="p-2 border text-center">Maybe not</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Surjective</td>
          <td className="p-2 border text-center">Maybe</td>
          <td className="p-2 border text-center">Yes</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Bijective</td>
          <td className="p-2 border text-center">No</td>
          <td className="p-2 border text-center">Yes</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Cardinality and Bijections</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Relationship</th>
          <th className="p-2 border">Function Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-mono text-gray-900">|A| = |B|</td>
          <td className="p-2 border">⟺ ∃ bijection f: A → B</td>
        </tr>
        <tr>
          <td className="p-2 border font-mono text-gray-900">|A| ≤ |B|</td>
          <td className="p-2 border">⟺ ∃ injection f: A → B</td>
        </tr>
        <tr>
          <td className="p-2 border font-mono text-gray-900">|A| ≥ |B|</td>
          <td className="p-2 border">⟺ ∃ surjection f: A → B</td>
        </tr>
      </tbody>
    </table>
    <p className="mt-2">This extends to infinite sets: |N| = |Z| = |Q| (countable), but |N| {"<"} |R|.</p>

    <h2 className="text-2xl font-bold mt-8">Inverse Functions</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Condition</td>
          <td className="p-2 border">A function f: A → B has an inverse f⁻¹: B → A if and only if f is bijective</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Properties</td>
          <td className="p-2 border font-mono text-gray-900">f⁻¹(f(a)) = a and f(f⁻¹(b)) = b</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Example</td>
          <td className="p-2 border">f(x) = 2x + 3 has inverse f⁻¹(x) = (x - 3)/2</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications in CS</h2>
    <ul className="list-disc ml-6 mt-2 space-y-2">
      <li><strong>Injective:</strong> Unique IDs, hash functions (ideally)</li>
      <li><strong>Surjective:</strong> Covering all cases, load balancing</li>
      <li><strong>Bijective:</strong> Encryption/decryption, encoding/decoding</li>
      <li><strong>Inverse:</strong> Undo operations, decryption algorithms</li>
    </ul>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-2">
      <li>Is f: R → R⁺ where f(x) = eˣ injective? Surjective? Bijective?</li>
      <li>Prove f(x) = 3x - 5 is a bijection and find its inverse</li>
      <li>Give an example of a function that is surjective but not injective</li>
      <li>For finite sets, if f: A → B is injective and |A| = |B|, is f bijective?</li>
    </ol>
  </div>
);

export default FunctionTypes;
