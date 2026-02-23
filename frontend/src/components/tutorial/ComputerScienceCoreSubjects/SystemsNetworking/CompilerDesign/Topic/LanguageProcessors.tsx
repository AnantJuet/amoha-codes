import React from "react";

const LanguageProcessors: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Language Processors
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Language processors are programs that process source code in various ways to convert it into a form that can be executed by a computer. They bridge the gap between human-readable programming languages and machine-executable instructions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Language Processors</h2>

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
            <td className="p-3 border font-semibold">Compiler</td>
            <td className="p-3 border">Translates entire source code to target code before execution</td>
            <td className="p-3 border">GCC, Clang, javac</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Interpreter</td>
            <td className="p-3 border">Executes source code line by line without producing object code</td>
            <td className="p-3 border">Python, Ruby, JavaScript</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Assembler</td>
            <td className="p-3 border">Converts assembly language to machine code</td>
            <td className="p-3 border">NASM, MASM, GAS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Linker</td>
            <td className="p-3 border">Combines object files into a single executable</td>
            <td className="p-3 border">ld, link.exe</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Loader</td>
            <td className="p-3 border">Loads executable into memory for execution</td>
            <td className="p-3 border">OS Loader</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Preprocessor</td>
            <td className="p-3 border">Processes directives before compilation</td>
            <td className="p-3 border">C Preprocessor (cpp)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Compiler</h2>
    <p className="leading-relaxed">
      A <strong>compiler</strong> translates the entire source program into target code before execution.
      The compiler reads the complete source code, analyzes it, and produces an equivalent target program
      (machine code or assembly). The output can be executed independently of the compiler.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Source Code → Compiler → Object Code → Executable

Key characteristics:
• Processes entire program at once
• Produces standalone executable
• Errors reported after complete analysis
• Faster execution after compilation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Interpreter</h2>
    <p className="leading-relaxed">
      An <strong>interpreter</strong> executes the source code line by line, translating and executing
      each statement immediately. Unlike a compiler, it does not produce a separate executable file.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Source Code → Interpreter → Immediate Execution

Key characteristics:
• Executes line by line
• No separate object code generated
• Easier debugging (immediate feedback)
• Slower execution compared to compiled code`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Assembler</h2>
    <p className="leading-relaxed">
      An <strong>assembler</strong> translates assembly language programs into machine code. Assembly
      language uses mnemonics (symbolic codes) to represent machine instructions.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Assembly Language → Assembler → Machine Code

Example:
MOV AX, 5    →   B8 05 00 (machine code)
ADD AX, BX   →   01 D8`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Linker</h2>
    <p className="leading-relaxed">
      A <strong>linker</strong> combines multiple object files and libraries into a single executable file.
      It resolves external references between different modules.
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Combines object files from separate compilations</li>
      <li>Resolves external symbol references</li>
      <li>Assigns final memory addresses</li>
      <li>Links with library functions</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Loader</h2>
    <p className="leading-relaxed">
      A <strong>loader</strong> loads the executable program into main memory and prepares it for execution.
      It allocates memory and initializes registers.
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Reads executable from disk</li>
      <li>Allocates memory space</li>
      <li>Performs relocation if needed</li>
      <li>Transfers control to program entry point</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Preprocessor</h2>
    <p className="leading-relaxed">
      A <strong>preprocessor</strong> processes directives before actual compilation. It handles file
      inclusion, macro expansion, and conditional compilation.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Preprocessor functions:
• File inclusion: #include <stdio.h>
• Macro expansion: #define MAX 100
• Conditional compilation: #ifdef, #endif
• Line control: #line`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Translation Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Source Code (.c)
      |
      v
Preprocessor
      |
      v
Expanded Source Code
      |
      v
Compiler
      |
      v
Assembly Code (.s)
      |
      v
Assembler
      |
      v
Object Code (.o)
      |
      v
Linker (+ Libraries)
      |
      v
Executable (.exe)
      |
      v
Loader
      |
      v
Execution in Memory`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Compiler vs Interpreter</h2>
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
            <td className="p-3 border">Translation</td>
            <td className="p-3 border">Entire program at once</td>
            <td className="p-3 border">Line by line</td>
          </tr>
          <tr>
            <td className="p-3 border">Output</td>
            <td className="p-3 border">Executable file</td>
            <td className="p-3 border">No separate output</td>
          </tr>
          <tr>
            <td className="p-3 border">Execution Speed</td>
            <td className="p-3 border">Faster</td>
            <td className="p-3 border">Slower</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Detection</td>
            <td className="p-3 border">After full scan</td>
            <td className="p-3 border">During execution</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">More required</td>
            <td className="p-3 border">Less required</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Language processors convert source code into executable form</li>
        <li>Compilers translate entire programs; interpreters execute line by line</li>
        <li>Assemblers convert assembly language to machine code</li>
        <li>Linkers combine object files; loaders load programs into memory</li>
        <li>Preprocessors handle directives before compilation</li>
      </ul>
    </div>
  </div>
);

export default LanguageProcessors;
