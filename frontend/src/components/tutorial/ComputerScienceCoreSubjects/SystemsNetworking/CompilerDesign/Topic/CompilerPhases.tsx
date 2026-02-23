import React from "react";

const CompilerPhases: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Phases of a Compiler ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Phases of a Compiler
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A compiler operates through a series of well-defined phases, each transforming the source program
      from one representation to another. These phases work together to convert high-level source code
      into efficient machine code. Understanding each phase is crucial for compiler design and debugging.
    </p>

    {/* Overview of Phases */}
    <h2 className="text-3xl font-bold mt-8">Overview of Compiler Phases</h2>
    <p className="leading-relaxed">
      The compilation process is divided into six main phases, supported by two auxiliary components:
      the <strong>Symbol Table Manager</strong> and the <strong>Error Handler</strong>.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`                    Source Program
                          |
                          v
                  +----------------+
                  | Lexical        |
                  | Analysis       |<----+
                  +----------------+     |
                          |              |
                          v              |
                  +----------------+     |      +----------------+
                  | Syntax         |     |      |    Symbol      |
                  | Analysis       |<----+----->|    Table       |
                  +----------------+     |      |    Manager     |
                          |              |      +----------------+
                          v              |
                  +----------------+     |      +----------------+
                  | Semantic       |     |      |    Error       |
                  | Analysis       |<----+----->|    Handler     |
                  +----------------+     |      +----------------+
                          |              |
                          v              |
                  +----------------+     |
                  | Intermediate   |<----+
                  | Code Generator |
                  +----------------+
                          |
                          v
                  +----------------+
                  | Code           |
                  | Optimizer      |
                  +----------------+
                          |
                          v
                  +----------------+
                  | Code           |
                  | Generator      |
                  +----------------+
                          |
                          v
                    Target Program`}
      </pre>
    </div>

    {/* Phase 1: Lexical Analysis */}
    <h2 className="text-3xl font-bold mt-8">Phase 1: Lexical Analysis (Scanning)</h2>
    <p className="leading-relaxed">
      The <strong>lexical analyzer</strong> (or scanner) reads the source program character by character
      and groups them into meaningful sequences called <strong>lexemes</strong>. Each lexeme is converted
      into a <strong>token</strong> of the form: <code>&lt;token-name, attribute-value&gt;</code>
    </p>

    <h3 className="text-2xl font-semibold mt-6">Functions of Lexical Analyzer</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Reads input characters from source program</li>
      <li>Groups characters into lexemes</li>
      <li>Produces tokens for each lexeme</li>
      <li>Removes whitespace and comments</li>
      <li>Maintains line numbers for error reporting</li>
      <li>Interacts with the symbol table</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Input: position = initial + rate * 60

Output Tokens:
  <id, 1>         // position (entry 1 in symbol table)
  <=>             // assignment operator
  <id, 2>         // initial (entry 2 in symbol table)
  <+>             // addition operator
  <id, 3>         // rate (entry 3 in symbol table)
  <*>             // multiplication operator
  <num, 60>       // integer constant 60`}
      </pre>
    </div>

    {/* Phase 2: Syntax Analysis */}
    <h2 className="text-3xl font-bold mt-8">Phase 2: Syntax Analysis (Parsing)</h2>
    <p className="leading-relaxed">
      The <strong>syntax analyzer</strong> (or parser) takes the tokens from the lexical analyzer and
      creates a hierarchical structure called a <strong>parse tree</strong> or <strong>syntax tree</strong>.
      It checks if the token sequence follows the grammar rules of the language.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Functions of Syntax Analyzer</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Verifies token arrangements according to grammar</li>
      <li>Constructs parse tree or abstract syntax tree (AST)</li>
      <li>Reports syntax errors</li>
      <li>Groups tokens into grammatical phrases</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Parse Tree for: position = initial + rate * 60</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`              assignment_stmt
                    |
        +-----------+-----------+
        |           |           |
       id          =        expression
   (position)                   |
                    +-----------+-----------+
                    |           |           |
               expression       +       expression
                    |                       |
                   id               +-------+-------+
               (initial)            |       |       |
                               expression   *    expression
                                    |               |
                                   id              num
                                 (rate)            (60)`}
      </pre>
    </div>

    {/* Phase 3: Semantic Analysis */}
    <h2 className="text-3xl font-bold mt-8">Phase 3: Semantic Analysis</h2>
    <p className="leading-relaxed">
      The <strong>semantic analyzer</strong> checks for semantic consistency and gathers type information.
      It uses the syntax tree and symbol table to verify that the program follows the semantic rules of
      the language, such as type checking and scope resolution.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Functions of Semantic Analyzer</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Type Checking:</strong> Ensures operand types are compatible</li>
      <li><strong>Type Coercion:</strong> Automatic type conversion when needed</li>
      <li><strong>Scope Resolution:</strong> Resolves variable and function references</li>
      <li><strong>Array Bound Checking:</strong> Validates array indices</li>
      <li><strong>Flow Control Checking:</strong> Validates control structures</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example - Type Coercion:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Input: position = initial + rate * 60
