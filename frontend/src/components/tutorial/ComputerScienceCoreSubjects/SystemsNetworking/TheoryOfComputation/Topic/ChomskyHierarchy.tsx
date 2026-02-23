import React from "react";

const ChomskyHierarchy: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Chomsky Hierarchy
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Chomsky Hierarchy, proposed by Noam Chomsky in 1956, is a containment hierarchy of classes
      of formal grammars. It classifies formal languages into four types based on the form of their
      production rules and the computational power needed to recognize them.
    </p>

    <h2 className="text-3xl font-bold mt-8">Overview of the Hierarchy</h2>
    <p className="leading-relaxed">
      The hierarchy consists of four types, numbered 0 through 3, where Type 3 is the most
      restrictive and Type 0 is the most general. Each type corresponds to a specific class
      of automata that can recognize languages of that type.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Chomsky Hierarchy:

+--------------------------------------------------+
|                                                  |
|  Type 0: Recursively Enumerable Languages        |
|  (Unrestricted Grammar, Turing Machine)          |
|                                                  |
|    +------------------------------------------+  |
|    |                                          |  |
|    |  Type 1: Context-Sensitive Languages     |  |
|    |  (Context-Sensitive Grammar, LBA)        |  |
|    |                                          |  |
|    |    +----------------------------------+  |  |
|    |    |                                  |  |  |
|    |    |  Type 2: Context-Free Languages  |  |  |
|    |    |  (CFG, Pushdown Automata)        |  |  |
|    |    |                                  |  |  |
|    |    |    +--------------------------+  |  |  |
|    |    |    |                          |  |  |  |
|    |    |    |  Type 3: Regular Lang.   |  |  |  |
|    |    |    |  (Regular Grammar, FA)   |  |  |  |
|    |    |    |                          |  |  |  |
|    |    |    +--------------------------+  |  |  |
|    |    +----------------------------------+  |  |
|    +------------------------------------------+  |
+--------------------------------------------------+

Type 3 ⊂ Type 2 ⊂ Type 1 ⊂ Type 0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Grammar</th>
            <th className="p-3 border">Language</th>
            <th className="p-3 border">Automaton</th>
            <th className="p-3 border">Production Rules</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Type 0</td>
            <td className="p-3 border">Unrestricted</td>
            <td className="p-3 border">Recursively Enumerable</td>
            <td className="p-3 border">Turing Machine</td>
            <td className="p-3 border">α → β (no restrictions)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Type 1</td>
            <td className="p-3 border">Context-Sensitive</td>
            <td className="p-3 border">Context-Sensitive</td>
            <td className="p-3 border">Linear Bounded Automata</td>
            <td className="p-3 border">αAβ → αγβ, |γ| ≥ 1</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Type 2</td>
            <td className="p-3 border">Context-Free</td>
            <td className="p-3 border">Context-Free</td>
            <td className="p-3 border">Pushdown Automata</td>
            <td className="p-3 border">A → γ (single variable on left)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Type 3</td>
            <td className="p-3 border">Regular</td>
            <td className="p-3 border">Regular</td>
            <td className="p-3 border">Finite Automata</td>
            <td className="p-3 border">A → aB or A → a (right linear)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type 3: Regular Languages</h2>
    <p className="leading-relaxed">
      Regular languages are the simplest class in the hierarchy. They can be described by regular
      expressions and recognized by finite automata.
    </p>
    <h3 className="text-2xl font-semibold mt-4">Production Rules</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>Right Linear:</strong> A → aB or A → a (where A, B are variables, a is terminal)</li>
      <li><strong>Left Linear:</strong> A → Ba or A → a</li>
      <li>Cannot mix right and left linear in same grammar</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">Examples</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <ul className="list-disc list-inside space-y-1">
        <li>L = {"{ a^n | n ≥ 0 }"} (all strings of a's)</li>
        <li>L = {"{ w | w contains 'ab' as substring }"}</li>
        <li>L = {"{ w | w ends with '01' }"}</li>
        <li>Identifiers in programming languages</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type 2: Context-Free Languages</h2>
    <p className="leading-relaxed">
      Context-free languages are more powerful than regular languages. They are used to define
      the syntax of most programming languages and can be recognized by pushdown automata.
    </p>
    <h3 className="text-2xl font-semibold mt-4">Production Rules</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Form: A → γ where A is a single variable and γ is any string of variables and terminals</li>
      <li>Left side must be a single non-terminal symbol</li>
      <li>Right side can be any combination of terminals and non-terminals</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">Examples</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <ul className="list-disc list-inside space-y-1">
        <li>L = {"{ a^n b^n | n ≥ 0 }"} (equal a's and b's)</li>
        <li>L = {"{ w w^R | w ∈ {a,b}* }"} (even palindromes)</li>
        <li>Balanced parentheses</li>
        <li>Programming language syntax (if-else, loops)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type 1: Context-Sensitive Languages</h2>
    <p className="leading-relaxed">
      Context-sensitive languages allow productions where the left side can have context around
      the variable being replaced. They are recognized by Linear Bounded Automata.
    </p>
    <h3 className="text-2xl font-semibold mt-4">Production Rules</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Form: αAβ → αγβ where |γ| ≥ 1</li>
      <li>The context (α and β) must remain unchanged</li>
      <li>Productions cannot decrease string length (except S → ε if S doesn't appear on right side)</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">Examples</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <ul className="list-disc list-inside space-y-1">
        <li>L = {"{ a^n b^n c^n | n ≥ 1 }"}</li>
        <li>L = {"{ ww | w ∈ {a,b}* }"} (string doubled)</li>
        <li>L = {"{ a^(n²) | n ≥ 1 }"}</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type 0: Recursively Enumerable Languages</h2>
    <p className="leading-relaxed">
      Type 0 grammars have no restrictions on production rules. They generate all languages
      that can be recognized by a Turing machine.
    </p>
    <h3 className="text-2xl font-semibold mt-4">Production Rules</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Form: α → β (no restrictions)</li>
      <li>α can be any string containing at least one variable</li>
      <li>β can be any string (including empty string)</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">Characteristics</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <ul className="list-disc list-inside space-y-1">
        <li>Most general class of formal languages</li>
        <li>Corresponds to what Turing machines can accept</li>
        <li>Includes undecidable languages</li>
        <li>Not all Type 0 languages are decidable</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Relationships</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Type 3</th>
            <th className="p-3 border">Type 2</th>
            <th className="p-3 border">Type 1</th>
            <th className="p-3 border">Type 0</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Closed under Union</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-green-600">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Closed under Intersection</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-red-600">No</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-green-600">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Closed under Complement</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-red-600">No</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-red-600">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Membership Decidable</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-red-600">No</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Each type is a proper subset of the type above it in the hierarchy</li>
        <li>Type 3 (Regular) is recognized by Finite Automata - simplest computational model</li>
        <li>Type 2 (Context-Free) is used for programming language syntax</li>
        <li>Type 1 (Context-Sensitive) requires linear space on a Turing machine tape</li>
        <li>Type 0 (Recursively Enumerable) represents all Turing-recognizable languages</li>
        <li>The hierarchy shows a trade-off between expressiveness and decidability</li>
      </ul>
    </div>
  </div>
);

export default ChomskyHierarchy;
