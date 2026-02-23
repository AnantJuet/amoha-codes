import React from "react";

const RegisterAllocation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Register Allocation Problem ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Register Allocation Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Register allocation</strong> is one of the most important and challenging problems in code
      generation. It determines which program values should be kept in registers at each point during
      execution. Since registers are the fastest form of storage but are limited in number, efficient
      register allocation is crucial for generating high-performance code.
    </p>

    {/* The Problem */}
    <h2 className="text-3xl font-bold mt-8">The Register Allocation Problem</h2>
    <p className="leading-relaxed">
      Programs typically have many more variables and temporary values than available registers.
      The register allocator must decide:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Which values should reside in registers</li>
      <li>When to load values from memory into registers</li>
      <li>When to store (spill) register values back to memory</li>
      <li>How to minimize memory traffic while respecting register constraints</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: 5 variables, 3 registers

Variables: a, b, c, d, e
Registers: R0, R1, R2

Code sequence:
  t1 = a + b      ; Need a, b in registers
  t2 = c + d      ; Need c, d in registers
  t3 = t1 + t2    ; Need t1, t2 in registers
  e = t3 + a      ; Need t3, a in registers

Challenge: At most 3 values can be in registers at once
Solution: Some values must be spilled to memory`}
      </pre>
    </div>

    {/* Why Register Allocation Matters */}
    <h2 className="text-3xl font-bold mt-8">Why Register Allocation Matters</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Storage</th>
            <th className="p-3 border">Access Time</th>
            <th className="p-3 border">Relative Speed</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Registers</td>
            <td className="p-3 border">1 cycle</td>
            <td className="p-3 border">1x (fastest)</td>
          </tr>
          <tr>
            <td className="p-3 border">L1 Cache</td>
            <td className="p-3 border">3-4 cycles</td>
            <td className="p-3 border">~4x slower</td>
          </tr>
          <tr>
            <td className="p-3 border">L2 Cache</td>
            <td className="p-3 border">10-20 cycles</td>
            <td className="p-3 border">~15x slower</td>
          </tr>
          <tr>
            <td className="p-3 border">Main Memory</td>
            <td className="p-3 border">100-300 cycles</td>
            <td className="p-3 border">~200x slower</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="leading-relaxed mt-4">
      Good register allocation can improve program performance by 2-4x or more, making it one of the
      most impactful compiler optimizations.
    </p>

    {/* Liveness Analysis */}
    <h2 className="text-3xl font-bold mt-8">Liveness Analysis</h2>
    <p className="leading-relaxed">
      Before allocating registers, we must know which values are <strong>live</strong> (potentially needed)
      at each program point. A variable is live at a point if its value may be used in the future before
      being redefined.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Liveness Example:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Statement        Live Variables After
---------        ---------------------
a = 1            {a}
b = 2            {a, b}
c = a + b        {c}        (a, b dead after use)
d = c * 2        {d}        (c dead after use)
return d         {}         (d dead after use)

Key insight: Variables that are not live simultaneously
can share the same register!`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Computing Liveness</h3>
    <p className="leading-relaxed">
      Liveness is computed using backward dataflow analysis:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`For each statement s: x = y op z

USE[s] = {y, z}         ; Variables used in s
DEF[s] = {x}            ; Variable defined in s

LiveIn[s] = USE[s] U (LiveOut[s] - DEF[s])
LiveOut[s] = Union of LiveIn[successor of s]

Iterate until fixed point (values stop changing)`}
      </pre>
    </div>

    {/* Interference Graph */}
    <h2 className="text-3xl font-bold mt-8">Interference Graph</h2>
    <p className="leading-relaxed">
      An <strong>interference graph</strong> captures which values cannot share the same register.
      Two values interfere if they are both live at the same program point.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Building the Interference Graph:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Code:
  t1 = a + b     ; Live: {a, b, t1}
  t2 = c + d     ; Live: {t1, c, d, t2}
  t3 = t1 * t2   ; Live: {t1, t2, t3}
  x = t3         ; Live: {t3, x}

Interference Graph:
Nodes: {a, b, c, d, t1, t2, t3, x}
Edges (interfere, cannot share register):
  - a -- b (both live at line 1)
  - t1 -- c, t1 -- d (both live at line 2)
  - c -- d (both live at line 2)
  - t1 -- t2 (both live at lines 2,3)
  - t2 -- t3 (both live at line 3)
  - t3 -- x (both live at line 4)

      a --- b

      t1 -- c
      |  \\  |
      |   \\ |
      t2 -- d
      |
      t3 -- x`}
      </pre>
    </div>

    {/* Register Allocation as Graph Coloring */}
    <h2 className="text-3xl font-bold mt-8">Register Allocation as Graph Coloring</h2>
    <p className="leading-relaxed">
      Register allocation can be formulated as a graph coloring problem: assign colors (registers)
      to nodes (variables) such that no two adjacent nodes have the same color.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Graph Coloring for Register Allocation:
- Nodes = Variables/Temporaries
- Edges = Interference (cannot share register)
- Colors = Available registers
- k-coloring = Allocation using k registers

If the graph is k-colorable:
  -> All variables fit in k registers
  -> No spilling needed

If NOT k-colorable:
  -> Some variables must be spilled to memory
  -> Spilling adds load/store instructions`}
      </pre>
    </div>

    <p className="leading-relaxed mt-4">
      <strong>Important:</strong> Graph coloring is NP-complete for k &ge; 3. However, efficient
      heuristics work well in practice.
    </p>

    {/* Spilling */}
    <h2 className="text-3xl font-bold mt-8">Register Spilling</h2>
    <p className="leading-relaxed">
      When there are not enough registers, some values must be <strong>spilled</strong> to memory.
      Spilled values are stored on the stack and loaded when needed.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Spilling Example:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Before spilling (needs 4 registers, only 3 available):
  t1 = a + b
  t2 = c + d
  t3 = t1 * t2    ; t1, t2, t3 all live here
  t4 = t2 + t3    ; t2, t3, t4 all live here
  x = t3 + t4

