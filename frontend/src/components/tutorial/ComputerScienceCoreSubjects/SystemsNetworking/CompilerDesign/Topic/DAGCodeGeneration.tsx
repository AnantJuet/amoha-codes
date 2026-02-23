import React from "react";

const DAGCodeGeneration: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Code Generation from DAGs ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Code Generation from DAGs
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>DAG-based code generation</strong> uses Directed Acyclic Graphs to represent expressions
      and basic blocks. DAGs naturally capture common subexpressions, allowing the code generator to
      compute shared values once and reuse them. This approach produces more efficient code than
      generating from linear three-address code.
    </p>

    {/* What is a DAG */}
    <h2 className="text-3xl font-bold mt-8">What is a DAG?</h2>
    <p className="leading-relaxed">
      A <strong>Directed Acyclic Graph (DAG)</strong> is a graph with directed edges and no cycles.
      For code generation, each node represents an operation or value, and edges represent data flow.
      Unlike trees, DAGs allow nodes to have multiple parents, representing shared computations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Expression: a + a * (b - c) + (b - c) * d

As a tree (redundant computation):
          +
         / \\
        +   *
       / \\ / \\
      a  *  -  d
        / \\ |\\
       a  - b c
         / \\
        b   c

As a DAG (shared computation):
          +
         / \\
        +   *
       / \\ / \\
      a   *   d
         / \\
        a   -  (shared)
           / \\
          b   c

The DAG computes (b - c) only once!`}
      </pre>
    </div>

    {/* Constructing DAG from Basic Block */}
    <h2 className="text-3xl font-bold mt-8">Constructing a DAG from Basic Block</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Algorithm: DAG Construction</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`For each statement x = y op z in the basic block:

1. Find or create node for y:
   - If y is defined in block, use its current node
   - Otherwise, create leaf node for y

2. Find or create node for z (same as y)

3. Check for existing node with same operation:
   - If node with op(y_node, z_node) exists, reuse it
   - Otherwise, create new interior node

4. Update: x now refers to this node
   - Add x to node's identifier list

Handling redefinitions:
- When variable is redefined, it gets a new node
- Old definition remains valid for earlier uses`}
      </pre>
    </div>

    {/* DAG Construction Example */}
    <h2 className="text-3xl font-bold mt-8">DAG Construction Example</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Three-Address Code:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`(1) t1 = a + b
(2) t2 = a + b      // Same as t1
(3) t3 = t1 * t2
(4) t4 = a + b      // Same again
(5) t5 = t4 * t3`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Step-by-Step DAG Construction:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Step 1: t1 = a + b
  Create leaves for a, b
  Create + node, label with t1

        +[t1]
       / \\
     [a] [b]

Step 2: t2 = a + b
  a, b already exist
  + node with same children exists -> reuse!
  Add t2 to existing node's labels

        +[t1, t2]
       / \\
     [a] [b]

Step 3: t3 = t1 * t2
  t1 and t2 both refer to same + node
  Create * node (self * self = square)

          *[t3]
          |
        +[t1, t2]
       / \\
     [a] [b]

Step 4: t4 = a + b
  Same as t1, t2 -> reuse node

          *[t3]
          |
        +[t1, t2, t4]
       / \\
     [a] [b]

Step 5: t5 = t4 * t3
  t4 -> + node, t3 -> * node
  Create new * node

        *[t5]
       / \\
    *[t3] +[t1, t2, t4]
      |  / \\
     /  [a] [b]
    /
   +[t1, t2, t4]`}
      </pre>
    </div>

    {/* Heuristic Ordering */}
    <h2 className="text-3xl font-bold mt-8">Node Ordering for Code Generation</h2>
    <p className="leading-relaxed">
      The order in which DAG nodes are evaluated affects register usage and code quality.
      We want to minimize the number of registers needed and avoid unnecessary stores.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Heuristic for Ordering</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Goal: Evaluate a node right before it's needed

Algorithm (reverse of evaluation order):
1. Start with nodes that have no successors (roots)
2. For each root, recursively order its children
3. List nodes in reverse postorder

Key insight for trees (Sethi-Ullman):
- Evaluate the subtree needing more registers first
- This minimizes total registers needed

For DAGs with sharing:
- Must compute shared nodes before all uses
- May need to store intermediate results`}
      </pre>
    </div>

    {/* Code Generation from DAG */}
    <h2 className="text-3xl font-bold mt-8">Generating Code from DAG</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Algorithm: DAG Code Generation</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Function generateCode(DAG):
  order = topologicalSort(DAG)  // or heuristic order

  for each node n in order:
    if n is a leaf:
      // No code needed until value is used
      continue

    if n is an interior node (op, left, right):
      // Get locations of operands
      Lleft = getLocation(left)
      Lright = getLocation(right)

      // Get register for result
      R = getReg(n)

      // Generate code
      if n has multiple parents (shared):
        // Value will be reused, keep in register or memory
        emit("MOV", R, Lleft)
        emit(op, R, Lright)
        // May need to store if register pressure high
      else:
        emit("MOV", R, Lleft)
        emit(op, R, Lright)

      // Update location of n's value
      setLocation(n, R)`}
      </pre>
    </div>

    {/* Complete Example */}
    <h2 className="text-3xl font-bold mt-8">Complete Code Generation Example</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Original Three-Address Code:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`t1 = a + b
t2 = c + d
t3 = e - t2
t4 = t1 - t3
t5 = t1 + t4`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">DAG Representation:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`        +[t5]
       / \\
      /   \\
   +[t1]   -[t4]
    /\\     / \\
  [a][b] [t1] -[t3]
              / \\
            [e] +[t2]
                / \\
              [c] [d]

