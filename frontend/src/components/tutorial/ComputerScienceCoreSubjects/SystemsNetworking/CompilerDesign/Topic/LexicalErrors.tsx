import React from "react";

const LexicalErrors: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Lexical Errors and Recovery
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Lexical errors</strong> occur when the lexical analyzer encounters character sequences
      that do not match any valid token pattern. Proper error detection and recovery are essential
      for providing helpful feedback to programmers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Lexical Errors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Error Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Invalid Character</td>
            <td className="p-3 border">Character not in alphabet</td>
            <td className="p-3 border font-mono text-gray-900">@ in C (outside string)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unterminated String</td>
            <td className="p-3 border">Missing closing quote</td>
            <td className="p-3 border font-mono text-gray-900">"hello</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unterminated Comment</td>
            <td className="p-3 border">Missing comment end</td>
            <td className="p-3 border font-mono text-gray-900">/* comment...</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Invalid Number</td>
            <td className="p-3 border">Malformed numeric literal</td>
            <td className="p-3 border font-mono text-gray-900">3.14.15, 1e</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Invalid Identifier</td>
            <td className="p-3 border">Identifier starting with digit</td>
            <td className="p-3 border font-mono text-gray-900">2ndValue</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Detection</h2>
    <p className="leading-relaxed">
      The lexical analyzer detects errors when:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>No pattern matches the current input</li>
      <li>A token is incomplete at end of file</li>
      <li>Character sequence violates token formation rules</li>
    </ul>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Error Detection in DFA:

                  letter/digit
                  ┌────────┐
                  │        │
                  ▼        │
  →(Start)──letter──→(Accept)
      │
     invalid
      │
      ▼
   (Error) ──→ Report error and recover`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Recovery Strategies</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Panic Mode Recovery</h3>
    <p className="leading-relaxed">
      Skip characters until a valid token beginning is found.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Panic Mode:
1. Report error with location
2. Skip characters until whitespace or known delimiter
3. Resume normal scanning

Example:
  Input: int @#$ x = 5;
  Error at @: Skip @#$ (unknown characters)
  Resume at 'x' and continue`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Delete Character</h3>
    <p className="leading-relaxed">
      Delete the erroneous character and continue.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Delete Recovery:
  Input: in@t x;
  Error at @: Delete @
  Result: int x; (valid after deletion)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Insert Character</h3>
    <p className="leading-relaxed">
      Insert a missing character to form a valid token.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Insert Recovery:
  Input: "hello    (unterminated string)
  Error at newline/EOF: Insert closing "
  Result: "hello" (valid string)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Replace Character</h3>
    <p className="leading-relaxed">
      Replace an incorrect character with a correct one.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Replace Recovery:
  Input: 3,14   (comma instead of period)
  Error at ,: Suggest replacing with .
  Possible: 3.14`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Messages</h2>
    <p className="leading-relaxed">
      Good error messages should include:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>File name and line number</li>
      <li>Column position if possible</li>
      <li>Description of the error</li>
      <li>The offending character or string</li>
      <li>Suggestion for correction if applicable</li>
    </ul>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Good Error Messages:

example.c:10:15: error: invalid character '@' in source
    int value@ = 5;
              ^
example.c:15:1: error: unterminated string literal
    char *msg = "hello
                ^
    note: string started here

example.c:20:5: error: invalid suffix 'abc' on integer constant
    int x = 123abc;
            ^~~~~~`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LEX Error Handling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`%{
int errors = 0;
extern int yylineno;
%}

%%

/* Normal rules... */
[a-zA-Z]+    { return IDENTIFIER; }
[0-9]+       { return NUMBER; }

/* Error handling rule - must be last */
.            {
    fprintf(stderr, "Line %d: Invalid character '%c'\\n",
            yylineno, yytext[0]);
    errors++;
    /* Continue scanning (panic mode) */
}

%%

int main() {
    yylex();
    if (errors > 0) {
        fprintf(stderr, "Total lexical errors: %d\\n", errors);
        return 1;
    }
    return 0;
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Lexical errors occur when input doesn't match any pattern</li>
        <li>Common errors: invalid characters, unterminated strings/comments</li>
        <li>Recovery strategies: panic mode, delete, insert, replace</li>
        <li>Error messages should include location and helpful description</li>
        <li>In LEX, the dot (.) rule catches unmatched characters</li>
      </ul>
    </div>
  </div>
);

export default LexicalErrors;
