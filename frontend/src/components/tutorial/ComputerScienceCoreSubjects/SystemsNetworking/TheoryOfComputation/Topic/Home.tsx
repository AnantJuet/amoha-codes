import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Theory of Computation Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Theory of Computation Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Welcome to the comprehensive Theory of Computation tutorial on Amoha Codes. Theory of Computation (TOC) is a
      fundamental branch of computer science that deals with how efficiently problems can be solved using algorithms
      and computational models. This tutorial covers all fundamental and advanced concepts required for academic
      excellence and technical interviews.
    </p>

    {/* What You Will Learn */}
    <h2 className="text-3xl font-bold mt-8">What You Will Learn</h2>
    <p className="leading-relaxed">
      This tutorial provides in-depth coverage of automata theory, formal languages, computability, and complexity
      theory. Whether you're preparing for university examinations, GATE, technical interviews, or seeking to
      understand the theoretical foundations of computer science, this guide will help you master the subject.
    </p>

    {/* Course Structure */}
    <h2 className="text-3xl font-bold mt-8">Course Structure</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S.No</th>
            <th className="p-3 border">Topic</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Introduction</td>
            <td className="p-3 border">Alphabet, strings, languages, Chomsky hierarchy</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Finite Automata</td>
            <td className="p-3 border">DFA, NFA, Epsilon-NFA, conversions, minimization</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Regular Expressions</td>
            <td className="p-3 border">RE operations, equivalence with FA, pumping lemma</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Context-Free Grammars</td>
            <td className="p-3 border">CFG, derivations, ambiguity, CNF, GNF</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Pushdown Automata</td>
            <td className="p-3 border">PDA, DPDA, equivalence with CFG</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Turing Machines</td>
            <td className="p-3 border">TM types, Universal TM, Church-Turing thesis</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Decidability</td>
            <td className="p-3 border">Decidable, undecidable problems, Rice's theorem</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">Complexity Theory</td>
            <td className="p-3 border">P, NP, NP-Complete, NP-Hard, reductions</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Why Learn Theory of Computation */}
    <h2 className="text-3xl font-bold mt-8">Why Learn Theory of Computation?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Theoretical Foundation:</strong> Understanding the mathematical foundations of computer science</li>
      <li><strong>Compiler Design:</strong> Essential knowledge for building compilers, interpreters, and parsers</li>
      <li><strong>Algorithm Analysis:</strong> Understanding what problems can and cannot be solved efficiently</li>
      <li><strong>GATE Preparation:</strong> A core subject with significant weightage in competitive exams</li>
      <li><strong>Interview Preparation:</strong> Important for technical interviews at top tech companies</li>
      <li><strong>Research Foundation:</strong> Essential for pursuing research in theoretical computer science</li>
    </ul>

    {/* Prerequisites */}
    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Basic understanding of discrete mathematics (sets, relations, functions)</li>
      <li>Familiarity with mathematical proofs and logic</li>
      <li>Basic knowledge of data structures and algorithms</li>
      <li>Understanding of graph theory concepts</li>
    </ul>

    {/* Key Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of TOC</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Compiler Construction:</strong> Lexical analysis, parsing, and syntax analysis</li>
      <li><strong>Pattern Matching:</strong> Regular expressions in text editors and search engines</li>
      <li><strong>Natural Language Processing:</strong> Grammar-based parsing and language modeling</li>
      <li><strong>Cryptography:</strong> Understanding computational hardness for security</li>
      <li><strong>Artificial Intelligence:</strong> Decision problems and computational limits</li>
    </ul>

    {/* Key Concepts Overview */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts Overview</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Automaton</th>
            <th className="p-3 border">Language Class</th>
            <th className="p-3 border">Grammar Type</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Finite Automata (DFA/NFA)</td>
            <td className="p-3 border">Regular Languages</td>
            <td className="p-3 border">Type 3 (Regular Grammar)</td>
          </tr>
          <tr>
            <td className="p-3 border">Pushdown Automata (PDA)</td>
            <td className="p-3 border">Context-Free Languages</td>
            <td className="p-3 border">Type 2 (Context-Free Grammar)</td>
          </tr>
          <tr>
            <td className="p-3 border">Linear Bounded Automata</td>
            <td className="p-3 border">Context-Sensitive Languages</td>
            <td className="p-3 border">Type 1 (Context-Sensitive Grammar)</td>
          </tr>
          <tr>
            <td className="p-3 border">Turing Machine</td>
            <td className="p-3 border">Recursively Enumerable Languages</td>
            <td className="p-3 border">Type 0 (Unrestricted Grammar)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Getting Started */}
    <h2 className="text-3xl font-bold mt-8">Getting Started</h2>
    <p className="leading-relaxed">
      Begin your journey by exploring the Introduction section, which covers the fundamental concepts of automata
      theory and formal languages. Each topic builds upon previous concepts, so following the sequential order is
      recommended for beginners. Experienced learners can navigate directly to specific topics of interest using
      the sidebar.
    </p>

    <p className="leading-relaxed mt-4">
      Each topic includes detailed explanations, diagrams, examples, and practice problems to reinforce your
      understanding. The content is designed to match the depth and rigor expected in academic courses, GATE
      examination, and technical interviews.
    </p>
  </div>
);

export default Home;