After spilling t2:
  t1 = a + b
  t2 = c + d
  STORE t2, [sp+0]   ; Spill t2 to stack
  t3 = t1 * t2
  LOAD  t2, [sp+0]   ; Reload t2
  t4 = t2 + t3
  x = t3 + t4

Spilling adds memory operations but frees a register`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Spill Cost Estimation</h3>
    <p className="leading-relaxed">
      When choosing which variable to spill, consider:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Use frequency:</strong> Spill variables used less often</li>
      <li><strong>Loop nesting:</strong> Avoid spilling variables in inner loops</li>
      <li><strong>Live range length:</strong> Spill variables with long live ranges</li>
      <li><strong>Degree in interference graph:</strong> Spill high-degree nodes to free more registers</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Spill Cost Formula:
  SpillCost(v) = Sum over all uses/defs of v:
                 (cost of load/store) * (10^loop_nesting_depth)

Example:
  Variable a: used 5 times, loop depth 0
  Variable b: used 2 times, loop depth 2

  SpillCost(a) = 5 * 1 = 5
  SpillCost(b) = 2 * 100 = 200

  Choose to spill 'a' (lower cost)`}
      </pre>
    </div>

    {/* Live Ranges and Splitting */}
    <h2 className="text-3xl font-bold mt-8">Live Range Splitting</h2>
    <p className="leading-relaxed">
      Instead of spilling an entire variable, we can split its live range into multiple parts,
      each assigned to a different register or spilled separately.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Original (long live range for x):
  x = ...           ; x defined
  ...               ; x live through many statements
  ...               ; (high register pressure here)
  ...
  ... = x           ; x finally used

After splitting:
  x = ...           ; x defined
  STORE x, [stack]  ; End first live range
  ...               ; x not in register here
  ...               ; (register available for other uses)
  ...
  LOAD x', [stack]  ; Start new live range
  ... = x'          ; Use the value

Benefit: Reduces interference, may avoid other spills`}
      </pre>
    </div>

    {/* Register Classes */}
    <h2 className="text-3xl font-bold mt-8">Register Classes</h2>
    <p className="leading-relaxed">
      Real machines have different types of registers with different capabilities. The allocator
      must respect these constraints.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Register Class</th>
            <th className="p-3 border">Usage</th>
            <th className="p-3 border">Example (x86-64)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">General Purpose</td>
            <td className="p-3 border">Integer arithmetic, addresses</td>
            <td className="p-3 border">RAX, RBX, RCX, RDX, ...</td>
          </tr>
          <tr>
            <td className="p-3 border">Floating Point</td>
            <td className="p-3 border">FP arithmetic</td>
            <td className="p-3 border">XMM0-XMM15</td>
          </tr>
          <tr>
            <td className="p-3 border">Caller-Saved</td>
            <td className="p-3 border">May be clobbered by calls</td>
            <td className="p-3 border">RAX, RCX, RDX, R8-R11</td>
          </tr>
          <tr>
            <td className="p-3 border">Callee-Saved</td>
            <td className="p-3 border">Preserved across calls</td>
            <td className="p-3 border">RBX, RBP, R12-R15</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Allocation Algorithms Overview */}
    <h2 className="text-3xl font-bold mt-8">Register Allocation Algorithms</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Quality</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Local (Basic Block)</td>
            <td className="p-3 border">Allocate within single block</td>
            <td className="p-3 border">Fast, suboptimal</td>
          </tr>
          <tr>
            <td className="p-3 border">Graph Coloring</td>
            <td className="p-3 border">Build interference graph, color</td>
            <td className="p-3 border">Good quality</td>
          </tr>
          <tr>
            <td className="p-3 border">Linear Scan</td>
            <td className="p-3 border">Process live ranges in order</td>
            <td className="p-3 border">Fast, near-optimal</td>
          </tr>
          <tr>
            <td className="p-3 border">SSA-Based</td>
            <td className="p-3 border">Exploit SSA properties</td>
            <td className="p-3 border">Efficient, good</td>
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
      When do two variables interfere in register allocation?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) When they have the same type</li>
      <li>(B) When they are both live at the same program point</li>
      <li>(C) When they are used in the same expression</li>
      <li>(D) When they are defined in the same function</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Two variables interfere when they are simultaneously live, meaning they cannot share a register.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What is register spilling?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Removing unused registers</li>
      <li>(B) Storing register values to memory when registers are insufficient</li>
      <li>(C) Copying values between registers</li>
      <li>(D) Initializing registers to zero</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Spilling stores register values to memory to free registers for other values.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Why is register allocation formulated as graph coloring?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Because graphs are easier to visualize</li>
      <li>(B) Because adjacent nodes (interfering variables) need different colors (registers)</li>
      <li>(C) Because it always produces optimal results</li>
      <li>(D) Because it requires fewer memory accesses</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Graph coloring ensures interfering variables get different registers (colors).</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Register allocation decides which values reside in registers at each program point</li>
      <li>Liveness analysis determines which values are simultaneously live</li>
      <li>Interference graphs model which values cannot share registers</li>
      <li>Register allocation reduces to graph coloring (NP-complete)</li>
      <li>Spilling stores values to memory when registers are insufficient</li>
      <li>Good allocation can improve performance by 2-4x or more</li>
    </ul>

  </div>
);

export default RegisterAllocation;
