import React from "react";

const ThreeAddressCode: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Three-Address Code (TAC)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Three-Address Code (TAC) is an intermediate representation used by compilers where
      each instruction has at most three operands (addresses). It serves as a bridge between
      high-level source code and low-level machine code, making optimization and code generation easier.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      In Three-Address Code, each instruction has the general form: x = y op z, where x, y, z
      are names, constants, or compiler-generated temporaries, and op is an operator.
      Each instruction can have at most one operator on the right side.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Three-Address Code Format:

General Form:
    result = operand1 op operand2

Examples:
    t1 = a + b      ; Binary operation
    t2 = -c         ; Unary operation
    x = t1          ; Copy/assignment
    t3 = y[i]       ; Array access
    *p = t2         ; Pointer dereference

Each instruction has at most:
- 1 operator (on right side)
- 2 source operands
- 1 destination operand`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Three-Address Instructions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Instruction Type</th>
            <th className="p-3 border">Format</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Assignment</td>
            <td className="p-3 border font-mono text-gray-900">x = y op z</td>
            <td className="p-3 border font-mono text-gray-900">t1 = a + b</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unary</td>
            <td className="p-3 border font-mono text-gray-900">x = op y</td>
            <td className="p-3 border font-mono text-gray-900">t2 = -c</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Copy</td>
            <td className="p-3 border font-mono text-gray-900">x = y</td>
            <td className="p-3 border font-mono text-gray-900">a = t1</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unconditional Jump</td>
            <td className="p-3 border font-mono text-gray-900">goto L</td>
            <td className="p-3 border font-mono text-gray-900">goto L1</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Conditional Jump</td>
            <td className="p-3 border font-mono text-gray-900">if x relop y goto L</td>
            <td className="p-3 border font-mono text-gray-900">if a {"<"} b goto L2</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Indexed Assignment</td>
            <td className="p-3 border font-mono text-gray-900">x = y[i] or x[i] = y</td>
            <td className="p-3 border font-mono text-gray-900">t3 = arr[i]</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Pointer Assignment</td>
            <td className="p-3 border font-mono text-gray-900">x = *y or *x = y</td>
            <td className="p-3 border font-mono text-gray-900">*p = t1</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Function Call</td>
            <td className="p-3 border font-mono text-gray-900">call p, n</td>
            <td className="p-3 border font-mono text-gray-900">call func, 3</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Parameter</td>
            <td className="p-3 border font-mono text-gray-900">param x</td>
            <td className="p-3 border font-mono text-gray-900">param a</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Return</td>
            <td className="p-3 border font-mono text-gray-900">return x</td>
            <td className="p-3 border font-mono text-gray-900">return t5</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Translation Examples</h2>

    <h3 className="text-2xl font-semibold mt-6">Arithmetic Expression</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source: a = b * -c + b * -c

Three-Address Code:
    t1 = -c
    t2 = b * t1
    t3 = -c
    t4 = b * t3
    t5 = t2 + t4
    a = t5`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">If-Else Statement</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source:
    if (a < b) {
        x = a;
    } else {
        x = b;
    }

Three-Address Code:
    if a < b goto L1
    goto L2
L1: x = a
    goto L3
L2: x = b
L3: (continue)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">While Loop</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source:
    while (i < n) {
        sum = sum + a[i];
        i = i + 1;
    }

Three-Address Code:
L1: if i >= n goto L2
    t1 = i * 4          ; Array index calculation
    t2 = a[t1]          ; Array access
    sum = sum + t2
    i = i + 1
    goto L1
L2: (continue)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation: Quadruples</h2>
    <p className="leading-relaxed">
      Quadruples use four fields to represent each TAC instruction: operator, operand1, operand2, result.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TAC: t1 = a + b
     t2 = t1 * c

Quadruple Representation:
+---+-----+------+------+--------+
| # | op  | arg1 | arg2 | result |
+---+-----+------+------+--------+
| 0 |  +  |  a   |  b   |   t1   |
| 1 |  *  |  t1  |  c   |   t2   |
+---+-----+------+------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation: Triples</h2>
    <p className="leading-relaxed">
      Triples avoid storing results explicitly by using instruction numbers as references.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TAC: t1 = a + b
     t2 = t1 * c

Triple Representation:
+---+-----+------+------+
| # | op  | arg1 | arg2 |
+---+-----+------+------+
| 0 |  +  |  a   |  b   |
| 1 |  *  | (0)  |  c   |  ; (0) refers to result of instruction 0
+---+-----+------+------+

Note: No separate result field; instruction number IS the result`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of TAC</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Simplicity:</strong> Easy to generate and understand</li>
      <li><strong>Machine Independence:</strong> Not tied to any specific architecture</li>
      <li><strong>Optimization Friendly:</strong> Easy to apply various optimizations</li>
      <li><strong>Code Generation:</strong> Maps well to most assembly instructions</li>
      <li><strong>Uniform Format:</strong> All operations have consistent representation</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>TAC has at most three addresses (operands) per instruction</li>
        <li>Only one operator per instruction (on the right side)</li>
        <li>Temporary variables (t1, t2...) hold intermediate results</li>
        <li>Can be implemented using quadruples or triples</li>
        <li>Quadruples: (op, arg1, arg2, result)</li>
        <li>Triples: (op, arg1, arg2) - result is the instruction number</li>
        <li>TAC is designed to be easy to optimize and translate to machine code</li>
      </ul>
    </div>
  </div>
);

export default ThreeAddressCode;
