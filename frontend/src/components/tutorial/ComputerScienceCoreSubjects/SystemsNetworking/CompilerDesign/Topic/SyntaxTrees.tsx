import React from "react";

const SyntaxTrees: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Abstract Syntax Trees as Intermediate Representation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An Abstract Syntax Tree (AST) is a hierarchical tree representation of the syntactic
      structure of source code. Unlike parse trees, ASTs omit syntactic details like parentheses
      and precedence information, keeping only the essential semantic structure. ASTs serve as
      an important high-level intermediate representation in compilers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Parse Tree vs Abstract Syntax Tree</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Expression: (a + b) * c

PARSE TREE (Concrete Syntax Tree):
              expr
               │
              term
             / │ \\
          term  *  factor
           │        │
         factor     c
           │
           (
           │
          expr
          / │ \\
       expr + term
        │      │
      term   factor
        │      │
      factor   b
        │
        a

AST (Abstract Syntax Tree):
           *
          / \\
         +   c
        / \\
       a   b

Key Differences:
- AST removes parentheses (structure implies grouping)
- AST has no grammar-specific non-terminals
- AST directly represents the computation structure
- AST is more compact and easier to work with`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AST Node Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Node Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Literal</td>
            <td className="p-3 border">Constants (numbers, strings)</td>
            <td className="p-3 border font-mono text-gray-900">42, "hello"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Identifier</td>
            <td className="p-3 border">Variable/function names</td>
            <td className="p-3 border font-mono text-gray-900">x, count, main</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Binary Op</td>
            <td className="p-3 border">Two operand operations</td>
            <td className="p-3 border font-mono text-gray-900">+, -, *, /, {"<"}, ==</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unary Op</td>
            <td className="p-3 border">Single operand operations</td>
            <td className="p-3 border font-mono text-gray-900">-, !, ++</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Assignment</td>
            <td className="p-3 border">Variable assignment</td>
            <td className="p-3 border font-mono text-gray-900">x = expr</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">If-Else</td>
            <td className="p-3 border">Conditional statement</td>
            <td className="p-3 border font-mono text-gray-900">if-then-else</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">While</td>
            <td className="p-3 border">Loop statement</td>
            <td className="p-3 border font-mono text-gray-900">while-do</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Call</td>
            <td className="p-3 border">Function call</td>
            <td className="p-3 border font-mono text-gray-900">func(args)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Block</td>
            <td className="p-3 border">Sequence of statements</td>
            <td className="p-3 border font-mono text-gray-900">{"{ stmt; stmt; }"}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">AST Construction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Building AST for: x = a + b * c

Parsing with Semantic Actions:

E → E1 + T    { E.node = new BinOp('+', E1.node, T.node) }
E → T         { E.node = T.node }
T → T1 * F    { T.node = new BinOp('*', T1.node, F.node) }
T → F         { T.node = F.node }
F → id        { F.node = new Id(id.name) }
F → num       { F.node = new Num(num.value) }
S → id = E    { S.node = new Assign(id.name, E.node) }

Construction Steps:
1. Parse 'c' → F.node = Id('c')
2. F → T    → T.node = Id('c')
3. Parse 'b' → F.node = Id('b')
4. T * F    → T.node = BinOp('*', Id('b'), Id('c'))
5. T → E    → E.node = BinOp('*', Id('b'), Id('c'))
6. Parse 'a' → F.node = Id('a')
7. F → T → E
8. E + T    → E.node = BinOp('+', Id('a'), BinOp('*', Id('b'), Id('c')))
9. x = E   → Assign('x', BinOp('+', ...))

Resulting AST:
           =
          / \\
         x   +
            / \\
           a   *
              / \\
             b   c`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AST for Control Structures</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source Code:
    if (x > 0) {
        y = x;
    } else {
        y = -x;
    }

AST Representation:
              if-else
             /   |   \\
            >   stmt  stmt
           / \\   |     |
          x   0  =     =
                / \\   / \\
               y   x y   -
                        |
                        x

Source Code:
    while (i < n) {
        sum = sum + arr[i];
        i = i + 1;
    }

AST Representation:
              while
              /    \\
             <     block
            / \\    / \\
           i   n  =   =
                 /\\   /\\
               sum +  i  +
                  /\\    /\\
               sum []  i  1
                  /\\
                arr i`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Structure Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`// C++ AST Node Classes

// Base class for all AST nodes
class ASTNode {
public:
    virtual ~ASTNode() = default;
    virtual void accept(Visitor* v) = 0;  // For traversal
};

// Expression nodes
class Expr : public ASTNode {};

class NumExpr : public Expr {
public:
    int value;
    NumExpr(int v) : value(v) {}
};

class IdExpr : public Expr {
public:
    string name;
    IdExpr(string n) : name(n) {}
};

class BinOpExpr : public Expr {
public:
    char op;
    Expr* left;
    Expr* right;
    BinOpExpr(char o, Expr* l, Expr* r)
        : op(o), left(l), right(r) {}
};

class UnaryExpr : public Expr {
public:
    char op;
    Expr* operand;
    UnaryExpr(char o, Expr* e) : op(o), operand(e) {}
};

// Statement nodes
class Stmt : public ASTNode {};

class AssignStmt : public Stmt {
public:
    string varName;
    Expr* value;
    AssignStmt(string v, Expr* e) : varName(v), value(e) {}
};

class IfStmt : public Stmt {
public:
    Expr* condition;
    Stmt* thenBranch;
    Stmt* elseBranch;  // nullptr if no else
    IfStmt(Expr* c, Stmt* t, Stmt* e = nullptr)
        : condition(c), thenBranch(t), elseBranch(e) {}
};

class WhileStmt : public Stmt {
public:
    Expr* condition;
    Stmt* body;
    WhileStmt(Expr* c, Stmt* b) : condition(c), body(b) {}
};

class BlockStmt : public Stmt {
public:
    vector<Stmt*> statements;
    void add(Stmt* s) { statements.push_back(s); }
};`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AST to Three-Address Code</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Translation Function (Post-order Traversal):

string translate(ASTNode* node) {
    if (node is NumExpr) {
        return node->value;          // Return constant
    }
    if (node is IdExpr) {
        return node->name;           // Return variable name
    }
    if (node is BinOpExpr) {
        string left = translate(node->left);
        string right = translate(node->right);
        string temp = newTemp();
        emit(temp + " = " + left + " " + node->op + " " + right);
        return temp;
    }
    if (node is AssignStmt) {
        string value = translate(node->value);
        emit(node->varName + " = " + value);
    }
    if (node is IfStmt) {
        string cond = translate(node->condition);
        string L1 = newLabel();
        string L2 = newLabel();
        emit("if " + cond + " goto " + L1);
        translate(node->elseBranch);
        emit("goto " + L2);
        emit(L1 + ":");
        translate(node->thenBranch);
        emit(L2 + ":");
    }
}

Example: x = a + b * c

AST:       =
          / \\
         x   +
            / \\
           a   *
              / \\
             b   c

Post-order Traversal:
1. Visit 'b' → return "b"
2. Visit 'c' → return "c"
3. Visit '*' → emit "t1 = b * c", return "t1"
4. Visit 'a' → return "a"
5. Visit '+' → emit "t2 = a + t1", return "t2"
6. Visit '=' → emit "x = t2"

Generated TAC:
    t1 = b * c
    t2 = a + t1
    x = t2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of AST as IR</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Preserves Structure:</strong> Maintains hierarchical relationships</li>
      <li><strong>Easy Analysis:</strong> Good for type checking, semantic analysis</li>
      <li><strong>Transformation:</strong> Easy to apply source-to-source transformations</li>
      <li><strong>Language Independence:</strong> Can represent many languages</li>
      <li><strong>Debugging:</strong> Easy to map back to source code</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of AST as IR</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Memory Overhead:</strong> Tree structure uses more memory than linear IR</li>
      <li><strong>Pointer Chasing:</strong> Tree traversal can be slow (poor cache locality)</li>
      <li><strong>Not Optimized:</strong> No common subexpression sharing (unlike DAG)</li>
      <li><strong>Far from Machine:</strong> Additional translation needed for code gen</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">AST in Real Compilers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Compiler</th>
            <th className="p-3 border">AST Usage</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Clang</td>
            <td className="p-3 border">Clang AST for C/C++, converted to LLVM IR</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">GCC</td>
            <td className="p-3 border">GENERIC trees, converted to GIMPLE</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Roslyn</td>
            <td className="p-3 border">C# AST with red-green tree design</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TypeScript</td>
            <td className="p-3 border">Full AST for type checking and emit</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>AST is a tree representation that abstracts away syntactic details</li>
        <li>More compact than parse trees (no parentheses, no grammar artifacts)</li>
        <li>Nodes represent operations, leaves represent operands</li>
        <li>Tree structure directly represents operator precedence and associativity</li>
        <li>Excellent for semantic analysis and source-to-source transformations</li>
        <li>Traversed in post-order to generate linear IR (TAC)</li>
        <li>Used as high-level IR in most modern compilers</li>
        <li>Can be converted to DAG for common subexpression optimization</li>
      </ul>
    </div>
  </div>
);

export default SyntaxTrees;
