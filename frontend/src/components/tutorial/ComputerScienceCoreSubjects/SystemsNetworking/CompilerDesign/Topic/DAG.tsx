import React from "react";

const DAG: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Directed Acyclic Graphs (DAG) for Expressions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Directed Acyclic Graph (DAG) is an intermediate representation that extends the concept
      of syntax trees by allowing shared nodes for common subexpressions. Unlike ASTs where each
      occurrence of a subexpression creates a new subtree, DAGs identify and share identical
      subexpressions, enabling automatic common subexpression elimination.
    </p>

    <h2 className="text-3xl font-bold mt-8">AST vs DAG Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Expression: a + a * (b - c) + (b - c) * d

ABSTRACT SYNTAX TREE (No Sharing):
                    +
                   / \\
                  +   *
                 / \\   / \\
                a   * (-)  d
                   / \\  |
                  a  (-)  (b-c subtree duplicated)
                     / \\
                    b   c

Note: (b - c) appears twice as separate subtrees


DIRECTED ACYCLIC GRAPH (With Sharing):
                    +
                   / \\
                  +   *
                 / \\   \\
                a   *   d
                   / \\
                  a   -  ← Shared node!
                     / \\
                    b   c

Key Difference:
- DAG shares the (b - c) computation
- Only computed once, result reused
- Common subexpression automatically identified`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DAG Construction Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm: Build DAG for expression

Input: Expression to evaluate
Output: DAG with shared nodes

Data Structures:
- Node table: Maps (op, left, right) → node
- Leaf table: Maps identifier/constant → node

function buildDAG(expr):
    if expr is a leaf (id or constant):
        if leaf in leaf_table:
            return leaf_table[leaf]
        else:
            node = createLeafNode(expr)
            leaf_table[leaf] = node
            return node

    if expr is binary operation (left op right):
        leftNode = buildDAG(left)
        rightNode = buildDAG(right)

        key = (op, leftNode, rightNode)
        if key in node_table:
            return node_table[key]    // Reuse existing node
        else:
            node = createOpNode(op, leftNode, rightNode)
            node_table[key] = node
            return node

    if expr is unary operation (op operand):
        operandNode = buildDAG(operand)

        key = (op, operandNode, null)
        if key in node_table:
            return node_table[key]
        else:
            node = createOpNode(op, operandNode, null)
            node_table[key] = node
            return node`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step-by-Step DAG Construction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Expression: a = b * -c + b * -c

Step 1: Process first '-c'
    Create leaf node for 'c' → n1
    Create node (-) with child n1 → n2

    DAG:    n2(-)
             |
            n1(c)

Step 2: Process first 'b * -c'
    Create leaf node for 'b' → n3
    Check: (*,n3,n2) not in table
    Create node (*) with children n3, n2 → n4

    DAG:    n4(*)
           /   \\
         n3(b)  n2(-)
                  |
                n1(c)

Step 3: Process second '-c'
    Looking for (-,n1,null)
    FOUND in table! → return n2 (reuse)

Step 4: Process second 'b * -c'
    Looking for (*,n3,n2)
    FOUND in table! → return n4 (reuse)

Step 5: Process 'b*-c + b*-c'
    Looking for (+,n4,n4)
    Not in table, create n5

    DAG:      n5(+)
             /   \\
           n4(*)  (same n4)
           /   \\
         n3(b)  n2(-)
                  |
                n1(c)

Step 6: Final assignment 'a = ...'
    Create leaf for 'a' → n6
    Create assignment node → n7

Final DAG shows common subexpression sharing!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Value Numbering</h2>
    <p className="leading-relaxed">
      Value numbering is a technique used to implement DAG-based common subexpression
      elimination. Each unique computation is assigned a unique number (value number),
      and identical computations share the same value number.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Value Numbering Example:

Code:                    Value Numbers:
t1 = a + b              VN(a)=1, VN(b)=2, VN(t1)=3
t2 = a + b              VN(t2)=3  (same as t1!)
t3 = t1 * t2            VN(t3)=4
t4 = a + b              VN(t4)=3  (same as t1 and t2!)
t5 = t4 * t3            VN(t5)=5

Value Number Table:
+-----+-------------+
| VN  | Expression  |
+-----+-------------+
|  1  | a           |
|  2  | b           |
|  3  | (1) + (2)   |  ← a + b
|  4  | (3) * (3)   |  ← (a+b) * (a+b)
|  5  | (3) * (4)   |  ← (a+b) * result
+-----+-------------+

