import React from "react";

const ScopeBinding: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Variable Scope and Binding
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Scope defines the region of a program where a binding (association between a name
      and an entity) is valid. Binding refers to the association of identifiers with
      their meanings (values, types, memory locations). Understanding scope rules is
      essential for semantic analysis, as the compiler must determine which declaration
      each identifier reference corresponds to.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Scope</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scope Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Global Scope</td>
            <td className="p-3 border">Visible throughout entire program</td>
            <td className="p-3 border font-mono text-gray-900">Global variables, functions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Local Scope</td>
            <td className="p-3 border">Visible within a specific block/function</td>
            <td className="p-3 border font-mono text-gray-900">Function parameters, local vars</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Block Scope</td>
            <td className="p-3 border">Visible within a block (if, while, etc.)</td>
            <td className="p-3 border font-mono text-gray-900">Variables in {"{ }"} blocks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Class/Module Scope</td>
            <td className="p-3 border">Visible within a class or module</td>
            <td className="p-3 border font-mono text-gray-900">Class members, private vars</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Scope Rules: Static vs Dynamic</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Static Scoping (Lexical Scoping):
- Scope determined by program text structure
- Used by most modern languages (C, Java, Python)
- Binding resolved at compile time

int x = 10;

void foo() {
    print(x);  // Uses global x (value: 10)
}

void bar() {
    int x = 20;
    foo();     // Still prints 10 (static scoping)
}

-------------------------------------------

Dynamic Scoping:
- Scope determined by runtime call stack
- Used by some older languages (early Lisp, Bash)
- Binding resolved at runtime

int x = 10;

void foo() {
    print(x);  // Uses most recent x on call stack
}

