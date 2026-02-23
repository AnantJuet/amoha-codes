import React from "react";

const Quadruples: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Quadruple Representation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Quadruples are a tabular representation of three-address code where each instruction is
      stored as a record with four fields: operator (op), first operand (arg1), second operand
      (arg2), and result. This format provides explicit naming for all values and makes code
      manipulation straightforward.
    </p>

    <h2 className="text-3xl font-bold mt-8">Quadruple Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Quadruple Format:

┌────────┬────────┬────────┬────────┐
│   op   │  arg1  │  arg2  │ result │
├────────┼────────┼────────┼────────┤
│operator│operand1│operand2│  dest  │
└────────┴────────┴────────┴────────┘

Fields:
- op:     The operation to perform (+, -, *, /, =, etc.)
- arg1:   First operand (name, constant, or temporary)
- arg2:   Second operand (may be empty for unary ops)
- result: Destination where result is stored

Example TAC:  t1 = a + b
Quadruple:    (+, a, b, t1)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Quadruple Table Format</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Index</th>
            <th className="p-3 border">op</th>
            <th className="p-3 border">arg1</th>
            <th className="p-3 border">arg2</th>
            <th className="p-3 border">result</th>
          </tr>
        </thead>
        <tbody className="bg-white font-mono text-gray-900">
          <tr>
            <td className="p-3 border">(0)</td>
            <td className="p-3 border">+</td>
            <td className="p-3 border">a</td>
            <td className="p-3 border">b</td>
            <td className="p-3 border">t1</td>
          </tr>
          <tr>
            <td className="p-3 border">(1)</td>
            <td className="p-3 border">*</td>
            <td className="p-3 border">t1</td>
            <td className="p-3 border">c</td>
            <td className="p-3 border">t2</td>
          </tr>
          <tr>
            <td className="p-3 border">(2)</td>
            <td className="p-3 border">=</td>
            <td className="p-3 border">t2</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">x</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
      This represents: t1 = a + b; t2 = t1 * c; x = t2
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Quadruples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation Type</th>
            <th className="p-3 border">TAC Form</th>
            <th className="p-3 border">Quadruple (op, arg1, arg2, result)</th>
          </tr>
        </thead>
        <tbody className="bg-white font-mono text-sm text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Binary Op</td>
            <td className="p-3 border">x = y op z</td>
            <td className="p-3 border">(op, y, z, x)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unary Op</td>
            <td className="p-3 border">x = op y</td>
            <td className="p-3 border">(op, y, -, x)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Copy</td>
            <td className="p-3 border">x = y</td>
            <td className="p-3 border">(=, y, -, x)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unconditional Jump</td>
            <td className="p-3 border">goto L</td>
            <td className="p-3 border">(goto, -, -, L)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Conditional Jump</td>
            <td className="p-3 border">if x relop y goto L</td>
            <td className="p-3 border">(relop, x, y, L)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Array Read</td>
            <td className="p-3 border">x = y[i]</td>
            <td className="p-3 border">(=[], y, i, x)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Array Write</td>
            <td className="p-3 border">x[i] = y</td>
            <td className="p-3 border">([]=, y, x, i)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Param</td>
            <td className="p-3 border">param x</td>
            <td className="p-3 border">(param, x, -, -)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Call</td>
            <td className="p-3 border">call p, n</td>
            <td className="p-3 border">(call, p, n, -)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Return</td>
            <td className="p-3 border">return x</td>
            <td className="p-3 border">(return, x, -, -)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source Expression: a = b * -c + b * -c

Step 1: Generate Three-Address Code
    t1 = -c        ; Unary minus
    t2 = b * t1    ; First multiplication
    t3 = -c        ; Unary minus (again)
    t4 = b * t3    ; Second multiplication
    t5 = t2 + t4   ; Addition
    a = t5         ; Assignment

Step 2: Convert to Quadruples

+-------+------+------+------+--------+
| Index |  op  | arg1 | arg2 | result |
+-------+------+------+------+--------+
|  (0)  | uminus|  c   |  -   |   t1   |
|  (1)  |  *   |  b   |  t1  |   t2   |
|  (2)  | uminus|  c   |  -   |   t3   |
|  (3)  |  *   |  b   |  t3  |   t4   |
|  (4)  |  +   |  t2  |  t4  |   t5   |
|  (5)  |  =   |  t5  |  -   |   a    |
+-------+------+------+------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Flow Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source Code:
    if (a < b) {
        x = a + b;
    } else {
        x = a - b;
    }

