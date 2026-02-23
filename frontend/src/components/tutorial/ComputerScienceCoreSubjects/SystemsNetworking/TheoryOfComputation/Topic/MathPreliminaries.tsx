import React from 'react';

const MathPreliminaries: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Mathematical Preliminaries for Theory of Computation</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Understanding the Theory of Computation requires a solid foundation in certain mathematical concepts.
      This section covers the essential mathematical preliminaries including sets, relations, functions, graphs, and logic.
    </p>

    <h2 className="text-3xl font-bold mt-8">Sets and Set Operations</h2>
    <p className="leading-relaxed">
      A set is a collection of distinct objects, called elements or members. Sets are fundamental to defining languages, alphabets, and states in automata theory.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Basic Set Notation</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Set Definition:
- A = {1, 2, 3}          // Set with elements 1, 2, 3
- B = {x | x > 0}        // Set builder notation
- |A| = 3                // Cardinality (number of elements)

Special Sets:
- {} or empty set        // Empty set (no elements)
- N = {0, 1, 2, 3, ...}  // Natural numbers
- Z = {..., -1, 0, 1, ...} // Integers

Membership:
- 2 is in A              // 2 is an element of A
- 5 is not in A          // 5 is not an element of A`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Set Operations</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Union</td>
            <td className="p-3 border">A U B</td>
            <td className="p-3 border">Elements in A or B</td>
            <td className="p-3 border">{'{1,2} U {2,3} = {1,2,3}'}</td>
          </tr>
          <tr>
            <td className="p-3 border">Intersection</td>
            <td className="p-3 border">A intersection B</td>
            <td className="p-3 border">Elements in both A and B</td>
            <td className="p-3 border">{'{1,2} int {2,3} = {2}'}</td>
          </tr>
          <tr>
            <td className="p-3 border">Difference</td>
            <td className="p-3 border">A - B</td>
            <td className="p-3 border">Elements in A but not B</td>
            <td className="p-3 border">{'{1,2,3} - {2} = {1,3}'}</td>
          </tr>
          <tr>
            <td className="p-3 border">Complement</td>
            <td className="p-3 border">A'</td>
            <td className="p-3 border">Elements not in A</td>
            <td className="p-3 border">All elements in U not in A</td>
          </tr>
          <tr>
            <td className="p-3 border">Power Set</td>
            <td className="p-3 border">P(A)</td>
            <td className="p-3 border">Set of all subsets</td>
            <td className="p-3 border">{'P({1,2}) = {{},{1},{2},{1,2}}'}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relations</h2>
    <p className="leading-relaxed">
      A relation R from set A to set B is a subset of A x B (Cartesian product). Relations are used to define transitions in automata.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Properties of Relations</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`For a relation R on set A:

Reflexive: (a, a) in R for all a in A
  Example: "equals" - every element equals itself

Symmetric: (a, b) in R implies (b, a) in R
  Example: "is sibling of" - if a is sibling of b, then b is sibling of a

Transitive: (a, b) in R and (b, c) in R implies (a, c) in R
  Example: "less than" - if a < b and b < c, then a < c

Equivalence Relation: Reflexive, Symmetric, and Transitive
  Example: "congruence modulo n"

Partial Order: Reflexive, Antisymmetric, and Transitive
  Example: "subset of" for sets`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Functions</h2>
    <p className="leading-relaxed">
      A function f: A to B is a relation where each element in A is mapped to exactly one element in B.
      Functions are essential for defining transition functions in automata.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Function Properties:

Injective (One-to-One): f(a) = f(b) implies a = b
  Different inputs give different outputs

Surjective (Onto): For every b in B, exists a in A with f(a) = b
  Every element in codomain is reached

Bijective: Both injective and surjective
  One-to-one correspondence between A and B

