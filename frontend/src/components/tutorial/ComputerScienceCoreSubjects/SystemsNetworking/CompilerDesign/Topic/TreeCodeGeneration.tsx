import React from "react";

const TreeCodeGeneration: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Tree-Based Code Generation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Tree-Based Code Generation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Tree-based code generation</strong> treats expressions as trees and generates code by
      traversing these trees. This approach is particularly elegant because it can determine the
      minimum number of registers needed for any expression and generate optimal code. The Sethi-Ullman
      algorithm is the classic technique for this purpose.
    </p>

    {/* Expression Trees */}
    <h2 className="text-3xl font-bold mt-8">Expression Trees</h2>
    <p className="leading-relaxed">
      An expression tree represents an arithmetic expression where:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Leaves are operands (variables or constants)</li>
      <li>Interior nodes are operators</li>
      <li>Children of a node are its operands</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Expression: (a + b) * (c - d)

Tree representation:
          *
         / \\
        +   -
       / \\ / \\
      a  b c  d

Postorder traversal gives: a b + c d - *
This is reverse Polish notation (RPN)`}
      </pre>
    </div>

    {/* Register Requirements */}
    <h2 className="text-3xl font-bold mt-8">Register Requirements for Trees</h2>
    <p className="leading-relaxed">
      The key insight of tree-based code generation is that we can compute the minimum number
      of registers needed to evaluate any tree.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Register Labeling Rules:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`For a node n in the expression tree:

1. If n is a leaf (variable or constant):
   label(n) = 1  (need one register to hold it)

2. If n is an interior node with children L and R:
   Let l1 = label(L) and l2 = label(R)

   If l1 == l2:
     label(n) = l1 + 1  (need one more register)
   Else:
     label(n) = max(l1, l2)  (larger subtree dominates)

The label of the root = minimum registers needed`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Labeling Example:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Expression: (a + b) * (c - d)

Tree with labels:
          *[2]
         /    \\
       +[2]   -[2]
       / \\   / \\
     a[1]b[1]c[1]d[1]

Calculation:
- a, b, c, d: label = 1 (leaves)
- (+): l1=1, l2=1, equal -> label = 1+1 = 2
- (-): l1=1, l2=1, equal -> label = 1+1 = 2
- (*): l1=2, l2=2, equal -> label = 2+1 = 3

Wait, let me recalculate with proper rules:
- (+): children have labels 1, 1 -> max(1,1)+1 when equal = 2
- Actually: if equal, need l1+1 because both need l1 regs
           but result replaces one, so need l1 to hold result
           while computing other subtree

Minimum registers needed: 2`}
      </pre>
    </div>

    {/* Sethi-Ullman Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Sethi-Ullman Algorithm</h2>
    <p className="leading-relaxed">
      The Sethi-Ullman algorithm generates optimal code for expression trees by:
    </p>
    <ol className="list-decimal list-inside mt-2 space-y-1">
      <li>Labeling each node with registers needed</li>
      <li>Evaluating the larger subtree first</li>
      <li>Using registers efficiently without spilling</li>
    </ol>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Sethi-Ullman Labeling:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Function label(node n):
  if n is a left leaf:
    n.label = 1
  else if n is a right leaf:
    n.label = 0      // Can use directly as operand
  else:
    label(n.left)
    label(n.right)
    l1 = n.left.label
    l2 = n.right.label

    if l1 == l2:
      n.label = l1 + 1
    else:
      n.label = max(l1, l2)`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Sethi-Ullman Code Generation:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Function genCode(node n, registers R[]):
  if n is a leaf:
    emit("MOV", R[0], n.name)
    return R[0]

  l1 = n.left.label
  l2 = n.right.label

  if l2 == 0:  // Right child is leaf, use directly
    result = genCode(n.left, R)
    emit(n.op, result, n.right.name)
    return result

  if l1 >= l2:  // Left needs more registers
    // Evaluate left first
    result = genCode(n.left, R)
    // Save result, evaluate right
    rightResult = genCode(n.right, R[1:])
    emit(n.op, result, rightResult)
    return result

  else:  // Right needs more registers
    // Evaluate right first
    rightResult = genCode(n.right, R)
    // Then left (needs fewer, so R[1:] suffices)
    leftResult = genCode(n.left, R[1:])
    // Result goes in leftResult for proper ordering
    emit(n.op, leftResult, rightResult)
    return leftResult`}
      </pre>
    </div>

    {/* Detailed Example */}
    <h2 className="text-3xl font-bold mt-8">Detailed Example</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Expression: a - b + c * d - e</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Parsed as: ((a - b) + (c * d)) - e

Tree:
            -
           / \\
          +   e
         / \\
        -   *
       / \\ / \\
      a  b c  d`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Step 1: Label the tree</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Leaves: a=1, b=0, c=1, d=0, e=0
(Right leaves get 0 since they can be used directly)

Interior nodes (bottom-up):
- Node (-) with a[1], b[0]: max(1,0) = 1
- Node (*) with c[1], d[0]: max(1,0) = 1
- Node (+) with (-)[1], (*)[1]: 1==1 -> 1+1 = 2
- Node (-) with (+)[2], e[0]: max(2,0) = 2

            -[2]
           /    \\
         +[2]   e[0]
         /   \\
      -[1]   *[1]
       / \\   / \\
    a[1]b[0]c[1]d[0]

Minimum registers needed: 2`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Step 2: Generate code (using R0, R1)</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`genCode(root -, [R0, R1])
  l1=2, l2=0, so l1 >= l2
  Generate left subtree first

  genCode(+, [R0, R1])
    l1=1, l2=1, equal
    Evaluate left first (arbitrary choice when equal)

    genCode(-, [R0, R1])
      l1=1, l2=0
      genCode(a, [R0]): emit "MOV R0, a"
      emit "SUB R0, b"
      return R0

    genCode(*, [R1])  // Only R1 available
      l1=1, l2=0
      genCode(c, [R1]): emit "MOV R1, c"
      emit "MUL R1, d"
      return R1

    emit "ADD R0, R1"
    return R0

  Now generate right: e is leaf with label 0
  emit "SUB R0, e"
  return R0

Generated code:
  MOV R0, a
  SUB R0, b
  MOV R1, c
  MUL R1, d
  ADD R0, R1
  SUB R0, e

Total: 6 instructions, 2 registers - optimal!`}
      </pre>
    </div>

    {/* Evaluation Order Matters */}
    <h2 className="text-3xl font-bold mt-8">Why Evaluation Order Matters</h2>
    <p className="leading-relaxed">
      Evaluating the larger subtree first is crucial for minimizing register usage:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Expression: a * b + c * d + e * f
