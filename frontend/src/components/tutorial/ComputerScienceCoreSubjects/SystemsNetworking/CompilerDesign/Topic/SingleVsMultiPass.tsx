import React from "react";

const SingleVsMultiPass: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Single Pass vs Multi Pass Compiler
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The process of compilation can be organized in different ways depending on how the source
      program is analyzed and translated. One common classification is based on the number of
      times the compiler processes the program during compilation - known as <strong>compiler passes</strong>.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Compiler Pass?</h2>
    <p className="leading-relaxed">
      A <strong>compiler pass</strong> refers to a complete traversal of the source program or its
      intermediate representation. During each pass, the compiler performs specific tasks such as
      lexical analysis, parsing, semantic analysis, optimization, or code generation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Single-Pass Compiler</h2>
    <p className="leading-relaxed">
      A <strong>single-pass compiler</strong> reads the source code only once and completes all
      compilation steps during this single read. It produces output immediately without going back
      to the code.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Single-Pass Compiler Structure:

+--------------------------------------------------+
|                  SINGLE PASS                      |
|  +--------+  +--------+  +--------+  +--------+  |
|  | Lexer  |→ | Parser |→ |Semantic|→ |CodeGen |  |
|  +--------+  +--------+  +--------+  +--------+  |
+--------------------------------------------------+
       ↓                                    ↓
  Source Code                         Target Code`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Characteristics</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Source code is processed only once</li>
      <li>Faster compilation time</li>
      <li>Simple compiler structure</li>
      <li>Limited optimization and error handling</li>
      <li>Less memory requirement</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Limitations</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Limited context restricts effective optimization</li>
      <li>Forward references are difficult to handle</li>
      <li>Grammar must be simple and restricted</li>
      <li>Cannot perform complex analysis</li>
    </ul>

    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Note:</strong> Single pass compilers are rare in modern practice. Early Pascal
        compilers were designed as single-pass to work within memory constraints of the time.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Pass (Two-Pass) Compiler</h2>
    <p className="leading-relaxed">
      A <strong>multi-pass compiler</strong> processes the source code or its intermediate
      representation multiple times. Each pass performs specific tasks, and the output of one
      pass becomes the input for the next.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Two-Pass Compiler Structure:

Pass 1 (Front End - Analysis):
+------------------------------------------+
|  +--------+  +--------+  +--------+      |
|  | Lexer  |→ | Parser |→ |Semantic|→ IR  |
|  +--------+  +--------+  +--------+      |
+------------------------------------------+
                                     ↓
                            Intermediate Code
                                     ↓
Pass 2 (Back End - Synthesis):
+------------------------------------------+
|  +--------+  +--------+  +--------+      |
|  |Optimize|→ |CodeGen |→ |Assemble|      |
|  +--------+  +--------+  +--------+      |
+------------------------------------------+
                                     ↓
                              Target Code`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Characteristics</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Multiple traversals of source/IR</li>
      <li>Better optimization capabilities</li>
      <li>Can handle forward references</li>
      <li>More memory and time required</li>
      <li>Modular design (front end + back end)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Single-Pass</th>
            <th className="p-3 border">Multi-Pass</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Passes</td>
            <td className="p-3 border">One traversal</td>
            <td className="p-3 border">Multiple traversals</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Speed</td>
            <td className="p-3 border">Faster compilation</td>
            <td className="p-3 border">Slower compilation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Memory</td>
            <td className="p-3 border">Less memory needed</td>
            <td className="p-3 border">More memory needed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Optimization</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Extensive</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Error Detection</td>
            <td className="p-3 border">Basic</td>
            <td className="p-3 border">Comprehensive</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Forward References</td>
            <td className="p-3 border">Difficult to handle</td>
            <td className="p-3 border">Easily handled</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Code Quality</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Examples</td>
            <td className="p-3 border">Early Pascal</td>
            <td className="p-3 border">GCC, LLVM, javac</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Multi-Pass Design</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Different Languages, Same Backend</h3>
    <p className="leading-relaxed">
      For different programming languages targeting the same machine, only the front end needs
      to change while the back end remains the same.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`C Frontend    ─┐
C++ Frontend  ─┼─→ Common Backend → x86 Code
Rust Frontend ─┘

Example: LLVM supports multiple languages with one backend`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Same Language, Different Backends</h3>
    <p className="leading-relaxed">
      For the same language targeting different machines, only the back end needs to change
      while the front end remains the same.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`                  ┌─→ x86 Backend   → x86 Code
C Frontend ──────→├─→ ARM Backend   → ARM Code
                  └─→ RISC-V Backend → RISC-V Code

Example: GCC supports multiple architectures`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Structures Used</h2>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Symbol Table:</strong> Stores information about identifiers</li>
      <li><strong>Literal Table:</strong> Stores constant values</li>
      <li><strong>Token Stream:</strong> Output of lexical analysis</li>
      <li><strong>Parse Tree/AST:</strong> Intermediate representation</li>
      <li><strong>Intermediate Code:</strong> Platform-independent representation</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Single-pass compilers are faster but offer limited optimization</li>
        <li>Multi-pass compilers provide better code quality and error detection</li>
        <li>Modern compilers typically use multiple passes for optimization</li>
        <li>Multi-pass design enables language and platform independence</li>
        <li>The front end is language-dependent; the back end is machine-dependent</li>
      </ul>
    </div>
  </div>
);

export default SingleVsMultiPass;
