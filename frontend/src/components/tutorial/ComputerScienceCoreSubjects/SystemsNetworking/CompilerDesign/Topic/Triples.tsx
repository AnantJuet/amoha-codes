import React from "react";

const Triples: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Triple Representation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Triples are an alternative to quadruples for representing three-address code. Unlike
      quadruples, triples use only three fields: operator (op), first operand (arg1), and
      second operand (arg2). The result is implicitly the triple's index (position) in the
      instruction array, eliminating the need for temporary variable names.
    </p>

    <h2 className="text-3xl font-bold mt-8">Triple Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Triple Format:

┌────────┬────────┬────────┐
│   op   │  arg1  │  arg2  │
├────────┼────────┼────────┤
│operator│operand1│operand2│
└────────┴────────┴────────┘

Key Difference from Quadruples:
- NO explicit result field
- The instruction's index IS the result reference
- References to previous results use (index) notation

Example:
  TAC:      t1 = a + b
            t2 = t1 * c

  Quadruple:  (0) (+, a, b, t1)
              (1) (*, t1, c, t2)

  Triple:     (0) (+, a, b)      ; Result is (0)
              (1) (*, (0), c)    ; Uses result of instruction (0)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Triple Table Format</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Index</th>
            <th className="p-3 border">op</th>
            <th className="p-3 border">arg1</th>
            <th className="p-3 border">arg2</th>
          </tr>
        </thead>
        <tbody className="bg-white font-mono text-gray-900">
          <tr>
            <td className="p-3 border">(0)</td>
            <td className="p-3 border">+</td>
            <td className="p-3 border">a</td>
            <td className="p-3 border">b</td>
          </tr>
          <tr>
            <td className="p-3 border">(1)</td>
            <td className="p-3 border">*</td>
            <td className="p-3 border">(0)</td>
            <td className="p-3 border">c</td>
          </tr>
          <tr>
            <td className="p-3 border">(2)</td>
            <td className="p-3 border">=</td>
            <td className="p-3 border">x</td>
            <td className="p-3 border">(1)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
      This represents: (a + b) * c stored in x. Note how (0) and (1) reference previous results.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Triple Instructions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">TAC Form</th>
            <th className="p-3 border">Triple (op, arg1, arg2)</th>
          </tr>
        </thead>
        <tbody className="bg-white font-mono text-sm text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Binary Op</td>
            <td className="p-3 border">x = y op z</td>
            <td className="p-3 border">(op, y, z) followed by (=, x, (n))</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unary Op</td>
            <td className="p-3 border">x = op y</td>
            <td className="p-3 border">(op, y, -)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Copy</td>
            <td className="p-3 border">x = y</td>
            <td className="p-3 border">(=, x, y)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Jump</td>
            <td className="p-3 border">goto L</td>
            <td className="p-3 border">(goto, L, -)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Conditional</td>
            <td className="p-3 border">if x relop y goto L</td>
            <td className="p-3 border">(relop, x, y) then (jmp_true, (n), L)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Param</td>
            <td className="p-3 border">param x</td>
            <td className="p-3 border">(param, x, -)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Call</td>
            <td className="p-3 border">call p, n</td>
            <td className="p-3 border">(call, p, n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source Expression: a = b * -c + b * -c

Step 1: Three-Address Code
    t1 = -c
    t2 = b * t1
    t3 = -c
    t4 = b * t3
    t5 = t2 + t4
    a = t5

Step 2: Triple Representation

+-------+--------+------+------+
| Index |   op   | arg1 | arg2 |
+-------+--------+------+------+
|  (0)  | uminus |  c   |  -   |   ; t1 = -c
|  (1)  |   *    |  b   | (0)  |   ; t2 = b * t1
|  (2)  | uminus |  c   |  -   |   ; t3 = -c
|  (3)  |   *    |  b   | (2)  |   ; t4 = b * t3
|  (4)  |   +    | (1)  | (3)  |   ; t5 = t2 + t4
|  (5)  |   =    |  a   | (4)  |   ; a = t5
+-------+--------+------+------+

Note: (0), (1), etc. refer to results of those instructions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: Quadruples vs Triples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Expression: x = (a + b) * (c + d)

QUADRUPLES:
+-------+----+------+------+--------+
| Index | op | arg1 | arg2 | result |
+-------+----+------+------+--------+
|  (0)  | +  |  a   |  b   |   t1   |
|  (1)  | +  |  c   |  d   |   t2   |
|  (2)  | *  |  t1  |  t2  |   t3   |
|  (3)  | =  |  t3  |  -   |   x    |
+-------+----+------+------+--------+
Space: 4 fields × 4 instructions = 16 entries


TRIPLES:
+-------+----+------+------+
| Index | op | arg1 | arg2 |
+-------+----+------+------+
|  (0)  | +  |  a   |  b   |
|  (1)  | +  |  c   |  d   |
|  (2)  | *  | (0)  | (1)  |
|  (3)  | =  |  x   | (2)  |
+-------+----+------+------+
Space: 3 fields × 4 instructions = 12 entries

Triples save space by not storing temporary names!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Reordering Problem</h2>
    <p className="leading-relaxed">
      A major disadvantage of triples is that reordering instructions (during optimization)
      requires updating all references to moved instructions.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original Triples:
+-------+----+------+------+
| Index | op | arg1 | arg2 |
+-------+----+------+------+
|  (0)  | +  |  a   |  b   |
|  (1)  | +  |  c   |  d   |
|  (2)  | *  | (0)  | (1)  |
+-------+----+------+------+

If we want to swap instructions (0) and (1) for optimization:

After Swapping (INCORRECT without updates):
+-------+----+------+------+
| Index | op | arg1 | arg2 |
+-------+----+------+------+
|  (0)  | +  |  c   |  d   |  ; Was (1)
|  (1)  | +  |  a   |  b   |  ; Was (0)
|  (2)  | *  | (0)  | (1)  |  ; WRONG! References are now incorrect
+-------+----+------+------+

After Swapping (CORRECT with updated references):
+-------+----+------+------+
| Index | op | arg1 | arg2 |
+-------+----+------+------+
|  (0)  | +  |  c   |  d   |
|  (1)  | +  |  a   |  b   |
|  (2)  | *  | (1)  | (0)  |  ; References updated!
+-------+----+------+------+

This makes optimization difficult with triples!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Flow with Triples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source Code:
    if (a < b) then x = a + b;

Triple Representation:
+-------+--------+------+------+
| Index |   op   | arg1 | arg2 |
+-------+--------+------+------+
|  (0)  |   <    |  a   |  b   |   ; Compare a < b
|  (1)  |jmpfalse| (0)  | (5)  |   ; If false, jump to (5)
|  (2)  |   +    |  a   |  b   |   ; Compute a + b
|  (3)  |   =    |  x   | (2)  |   ; x = result
|  (4)  |  goto  | (5)  |  -   |   ; Jump to end
|  (5)  |  ...   | ...  | ...  |   ; Continue
+-------+--------+------+------+

Alternative: Combined conditional jump
+-------+--------+------+------+
| Index |   op   | arg1 | arg2 |
+-------+--------+------+------+
|  (0)  | jmp<   |  a   |  b   |   ; (0) holds result of comparison
|  (1)  |jmpfalse| (0)  | (4)  |   ; Jump if a >= b
|  (2)  |   +    |  a   |  b   |
|  (3)  |   =    |  x   | (2)  |
|  (4)  |  ...   | ...  | ...  |
+-------+--------+------+------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Triples</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Space Efficient:</strong> No need to store temporary variable names</li>
      <li><strong>Simpler Structure:</strong> Only 3 fields per instruction</li>
      <li><strong>No Temp Management:</strong> No allocation of temporary variable names</li>
      <li><strong>Compact:</strong> Smaller memory footprint than quadruples</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Triples</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Difficult Optimization:</strong> Moving instructions requires updating references</li>
      <li><strong>Position Dependent:</strong> Result references are tied to instruction positions</li>
      <li><strong>Complex Code Motion:</strong> Hard to reorder for optimization</li>
      <li><strong>Reference Updates:</strong> Any movement needs cascading reference changes</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Data Structure Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`// C/C++ Structure for Triple
struct Triple {
    char op[10];      // Operator
    int arg1;         // First operand (index or symbol table ref)
    int arg2;         // Second operand
    bool isArg1Ref;   // True if arg1 is a triple reference
    bool isArg2Ref;   // True if arg2 is a triple reference
};

// Alternative with union for flexibility
struct Operand {
    enum { NAME, CONSTANT, TRIPLE_REF } type;
    union {
        char name[20];
        int constant;
        int tripleIndex;
    };
};

struct Triple {
    char op[10];
    Operand arg1;
    Operand arg2;
};

// Array of triples
Triple code[MAX_INSTRUCTIONS];
int nextTriple = 0;

// Emit a triple, returns index
int emit(char* op, Operand arg1, Operand arg2) {
    int index = nextTriple;
    strcpy(code[index].op, op);
    code[index].arg1 = arg1;
    code[index].arg2 = arg2;
    return nextTriple++;
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Triples have 3 fields: (op, arg1, arg2)</li>
        <li>No explicit result field - instruction index IS the result</li>
        <li>References to results use (index) notation like (0), (1), etc.</li>
        <li>More space-efficient than quadruples (no temporary names)</li>
        <li>Difficult to optimize because reordering requires reference updates</li>
        <li>Indirect triples solve the reordering problem</li>
        <li>Position-dependent representation</li>
        <li>Good for simple compilers where optimization is not critical</li>
      </ul>
    </div>
  </div>
);

export default Triples;