In Automata Theory:
- Transition function delta: Q x Sigma -> Q (DFA)
- Transition function delta: Q x Sigma -> P(Q) (NFA)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Strings and Languages</h2>
    <p className="leading-relaxed">
      Strings and languages are central to the Theory of Computation. Understanding their mathematical properties is essential.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Alphabet (Sigma): A finite, non-empty set of symbols
  Example: Sigma = {0, 1} (binary alphabet)

String: A finite sequence of symbols from an alphabet
  Example: w = "0110" over {0, 1}

String Operations:
- Length: |w| = number of symbols (|0110| = 4)
- Empty string: epsilon (length 0)
- Concatenation: w1.w2 (joining two strings)
- Reversal: w^R (reversing the string)

Language: A set of strings over an alphabet
  L subset of Sigma*

Kleene Star (Sigma*): Set of all possible strings
  Sigma* = {epsilon, 0, 1, 00, 01, 10, 11, 000, ...}

Kleene Plus (Sigma+): All strings except empty string
  Sigma+ = Sigma* - {epsilon}`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Graphs</h2>
    <p className="leading-relaxed">
      Graphs are used to represent automata visually. A graph G = (V, E) consists of vertices V and edges E.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Graph Types:

Undirected Graph: Edges have no direction
  Edge {u, v} connects u and v bidirectionally

Directed Graph (Digraph): Edges have direction
  Edge (u, v) goes from u to v only
  Used for automata state diagrams

Labeled Graph: Edges have labels
  Used for transition diagrams (labels = input symbols)

Graph Terminology:
- Path: Sequence of vertices connected by edges
- Cycle: Path that starts and ends at same vertex
- Connected: Path exists between every pair of vertices
- Tree: Connected graph with no cycles`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Logic</h2>
    <p className="leading-relaxed">
      Propositional and predicate logic provide the foundation for formal reasoning in computation theory.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Propositional Logic</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operator</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Meaning</th>
            <th className="p-3 border">Truth Condition</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Negation</td>
            <td className="p-3 border">NOT p</td>
            <td className="p-3 border">Not p</td>
            <td className="p-3 border">True when p is false</td>
          </tr>
          <tr>
            <td className="p-3 border">Conjunction</td>
            <td className="p-3 border">p AND q</td>
            <td className="p-3 border">p and q</td>
            <td className="p-3 border">True when both true</td>
          </tr>
          <tr>
            <td className="p-3 border">Disjunction</td>
            <td className="p-3 border">p OR q</td>
            <td className="p-3 border">p or q</td>
            <td className="p-3 border">True when at least one true</td>
          </tr>
          <tr>
            <td className="p-3 border">Implication</td>
            <td className="p-3 border">p IMPLIES q</td>
            <td className="p-3 border">If p then q</td>
            <td className="p-3 border">False only when p true, q false</td>
          </tr>
          <tr>
            <td className="p-3 border">Biconditional</td>
            <td className="p-3 border">p IFF q</td>
            <td className="p-3 border">p if and only if q</td>
            <td className="p-3 border">True when both same</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Quantifiers</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Universal Quantifier (FOR ALL):
  "For all x, P(x)" - P(x) is true for every x
  Example: For all n in N, n >= 0

Existential Quantifier (EXISTS):
  "There exists x such that P(x)" - P(x) is true for some x
  Example: Exists n in N, n > 100

Negation of Quantifiers:
  NOT (FOR ALL x, P(x)) = EXISTS x, NOT P(x)
  NOT (EXISTS x, P(x)) = FOR ALL x, NOT P(x)`}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Sets form the foundation for defining alphabets, states, and languages</li>
        <li>Relations and functions describe transitions in automata</li>
        <li>String operations (concatenation, Kleene star) are essential for language operations</li>
        <li>Graphs provide visual representation of automata</li>
        <li>Logic enables formal reasoning about computational properties</li>
        <li>Understanding these concepts is prerequisite for studying automata theory</li>
      </ul>
    </div>
  </div>
);

export default MathPreliminaries;
