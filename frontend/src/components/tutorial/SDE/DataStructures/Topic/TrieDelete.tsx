import React from 'react';

const TrieDelete: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Delete Operation in Trie
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Deleting a word from a Trie is more complex than insert or search. We need to handle
      multiple cases while ensuring we don't break other words sharing the same prefix.
    </p>

    <h2 className="text-2xl font-bold mt-6">Cases to Consider</h2>
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Case 1: Word is prefix of another word</h4>
        <p className="text-sm mt-1">Example: Delete "app" when "apple" exists</p>
        <p className="text-sm">Solution: Just unmark isEndOfWord, don't delete nodes</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Case 2: Word has common prefix with another</h4>
        <p className="text-sm mt-1">Example: Delete "apple" when "app" exists</p>
        <p className="text-sm">Solution: Delete nodes from end until shared prefix</p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-bold text-yellow-800">Case 3: Word has no common prefix</h4>
        <p className="text-sm mt-1">Example: Delete "cat" when no other word shares "c"</p>
        <p className="text-sm">Solution: Delete all nodes</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Trie with: ["app", "apple", "apply"]</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-sm font-bold">Before delete "apple":</p>
          <pre className="text-xs mt-2">
{`    (root)
       |
       a
       |
       p
       |
       p*
      / \\
     l   l
     |   |
     e*  y*`}
          </pre>
        </div>
        <div>
          <p className="text-sm font-bold">After delete "apple":</p>
          <pre className="text-xs mt-2">
{`    (root)
       |
       a
       |
       p
       |
       p*
       |
       l
       |
       y*`}
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
    }

    hasChildren() {
        return this.children.size > 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char);
        }
        current.isEndOfWord = true;
    }

    // DELETE OPERATION
    delete(word) {
        return this._delete(this.root, word, 0);
    }

    _delete(node, word, index) {
        // Base case: reached end of word
        if (index === word.length) {
            // Word doesn't exist
            if (!node.isEndOfWord) {
                return false;
            }

            // Unmark the end of word
            node.isEndOfWord = false;

            // Return true if node has no children (can be deleted)
            return !node.hasChildren();
        }

        const char = word[index];
        const childNode = node.children.get(char);

        // Character not found, word doesn't exist
        if (!childNode) {
            return false;
        }

        // Recursively delete in child
        const shouldDeleteChild = this._delete(childNode, word, index + 1);

        // If child should be deleted, remove from children map
        if (shouldDeleteChild) {
            node.children.delete(char);

            // Return true if current node can also be deleted
            // (no other children and not end of another word)
            return !node.hasChildren() && !node.isEndOfWord;
        }

        return false;
    }

    search(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children.has(char)) {
                return false;
            }
            current = current.children.get(char);
        }
        return current.isEndOfWord;
    }

    // Get all words in trie (for verification)
    getAllWords() {
        const words = [];
        this._collectWords(this.root, "", words);
        return words;
    }

    _collectWords(node, prefix, words) {
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (const [char, childNode] of node.children) {
            this._collectWords(childNode, prefix + char, words);
        }
    }
}

// Example usage
const trie = new Trie();
trie.insert("app");
trie.insert("apple");
trie.insert("apply");
trie.insert("banana");

console.log("Before deletion:", trie.getAllWords());
// ["app", "apple", "apply", "banana"]

trie.delete("apple");
console.log("After deleting 'apple':", trie.getAllWords());
// ["app", "apply", "banana"]

trie.delete("app");
console.log("After deleting 'app':", trie.getAllWords());
// ["apply", "banana"]

console.log(trie.search("app"));    // false
console.log(trie.search("apply"));  // true`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Walkthrough</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Delete "apple" from ["app", "apple", "apply"]:</p>
      <ol className="list-decimal list-inside mt-2 space-y-2 text-sm">
        <li>Traverse to 'e' node (end of "apple")</li>
        <li>Unmark isEndOfWord for 'e'</li>
        <li>Check if 'e' has children → No</li>
        <li>Delete 'e', return true</li>
        <li>Check if 'l' (after p) has other children → No</li>
        <li>Delete that 'l', return true</li>
        <li>Check if 'p' (3rd level) has other children → Yes ('l' for "apply")</li>
        <li>Stop deletion, return false</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Time Complexity</td>
            <td className="p-3 border">O(m) - m is word length</td>
          </tr>
          <tr>
            <td className="p-3 border">Space Complexity</td>
            <td className="p-3 border">O(m) - recursion stack</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-6">
      <p className="text-red-700">
        <strong>Important:</strong> Always check if a node is the end of another word before
        deleting it. Never delete nodes that are part of other valid words in the Trie.
      </p>
    </div>
  </div>
);

export default TrieDelete;
