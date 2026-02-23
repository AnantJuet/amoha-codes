import React from "react";

const SymbolTableImplementation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Symbol Table Implementation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Symbol Table is a data structure used by compilers to store information about
      identifiers (variables, functions, classes, etc.) in a program. The implementation
      of the symbol table significantly impacts compiler performance, as it is accessed
      frequently during compilation. Common implementations include linear lists, hash tables,
      binary search trees, and hierarchical tables for handling scopes.
    </p>

    <h2 className="text-3xl font-bold mt-8">Symbol Table Entry Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Symbol Table Entry Contents:

struct SymbolEntry {
    string name;           // Identifier name
    string category;       // variable, function, parameter, type, etc.
    Type type;             // Data type information
    int scope_level;       // Nesting level of scope
    int offset;            // Memory offset within scope
    int line_declared;     // Source line of declaration
    bool is_initialized;   // Whether variable is initialized

    // For functions:
    Type return_type;
    List<Type> param_types;
    int num_params;

    // For arrays:
    int dimensions;
    List<int> dim_sizes;

    // Additional attributes
    AccessModifier access; // public, private, protected
    bool is_static;
    bool is_const;
};`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation Methods Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Insert</th>
            <th className="p-3 border">Lookup</th>
            <th className="p-3 border">Space</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Linear List</td>
            <td className="p-3 border font-mono text-gray-900">O(n)</td>
            <td className="p-3 border font-mono text-gray-900">O(n)</td>
            <td className="p-3 border font-mono text-gray-900">O(n)</td>
            <td className="p-3 border">Very small programs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sorted List</td>
            <td className="p-3 border font-mono text-gray-900">O(n)</td>
            <td className="p-3 border font-mono text-gray-900">O(log n)</td>
            <td className="p-3 border font-mono text-gray-900">O(n)</td>
            <td className="p-3 border">Small, lookup-heavy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Binary Search Tree</td>
            <td className="p-3 border font-mono text-gray-900">O(log n)</td>
            <td className="p-3 border font-mono text-gray-900">O(log n)</td>
            <td className="p-3 border font-mono text-gray-900">O(n)</td>
            <td className="p-3 border">Balanced workload</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hash Table</td>
            <td className="p-3 border font-mono text-gray-900">O(1) avg</td>
            <td className="p-3 border font-mono text-gray-900">O(1) avg</td>
            <td className="p-3 border font-mono text-gray-900">O(n)</td>
            <td className="p-3 border">Large programs (most common)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hash Table Implementation</h2>
    <p className="leading-relaxed">
      Hash tables are the most common choice for symbol tables due to their O(1) average
      case performance. The identifier name is hashed to determine the bucket location.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Hash Table Symbol Table:

class HashSymbolTable {
    private:
        static const int TABLE_SIZE = 211;  // Prime number
        List<SymbolEntry> table[TABLE_SIZE];

    // Hash function
    int hash(string name) {
        int h = 0;
        for (char c : name) {
            h = (h * 31 + c) % TABLE_SIZE;
        }
        return h;
    }

    public:
    // Insert symbol
    void insert(SymbolEntry entry) {
        int index = hash(entry.name);
        // Add to front of chain (for scope handling)
        table[index].prepend(entry);
    }

    // Lookup symbol
    SymbolEntry* lookup(string name) {
        int index = hash(name);
        for (SymbolEntry& e : table[index]) {
            if (e.name == name) {
                return &e;
            }
        }
        return nullptr;  // Not found
    }

    // Delete symbol (for leaving scope)
    void remove(string name) {
        int index = hash(name);
        table[index].removeFirst(name);
    }
};`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hash Functions for Identifiers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Hash Functions:

1. Simple Sum (Poor distribution)
   hash(s) = sum of ASCII values % TABLE_SIZE
   Example: hash("abc") = (97+98+99) % 211 = 83

2. Polynomial (Better distribution)
   hash(s) = (s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]) % TABLE_SIZE
   Example: hash("abc") = (97*961 + 98*31 + 99) % 211

3. Shift-Add-XOR
   hash(s):
       h = 0
       for each char c in s:
           h = h ^ ((h << 5) + (h >> 2) + c)
       return h % TABLE_SIZE

4. djb2 (Dan Bernstein)
   hash(s):
       h = 5381
       for each char c in s:
           h = h * 33 + c
       return h % TABLE_SIZE

Collision Resolution:
- Chaining: Each bucket holds a linked list
- Open Addressing: Probe for next empty slot
  - Linear probing: next = (h + i) % size
  - Quadratic probing: next = (h + i^2) % size`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binary Search Tree Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`BST Symbol Table:

struct BSTNode {
    SymbolEntry data;
    BSTNode* left;
    BSTNode* right;
};

class BSTSymbolTable {
    private:
        BSTNode* root = nullptr;

    public:
    // Insert symbol
    void insert(SymbolEntry entry) {
        root = insertHelper(root, entry);
    }

