import React from "react";

const Bootstrapping: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Bootstrapping in Compilers
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Bootstrapping</strong> is the process of writing a compiler in the language it compiles.
      This creates a self-hosting compiler - a compiler that can compile its own source code. It's a
      fundamental technique in compiler development that demonstrates the compiler's completeness and correctness.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Bootstrapping?</h2>
    <p className="leading-relaxed">
      Bootstrapping refers to the process of creating a self-compiling compiler. The idea is to write
      a compiler for language L using language L itself. This seems like a chicken-and-egg problem,
      but it can be solved through a systematic process.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Bootstrapping Process</h2>
    <ol className="list-decimal list-inside mt-2 space-y-3">
      <li>Write a simple compiler for language L in an existing language M (e.g., write a C compiler in assembly)</li>
      <li>Use this compiler to compile a more complete compiler written in L</li>
      <li>The new compiler can then compile itself (self-hosting)</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">T-Diagram Notation</h2>
    <p className="leading-relaxed">
      T-diagrams (or tombstone diagrams) are used to visualize the bootstrapping process. They show
      three key pieces of information about a compiler:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>S:</strong> Source Language (what the compiler compiles)</li>
      <li><strong>T:</strong> Target Language (what the compiler produces)</li>
      <li><strong>I:</strong> Implementation Language (what the compiler is written in)</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`T-Diagram Representation:

    +-------+
    |   S   |  ← Source Language
    +---+---+
        |
       \\|/
    +-------+
    |   T   |  ← Target Language
    +-------+
        I      ← Implementation Language

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

    <h2 className="text-3xl font-bold mt-8">Bootstrapping Example</h2>
    <p className="leading-relaxed">
      Let's say we want to create a self-hosting compiler for a new language called "NewLang":
    </p>

    <h3 className="text-2xl font-semibold mt-6">Step 1: Initial Compiler</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Write a simple NewLang compiler in C:

    +----------+
    | NewLang  |
    +----+-----+
         |
        \\|/
    +----------+
    |    x86   |
    +----------+
         C

This compiler (C1) translates NewLang to x86, written in C.`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Step 2: Compiler in NewLang</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Write a NewLang compiler in NewLang:

    +----------+
    | NewLang  |
    +----+-----+
         |
        \\|/
    +----------+
    |    x86   |
    +----------+
      NewLang

This is the source code (S) for our self-hosting compiler.`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Step 3: Bootstrap</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Compile S using C1:

    +----------+          +----------+
    | NewLang  |          | NewLang  |
    +----+-----+    +     +----+-----+
         |                     |
        \\|/                   \\|/
    +----------+          +----------+
    |    x86   |          |    x86   |
    +----------+          +----------+
      NewLang                   C

         ↓ compiles to ↓

    +----------+
    | NewLang  |
    +----+-----+
         |
        \\|/
    +----------+
    |    x86   |
    +----------+
        x86

Now we have a self-hosting compiler!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Bootstrap?</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Proves Language Completeness:</strong> If you can write a compiler in the language, the language is expressive enough for complex tasks</li>
      <li><strong>Self-Testing:</strong> The compiler tests itself during the bootstrapping process</li>
      <li><strong>Portability:</strong> Once bootstrapped, the compiler can be ported to new platforms more easily</li>
      <li><strong>Maintenance:</strong> Compiler developers work in the language they know best</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Historical Examples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Language</th>
            <th className="p-3 border">Original Implementation</th>
            <th className="p-3 border">Now Self-Hosting</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">C</td>
            <td className="p-3 border">Assembly</td>
            <td className="p-3 border">Yes (GCC)</td>
          </tr>
          <tr>
            <td className="p-3 border">Go</td>
            <td className="p-3 border">C</td>
            <td className="p-3 border">Yes (since Go 1.5)</td>
          </tr>
          <tr>
            <td className="p-3 border">Rust</td>
            <td className="p-3 border">OCaml</td>
            <td className="p-3 border">Yes (rustc)</td>
          </tr>
          <tr>
            <td className="p-3 border">Pascal</td>
            <td className="p-3 border">FORTRAN</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cross-Compilation and Bootstrapping</h2>
    <p className="leading-relaxed">
      Bootstrapping is often combined with cross-compilation to port compilers to new platforms:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`To port compiler from Platform A to Platform B:

1. Use existing compiler on Platform A to cross-compile
   the compiler source for Platform B

2. Transfer the compiled binary to Platform B

3. On Platform B, the compiler can now compile itself

This is how GCC is ported to new architectures.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Bootstrapping creates a self-hosting compiler written in its own language</li>
        <li>T-diagrams visualize source, target, and implementation languages</li>
        <li>The process requires an initial compiler in another language</li>
        <li>Bootstrapping proves language completeness and aids maintenance</li>
        <li>Most major languages have self-hosting compilers (C, Go, Rust, etc.)</li>
      </ul>
    </div>
  </div>
);

export default Bootstrapping;
