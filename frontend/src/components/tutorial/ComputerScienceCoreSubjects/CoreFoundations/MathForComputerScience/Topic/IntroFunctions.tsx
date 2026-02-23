import React from 'react';

const IntroFunctions: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Functions</h1>

    <p className="text-lg leading-relaxed">
      A function is a special type of relation that assigns exactly one output to each input.
      Functions are central to both mathematics and programming, providing a way to describe
      transformations and computations.
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
          <td className="p-2 border font-semibold">Function f: A → B</td>
          <td className="p-2 border">A relation where every element of A is related to exactly one element of B</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Formal Definition</td>
          <td className="p-2 border font-mono text-gray-900">∀a ∈ A, ∃! b ∈ B: (a, b) ∈ f</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Notation</td>
          <td className="p-2 border">We write f(a) = b or a ↦ b</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Domain</td>
          <td className="p-2 border">A (the input set)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Codomain</td>
          <td className="p-2 border">B (the output set)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Not a Function</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Reason</th>
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Some input has no output</td>
          <td className="p-2 border font-mono text-gray-900">f = {'{'}(1, a), (2, b){'}'} on A = {'{'}1, 2, 3{'}'} → Not a function (3 has no output)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Some input has multiple outputs</td>
          <td className="p-2 border font-mono text-gray-900">g = {'{'}(1, a), (1, b), (2, c){'}'} → Not a function (1 maps to both a and b)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Range vs Codomain</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Term</th>
          <th className="p-2 border">Definition</th>
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Codomain</td>
          <td className="p-2 border">All possible outputs (given in function definition)</td>
          <td className="p-2 border">For f: Z → Z where f(x) = x², codomain is Z (all integers)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Range (Image)</td>
          <td className="p-2 border">Actual outputs produced = {'{'}f(a) | a ∈ A{'}'}</td>
          <td className="p-2 border">{'{'}0, 1, 4, 9, 16, ...{'}'} (non-negative perfect squares)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Ways to Define Functions</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Method</th>
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Formula</td>
          <td className="p-2 border font-mono text-gray-900">f(x) = 2x + 1</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Table</td>
          <td className="p-2 border font-mono text-gray-900">f(1) = a, f(2) = b, f(3) = c</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Set of pairs</td>
          <td className="p-2 border font-mono text-gray-900">f = {'{'}(1, a), (2, b), (3, c){'}'}</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Algorithm/Code</td>
          <td className="p-2 border font-mono text-gray-900">function square(x) {'{'} return x * x; {'}'}</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Important Functions</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Function</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Identity</td>
          <td className="p-2 border">id(x) = x (maps each element to itself)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Constant</td>
          <td className="p-2 border">f(x) = c (maps all inputs to same output)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Floor</td>
          <td className="p-2 border">⌊x⌋ = largest integer ≤ x</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Ceiling</td>
          <td className="p-2 border">⌈x⌉ = smallest integer ≥ x</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Absolute value</td>
          <td className="p-2 border">|x| = x if x ≥ 0, else -x</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Functions in Programming</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border font-semibold">Mathematical functions</td>
          <td className="p-2 border">Same input always gives same output (pure)</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Programming functions</td>
          <td className="p-2 border">May have side effects, state, randomness</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Pure functions</td>
          <td className="p-2 border">Programming functions that match mathematical definition</td>
        </tr>
        <tr>
          <td className="p-2 border font-semibold">Note</td>
          <td className="p-2 border">Functional programming emphasizes pure functions</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-2">
      <li>Is R = {'{'}(1,a), (2,a), (3,b){'}'} a function from {'{'}1,2,3{'}'} to {'{'}a,b,c{'}'}?</li>
      <li>Find the range of f: R → R where f(x) = x² - 4</li>
      <li>Define a function that maps each integer to its remainder when divided by 5</li>
      <li>Compute ⌊3.7⌋, ⌈3.7⌉, ⌊-2.3⌋, ⌈-2.3⌉</li>
    </ol>
  </div>
);

export default IntroFunctions;
