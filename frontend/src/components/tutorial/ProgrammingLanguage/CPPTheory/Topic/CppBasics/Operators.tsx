import React from "react";

const Operators: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Operators
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Operators are special symbols that perform operations on variables and values. C++ provides
        a rich set of operators for performing arithmetic calculations, comparisons, logical
        operations, and more.
      </p>

      {/* Categories */}
      <h2 className="text-2xl font-bold mt-6">Types of Operators</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Arithmetic Operators:</strong> +, -, *, /, %</li>
        <li><strong>Assignment Operators:</strong> =, +=, -=, *=, /=, %=</li>
        <li><strong>Comparison/Relational Operators:</strong> ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
        <li><strong>Logical Operators:</strong> &&, ||, !</li>
        <li><strong>Bitwise Operators:</strong> &, |, ^, ~, &lt;&lt;, &gt;&gt;</li>
        <li><strong>Increment/Decrement:</strong> ++, --</li>
        <li><strong>Ternary Operator:</strong> ? :</li>
      </ul>

      {/* Arithmetic Operators */}
      <h2 className="text-2xl font-bold mt-6">Arithmetic Operators</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Operator</th>
              <th className="text-left px-4 py-2 border">Name</th>
              <th className="text-left px-4 py-2 border">Example</th>
              <th className="text-left px-4 py-2 border">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">+</td>
              <td className="px-4 py-2 border">Addition</td>
              <td className="px-4 py-2 border font-mono">10 + 3</td>
              <td className="px-4 py-2 border">13</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">-</td>
              <td className="px-4 py-2 border">Subtraction</td>
              <td className="px-4 py-2 border font-mono">10 - 3</td>
              <td className="px-4 py-2 border">7</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">*</td>
              <td className="px-4 py-2 border">Multiplication</td>
              <td className="px-4 py-2 border font-mono">10 * 3</td>
              <td className="px-4 py-2 border">30</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">/</td>
              <td className="px-4 py-2 border">Division</td>
              <td className="px-4 py-2 border font-mono">10 / 3</td>
              <td className="px-4 py-2 border">3 (integer)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">%</td>
              <td className="px-4 py-2 border">Modulus (Remainder)</td>
              <td className="px-4 py-2 border font-mono">10 % 3</td>
              <td className="px-4 py-2 border">1</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int a = 15, b = 4;

    cout << "Arithmetic Operators:" << endl;
    cout << "a = " << a << ", b = " << b << endl;
    cout << "==================" << endl;

    cout << "a + b = " << (a + b) << endl;   // 19
    cout << "a - b = " << (a - b) << endl;   // 11
    cout << "a * b = " << (a * b) << endl;   // 60
    cout << "a / b = " << (a / b) << endl;   // 3 (integer division)
    cout << "a % b = " << (a % b) << endl;   // 3 (remainder)

    // Floating-point division
    double x = 15.0, y = 4.0;
    cout << "\\nFloat division: " << (x / y) << endl;  // 3.75

    // Negative modulus
    cout << "-10 % 3 = " << (-10 % 3) << endl;  // -1

    return 0;
}`}
      </pre>

      {/* Assignment Operators */}
      <h2 className="text-2xl font-bold mt-6">Assignment Operators</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Operator</th>
              <th className="text-left px-4 py-2 border">Example</th>
              <th className="text-left px-4 py-2 border">Equivalent To</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">=</td>
              <td className="px-4 py-2 border font-mono">x = 5</td>
              <td className="px-4 py-2 border">Assign 5 to x</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">+=</td>
              <td className="px-4 py-2 border font-mono">x += 3</td>
              <td className="px-4 py-2 border font-mono">x = x + 3</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">-=</td>
              <td className="px-4 py-2 border font-mono">x -= 3</td>
              <td className="px-4 py-2 border font-mono">x = x - 3</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">*=</td>
              <td className="px-4 py-2 border font-mono">x *= 3</td>
              <td className="px-4 py-2 border font-mono">x = x * 3</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">/=</td>
              <td className="px-4 py-2 border font-mono">x /= 3</td>
              <td className="px-4 py-2 border font-mono">x = x / 3</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">%=</td>
              <td className="px-4 py-2 border font-mono">x %= 3</td>
              <td className="px-4 py-2 border font-mono">x = x % 3</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int x = 10;
    cout << "Initial x = " << x << endl;

    x += 5;   // x = x + 5 = 15
    cout << "After x += 5: " << x << endl;

    x -= 3;   // x = x - 3 = 12
    cout << "After x -= 3: " << x << endl;

    x *= 2;   // x = x * 2 = 24
    cout << "After x *= 2: " << x << endl;

    x /= 4;   // x = x / 4 = 6
    cout << "After x /= 4: " << x << endl;

    x %= 4;   // x = x % 4 = 2
    cout << "After x %= 4: " << x << endl;

    return 0;
}`}
      </pre>

      {/* Comparison Operators */}
      <h2 className="text-2xl font-bold mt-6">Comparison (Relational) Operators</h2>
      <p className="leading-relaxed">
        Comparison operators compare two values and return a boolean result (true or false).
      </p>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Operator</th>
              <th className="text-left px-4 py-2 border">Name</th>
              <th className="text-left px-4 py-2 border">Example (a=5, b=3)</th>
              <th className="text-left px-4 py-2 border">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">==</td>
              <td className="px-4 py-2 border">Equal to</td>
              <td className="px-4 py-2 border font-mono">a == b</td>
              <td className="px-4 py-2 border">false</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">!=</td>
              <td className="px-4 py-2 border">Not equal to</td>
              <td className="px-4 py-2 border font-mono">a != b</td>
              <td className="px-4 py-2 border">true</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">&gt;</td>
              <td className="px-4 py-2 border">Greater than</td>
              <td className="px-4 py-2 border font-mono">a &gt; b</td>
              <td className="px-4 py-2 border">true</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">&lt;</td>
              <td className="px-4 py-2 border">Less than</td>
              <td className="px-4 py-2 border font-mono">a &lt; b</td>
              <td className="px-4 py-2 border">false</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">&gt;=</td>
              <td className="px-4 py-2 border">Greater than or equal</td>
              <td className="px-4 py-2 border font-mono">a &gt;= b</td>
              <td className="px-4 py-2 border">true</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">&lt;=</td>
              <td className="px-4 py-2 border">Less than or equal</td>
              <td className="px-4 py-2 border font-mono">a &lt;= b</td>
              <td className="px-4 py-2 border">false</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 5;

    cout << boolalpha;  // Print true/false instead of 1/0
    cout << "a = " << a << ", b = " << b << endl;
    cout << "==================" << endl;

    cout << "a == b: " << (a == b) << endl;  // false
    cout << "a != b: " << (a != b) << endl;  // true
    cout << "a > b:  " << (a > b) << endl;   // true
    cout << "a < b:  " << (a < b) << endl;   // false
    cout << "a >= b: " << (a >= b) << endl;  // true
    cout << "a <= b: " << (a <= b) << endl;  // false

    // Using in conditions
    if (a > b) {
        cout << "\\na is greater than b" << endl;
    }

    return 0;
}`}
      </pre>

      {/* Logical Operators */}
      <h2 className="text-2xl font-bold mt-6">Logical Operators</h2>
      <p className="leading-relaxed">
        Logical operators are used to combine conditional statements.
      </p>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Operator</th>
              <th className="text-left px-4 py-2 border">Name</th>
              <th className="text-left px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">&&</td>
              <td className="px-4 py-2 border">Logical AND</td>
              <td className="px-4 py-2 border">True if both operands are true</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">||</td>
              <td className="px-4 py-2 border">Logical OR</td>
              <td className="px-4 py-2 border">True if at least one operand is true</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">!</td>
              <td className="px-4 py-2 border">Logical NOT</td>
              <td className="px-4 py-2 border">Reverses the logical state</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    bool a = true, b = false;

    cout << boolalpha;
    cout << "a = " << a << ", b = " << b << endl;
    cout << "==================" << endl;

    // Logical AND (&&)
    cout << "a && b: " << (a && b) << endl;  // false
    cout << "a && a: " << (a && a) << endl;  // true

    // Logical OR (||)
    cout << "a || b: " << (a || b) << endl;  // true
    cout << "b || b: " << (b || b) << endl;  // false

    // Logical NOT (!)
    cout << "!a: " << (!a) << endl;  // false
    cout << "!b: " << (!b) << endl;  // true

    // Combining operators
    int age = 25;
    bool hasLicense = true;

    if (age >= 18 && hasLicense) {
        cout << "\\nYou can drive!" << endl;
    }

    int score = 85;
    if (score < 0 || score > 100) {
        cout << "Invalid score" << endl;
    } else {
        cout << "Valid score: " << score << endl;
    }

    return 0;
}`}
      </pre>

      {/* Truth Tables */}
      <h3 className="text-xl font-semibold mt-4">Truth Tables:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <p className="font-semibold mb-2">AND (&&)</p>
          <table className="border border-gray-300 w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1">A</th>
                <th className="border px-2 py-1">B</th>
                <th className="border px-2 py-1">A && B</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1">T</td><td className="border px-2 py-1">T</td><td className="border px-2 py-1">T</td></tr>
              <tr><td className="border px-2 py-1">T</td><td className="border px-2 py-1">F</td><td className="border px-2 py-1">F</td></tr>
              <tr><td className="border px-2 py-1">F</td><td className="border px-2 py-1">T</td><td className="border px-2 py-1">F</td></tr>
              <tr><td className="border px-2 py-1">F</td><td className="border px-2 py-1">F</td><td className="border px-2 py-1">F</td></tr>
            </tbody>
          </table>
        </div>
        <div>
          <p className="font-semibold mb-2">OR (||)</p>
          <table className="border border-gray-300 w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1">A</th>
                <th className="border px-2 py-1">B</th>
                <th className="border px-2 py-1">A || B</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1">T</td><td className="border px-2 py-1">T</td><td className="border px-2 py-1">T</td></tr>
              <tr><td className="border px-2 py-1">T</td><td className="border px-2 py-1">F</td><td className="border px-2 py-1">T</td></tr>
              <tr><td className="border px-2 py-1">F</td><td className="border px-2 py-1">T</td><td className="border px-2 py-1">T</td></tr>
              <tr><td className="border px-2 py-1">F</td><td className="border px-2 py-1">F</td><td className="border px-2 py-1">F</td></tr>
            </tbody>
          </table>
        </div>
        <div>
          <p className="font-semibold mb-2">NOT (!)</p>
          <table className="border border-gray-300 w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1">A</th>
                <th className="border px-2 py-1">!A</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1">T</td><td className="border px-2 py-1">F</td></tr>
              <tr><td className="border px-2 py-1">F</td><td className="border px-2 py-1">T</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Increment and Decrement */}
      <h2 className="text-2xl font-bold mt-6">Increment and Decrement Operators</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int x = 5;

    // Post-increment: use current value, then increment
    cout << "x = " << x << endl;      // 5
    cout << "x++ = " << x++ << endl;  // 5 (uses 5, then increments)
    cout << "x = " << x << endl;      // 6

    // Pre-increment: increment first, then use
    x = 5;
    cout << "\\nx = " << x << endl;      // 5
    cout << "++x = " << ++x << endl;  // 6 (increments first)
    cout << "x = " << x << endl;      // 6

    // Post-decrement
    x = 5;
    cout << "\\nx-- = " << x-- << endl;  // 5
    cout << "x = " << x << endl;       // 4

    // Pre-decrement
    x = 5;
    cout << "\\n--x = " << --x << endl;  // 4
    cout << "x = " << x << endl;       // 4

    // In expressions
    int a = 5, b;
    b = a++ * 2;  // b = 5 * 2 = 10, then a = 6
    cout << "\\na = " << a << ", b = " << b << endl;

    a = 5;
    b = ++a * 2;  // a = 6 first, then b = 6 * 2 = 12
    cout << "a = " << a << ", b = " << b << endl;

    return 0;
}`}
      </pre>

      {/* Bitwise Operators */}
      <h2 className="text-2xl font-bold mt-6">Bitwise Operators</h2>
      <p className="leading-relaxed">
        Bitwise operators work on individual bits of integer values.
      </p>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Operator</th>
              <th className="text-left px-4 py-2 border">Name</th>
              <th className="text-left px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">&</td>
              <td className="px-4 py-2 border">AND</td>
              <td className="px-4 py-2 border">1 if both bits are 1</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">|</td>
              <td className="px-4 py-2 border">OR</td>
              <td className="px-4 py-2 border">1 if at least one bit is 1</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">^</td>
              <td className="px-4 py-2 border">XOR</td>
              <td className="px-4 py-2 border">1 if bits are different</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">~</td>
              <td className="px-4 py-2 border">NOT</td>
              <td className="px-4 py-2 border">Flips all bits</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">&lt;&lt;</td>
              <td className="px-4 py-2 border">Left Shift</td>
              <td className="px-4 py-2 border">Shifts bits left (multiply by 2)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">&gt;&gt;</td>
              <td className="px-4 py-2 border">Right Shift</td>
              <td className="px-4 py-2 border">Shifts bits right (divide by 2)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int a = 5;   // Binary: 0101
    int b = 3;   // Binary: 0011

    cout << "a = 5 (0101), b = 3 (0011)" << endl;
    cout << "============================" << endl;

    cout << "a & b = " << (a & b) << endl;   // 1 (0001)
    cout << "a | b = " << (a | b) << endl;   // 7 (0111)
    cout << "a ^ b = " << (a ^ b) << endl;   // 6 (0110)
    cout << "~a = " << (~a) << endl;         // -6 (inverts all bits)

    // Shift operators
    cout << "\\nShift operators:" << endl;
    cout << "a << 1 = " << (a << 1) << endl;  // 10 (1010) - multiply by 2
    cout << "a << 2 = " << (a << 2) << endl;  // 20 (10100) - multiply by 4
    cout << "a >> 1 = " << (a >> 1) << endl;  // 2 (0010) - divide by 2

    // Practical use: Check if number is even/odd
    int num = 7;
    if (num & 1) {
        cout << "\\n" << num << " is odd" << endl;
    } else {
        cout << "\\n" << num << " is even" << endl;
    }

    return 0;
}`}
      </pre>

      {/* Ternary Operator */}
      <h2 className="text-2xl font-bold mt-6">Ternary Operator (? :)</h2>
      <p className="leading-relaxed">
        The ternary operator is a shorthand for if-else statements.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Syntax: condition ? value_if_true : value_if_false

    int a = 10, b = 20;

    // Find maximum
    int max = (a > b) ? a : b;
    cout << "Maximum: " << max << endl;  // 20

    // Find minimum
    int min = (a < b) ? a : b;
    cout << "Minimum: " << min << endl;  // 10

    // Even or odd
    int num = 15;
    string result = (num % 2 == 0) ? "Even" : "Odd";
    cout << num << " is " << result << endl;  // 15 is Odd

    // Grade calculation
    int score = 85;
    char grade = (score >= 90) ? 'A' :
                 (score >= 80) ? 'B' :
                 (score >= 70) ? 'C' :
                 (score >= 60) ? 'D' : 'F';
    cout << "Grade: " << grade << endl;  // B

    // In output
    int age = 20;
    cout << "You are " << ((age >= 18) ? "an adult" : "a minor") << endl;

    return 0;
}`}
      </pre>

      {/* Operator Precedence */}
      <h2 className="text-2xl font-bold mt-6">Operator Precedence</h2>
      <p className="leading-relaxed">
        Operator precedence determines the order in which operators are evaluated.
        Higher precedence operators are evaluated first.
      </p>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Precedence</th>
              <th className="text-left px-4 py-2 border">Operators</th>
              <th className="text-left px-4 py-2 border">Associativity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">1 (Highest)</td>
              <td className="px-4 py-2 border font-mono">() [] -&gt; .</td>
              <td className="px-4 py-2 border">Left to Right</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">2</td>
              <td className="px-4 py-2 border font-mono">! ~ ++ -- + - * &</td>
              <td className="px-4 py-2 border">Right to Left</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">3</td>
              <td className="px-4 py-2 border font-mono">* / %</td>
              <td className="px-4 py-2 border">Left to Right</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">4</td>
              <td className="px-4 py-2 border font-mono">+ -</td>
              <td className="px-4 py-2 border">Left to Right</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">5</td>
              <td className="px-4 py-2 border font-mono">&lt;&lt; &gt;&gt;</td>
              <td className="px-4 py-2 border">Left to Right</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">6</td>
              <td className="px-4 py-2 border font-mono">&lt; &lt;= &gt; &gt;=</td>
              <td className="px-4 py-2 border">Left to Right</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">7</td>
              <td className="px-4 py-2 border font-mono">== !=</td>
              <td className="px-4 py-2 border">Left to Right</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">8</td>
              <td className="px-4 py-2 border font-mono">&&</td>
              <td className="px-4 py-2 border">Left to Right</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">9</td>
              <td className="px-4 py-2 border font-mono">||</td>
              <td className="px-4 py-2 border">Left to Right</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">10</td>
              <td className="px-4 py-2 border font-mono">?:</td>
              <td className="px-4 py-2 border">Right to Left</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">11 (Lowest)</td>
              <td className="px-4 py-2 border font-mono">= += -= *= /= %=</td>
              <td className="px-4 py-2 border">Right to Left</td>
            </tr>
          </tbody>
        </table>
      </div>

      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Precedence examples
    int result;

    result = 2 + 3 * 4;      // 3*4 first = 14 (not 20)
    cout << "2 + 3 * 4 = " << result << endl;

    result = (2 + 3) * 4;    // Parentheses first = 20
    cout << "(2 + 3) * 4 = " << result << endl;

    result = 10 - 4 - 2;     // Left to right = 4
    cout << "10 - 4 - 2 = " << result << endl;

    // Complex expression
    int a = 5, b = 3, c = 2;
    result = a + b * c - a / c;  // 5 + 6 - 2 = 9
    cout << "5 + 3*2 - 5/2 = " << result << endl;

    return 0;
}`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Use parentheses to make complex expressions clear</li>
          <li>Avoid using too many operators in a single expression</li>
          <li>Be careful with integer division (truncates decimal)</li>
          <li>Remember: <code className="bg-gray-200 px-1 rounded">==</code> for comparison,
              <code className="bg-gray-200 px-1 rounded">=</code> for assignment</li>
          <li>Use pre-increment (++x) when you don't need the old value</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> C++ operators allow you to perform calculations, comparisons,
        and logical operations. Understanding operator precedence and associativity is important
        for writing correct expressions. Use parentheses when in doubt about evaluation order.
      </div>
    </div>
  );
};

export default Operators;