void bar() {
    int x = 20;
    foo();     // Prints 20 (dynamic scoping)
               // because bar's x is on stack
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binding Time</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Binding Time</th>
            <th className="p-3 border">When</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Language Design</td>
            <td className="p-3 border">Language specification</td>
            <td className="p-3 border">Built-in operators, keywords</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Compile Time</td>
            <td className="p-3 border">During compilation</td>
            <td className="p-3 border">Variable types, static addresses</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Link Time</td>
            <td className="p-3 border">When modules are linked</td>
            <td className="p-3 border">External function addresses</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Load Time</td>
            <td className="p-3 border">Program loading</td>
            <td className="p-3 border">Static variable addresses</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Run Time</td>
            <td className="p-3 border">During execution</td>
            <td className="p-3 border">Local variables, heap allocation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Name Resolution in Nested Scopes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Nested Scope Example:

int a = 1;                    // Scope Level 0 (Global)

void outer() {                // Scope Level 1
    int b = 2;

    void inner() {            // Scope Level 2
        int c = 3;

        // Name resolution for 'a':
        // 1. Check Level 2: not found
        // 2. Check Level 1: not found
        // 3. Check Level 0: found! (global a)

        print(a);  // Prints 1
        print(b);  // Prints 2 (from outer)
        print(c);  // Prints 3 (local)
    }

    inner();
    // print(c);  // ERROR: c not visible here
}

Scope Chain: inner -> outer -> global

Name Shadowing:
int x = 10;
void func() {
    int x = 20;     // Shadows global x
    print(x);       // Prints 20 (local x)
    // Global x is hidden but still exists
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Storage Classes and Lifetime</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Storage Classes (C/C++):

1. auto (default for locals)
   - Scope: Local to block
   - Lifetime: Block execution
   - Storage: Stack

   void func() {
       auto int x = 10;  // Same as: int x = 10;
   }  // x destroyed here

2. static
   - Scope: Local to block (but persistent)
   - Lifetime: Program execution
   - Storage: Data segment

   void counter() {
       static int count = 0;
       count++;  // Retains value between calls
   }

3. extern
   - Scope: Global (across files)
   - Lifetime: Program execution
   - Storage: Data segment

   // file1.c
   int globalVar = 100;

   // file2.c
   extern int globalVar;  // Declaration, not definition

4. register
   - Scope: Local to block
   - Lifetime: Block execution
   - Storage: CPU register (hint)

   void func() {
       register int i;  // Compiler may use register
   }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binding in Different Languages</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Language-Specific Scope Rules:

Python (LEGB Rule):
  L - Local: Inside current function
  E - Enclosing: In outer functions (closures)
  G - Global: Module level
  B - Built-in: Python built-ins

  x = "global"
  def outer():
      x = "enclosing"
      def inner():
          x = "local"
          print(x)  # "local"
      inner()

JavaScript (var vs let/const):
  var: Function-scoped, hoisted
  let/const: Block-scoped, no hoisting

  function test() {
      if (true) {
          var x = 1;    // Function scope
          let y = 2;    // Block scope
      }
      console.log(x);   // 1 (accessible)
      console.log(y);   // ERROR (not accessible)
  }

Java:
  - Block scope for local variables
  - Class scope for members
  - No global scope (everything in classes)

  class Example {
      int x;                    // Instance scope
      static int y;             // Class scope
      void method() {
          int z;                // Local scope
          if (true) {
              int w;            // Block scope
          }
      }
  }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Closure and Free Variables</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Closures: Functions with Captured Bindings

A closure captures variables from its enclosing scope.

def make_counter():
    count = 0  # Captured by inner function

    def counter():
        nonlocal count
        count += 1
        return count

    return counter

c1 = make_counter()
print(c1())  # 1
print(c1())  # 2

c2 = make_counter()  # New closure with new count
print(c2())  # 1 (independent)

Free Variables:
- Variables used in a function but not defined there
- Must be bound in enclosing scope

def outer():
    x = 10           # Bound variable of outer

    def inner():
        return x + 1  # x is FREE variable of inner
                      # Bound in enclosing scope

    return inner()

Compiler must:
1. Identify free variables
2. Determine where they're bound
3. Set up access mechanism (closure record)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Compiler Implementation of Scoping</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Semantic Analyzer Scope Handling:

class SemanticAnalyzer {
    ScopedSymbolTable currentScope;

    void visitProgram(ProgramNode node) {
        currentScope = new GlobalScope();
        visit(node.declarations);
        visit(node.statements);
    }

    void visitFunctionDecl(FunctionNode node) {
        // Create new scope for function
        currentScope = new FunctionScope(currentScope);

        // Add parameters to function scope
        for (param : node.parameters) {
            currentScope.insert(param);
        }

        // Process function body
        visit(node.body);

        // Exit function scope
        currentScope = currentScope.parent;
    }

    void visitBlock(BlockNode node) {
        currentScope = new BlockScope(currentScope);
        visit(node.statements);
        currentScope = currentScope.parent;
    }

    void visitVarDecl(VarDeclNode node) {
        // Check for duplicate in current scope
        if (currentScope.lookupLocal(node.name)) {
            error("Duplicate declaration: " + node.name);
        }
        currentScope.insert(node);
    }

    void visitIdentifier(IdentifierNode node) {
        // Lookup through scope chain
        Symbol sym = currentScope.lookup(node.name);
        if (sym == null) {
            error("Undeclared identifier: " + node.name);
        }
        node.symbol = sym;  // Attach binding info
    }
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Scope defines the visibility region of a binding in source code</li>
        <li>Static (lexical) scoping resolves bindings based on program text structure</li>
        <li>Dynamic scoping resolves bindings based on runtime call stack</li>
        <li>Binding time varies: compile time, link time, load time, or runtime</li>
        <li>Inner scopes can shadow declarations from outer scopes</li>
        <li>Storage classes (auto, static, extern) affect lifetime and visibility</li>
        <li>Closures capture free variables from enclosing scopes</li>
        <li>Compilers use scope chains to resolve identifier references</li>
      </ul>
    </div>
  </div>
);

export default ScopeBinding;