Optimized Code:
t1 = a + b              // Computed once
t2 = t1                 // Copy instead of recompute
t3 = t1 * t2            // Use t1 instead of recalculating
t4 = t1                 // Copy
t5 = t4 * t3`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DAG for Statements with Assignments</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Code:
    a = b + c
    b = a - d
    c = b + c
    d = a - d

DAG Construction:

Step 1: a = b + c
    Create nodes: b0, c0, (+, b0, c0)
    Attach label 'a' to + node

         (a)+
          / \\
       b0(b) c0(c)

Step 2: b = a - d
    a points to + node
    Create d0 node
    Create (-, +node, d0), attach 'b'

              (b)-
              / \\
         (a)+   d0(d)
          / \\
       b0   c0(c)

Step 3: c = b + c
    b points to - node
    c currently points to c0
    Create (+, -node, c0), attach 'c'

    [c moved from c0 to new + node]

Step 4: d = a - d
    a points to + node, d points to d0
    (-, +node, d0) already exists (b's node)!
    Attach 'd' label to same node as 'b'

Final DAG: d and b share the same node!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DAG Node Data Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`// C++ DAG Node Implementation

class DAGNode {
public:
    enum NodeType { LEAF, OPERATOR };
    NodeType type;

    // For leaf nodes
    string value;           // Variable name or constant

    // For operator nodes
    string op;              // Operator (+, -, *, /)
    DAGNode* left;          // Left child
    DAGNode* right;         // Right child (null for unary)

    // Labels (variables whose value is this expression)
    vector<string> labels;

    // Unique identifier for value numbering
    int valueNumber;
};

class DAGBuilder {
private:
    map<string, DAGNode*> leafTable;           // id → node
    map<tuple<string,int,int>, DAGNode*> opTable;  // (op,vnL,vnR) → node
    int nextVN = 0;

public:
    DAGNode* build(Expression* expr) {
        if (expr->isLeaf()) {
            if (leafTable.count(expr->name))
                return leafTable[expr->name];
            auto node = new DAGNode();
            node->type = DAGNode::LEAF;
            node->value = expr->name;
            node->valueNumber = nextVN++;
            leafTable[expr->name] = node;
            return node;
        }

        auto left = build(expr->left);
        auto right = expr->right ? build(expr->right) : nullptr;

        auto key = make_tuple(expr->op,
                              left->valueNumber,
                              right ? right->valueNumber : -1);
        if (opTable.count(key))
            return opTable[key];

        auto node = new DAGNode();
        node->type = DAGNode::OPERATOR;
        node->op = expr->op;
        node->left = left;
        node->right = right;
        node->valueNumber = nextVN++;
        opTable[key] = node;
        return node;
    }
};`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Generating Code from DAG</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DAG to Three-Address Code:

DAG for: a = b * -c + b * -c

          (a)+
          /  \\
        (*)  (same node)
        / \\
      (b) (-)
           |
          (c)

Code Generation (topological order):
    t1 = -c         ; (-) node
    t2 = b * t1     ; (*) node
    t3 = t2 + t2    ; (+) node  -- CSE: same t2 used twice!
    a = t3

Compare with non-DAG code:
    t1 = -c
    t2 = b * t1
    t3 = -c         ; REDUNDANT!
    t4 = b * t3     ; REDUNDANT!
    t5 = t2 + t4
    a = t5

DAG saves 2 instructions automatically!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of DAG</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Automatic CSE:</strong> Common subexpressions detected during construction</li>
      <li><strong>Space Efficient:</strong> Shared nodes reduce memory usage</li>
      <li><strong>Optimized Code:</strong> Generated code avoids redundant computations</li>
      <li><strong>Clear Data Flow:</strong> Easy to see value dependencies</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of DAG</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Construction Overhead:</strong> Hash table lookups during construction</li>
      <li><strong>Limited Scope:</strong> Only handles local/basic block CSE</li>
      <li><strong>Complex with Side Effects:</strong> Function calls and assignments complicate sharing</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DAG extends AST by sharing identical subexpressions</li>
        <li>Nodes can have multiple parents (unlike trees)</li>
        <li>No cycles allowed (acyclic) - dependencies flow one direction</li>
        <li>Value numbering assigns unique IDs to unique computations</li>
        <li>Constructed using hash tables for efficient lookup</li>
        <li>Automatically eliminates common subexpressions</li>
        <li>Leaves represent operands, internal nodes represent operators</li>
        <li>Multiple variable labels can attach to same node</li>
        <li>Generated code is more efficient than from plain AST</li>
      </ul>
    </div>
  </div>
);

export default DAG;
