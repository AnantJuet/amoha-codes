import React from "react";

const LEX: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      LEX - Lexical Analyzer Generator
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>LEX</strong> (and its modern version <strong>Flex</strong>) is a tool for automatically
      generating lexical analyzers. It takes a specification file containing regular expressions
      and actions, and produces C code that performs lexical analysis.
    </p>

    <h2 className="text-3xl font-bold mt-8">How LEX Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LEX Workflow:

  scanner.l (LEX specification)
        │
        ▼
      lex/flex
        │
        ▼
    lex.yy.c (C source code)
        │
        ▼
    C Compiler
        │
        ▼
    Scanner executable

The generated scanner:
• Reads input character by character
• Matches patterns (regular expressions)
• Executes associated actions
• Returns tokens to the parser`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LEX Program Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`%{
  /* Definitions Section */
  /* C declarations, includes, macros */
  #include <stdio.h>
  int line_num = 1;
%}

/* Regular Definitions */
DIGIT    [0-9]
LETTER   [a-zA-Z]

%%
  /* Rules Section */
  /* pattern    action */

{DIGIT}+           { printf("NUMBER: %s\\n", yytext); }
{LETTER}+          { printf("WORD: %s\\n", yytext); }
\\n                 { line_num++; }
.                  { /* ignore other characters */ }

%%

/* User Code Section */
int main() {
    yylex();
    return 0;
}

int yywrap() {
    return 1;
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Three Sections</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Definitions Section</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>C code inside %{`{`} %{`}`} copied verbatim to output</li>
      <li>Regular definitions for reusable patterns</li>
      <li>Start conditions for context-sensitive scanning</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">2. Rules Section</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Pattern-action pairs separated by whitespace</li>
      <li>Patterns are regular expressions</li>
      <li>Actions are C code in braces</li>
      <li>First matching rule wins (longest match, then first listed)</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">3. User Code Section</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Additional C functions</li>
      <li>main() function if standalone</li>
      <li>yywrap() for handling end of file</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Important Variables</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Variable</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">yytext</td>
            <td className="p-3 border">char*</td>
            <td className="p-3 border">Pointer to matched text</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">yyleng</td>
            <td className="p-3 border">int</td>
            <td className="p-3 border">Length of matched text</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">yyin</td>
            <td className="p-3 border">FILE*</td>
            <td className="p-3 border">Input file (default: stdin)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">yyout</td>
            <td className="p-3 border">FILE*</td>
            <td className="p-3 border">Output file (default: stdout)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">yylineno</td>
            <td className="p-3 border">int</td>
            <td className="p-3 border">Current line number (with %option)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pattern Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Pattern          Matches
─────────────────────────────────────
[0-9]+           One or more digits
[a-zA-Z_][a-zA-Z0-9_]*  Identifier
\"[^\"]*\"         String literal
\\/\\/.*           Single-line comment
\\/\\*             Start of block comment
[ \\t]+           Whitespace (spaces/tabs)
\\n               Newline
.                Any character except newline
<<EOF>>          End of file`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example: Simple Scanner</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`%{
#include <stdio.h>
#include "y.tab.h"  // Token definitions from YACC
%}

DIGIT    [0-9]
LETTER   [a-zA-Z_]
ID       {LETTER}({LETTER}|{DIGIT})*

%%

"if"        { return IF; }
"else"      { return ELSE; }
"while"     { return WHILE; }
"return"    { return RETURN; }
"int"       { return INT; }
"float"     { return FLOAT; }

{ID}        { yylval.str = strdup(yytext); return IDENTIFIER; }
{DIGIT}+    { yylval.num = atoi(yytext); return NUMBER; }

"+"         { return PLUS; }
"-"         { return MINUS; }
"*"         { return STAR; }
"/"         { return SLASH; }
"="         { return ASSIGN; }
"=="        { return EQ; }
"<"         { return LT; }
">"         { return GT; }

"("         { return LPAREN; }
")"         { return RPAREN; }
"{"         { return LBRACE; }
"}"         { return RBRACE; }
";"         { return SEMI; }

[ \\t]       { /* skip whitespace */ }
\\n          { yylineno++; }
.           { printf("Unknown char: %s\\n", yytext); }

%%

int yywrap() { return 1; }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Running LEX</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`# Using flex (modern LEX)
$ flex scanner.l          # Generates lex.yy.c
$ gcc lex.yy.c -lfl -o scanner
$ ./scanner < input.txt

# Combined with YACC
$ flex scanner.l
$ bison -d parser.y       # Generates y.tab.c and y.tab.h
$ gcc lex.yy.c y.tab.c -o compiler`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>LEX/Flex generates lexical analyzers from specifications</li>
        <li>Three sections: definitions, rules, user code</li>
        <li>Rules are pattern-action pairs</li>
        <li>yytext contains the matched string</li>
        <li>Longest match wins; ties go to first rule listed</li>
      </ul>
    </div>
  </div>
);

export default LEX;
