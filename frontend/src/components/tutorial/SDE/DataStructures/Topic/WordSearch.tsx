import React from 'react';

const WordSearch: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Word Search using Trie
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Word Search is a classic problem where you need to find if words exist in a 2D grid of characters.
      Using a Trie significantly optimizes searching multiple words by allowing early termination and
      shared prefix traversal.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p>Given a 2D board and a list of words, find all words that can be formed by:</p>
      <ul className="list-disc list-inside mt-2">
        <li>Moving to adjacent cells (up, down, left, right)</li>
        <li>Each cell can only be used once per word</li>
        <li>Words can start from any cell</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <pre className="text-sm">
{`Board:
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

Words: ["oath", "pea", "eat", "rain"]
Output: ["oath", "eat"]`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;  // Store complete word at end node
    }
}

class WordSearchTrie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.word = word;  // Mark end with the complete word
    }
}

function findWords(board, words) {
    const result = [];
    const trie = new WordSearchTrie();

    // Build trie from all words
    for (const word of words) {
        trie.insert(word);
    }

    const rows = board.length;
    const cols = board[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    function dfs(row, col, node) {
        const char = board[row][col];

        // Current char not in trie path
        if (!node.children[char]) {
            return;
        }

        const nextNode = node.children[char];

        // Found a word!
        if (nextNode.word) {
            result.push(nextNode.word);
            nextNode.word = null;  // Avoid duplicates
        }

        // Mark cell as visited
        board[row][col] = '#';

        // Explore all 4 directions
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                board[newRow][newCol] !== '#'
            ) {
                dfs(newRow, newCol, nextNode);
            }
        }

        // Restore cell
        board[row][col] = char;

        // Optimization: remove leaf nodes
        if (Object.keys(nextNode.children).length === 0) {
            delete node.children[char];
        }
    }

    // Start DFS from each cell
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            dfs(row, col, trie.root);
        }
    }

    return result;
}

// Example usage
const board = [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
];
const words = ["oath", "pea", "eat", "rain"];

console.log(findWords(board, words));  // ["oath", "eat"]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why Use Trie?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-red-50 p-4 rounded-lg">
        <h4 className="font-bold text-red-800">Without Trie</h4>
        <p className="text-sm mt-1">Search each word separately</p>
        <p className="text-sm mt-2">Time: O(words × rows × cols × 4^word_length)</p>
        <p className="text-sm text-red-600">Redundant traversals for shared prefixes</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">With Trie</h4>
        <p className="text-sm mt-1">Search all words in one traversal</p>
        <p className="text-sm mt-2">Time: O(rows × cols × 4^max_word_length)</p>
        <p className="text-sm text-green-600">Early termination if prefix not in trie</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Optimizations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Store word at end node:</strong> No need to build word during traversal</li>
      <li><strong>Remove found words:</strong> Set word to null to prevent duplicates</li>
      <li><strong>Prune trie:</strong> Remove leaf nodes to skip unnecessary paths</li>
      <li><strong>Mark visited:</strong> Use '#' to mark cells temporarily</li>
    </ul>

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
            <td className="p-3 border">Build Trie</td>
            <td className="p-3 border">O(W × L) - W words, L avg length</td>
          </tr>
          <tr>
            <td className="p-3 border">DFS Search</td>
            <td className="p-3 border">O(M × N × 4^L) - M×N board, L max word length</td>
          </tr>
          <tr>
            <td className="p-3 border">Space</td>
            <td className="p-3 border">O(W × L) for Trie + O(L) recursion stack</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Single Word Search (Simpler Version)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, index) {
        // Found complete word
        if (index === word.length) return true;

        // Out of bounds or character doesn't match
        if (
            row < 0 || row >= rows ||
            col < 0 || col >= cols ||
            board[row][col] !== word[index]
        ) {
            return false;
        }

        // Mark visited
        const temp = board[row][col];
        board[row][col] = '#';

        // Try all directions
        const found =
            dfs(row + 1, col, index + 1) ||
            dfs(row - 1, col, index + 1) ||
            dfs(row, col + 1, index + 1) ||
            dfs(row, col - 1, index + 1);

        // Restore
        board[row][col] = temp;

        return found;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
}`}</pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Interview Tip:</strong> For single word search, simple DFS without Trie is sufficient.
        Use Trie when searching for multiple words to avoid redundant traversals of shared prefixes.
      </p>
    </div>
  </div>
);

export default WordSearch;
