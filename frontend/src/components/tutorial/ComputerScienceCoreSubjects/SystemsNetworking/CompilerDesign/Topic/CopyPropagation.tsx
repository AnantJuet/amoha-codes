import React from "react";

const CopyPropagation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Copy Propagation Optimization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Copy propagation is an optimization technique that replaces uses of a variable
      with the variable it was copied from. After a copy statement x = y, subsequent
      uses of x can be replaced with y (as long as neither x nor y is redefined).
      This often enables further optimizations like dead code elimination.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Copy Propagation?</h2>
    <p className="leading-relaxed">
      Given a copy statement x = y, copy propagation replaces all uses of x with y,
      provided that neither x nor y is modified between the copy and the use.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Copy Propagation Example:

Before:
    x = y           // Copy statement
    z = x + 1       // Use of x
    w = x * 2       // Another use of x

After Copy Propagation:
    x = y           // Copy statement (may become dead)
    z = y + 1       // x replaced with y
    w = y * 2       // x replaced with y

After Dead Code Elimination (if x unused):
    z = y + 1
    w = y * 2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Copy Propagation Rules</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Condition</th>
            <th className="p-3 border">Can Propagate?</th>
            <th className="p-3 border">Reason</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">x=y; z=x+1</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Neither modified</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">x=y; y=5; z=x</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">y is modified</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">x=y; x=10; z=x</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">x is redefined</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Local Copy Propagation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm: Local Copy Propagation

Maintain set of active copies: {(target, source), ...}

For each statement S in basic block:
    1. Replace uses: For each variable v used in S:
       if (v, src) in active copies:
           replace v with src

    2. Update active copies:
       a) If S is copy "x = y":
          - Remove any (z, x) from copies (x is redefined)
          - Remove any (x, z) from copies (x is redefined)
          - Add (x, y) to copies
       b) If S is "x = expr" (not copy):
          - Remove any (z, x) from copies
          - Remove any (x, z) from copies
       c) If S modifies any variable y:
          - Remove all pairs involving y

Example:
    Statement       Active Copies       After Propagation
    ---------       -------------       -----------------
    a = b           {(a,b)}             a = b
    c = a + 1       {(a,b)}             c = b + 1
    d = a           {(a,b)}             d = b
    b = 10          {}                  b = 10  (invalidates (a,b))
    e = a           {}                  e = a   (cannot propagate)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Global Copy Propagation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Global Copy Propagation:

A copy x = y reaches point P if:
- The copy is on every path from Entry to P
- Neither x nor y is redefined on any such path

Example:
         +--------+
         |  B1    |
         | x = y  |
         +---+----+
             |
        +----+----+
        |         |
    +---v---+ +---v---+
    |  B2   | |  B3   |
    | z=x+1 | | w=x*2 |
    +---+---+ +---+---+
        |         |
        +----+----+
             |
         +---v---+
         |  B4   |
         | v = x |
         +-------+

If x=y reaches all uses of x, propagate:

         +--------+
         |  B1    |
         | x = y  |
         +---+----+
             |
        +----+----+
        |         |
    +---v---+ +---v---+
    |  B2   | |  B3   |
    | z=y+1 | | w=y*2 |
    +---+---+ +---+---+
        |         |
        +----+----+
             |
         +---v---+
         |  B4   |
         | v = y |
         +-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Copy Propagation with CSE</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Copy propagation often follows CSE:

Original:
    a = b + c
    d = b + c       // CSE candidate

After CSE:
    t = b + c
    a = t           // Copy
    d = t           // Copy

After Copy Propagation (if a,d used for t):
    t = b + c
    // Uses of 'a' become uses of 't'
    // Uses of 'd' become uses of 't'

After Dead Code Elimination:
    t = b + c
    // a = t removed (if a not used)
    // d = t removed (if d not used)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comprehensive Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original Code:
    t1 = a + b
    x = t1
    t2 = x + c
    y = t2
    z = x + y
    result = z

Step 1 - Copy Propagation (x = t1):
    t1 = a + b
    x = t1
    t2 = t1 + c     // x -> t1
    y = t2
    z = t1 + y      // x -> t1
    result = z

Step 2 - Copy Propagation (y = t2):
    t1 = a + b
    x = t1
    t2 = t1 + c
    y = t2
    z = t1 + t2     // y -> t2
    result = z

Step 3 - Copy Propagation (result = z):
    // z only used once, but keeping for clarity

Step 4 - Dead Code Elimination:
    t1 = a + b
    t2 = t1 + c
    z = t1 + t2
    result = z`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Benefits of Copy Propagation</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Enables DCE:</strong> Copy statements often become dead</li>
      <li><strong>Reduces Register Pressure:</strong> Fewer live variables</li>
      <li><strong>Simplifies Code:</strong> Removes unnecessary intermediates</li>
      <li><strong>Improves Analysis:</strong> Simpler data flow</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Copy propagation replaces uses of x with y after x = y</li>
        <li>Valid only if neither x nor y is modified between copy and use</li>
        <li>Local copy propagation works within a basic block</li>
        <li>Global copy propagation requires reaching definitions analysis</li>
        <li>Often combined with CSE and dead code elimination</li>
        <li>The original copy statement often becomes dead and can be removed</li>
      </ul>
    </div>
  </div>
);

export default CopyPropagation;
