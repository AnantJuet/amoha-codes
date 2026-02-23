import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Compiler Design Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Compiler Design Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Welcome to the comprehensive Compiler Design tutorial on Amoha Codes. A compiler is a crucial piece of software
      that translates high-level programming language code into machine code or intermediate code that can be executed
      by a computer. This tutorial covers all fundamental and advanced concepts required for academic excellence,
      technical interviews, and understanding how programming languages are implemented.
    </p>

    {/* What You Will Learn */}
    <h2 className="text-3xl font-bold mt-8">What You Will Learn</h2>
    <p className="leading-relaxed">
      This tutorial provides in-depth coverage of compiler design concepts, from lexical analysis to code generation
      and optimization. Whether you're preparing for university examinations, technical interviews, or seeking to
      understand how compilers transform source code into executable programs, this guide will help you master the subject.
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
            <td className="p-3 border">Compiler basics, phases, compilers vs interpreters, bootstrapping</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Lexical Analysis</td>
            <td className="p-3 border">Tokens, lexemes, regular expressions, finite automata, LEX</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Syntax Analysis</td>
            <td className="p-3 border">Parsing, CFG, top-down, bottom-up, LL, LR parsers, YACC</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Semantic Analysis</td>
            <td className="p-3 border">Type checking, symbol tables, syntax-directed translation</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Intermediate Code</td>
            <td className="p-3 border">Three-address code, DAG, quadruples, backpatching</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Code Optimization</td>
            <td className="p-3 border">Local, global, loop optimizations, data flow analysis</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Code Generation</td>
            <td className="p-3 border">Target code, register allocation, instruction selection</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">Runtime Environments</td>
            <td className="p-3 border">Activation records, heap management, garbage collection</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Why Learn Compiler Design */}
    <h2 className="text-3xl font-bold mt-8">Why Learn Compiler Design?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Understanding Language Implementation:</strong> Learn how programming languages are translated into executable code</li>
      <li><strong>Better Programming Skills:</strong> Understanding compilers helps write more efficient and optimized code</li>
      <li><strong>Interview Preparation:</strong> A core subject in technical interviews for compiler, systems, and language development roles</li>
      <li><strong>Academic Requirement:</strong> Mandatory subject in computer science curricula worldwide</li>
      <li><strong>Tool Development:</strong> Knowledge enables building interpreters, transpilers, and domain-specific languages</li>
      <li><strong>Performance Optimization:</strong> Understanding compiler optimizations helps in performance-critical applications</li>
    </ul>

    {/* Prerequisites */}
    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Strong understanding of data structures (trees, graphs, hash tables)</li>
      <li>Familiarity with programming concepts (preferably C or C++)</li>
      <li>Basic knowledge of automata theory and formal languages</li>
      <li>Understanding of computer organization and assembly language basics</li>
      <li>Knowledge of discrete mathematics</li>
    </ul>

    {/* Key Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Compiler Design Knowledge</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Language Development:</strong> Creating new programming languages or domain-specific languages (DSLs)</li>
      <li><strong>IDE Development:</strong> Building syntax highlighters, code analyzers, and refactoring tools</li>
      <li><strong>Static Analysis:</strong> Developing tools for bug detection, security analysis, and code quality</li>
      <li><strong>Query Optimization:</strong> Database query compilers and optimizers</li>
      <li><strong>JIT Compilation:</strong> Just-in-time compilers for virtual machines (JVM, V8)</li>
      <li><strong>Hardware Design:</strong> High-level synthesis tools that compile to hardware descriptions</li>
    </ul>

    {/* Key Concepts Overview */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts Overview</h2>
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold">Phases of a Compiler</h3>
        <p className="leading-relaxed">
          A compiler operates in several phases: lexical analysis (scanning), syntax analysis (parsing), semantic analysis,
          intermediate code generation, code optimization, and code generation. Each phase transforms the source code
          progressively toward machine code.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Front-End vs Back-End</h3>
        <p className="leading-relaxed">
          The front-end (lexical, syntax, semantic analysis) is language-dependent, while the back-end (optimization,
          code generation) is machine-dependent. This separation allows retargeting compilers to different architectures.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Intermediate Representations</h3>
        <p className="leading-relaxed">
          Compilers use intermediate representations (IR) like three-address code, abstract syntax trees, or SSA form
          to bridge the gap between source code and target machine code, enabling portable optimizations.
        </p>
      </div>
    </div>

    {/* Getting Started */}
    <h2 className="text-3xl font-bold mt-8">Getting Started</h2>
    <p className="leading-relaxed">
      Begin your journey by exploring the Introduction section, which covers the fundamental concepts of compilers
      and language processors. Each topic builds upon previous concepts, so following the sequential order is
      recommended for beginners. Experienced learners can navigate directly to specific topics of interest using the sidebar.
    </p>

    <p className="leading-relaxed mt-4">
      Each topic includes detailed explanations, diagrams, algorithms, and examples to reinforce your understanding.
      The content is designed to match the depth and rigor expected in academic courses and technical interviews,
      with practical insights into real-world compiler implementation.
    </p>
  </div>
);

export default Home;
