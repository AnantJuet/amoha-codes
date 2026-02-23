import React from "react";

const TokensPatternLexemes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Tokens, Patterns, and Lexemes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Understanding the relationship between <strong>tokens</strong>, <strong>patterns</strong>,
      and <strong>lexemes</strong> is fundamental to lexical analysis. These three concepts work
      together to define how source code is broken down into meaningful units.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definitions</h2>

    <h3 className="text-2xl font-semibold mt-6">Token</h3>
    <p className="leading-relaxed">
      A <strong>token</strong> is a category or type of lexical unit. It represents a class of
      strings that share a common meaning in the language. Each token has a name and optionally
      an attribute value.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Token examples:
• IDENTIFIER - represents variable/function names
• NUMBER     - represents numeric literals
• KEYWORD    - represents reserved words
• OPERATOR   - represents operators like +, -, *`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Lexeme</h3>
    <p className="leading-relaxed">
      A <strong>lexeme</strong> is the actual sequence of characters in the source code that
      matches a pattern for a token. It is the concrete string being recognized.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Lexeme examples:
• "count"  - an actual variable name
• "123"    - an actual number
• "while"  - an actual keyword
• "+"      - an actual operator`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Pattern</h3>
    <p className="leading-relaxed">
      A <strong>pattern</strong> is a rule that describes what strings can form a valid lexeme
      for a token. Patterns are typically expressed using regular expressions.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Pattern examples:
• [a-zA-Z][a-zA-Z0-9]*  - pattern for identifiers
• [0-9]+                - pattern for integers
• "while"               - pattern for keyword while
• "+"                   - pattern for plus operator`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relationship</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Token      Pattern                  Lexeme Examples
─────────────────────────────────────────────────────
KEYWORD    "if"|"else"|"while"      if, else, while
ID         [a-zA-Z][a-zA-Z0-9]*     count, sum, x1
NUMBER     [0-9]+(\.[0-9]+)?        42, 3.14, 100
STRING     \"[^\"]*\"               "hello", "world"
RELOP      "<"|">"|"<="|">="        <, >, <=, >=
ASSIGN     "="                      =`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comprehensive Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Source Code:
    float average = (x + y) / 2.0;

Tokenization:
┌─────────┬──────────────┬─────────────────────────────┐
│ Lexeme  │ Token        │ Pattern                     │
├─────────┼──────────────┼─────────────────────────────┤
│ float   │ KEYWORD      │ "float"                     │
│ average │ IDENTIFIER   │ [a-zA-Z][a-zA-Z0-9]*        │
│ =       │ ASSIGN       │ "="                         │
│ (       │ LPAREN       │ "("                         │
│ x       │ IDENTIFIER   │ [a-zA-Z][a-zA-Z0-9]*        │
│ +       │ PLUS         │ "+"                         │
│ y       │ IDENTIFIER   │ [a-zA-Z][a-zA-Z0-9]*        │
│ )       │ RPAREN       │ ")"                         │
│ /       │ DIVIDE       │ "/"                         │
│ 2.0     │ FLOAT_CONST  │ [0-9]+\.[0-9]+              │
│ ;       │ SEMICOLON    │ ";"                         │
└─────────┴──────────────┴─────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Token Attributes</h2>
    <p className="leading-relaxed">
      Tokens often carry additional information in the form of attributes. These attributes
      provide semantic information needed by later compiler phases.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Token with Attributes:
┌─────────────┬───────────────────────────────┐
│ Token       │ Attribute                     │
├─────────────┼───────────────────────────────┤
│ IDENTIFIER  │ Pointer to symbol table entry │
│ NUMBER      │ Numeric value (42)            │
│ STRING      │ String value ("hello")        │
│ KEYWORD     │ Keyword type (IF, WHILE, etc) │
│ RELOP       │ Operator type (LT, GT, LE)    │
└─────────────┴───────────────────────────────┘

Example output:
<IDENTIFIER, ptr_to_symtab>
<NUMBER, 42>
<RELOP, LE>`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Token Categories in Detail</h2>

    <h3 className="text-2xl font-semibold mt-6">Keywords</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Reserved words with predefined meanings</li>
      <li>Cannot be used as identifiers</li>
      <li>Examples: if, else, for, while, int, float, return</li>
      <li>C language has 32 keywords</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Identifiers</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Names given to variables, functions, arrays, etc.</li>
      <li>Must start with a letter or underscore</li>
      <li>Can contain letters, digits, and underscores</li>
      <li>Case-sensitive in most languages</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Constants/Literals</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Integer:</strong> 10, 255, 0x1F</li>
      <li><strong>Floating-point:</strong> 3.14, 2.5e10</li>
      <li><strong>Character:</strong> 'a', '\n'</li>
      <li><strong>String:</strong> "Hello World"</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Operators</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Arithmetic:</strong> +, -, *, /, %</li>
      <li><strong>Relational:</strong> {"<"}, {">"}, ==, !=, {"<="}, {">="}</li>
      <li><strong>Logical:</strong> &&, ||, !</li>
      <li><strong>Assignment:</strong> =, +=, -=</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Special Symbols</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>;</strong> - statement terminator</li>
      <li><strong>,</strong> - separator</li>
      <li><strong>{"{ }"}</strong> - code blocks</li>
      <li><strong>[ ]</strong> - array indexing</li>
      <li><strong>( )</strong> - function calls, grouping</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Token:</strong> A category of lexical unit (IDENTIFIER, NUMBER, etc.)</li>
        <li><strong>Lexeme:</strong> The actual string in source code (count, 42)</li>
        <li><strong>Pattern:</strong> A rule describing valid lexemes (regular expression)</li>
        <li>Multiple lexemes can match the same token type</li>
        <li>Tokens carry attributes for use by later compiler phases</li>
      </ul>
    </div>
  </div>
);

export default TokensPatternLexemes;
