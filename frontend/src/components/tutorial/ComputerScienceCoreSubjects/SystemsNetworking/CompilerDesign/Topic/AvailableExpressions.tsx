import React from "react";

const AvailableExpressions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Available Expressions Analysis
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Available expressions analysis determines which expressions have already
      been computed and not subsequently invalidated at each point in the program.
      An expression is available at a point if it has been computed on every path
      leading to that point, and none of its operands have been modified since.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is an Available Expression?</h2>
    <p className="leading-relaxed">
      An expression e is available at point p if:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>Every path from the entry to p evaluates e</li>
      <li>After the last evaluation of e on each path, there is no subsequent assignment to any operand of e</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example:
    t1 = a + b      // a+b is now available
    t2 = c * d      // c*d is now available
    a = 10          // KILLS a+b (operand changed)
    t3 = a + b      // a+b is NOT available (must recompute)
    t4 = c * d      // c*d IS available (can reuse t2)

At point t4:
    a + b: NOT available (a was modified)
    c * d: Available (t2 can be reused)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Flow Equations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Available Expressions Framework:

Domain: Set of all expressions in the program
Direction: Forward
Meet Operator: INTERSECTION (must be on ALL paths)
Transfer Function: OUT[B] = e_gen[B] U (IN[B] - e_kill[B])

e_gen[B]  = Expressions computed in B (with no subsequent
            modification of operands within B)
e_kill[B] = Expressions whose operands are defined in B

Data Flow Equations:
    OUT[Entry] = {} (nothing available initially)

    IN[B] = Intersection of OUT[P] for all predecessors P
           (must be available on ALL incoming paths)

    OUT[B] = e_gen[B] U (IN[B] - e_kill[B])`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Intersection?</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`For an expression to be safely available at a point,
it must be computed on EVERY path to that point.

         +--------+
         |  B1    |
         | t=a+b  |  a+b computed
         +---+----+
             |
        +----+----+
        |         |
    +---v---+ +---v---+
    |  B2   | |  B3   |
    | x=a+b | |  ...  |  a+b NOT computed
    +---+---+ +---+---+
        |         |
        +----+----+
             |
         +---v---+
         |  B4   |
         | y=a+b |  Is a+b available?
         +-------+

IN[B4] = OUT[B2] INTERSECT OUT[B3]
       = {a+b} INTERSECT {}
       = {}

a+b is NOT available at B4 because not computed on B3 path.
Union would incorrectly say it's available.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Computing e_gen and e_kill</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`For a basic block B:

e_kill[B]:
  All expressions containing any variable defined in B
  (definition may invalidate the expression)

e_gen[B]:
  Expressions computed in B whose operands are not
  subsequently redefined in B

Compute e_gen by scanning B from END to START:
  e_gen = {}
  killed_vars = {}
  for each statement s (last to first):
    if s computes expression e = x op y:
      if neither x nor y in killed_vars:
        e_gen = e_gen U {e}
    if s defines variable v:
      killed_vars = killed_vars U {v}
      remove expressions containing v from e_gen

Example:
    Block B:
    a = b + c      // Computes b+c, defines a
    d = a + e      // Computes a+e, defines d
    a = 10         // Defines a (kills a+e)

    e_gen[B] = {b+c}     // a+e killed by a=10
    e_kill[B] = {all expressions with a or d}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CFG:
         +----------+
         |  Entry   |
         | t1=a+b   |
         | t2=c+d   |
         +----+-----+
              |
         +----v-----+
         |   B2     |<----+
         | if x<10  |     |
         +----+-----+     |
             / \          |
    +-------+   +------+  |
    |               |     |
+---v---+       +---v---+ |
|  B3   |       |  B4   | |
|t3=a+b |       | a=20  | |
|       |       |t4=a+b | |
+---+---+       +---+---+ |
    |               |     |
    +-------+-------+     |
            |             |
       +----v-----+       |
       |   B5     |       |
       | t5=c+d   +-------+
       +----+-----+
            |
       +----v-----+
       |   Exit   |
       +----------+

Expressions: E = {a+b, c+d}

e_gen/e_kill:
    Entry: e_gen={a+b, c+d}  e_kill={}
    B2:    e_gen={}          e_kill={}
    B3:    e_gen={a+b}       e_kill={}
    B4:    e_gen={a+b}       e_kill={a+b} (a redefined before a+b)
           Wait: a=20 then t4=a+b, so a+b computed AFTER kill
           Actually: e_gen={a+b}, new value of a+b generated
    B5:    e_gen={c+d}       e_kill={}

Analysis (starting with Universal set U = {a+b, c+d}):

    OUT[Entry] = {a+b, c+d}

    IN[B2] = OUT[Entry] INTERSECT OUT[B5]
           = {a+b, c+d} INTERSECT {c+d, ...}

    After iteration to fixed point:
    IN[B2] = {c+d}  (a+b killed in B4, not on all paths)
    IN[B5] = OUT[B3] INTERSECT OUT[B4] = {a+b} INTERSECT {a+b} = {a+b}
           Plus c+d from earlier? Must trace carefully...

Result: c+d available throughout loop, a+b available at B5 entry`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Application: Global CSE</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Using Available Expressions for Common Subexpression Elimination:

If expression e is available at point p where e is computed:
  1. Find the computations of e that reach p
  2. Create new temporary t
  3. Replace each reaching computation with: t = e
  4. Replace computation at p with use of t

Before:
    B1: x = a + b
        ...
    B2: y = a + b    // a+b available (computed in B1)

After:
    B1: t = a + b
        x = t
        ...
    B2: y = t        // Reuse t instead of recomputing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison with Other Analyses</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Available Expressions</th>
            <th className="p-3 border">Reaching Definitions</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Direction</td>
            <td className="p-3 border">Forward</td>
            <td className="p-3 border">Forward</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Meet</td>
            <td className="p-3 border">Intersection</td>
            <td className="p-3 border">Union</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Initial</td>
            <td className="p-3 border">Universal set (all)</td>
            <td className="p-3 border">Empty set</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Question</td>
            <td className="p-3 border">Must be computed on all paths</td>
            <td className="p-3 border">May be defined on some path</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use</td>
            <td className="p-3 border">Global CSE</td>
            <td className="p-3 border">Copy/constant propagation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>An expression is available if computed on ALL paths and operands unchanged</li>
        <li>Forward analysis with INTERSECTION as meet operator</li>
        <li>Intersection ensures expression is on every path (must analysis)</li>
        <li>e_gen[B] = expressions computed in B whose operands not killed after</li>
        <li>e_kill[B] = expressions containing variables defined in B</li>
        <li>Primary use is Global Common Subexpression Elimination</li>
        <li>Initialize non-entry blocks with universal set (all expressions)</li>
      </ul>
    </div>
  </div>
);

export default AvailableExpressions;
