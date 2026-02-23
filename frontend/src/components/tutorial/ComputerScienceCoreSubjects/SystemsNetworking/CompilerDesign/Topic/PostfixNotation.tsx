import React from "react";

const PostfixNotation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Postfix Notation (Reverse Polish Notation)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Postfix notation, also known as Reverse Polish Notation (RPN), is a mathematical notation
      where operators follow their operands. Unlike infix notation (a + b), postfix notation
      writes the same expression as (a b +). This notation eliminates the need for parentheses
      and makes expression evaluation straightforward using a stack-based approach.
    </p>

    <h2 className="text-3xl font-bold mt-8">Notation Types Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Notation</th>
            <th className="p-3 border">Format</th>
            <th className="p-3 border">Example (a + b)</th>
            <th className="p-3 border">Example (a + b * c)</th>
          </tr>
        </thead>
        <tbody className="bg-white font-mono text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Prefix</td>
            <td className="p-3 border">op operand operand</td>
            <td className="p-3 border">+ a b</td>
            <td className="p-3 border">+ a * b c</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Infix</td>
            <td className="p-3 border">operand op operand</td>
            <td className="p-3 border">a + b</td>
            <td className="p-3 border">a + b * c</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Postfix</td>
            <td className="p-3 border">operand operand op</td>
            <td className="p-3 border">a b +</td>
            <td className="p-3 border">a b c * +</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Use Postfix Notation?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Advantages of Postfix Notation:

1. NO PARENTHESES NEEDED
   Infix:   (a + b) * (c - d)
   Postfix: a b + c d - *
   The order of operations is implicit!

2. EASY STACK-BASED EVALUATION
   a b + c d - *

   Stack operations:
   Read 'a':  push a         Stack: [a]
   Read 'b':  push b         Stack: [a, b]
   Read '+':  pop b,a; push a+b   Stack: [a+b]
   Read 'c':  push c         Stack: [a+b, c]
   Read 'd':  push d         Stack: [a+b, c, d]
   Read '-':  pop d,c; push c-d   Stack: [a+b, c-d]
   Read '*':  pop; push (a+b)*(c-d)  Stack: [result]

3. LEFT-TO-RIGHT EVALUATION
   No need to look ahead or backtrack
   Simple single-pass processing

4. DIRECT MAPPING TO STACK MACHINES
   JVM, .NET CLR use postfix-like bytecode
   Calculator stacks (HP calculators use RPN)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Infix to Postfix Conversion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Shunting-Yard Algorithm (Dijkstra):

Input: Infix expression (tokens)
Output: Postfix expression

Algorithm:
1. Initialize empty operator stack and output queue
2. For each token:
   - If operand: add to output
   - If operator:
     * While stack top has higher/equal precedence:
       pop stack to output
     * Push current operator to stack
   - If '(': push to stack
   - If ')': pop to output until '(' found, discard '('
3. Pop remaining operators to output

Example: a + b * c - d

Token 'a': Output: a
Token '+': Stack: [+]
Token 'b': Output: a b
Token '*': Stack: [+, *] (* has higher precedence)
Token 'c': Output: a b c
Token '-': Pop * (higher prec): Output: a b c *
           Pop + (equal prec): Output: a b c * +
           Stack: [-]
Token 'd': Output: a b c * + d
End: Pop -: Output: a b c * + d -

Result: a b c * + d -`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Precedence and Associativity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operator</th>
            <th className="p-3 border">Precedence</th>
            <th className="p-3 border">Associativity</th>
          </tr>
        </thead>
        <tbody className="bg-white font-mono text-gray-900">
          <tr>
            <td className="p-3 border">^ (exponent)</td>
            <td className="p-3 border">4 (highest)</td>
            <td className="p-3 border">Right-to-left</td>
          </tr>
          <tr>
            <td className="p-3 border">* /</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Left-to-right</td>
          </tr>
          <tr>
            <td className="p-3 border">+ -</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Left-to-right</td>
          </tr>
          <tr>
            <td className="p-3 border">{"< > <= >= == !="}</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Left-to-right</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Conversion Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example 1: (a + b) * (c - d)

Token  | Action              | Stack    | Output
-------|---------------------|----------|----------------
(      | Push                | [(]      |
a      | Output              | [(]      | a
+      | Push                | [(, +]   | a
b      | Output              | [(, +]   | a b
)      | Pop until (         | []       | a b +
*      | Push                | [*]      | a b +
(      | Push                | [*, (]   | a b +
c      | Output              | [*, (]   | a b + c
-      | Push                | [*, (, -]| a b + c
d      | Output              | [*, (, -]| a b + c d
)      | Pop until (         | [*]      | a b + c d -
End    | Pop all             | []       | a b + c d - *

Result: a b + c d - *


Example 2: a ^ b ^ c (right associative)

Token  | Action              | Stack    | Output
-------|---------------------|----------|----------------
a      | Output              | []       | a
^      | Push                | [^]      | a
b      | Output              | [^]      | a b
^      | Push (right assoc)  | [^, ^]   | a b  (don't pop first ^)
c      | Output              | [^, ^]   | a b c
End    | Pop all             | []       | a b c ^ ^

Result: a b c ^ ^
Evaluates as: a ^ (b ^ c), not (a ^ b) ^ c`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Postfix Evaluation Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm: Evaluate Postfix Expression

