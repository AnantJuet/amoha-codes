import React from "react";

const DeadCodeElimination: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dead Code Elimination
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Dead Code Elimination (DCE) is an optimization technique that removes code
      that does not affect the program's output. This includes code whose results
      are never used and code that is unreachable. Removing dead code reduces
      program size and can improve execution speed.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Dead Code</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Useless Code</td>
            <td className="p-3 border">Computes values never used</td>
            <td className="p-3 border font-mono text-gray-900">x = a + b; (x unused)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unreachable Code</td>
            <td className="p-3 border">Cannot be executed</td>
            <td className="p-3 border font-mono text-gray-900">return; x = 5;</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Redundant Code</td>
            <td className="p-3 border">Value overwritten before use</td>
            <td className="p-3 border font-mono text-gray-900">x = 5; x = 10;</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Useless Code Elimination</h2>
    <p className="leading-relaxed">
      A variable is dead at a point if its value is never used after that point.
      An assignment to a dead variable is useless and can be eliminated.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before DCE:
    a = b + c       // a is used below
    d = e * f       // d is NEVER used -> DEAD
    x = a + 1       // a is live here
    return x

After DCE:
    a = b + c
    // d = e * f    REMOVED (dead code)
    x = a + 1
    return x`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Live Variable Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Live Variable Analysis (backward data flow):

A variable v is LIVE at point p if:
- There exists a path from p to a use of v
- v is not redefined along that path

Algorithm for DCE:
1. Compute live variables at each point
2. For each assignment x = expr:
   - If x is not live after the assignment
   - And expr has no side effects
   - Then the assignment is dead -> remove it

Example:
    Statement       Live Variables After
    ---------       -------------------
    a = b + c       {a, e, f}
    d = e * f       {a}          <- d not live!
    x = a + 1       {x}
    return x        {}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Unreachable Code Elimination</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Types of Unreachable Code:

1. After unconditional jump:
    goto L1;
    x = 5;          // Unreachable
    y = 10;         // Unreachable
L1: ...

2. After return:
    return result;
    cleanup();      // Unreachable

3. Constant condition (false branch):
    if (false) {
        x = 1;      // Unreachable
    }

4. Unreachable blocks:
    +-------+
    | Entry |
    +---+---+
        |
        v
    +---+---+
    |  B1   |
    +---+---+
        |
        v
    +---+---+
    |  B3   |
    +-------+

    +-------+
    |  B2   |       // No edge to B2 -> Unreachable
    +-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comprehensive Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original Code:
    x = 10;
    y = 20;              // y never used -> dead
    z = x + 5;
    w = z * 2;           // w never used -> dead
    if (true) {
        result = z;
    } else {
        result = w;      // Unreachable (condition always true)
    }
    temp = result + 1;   // temp never used -> dead
    return result;
    cleanup();           // Unreachable (after return)

After Dead Code Elimination:
    x = 10;
    z = x + 5;
    result = z;
    return result;

Analysis:
- y removed: assigned but never used
- w removed: only use is in unreachable else branch
- else branch removed: condition always true
- temp removed: assigned but never used
- cleanup() removed: after return statement`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm for Dead Code Elimination</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm: Dead Code Elimination

Phase 1: Unreachable Code Removal
1. Build Control Flow Graph
2. Mark Entry block as reachable
3. Traverse CFG, marking reachable blocks
4. Remove unmarked blocks

Phase 2: Useless Code Removal
1. Compute live variables (backward analysis)
2. For each statement S: x = expr
   if x not in LiveOut(S) and no_side_effects(expr):
      mark S as dead
3. Remove marked statements

Phase 3: Repeat if changes made
- Removing dead code may create more dead code
- Iterate until no more changes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When NOT to Eliminate</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cannot eliminate if side effects present:

1. Function calls (may have side effects):
    x = printf("hello");  // Keep even if x unused

2. Volatile variables:
    volatile int flag;
    flag = 1;             // Keep (memory-mapped I/O)

3. Global variables (may be used externally):
    global_x = 10;        // May be used by other modules

4. Exception handling:
    x = may_throw();      // May affect program flow`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Benefits of DCE</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Reduced Code Size:</strong> Smaller executable</li>
      <li><strong>Faster Execution:</strong> Fewer instructions to execute</li>
      <li><strong>Better Cache Usage:</strong> Smaller code fits in cache</li>
      <li><strong>Cleaner Code:</strong> Removes artifacts from other optimizations</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Dead code includes useless code (unused results) and unreachable code</li>
        <li>Live variable analysis identifies variables whose values may be used later</li>
        <li>Assignment to a non-live variable with no side effects is dead</li>
        <li>Unreachable code is found by CFG traversal from entry</li>
        <li>Cannot eliminate code with side effects</li>
        <li>DCE may require multiple passes as it enables more DCE opportunities</li>
      </ul>
    </div>
  </div>
);

export default DeadCodeElimination;