    BSTNode* insertHelper(BSTNode* node, SymbolEntry entry) {
        if (node == nullptr) {
            return new BSTNode{entry, nullptr, nullptr};
        }

        int cmp = entry.name.compare(node->data.name);
        if (cmp < 0) {
            node->left = insertHelper(node->left, entry);
        } else if (cmp > 0) {
            node->right = insertHelper(node->right, entry);
        } else {
            // Duplicate: update or error
            node->data = entry;
        }
        return node;
    }

    // Lookup symbol
    SymbolEntry* lookup(string name) {
        BSTNode* current = root;
        while (current != nullptr) {
            int cmp = name.compare(current->data.name);
            if (cmp == 0) return &current->data;
            current = (cmp < 0) ? current->left : current->right;
        }
        return nullptr;
    }
};

Note: For guaranteed O(log n), use balanced BST (AVL, Red-Black)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hierarchical Symbol Table for Scopes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Scope-Aware Symbol Table:

Each scope has its own symbol table, linked to parent scope.

class ScopedSymbolTable {
    private:
        HashSymbolTable localSymbols;
        ScopedSymbolTable* parent;
        int scopeLevel;
        string scopeName;

    public:
    ScopedSymbolTable(ScopedSymbolTable* parentScope, string name) {
        parent = parentScope;
        scopeLevel = (parent) ? parent->scopeLevel + 1 : 0;
        scopeName = name;
    }

    // Insert in current scope
    void insert(SymbolEntry entry) {
        entry.scope_level = scopeLevel;
        localSymbols.insert(entry);
    }

    // Lookup with scope chain traversal
    SymbolEntry* lookup(string name) {
        // First check current scope
        SymbolEntry* entry = localSymbols.lookup(name);
        if (entry != nullptr) {
            return entry;
        }
        // Then check parent scopes
        if (parent != nullptr) {
            return parent->lookup(name);
        }
        return nullptr;  // Not found in any scope
    }

    // Lookup only in current scope
    SymbolEntry* lookupLocal(string name) {
        return localSymbols.lookup(name);
    }
};

Usage Example:
  Global Scope (level 0)
      |
  Function Scope (level 1)
      |
  Block Scope (level 2)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stack-Based Scope Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Stack-Based Symbol Table:

Alternative using single table with scope markers.

class StackSymbolTable {
    private:
        List<SymbolEntry> symbols;  // Acts as a stack
        List<int> scopeMarkers;     // Mark start of each scope

    public:
    // Enter new scope
    void enterScope() {
        scopeMarkers.push(symbols.size());
    }

    // Exit current scope - remove all symbols
    void exitScope() {
        int marker = scopeMarkers.pop();
        while (symbols.size() > marker) {
            symbols.pop();
        }
    }

    // Insert in current scope
    void insert(SymbolEntry entry) {
        symbols.push(entry);
    }

    // Lookup - search from top of stack
    SymbolEntry* lookup(string name) {
        for (int i = symbols.size() - 1; i >= 0; i--) {
            if (symbols[i].name == name) {
                return &symbols[i];
            }
        }
        return nullptr;
    }

    // Check if declared in current scope only
    bool isDeclaredLocally(string name) {
        int marker = scopeMarkers.top();
        for (int i = symbols.size() - 1; i >= marker; i--) {
            if (symbols[i].name == name) {
                return true;
            }
        }
        return false;
    }
};`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Building Symbol Table for Code:

int x = 10;              // Global
float compute(int n) {   // Function
    int x = n * 2;       // Local shadows global
    if (n > 0) {
        float y = x + 0.5;
        return y;
    }
    return 0.0;
}

Symbol Table States:

After "int x = 10;":
[Global Scope]
  x: {type: int, category: variable, offset: 0}

After entering compute():
[Global Scope]
  x: {type: int, category: variable, offset: 0}
  compute: {type: int->float, category: function}

[Function Scope: compute]
  n: {type: int, category: parameter, offset: 0}
  x: {type: int, category: variable, offset: 4}  // Shadows global x

Inside if block:
[Block Scope]
  y: {type: float, category: variable, offset: 8}

Lookup "x" from if block:
  1. Check Block Scope - not found
  2. Check Function Scope - found! (local x)

Lookup "compute" from if block:
  1. Check Block Scope - not found
  2. Check Function Scope - not found
  3. Check Global Scope - found!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Hash tables are the most common implementation due to O(1) average performance</li>
        <li>Symbol entries store name, type, scope level, offset, and other attributes</li>
        <li>Chaining is preferred for collision handling in compiler symbol tables</li>
        <li>Good hash functions use prime table sizes and polynomial hashing</li>
        <li>Scoped symbol tables use hierarchical or stack-based approaches</li>
        <li>Lookup traverses scope chain from innermost to outermost scope</li>
        <li>Local declarations can shadow outer scope declarations</li>
        <li>Scope exit requires removing or deactivating local symbols</li>
      </ul>
    </div>
  </div>
);

export default SymbolTableImplementation;
