import React from 'react';

const BalancedParentheses: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Balanced Parentheses Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The balanced parentheses problem is a classic application of stacks. Given a string containing
      brackets (parentheses, curly braces, square brackets), we need to determine if the brackets
      are balanced - meaning every opening bracket has a corresponding closing bracket in the correct order.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="font-bold">Given:</p>
      <p>A string containing characters including brackets: (, ), {"{"}, {"}"}, [, ]</p>
      <p className="font-bold mt-2">Determine:</p>
      <p>Whether the brackets in the string are balanced.</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Examples</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`
Balanced Examples:
  "()"           -> true
  "()[]{}"       -> true
  "{[()]}"       -> true
  "((()))"       -> true
  "{[]}"         -> true
  ""             -> true (empty string is balanced)

Unbalanced Examples:
  "("            -> false (missing closing)
  "(]"           -> false (mismatched pair)
  "([)]"         -> false (wrong order)
  "{[(])}"       -> false (interleaved incorrectly)
  ")("           -> false (closing before opening)
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Using Stack</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <ol className="list-decimal list-inside space-y-2">
        <li>Create an empty stack</li>
        <li>Traverse each character in the string:</li>
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li>If it's an opening bracket ( (, {"{"}, [ ), push to stack</li>
          <li>If it's a closing bracket ( ), {"}"}, ] ):</li>
          <ul className="list-disc list-inside ml-6">
            <li>If stack is empty, return false</li>
            <li>Pop from stack and check if it matches the closing bracket</li>
            <li>If not matching, return false</li>
          </ul>
        </ul>
        <li>After traversal, if stack is empty, return true; otherwise false</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Walkthrough</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`
Example: "{[()]}"

Step 1: '{' -> Push '{' to stack
Stack: ['{']

Step 2: '[' -> Push '[' to stack
Stack: ['{', '[']

Step 3: '(' -> Push '(' to stack
Stack: ['{', '[', '(']

Step 4: ')' -> Pop '(' from stack, matches ')'
Stack: ['{', '[']

Step 5: ']' -> Pop '[' from stack, matches ']'
Stack: ['{']

Step 6: '}' -> Pop '{' from stack, matches '}'
Stack: []

Stack is empty -> BALANCED!


Example: "([)]"

Step 1: '(' -> Push '(' to stack
Stack: ['(']

Step 2: '[' -> Push '[' to stack
Stack: ['(', '[']

Step 3: ')' -> Pop '[' from stack
'[' does NOT match ')' -> UNBALANCED!
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in JavaScript</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function isBalanced(str) {
    const stack = [];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const openBrackets = new Set(['(', '{', '[']);

    for (const char of str) {
        if (openBrackets.has(char)) {
            // Push opening brackets to stack
            stack.push(char);
        } else if (char in bracketPairs) {
            // For closing brackets
            if (stack.length === 0) {
                return false; // No matching opening bracket
            }
            const top = stack.pop();
            if (top !== bracketPairs[char]) {
                return false; // Mismatched pair
            }
        }
        // Ignore non-bracket characters
    }

    return stack.length === 0; // Stack should be empty
}

// Test cases
console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("([)]"));   // false
console.log(isBalanced("()[]{}"));  // true
console.log(isBalanced("("));       // false
console.log(isBalanced(""));        // true`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in C++</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`#include <iostream>
#include <stack>
#include <string>
using namespace std;

bool isBalanced(string str) {
    stack<char> s;

    for (char ch : str) {
        // Push opening brackets
        if (ch == '(' || ch == '{' || ch == '[') {
            s.push(ch);
        }
        // Handle closing brackets
        else if (ch == ')' || ch == '}' || ch == ']') {
            if (s.empty()) return false;

            char top = s.top();
            s.pop();

            if ((ch == ')' && top != '(') ||
                (ch == '}' && top != '{') ||
                (ch == ']' && top != '[')) {
                return false;
            }
        }
    }

    return s.empty();
}

int main() {
    cout << isBalanced("{[()]}") << endl;  // 1 (true)
    cout << isBalanced("([)]") << endl;    // 0 (false)
    cout << isBalanced("()[]{}") << endl;  // 1 (true)
    return 0;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in Python</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`def is_balanced(s):
    stack = []
    bracket_pairs = {')': '(', '}': '{', ']': '['}
    open_brackets = set('({[')

    for char in s:
        if char in open_brackets:
            stack.append(char)
        elif char in bracket_pairs:
            if not stack:
                return False
            if stack.pop() != bracket_pairs[char]:
                return False

    return len(stack) == 0

# Test cases
print(is_balanced("{[()]}"))  # True
print(is_balanced("([)]"))    # False
print(is_balanced("()[]{}"))  # True
print(is_balanced("(("))      # False
print(is_balanced(""))        # True`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Complexity</th>
            <th className="p-3 border">Value</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Time Complexity</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Single pass through the string</td>
          </tr>
          <tr>
            <td className="p-3 border">Space Complexity</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Worst case: all opening brackets</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Edge Cases to Consider</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Empty string:</strong> Should return true</li>
      <li><strong>Only opening brackets:</strong> Should return false</li>
      <li><strong>Only closing brackets:</strong> Should return false</li>
      <li><strong>Single bracket:</strong> Should return false</li>
      <li><strong>Nested brackets:</strong> Should handle correctly</li>
      <li><strong>Mixed characters:</strong> Should ignore non-bracket characters</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Variations of the Problem</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Only Parentheses</h4>
        <p>Simplified version with only ( and )</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Minimum Insertions to Balance</h4>
        <p>Find minimum brackets needed to make string balanced</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Longest Valid Parentheses</h4>
        <p>Find the length of the longest valid balanced substring</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">4. Remove Invalid Parentheses</h4>
        <p>Remove minimum number of brackets to make string valid</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Syntax validation in compilers and interpreters</li>
      <li>HTML/XML tag matching</li>
      <li>Code editors and IDEs for bracket matching</li>
      <li>Mathematical expression validation</li>
      <li>JSON/configuration file validation</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Takeaways</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Stack is the ideal data structure for this problem</li>
      <li>LIFO property ensures brackets are matched in correct order</li>
      <li>Always check for empty stack before popping</li>
      <li>Final stack must be empty for balanced string</li>
      <li>This pattern is useful for many parsing problems</li>
    </ul>
  </div>
);

export default BalancedParentheses;
