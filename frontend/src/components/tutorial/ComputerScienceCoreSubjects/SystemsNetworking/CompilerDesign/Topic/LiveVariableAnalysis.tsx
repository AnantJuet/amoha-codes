import React from "react";

const LiveVariableAnalysis: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Live Variable Analysis
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Live variable analysis determines which variables may be used before being
      redefined at each point in the program. A variable is live at a point if
      its current value may be read along some path starting from that point.
      This analysis is essential for register allocation and dead code elimination.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Live Variable?</h2>
    <p className="leading-relaxed">
      A variable x is live at point p if there exists a path from p to a use
      of x that does not redefine x. Otherwise, x is dead at p.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example:
    1: x = 5        // x becomes live (used at line 2)
    2: y = x + 1    // x is used, y becomes live
    3: z = y * 2    // y is used, z becomes live
    4: return z     // z is used

At each point:
    After line 1: x live (used at 2)
    After line 2: y live (used at 3), x dead (not used again)
    After line 3: z live (used at 4), y dead
    After line 4: nothing live (end of program)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Flow Equations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Live Variable Analysis Framework:

Domain: Set of all variables in the program
Direction: BACKWARD (exit to entry)
Meet Operator: Union
Transfer Function: IN[B] = use[B] U (OUT[B] - def[B])

use[B] = Variables used in B before any definition in B
def[B] = Variables defined in B

Data Flow Equations:
    IN[Exit] = {} (no variables live after program ends)

    OUT[B] = U IN[S] for all successors S of B
            (union of all successors' IN sets)

    IN[B] = use[B] U (OUT[B] - def[B])`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Computing use and def Sets</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`For a basic block B:

def[B] (also called kill):
  Variables that are DEFINED in B
  (assignment target)

use[B] (also called gen):
  Variables that are USED in B before being defined in B

Compute by scanning B from START to END:
  def = {}
  use = {}
  for each statement s in B (first to last):
    for each variable v used in s:
      if v not in def:
        use = use U {v}    // Used before defined
    if s defines variable x:
      def = def U {x}

Example:
    Block B:
    x = y + z      // Uses y, z; Defines x
    w = x + 1      // Uses x; Defines w
    v = y + w      // Uses y, w; Defines v

    use[B] = {y, z}     // y, z used before any def in B
    def[B] = {x, w, v}  // All variables defined in B`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm: Live Variable Analysis (Backward)

Input: CFG with use[B] and def[B] for each block B
Output: IN[B] and OUT[B] for each block B

1. Initialize:
   IN[Exit] = {}
   IN[B] = {} for all B

2. Worklist = all blocks

3. While worklist not empty:
   Remove block B from worklist

   old_in = IN[B]
   OUT[B] = Union of IN[S] for all successors S
   IN[B] = use[B] U (OUT[B] - def[B])

   if IN[B] != old_in:
     Add all predecessors of B to worklist

4. Return IN and OUT for each block`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CFG:
         +----------+
         |  Entry   |
         | a = 1    |
         | b = 2    |
         +----+-----+
              |
         +----v-----+
         |   B2     |
         | c = a + b|
         | d = c    |
         +----+-----+
             / \
    +-------+   +-------+
    |               |
+---v---+       +---v---+
|  B3   |       |  B4   |
| e = c |       | f = d |
+---+---+       +---+---+
    |               |
    +-------+-------+
            |
       +----v-----+
       |   Exit   |
       | return e |
       +----------+

use/def sets:
    Entry: use={}      def={a,b}
    B2:    use={a,b}   def={c,d}
    B3:    use={c}     def={e}
    B4:    use={d}     def={f}
    Exit:  use={e}     def={}

Backward Analysis:
    Start from Exit, work backward

    IN[Exit] = {e}  (e is used)
    OUT[Exit] = {}

    OUT[B3] = IN[Exit] = {e}
    IN[B3] = {c} U ({e} - {e}) = {c}

    OUT[B4] = {} (Exit doesn't use anything from B4 path)
    IN[B4] = {d} U {} = {d}

    OUT[B2] = IN[B3] U IN[B4] = {c} U {d} = {c, d}
    IN[B2] = {a,b} U ({c,d} - {c,d}) = {a, b}

    OUT[Entry] = IN[B2] = {a, b}
    IN[Entry] = {} U ({a,b} - {a,b}) = {}

Result:
    At B2 entry: a, b are live
    At B2 exit: c, d are live
    At B3 entry: c is live
    At B4 entry: d is live`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Application</th>
            <th className="p-3 border">How Live Variables Are Used</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Register Allocation</td>
            <td className="p-3 border">Two variables can share register if not simultaneously live</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dead Code Elimination</td>
            <td className="p-3 border">Assignment to dead variable can be removed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Uninitialized Variables</td>
            <td className="p-3 border">Variable live at entry without definition is uninitialized</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Code Generation</td>
            <td className="p-3 border">Decide what to save at function calls</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Live Ranges and Interference</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Live Range: The portion of code where a variable is live

Interference: Two variables interfere if their live ranges overlap

    Point:    1   2   3   4   5   6
    x:        |---Live---|
    y:            |----Live----|
    z:                    |--Live--|

    x and y interfere (overlap at 2-3)
    x and z don't interfere
    y and z interfere (overlap at 4-5)

Interference Graph:
    x --- y
          |
          z

Variables connected by edge cannot share same register.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>A variable is live if its value may be used before being redefined</li>
        <li>Backward analysis with union as meet operator</li>
        <li>use[B] = variables used before defined in B</li>
        <li>def[B] = variables defined in B</li>
        <li>Essential for register allocation and dead code elimination</li>
        <li>Live ranges determine which variables can share registers</li>
      </ul>
    </div>
  </div>
);

export default LiveVariableAnalysis;
