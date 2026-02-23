import React from "react";

const DoWhileLoop: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Do-While Loop
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        The <code className="bg-gray-200 px-1 rounded">do-while</code> loop is similar to the
        while loop, but it guarantees that the code block executes at least once before the
        condition is checked. This makes it ideal for situations where you need to run code
        before validating.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold mt-6">Syntax</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`do {
    // code to be executed
} while (condition);  // Note: semicolon is required!`}
      </pre>

      {/* Key Difference */}
      <h2 className="text-2xl font-bold mt-6">Key Difference from While Loop</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">While Loop</th>
              <th className="text-left px-4 py-2 border">Do-While Loop</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Entry-controlled loop</td>
              <td className="px-4 py-2 border">Exit-controlled loop</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Condition checked first</td>
              <td className="px-4 py-2 border">Code executed first</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">May not execute at all</td>
              <td className="px-4 py-2 border">Executes at least once</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Comparison Example */}
      <h2 className="text-2xl font-bold mt-6">Comparison Example</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int x = 10;

    // While loop - condition checked first
    cout << "While loop output:" << endl;
    while (x < 5) {
        cout << x << endl;  // Never executes!
        x++;
    }
    cout << "(Nothing printed)\\n" << endl;

    // Do-while loop - code executes first
    x = 10;
    cout << "Do-while loop output:" << endl;
    do {
        cout << x << endl;  // Executes once!
        x++;
    } while (x < 5);
    cout << "(Printed once)" << endl;

    return 0;
}