(where position, initial, rate are float and 60 is int)

Semantic Analysis adds type conversion:
rate * inttoreal(60)

The integer 60 is converted to real/float for the multiplication.`}
      </pre>
    </div>

    {/* Phase 4: Intermediate Code Generation */}
    <h2 className="text-3xl font-bold mt-8">Phase 4: Intermediate Code Generation</h2>
    <p className="leading-relaxed">
      This phase generates an <strong>intermediate representation (IR)</strong> of the source program.
      The IR is machine-independent and facilitates code optimization and portability. Common forms
      include three-address code, quadruples, and triples.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Properties of Intermediate Code</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Easy to produce from the syntax tree</li>
      <li>Easy to translate to target machine code</li>
      <li>Machine-independent</li>
      <li>Suitable for optimization</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Three-Address Code Example:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Input: position = initial + rate * 60

Three-Address Code:
  t1 = inttoreal(60)
  t2 = rate * t1
  t3 = initial + t2
  position = t3

Each instruction has at most:
- One operator
- Three addresses (two operands + one result)`}
      </pre>
    </div>

    {/* Phase 5: Code Optimization */}
    <h2 className="text-3xl font-bold mt-8">Phase 5: Code Optimization</h2>
    <p className="leading-relaxed">
      The <strong>code optimizer</strong> improves the intermediate code to produce faster, smaller, or
      more efficient target code. Optimization can be machine-independent (on IR) or machine-dependent
      (on target code).
    </p>

    <h3 className="text-2xl font-semibold mt-6">Types of Optimizations</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Optimization Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Constant Folding</td>
            <td className="p-3 border">Evaluate constant expressions at compile time</td>
            <td className="p-3 border">x = 2 * 3 becomes x = 6</td>
          </tr>
          <tr>
            <td className="p-3 border">Dead Code Elimination</td>
            <td className="p-3 border">Remove unreachable or unused code</td>
            <td className="p-3 border">Remove code after return statement</td>
          </tr>
          <tr>
            <td className="p-3 border">Common Subexpression</td>
            <td className="p-3 border">Avoid recomputing same expressions</td>
            <td className="p-3 border">a*b computed once, reused</td>
          </tr>
          <tr>
            <td className="p-3 border">Loop Optimization</td>
            <td className="p-3 border">Move invariant code outside loops</td>
            <td className="p-3 border">Hoist loop-invariant calculations</td>
          </tr>
          <tr>
            <td className="p-3 border">Strength Reduction</td>
            <td className="p-3 border">Replace expensive operations with cheaper ones</td>
            <td className="p-3 border">x * 2 becomes x + x or x &lt;&lt; 1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Optimized Code Example:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Before Optimization:
  t1 = inttoreal(60)
  t2 = rate * t1
  t3 = initial + t2
  position = t3

After Optimization:
  t1 = rate * 60.0    // Constant converted at compile time
  position = initial + t1    // Temporary t3 eliminated`}
      </pre>
    </div>

    {/* Phase 6: Code Generation */}
    <h2 className="text-3xl font-bold mt-8">Phase 6: Code Generation</h2>
    <p className="leading-relaxed">
      The <strong>code generator</strong> takes the optimized intermediate code and produces the target
      machine code or assembly code. This phase must consider memory management, register allocation,
      and instruction selection.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Tasks of Code Generator</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Instruction Selection:</strong> Choose appropriate machine instructions</li>
      <li><strong>Register Allocation:</strong> Assign variables to registers efficiently</li>
      <li><strong>Instruction Ordering:</strong> Order instructions to minimize stalls</li>
      <li><strong>Memory Management:</strong> Handle stack and heap allocation</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Generated Assembly Code:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Input Intermediate Code:
  t1 = rate * 60.0
  position = initial + t1

