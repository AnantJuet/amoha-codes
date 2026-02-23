import React from "react";

const IfElseStatement: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ If-Else and Else-If Statements
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        The <code className="bg-gray-200 px-1 rounded">if-else</code> statement provides an
        alternative path when the condition is false. The{" "}
        <code className="bg-gray-200 px-1 rounded">else-if</code> ladder allows you to check
        multiple conditions in sequence.
      </p>

      {/* If-Else Syntax */}
      <h2 className="text-2xl font-bold mt-6">If-Else Statement</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}`}
      </pre>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold mt-6">Basic If-Else Example</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int age = 15;

    if (age >= 18) {
        cout << "You are an adult." << endl;
    } else {
        cout << "You are a minor." << endl;
    }

    // Check if number is positive or negative
    int num = -5;

    if (num >= 0) {
        cout << num << " is positive or zero." << endl;
    } else {
        cout << num << " is negative." << endl;
    }

    return 0;
}

// Output:
// You are a minor.
// -5 is negative.`}
      </pre>

      {/* Else-If Ladder */}
      <h2 className="text-2xl font-bold mt-6">Else-If Ladder</h2>
      <p className="leading-relaxed">
        When you have multiple conditions to check, use the else-if ladder.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else if (condition3) {
    // code if condition3 is true
} else {
    // code if all conditions are false
}`}
      </pre>

      {/* Grade Calculator Example */}
      <h2 className="text-2xl font-bold mt-6">Example: Grade Calculator</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int score;

    cout << "Enter your score (0-100): ";
    cin >> score;

    if (score >= 90) {
        cout << "Grade: A - Excellent!" << endl;
    } else if (score >= 80) {
        cout << "Grade: B - Very Good!" << endl;
    } else if (score >= 70) {
        cout << "Grade: C - Good" << endl;
    } else if (score >= 60) {
        cout << "Grade: D - Pass" << endl;
    } else {
        cout << "Grade: F - Fail" << endl;
    }

    return 0;
}`}
      </pre>

      {/* Number Classification */}
      <h2 className="text-2xl font-bold mt-6">Example: Number Classification</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int num;

    cout << "Enter a number: ";
    cin >> num;

    if (num > 0) {
        cout << num << " is a positive number." << endl;
    } else if (num < 0) {
        cout << num << " is a negative number." << endl;
    } else {
        cout << "The number is zero." << endl;
    }

    return 0;
}`}
      </pre>

      {/* Even/Odd Check */}
      <h2 className="text-2xl font-bold mt-6">Example: Even or Odd</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int num;

    cout << "Enter an integer: ";
    cin >> num;

    if (num % 2 == 0) {
        cout << num << " is even." << endl;
    } else {
        cout << num << " is odd." << endl;
    }

    return 0;
}`}
      </pre>

      {/* Nested If-Else */}
      <h2 className="text-2xl font-bold mt-6">Nested If-Else</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int num;

    cout << "Enter a number: ";
    cin >> num;

    if (num != 0) {
        if (num > 0) {
            if (num % 2 == 0) {
                cout << num << " is positive and even." << endl;
            } else {
                cout << num << " is positive and odd." << endl;
            }
        } else {
            if (num % 2 == 0) {
                cout << num << " is negative and even." << endl;
            } else {
                cout << num << " is negative and odd." << endl;
            }
        }
    } else {
        cout << "The number is zero." << endl;
    }

    return 0;
}`}
      </pre>

      {/* Largest of Three */}
      <h2 className="text-2xl font-bold mt-6">Example: Largest of Three Numbers</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int a, b, c;

    cout << "Enter three numbers: ";
    cin >> a >> b >> c;

    if (a >= b && a >= c) {
        cout << a << " is the largest." << endl;
    } else if (b >= a && b >= c) {
        cout << b << " is the largest." << endl;
    } else {
        cout << c << " is the largest." << endl;
    }

    return 0;
}`}
      </pre>

      {/* Leap Year Check */}
      <h2 className="text-2xl font-bold mt-6">Example: Leap Year Checker</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int year;

    cout << "Enter a year: ";
    cin >> year;

    // A year is a leap year if:
    // - Divisible by 400, OR
    // - Divisible by 4 but NOT by 100

    if (year % 400 == 0) {
        cout << year << " is a leap year." << endl;
    } else if (year % 100 == 0) {
        cout << year << " is not a leap year." << endl;
    } else if (year % 4 == 0) {
        cout << year << " is a leap year." << endl;
    } else {
        cout << year << " is not a leap year." << endl;
    }

    // Alternative concise version:
    // if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    //     cout << year << " is a leap year." << endl;
    // } else {
    //     cout << year << " is not a leap year." << endl;
    // }

    return 0;
}`}
      </pre>

      {/* Calculator Example */}
      <h2 className="text-2xl font-bold mt-6">Example: Simple Calculator</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    double num1, num2, result;
    char operation;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter operator (+, -, *, /): ";
    cin >> operation;

    cout << "Enter second number: ";
    cin >> num2;

    if (operation == '+') {
        result = num1 + num2;
        cout << num1 << " + " << num2 << " = " << result << endl;
    } else if (operation == '-') {
        result = num1 - num2;
        cout << num1 << " - " << num2 << " = " << result << endl;
    } else if (operation == '*') {
        result = num1 * num2;
        cout << num1 << " * " << num2 << " = " << result << endl;
    } else if (operation == '/') {
        if (num2 != 0) {
            result = num1 / num2;
            cout << num1 << " / " << num2 << " = " << result << endl;
        } else {
            cout << "Error: Division by zero!" << endl;
        }
    } else {
        cout << "Invalid operator!" << endl;
    }

    return 0;
}`}
      </pre>

      {/* Character Classification */}
      <h2 className="text-2xl font-bold mt-6">Example: Character Classification</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    char ch;

    cout << "Enter a character: ";
    cin >> ch;

    if (ch >= 'A' && ch <= 'Z') {
        cout << ch << " is an uppercase letter." << endl;
    } else if (ch >= 'a' && ch <= 'z') {
        cout << ch << " is a lowercase letter." << endl;
    } else if (ch >= '0' && ch <= '9') {
        cout << ch << " is a digit." << endl;
    } else {
        cout << ch << " is a special character." << endl;
    }

    // Check vowel or consonant (if it's a letter)
    if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
        char lower = (ch >= 'A' && ch <= 'Z') ? (ch + 32) : ch;

        if (lower == 'a' || lower == 'e' || lower == 'i' ||
            lower == 'o' || lower == 'u') {
            cout << ch << " is a vowel." << endl;
        } else {
            cout << ch << " is a consonant." << endl;
        }
    }

    return 0;
}`}
      </pre>

      {/* Ternary Operator */}
      <h2 className="text-2xl font-bold mt-6">Ternary Operator as Alternative</h2>
      <p className="leading-relaxed">
        For simple if-else statements, you can use the ternary operator.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int num = 15;

    // Using if-else
    string result1;
    if (num % 2 == 0) {
        result1 = "even";
    } else {
        result1 = "odd";
    }

    // Using ternary operator (more concise)
    string result2 = (num % 2 == 0) ? "even" : "odd";

    cout << num << " is " << result1 << endl;
    cout << num << " is " << result2 << endl;

    // Finding maximum using ternary
    int a = 10, b = 20;
    int max = (a > b) ? a : b;
    cout << "Maximum: " << max << endl;

    // Nested ternary for three numbers
    int c = 15;
    int largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    cout << "Largest of three: " << largest << endl;

    return 0;
}`}
      </pre>

      {/* Flowchart Description */}
      <h2 className="text-2xl font-bold mt-6">Execution Flow</h2>
      <div className="bg-gray-50 p-4 rounded-lg mt-4">
        <p className="font-semibold mb-2">If-Else Flow:</p>
        <pre className="font-mono text-sm">
{`        [Start]
           |
    [Check Condition]
       /        \\
     True      False
     /            \\
[Execute IF]  [Execute ELSE]
     \\            /
      [Continue]
           |
         [End]`}
        </pre>
      </div>

      {/* Common Mistakes */}
      <h2 className="text-2xl font-bold mt-6">Common Mistakes</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// MISTAKE 1: Dangling else
if (x > 0)
    if (x > 100)
        cout << "x > 100";
else                      // This else belongs to inner if!
    cout << "x <= 0";     // Actually means x > 0 && x <= 100

// FIX: Use braces
if (x > 0) {
    if (x > 100)
        cout << "x > 100";
}
else {
    cout << "x <= 0";
}

// MISTAKE 2: Redundant else-if
if (score >= 90) {
    grade = 'A';
} else if (score >= 80 && score < 90) {  // score < 90 is redundant!
    grade = 'B';
}

// FIX: Remove redundant condition
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {  // Already know score < 90
    grade = 'B';
}`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Always use braces to avoid dangling else problems</li>
          <li>Order conditions from most specific to least specific</li>
          <li>Always include a final else for unexpected cases</li>
          <li>Use ternary operator only for simple conditions</li>
          <li>Avoid deeply nested if-else (use switch or early returns)</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> The if-else statement provides two-way branching, while the
        else-if ladder handles multiple conditions. Use these constructs to implement decision
        logic in your programs. Keep conditions simple and use braces for clarity.
      </div>
    </div>
  );
};

export default IfElseStatement;
