import React from 'react';

const REIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Regular Expressions</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Regular Expressions (RE) are symbolic notations used to describe patterns in strings. They provide a compact and powerful way
      to represent regular languages and are fundamental to automata theory, compiler design, and text processing applications.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Regular Expression?</h2>
    <p className="leading-relaxed">
      A regular expression is a sequence of characters that defines a search pattern. In formal language theory, regular expressions
      describe exactly the class of languages that can be recognized by finite automata - the regular languages.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Building Blocks</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Primitive Regular Expressions:

1. Empty Set (empty): Represents no strings at all
   L(empty) = {}

2. Epsilon (epsilon): Represents the empty string
   L(epsilon) = {epsilon}

3. Single Symbol (a): Represents a single character
   L(a) = {a} for any symbol a in the alphabet

From these primitives, we can build complex expressions
using three operations: union, concatenation, and Kleene star.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Three Fundamental Operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Notation</th>
            <th className="p-3 border">Meaning</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Union</td>
            <td className="p-3 border">R1 + R2 or R1 | R2</td>
            <td className="p-3 border">Either R1 or R2</td>
            <td className="p-3 border">a + b matches "a" or "b"</td>
          </tr>
          <tr>
            <td className="p-3 border">Concatenation</td>
            <td className="p-3 border">R1R2 or R1.R2</td>
            <td className="p-3 border">R1 followed by R2</td>
            <td className="p-3 border">ab matches "ab"</td>
          </tr>
          <tr>
            <td className="p-3 border">Kleene Star</td>
            <td className="p-3 border">R*</td>
            <td className="p-3 border">Zero or more of R</td>
            <td className="p-3 border">{'a* matches "", "a", "aa", ...'}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A regular expression over alphabet Sigma is defined recursively:

Base Cases:
1. empty is a regular expression (denotes empty language)
2. epsilon is a regular expression (denotes {epsilon})
3. For any a in Sigma, 'a' is a regular expression (denotes {a})

Recursive Cases:
If R and S are regular expressions, then:
4. (R + S) is a regular expression (denotes L(R) union L(S))
5. (RS) is a regular expression (denotes L(R).L(S))
6. (R*) is a regular expression (denotes L(R)*)

Nothing else is a regular expression.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Operator Precedence</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`From highest to lowest precedence:

1. Kleene Star (*)    - Highest
2. Concatenation (.)
3. Union (+)          - Lowest

Examples:
- ab* means a(b*), not (ab)*
- ab + c means (ab) + c, not a(b + c)
- a + bc* means a + (b(c*))

Use parentheses to override precedence:
- (ab)* means zero or more "ab"
- (a + b)c means "ac" or "bc"`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Examples of Regular Expressions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Regular Expression</th>
            <th className="p-3 border">Language Described</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">a*</td>
            <td className="p-3 border">{'{epsilon, a, aa, aaa, ...}'}</td>
          </tr>
          <tr>
            <td className="p-3 border">(a + b)*</td>
            <td className="p-3 border">All strings over {'{a, b}'}</td>
          </tr>
          <tr>
            <td className="p-3 border">a*b*</td>
            <td className="p-3 border">Zero or more a's followed by zero or more b's</td>
          </tr>
          <tr>
            <td className="p-3 border">(ab)*</td>
            <td className="p-3 border">{'{epsilon, ab, abab, ababab, ...}'}</td>
          </tr>
          <tr>
            <td className="p-3 border">a(a + b)*b</td>
            <td className="p-3 border">Strings starting with a and ending with b</td>
          </tr>
          <tr>
            <td className="p-3 border">(a + b)*abb</td>
            <td className="p-3 border">All strings ending with "abb"</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Regular Expressions and Finite Automata</h2>
    <p className="leading-relaxed">
      The power of regular expressions lies in their equivalence to finite automata:
    </p>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Every regular expression can be converted to an NFA (Thompson's Construction)</li>
      <li>Every DFA can be converted to a regular expression (State Elimination or Arden's Theorem)</li>
      <li>This means regular expressions describe exactly the regular languages</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Pattern Matching:</strong> grep, sed, and other text processing tools</li>
      <li><strong>Lexical Analysis:</strong> Token recognition in compilers</li>
      <li><strong>Input Validation:</strong> Email, phone number, URL validation</li>
      <li><strong>Search and Replace:</strong> Text editors and IDEs</li>
      <li><strong>Web Scraping:</strong> Extracting information from web pages</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Regular expressions describe patterns in strings</li>
        <li>Three fundamental operations: union, concatenation, Kleene star</li>
        <li>Precedence: Kleene star {'>'} concatenation {'>'} union</li>
        <li>Regular expressions are equivalent to finite automata</li>
        <li>They describe exactly the class of regular languages</li>
        <li>Widely used in text processing and compiler design</li>
      </ul>
    </div>
  </div>
);

export default REIntroduction;
