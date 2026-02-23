import React from "react";

const YACC: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      YACC - Yet Another Compiler Compiler
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>YACC</strong> (Yet Another Compiler Compiler) is a parser generator that creates
      LALR(1) parsers from grammar specifications. Its GNU version, <strong>Bison</strong>,
      is widely used for building compilers and interpreters.
    </p>

    <h2 className="text-3xl font-bold mt-8">YACC Program Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`%{
  /* Definitions Section */
  /* C declarations, includes */
%}

/* Declarations Section */
%token TOKEN_NAMES
%left %right %nonassoc

%%
  /* Grammar Rules Section */
  production: body { action } ;
%%

/* User Code Section */
/* Additional C functions */`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Calculator</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`%{
#include <stdio.h>
#include <stdlib.h>
void yyerror(const char *s);
int yylex(void);
%}

%token NUMBER
%left '+' '-'
%left '*' '/'
%right UMINUS

%%

program : program expr '\\n' { printf("= %d\\n", $2); }
        | /* empty */
        ;

expr : expr '+' expr    { $$ = $1 + $3; }
     | expr '-' expr    { $$ = $1 - $3; }
     | expr '*' expr    { $$ = $1 * $3; }
     | expr '/' expr    { $$ = $1 / $3; }
     | '(' expr ')'     { $$ = $2; }
     | '-' expr %prec UMINUS  { $$ = -$2; }
     | NUMBER           { $$ = $1; }
     ;

%%

void yyerror(const char *s) {
    fprintf(stderr, "Error: %s\\n", s);
}

int main() {
    yyparse();
    return 0;
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Directives</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Directive</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">%token</td>
            <td className="p-3 border">Declare terminal symbols</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">%left</td>
            <td className="p-3 border">Left-associative operators</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">%right</td>
            <td className="p-3 border">Right-associative operators</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">%nonassoc</td>
            <td className="p-3 border">Non-associative operators</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">%prec</td>
            <td className="p-3 border">Override precedence for a rule</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">%union</td>
            <td className="p-3 border">Declare semantic value types</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">%type</td>
            <td className="p-3 border">Declare non-terminal types</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Semantic Actions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Special variables in actions:

$$ - Value of left-hand side (result)
$1 - Value of first symbol on right-hand side
$2 - Value of second symbol
$n - Value of nth symbol

Example:
expr : expr '+' expr { $$ = $1 + $3; }
       $1   $2  $3

The value of '+' ($2) is typically not used.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LEX + YACC Integration</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Compilation workflow:

calc.l (LEX)        calc.y (YACC)
     |                    |
     v                    v
   flex                 bison -d
     |                    |
     v                    v
  lex.yy.c            calc.tab.c
     |                calc.tab.h
     |                    |
     +--------+-----------+
              |
              v
          gcc -o calc
              |
              v
         calc executable`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conflict Resolution</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`YACC resolves conflicts by default:

Shift-reduce conflict: Prefers SHIFT
Reduce-reduce conflict: Prefers first rule listed

Use %left, %right to resolve based on associativity
Use %prec to override precedence for specific rules

Example (dangling else):
stmt : IF expr THEN stmt
     | IF expr THEN stmt ELSE stmt
     ;

YACC shifts ELSE (attaches to nearest IF).`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>YACC/Bison generates LALR(1) parsers</li>
        <li>Three sections: declarations, rules, user code</li>
        <li>Semantic actions use $$ and $n variables</li>
        <li>Precedence and associativity resolve conflicts</li>
        <li>Works with LEX for complete front-end generation</li>
      </ul>
    </div>
  </div>
);

export default YACC;
