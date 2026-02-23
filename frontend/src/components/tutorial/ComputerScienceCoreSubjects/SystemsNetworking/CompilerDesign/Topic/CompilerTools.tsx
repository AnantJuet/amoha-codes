import React from "react";

const CompilerTools: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Compiler Construction Tools
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Building a compiler involves many complex steps such as reading source code, checking syntax,
      generating intermediate code, and producing optimized machine code. <strong>Compiler construction tools</strong>
      automate different phases of a compiler and help developers focus on design rather than low-level
      implementation details.
    </p>

    <h2 className="text-3xl font-bold mt-8">Categories of Compiler Tools</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Lexical Analyzer Generators (Scanner Generators)</h3>
    <p className="leading-relaxed">
      These tools help create the scanner (lexical analyzer) of a compiler. The scanner reads the
      source code and breaks it into meaningful units called <strong>tokens</strong>.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Input: Regular expressions for tokens
Output: C/C++/Java code for token recognition

Examples:
• LEX - Original Unix lexical analyzer generator
• Flex - Fast Lexical Analyzer (improved LEX)
• JFlex - Java version of Flex`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Parser Generators</h3>
    <p className="leading-relaxed">
      Parser generators are used to build the syntax analysis phase. They check whether the token
      sequence follows the grammar rules of the programming language.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Input: Grammar rules (usually BNF or similar notation)
Output: Parser that checks syntax and builds parse tree

Examples:
• YACC - Yet Another Compiler Compiler
• Bison - GNU version of YACC
• ANTLR - ANother Tool for Language Recognition
• CUP - Constructor of Useful Parsers (Java)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Syntax-Directed Translation Engines</h3>
    <p className="leading-relaxed">
      These tools allow developers to attach semantic actions to grammar rules. They help perform
      tasks like type checking and intermediate code generation during parsing.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Features:
• Attach code to grammar productions
• Execute actions during parsing
• Build symbol tables and IR

Example: ANTLR with semantic predicates`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Automatic Code Generators</h3>
    <p className="leading-relaxed">
      These tools convert intermediate code into machine-level code. They also apply low-level
      optimizations to improve performance.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Examples:
• GCC's backend
• LLVM - Low Level Virtual Machine
• Cranelift - Code generator for WebAssembly`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">5. Data-Flow Analysis Engines</h3>
    <p className="leading-relaxed">
      These tools analyze how data moves through a program. The information is used to optimize
      code by removing unnecessary computations and improving efficiency.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Uses:
• Dead code elimination
• Constant propagation
• Common subexpression elimination

Example: LLVM Analysis passes`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">6. Compiler-Construction Toolkits</h3>
    <p className="leading-relaxed">
      Toolkits provide a complete set of reusable components for building compilers, including
      scanning, parsing, optimization, and code generation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Major Compiler Tools</h2>

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
            <td className="p-3 border font-semibold">LEX / Flex</td>
            <td className="p-3 border">Scanner generator</td>
            <td className="p-3 border">Lexical Analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">YACC / Bison</td>
            <td className="p-3 border">Parser generator (LALR)</td>
            <td className="p-3 border">Syntax Analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ANTLR</td>
            <td className="p-3 border">Parser generator (LL)</td>
            <td className="p-3 border">Lexical + Syntax</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">LLVM</td>
            <td className="p-3 border">Compiler infrastructure</td>
            <td className="p-3 border">IR + Optimization + CodeGen</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">GCC</td>
            <td className="p-3 border">Complete compiler suite</td>
            <td className="p-3 border">All phases</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">LEX (Lexical Analyzer Generator)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LEX Program Structure:

%{
  /* C declarations and includes */
%}

/* Definitions section */
DIGIT   [0-9]
LETTER  [a-zA-Z]

%%

/* Rules section */
{DIGIT}+        { return NUMBER; }
{LETTER}+       { return IDENTIFIER; }
"+"             { return PLUS; }
"="             { return ASSIGN; }

%%

/* User code section */
int main() {
    yylex();
    return 0;
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">YACC (Parser Generator)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`YACC Program Structure:

%{
  /* C declarations */
%}

%token NUMBER IDENTIFIER PLUS ASSIGN

%%

/* Grammar rules */
program : statement_list
        ;

statement : IDENTIFIER ASSIGN expr
          ;

expr : expr PLUS term
     | term
     ;

term : NUMBER
     | IDENTIFIER
     ;

%%

/* User code */
int main() {
    yyparse();
    return 0;
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LLVM Infrastructure</h2>
    <p className="leading-relaxed">
      LLVM is a collection of modular and reusable compiler and toolchain technologies. It provides:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>LLVM IR:</strong> A low-level, typed intermediate representation</li>
      <li><strong>Optimization Passes:</strong> Modular optimization framework</li>
      <li><strong>Code Generation:</strong> Targets multiple architectures</li>
      <li><strong>Clang:</strong> C/C++/Objective-C frontend</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Workflow: LEX + YACC</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`scanner.l (LEX)    parser.y (YACC)
     |                    |
     v                    v
   lex                  yacc
     |                    |
     v                    v
  lex.yy.c            y.tab.c
     |                    |
     +--------+-----------+
              |
              v
         C Compiler
              |
              v
         Executable`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>LEX/Flex generates lexical analyzers from regular expressions</li>
        <li>YACC/Bison generates parsers from grammar specifications</li>
        <li>ANTLR is a modern tool supporting both LL and LR parsing</li>
        <li>LLVM provides a complete compiler infrastructure with IR and optimizations</li>
        <li>These tools significantly reduce the effort needed to build compilers</li>
      </ul>
    </div>
  </div>
);

export default CompilerTools;
