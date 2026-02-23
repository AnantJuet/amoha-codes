import React from "react";

const SyntaxErrors: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Syntax Error Handling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Syntax error handling</strong> is crucial for providing meaningful feedback to
      programmers. A good parser should detect errors early, report them clearly, and recover
      to continue parsing and find more errors.
    </p>

    <h2 className="text-3xl font-bold mt-8">Goals of Error Handling</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Report errors clearly with location information</li>
      <li>Recover quickly to find subsequent errors</li>
      <li>Avoid cascading false errors</li>
      <li>Continue parsing as much as possible</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Error Recovery Strategies</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Panic Mode Recovery</h3>
    <p className="leading-relaxed">
      Skip tokens until a synchronizing token (like semicolon) is found.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Error: int x = + 5;
             ^ unexpected '+'

Panic mode:
1. Report error at '+'
2. Skip tokens until ';'
3. Resume parsing after ';'

Simple but may skip valid code.`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Phrase-Level Recovery</h3>
    <p className="leading-relaxed">
      Make local corrections to the input to allow parsing to continue.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Error: if (x > 0 { ... }
               ^ expected ')'

Phrase-level:
1. Insert missing ')' and continue
2. Report "missing ')' before '{'"

More precise but can cause cascading errors.`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Error Productions</h3>
    <p className="leading-relaxed">
      Add grammar rules that match common errors explicitly.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Normal rule:
  stmt → IF '(' expr ')' stmt

Error production:
  stmt → IF '(' expr stmt  /* missing ')' */
         { yyerror("missing ')' in if"); }

Catches specific common mistakes.`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Global Correction</h3>
    <p className="leading-relaxed">
      Find minimum changes to make input valid. Theoretically optimal but impractical.
    </p>

    <h2 className="text-3xl font-bold mt-8">YACC Error Handling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`YACC special token: error

stmt : expr ';'
     | error ';'  /* on error, skip to ';' */
       { yyerror("invalid statement"); }
     ;

block : '{' stmts '}'
      | '{' error '}'  /* recover at '}' */
        { yyerror("error in block"); }
      ;

The 'error' token matches any bad input.
Parser discards tokens until it can shift 'error'
and then match the synchronizing token.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Good Error Messages</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Bad: "Syntax error"
Bad: "Unexpected token"

Better:
  error.c:10:15: error: expected ';' after expression
      int x = 5
                ^
                ;

Best (with context):
  error.c:10:15: error: expected ';' after expression
      int x = 5
                ^
  note: to complete the declaration started here:
      int x = 5
      ^~~~~~~~~`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Recovery in LL Parsers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LL(1) Error Recovery:

1. If M[A, a] is empty (error):
   - Skip input until token in FOLLOW(A)
   - Pop A from stack
   - Continue parsing

2. Or use "first and follow" sets:
   - If token in FIRST(A): try to match
   - If token in FOLLOW(A): assume A → ε
   - Otherwise: skip token`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Panic mode skips to synchronizing tokens</li>
        <li>Phrase-level makes local corrections</li>
        <li>Error productions handle common mistakes</li>
        <li>YACC uses special 'error' token for recovery</li>
        <li>Good messages include location and suggestions</li>
      </ul>
    </div>
  </div>
);

export default SyntaxErrors;
