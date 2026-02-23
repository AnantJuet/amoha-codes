import React from "react";

const IndirectTriples: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Indirect Triples
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Indirect Triples provide a solution to the reordering problem of triples by introducing
      an additional level of indirection. Instead of executing triples in sequential order,
      a separate list of pointers determines the execution order. This allows instruction
      reordering without modifying the triples themselves.
    </p>

    <h2 className="text-3xl font-bold mt-8">Structure of Indirect Triples</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Indirect Triples consist of two components:

1. TRIPLE TABLE: Stores the actual instructions
   +-------+----+------+------+
   | Index | op | arg1 | arg2 |
   +-------+----+------+------+
   |  (0)  | +  |  a   |  b   |
   |  (1)  | +  |  c   |  d   |
   |  (2)  | *  | (0)  | (1)  |
   +-------+----+------+------+

2. EXECUTION ORDER LIST: Pointers to triples
   +-------+----------+
   | Order | TripleRef|
   +-------+----------+
   |   1   |    (0)   |
   |   2   |    (1)   |
   |   3   |    (2)   |
   +-------+----------+

Key Insight:
- Triple table never changes
- Only the execution order list is modified during optimization`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Indirect Triples?</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Problem with Regular Triples (Reordering):

Original:
+-------+----+------+------+
| Index | op | arg1 | arg2 |
+-------+----+------+------+
|  (0)  | +  |  a   |  b   |  ; Must execute first
|  (1)  | +  |  c   |  d   |  ; Independent of (0)
|  (2)  | *  | (0)  | (1)  |  ; Depends on both
+-------+----+------+------+

To swap (0) and (1), we must update (2)'s references!


Solution with Indirect Triples:

Triple Table (NEVER changes):
+-------+----+------+------+
| Index | op | arg1 | arg2 |
+-------+----+------+------+
|  (0)  | +  |  a   |  b   |
|  (1)  | +  |  c   |  d   |
|  (2)  | *  | (0)  | (1)  |
+-------+----+------+------+

Original Order:         After Reordering:
+-------+--------+      +-------+--------+
| Order | Triple |      | Order | Triple |
+-------+--------+      +-------+--------+
|   1   |  (0)   |      |   1   |  (1)   |  ; c+d first
|   2   |  (1)   |      |   2   |  (0)   |  ; a+b second
|   3   |  (2)   |      |   3   |  (2)   |  ; multiply
+-------+--------+      +-------+--------+

No reference updates needed in the triple table!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source Expression: x = (a + b) * (c - d) + e

Step 1: Generate Three-Address Code
    t1 = a + b
    t2 = c - d
    t3 = t1 * t2
    t4 = t3 + e
    x = t4

Step 2: Create Triple Table
+-------+----+------+------+
| Index | op | arg1 | arg2 |
+-------+----+------+------+
|  (0)  | +  |  a   |  b   |   ; t1 = a + b
|  (1)  | -  |  c   |  d   |   ; t2 = c - d
|  (2)  | *  | (0)  | (1)  |   ; t3 = t1 * t2
|  (3)  | +  | (2)  |  e   |   ; t4 = t3 + e
|  (4)  | =  |  x   | (3)  |   ; x = t4
+-------+----+------+------+

Step 3: Create Execution Order List
+-------+----------+
| Order | TripleRef|
+-------+----------+
|   1   |   (0)    |   ; Execute a + b
|   2   |   (1)    |   ; Execute c - d
|   3   |   (2)    |   ; Execute multiply
|   4   |   (3)    |   ; Execute addition
|   5   |   (4)    |   ; Execute assignment
+-------+----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Optimization with Indirect Triples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example: Loop-Invariant Code Motion

Source:
    for (i = 0; i < n; i++) {
        x = a * b;      // Loop-invariant (can be moved out)
        y = x + arr[i];
    }

Triple Table:
+-------+------+------+------+
| Index |  op  | arg1 | arg2 |
+-------+------+------+------+
|  (0)  |  =   |  i   |  0   |   ; i = 0
|  (1)  |  *   |  a   |  b   |   ; x = a * b (loop-invariant)
|  (2)  |  =   |  x   | (1)  |
|  (3)  | =[]  | arr  |  i   |   ; arr[i]
|  (4)  |  +   |  x   | (3)  |   ; x + arr[i]
|  (5)  |  =   |  y   | (4)  |
|  (6)  |  +   |  i   |  1   |   ; i++
|  (7)  |  <   |  i   |  n   |   ; i < n
|  (8)  |jmptrue| (7) | (3)  |   ; loop back
+-------+------+------+------+

BEFORE Optimization (Original Order):
+-------+--------+
| Order | Triple |
+-------+--------+
|   1   |  (0)   |   ; i = 0
|   2   |  (1)   |   ; x = a * b (inside loop)
|   3   |  (2)   |
|   4   |  (3)   |
|   5   |  (4)   |
|   6   |  (5)   |
|   7   |  (6)   |   ; i++
|   8   |  (7)   |
|   9   |  (8)   |
+-------+--------+

AFTER Optimization (Move invariant code before loop):
+-------+--------+
| Order | Triple |
+-------+--------+
|   1   |  (0)   |   ; i = 0
|   2   |  (1)   |   ; x = a * b (MOVED before loop)
|   3   |  (2)   |
|   4   |  (3)   |   ; Loop starts here
|   5   |  (4)   |
|   6   |  (5)   |
|   7   |  (6)   |   ; i++
|   8   |  (7)   |
|   9   |  (8)   |   ; Jump back to (3), not (1)
+-------+--------+

Triple table unchanged! Only order list modified.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: Three Representations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Quadruples</th>
            <th className="p-3 border">Triples</th>
            <th className="p-3 border">Indirect Triples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Fields</td>
            <td className="p-3 border">4 (op, arg1, arg2, result)</td>
            <td className="p-3 border">3 (op, arg1, arg2)</td>
            <td className="p-3 border">3 + pointer list</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Result Reference</td>
            <td className="p-3 border">Explicit name</td>
            <td className="p-3 border">Index position</td>
            <td className="p-3 border">Index position</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Space</td>
            <td className="p-3 border">Most (temp names)</td>
            <td className="p-3 border">Least</td>
            <td className="p-3 border">Medium (+ pointers)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reordering</td>
            <td className="p-3 border">Easy</td>
            <td className="p-3 border">Difficult</td>
            <td className="p-3 border">Easy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Optimization</td>
            <td className="p-3 border">Best</td>
            <td className="p-3 border">Hardest</td>
            <td className="p-3 border">Good</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Space Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`For n instructions:

Quadruples:
    Space = n × 4 fields = 4n entries
    Plus: temporary name storage

Triples:
    Space = n × 3 fields = 3n entries
    No temporary names

Indirect Triples:
    Space = n × 3 fields + n pointers
         = 3n + n = 4n entries
    No temporary names

Comparison for 100 instructions:
    Quadruples:         400 + temp storage
    Triples:            300
    Indirect Triples:   400

Note: Indirect triples have similar space to quadruples
but benefit from easier optimization without temp names.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Structure Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`// C/C++ Implementation of Indirect Triples

// Triple structure (same as regular triples)
struct Triple {
    char op[10];
    int arg1;         // Can be value or triple reference
    int arg2;
    bool isArg1Ref;   // True if arg1 references another triple
    bool isArg2Ref;   // True if arg2 references another triple
};

// Indirect triple structure
struct IndirectTriples {
    Triple tripleTable[MAX_TRIPLES];
    int orderList[MAX_TRIPLES];  // Execution order pointers
    int tripleCount;
    int orderCount;
};

// Add a new triple
int addTriple(IndirectTriples* it, char* op, int arg1, int arg2,
              bool isArg1Ref, bool isArg2Ref) {
    int index = it->tripleCount;
    strcpy(it->tripleTable[index].op, op);
    it->tripleTable[index].arg1 = arg1;
    it->tripleTable[index].arg2 = arg2;
    it->tripleTable[index].isArg1Ref = isArg1Ref;
    it->tripleTable[index].isArg2Ref = isArg2Ref;

    // Add to execution order
    it->orderList[it->orderCount++] = index;
    it->tripleCount++;
    return index;
}

// Reorder execution (for optimization)
void swapOrder(IndirectTriples* it, int pos1, int pos2) {
    // Simply swap pointers in order list
    int temp = it->orderList[pos1];
    it->orderList[pos1] = it->orderList[pos2];
    it->orderList[pos2] = temp;
    // Triple table remains unchanged!
}

// Execute in order
void execute(IndirectTriples* it) {
    for (int i = 0; i < it->orderCount; i++) {
        int tripleIdx = it->orderList[i];
        Triple* t = &it->tripleTable[tripleIdx];
        // Execute triple t
        printf("Executing: (%s, %d, %d)\\n",
               t->op, t->arg1, t->arg2);
    }
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Indirect Triples</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Easy Optimization:</strong> Instructions can be reordered without updating references</li>
      <li><strong>No Temp Names:</strong> Space savings from not storing temporary variable names</li>
      <li><strong>Flexible:</strong> Order list can be freely modified</li>
      <li><strong>Stable References:</strong> Triple indices remain constant</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Indirect Triples</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Extra Space:</strong> Additional pointer/order list overhead</li>
      <li><strong>Indirect Access:</strong> Extra lookup to find actual instruction</li>
      <li><strong>More Complex:</strong> Two data structures to manage</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Indirect triples use two structures: triple table + execution order list</li>
        <li>Triple table stores actual instructions and never changes</li>
        <li>Order list contains pointers and controls execution sequence</li>
        <li>Solves the reordering problem of regular triples</li>
        <li>Optimization only modifies the order list, not the triples</li>
        <li>Space overhead is approximately one pointer per instruction</li>
        <li>Combines benefits of triples (no temps) with easy optimization</li>
        <li>Useful when optimization is needed but memory is constrained</li>
      </ul>
    </div>
  </div>
);

export default IndirectTriples;
