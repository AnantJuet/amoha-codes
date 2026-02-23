import React from 'react';

const TrieInsertSearch: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Trie: Insert and Search Operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Insert and Search are the fundamental operations in a Trie. Understanding these operations
      is key to implementing efficient string-based algorithms.
    </p>

    <h2 className="text-2xl font-bold mt-6">Insert Operation</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Algorithm:</p>
      <ol className="list-decimal list-inside mt-2 space-y-1">
        <li>Start from the root node</li>
        <li>For each character in the word:</li>
        <ul className="list-disc list-inside ml-6">
          <li>If character doesn't exist as child, create new node</li>
          <li>Move to the child node</li>
        </ul>
        <li>Mark the last node as end of word</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Example: Insert</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Insert "car" then "cat":</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div>
          <p className="text-sm font-bold">After inserting "car":</p>
          <pre className="text-sm mt-2">
{`  (root)
     |
     c
     |
     a
     |
     r*`}
          </pre>
        </div>
        <div>
          <p className="text-sm font-bold">After inserting "cat":</p>
          <pre className="text-sm mt-2">
{`  (root)
     |
     c
     |
     a
    / \\
   r*  t*`}
          </pre>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
        this.count = 0;  // Optional: count words with this prefix
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // INSERT OPERATION - O(m) time, O(m) space for new word
    insert(word) {
        let current = this.root;

        for (const char of word) {
            // Create node if it doesn't exist
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }

            current = current.children.get(char);
            current.count++;  // Track prefix count
        }

        current.isEndOfWord = true;
    }

    // SEARCH OPERATION - O(m) time
    search(word) {
        const node = this._traverse(word);
        return node !== null && node.isEndOfWord;
    }

    // PREFIX SEARCH - O(m) time
    startsWith(prefix) {
        return this._traverse(prefix) !== null;
    }

    // Helper: traverse to node representing given string
    _traverse(str) {
        let current = this.root;

        for (const char of str) {
            if (!current.children.has(char)) {
                return null;  // Character not found
            }
            current = current.children.get(char);
        }

        return current;
    }

    // COUNT WORDS WITH PREFIX - O(m) time
    countWordsWithPrefix(prefix) {
        const node = this._traverse(prefix);
        return node ? node.count : 0;
    }

    // GET ALL WORDS WITH PREFIX - O(n) where n is number of results
    getWordsWithPrefix(prefix) {
        const results = [];
        const node = this._traverse(prefix);

        if (node) {
            this._collectWords(node, prefix, results);
        }

        return results;
    }

    _collectWords(node, currentWord, results) {
        if (node.isEndOfWord) {
            results.push(currentWord);
        }

        for (const [char, childNode] of node.children) {
            this._collectWords(childNode, currentWord + char, results);
        }
    }
}

// Example usage
const trie = new Trie();

// Insert words
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("apply");
trie.insert("banana");

// Search operations
console.log(trie.search("app"));           // true
console.log(trie.search("appl"));          // false (not a complete word)
console.log(trie.search("apple"));         // true

// Prefix operations
console.log(trie.startsWith("app"));       // true
console.log(trie.startsWith("ban"));       // true
console.log(trie.startsWith("cat"));       // false

// Get all words with prefix
console.log(trie.getWordsWithPrefix("app"));
// ["app", "apple", "application", "apply"]

console.log(trie.countWordsWithPrefix("app")); // 4`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Search Types</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Exact Word Search</h4>
        <p className="text-sm mt-1">Checks if complete word exists in Trie</p>
        <code className="text-xs bg-white p-1 rounded mt-2 block">
          search("apple") → true/false
        </code>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Prefix Search</h4>
        <p className="text-sm mt-1">Checks if any word starts with prefix</p>
        <code className="text-xs bg-white p-1 rounded mt-2 block">
          startsWith("app") → true/false
        </code>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Insert</td>
            <td className="p-3 border">O(m)</td>
            <td className="p-3 border">O(m) worst case</td>
          </tr>
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">O(m)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">StartsWith</td>
            <td className="p-3 border">O(m)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2 text-sm text-gray-600">m = length of word/prefix being processed</p>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Unlike hash tables where search is O(1) average but O(n) worst case
        due to collisions, Trie operations are always O(m) regardless of the number of stored words.
      </p>
    </div>
  </div>
);

export default TrieInsertSearch;
