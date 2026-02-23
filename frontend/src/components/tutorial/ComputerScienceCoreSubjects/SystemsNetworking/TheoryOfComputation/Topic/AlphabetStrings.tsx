import React from "react";

const AlphabetStrings: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Alphabet, Strings, and Languages ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Alphabet, Strings, and Languages
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Understanding alphabets, strings, and languages is fundamental to the study of Theory of Computation.
      These basic concepts form the building blocks for defining automata, grammars, and computational problems.
      Every formal language is built upon these foundational elements.
    </p>

    {/* Alphabet */}
    <h2 className="text-3xl font-bold mt-8">Alphabet (Sigma)</h2>
    <p className="leading-relaxed">
      An <strong>alphabet</strong> (denoted by the Greek letter Sigma) is a finite, non-empty set of symbols.
      These symbols are the basic building blocks from which strings are constructed.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Properties of an Alphabet</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>Finite:</strong> Must contain a finite number of symbols</li>
      <li><strong>Non-empty:</strong> Must contain at least one symbol</li>
      <li><strong>Well-defined:</strong> Each symbol must be distinguishable from others</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Examples of Alphabets</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Alphabet</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Cardinality</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">{"{ 0, 1 }"}</td>
            <td className="p-3 border">Binary alphabet</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">{"{ a, b, c }"}</td>
            <td className="p-3 border">Three letter alphabet</td>
            <td className="p-3 border">3</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">{"{ a, b, ..., z }"}</td>
            <td className="p-3 border">Lowercase English letters</td>
            <td className="p-3 border">26</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">{"{ 0, 1, 2, ..., 9 }"}</td>
            <td className="p-3 border">Decimal digits</td>
            <td className="p-3 border">10</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">{"{ +, -, *, / }"}</td>
            <td className="p-3 border">Arithmetic operators</td>
            <td className="p-3 border">4</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Strings */}
    <h2 className="text-3xl font-bold mt-8">Strings (Words)</h2>
    <p className="leading-relaxed">
      A <strong>string</strong> (also called a word) is a finite sequence of symbols from an alphabet.
      Strings are the basic objects that automata process and languages contain.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Formal Definition</h3>
    <p className="leading-relaxed mt-2">
      A string <em>w</em> over an alphabet Sigma is a finite sequence of symbols from Sigma, written as:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      w = a1 a2 a3 ... an where each ai is in Sigma
    </div>

    <h3 className="text-2xl font-semibold mt-4">The Empty String</h3>
    <p className="leading-relaxed">
      The <strong>empty string</strong> (denoted by epsilon or lambda) is the unique string of length zero.
      It contains no symbols but is still a valid string over any alphabet.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Notation: epsilon (or sometimes lambda)</li>
      <li>Length: |epsilon| = 0</li>
      <li>epsilon is in Sigma* for any alphabet Sigma</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Examples of Strings</h3>
    <p className="leading-relaxed mt-2">
      For the alphabet Sigma = {"{ 0, 1 }"}:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">String</th>
            <th className="p-3 border">Length</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">epsilon</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Empty string</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Single symbol</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">01</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Two symbols</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">110</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Three symbols</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">0101</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Four symbols</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* String Length */}
    <h2 className="text-3xl font-bold mt-8">Length of a String</h2>
    <p className="leading-relaxed">
      The <strong>length</strong> of a string <em>w</em>, denoted |w|, is the number of symbols in the string.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Properties</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>|epsilon| = 0 (length of empty string is zero)</li>
      <li>|a| = 1 for any symbol a</li>
      <li>|uv| = |u| + |v| (length of concatenation)</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Counting Specific Symbols</h3>
    <p className="leading-relaxed mt-2">
      The notation |w|_a denotes the number of occurrences of symbol 'a' in string w.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <p className="font-mono text-gray-900">Example: For w = aabba</p>
      <ul className="list-disc list-inside mt-2">
        <li>|w| = 5 (total length)</li>
        <li>|w|_a = 3 (number of a's)</li>
        <li>|w|_b = 2 (number of b's)</li>
      </ul>
    </div>

    {/* Powers of Alphabet */}
    <h2 className="text-3xl font-bold mt-8">Powers of an Alphabet</h2>
    <p className="leading-relaxed">
      We can define sets of strings of specific lengths using powers of the alphabet.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Notation</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Cardinality</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">Sigma^0</td>
            <td className="p-3 border">Set containing only epsilon</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Sigma^1</td>
            <td className="p-3 border">Set of all strings of length 1</td>
            <td className="p-3 border">|Sigma|</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Sigma^2</td>
            <td className="p-3 border">Set of all strings of length 2</td>
            <td className="p-3 border">|Sigma|^2</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Sigma^n</td>
            <td className="p-3 border">Set of all strings of length n</td>
            <td className="p-3 border">|Sigma|^n</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Sigma*</td>
            <td className="p-3 border">Set of all strings (Kleene star)</td>
            <td className="p-3 border">Countably infinite</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Sigma+</td>
            <td className="p-3 border">Set of all non-empty strings (Kleene plus)</td>
            <td className="p-3 border">Countably infinite</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Example</h3>
    <p className="leading-relaxed mt-2">For Sigma = {"{ 0, 1 }"}:</p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <p>Sigma^0 = {"{ epsilon }"}</p>
      <p>Sigma^1 = {"{ 0, 1 }"}</p>
      <p>Sigma^2 = {"{ 00, 01, 10, 11 }"}</p>
      <p>Sigma^3 = {"{ 000, 001, 010, 011, 100, 101, 110, 111 }"}</p>
      <p>Sigma* = {"{ epsilon, 0, 1, 00, 01, 10, 11, 000, 001, ... }"}</p>
      <p>Sigma+ = {"{ 0, 1, 00, 01, 10, 11, 000, 001, ... }"}</p>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Important Relationships</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <p>Sigma* = Sigma^0 U Sigma^1 U Sigma^2 U Sigma^3 U ...</p>
      <p>Sigma+ = Sigma^1 U Sigma^2 U Sigma^3 U ...</p>
      <p>Sigma* = Sigma+ U {"{ epsilon }"}</p>
      <p>Sigma+ = Sigma* - {"{ epsilon }"}</p>
    </div>

    {/* Formal Languages */}
    <h2 className="text-3xl font-bold mt-8">Formal Languages</h2>
    <p className="leading-relaxed">
      A <strong>formal language</strong> L over an alphabet Sigma is any subset of Sigma*.
      In other words, a language is a set of strings.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Formal Definition</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      L is a subset of Sigma* (written as L in Sigma*)
    </div>

    <h3 className="text-2xl font-semibold mt-4">Types of Languages</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Language Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Empty Language</td>
            <td className="p-3 border">Contains no strings at all</td>
            <td className="p-3 border font-mono text-gray-900">{"{}"} or empty set</td>
          </tr>
          <tr>
            <td className="p-3 border">Language with epsilon</td>
            <td className="p-3 border">Contains only the empty string</td>
            <td className="p-3 border font-mono text-gray-900">{"{ epsilon }"}</td>
          </tr>
          <tr>
            <td className="p-3 border">Finite Language</td>
            <td className="p-3 border">Contains a finite number of strings</td>
            <td className="p-3 border font-mono text-gray-900">{"{ ab, ba, aba }"}</td>
          </tr>
          <tr>
            <td className="p-3 border">Infinite Language</td>
            <td className="p-3 border">Contains infinitely many strings</td>
            <td className="p-3 border font-mono text-gray-900">{"{ a^n | n >= 0 }"}</td>
          </tr>
          <tr>
            <td className="p-3 border">Universal Language</td>
            <td className="p-3 border">Contains all possible strings</td>
            <td className="p-3 border font-mono text-gray-900">Sigma*</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Examples of Languages</h3>
    <p className="leading-relaxed mt-2">Over the alphabet Sigma = {"{ a, b }"}:</p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>L1 = {"{ a, ab, aab, aaab, ... }"}</strong> - Strings of one or more a's followed by optional b</li>
      <li><strong>L2 = {"{ w | |w| is even }"}</strong> - All strings of even length</li>
      <li><strong>L3 = {"{ a^n b^n | n >= 0 }"}</strong> - Equal number of a's followed by equal b's</li>
      <li><strong>L4 = {"{ w | w starts with a }"}</strong> - All strings starting with 'a'</li>
      <li><strong>L5 = {"{ w | w is a palindrome }"}</strong> - All palindromic strings</li>
    </ul>

    {/* Important Note */}
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-6">
      <h3 className="text-xl font-semibold">Important Distinction</h3>
      <p className="mt-2">
        <strong>Empty set vs. Set containing epsilon:</strong>
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
        <li>Empty set (denoted {}) contains NO strings at all</li>
        <li>{"{ epsilon }"} contains exactly ONE string - the empty string</li>
        <li>These are NOT the same! |{}| = 0, but |{"{ epsilon }"}| = 1</li>
      </ul>
    </div>

    {/* String Operations */}
    <h2 className="text-3xl font-bold mt-8">String Operations</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Concatenation</h3>
    <p className="leading-relaxed">
      The concatenation of two strings u and v, written uv, is the string formed by placing
      v immediately after u.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <p className="font-mono text-gray-900">If u = abc and v = de, then uv = abcde</p>
      <p className="mt-2">Properties:</p>
      <ul className="list-disc list-inside mt-1">
        <li>epsilon w = w epsilon = w (epsilon is the identity)</li>
        <li>(uv)w = u(vw) (associative)</li>
        <li>uv is not equal to vu in general (not commutative)</li>
      </ul>
    </div>

    <h3 className="text-2xl font-semibold mt-4">2. String Power</h3>
    <p className="leading-relaxed">
      The power of a string w, denoted w^n, is the string obtained by concatenating w with itself n times.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <p className="font-mono text-gray-900">w^0 = epsilon</p>
      <p className="font-mono text-gray-900">w^1 = w</p>
      <p className="font-mono text-gray-900">w^n = w * w^(n-1) for n greater than 0</p>
      <p className="mt-2">Example: If w = ab, then:</p>
      <ul className="list-disc list-inside mt-1 font-mono text-gray-900">
        <li>(ab)^0 = epsilon</li>
        <li>(ab)^1 = ab</li>
        <li>(ab)^2 = abab</li>
        <li>(ab)^3 = ababab</li>
      </ul>
    </div>

    <h3 className="text-2xl font-semibold mt-4">3. Reversal</h3>
    <p className="leading-relaxed">
      The reversal of a string w, denoted w^R, is the string obtained by writing the symbols in reverse order.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <p className="font-mono text-gray-900">If w = abc, then w^R = cba</p>
      <p className="font-mono text-gray-900">epsilon^R = epsilon</p>
      <p className="font-mono text-gray-900">(uv)^R = v^R u^R</p>
    </div>

    {/* Substrings, Prefix, Suffix */}
    <h2 className="text-3xl font-bold mt-8">Substrings, Prefixes, and Suffixes</h2>

    <h3 className="text-2xl font-semibold mt-4">Prefix</h3>
    <p className="leading-relaxed">
      A string u is a <strong>prefix</strong> of string w if there exists a string v such that w = uv.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <p>For w = abc, the prefixes are: epsilon, a, ab, abc</p>
      <p className="mt-1">Proper prefixes (excluding w itself): epsilon, a, ab</p>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Suffix</h3>
    <p className="leading-relaxed">
      A string v is a <strong>suffix</strong> of string w if there exists a string u such that w = uv.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <p>For w = abc, the suffixes are: epsilon, c, bc, abc</p>
      <p className="mt-1">Proper suffixes (excluding w itself): epsilon, c, bc</p>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Substring</h3>
    <p className="leading-relaxed">
      A string v is a <strong>substring</strong> of string w if there exist strings u1 and u2 such that w = u1 v u2.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <p>For w = abc, the substrings are: epsilon, a, b, c, ab, bc, abc</p>
    </div>

    {/* Visual Diagram */}
    <h2 className="text-3xl font-bold mt-8">Visual Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`String w = a b c d e

Prefixes:          Suffixes:          Substrings:
  epsilon            epsilon            epsilon
  a                  e                  a, b, c, d, e
  ab                 de                 ab, bc, cd, de
  abc                cde                abc, bcd, cde
  abcd               bcde               abcd, bcde
  abcde              abcde              abcde

Note: Every prefix and suffix is also a substring.
`}
      </pre>
    </div>

    {/* Summary Table */}
    <h2 className="text-3xl font-bold mt-8">Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Concept</th>
            <th className="p-3 border">Notation</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Alphabet</td>
            <td className="p-3 border font-mono text-gray-900">Sigma</td>
            <td className="p-3 border">Finite non-empty set of symbols</td>
          </tr>
          <tr>
            <td className="p-3 border">Empty String</td>
            <td className="p-3 border font-mono text-gray-900">epsilon</td>
            <td className="p-3 border">String of length zero</td>
          </tr>
          <tr>
            <td className="p-3 border">Kleene Star</td>
            <td className="p-3 border font-mono text-gray-900">Sigma*</td>
            <td className="p-3 border">All strings including epsilon</td>
          </tr>
          <tr>
            <td className="p-3 border">Kleene Plus</td>
            <td className="p-3 border font-mono text-gray-900">Sigma+</td>
            <td className="p-3 border">All non-empty strings</td>
          </tr>
          <tr>
            <td className="p-3 border">String Length</td>
            <td className="p-3 border font-mono text-gray-900">|w|</td>
            <td className="p-3 border">Number of symbols in string w</td>
          </tr>
          <tr>
            <td className="p-3 border">Concatenation</td>
            <td className="p-3 border font-mono text-gray-900">uv</td>
            <td className="p-3 border">String u followed by string v</td>
          </tr>
          <tr>
            <td className="p-3 border">String Power</td>
            <td className="p-3 border font-mono text-gray-900">w^n</td>
            <td className="p-3 border">w concatenated n times</td>
          </tr>
          <tr>
            <td className="p-3 border">Reversal</td>
            <td className="p-3 border font-mono text-gray-900">w^R</td>
            <td className="p-3 border">String w written backwards</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <ol className="list-decimal ml-6 space-y-2 mt-4">
      <li>
        For Sigma = {"{ a, b }"}, list all strings in Sigma^3.
      </li>
      <li>
        If |Sigma| = 3, how many strings are in Sigma^4?
      </li>
      <li>
        For w = abcba, list all prefixes, suffixes, and verify if it's a palindrome.
      </li>
      <li>
        Prove that |w^n| = n * |w| for any string w.
      </li>
      <li>
        Given L = {"{ a^n b^n | n >= 0 }"}, determine if the following strings are in L:
        <ul className="list-disc list-inside ml-4 mt-1">
          <li>epsilon</li>
          <li>ab</li>
          <li>aabb</li>
          <li>abab</li>
        </ul>
      </li>
    </ol>

  </div>
);

export default AlphabetStrings;