/*
Output:
While loop output:
(Nothing printed)

Do-while loop output:
10
(Printed once)
*/`}
      </pre>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold mt-6">Basic Example</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int i = 1;

    do {
        cout << i << " ";
        i++;
    } while (i <= 5);

    cout << endl;

    // Output: 1 2 3 4 5

    return 0;
}`}
      </pre>

      {/* Menu System */}
      <h2 className="text-2xl font-bold mt-6">Example: Menu-Driven Program</h2>
      <p className="leading-relaxed">
        Do-while is perfect for menus because you always want to display the menu at least once.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int choice;

    do {
        cout << "\\n===== Calculator Menu =====" << endl;
        cout << "1. Add" << endl;
        cout << "2. Subtract" << endl;
        cout << "3. Multiply" << endl;
        cout << "4. Divide" << endl;
        cout << "5. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        double a, b;

        if (choice >= 1 && choice <= 4) {
            cout << "Enter two numbers: ";
            cin >> a >> b;
        }

        switch (choice) {
            case 1:
                cout << "Result: " << a + b << endl;
                break;
            case 2:
                cout << "Result: " << a - b << endl;
                break;
            case 3:
                cout << "Result: " << a * b << endl;
                break;
            case 4:
                if (b != 0) {
                    cout << "Result: " << a / b << endl;
                } else {
                    cout << "Error: Division by zero!" << endl;
                }
                break;
            case 5:
                cout << "Goodbye!" << endl;
                break;
            default:
                cout << "Invalid choice!" << endl;
        }
    } while (choice != 5);

    return 0;
}`}
      </pre>

      {/* Input Validation */}
      <h2 className="text-2xl font-bold mt-6">Example: Input Validation</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int age;

    // Get valid age (1-120)
    do {
        cout << "Enter your age (1-120): ";
        cin >> age;

        if (age < 1 || age > 120) {
            cout << "Invalid age! Please try again." << endl;
        }
    } while (age < 1 || age > 120);

    cout << "Your age is: " << age << endl;

    // Get valid grade
    char grade;
    do {
        cout << "Enter grade (A-F): ";
        cin >> grade;
        grade = toupper(grade);

        if (grade < 'A' || grade > 'F') {
            cout << "Invalid grade! Enter A, B, C, D, or F." << endl;
        }
    } while (grade < 'A' || grade > 'F');

    cout << "Your grade is: " << grade << endl;

    return 0;
}`}
      </pre>

      {/* Guessing Game */}
      <h2 className="text-2xl font-bold mt-6">Example: Number Guessing Game</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    srand(time(0));  // Seed random number generator

    int secretNumber = rand() % 100 + 1;  // 1 to 100
    int guess;
    int attempts = 0;

    cout << "=== Number Guessing Game ===" << endl;
    cout << "I'm thinking of a number between 1 and 100." << endl;

    do {
        cout << "\\nEnter your guess: ";
        cin >> guess;
        attempts++;

        if (guess < secretNumber) {
            cout << "Too low! Try higher." << endl;
        } else if (guess > secretNumber) {
            cout << "Too high! Try lower." << endl;
        } else {
            cout << "Congratulations! You guessed it!" << endl;
            cout << "It took you " << attempts << " attempts." << endl;
        }
    } while (guess != secretNumber);

    return 0;
}`}
      </pre>

      {/* Sum of Digits */}
      <h2 className="text-2xl font-bold mt-6">Example: Sum of Digits</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int num, sum = 0;

    cout << "Enter a positive integer: ";
    cin >> num;

    int temp = num;

    do {
        int digit = temp % 10;  // Get last digit
        sum += digit;
        temp /= 10;             // Remove last digit
    } while (temp > 0);

    cout << "Sum of digits of " << num << " is " << sum << endl;

    // Works even for num = 0 (sum = 0)

    return 0;
}`}
      </pre>

      {/* Continue/Retry Pattern */}
      <h2 className="text-2xl font-bold mt-6">Continue/Retry Pattern</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    char playAgain;

    do {
        // Game logic here
        int num1 = rand() % 10 + 1;
        int num2 = rand() % 10 + 1;
        int answer;

        cout << "\\n=== Math Quiz ===" << endl;
        cout << "What is " << num1 << " + " << num2 << "? ";
        cin >> answer;

        if (answer == num1 + num2) {
            cout << "Correct!" << endl;
        } else {
            cout << "Wrong! The answer is " << (num1 + num2) << endl;
        }

        cout << "\\nPlay again? (y/n): ";
        cin >> playAgain;

    } while (playAgain == 'y' || playAgain == 'Y');

    cout << "Thanks for playing!" << endl;

    return 0;
}`}
      </pre>

      {/* Password Validation */}
      <h2 className="text-2xl font-bold mt-6">Example: Password with Requirements</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
#include <cctype>
using namespace std;

bool isValidPassword(const string& password) {
    if (password.length() < 8) return false;

    bool hasUpper = false, hasLower = false;
    bool hasDigit = false, hasSpecial = false;

    for (char c : password) {
        if (isupper(c)) hasUpper = true;
        else if (islower(c)) hasLower = true;
        else if (isdigit(c)) hasDigit = true;
        else hasSpecial = true;
    }

    return hasUpper && hasLower && hasDigit && hasSpecial;
}

int main() {
    string password;

    do {
        cout << "Create a password:" << endl;
        cout << "  - At least 8 characters" << endl;
        cout << "  - Uppercase, lowercase, digit, special char" << endl;
        cout << "Password: ";
        cin >> password;

        if (!isValidPassword(password)) {
            cout << "\\nPassword doesn't meet requirements!\\n" << endl;
        }
    } while (!isValidPassword(password));

    cout << "Password accepted!" << endl;

    return 0;
}`}
      </pre>

      {/* Nested Do-While */}
      <h2 className="text-2xl font-bold mt-6">Nested Do-While Loops</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int rows = 5;
    int i = 1;

    // Print a triangle pattern
    do {
        int j = 1;
        do {
            cout << "* ";
            j++;
        } while (j <= i);
        cout << endl;
        i++;
    } while (i <= rows);

    /*
    Output:
    *
    * *
    * * *
    * * * *
    * * * * *
    */

    return 0;
}`}
      </pre>

      {/* Common Use Cases */}
      <h2 className="text-2xl font-bold mt-6">When to Use Do-While</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Menu systems:</strong> Display menu at least once</li>
        <li><strong>Input validation:</strong> Get input before validating</li>
        <li><strong>Games:</strong> Play at least one round</li>
        <li><strong>Retry operations:</strong> Try at least once, then optionally repeat</li>
        <li><strong>Processing:</strong> Process data at least once (like digits of a number)</li>
      </ul>

      {/* Common Mistakes */}
      <h2 className="text-2xl font-bold mt-6">Common Mistakes</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// MISTAKE 1: Forgetting the semicolon
// do {
//     // code
// } while (condition)   // Missing semicolon - ERROR!

// MISTAKE 2: Wrong condition logic
// do {
//     // code
// } while (input == validInput);  // Should be != for validation

// MISTAKE 3: Not updating loop variable
int x = 0;
// do {
//     cout << x << endl;
//     // Forgot x++; - infinite loop!
// } while (x < 5);

// MISTAKE 4: Using when while would be better
// If you don't need guaranteed first execution, use while loop`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Use do-while when you need at least one execution</li>
          <li>Don't forget the semicolon after <code className="bg-gray-200 px-1 rounded">while(condition);</code></li>
          <li>Perfect for input validation and menu-driven programs</li>
          <li>If unsure, use while loop (safer default)</li>
          <li>Keep the condition simple and readable</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> The do-while loop guarantees at least one execution of the loop
        body before checking the condition. It's ideal for menus, input validation, and any
        situation where you need to perform an action before deciding whether to repeat. Remember
        to always include the semicolon after the while condition.
      </div>
    </div>
  );
};

export default DoWhileLoop;
