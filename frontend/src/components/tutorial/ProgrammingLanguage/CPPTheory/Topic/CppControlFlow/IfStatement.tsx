import React from "react";

const IfStatement: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ If Statement
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        The <code className="bg-gray-200 px-1 rounded">if</code> statement is used to execute a
        block of code only if a specified condition is true. It allows your program to make
        decisions and execute different code paths based on conditions.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold mt-6">Syntax</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`if (condition) {
    // code to execute if condition is true
}`}
      </pre>

      {/* How It Works */}
      <h2 className="text-2xl font-bold mt-6">How It Works</h2>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li>The condition inside the parentheses is evaluated</li>
        <li>If the condition is <strong>true</strong> (non-zero), the code block executes</li>
        <li>If the condition is <strong>false</strong> (zero), the code block is skipped</li>
      </ol>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold mt-6">Basic Example</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int age = 18;

    if (age >= 18) {
        cout << "You are an adult." << endl;
    }

    cout << "Program continues..." << endl;

    return 0;
}

// Output:
// You are an adult.
// Program continues...`}
      </pre>

      {/* Multiple Conditions */}
      <h2 className="text-2xl font-bold mt-6">Multiple Conditions</h2>
      <p className="leading-relaxed">
        You can combine multiple conditions using logical operators
        (<code className="bg-gray-200 px-1 rounded">&&</code> for AND,{" "}
        <code className="bg-gray-200 px-1 rounded">||</code> for OR).
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int age = 25;
    bool hasLicense = true;

    // Using AND (&&) - both conditions must be true
    if (age >= 18 && hasLicense) {
        cout << "You can drive a car." << endl;
    }

    int score = 85;

    // Using OR (||) - at least one condition must be true
    if (score >= 90 || score == 85) {
        cout << "Excellent performance!" << endl;
    }

    // Combining AND and OR
    int temperature = 25;
    bool isRaining = false;

    if ((temperature > 20 && temperature < 30) && !isRaining) {
        cout << "Perfect weather for a walk!" << endl;
    }

    return 0;
}`}
      </pre>

      {/* Comparison Operators */}
      <h2 className="text-2xl font-bold mt-6">Comparison Operators in Conditions</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Operator</th>
              <th className="text-left px-4 py-2 border">Meaning</th>
              <th className="text-left px-4 py-2 border">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">==</td>
              <td className="px-4 py-2 border">Equal to</td>
              <td className="px-4 py-2 border font-mono">if (x == 5)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">!=</td>
              <td className="px-4 py-2 border">Not equal to</td>
              <td className="px-4 py-2 border font-mono">if (x != 0)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">&gt;</td>
              <td className="px-4 py-2 border">Greater than</td>
              <td className="px-4 py-2 border font-mono">if (x &gt; 10)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">&lt;</td>
              <td className="px-4 py-2 border">Less than</td>
              <td className="px-4 py-2 border font-mono">if (x &lt; 10)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">&gt;=</td>
              <td className="px-4 py-2 border">Greater than or equal</td>
              <td className="px-4 py-2 border font-mono">if (x &gt;= 18)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">&lt;=</td>
              <td className="px-4 py-2 border">Less than or equal</td>
              <td className="px-4 py-2 border font-mono">if (x &lt;= 100)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Nested If */}
      <h2 className="text-2xl font-bold mt-6">Nested If Statements</h2>
      <p className="leading-relaxed">
        You can place an if statement inside another if statement.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int age = 25;
    bool hasID = true;

    if (age >= 18) {
        cout << "Age requirement met." << endl;

        if (hasID) {
            cout << "ID verified. Access granted!" << endl;
        }
    }

    // Another example: Number classification
    int num = 15;

    if (num > 0) {
        cout << num << " is positive." << endl;

        if (num % 2 == 0) {
            cout << num << " is also even." << endl;
        } else {
            cout << num << " is also odd." << endl;
        }
    }

    return 0;
}`}
      </pre>

      {/* Single Statement */}
      <h2 className="text-2xl font-bold mt-6">Single Statement Without Braces</h2>
      <p className="leading-relaxed">
        If the if block contains only one statement, braces are optional (but recommended for clarity).
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int x = 10;

    // Without braces (single statement)
    if (x > 5)
        cout << "x is greater than 5" << endl;

    // With braces (recommended)
    if (x > 5) {
        cout << "x is greater than 5" << endl;
    }

    // DANGER: Without braces, only the next statement is part of if
    if (x > 5)
        cout << "This is inside if" << endl;
        cout << "This ALWAYS executes (not part of if)!" << endl;

    return 0;
}`}
      </pre>

      {/* Practical Examples */}
      <h2 className="text-2xl font-bold mt-6">Practical Examples</h2>

      <h3 className="text-xl font-semibold mt-4">Example 1: Check Voting Eligibility</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int age;

    cout << "Enter your age: ";
    cin >> age;

    if (age >= 18) {
        cout << "You are eligible to vote!" << endl;
        cout << "Please register at your local election office." << endl;
    }

    cout << "Thank you for checking." << endl;

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example 2: Password Validation</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

int main() {
    string password;
    const string correctPassword = "secret123";

    cout << "Enter password: ";
    cin >> password;

    if (password == correctPassword) {
        cout << "Access granted!" << endl;
        cout << "Welcome to the system." << endl;
    }

    if (password != correctPassword) {
        cout << "Access denied!" << endl;
    }

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example 3: Check Number Properties</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int num;

    cout << "Enter a number: ";
    cin >> num;

    if (num > 0) {
        cout << num << " is positive." << endl;
    }

    if (num < 0) {
        cout << num << " is negative." << endl;
    }

    if (num == 0) {
        cout << "The number is zero." << endl;
    }

    if (num % 2 == 0) {
        cout << num << " is even." << endl;
    }

    if (num % 5 == 0) {
        cout << num << " is divisible by 5." << endl;
    }

    return 0;
}`}
      </pre>

      {/* Common Mistakes */}
      <h2 className="text-2xl font-bold mt-6">Common Mistakes</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int x = 5;

    // MISTAKE 1: Using = instead of ==
    // if (x = 10)  // This ASSIGNS 10 to x, always true!
    if (x == 10) {  // Correct: comparison
        cout << "x is 10" << endl;
    }

    // MISTAKE 2: Semicolon after if
    // if (x > 0);  // Empty statement, block always executes
    // {
    //     cout << "This always prints" << endl;
    // }

    // MISTAKE 3: Comparing floating-point numbers
    double a = 0.1 + 0.2;
    // if (a == 0.3)  // May not work due to floating-point precision
    if (abs(a - 0.3) < 0.0001) {  // Better: check if close enough
        cout << "a is approximately 0.3" << endl;
    }

    return 0;
}`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Always use braces {`{}`} even for single statements</li>
          <li>Use <code className="bg-gray-200 px-1 rounded">==</code> for comparison, not <code className="bg-gray-200 px-1 rounded">=</code></li>
          <li>Put constants on the left for safety: <code className="bg-gray-200 px-1 rounded">if (5 == x)</code></li>
          <li>Avoid comparing floating-point numbers directly</li>
          <li>Keep conditions simple and readable</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> The if statement is the most basic control flow statement in C++.
        It executes code only when a condition is true. Use comparison and logical operators to
        create complex conditions, and always follow best practices for readable and bug-free code.
      </div>
    </div>
  );
};

export default IfStatement;