function evaluatePostfix(postfix):
    stack = empty stack

    for each token in postfix:
        if token is operand:
            push(stack, value(token))
        else if token is operator:
            op2 = pop(stack)
            op1 = pop(stack)
            result = apply(token, op1, op2)
            push(stack, result)

    return pop(stack)  // Final result


Example: Evaluate "3 4 2 * +"

Token | Action                  | Stack
------|-------------------------|-------------
3     | push 3                  | [3]
4     | push 4                  | [3, 4]
2     | push 2                  | [3, 4, 2]
*     | pop 2,4; push 4*2=8     | [3, 8]
+     | pop 8,3; push 3+8=11    | [11]

Result: 11 (which equals 3 + 4*2)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Postfix to Three-Address Code</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Converting Postfix to TAC:

Postfix: a b c * + d -

Generation Algorithm:
    Stack holds variable/temp names (not values)

Token | Action                    | Stack      | TAC Emitted
------|---------------------------|------------|----------------
a     | push "a"                  | [a]        |
b     | push "b"                  | [a, b]     |
c     | push "c"                  | [a, b, c]  |
*     | pop c,b; t1=b*c; push t1  | [a, t1]    | t1 = b * c
+     | pop t1,a; t2=a+t1; push t2| [t2]       | t2 = a + t1
d     | push "d"                  | [t2, d]    |
-     | pop d,t2; t3=t2-d; push t3| [t3]       | t3 = t2 - d

Generated Three-Address Code:
    t1 = b * c
    t2 = a + t1
    t3 = t2 - d

This is equivalent to: (a + b*c) - d`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`// C++ Implementation

#include <stack>
#include <string>
#include <vector>

int precedence(char op) {
    switch(op) {
        case '^': return 4;
        case '*': case '/': return 3;
        case '+': case '-': return 2;
        default: return 0;
    }
}

bool isRightAssociative(char op) {
    return op == '^';
}

string infixToPostfix(string infix) {
    stack<char> ops;
    string postfix = "";

    for (char token : infix) {
        if (isalnum(token)) {
            postfix += token;
            postfix += ' ';
        }
        else if (token == '(') {
            ops.push(token);
        }
        else if (token == ')') {
            while (!ops.empty() && ops.top() != '(') {
                postfix += ops.top();
                postfix += ' ';
                ops.pop();
            }
            ops.pop();  // Remove '('
        }
        else {  // Operator
            while (!ops.empty() && ops.top() != '(' &&
                   (precedence(ops.top()) > precedence(token) ||
                    (precedence(ops.top()) == precedence(token) &&
                     !isRightAssociative(token)))) {
                postfix += ops.top();
                postfix += ' ';
                ops.pop();
            }
            ops.push(token);
        }
    }

    while (!ops.empty()) {
        postfix += ops.top();
        postfix += ' ';
        ops.pop();
    }

    return postfix;
}

int evaluatePostfix(string postfix) {
    stack<int> values;

    for (char token : postfix) {
        if (isdigit(token)) {
            values.push(token - '0');
        }
        else if (token != ' ') {
            int op2 = values.top(); values.pop();
            int op1 = values.top(); values.pop();
            switch(token) {
                case '+': values.push(op1 + op2); break;
                case '-': values.push(op1 - op2); break;
                case '*': values.push(op1 * op2); break;
                case '/': values.push(op1 / op2); break;
            }
        }
    }
    return values.top();
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Postfix in Stack-Based VMs</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Java Bytecode Example:

Source: int x = a + b * c;

Bytecode (postfix-like):
    iload_1      // Push a onto stack
    iload_2      // Push b onto stack
    iload_3      // Push c onto stack
    imul         // Pop b,c; push b*c
    iadd         // Pop a,(b*c); push a+b*c
    istore_4     // Pop and store in x

Stack trace:
    iload_1:   [a]
    iload_2:   [a, b]
    iload_3:   [a, b, c]
    imul:      [a, b*c]
    iadd:      [a+b*c]
    istore_4:  []  (stored in x)

This is essentially postfix: a b c * +`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Postfix notation places operators after their operands</li>
        <li>No parentheses needed - evaluation order is explicit</li>
        <li>Evaluated left-to-right using a stack</li>
        <li>Shunting-yard algorithm converts infix to postfix</li>
        <li>Handles precedence and associativity correctly</li>
        <li>Stack machines (JVM, CLR) use postfix-like instruction sequences</li>
        <li>Easy to generate three-address code from postfix</li>
        <li>Also known as Reverse Polish Notation (RPN)</li>
        <li>Prefix notation (Polish Notation) puts operators before operands</li>
      </ul>
    </div>
  </div>
);

export default PostfixNotation;