Tree (left-associative):
            +
           / \\
          +   *
         / \\ / \\
        *  * e  f
       /\\ /\\
      a b c d

Labels:
        +[3]
       /    \\
     +[2]   *[1]
     / \\    / \\
   *[1]*[1]e[1]f[0]

Wrong order (evaluate smaller first):
  MOV R0, a; MUL R0, b    ; R0 = a*b
  MOV R1, c; MUL R1, d    ; R1 = c*d
  ADD R0, R1              ; R0 = a*b + c*d
  MOV R1, e               ; Need R1 for e*f
  MUL R1, f
  ADD R0, R1
  Works but wastes potential

Optimal order (larger subtree first):
  When we have equal subtrees, order doesn't matter
  But when unequal, larger first saves registers`}
      </pre>
    </div>

    {/* Handling Insufficient Registers */}
    <h2 className="text-3xl font-bold mt-8">When Registers Are Insufficient</h2>
    <p className="leading-relaxed">
      If the expression requires more registers than available, we must spill to memory:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Expression requiring 3 registers, but only 2 available:

            +[3]
           /    \\
         *[2]   *[2]
         / \\   / \\
        +   +  +   +
       /\\ /\\ /\\ /\\

Spilling strategy:
1. Evaluate one subtree completely
2. Store result to memory (TEMP)
3. Evaluate other subtree
4. Load TEMP and combine

genCode with spilling:
  if n.label > numRegisters:
    result = genCode(n.right, R[0:numRegisters])
    emit("MOV", TEMP, result)        // Spill
    leftResult = genCode(n.left, R)
    emit("MOV", R[numRegisters-1], TEMP)  // Reload
    emit(n.op, leftResult, R[numRegisters-1])
    return leftResult`}
      </pre>
    </div>

    {/* Commutative Operations */}
    <h2 className="text-3xl font-bold mt-8">Exploiting Commutativity</h2>
    <p className="leading-relaxed">
      For commutative operations (addition, multiplication), we can swap operands to reduce
      register requirements:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Expression: a + (b + (c + (d + e)))

Original tree (right-heavy):
      +[4]
     / \\
    a   +[3]
       / \\
      b   +[2]
         / \\
        c   +[1]
           / \\
          d   e

Needs 4 registers!

Exploit commutativity - rebalance:
      +[2]
     / \\
   +[2] +[2]
   /\\   /\\
  a  b c  +[1]
         / \\
        d   e

Only needs 2 registers!`}
      </pre>
    </div>

    {/* Comparison with DAG */}
    <h2 className="text-3xl font-bold mt-8">Trees vs DAGs</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Trees</th>
            <th className="p-3 border">DAGs</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Common Subexpressions</td>
            <td className="p-3 border">Duplicated</td>
            <td className="p-3 border">Shared (computed once)</td>
          </tr>
          <tr>
            <td className="p-3 border">Optimal Algorithm</td>
            <td className="p-3 border">Sethi-Ullman (polynomial)</td>
            <td className="p-3 border">NP-complete</td>
          </tr>
          <tr>
            <td className="p-3 border">Register Needs</td>
            <td className="p-3 border">Predictable (labeling)</td>
            <td className="p-3 border">Depends on ordering</td>
          </tr>
          <tr>
            <td className="p-3 border">Use Case</td>
            <td className="p-3 border">Single expressions</td>
            <td className="p-3 border">Basic blocks with sharing</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      For expression (a + b) * (c + d), what is the minimum number of registers needed?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) 1</li>
      <li>(B) 2</li>
      <li>(C) 3</li>
      <li>(D) 4</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Both subtrees (a+b) and (c+d) need 1 register each. Since they are equal, root needs max(1,1)+0 = 2 registers (one holds left result while computing right).</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      In Sethi-Ullman algorithm, why evaluate the larger subtree first?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) It produces shorter code</li>
      <li>(B) The larger subtree uses more registers; evaluating it first means fewer values need to be held</li>
      <li>(C) It is faster at runtime</li>
      <li>(D) It is required for correctness</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) By evaluating the larger subtree first, we compute it fully before starting the smaller subtree, minimizing total register usage.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      What happens when an expression requires more registers than available?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Compilation fails</li>
      <li>(B) Intermediate results are spilled to memory</li>
      <li>(C) The expression is simplified</li>
      <li>(D) More registers are created</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) When registers are insufficient, intermediate results are stored to memory (spilled) and reloaded when needed.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Expression trees represent computations with operators and operands</li>
      <li>Each node can be labeled with minimum registers needed</li>
      <li>Sethi-Ullman algorithm generates optimal code for trees</li>
      <li>Evaluate the larger subtree first to minimize register usage</li>
      <li>Commutativity can be exploited to reduce register requirements</li>
      <li>When registers are insufficient, spill intermediate results to memory</li>
    </ul>

  </div>
);

export default TreeCodeGeneration;