Three-Address Code:
    (0) if a < b goto (2)
    (1) goto (4)
    (2) t1 = a + b
    (3) x = t1
        goto (6)
    (4) t2 = a - b
    (5) x = t2
    (6) (continue...)

Quadruple Representation:
+-------+------+------+------+--------+
| Index |  op  | arg1 | arg2 | result |
+-------+------+------+------+--------+
|  (0)  |  <   |  a   |  b   |   (2)  |
|  (1)  | goto |  -   |  -   |   (4)  |
|  (2)  |  +   |  a   |  b   |   t1   |
|  (3)  |  =   |  t1  |  -   |   x    |
|  (4)  | goto |  -   |  -   |   (6)  |
|  (5)  |  -   |  a   |  b   |   t2   |
|  (6)  |  =   |  t2  |  -   |   x    |
+-------+------+------+------+--------+

Note: Jumps use indices as target addresses`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Loop Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source Code:
    while (i < n) {
        sum = sum + i;
        i = i + 1;
    }

Three-Address Code:
    (0) if i >= n goto (5)
    (1) t1 = sum + i
    (2) sum = t1
    (3) t2 = i + 1
    (4) i = t2
        goto (0)
    (5) (continue...)

Quadruple Representation:
+-------+------+------+------+--------+
| Index |  op  | arg1 | arg2 | result |
+-------+------+------+------+--------+
|  (0)  |  >=  |  i   |  n   |   (5)  |
|  (1)  |  +   | sum  |  i   |   t1   |
|  (2)  |  =   |  t1  |  -   |  sum   |
|  (3)  |  +   |  i   |  1   |   t2   |
|  (4)  |  =   |  t2  |  -   |   i    |
|  (5)  | goto |  -   |  -   |   (0)  |
+-------+------+------+------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Quadruples</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Explicit Results:</strong> Each result has a named destination</li>
      <li><strong>Easy Optimization:</strong> Can move/reorder instructions independently</li>
      <li><strong>Simple Code Movement:</strong> Instructions are self-contained</li>
      <li><strong>Clear References:</strong> Easy to track where values are used</li>
      <li><strong>Good for Optimization:</strong> Copy propagation, dead code elimination</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Quadruples</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Space Overhead:</strong> Requires extra space for temporary names</li>
      <li><strong>More Temporaries:</strong> Each intermediate result needs a name</li>
      <li><strong>Name Management:</strong> Must manage temporary variable allocation</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Data Structure Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`// C/C++ Structure for Quadruple
struct Quadruple {
    char op[10];      // Operator
    char arg1[20];    // First operand
    char arg2[20];    // Second operand
    char result[20];  // Result destination
};

// Array of quadruples
Quadruple code[MAX_INSTRUCTIONS];
int nextQuad = 0;  // Next available index

// Function to emit a quadruple
void emit(char* op, char* arg1, char* arg2, char* result) {
    strcpy(code[nextQuad].op, op);
    strcpy(code[nextQuad].arg1, arg1);
    strcpy(code[nextQuad].arg2, arg2);
    strcpy(code[nextQuad].result, result);
    nextQuad++;
}

// Generate new temporary
char* newTemp() {
    static int tempCount = 0;
    char* temp = malloc(10);
    sprintf(temp, "t%d", tempCount++);
    return temp;
}

// Example usage:
// t1 = a + b becomes:
emit("+", "a", "b", "t1");`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Quadruple has 4 fields: (op, arg1, arg2, result)</li>
        <li>Result field explicitly names where the result is stored</li>
        <li>Unary operations leave arg2 empty (or use placeholder)</li>
        <li>Jump instructions use result field for target label/index</li>
        <li>Each instruction is self-contained and can be moved independently</li>
        <li>Requires more space than triples due to explicit result names</li>
        <li>Better for optimization because temporaries have explicit names</li>
        <li>Widely used in production compilers for intermediate representation</li>
      </ul>
    </div>
  </div>
);

export default Quadruples;
