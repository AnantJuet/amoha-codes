import React from "react";

const CompilerVsInterpreter: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Compiler vs Interpreter
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Compilers and interpreters are both language processors that translate high-level programming
      languages into machine-understandable form. However, they differ significantly in their approach
      to translation and execution.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Compiler?</h2>
    <p className="leading-relaxed">
      A <strong>compiler</strong> reads the entire source program, analyzes it, and translates it
      completely into machine code before any execution takes place. The output is a standalone
      executable file that can run independently.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Source Code → [COMPILER] → Object Code → [LINKER] → Executable
                  ↓
           Error Messages`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">What is an Interpreter?</h2>
    <p className="leading-relaxed">
      An <strong>interpreter</strong> reads, analyzes, and executes the source code line by line
      (or statement by statement). It does not produce a separate executable file; instead, it
      directly executes the instructions.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Source Code → [INTERPRETER] → Immediate Execution
                   ↓
            Error Messages (at runtime)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Compiler</th>
            <th className="p-3 border">Interpreter</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Translation Method</td>
            <td className="p-3 border">Translates entire program at once</td>
            <td className="p-3 border">Translates and executes line by line</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Output</td>
            <td className="p-3 border">Produces executable file (object code)</td>
            <td className="p-3 border">No separate output file</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Execution Speed</td>
            <td className="p-3 border">Faster (code already translated)</td>
            <td className="p-3 border">Slower (translation at runtime)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Memory Requirement</td>
            <td className="p-3 border">More memory needed</td>
            <td className="p-3 border">Less memory needed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Error Detection</td>
            <td className="p-3 border">Shows all errors after compilation</td>
            <td className="p-3 border">Stops at first error encountered</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Debugging</td>
            <td className="p-3 border">Harder to debug</td>
            <td className="p-3 border">Easier to debug</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Source Code Required</td>
            <td className="p-3 border">Not needed after compilation</td>
            <td className="p-3 border">Always required for execution</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Portability</td>
            <td className="p-3 border">Platform-specific executable</td>
            <td className="p-3 border">More portable (with interpreter)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Examples</td>
            <td className="p-3 border">C, C++, Rust, Go</td>
            <td className="p-3 border">Python, Ruby, JavaScript</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Compiler</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Faster Execution:</strong> Once compiled, the program runs at native speed</li>
      <li><strong>Code Optimization:</strong> Compilers can apply various optimizations</li>
      <li><strong>Source Code Protection:</strong> Only executable is distributed</li>
      <li><strong>Error Detection:</strong> All errors found before execution</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages of Interpreter</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Easier Debugging:</strong> Immediate feedback on errors</li>
      <li><strong>Platform Independence:</strong> Same code runs anywhere with interpreter</li>
      <li><strong>Dynamic Typing:</strong> Supports flexible variable types</li>
      <li><strong>Interactive Development:</strong> REPL (Read-Eval-Print Loop) support</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Hybrid Approaches</h2>
    <p className="leading-relaxed">
      Modern languages often use hybrid approaches combining both compilation and interpretation:
    </p>

    <h3 className="text-2xl font-semibold mt-6">Just-In-Time (JIT) Compilation</h3>
    <p className="leading-relaxed">
      JIT compilers translate code at runtime, combining the flexibility of interpretation with
      the performance of compilation.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Source Code → Bytecode → JIT Compiler → Native Code
                              ↓
                    Execution (optimized)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Bytecode Compilation</h3>
    <p className="leading-relaxed">
      Languages like Java compile to an intermediate bytecode, which is then interpreted or
      JIT-compiled by a virtual machine.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Java: .java → javac → .class (bytecode) → JVM → Execution

Python: .py → Python → .pyc (bytecode) → PVM → Execution`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Which?</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Use Compiler When</th>
            <th className="p-3 border">Use Interpreter When</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Performance is critical</td>
            <td className="p-3 border">Rapid prototyping needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Distributing closed-source software</td>
            <td className="p-3 border">Cross-platform compatibility important</td>
          </tr>
          <tr>
            <td className="p-3 border">System-level programming</td>
            <td className="p-3 border">Interactive development</td>
          </tr>
          <tr>
            <td className="p-3 border">Resource-constrained environments</td>
            <td className="p-3 border">Scripting and automation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Compilers translate entire programs before execution; interpreters execute line by line</li>
        <li>Compiled programs run faster; interpreted programs are more flexible</li>
        <li>Compilers produce standalone executables; interpreters require source code</li>
        <li>Modern languages often use hybrid approaches (JIT compilation, bytecode)</li>
        <li>Choice depends on requirements: performance vs. development speed</li>
      </ul>
    </div>
  </div>
);

export default CompilerVsInterpreter;
