import React from "react";

const CompilerIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction to Compilers ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Compilers
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>compiler</strong> is a specialized software program that translates source code written in a
      high-level programming language (like C, C++, Java) into machine code, assembly language, or an
      intermediate code that can be executed by a computer. Compilers are fundamental tools in software
      development, bridging the gap between human-readable code and machine-executable instructions.
    </p>

    {/* What is a Compiler */}
    <h2 className="text-3xl font-bold mt-8">What is a Compiler?</h2>
    <p className="leading-relaxed">
      A compiler reads the entire source program, analyzes it, and produces an equivalent target program.
      Unlike interpreters, which execute code line by line, compilers process the complete source code
      before any execution takes place. The output of a compiler is typically an executable file or
      object code that can run independently of the compiler.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Source Program (High-Level Language)
          |
          v
    +-------------+
    |   COMPILER  |
    +-------------+
          |
          v
Target Program (Machine Code / Assembly)`}
      </pre>
    </div>

    {/* Language Processors */}
    <h2 className="text-3xl font-bold mt-8">Language Processors</h2>
    <p className="leading-relaxed">
      Language processors are programs that process source code in various ways. The main types include:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Processor</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Compiler</td>
            <td className="p-3 border">Translates entire source code to target code before execution</td>
            <td className="p-3 border">GCC, Clang, javac</td>
          </tr>
          <tr>
            <td className="p-3 border">Interpreter</td>
            <td className="p-3 border">Executes source code line by line without producing object code</td>
            <td className="p-3 border">Python, Ruby, JavaScript</td>
          </tr>
          <tr>
            <td className="p-3 border">Assembler</td>
            <td className="p-3 border">Converts assembly language to machine code</td>
            <td className="p-3 border">NASM, MASM, GAS</td>
          </tr>
          <tr>
            <td className="p-3 border">Linker</td>
            <td className="p-3 border">Combines object files into a single executable</td>
            <td className="p-3 border">ld, link.exe</td>
          </tr>
          <tr>
            <td className="p-3 border">Loader</td>
            <td className="p-3 border">Loads executable into memory for execution</td>
            <td className="p-3 border">OS Loader</td>
          </tr>
          <tr>
            <td className="p-3 border">Preprocessor</td>
            <td className="p-3 border">Processes directives before compilation</td>
            <td className="p-3 border">C Preprocessor (cpp)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Types of Compilers */}
    <h2 className="text-3xl font-bold mt-8">Types of Compilers</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Single-Pass Compiler</h3>
    <p className="leading-relaxed">
      A single-pass compiler processes the source code in one pass, generating code as it reads the input.
      This approach is fast but has limitations in handling forward references.
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Faster compilation time</li>
      <li>Less memory requirement</li>
      <li>Cannot optimize code effectively</li>
      <li>Example: Early Pascal compilers</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">2. Multi-Pass Compiler</h3>
    <p className="leading-relaxed">
      A multi-pass compiler processes the source code multiple times, with each pass performing specific tasks.
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Better optimization capabilities</li>
      <li>Can handle forward references</li>
      <li>More memory and time required</li>
      <li>Example: GCC, LLVM</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">3. Cross Compiler</h3>
    <p className="leading-relaxed">
      A cross compiler runs on one platform (host) but generates code for a different platform (target).
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <p className="text-sm">
        <strong>Example:</strong> Compiling code on Windows (x86) to run on ARM-based embedded systems
      </p>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Just-In-Time (JIT) Compiler</h3>
    <p className="leading-relaxed">
      JIT compilers compile code during execution rather than before. They combine aspects of both
      compilation and interpretation.
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Used in Java Virtual Machine (JVM)</li>
      <li>Used in .NET Common Language Runtime (CLR)</li>
      <li>Provides runtime optimization based on actual execution patterns</li>
    </ul>

    {/* Structure of a Compiler */}
    <h2 className="text-3xl font-bold mt-8">Structure of a Compiler</h2>
    <p className="leading-relaxed">
      A compiler is logically divided into two main parts: the <strong>Front End</strong> and the <strong>Back End</strong>.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Front End</th>
            <th className="p-3 border">Back End</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Lexical Analysis</td>
            <td className="p-3 border">Code Optimization</td>
          </tr>
          <tr>
            <td className="p-3 border">Syntax Analysis</td>
            <td className="p-3 border">Code Generation</td>
          </tr>
          <tr>
            <td className="p-3 border">Semantic Analysis</td>
            <td className="p-3 border">Target Code Optimization</td>
          </tr>
          <tr>
            <td className="p-3 border">Intermediate Code Generation</td>
            <td className="p-3 border">-</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="leading-relaxed mt-4">
      The front end is <strong>language-dependent</strong> and analyzes the source code for correctness.
      The back end is <strong>machine-dependent</strong> and generates code for the target architecture.
    </p>

    {/* Compilation Process Example */}
    <h2 className="text-3xl font-bold mt-8">Compilation Process Example</h2>
    <p className="leading-relaxed">
      Consider the following simple C program and how it progresses through compilation:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Source Code (hello.c):</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`#include <stdio.h>

