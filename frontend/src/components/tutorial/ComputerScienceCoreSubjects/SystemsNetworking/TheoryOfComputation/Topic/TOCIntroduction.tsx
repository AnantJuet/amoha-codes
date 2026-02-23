import React from "react";

const TOCIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction to Theory of Computation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Theory of Computation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Theory of Computation (TOC) is a fundamental branch of computer science that deals with
      understanding the nature of computation itself. It explores what problems can be solved
      computationally, how efficiently they can be solved, and what models of computation are
      needed to solve them. This field provides the theoretical foundation for all of computer science.
    </p>

    {/* What is Theory of Computation */}
    <h2 className="text-3xl font-bold mt-8">What is Theory of Computation?</h2>
    <p className="leading-relaxed">
      Theory of Computation is the mathematical study of computation and computing machines. It aims to
      answer fundamental questions such as:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Computability:</strong> What can be computed? Are there problems that no computer can ever solve?</li>
      <li><strong>Complexity:</strong> How efficiently can we solve a problem? How much time and space do we need?</li>
      <li><strong>Automata:</strong> What are the simplest machines that can solve specific classes of problems?</li>
    </ul>

    {/* Key Components */}
    <h2 className="text-3xl font-bold mt-8">Key Components of TOC</h2>
    <p className="leading-relaxed">
      Theory of Computation is broadly divided into three major areas:
    </p>

    {/* Components Table */}
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Focus Area</th>
            <th className="p-3 border">Key Questions</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Automata Theory</td>
            <td className="p-3 border">Abstract machines and their computational power</td>
            <td className="p-3 border">What can different types of machines recognize?</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Computability Theory</td>
            <td className="p-3 border">Problems that can or cannot be solved algorithmically</td>
            <td className="p-3 border">Is there an algorithm to solve this problem?</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity Theory</td>
            <td className="p-3 border">Resources required to solve computational problems</td>
            <td className="p-3 border">How much time/space does the best algorithm need?</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Automata Theory */}
    <h2 className="text-3xl font-bold mt-8">1. Automata Theory</h2>
    <p className="leading-relaxed">
      Automata theory studies abstract computing devices or "machines." These machines are simplified
      models of actual computers, designed to recognize certain patterns in input strings.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Types of Automata</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Automaton</th>
            <th className="p-3 border">Memory Type</th>
            <th className="p-3 border">Language Recognized</th>
            <th className="p-3 border">Power</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Finite Automata (FA)</td>
            <td className="p-3 border">No memory (states only)</td>
            <td className="p-3 border">Regular Languages</td>
            <td className="p-3 border">Least powerful</td>
          </tr>
          <tr>
            <td className="p-3 border">Pushdown Automata (PDA)</td>
            <td className="p-3 border">Stack (LIFO)</td>
            <td className="p-3 border">Context-Free Languages</td>
            <td className="p-3 border">More powerful than FA</td>
          </tr>
          <tr>
            <td className="p-3 border">Linear Bounded Automata (LBA)</td>
            <td className="p-3 border">Bounded tape</td>
            <td className="p-3 border">Context-Sensitive Languages</td>
            <td className="p-3 border">More powerful than PDA</td>
          </tr>
          <tr>
            <td className="p-3 border">Turing Machine (TM)</td>
            <td className="p-3 border">Infinite tape</td>
            <td className="p-3 border">Recursively Enumerable Languages</td>
            <td className="p-3 border">Most powerful</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Computability Theory */}
    <h2 className="text-3xl font-bold mt-8">2. Computability Theory</h2>
    <p className="leading-relaxed">
      Computability theory (also known as recursion theory) studies the fundamental limits of
      computation. It classifies problems based on whether they can be solved by any algorithm.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Key Concepts</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Decidable Problems:</strong> Problems for which an algorithm exists that always halts with the correct answer</li>
      <li><strong>Undecidable Problems:</strong> Problems for which no algorithm can always determine the correct answer</li>
      <li><strong>Semi-decidable Problems:</strong> Problems where an algorithm exists that halts and accepts for "yes" instances</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Famous Undecidable Problems</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>The Halting Problem</li>
      <li>Post Correspondence Problem</li>
      <li>Equivalence of CFGs</li>
      <li>Ambiguity of CFGs</li>
    </ul>

    {/* Complexity Theory */}
    <h2 className="text-3xl font-bold mt-8">3. Complexity Theory</h2>
    <p className="leading-relaxed">
      Complexity theory classifies problems based on the computational resources required to solve them.
      It provides a framework for understanding the inherent difficulty of computational problems.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Complexity Classes</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Class</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">P</td>
            <td className="p-3 border">Problems solvable in polynomial time</td>
            <td className="p-3 border">Sorting, Shortest path</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NP</td>
            <td className="p-3 border">Problems verifiable in polynomial time</td>
            <td className="p-3 border">SAT, Graph coloring</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NP-Complete</td>
            <td className="p-3 border">Hardest problems in NP</td>
            <td className="p-3 border">3-SAT, Vertex Cover</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NP-Hard</td>
            <td className="p-3 border">At least as hard as NP-Complete</td>
            <td className="p-3 border">Halting Problem, TSP optimization</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Historical Background */}
    <h2 className="text-3xl font-bold mt-8">Historical Background</h2>
    <p className="leading-relaxed">
      The theory of computation has its roots in the early 20th century, with contributions from
      several mathematicians and logicians:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Alan Turing (1936):</strong> Introduced the Turing Machine, a mathematical model of computation</li>
      <li><strong>Alonzo Church (1936):</strong> Developed Lambda Calculus, another model of computation</li>
      <li><strong>Stephen Kleene (1956):</strong> Contributed to the theory of regular expressions and automata</li>
      <li><strong>Noam Chomsky (1956):</strong> Developed the Chomsky hierarchy of formal grammars</li>
      <li><strong>Michael Rabin & Dana Scott (1959):</strong> Proved the equivalence of DFA and NFA</li>
    </ul>

    {/* Formal Language Hierarchy Diagram */}
    <h2 className="text-3xl font-bold mt-8">Computational Hierarchy</h2>
    <p className="leading-relaxed">
      The relationship between different types of automata and languages can be visualized as a hierarchy:
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`                    +------------------------------------------+
                    |        Recursively Enumerable            |
                    |           (Turing Machine)               |
                    |                                          |
                    |    +--------------------------------+    |
                    |    |      Recursive (Decidable)     |    |
                    |    |                                |    |
                    |    |   +-----------------------+    |    |
                    |    |   |  Context-Sensitive    |    |    |
                    |    |   |       (LBA)           |    |    |
                    |    |   |                       |    |    |
                    |    |   |  +----------------+   |    |    |
                    |    |   |  | Context-Free   |   |    |    |
                    |    |   |  |    (PDA)       |   |    |    |
                    |    |   |  |                |   |    |    |
                    |    |   |  |  +----------+  |   |    |    |
                    |    |   |  |  | Regular  |  |   |    |    |
                    |    |   |  |  |  (FA)    |  |   |    |    |
                    |    |   |  |  +----------+  |   |    |    |
                    |    |   |  +----------------+   |    |    |
                    |    |   +-----------------------+    |    |
                    |    +--------------------------------+    |
                    +------------------------------------------+`}
      </pre>
    </div>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Theory of Computation</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Compiler Design:</strong> Lexical analysis uses finite automata, parsing uses context-free grammars</li>
      <li><strong>Pattern Matching:</strong> Regular expressions power search engines and text editors</li>
      <li><strong>Programming Languages:</strong> Language syntax is defined using formal grammars</li>
      <li><strong>Artificial Intelligence:</strong> Understanding computational limits in AI and machine learning</li>
      <li><strong>Cryptography:</strong> Computational hardness assumptions underpin security protocols</li>
      <li><strong>Database Systems:</strong> Query optimization and language processing</li>
      <li><strong>Network Protocols:</strong> Protocol verification using automata models</li>
    </ul>

    {/* Key Terminology */}
    <h2 className="text-3xl font-bold mt-8">Key Terminology</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Term</th>
            <th className="p-3 border">Definition</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Alphabet</td>
            <td className="p-3 border">A finite, non-empty set of symbols</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">String</td>
            <td className="p-3 border">A finite sequence of symbols from an alphabet</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Language</td>
            <td className="p-3 border">A set of strings over an alphabet</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Grammar</td>
            <td className="p-3 border">A set of rules for generating strings in a language</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Automaton</td>
            <td className="p-3 border">An abstract machine that recognizes patterns in strings</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Computation</td>
            <td className="p-3 border">A sequence of configurations an automaton goes through on an input</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Summary */}
    <h2 className="text-3xl font-bold mt-8">Summary</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>Theory of Computation provides the mathematical foundation for computer science</li>
      <li>It consists of three main areas: Automata Theory, Computability Theory, and Complexity Theory</li>
      <li>Different types of automata have different computational powers</li>
      <li>Some problems are fundamentally unsolvable (undecidable)</li>
      <li>Complexity theory helps us understand the inherent difficulty of problems</li>
    </ul>

    {/* Key Points to Remember */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Every DFA is also an NFA, but not vice versa (in terms of structure, not power)</li>
        <li>Regular languages are the least powerful class in the Chomsky hierarchy</li>
        <li>Turing machines can simulate any other computational model</li>
        <li>The halting problem is the canonical example of an undecidable problem</li>
        <li>P vs NP is one of the most important open problems in computer science</li>
      </ul>
    </div>

  </div>
);

export default TOCIntroduction;
