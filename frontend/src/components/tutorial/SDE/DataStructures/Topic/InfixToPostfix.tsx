import React from 'react';

const InfixToPostfix: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Infix to Postfix Conversion
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Converting infix expressions to postfix (Reverse Polish Notation) is a classic application of stacks.
      Postfix notation eliminates the need for parentheses and operator precedence rules during evaluation,
      making it easier for computers to process mathematical expressions.
    </p>

    <h2 className="text-2xl font-bold mt-6">Expression Notations</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Infix Notation</h4>
        <p>Operators are written between operands: <code className="bg-gray-200 px-2 rounded">A + B</code></p>
        <p className="text-sm text-gray-600">Human-readable, requires precedence rules</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Postfix Notation (Reverse Polish)</h4>
        <p>Operators are written after operands: <code className="bg-gray-200 px-2 rounded">A B +</code></p>
        <p className="text-sm text-gray-600">Easy to evaluate using a stack</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Prefix Notation (Polish)</h4>
        <p>Operators are written before operands: <code className="bg-gray-200 px-2 rounded">+ A B</code></p>
        <p className="text-sm text-gray-600">Also easy to evaluate using a stack</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Examples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Infix</th>
            <th className="p-3 border">Postfix</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">A + B</td>
            <td className="p-3 border">A B +</td>
          </tr>
          <tr>
            <td className="p-3 border">A + B * C</td>
            <td className="p-3 border">A B C * +</td>
          </tr>
          <tr>
            <td className="p-3 border">(A + B) * C</td>
            <td className="p-3 border">A B + C *</td>
          </tr>
          <tr>
            <td className="p-3 border">A + B * C - D</td>
            <td className="p-3 border">A B C * + D -</td>
          </tr>
          <tr>
            <td className="p-3 border">A * (B + C) / D</td>
            <td className="p-3 border">A B C + * D /</td>
          </tr>
          <tr>
            <td className="p-3 border">A ^ B ^ C</td>
            <td className="p-3 border">A B C ^ ^</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Operator Precedence and Associativity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operator</th>
            <th className="p-3 border">Precedence</th>
            <th className="p-3 border">Associativity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">^ (Power)</td>
            <td className="p-3 border">3 (Highest)</td>
            <td className="p-3 border">Right to Left</td>
          </tr>
          <tr>
            <td className="p-3 border">* / (Multiply, Divide)</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Left to Right</td>
          </tr>
          <tr>
            <td className="p-3 border">+ - (Add, Subtract)</td>
            <td className="p-3 border">1 (Lowest)</td>
            <td className="p-3 border">Left to Right</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm (Shunting Yard)</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <ol className="list-decimal list-inside space-y-2">
        <li>Create an empty stack for operators and an empty output string</li>
        <li>Scan the infix expression from left to right:</li>
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li><strong>Operand:</strong> Add directly to output</li>
          <li><strong>Opening parenthesis '(':</strong> Push to stack</li>
          <li><strong>Closing parenthesis ')':</strong> Pop and add to output until '(' is found, then discard '('</li>
          <li><strong>Operator:</strong> Pop operators with higher or equal precedence to output, then push current operator</li>
        </ul>
        <li>After scanning, pop all remaining operators to output</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Walkthrough</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`
Expression: A + B * C

Step | Symbol | Stack    | Output   | Action
-----|--------|----------|----------|---------------------------
1    | A      | []       | A        | Add operand to output
2    | +      | [+]      | A        | Push operator to stack
3    | B      | [+]      | A B      | Add operand to output
4    | *      | [+, *]   | A B      | Push * (higher precedence than +)
5    | C      | [+, *]   | A B C    | Add operand to output
6    | END    | []       | A B C * +| Pop remaining operators

Result: A B C * +


Expression: (A + B) * C

Step | Symbol | Stack    | Output   | Action
-----|--------|----------|----------|---------------------------
1    | (      | [(]      |          | Push opening parenthesis
2    | A      | [(]      | A        | Add operand to output
3    | +      | [(, +]   | A        | Push operator
4    | B      | [(, +]   | A B      | Add operand to output
5    | )      | []       | A B +    | Pop until '(' found
6    | *      | [*]      | A B +    | Push operator
7    | C      | [*]      | A B + C  | Add operand to output
8    | END    | []       | A B + C *| Pop remaining operators

Result: A B + C *
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in JavaScript</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function infixToPostfix(infix) {
    const precedence = {
        '^': 3,
        '*': 2,
        '/': 2,
        '+': 1,
        '-': 1
    };

    const isRightAssociative = (op) => op === '^';
    const isOperator = (ch) => ch in precedence;
    const isOperand = (ch) => /[a-zA-Z0-9]/.test(ch);

    const stack = [];
    let postfix = '';

    for (const char of infix) {
        if (char === ' ') continue;

        if (isOperand(char)) {
            // Operand: add to output
            postfix += char;
        } else if (char === '(') {
            // Opening parenthesis: push to stack
            stack.push(char);
        } else if (char === ')') {
            // Closing parenthesis: pop until '('
            while (stack.length && stack[stack.length - 1] !== '(') {
                postfix += stack.pop();
            }
            stack.pop(); // Remove '('
        } else if (isOperator(char)) {
            // Operator: pop higher/equal precedence operators
            while (
                stack.length &&
                stack[stack.length - 1] !== '(' &&
                isOperator(stack[stack.length - 1]) &&
                (precedence[stack[stack.length - 1]] > precedence[char] ||
                 (precedence[stack[stack.length - 1]] === precedence[char] &&
                  !isRightAssociative(char)))
            ) {
                postfix += stack.pop();
            }
            stack.push(char);
        }
    }

    // Pop remaining operators
    while (stack.length) {
        postfix += stack.pop();
    }

    return postfix;
}

// Test cases
console.log(infixToPostfix("A+B*C"));       // ABC*+
console.log(infixToPostfix("(A+B)*C"));     // AB+C*
console.log(infixToPostfix("A+B*C-D"));     // ABC*+D-
console.log(infixToPostfix("A*(B+C)/D"));   // ABC+*D/
console.log(infixToPostfix("A^B^C"));       // ABC^^`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in Python</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`def infix_to_postfix(infix):
    precedence = {'^': 3, '*': 2, '/': 2, '+': 1, '-': 1}
    right_associative = {'^'}

    def is_operator(ch):
        return ch in precedence

    def is_operand(ch):
        return ch.isalnum()

    stack = []
    postfix = []

    for char in infix:
        if char == ' ':
            continue

        if is_operand(char):
            postfix.append(char)
        elif char == '(':
            stack.append(char)
        elif char == ')':
            while stack and stack[-1] != '(':
                postfix.append(stack.pop())
            stack.pop()  # Remove '('
        elif is_operator(char):
            while (stack and stack[-1] != '(' and
                   stack[-1] in precedence and
                   (precedence[stack[-1]] > precedence[char] or
                    (precedence[stack[-1]] == precedence[char] and
                     char not in right_associative))):
                postfix.append(stack.pop())
            stack.append(char)

    while stack:
        postfix.append(stack.pop())

    return ''.join(postfix)

# Test cases
print(infix_to_postfix("A+B*C"))       # ABC*+
print(infix_to_postfix("(A+B)*C"))     # AB+C*
print(infix_to_postfix("A^B^C"))       # ABC^^`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Postfix Expression Evaluation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function evaluatePostfix(postfix) {
    const stack = [];

    for (const char of postfix) {
        if (/[0-9]/.test(char)) {
            stack.push(parseInt(char));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            let result;

            switch (char) {
                case '+': result = a + b; break;
                case '-': result = a - b; break;
                case '*': result = a * b; break;
                case '/': result = Math.floor(a / b); break;
                case '^': result = Math.pow(a, b); break;
            }
            stack.push(result);
        }
    }

    return stack.pop();
}

// Example: "23*54*+" = (2*3) + (5*4) = 6 + 20 = 26
console.log(evaluatePostfix("23*54*+"));  // 26`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Infix to Postfix</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Postfix Evaluation</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Higher precedence operators are evaluated first</li>
      <li>Power operator (^) is right-associative</li>
      <li>Parentheses override precedence rules</li>
      <li>Operands maintain their relative order</li>
      <li>Stack is used for operators only (not operands)</li>
      <li>Postfix expressions are evaluated left to right</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Expression evaluation in calculators</li>
      <li>Compilers and interpreters</li>
      <li>Spreadsheet formula evaluation</li>
      <li>Mathematical expression parsers</li>
    </ul>
  </div>
);

export default InfixToPostfix;
