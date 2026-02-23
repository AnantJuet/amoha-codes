import React from "react";

const GraphColoring: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Graph Coloring for Register Allocation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Graph Coloring for Register Allocation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Graph coloring</strong> is the most widely used technique for global register allocation.
      The problem is to assign colors (registers) to nodes (variables) in an interference graph such that
      no two adjacent nodes have the same color. This elegant formulation has led to highly effective
      register allocation algorithms used in production compilers.
    </p>

    {/* Graph Coloring Basics */}
    <h2 className="text-3xl font-bold mt-8">Graph Coloring Basics</h2>

    <h3 className="text-2xl font-semibold mt-6">Definitions</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>k-coloring:</strong> Assignment of k colors to nodes such that no adjacent nodes share a color</li>
      <li><strong>k-colorable:</strong> A graph that can be colored with at most k colors</li>
      <li><strong>Chromatic number:</strong> Minimum k for which graph is k-colorable</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Register Allocation Mapping:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Graph Coloring          Register Allocation
--------------          -------------------
Node                    Variable/Temporary
Edge                    Interference (simultaneous liveness)
Color                   Physical Register
k colors                k available registers
k-colorable             All variables fit in registers
Not k-colorable         Some variables must be spilled`}
      </pre>
    </div>

    {/* Complexity */}
    <h2 className="text-3xl font-bold mt-8">Complexity of Graph Coloring</h2>
    <p className="leading-relaxed">
      Graph k-coloring is NP-complete for k &ge; 3. However, interference graphs from real programs
      have special properties that make them easier to color in practice.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Special Cases:
- 2-coloring: Polynomial (bipartite graph check)
- 3-coloring: NP-complete
- k-coloring (k >= 3): NP-complete

For Register Allocation:
- Typical k = 8 to 32 registers
- Interference graphs are often sparse
- Heuristic algorithms work very well
- Chordal graph recognition can help`}
      </pre>
    </div>

    {/* Chaitin's Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Chaitin-Briggs Algorithm</h2>
    <p className="leading-relaxed">
      The Chaitin-Briggs algorithm is the classic approach to graph coloring register allocation.
      It consists of several phases: Build, Simplify, Spill, Select, and Coalesce.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Phase 1: Build</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Build interference graph:
1. Perform liveness analysis
2. For each program point p:
   - For each pair of variables live at p:
     - Add edge between them
3. Add edges for special constraints:
   - Pre-colored nodes (fixed registers)
   - Register class constraints`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Phase 2: Simplify</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Key Insight:
If a node has degree < k (fewer than k neighbors),
it can always be colored after its neighbors are colored.

Algorithm:
1. Find node n with degree < k
2. Remove n from graph, push onto stack
3. Repeat until:
   - Graph is empty (success)
   - All remaining nodes have degree >= k (potential spill)

Example with k = 3 registers:
Initial: A--B--C--D (degrees: A=1, B=2, C=2, D=1)
Step 1: Remove A (degree 1 < 3), push A
Step 2: Remove D (degree 1 < 3), push D
Step 3: Remove B (degree 1 < 3), push B
Step 4: Remove C (degree 0 < 3), push C
Stack: [A, D, B, C] (top)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Phase 3: Potential Spill</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`If all nodes have degree >= k:
1. Select a node to potentially spill
   - Use spill cost heuristic:
     SpillPriority(n) = (uses + defs) * 10^(loop_depth) / degree(n)
   - Lower priority = better spill candidate
2. Optimistically push node onto stack
   - Maybe its neighbors will get same colors
3. Continue simplification

Note: This is "optimistic coloring" (Briggs' improvement)
The node might still be colorable if neighbors share colors`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Phase 4: Select (Color Assignment)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Pop nodes from stack and assign colors:

while stack not empty:
    n = stack.pop()
    used_colors = {color(neighbor) for neighbor in adj(n)}
    available = all_colors - used_colors

    if available is not empty:
        color(n) = pick from available
    else:
        mark n as actual spill

Example continuation (k = 3, colors = R0, R1, R2):
Pop C: No neighbors colored yet, assign R0
Pop B: Neighbor C has R0, assign R1
Pop D: Neighbor C has R0, assign R1 (can reuse!)
Pop A: Neighbor B has R1, assign R0

Result: A=R0, B=R1, C=R0, D=R1`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Phase 5: Actual Spill</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`If a node couldn't be colored in Select phase:
1. Insert spill code:
   - After each definition: STORE v, [stack_slot]
   - Before each use: LOAD v, [stack_slot]
2. Create new temporaries for each use/def
3. Rebuild interference graph
4. Re-run the algorithm

This process may iterate until no spills are needed.
Good spill heuristics minimize iterations.`}
      </pre>
    </div>

    {/* Complete Example */}
    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Code and Liveness:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Code:              Live After
a = 1              {a}
b = 2              {a, b}
c = a + b          {b, c}
d = b + c          {c, d}
e = c + d          {e}
return e           {}`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Interference Graph (2 registers available):</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Edges based on simultaneous liveness:
- a -- b (both live after "b = 2")
- b -- c (both live after "c = a + b")
- c -- d (both live after "d = b + c")

Graph:
    a --- b --- c --- d

          e (isolated, not live with others)

Node degrees:
a: 1, b: 2, c: 2, d: 1, e: 0`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Simplify Phase (k = 2):</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Step 1: Remove e (degree 0 < 2), push e
        Graph: a --- b --- c --- d

Step 2: Remove a (degree 1 < 2), push a
        Graph: b --- c --- d