Shared node: +[t1] has two parents (t4 and t5)`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Evaluation Order (leaves to roots):</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`1. Compute t2 = c + d
2. Compute t3 = e - t2
3. Compute t1 = a + b     (shared, keep available)
4. Compute t4 = t1 - t3
5. Compute t5 = t1 + t4   (reuse t1)

Note: t1 is computed once, used twice`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Generated Code (3 registers):</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`; t2 = c + d
MOV  R0, c
ADD  R0, d          ; R0 = t2

; t3 = e - t2
MOV  R1, e
SUB  R1, R0         ; R1 = t3 (R0 free now)

; t1 = a + b (shared - will be reused)
MOV  R0, a
ADD  R0, b          ; R0 = t1

; t4 = t1 - t3
MOV  R2, R0         ; Copy t1 (needed again)
SUB  R2, R1         ; R2 = t4 (R1 free now)

; t5 = t1 + t4
ADD  R0, R2         ; R0 = t5 (reuse R0 holding t1)

Total: 9 instructions (vs 10 from naive generation)`}
      </pre>
    </div>

    {/* Benefits of DAG-based Generation */}
    <h2 className="text-3xl font-bold mt-8">Benefits of DAG-based Code Generation</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Benefit</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Common Subexpression Elimination</td>
            <td className="p-3 border">Shared nodes computed only once</td>
          </tr>
          <tr>
            <td className="p-3 border">Better Register Utilization</td>
            <td className="p-3 border">Values kept in registers for reuse</td>
          </tr>
          <tr>
            <td className="p-3 border">Flexible Ordering</td>
            <td className="p-3 border">Can choose order to minimize register pressure</td>
          </tr>
          <tr>
            <td className="p-3 border">Dead Code Detection</td>
            <td className="p-3 border">Nodes with no successors and no live output are dead</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Handling Complex Cases */}
    <h2 className="text-3xl font-bold mt-8">Handling Complex Cases</h2>

    <h3 className="text-2xl font-semibold mt-6">Array References</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`a[i] = b + c
d = a[i] + e

DAG must track that:
- Store to a[i] can kill previous a[i] values
- Load from a[i] may or may not get stored value
  (depends on whether i changed)

Conservative approach:
- Array stores "kill" all array accesses
- Prevents sharing across array operations`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Variable Redefinition</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`x = a + b
y = x + c
x = d + e      // x redefined
z = x + f

DAG has two nodes for x:
- x_1 for first definition
- x_2 for second definition

y uses x_1, z uses x_2`}
      </pre>
    </div>

    {/* Rearranging Order */}
    <h2 className="text-3xl font-bold mt-8">Optimal Evaluation Order</h2>
    <p className="leading-relaxed">
      Finding the optimal order to minimize registers is NP-complete for general DAGs.
      However, good heuristics work well:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Heuristics for node ordering:

1. Labeling heuristic:
   - Label each node with minimum registers needed
   - For interior node: max(left_label, right_label + 1)
   - Evaluate higher-label child first

2. Reference count heuristic:
   - Nodes with more parents (shared more) = higher priority
   - Compute them first, keep available

3. Critical path heuristic:
   - Compute nodes on longest path first
   - Similar to instruction scheduling

Example:
      +         Labels: + needs 2 registers
     / \\                / needs 1
    *   /               * needs 2
   /\\ / \\
  a b c  d

Order: Compute * first (needs 2), then / (needs 1)
Result: 2 registers sufficient`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      What advantage does a DAG have over a tree for code generation?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) DAGs are simpler to construct</li>
      <li>(B) DAGs can represent common subexpressions</li>
      <li>(C) DAGs require fewer nodes total</li>
      <li>(D) DAGs are always more efficient</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) DAGs allow nodes to have multiple parents, representing shared computations that are computed once.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      When constructing a DAG, what happens when we encounter a = b + c twice?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Create two separate + nodes</li>
      <li>(B) Reuse the existing + node</li>
      <li>(C) Create an error</li>
      <li>(D) Ignore the second occurrence</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) The existing node is reused, and the new variable is added to its label list.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Why is finding optimal evaluation order for DAGs NP-complete?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) DAGs can have exponentially many orderings</li>
      <li>(B) Register allocation is required</li>
      <li>(C) It reduces to graph coloring</li>
      <li>(D) Both A and C</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (D) The problem has exponentially many orderings to consider, and optimal register usage relates to graph coloring.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>DAGs represent basic blocks with shared computations</li>
      <li>Common subexpressions become shared nodes, computed once</li>
      <li>DAG construction reuses existing nodes for equivalent computations</li>
      <li>Evaluation order affects register requirements</li>
      <li>Heuristics like labeling help find good evaluation orders</li>
      <li>DAG-based generation produces more efficient code than naive approaches</li>
    </ul>

  </div>
);

export default DAGCodeGeneration;
