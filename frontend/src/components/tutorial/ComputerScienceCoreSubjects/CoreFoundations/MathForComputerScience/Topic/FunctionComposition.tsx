import React from 'react';

const FunctionComposition: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Function Composition</h1>

    <p className="text-lg leading-relaxed">
      Function composition combines two functions to create a new function where the output
      of one function becomes the input of another. This is fundamental to programming (piping,
      chaining) and mathematics (building complex transformations from simpler ones).
    </p>

    <h2 className="text-2xl font-bold mt-8">Definition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">For functions</td>
          <td className="p-2 border">f: A → B and g: B → C</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Composition</td>
          <td className="p-2 border font-mono text-gray-900">(g ∘ f)(x) = g(f(x))</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Read as</td>
          <td className="p-2 border">"g composed with f" or "g of f"</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Important</td>
          <td className="p-2 border">Apply f first, then g! (Right to left)</td>
        </tr>
      </tbody>
    </table>
    <p className="mt-3 font-semibold">Example:</p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900">
{`f(x) = x + 2, g(x) = x²

(g ∘ f)(x) = g(f(x)) = g(x + 2) = (x + 2)²
(f ∘ g)(x) = f(g(x)) = f(x²) = x² + 2

Note: g ∘ f ≠ f ∘ g in general!`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Domain Requirements</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Requirement</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">For g ∘ f to be defined</td>
          <td className="p-2 border">The range of f must be a subset of the domain of g</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Meaning</td>
          <td className="p-2 border">Output of f must be valid input for g</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Result</td>
          <td className="p-2 border font-mono text-gray-900">f: A → B, g: B → C implies g ∘ f: A → C</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Properties</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Formula</th>
          <th className="p-2 border">Note</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Associativity</td>
          <td className="p-2 border font-mono text-gray-900">(h ∘ g) ∘ f = h ∘ (g ∘ f)</td>
          <td className="p-2 border">We can write h ∘ g ∘ f without ambiguity</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Identity</td>
          <td className="p-2 border font-mono text-gray-900">f ∘ id = id ∘ f = f</td>
          <td className="p-2 border">Composing with identity function gives the same function</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Not Commutative</td>
          <td className="p-2 border font-mono text-gray-900">g ∘ f ≠ f ∘ g (in general)</td>
          <td className="p-2 border">Order matters!</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Composition Preserves Properties</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Property</th>
          <th className="p-2 border">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Injective</td>
          <td className="p-2 border">If f and g are injective, then g ∘ f is injective</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Surjective</td>
          <td className="p-2 border">If f and g are surjective, then g ∘ f is surjective</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Bijective</td>
          <td className="p-2 border">If f and g are bijective, then g ∘ f is bijective</td>
        </tr>
      </tbody>
    </table>
    <p className="mt-2 text-sm">The composition inherits the properties of its components.</p>

    <h2 className="text-2xl font-bold mt-8">Inverse and Composition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">For bijective f and g</td>
          <td className="p-2 border font-mono text-gray-900">(g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Note</td>
          <td className="p-2 border">The order is reversed! Like taking off socks and shoes.</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Verification</td>
          <td className="p-2 border font-mono text-gray-900">(g ∘ f) ∘ (f⁻¹ ∘ g⁻¹) = g ∘ (f ∘ f⁻¹) ∘ g⁻¹ = g ∘ id ∘ g⁻¹ = g ∘ g⁻¹ = id</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications in Programming</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Unix Pipes</td>
          <td className="p-2 border font-mono text-gray-900">cat file.txt | grep "error" | sort → sort ∘ grep ∘ cat</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">JavaScript Method Chaining</td>
          <td className="p-2 border font-mono text-gray-900">arr.filter(x ={">"} x {">"} 0).map(x ={">"} x * 2)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Functional Programming</td>
          <td className="p-2 border font-mono text-gray-900">const composed = compose(g, f); // or: pipe(f, g)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Multiple Compositions</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Notation</th>
          <th className="p-2 border">Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-mono text-gray-900">f²</td>
          <td className="p-2 border">f ∘ f</td>
        </tr>
        <tr>
          <td className="p-2 border font-mono text-gray-900">f³</td>
          <td className="p-2 border">f ∘ f ∘ f</td>
        </tr>
        <tr>
          <td className="p-2 border font-mono text-gray-900">fⁿ</td>
          <td className="p-2 border">f composed with itself n times</td>
        </tr>
      </tbody>
    </table>
    <p className="mt-3 font-semibold">Example:</p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-sm text-gray-900">
{`f(x) = 2x
f²(x) = f(f(x)) = f(2x) = 4x
fⁿ(x) = 2ⁿx`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-2">
      <li>If f(x) = x + 3 and g(x) = 2x, find (g ∘ f)(5) and (f ∘ g)(5)</li>
      <li>Find formulas for g ∘ f and f ∘ g where f(x) = 1/x and g(x) = x²</li>
      <li>Prove that (h ∘ g) ∘ f = h ∘ (g ∘ f)</li>
      <li>If f(x) = 3x + 1 and f⁻¹(x) = (x-1)/3, verify that f ∘ f⁻¹ = id</li>
    </ol>
  </div>
);

export default FunctionComposition;
