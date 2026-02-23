import React from "react";

const SwitchStatement: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Switch Statement
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        The <code className="bg-gray-200 px-1 rounded">switch</code> statement is used to select
        one of many code blocks to execute based on the value of a variable or expression. It
        provides a cleaner alternative to multiple if-else-if statements when comparing a variable
        against multiple constant values.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold mt-6">Syntax</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`switch (expression) {
    case value1:
        // code block 1
        break;
    case value2:
        // code block 2
        break;
    case value3:
        // code block 3
        break;
    default:
        // code if no case matches
}`}
      </pre>

      {/* How It Works */}
      <h2 className="text-2xl font-bold mt-6">How It Works</h2>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li>The switch expression is evaluated once</li>
        <li>The value is compared with each case value</li>
        <li>If a match is found, the associated code block executes</li>
        <li>The <code className="bg-gray-200 px-1 rounded">break</code> statement exits the switch</li>
        <li>If no match is found, the <code className="bg-gray-200 px-1 rounded">default</code> block executes (if present)</li>
      </ol>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold mt-6">Basic Example</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int day = 3;

    switch (day) {
        case 1:
            cout << "Monday" << endl;
            break;
        case 2:
            cout << "Tuesday" << endl;
            break;
        case 3:
            cout << "Wednesday" << endl;
            break;
        case 4:
            cout << "Thursday" << endl;
            break;
        case 5:
            cout << "Friday" << endl;
            break;
        case 6:
            cout << "Saturday" << endl;
            break;
        case 7:
            cout << "Sunday" << endl;
            break;
        default:
            cout << "Invalid day number" << endl;
    }

    return 0;
}

// Output: Wednesday`}
      </pre>

      {/* Importance of break */}
      <h2 className="text-2xl font-bold mt-6">The Importance of break</h2>
      <p className="leading-relaxed">
        Without <code className="bg-gray-200 px-1 rounded">break</code>, execution "falls through"
        to the next case.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int num = 2;

    cout << "Without break (fall-through):" << endl;
    switch (num) {
        case 1:
            cout << "One" << endl;
        case 2:
            cout << "Two" << endl;     // Executes
        case 3:
            cout << "Three" << endl;   // Also executes!
        case 4:
            cout << "Four" << endl;    // Also executes!
        default:
            cout << "Default" << endl; // Also executes!
    }

    cout << "\\nWith break:" << endl;
    switch (num) {
        case 1:
            cout << "One" << endl;
            break;
        case 2:
            cout << "Two" << endl;
            break;  // Only "Two" prints
        case 3:
            cout << "Three" << endl;
            break;
        default:
            cout << "Default" << endl;
    }

    return 0;
}`}
      </pre>

      {/* Intentional Fall-Through */}
      <h2 className="text-2xl font-bold mt-6">Intentional Fall-Through</h2>
      <p className="leading-relaxed">
        Fall-through can be useful when multiple cases should execute the same code.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int month = 2;

    // Days in a month (non-leap year)
    switch (month) {
        case 1: case 3: case 5: case 7:
        case 8: case 10: case 12:
            cout << "31 days" << endl;
            break;
        case 4: case 6: case 9: case 11:
            cout << "30 days" << endl;
            break;
        case 2:
            cout << "28 or 29 days" << endl;
            break;
        default:
            cout << "Invalid month" << endl;
    }

    // Categorize characters
    char ch = 'e';

    switch (ch) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
        case 'A': case 'E': case 'I': case 'O': case 'U':
            cout << ch << " is a vowel" << endl;
            break;
        default:
            if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                cout << ch << " is a consonant" << endl;
            } else {
                cout << ch << " is not a letter" << endl;
            }
    }

    return 0;
}`}
      </pre>

      {/* Switch with char */}
      <h2 className="text-2xl font-bold mt-6">Switch with Characters</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    char grade;

    cout << "Enter your grade (A-F): ";
    cin >> grade;

    switch (grade) {
        case 'A':
        case 'a':
            cout << "Excellent! Score: 90-100%" << endl;
            break;
        case 'B':
        case 'b':
            cout << "Very Good! Score: 80-89%" << endl;
            break;
        case 'C':
        case 'c':
            cout << "Good! Score: 70-79%" << endl;
            break;
        case 'D':
        case 'd':
            cout << "Pass. Score: 60-69%" << endl;
            break;
        case 'F':
        case 'f':
            cout << "Fail. Score: Below 60%" << endl;
            break;
        default:
            cout << "Invalid grade entered." << endl;
    }

    return 0;
}`}
      </pre>

      {/* Calculator Example */}
      <h2 className="text-2xl font-bold mt-6">Example: Simple Calculator</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    double num1, num2;
    char operation;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter operation (+, -, *, /): ";
    cin >> operation;

    cout << "Enter second number: ";
    cin >> num2;

    switch (operation) {
        case '+':
            cout << num1 << " + " << num2 << " = " << (num1 + num2) << endl;
            break;

        case '-':
            cout << num1 << " - " << num2 << " = " << (num1 - num2) << endl;
            break;

        case '*':
            cout << num1 << " * " << num2 << " = " << (num1 * num2) << endl;
            break;

        case '/':
            if (num2 != 0) {
                cout << num1 << " / " << num2 << " = " << (num1 / num2) << endl;
            } else {
                cout << "Error: Division by zero!" << endl;
            }
            break;

        default:
            cout << "Invalid operation!" << endl;
    }

    return 0;
}`}
      </pre>

      {/* Menu Example */}
      <h2 className="text-2xl font-bold mt-6">Example: Menu-Driven Program</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int choice;

    cout << "===== Main Menu =====" << endl;
    cout << "1. Start New Game" << endl;
    cout << "2. Load Game" << endl;
    cout << "3. Settings" << endl;
    cout << "4. Help" << endl;
    cout << "5. Exit" << endl;
    cout << "=====================" << endl;
    cout << "Enter your choice: ";
    cin >> choice;

    switch (choice) {
        case 1:
            cout << "\\nStarting new game..." << endl;
            cout << "Loading game assets..." << endl;
            break;

        case 2:
            cout << "\\nLoading saved game..." << endl;
            cout << "Select a save file:" << endl;
            break;

        case 3:
            cout << "\\nOpening settings..." << endl;
            cout << "- Sound: ON" << endl;
            cout << "- Graphics: High" << endl;
            break;

        case 4:
            cout << "\\n===== Help =====" << endl;
            cout << "Use arrow keys to move" << endl;
            cout << "Press SPACE to jump" << endl;
            break;

        case 5:
            cout << "\\nExiting game. Goodbye!" << endl;
            break;

        default:
            cout << "\\nInvalid choice. Please try again." << endl;
    }

    return 0;
}`}
      </pre>

      {/* Switch vs If-Else */}
      <h2 className="text-2xl font-bold mt-6">Switch vs If-Else</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Feature</th>
              <th className="text-left px-4 py-2 border">Switch</th>
              <th className="text-left px-4 py-2 border">If-Else</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Use Case</td>
              <td className="px-4 py-2 border">Single variable, multiple constant values</td>
              <td className="px-4 py-2 border">Complex conditions, ranges</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Data Types</td>
              <td className="px-4 py-2 border">int, char, enum (integral types)</td>
              <td className="px-4 py-2 border">Any data type</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Range Check</td>
              <td className="px-4 py-2 border">Not directly supported</td>
              <td className="px-4 py-2 border">Supported (x &gt; 5 && x &lt; 10)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Readability</td>
              <td className="px-4 py-2 border">Better for many discrete values</td>
              <td className="px-4 py-2 border">Better for conditions</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Performance</td>
              <td className="px-4 py-2 border">Can be optimized with jump tables</td>
              <td className="px-4 py-2 border">Sequential evaluation</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Limitations */}
      <h2 className="text-2xl font-bold mt-6">Switch Statement Limitations</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// LIMITATION 1: Only works with integral types (int, char, enum)
// Cannot use with strings, float, or double

// This won't work:
// string name = "John";
// switch (name) {  // ERROR: string not allowed
//     case "John": ...
// }

// LIMITATION 2: Case labels must be constant expressions
int x = 5;
// switch (num) {
//     case x:     // ERROR: 'x' is not a constant
//         ...
// }

// CORRECT: Use const or constexpr
const int VALUE = 5;
// switch (num) {
//     case VALUE: // OK - VALUE is constant
//         ...
// }

// LIMITATION 3: Cannot check ranges directly
// switch (score) {
//     case 90-100:  // ERROR: This doesn't mean "90 to 100"
//         ...
// }

// Use if-else for ranges:
// if (score >= 90 && score <= 100) { ... }`}
      </pre>

      {/* C++17 Features */}
      <h2 className="text-2xl font-bold mt-6">C++17: Init Statement in Switch</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // C++17: Initialize variable in switch statement
    switch (int day = 4; day) {
        case 1: case 2: case 3: case 4: case 5:
            cout << "Weekday" << endl;
            break;
        case 6: case 7:
            cout << "Weekend" << endl;
            break;
        default:
            cout << "Invalid day" << endl;
    }
    // 'day' is only in scope within the switch

    return 0;
}`}
      </pre>

      {/* Enum with Switch */}
      <h2 className="text-2xl font-bold mt-6">Using Enum with Switch</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

enum Color { RED, GREEN, BLUE, YELLOW };

int main() {
    Color myColor = GREEN;

    switch (myColor) {
        case RED:
            cout << "Color is Red (stop)" << endl;
            break;
        case GREEN:
            cout << "Color is Green (go)" << endl;
            break;
        case BLUE:
            cout << "Color is Blue (water)" << endl;
            break;
        case YELLOW:
            cout << "Color is Yellow (caution)" << endl;
            break;
    }

    // Enum class (C++11) - more type-safe
    enum class Direction { NORTH, SOUTH, EAST, WEST };
    Direction dir = Direction::NORTH;

    switch (dir) {
        case Direction::NORTH:
            cout << "Heading North" << endl;
            break;
        case Direction::SOUTH:
            cout << "Heading South" << endl;
            break;
        case Direction::EAST:
            cout << "Heading East" << endl;
            break;
        case Direction::WEST:
            cout << "Heading West" << endl;
            break;
    }

    return 0;
}`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Always include a <code className="bg-gray-200 px-1 rounded">default</code> case</li>
          <li>Don't forget the <code className="bg-gray-200 px-1 rounded">break</code> statement</li>
          <li>Comment intentional fall-through cases</li>
          <li>Use switch for discrete values, if-else for ranges</li>
          <li>Consider using enums for better code readability</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> The switch statement provides an efficient way to select among
        multiple code blocks based on a single variable's value. It works with integral types
        (int, char, enum) and requires constant case labels. Always use break to prevent
        fall-through unless intentionally needed.
      </div>
    </div>
  );
};

export default SwitchStatement;