Step 3: Remove d (degree 1 < 2), push d
        Graph: b --- c

Step 4: Remove b (degree 1 < 2), push b
        Graph: c

Step 5: Remove c (degree 0 < 2), push c
        Stack: [e, a, d, b, c] (c on top)`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Select Phase:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Registers: R0, R1

Pop c: No colored neighbors, assign R0
Pop b: Neighbor c has R0, assign R1
Pop d: Neighbor c has R0, assign R1
Pop a: Neighbor b has R1, assign R0
Pop e: No colored neighbors, assign R0

Final Assignment:
a = R0, b = R1, c = R0, d = R1, e = R0

No spilling needed! Graph was 2-colorable.`}
      </pre>
    </div>

    {/* Coalescing */}
    <h2 className="text-3xl font-bold mt-8">Coalescing</h2>
    <p className="leading-relaxed">
      <strong>Coalescing</strong> attempts to eliminate copy instructions by assigning the same register
      to the source and destination of a move.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Copy instruction: x = y

Without coalescing:
  MOV R0, R1    ; x = y

With coalescing (x and y in same register):
  ; No instruction needed!

Condition: x and y must NOT interfere
(not live at the same point)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Conservative Coalescing (Briggs)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Briggs' criterion for safe coalescing of x and y:
  Coalesce if the merged node has fewer than k neighbors
  of significant degree (degree >= k)

Rationale: If merged node has < k high-degree neighbors,
it won't cause new spills (can still simplify)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">George's Criterion</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`George's criterion for coalescing x and y:
  Coalesce if every neighbor of x either:
  1. Already interferes with y, or
  2. Has degree < k

This is more aggressive than Briggs but still safe.`}
      </pre>
    </div>

    {/* Iterated Coalescing */}
    <h2 className="text-3xl font-bold mt-8">Iterated Register Coalescing</h2>
    <p className="leading-relaxed">
      Modern compilers use iterated register coalescing, which interleaves simplification
      with coalescing for better results.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Algorithm: Iterated Register Coalescing

repeat:
  1. Simplify: Remove nodes with degree < k

  2. Coalesce: If stuck, try to coalesce a move-related pair
     - Use Briggs or George criterion
     - Merge nodes if safe
     - May enable more simplification

  3. Freeze: If no coalescing possible, give up on a
     low-degree move and treat it as non-move-related
     - May enable more simplification

  4. Potential Spill: If still stuck, select spill candidate

until graph is empty

then Select and handle Actual Spills as before`}
      </pre>
    </div>

    {/* Pre-colored Nodes */}
    <h2 className="text-3xl font-bold mt-8">Handling Pre-colored Nodes</h2>
    <p className="leading-relaxed">
      Some nodes have fixed register assignments (e.g., function return value in RAX).
      These are called pre-colored nodes.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Pre-colored node handling:
1. Pre-colored nodes are never simplified or spilled
2. They have infinite degree (interfere with all other
   values in that register)
3. Other nodes must work around them

Example: Return value in R0
  function foo():
    x = compute()    ; x will be returned
    return x         ; x must be in R0 at this point

Pre-colored constraint:
  - Add node "R0" (pre-colored)
  - x interferes with everything live when x moves to R0
  - During select, x gets R0 if possible, else insert move`}
      </pre>
    </div>

    {/* Comparison of Approaches */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Comparison</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Spill Handling</th>
            <th className="p-3 border">Coalescing</th>
            <th className="p-3 border">Quality</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Chaitin (Original)</td>
            <td className="p-3 border">Pessimistic</td>
            <td className="p-3 border">Aggressive</td>
            <td className="p-3 border">Good</td>
          </tr>
          <tr>
            <td className="p-3 border">Briggs</td>
            <td className="p-3 border">Optimistic</td>
            <td className="p-3 border">Conservative</td>
            <td className="p-3 border">Better</td>
          </tr>
          <tr>
            <td className="p-3 border">Iterated Coalescing</td>
            <td className="p-3 border">Optimistic</td>
            <td className="p-3 border">Iterated</td>
            <td className="p-3 border">Best</td>
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
      In the simplify phase, when can a node be safely removed?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) When it has degree greater than k</li>
      <li>(B) When it has degree less than k</li>
      <li>(C) When it has no edges</li>
      <li>(D) When it is pre-colored</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) A node with degree less than k can always be colored after its neighbors, so it can be safely removed.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What is the purpose of coalescing in graph coloring register allocation?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) To reduce the number of colors needed</li>
      <li>(B) To eliminate copy instructions by merging nodes</li>
      <li>(C) To increase the degree of nodes</li>
      <li>(D) To identify spill candidates</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Coalescing merges source and destination of copies into one node, eliminating the move instruction.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      What happens if a node cannot be colored in the select phase?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) The algorithm terminates with an error</li>
      <li>(B) The node is removed from the graph</li>
      <li>(C) The node is spilled to memory</li>
      <li>(D) The node is given a new color</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) An uncolorable node becomes an actual spill - its value is stored in memory.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Graph coloring maps register allocation to assigning colors to interference graph nodes</li>
      <li>The Chaitin-Briggs algorithm uses simplify, spill, and select phases</li>
      <li>Nodes with degree less than k can always be colored (simplify insight)</li>
      <li>Optimistic spilling (Briggs) reduces unnecessary spills</li>
      <li>Coalescing eliminates copy instructions by merging nodes</li>
      <li>Iterated coalescing interleaves simplification and coalescing for best results</li>
    </ul>

  </div>
);

export default GraphColoring;
