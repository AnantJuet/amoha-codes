import React from 'react';

const Autocomplete: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Autocomplete using Trie
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Autocomplete (or typeahead) is a feature that predicts and suggests completions for
      partially typed words. Tries are the ideal data structure for implementing efficient
      autocomplete systems.
    </p>

    <h2 className="text-2xl font-bold mt-6">How Autocomplete Works</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>User types a prefix (e.g., "app")</li>
      <li>System traverses Trie to the prefix node</li>
      <li>Collects all words from that node downward</li>
      <li>Returns suggestions sorted by relevance</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
        this.frequency = 0;  // Track word frequency for ranking
    }
}

class AutocompleteTrie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert word with optional frequency
    insert(word, frequency = 1) {
        let current = this.root;

        for (const char of word.toLowerCase()) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char);
        }

        current.isEndOfWord = true;
        current.frequency += frequency;
    }

    // Get autocomplete suggestions
    autocomplete(prefix, limit = 10) {
        const node = this._traverse(prefix.toLowerCase());

        if (!node) {
            return [];  // No words with this prefix
        }

        const suggestions = [];
        this._collectWords(node, prefix.toLowerCase(), suggestions);

        // Sort by frequency (descending) and return top results
        return suggestions
            .sort((a, b) => b.frequency - a.frequency)
            .slice(0, limit)
            .map(item => item.word);
    }

    // Get suggestions with frequency scores
    autocompleteWithScores(prefix, limit = 10) {
        const node = this._traverse(prefix.toLowerCase());

        if (!node) {
            return [];
        }

        const suggestions = [];
        this._collectWords(node, prefix.toLowerCase(), suggestions);

        return suggestions
            .sort((a, b) => b.frequency - a.frequency)
            .slice(0, limit);
    }

    _traverse(prefix) {
        let current = this.root;

        for (const char of prefix) {
            if (!current.children.has(char)) {
                return null;
            }
            current = current.children.get(char);
        }

        return current;
    }

    _collectWords(node, prefix, suggestions) {
        if (node.isEndOfWord) {
            suggestions.push({
                word: prefix,
                frequency: node.frequency
            });
        }

        for (const [char, childNode] of node.children) {
            this._collectWords(childNode, prefix + char, suggestions);
        }
    }

    // Update frequency when user selects a suggestion
    recordSelection(word) {
        this.insert(word, 1);  // Increment frequency
    }
}

// Example usage
const autocomplete = new AutocompleteTrie();

// Build dictionary with frequencies
const words = [
    { word: "apple", freq: 100 },
    { word: "application", freq: 80 },
    { word: "apply", freq: 90 },
    { word: "app", freq: 150 },
    { word: "appetizer", freq: 30 },
    { word: "appreciate", freq: 50 },
    { word: "banana", freq: 70 }
];

words.forEach(({ word, freq }) => autocomplete.insert(word, freq));

// Get suggestions
console.log(autocomplete.autocomplete("app"));
// ["app", "apple", "apply", "application", "appreciate", "appetizer"]

console.log(autocomplete.autocomplete("app", 3));
// ["app", "apple", "apply"]

console.log(autocomplete.autocompleteWithScores("app", 3));
// [{word: "app", frequency: 150}, {word: "apple", frequency: 100}, ...]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Enhanced Features</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class AdvancedAutocomplete extends AutocompleteTrie {
    constructor() {
        super();
        this.recentSearches = [];
    }

    // Fuzzy matching for typo tolerance
    fuzzyAutocomplete(prefix, maxEdits = 1, limit = 10) {
        const results = new Set();

        // Try exact prefix first
        const exact = this.autocomplete(prefix, limit);
        exact.forEach(word => results.add(word));

        // Try with one character removed
        for (let i = 0; i < prefix.length; i++) {
            const modified = prefix.slice(0, i) + prefix.slice(i + 1);
            const suggestions = this.autocomplete(modified, limit);
            suggestions.forEach(word => results.add(word));
        }

        // Try with one character replaced
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < prefix.length && maxEdits > 0; i++) {
            for (const char of alphabet) {
                if (char !== prefix[i]) {
                    const modified = prefix.slice(0, i) + char + prefix.slice(i + 1);
                    const suggestions = this.autocomplete(modified, 3);
                    suggestions.forEach(word => results.add(word));
                }
            }
        }

        return Array.from(results).slice(0, limit);
    }

    // Track recent searches for personalization
    addRecentSearch(query) {
        this.recentSearches = [
            query,
            ...this.recentSearches.filter(q => q !== query)
        ].slice(0, 10);
    }

    // Get personalized suggestions
    personalizedAutocomplete(prefix, limit = 10) {
        const suggestions = this.autocomplete(prefix, limit * 2);

        // Boost recent searches
        const boosted = suggestions.map(word => ({
            word,
            score: this.recentSearches.includes(word) ? 1000 : 0
        }));

        return boosted
            .sort((a, b) => b.score - a.score)
            .slice(0, limit)
            .map(item => item.word);
    }
}

// Usage
const search = new AdvancedAutocomplete();
search.insert("javascript", 100);
search.insert("java", 80);
search.insert("python", 90);

// Fuzzy search handles typos
console.log(search.fuzzyAutocomplete("javascript")); // Finds "javascript"`}</pre>
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
            <td className="p-3 border">Insert word</td>
            <td className="p-3 border">O(m)</td>
          </tr>
          <tr>
            <td className="p-3 border">Get suggestions</td>
            <td className="p-3 border">O(p + n) where p=prefix length, n=results</td>
          </tr>
          <tr>
            <td className="p-3 border">Sort by frequency</td>
            <td className="p-3 border">O(n log n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Considerations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Ranking:</strong> Use frequency, recency, and user preferences</li>
      <li><strong>Caching:</strong> Cache popular prefixes for faster response</li>
      <li><strong>Limiting:</strong> Set max suggestions to avoid overwhelming users</li>
      <li><strong>Debouncing:</strong> Wait for user to stop typing before querying</li>
      <li><strong>Highlighting:</strong> Show which part of suggestion matches input</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Production Tip:</strong> For large-scale autocomplete systems (like Google Search),
        distributed tries with sharding and caching layers are used. The basic Trie provides the
        foundation, but real systems add layers for scale and personalization.
      </p>
    </div>
  </div>
);

export default Autocomplete;