Generated Assembly (x86-like):
  MOVF    R1, rate        ; Load rate into register R1
  MULF    R1, #60.0       ; Multiply R1 by 60.0
  MOVF    R2, initial     ; Load initial into R2
  ADDF    R1, R2          ; Add R2 to R1
  MOVF    position, R1    ; Store result in position`}
      </pre>
    </div>

    {/* Symbol Table */}
    <h2 className="text-3xl font-bold mt-8">Symbol Table Manager</h2>
    <p className="leading-relaxed">
      The <strong>symbol table</strong> is a data structure used by all phases to store information about
      identifiers (variables, functions, classes, etc.). It supports operations like insert, lookup, and
      delete.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Scope</th>
            <th className="p-3 border">Memory Location</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">position</td>
            <td className="p-3 border">float</td>
            <td className="p-3 border">global</td>
            <td className="p-3 border">0x1000</td>
          </tr>
          <tr>
            <td className="p-3 border">initial</td>
            <td className="p-3 border">float</td>
            <td className="p-3 border">global</td>
            <td className="p-3 border">0x1004</td>
          </tr>
          <tr>
            <td className="p-3 border">rate</td>
            <td className="p-3 border">float</td>
            <td className="p-3 border">global</td>
            <td className="p-3 border">0x1008</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Error Handler */}
    <h2 className="text-3xl font-bold mt-8">Error Handler</h2>
    <p className="leading-relaxed">
      The error handler detects, reports, and possibly recovers from errors during compilation.
      Different types of errors are caught at different phases:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Error Type</th>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Lexical Errors</td>
            <td className="p-3 border">Lexical Analysis</td>
            <td className="p-3 border">Invalid character: @#$</td>
          </tr>
          <tr>
            <td className="p-3 border">Syntax Errors</td>
            <td className="p-3 border">Syntax Analysis</td>
            <td className="p-3 border">Missing semicolon, unmatched brackets</td>
          </tr>
          <tr>
            <td className="p-3 border">Semantic Errors</td>
            <td className="p-3 border">Semantic Analysis</td>
            <td className="p-3 border">Type mismatch, undeclared variable</td>
          </tr>
          <tr>
            <td className="p-3 border">Logical Errors</td>
            <td className="p-3 border">Not caught by compiler</td>
            <td className="p-3 border">Infinite loops, wrong algorithm</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Complete Example */}
    <h2 className="text-3xl font-bold mt-8">Complete Compilation Example</h2>
    <p className="leading-relaxed">
      Let us trace through all phases for a simple statement:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Source Code:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">{`int a = 5 + 3 * 2;`}</pre>
    </div>

    <div className="space-y-4 mt-4">
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg">
        <p className="font-semibold mb-2">1. Lexical Analysis:</p>
        <pre className="text-sm overflow-x-auto text-gray-900">
{`Tokens: <int> <id,a> <=> <num,5> <+> <num,3> <*> <num,2> <;>`}
        </pre>
      </div>

      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg">
        <p className="font-semibold mb-2">2. Syntax Analysis (Parse Tree):</p>
        <pre className="text-sm overflow-x-auto text-gray-900">
{`        declaration
            |
    +-------+-------+
    |       |       |
   int     id      expr
           (a)       |
                 +---+---+
                 |   |   |
               expr  +  expr
                 |       |
               num   +---+---+
               (5)   |   |   |
                   expr  *  expr
                     |       |
                   num     num
                   (3)     (2)`}
        </pre>
      </div>

      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg">
        <p className="font-semibold mb-2">3. Semantic Analysis:</p>
        <pre className="text-sm overflow-x-auto text-gray-900">
{`Type checking: int + int * int = int (valid)
Symbol table entry: a -> int`}
        </pre>
      </div>

      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg">
        <p className="font-semibold mb-2">4. Intermediate Code:</p>
        <pre className="text-sm overflow-x-auto text-gray-900">
{`t1 = 3 * 2
t2 = 5 + t1
a = t2`}
        </pre>
      </div>

      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg">
        <p className="font-semibold mb-2">5. Code Optimization:</p>
        <pre className="text-sm overflow-x-auto text-gray-900">
{`a = 11    (constant folding: 5 + 3 * 2 = 5 + 6 = 11)`}
        </pre>
      </div>

      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg">
        <p className="font-semibold mb-2">6. Code Generation:</p>
        <pre className="text-sm overflow-x-auto text-gray-900">
{`MOV a, #11    ; Store constant 11 in variable a`}
        </pre>
      </div>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      Which phase of the compiler is responsible for checking type compatibility?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Lexical Analysis</li>
      <li>(B) Syntax Analysis</li>
      <li>(C) Semantic Analysis</li>
      <li>(D) Code Generation</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Semantic Analysis</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      Three-address code is produced by which phase?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Lexical Analysis</li>
      <li>(B) Syntax Analysis</li>
      <li>(C) Intermediate Code Generation</li>
      <li>(D) Code Optimization</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Intermediate Code Generation</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      The symbol table is used by:
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Only lexical analyzer</li>
      <li>(B) Only syntax analyzer</li>
      <li>(C) Only semantic analyzer</li>
      <li>(D) All phases of the compiler</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (D) All phases of the compiler</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>A compiler has six main phases: lexical, syntax, semantic analysis, IR generation, optimization, and code generation</li>
      <li>The symbol table and error handler support all phases</li>
      <li>Front-end phases are language-dependent; back-end phases are machine-dependent</li>
      <li>Intermediate code enables machine-independent optimization</li>
      <li>Each phase transforms the program into a different representation</li>
    </ul>

  </div>
);

export default CompilerPhases;
