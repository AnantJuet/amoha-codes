import React from 'react';

const TrieIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Trie
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Trie (pronounced "try") is a tree-like data structure used for efficient retrieval of keys in a
      dataset of strings. Also known as a Prefix Tree or Digital Tree, it's widely used in autocomplete,
      spell checkers, and IP routing.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Properties</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Each node represents a character</li>
      <li>The root represents an empty string</li>
      <li>Each path from root to a node forms a prefix</li>
      <li>Words sharing common prefixes share the same path</li>
      <li>Each node can have multiple children (typically 26 for lowercase letters)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Words: ["cat", "car", "card", "care", "dog"]</p>
      <pre className="text-sm mt-4">
{`           (root)
          /      \\
         c        d
         |        |
         a        o
        /|\\       |
       t r*       g*
         |\\
         d* e*

* indicates end of word`}
      </pre>
      <p className="mt-2 text-sm text-gray-600">
        Notice how "cat", "car", "card", "care" share the prefix "ca"
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Basic Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class TrieNode {
    constructor() {
        this.children = {};     // Map of character -> TrieNode
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the trie - O(m) where m is word length
    insert(word) {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }

        node.isEndOfWord = true;
    }

    // Search for a word - O(m)
    search(word) {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }

        return node.isEndOfWord;
    }

    // Check if any word starts with prefix - O(m)
    startsWith(prefix) {
        let node = this.root;

        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }

        return true;
    }
}

// Example usage
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");

console.log(trie.search("app"));        // true
console.log(trie.search("apple"));      // true
console.log(trie.search("appl"));       // false
console.log(trie.startsWith("app"));    // true`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Insert</td>
            <td className="p-3 border">O(m) - m is word length</td>
          </tr>
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">O(m)</td>
          </tr>
          <tr>
            <td className="p-3 border">Prefix Search</td>
            <td className="p-3 border">O(m)</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete</td>
            <td className="p-3 border">O(m)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(ALPHABET_SIZE × m × n) worst case, where n is number of words</p>

    <h2 className="text-2xl font-bold mt-6">Trie vs Hash Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Trie</th>
            <th className="p-3 border">Hash Table</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Prefix Search</td>
            <td className="p-3 border text-green-600">O(m) - Excellent</td>
            <td className="p-3 border text-red-600">O(n×m) - Poor</td>
          </tr>
          <tr>
            <td className="p-3 border">Exact Search</td>
            <td className="p-3 border">O(m)</td>
            <td className="p-3 border">O(m) average</td>
          </tr>
          <tr>
            <td className="p-3 border">Space</td>
            <td className="p-3 border">Higher (pointers)</td>
            <td className="p-3 border">Lower</td>
          </tr>
          <tr>
            <td className="p-3 border">Ordered Iteration</td>
            <td className="p-3 border text-green-600">Yes (lexicographic)</td>
            <td className="p-3 border text-red-600">No</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Autocomplete:</strong> Suggest words based on typed prefix</li>
      <li><strong>Spell Checkers:</strong> Verify if words exist in dictionary</li>
      <li><strong>IP Routing:</strong> Longest prefix matching</li>
      <li><strong>Word Games:</strong> Scrabble, Boggle word validation</li>
      <li><strong>Search Engines:</strong> Query suggestions</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> Tries excel at prefix-based operations. If you need to find all words
        starting with "app", a Trie can do it in O(prefix_length + number_of_matches), while a hash table
        would need to scan all entries.
      </p>
    </div>
  </div>
);

export default TrieIntro;
