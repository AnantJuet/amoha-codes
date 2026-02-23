import React from "react";

const ReachingDefinitions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Reaching Definitions Analysis
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Reaching definitions analysis determines which definitions of variables
      may reach each point in the program. A definition reaches a point if there
      is a path from the definition to that point along which the variable is
      not redefined.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Reaching Definition?</h2>
    <p className="leading-relaxed">
      A definition d of variable x reaches point p if there exists at least one
      path from d to p such that x is not redefined along that path.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Definition: An assignment to a variable

Example:
    d1: x = 5           // Definition d1 of x
    d2: y = x + 1       // Use of x (d1 reaches here)
    d3: x = 10          // Definition d3 of x (kills d1)
    d4: z = x           // Use of x (only d3 reaches here)

At point d2: d1 reaches (x = 5)
At point d4: d3 reaches (x = 10), d1 is killed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Flow Equations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Reaching Definitions Framework:

Domain: Set of all definitions in the program
Direction: Forward
Meet Operator: Union (any path brings a definition)
Transfer Function: OUT[B] = gen[B] U (IN[B] - kill[B])

gen[B]  = Definitions in B that reach end of B
kill[B] = Definitions outside B killed by definitions in B

Data Flow Equations:
    OUT[Entry] = {} (empty - no definitions before program)

    IN[B] = U OUT[P] for all predecessors P of B
           (union of all predecessors' OUT sets)

    OUT[B] = gen[B] U (IN[B] - kill[B])`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Computing gen and kill Sets</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`For a basic block B with statements s1, s2, ..., sn:

gen[B]:
  A definition d in B is in gen[B] if d is not
  killed by a subsequent definition in B.

  Compute by scanning B from end to start:
  gen = {}
  for each statement s (from last to first):
    if s defines variable x:
      gen = gen U {s}
      remove any other def of x from gen

kill[B]:
  All definitions outside B that define the same
  variables as definitions in B.

  kill = {}
  for each definition d in B that defines x:
    kill = kill U {all other defs of x in program}

Example:
    Block B:
    d1: x = 1
    d2: y = 2
    d3: x = 3      // Kills d1 within block

    gen[B] = {d2, d3}  // d1 killed by d3
    kill[B] = {all defs of x outside B, all defs of y outside B}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm: Reaching Definitions

Input: CFG with gen[B] and kill[B] for each block B
Output: IN[B] and OUT[B] for each block B

1. Initialize:
   OUT[Entry] = {}
   OUT[B] = {} for all B != Entry

2. Worklist = all blocks except Entry

3. While worklist not empty:
   Remove block B from worklist

   old_out = OUT[B]
   IN[B] = Union of OUT[P] for all predecessors P
   OUT[B] = gen[B] U (IN[B] - kill[B])

   if OUT[B] != old_out:
     Add all successors of B to worklist

4. Return IN and OUT for each block`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CFG:
         +----------+
         |  Entry   |
         | d1: x=1  |
         | d2: y=2  |
         +----+-----+
              |
         +----v-----+
         |   B2     |<----+
         | d3: x=y+1|     |
         +----+-----+     |
              |           |
         +----v-----+     |
         |   B3     |     |
         | d4: y=x+2|     |
         | if y<10  +-----+
         +----+-----+
              |
         +----v-----+
         |   B4     |
         | d5: z=x+y|
         +----------+

gen/kill sets:
    Entry: gen={d1,d2}  kill={}
    B2:    gen={d3}     kill={d1}  (d3 defines x, kills d1)
    B3:    gen={d4}     kill={d2}  (d4 defines y, kills d2)
    B4:    gen={d5}     kill={}

Iteration 1:
    IN[Entry] = {}
    OUT[Entry] = {d1, d2}

    IN[B2] = OUT[Entry] U OUT[B3] = {d1,d2} U {} = {d1,d2}
    OUT[B2] = {d3} U ({d1,d2} - {d1}) = {d2,d3}

    IN[B3] = OUT[B2] = {d2,d3}
    OUT[B3] = {d4} U ({d2,d3} - {d2}) = {d3,d4}

    IN[B4] = OUT[B3] = {d3,d4}
    OUT[B4] = {d5} U {d3,d4} = {d3,d4,d5}

Iteration 2:
    IN[B2] = {d1,d2} U {d3,d4} = {d1,d2,d3,d4}
    OUT[B2] = {d3} U ({d1,d2,d3,d4} - {d1}) = {d2,d3,d4}

    IN[B3] = {d2,d3,d4}
    OUT[B3] = {d4} U ({d2,d3,d4} - {d2}) = {d3,d4}

    (B4 unchanged)

Iteration 3: Fixed point reached (no changes)

Result:
    At B4: x defined by d3, y defined by d4`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Reaching Definitions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Application</th>
            <th className="p-3 border">How It Uses Reaching Definitions</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Constant Propagation</td>
            <td className="p-3 border">If only constant def reaches, propagate value</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Copy Propagation</td>
            <td className="p-3 border">If only copy x=y reaches, replace x with y</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use-Def Chains</td>
            <td className="p-3 border">Link each use to its possible definitions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dead Code Detection</td>
            <td className="p-3 border">Definition is dead if it reaches no use</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>A definition reaches a point if not killed along some path</li>
        <li>Forward analysis with union as meet operator</li>
        <li>gen[B] = definitions in B that reach end of B</li>
        <li>kill[B] = definitions outside B of same variables as in B</li>
        <li>Used for constant/copy propagation and building use-def chains</li>
        <li>Iterates until fixed point is reached</li>
      </ul>
    </div>
  </div>
);

export default ReachingDefinitions;
