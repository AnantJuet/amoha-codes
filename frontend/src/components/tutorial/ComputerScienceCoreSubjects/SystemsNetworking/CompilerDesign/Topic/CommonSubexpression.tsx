import React from "react";

const CommonSubexpression: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Common Subexpression Elimination
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Common Subexpression Elimination (CSE) is an optimization technique that
      identifies expressions computed multiple times and replaces redundant
      computations with references to the previously computed value. This reduces
      the number of operations and improves execution speed.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Common Subexpression?</h2>
    <p className="leading-relaxed">
      An expression E is a common subexpression at point P if:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>E was previously computed</li>
      <li>The values of operands in E have not changed since the previous computation</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example of Common Subexpression:

    a = b + c       // First computation of (b + c)
    d = x * y
    e = b + c       // (b + c) is common subexpression
                    // if b and c unchanged

    After CSE:
    t = b + c       // Compute once
    a = t
    d = x * y
    e = t           // Reuse computed value`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of CSE</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Scope</th>
            <th className="p-3 border">Analysis Required</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Local CSE</td>
            <td className="p-3 border">Within a basic block</td>
            <td className="p-3 border">Value numbering</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Global CSE</td>
            <td className="p-3 border">Across basic blocks</td>
            <td className="p-3 border">Available expressions analysis</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Local CSE with Value Numbering</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm: Local CSE using Value Numbering

For each instruction x = y op z in basic block:
1. Look up value numbers VN(y) and VN(z)
2. Create key: (op, VN(y), VN(z))
3. If key exists in hash table:
   - Replace instruction with x = stored_result
4. Else:
   - Compute and store new value number
   - Add (key -> x) to hash table

Example:
    a = b + c       // VN(b)=1, VN(c)=2, key=(+,1,2)
                    // Not found, VN(a)=3, store (+,1,2)->a

    d = b + c       // key=(+,1,2) found -> d = a

    e = a           // VN(e) = VN(a) = 3

    f = e + c       // key=(+,3,2), VN(a)=3, same as (+,1,2)?
                    // No! Different key. VN(f)=4`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Global CSE</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Global CSE Requirements:
Expression E is available at point P if:
1. Every path from Entry to P computes E
2. After each such computation, no operand of E is redefined

Example:
         +--------+
         |   B1   |
         | t1=a+b |
         +---+----+
             |
        +----+----+
        |         |
    +---v---+ +---v---+
    |  B2   | |  B3   |
    | t2=a+b| | t3=a+b|
    +---+---+ +---+---+
        |         |
        +----+----+
             |
         +---v---+
         |  B4   |
         | t4=a+b|  <- a+b available here
         +-------+   (computed on ALL paths)

After Global CSE:
         +--------+
         |   B1   |
         | t1=a+b |
         +---+----+
             |
        +----+----+
        |         |
    +---v---+ +---v---+
    |  B2   | |  B3   |
    | t2=t1 | | t3=t1 |
    +---+---+ +---+---+
        |         |
        +----+----+
             |
         +---v---+
         |  B4   |
         | t4=t1 |
         +-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When CSE Cannot Be Applied</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Case 1: Operand Modified
    a = b + c
    b = 10          // b is modified!
    d = b + c       // NOT a common subexpression

Case 2: Not Available on All Paths
         +--------+
         |   B1   |
         +---+----+
             |
        +----+----+
        |         |
    +---v---+ +---v---+
    |  B2   | |  B3   |
    | t1=a+b| |  ...  |  <- a+b not computed here
    +---+---+ +---+---+
        |         |
        +----+----+
             |
         +---v---+
         |  B4   |
         | t2=a+b|  <- a+b NOT available (not on all paths)
         +-------+

Case 3: Side Effects
    a = func() + x
    b = func() + x  // func() may have side effects
                    // Cannot eliminate without analysis`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comprehensive Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original Code:
    a = b + c
    d = a - e
    f = b + c       // CSE candidate
    g = f * d
    h = b + c       // CSE candidate
    b = 10          // b modified
    i = b + c       // NOT a CSE (b changed)

After CSE:
    t1 = b + c      // Common expression computed once
    a = t1
    d = a - e
    f = t1          // Reuse t1
    g = f * d
    h = t1          // Reuse t1
    b = 10
    i = b + c       // Must recompute (b changed)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Benefits of CSE</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Reduced Computation:</strong> Eliminates redundant calculations</li>
      <li><strong>Faster Execution:</strong> Fewer instructions to execute</li>
      <li><strong>Lower Power:</strong> Less work means less energy consumption</li>
      <li><strong>Register Efficiency:</strong> Can improve register utilization</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>CSE replaces redundant computations with references to previous results</li>
        <li>Local CSE works within a basic block using value numbering</li>
        <li>Global CSE requires available expressions analysis</li>
        <li>An expression is common only if operands are unchanged</li>
        <li>Must verify expression is available on ALL paths for global CSE</li>
        <li>Cannot apply CSE when side effects are present without analysis</li>
      </ul>
    </div>
  </div>
);

export default CommonSubexpression;