int main() {
    int x = 5;
    int y = 10;
    int sum = x + y;
    printf("Sum = %d\\n", sum);
    return 0;
}`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Compilation Steps:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Step 1: Preprocessing
  - #include <stdio.h> is expanded
  - Macros are replaced

Step 2: Lexical Analysis
  - Tokens: int, main, (, ), {, int, x, =, 5, ;, ...

Step 3: Syntax Analysis
  - Parse tree is constructed
  - Grammar rules are verified

Step 4: Semantic Analysis
  - Type checking (int + int = int)
  - Symbol table entries created

Step 5: Intermediate Code Generation
  - Three-address code generated:
    t1 = 5
    t2 = 10
    t3 = t1 + t2

Step 6: Code Optimization
  - Constant folding: t3 = 15

Step 7: Code Generation
  - Assembly/Machine code generated`}
      </pre>
    </div>

    {/* Bootstrapping */}
    <h2 className="text-3xl font-bold mt-8">Bootstrapping</h2>
    <p className="leading-relaxed">
      <strong>Bootstrapping</strong> is the process of writing a compiler in the language it compiles.
      This creates a self-hosting compiler. The process typically involves:
    </p>

    <ol className="list-decimal list-inside mt-2 space-y-2">
      <li>Write a simple compiler for language L in an existing language M</li>
      <li>Use this compiler to compile a more complete compiler written in L</li>
      <li>The new compiler can then compile itself</li>
    </ol>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">T-Diagram Representation:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`A T-diagram shows:
- Source Language (S)
- Target Language (T)
- Implementation Language (I)

    +-------+
    |   S   |
    +---+---+
        |
       \\|/
    +-------+
    |   T   |
    +-------+
        I

Example: C compiler written in C, producing x86 code
    +-------+
    |   C   |
    +---+---+
        |
       \\|/
    +-------+
    |  x86  |
    +-------+
        C`}
      </pre>
    </div>

    {/* Compiler Construction Tools */}
    <h2 className="text-3xl font-bold mt-8">Compiler Construction Tools</h2>
    <p className="leading-relaxed">
      Several tools help automate parts of the compiler construction process:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Phase</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">LEX / Flex</td>
            <td className="p-3 border">Scanner generator</td>
            <td className="p-3 border">Lexical Analysis</td>
          </tr>
          <tr>
            <td className="p-3 border">YACC / Bison</td>
            <td className="p-3 border">Parser generator</td>
            <td className="p-3 border">Syntax Analysis</td>
          </tr>
          <tr>
            <td className="p-3 border">ANTLR</td>
            <td className="p-3 border">Parser generator (LL)</td>
            <td className="p-3 border">Lexical + Syntax</td>
          </tr>
          <tr>
            <td className="p-3 border">LLVM</td>
            <td className="p-3 border">Compiler infrastructure</td>
            <td className="p-3 border">IR + Optimization + CodeGen</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Applications of Compilers */}
    <h2 className="text-3xl font-bold mt-8">Applications of Compilers</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Programming Language Implementation:</strong> Every programming language needs a compiler or interpreter</li>
      <li><strong>Domain-Specific Languages (DSLs):</strong> SQL, regular expressions, configuration languages</li>
      <li><strong>Hardware Description Languages:</strong> Verilog, VHDL compilers for hardware synthesis</li>
      <li><strong>Query Optimization:</strong> Database query compilers and optimizers</li>
      <li><strong>Static Analysis Tools:</strong> Code analyzers, bug detectors, security scanners</li>
      <li><strong>IDE Features:</strong> Syntax highlighting, code completion, refactoring tools</li>
    </ul>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      Which of the following is NOT a phase of a compiler?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Lexical Analysis</li>
      <li>(B) Syntax Analysis</li>
      <li>(C) Loading</li>
      <li>(D) Code Optimization</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Loading - Loading is performed by the loader, not the compiler.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      A compiler that runs on machine A and produces code for machine B is called:
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Single-pass compiler</li>
      <li>(B) Cross compiler</li>
      <li>(C) Multi-pass compiler</li>
      <li>(D) Incremental compiler</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Cross compiler</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      The process of writing a compiler in the language it compiles is called:
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Linking</li>
      <li>(B) Loading</li>
      <li>(C) Bootstrapping</li>
      <li>(D) Preprocessing</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Bootstrapping</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>A compiler translates high-level source code into machine code or intermediate code</li>
      <li>Compilers have two main parts: front end (language-dependent) and back end (machine-dependent)</li>
      <li>Different types include single-pass, multi-pass, cross compilers, and JIT compilers</li>
      <li>Bootstrapping allows writing a compiler in its own language</li>
      <li>Tools like LEX, YACC, and LLVM help automate compiler construction</li>
    </ul>

  </div>
);

export default CompilerIntroduction;
