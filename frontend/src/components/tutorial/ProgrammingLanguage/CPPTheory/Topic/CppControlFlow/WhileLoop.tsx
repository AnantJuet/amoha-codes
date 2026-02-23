import React from "react";

const WhileLoop: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ While Loop
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        The <code className="bg-gray-200 px-1 rounded">while</code> loop executes a block of code
        as long as a specified condition is true. It's ideal when you don't know in advance how
        many times the loop should run.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold mt-6">Syntax</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`while (condition) {
    // code to be executed
}`}
      </pre>

      {/* How It Works */}
      <h2 className="text-2xl font-bold mt-6">How It Works</h2>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li>The condition is evaluated</li>
        <li>If true, the code block executes</li>
        <li>The condition is checked again</li>
        <li>Steps 2-3 repeat until the condition becomes false</li>
        <li>When false, the loop exits and execution continues after the loop</li>
      </ol>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold mt-6">Basic Example</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int i = 1;

    while (i <= 5) {
        cout << i << " ";
        i++;
    }
    cout << endl;

    // Output: 1 2 3 4 5

    return 0;
}`}
      </pre>

      {/* Execution Flow */}
      <h2 className="text-2xl font-bold mt-6">Execution Flow</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`int i = 1;
while (i <= 3) {
    cout << i << endl;
    i++;
}

// Step-by-step:
// 1. i = 1
// 2. Check: i <= 3? (1 <= 3) TRUE -> print 1, i becomes 2
// 3. Check: i <= 3? (2 <= 3) TRUE -> print 2, i becomes 3
// 4. Check: i <= 3? (3 <= 3) TRUE -> print 3, i becomes 4
// 5. Check: i <= 3? (4 <= 3) FALSE -> Exit loop`}
      </pre>

      {/* Various Examples */}
      <h2 className="text-2xl font-bold mt-6">More Examples</h2>

      <h3 className="text-xl font-semibold mt-4">Countdown</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int count = 10;

    while (count > 0) {
        cout << count << " ";
        count--;
    }
    cout << "Blast off!" << endl;

    // Output: 10 9 8 7 6 5 4 3 2 1 Blast off!

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Sum Until Limit</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int sum = 0;
    int num = 1;

    // Sum numbers until sum exceeds 100
    while (sum <= 100) {
        sum += num;
        num++;
    }

    cout << "Sum exceeded 100 at: " << sum << endl;
    cout << "Last number added: " << (num - 1) << endl;

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">User Input Validation</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int number;

    cout << "Enter a positive number: ";
    cin >> number;

    // Keep asking until valid input
    while (number <= 0) {
        cout << "Invalid! Please enter a positive number: ";
        cin >> number;
    }

    cout << "You entered: " << number << endl;

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Menu System</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int choice = 0;

    while (choice != 4) {
        cout << "\\n===== Menu =====" << endl;
        cout << "1. Option One" << endl;
        cout << "2. Option Two" << endl;
        cout << "3. Option Three" << endl;
        cout << "4. Exit" << endl;
        cout << "Enter choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "You selected Option One" << endl;
                break;
            case 2:
                cout << "You selected Option Two" << endl;
                break;
            case 3:
                cout << "You selected Option Three" << endl;
                break;
            case 4:
                cout << "Goodbye!" << endl;
                break;
            default:
                cout << "Invalid choice. Try again." << endl;
        }
    }

    return 0;
}`}
      </pre>

      {/* Digit Operations */}
      <h2 className="text-2xl font-bold mt-6">Working with Digits</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int num = 12345;
    int original = num;

    // Count digits
    int count = 0;
    int temp = num;
    while (temp > 0) {
        count++;
        temp /= 10;
    }
    cout << "Number of digits in " << num << ": " << count << endl;

    // Sum of digits
    int sum = 0;
    temp = num;
    while (temp > 0) {
        sum += temp % 10;  // Get last digit
        temp /= 10;        // Remove last digit
    }
    cout << "Sum of digits: " << sum << endl;

    // Reverse a number
    int reversed = 0;
    temp = num;
    while (temp > 0) {
        reversed = reversed * 10 + temp % 10;
        temp /= 10;
    }
    cout << "Reversed: " << reversed << endl;

    return 0;
}`}
      </pre>

      {/* GCD Example */}
      <h2 className="text-2xl font-bold mt-6">Example: Finding GCD (Euclidean Algorithm)</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int a = 48, b = 18;
    int originalA = a, originalB = b;

    // Euclidean algorithm
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }

    cout << "GCD of " << originalA << " and " << originalB
         << " is " << a << endl;

    // Output: GCD of 48 and 18 is 6

    return 0;
}`}
      </pre>

      {/* Password Checker */}
      <h2 className="text-2xl font-bold mt-6">Example: Password Checker with Attempts</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

int main() {
    const string correctPassword = "secret123";
    string userPassword;
    int attempts = 0;
    const int maxAttempts = 3;

    cout << "=== Login System ===" << endl;

    while (attempts < maxAttempts) {
        cout << "Enter password (" << (maxAttempts - attempts)
             << " attempts remaining): ";
        cin >> userPassword;

        if (userPassword == correctPassword) {
            cout << "Access granted! Welcome!" << endl;
            break;
        }

        attempts++;
        if (attempts < maxAttempts) {
            cout << "Incorrect password. Try again." << endl;
        }
    }

    if (attempts == maxAttempts) {
        cout << "Account locked! Too many failed attempts." << endl;
    }

    return 0;
}`}
      </pre>

      {/* Reading Until Sentinel */}
      <h2 className="text-2xl font-bold mt-6">Reading Input Until Sentinel Value</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int number;
    int sum = 0;
    int count = 0;

    cout << "Enter numbers (enter -1 to stop):" << endl;

    cin >> number;
    while (number != -1) {
        sum += number;
        count++;
        cin >> number;
    }

    if (count > 0) {
        cout << "Sum: " << sum << endl;
        cout << "Average: " << (double)sum / count << endl;
    } else {
        cout << "No numbers entered." << endl;
    }

    return 0;
}`}
      </pre>

      {/* Prime Number Check */}
      <h2 className="text-2xl font-bold mt-6">Example: Check Prime Number</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;

    bool isPrime = true;
    int divisor = 2;

    if (num <= 1) {
        isPrime = false;
    } else {
        while (divisor * divisor <= num && isPrime) {
            if (num % divisor == 0) {
                isPrime = false;
            }
            divisor++;
        }
    }

    if (isPrime) {
        cout << num << " is a prime number." << endl;
    } else {
        cout << num << " is not a prime number." << endl;
    }

    return 0;
}`}
      </pre>

      {/* Infinite While Loop */}
      <h2 className="text-2xl font-bold mt-6">Infinite While Loop</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // while (true) {
    //     cout << "This runs forever!" << endl;
    // }

    // Controlled infinite loop
    int counter = 0;
    while (true) {
        cout << "Counter: " << counter << endl;
        counter++;

        if (counter >= 5) {
            cout << "Breaking out of loop!" << endl;
            break;
        }
    }

    return 0;
}`}
      </pre>

      {/* While vs For */}
      <h2 className="text-2xl font-bold mt-6">While vs For Loop</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Feature</th>
              <th className="text-left px-4 py-2 border">While Loop</th>
              <th className="text-left px-4 py-2 border">For Loop</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Best For</td>
              <td className="px-4 py-2 border">Unknown number of iterations</td>
              <td className="px-4 py-2 border">Known number of iterations</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Initialization</td>
              <td className="px-4 py-2 border">Before the loop</td>
              <td className="px-4 py-2 border">In loop header</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Update</td>
              <td className="px-4 py-2 border">Inside loop body</td>
              <td className="px-4 py-2 border">In loop header</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Use Case</td>
              <td className="px-4 py-2 border">Input validation, event-driven</td>
              <td className="px-4 py-2 border">Counting, array iteration</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Common Mistakes */}
      <h2 className="text-2xl font-bold mt-6">Common Mistakes</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// MISTAKE 1: Forgetting to update the loop variable
int i = 0;
// while (i < 5) {
//     cout << i << endl;
//     // Missing i++; - infinite loop!
// }

// MISTAKE 2: Condition never becomes false
int x = 1;
// while (x > 0) {  // Always true for positive x
//     x++;
// }

// MISTAKE 3: Off-by-one error
int count = 1;
while (count < 5) {  // Prints 1, 2, 3, 4 (not 5)
    cout << count << " ";
    count++;
}

// MISTAKE 4: Semicolon after while
// while (condition);  // Empty loop body - dangerous!
// {
//     // This always executes, not part of loop
// }`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Always ensure the loop condition will eventually become false</li>
          <li>Update loop variables inside the loop body</li>
          <li>Use meaningful condition expressions</li>
          <li>Consider using <code className="bg-gray-200 px-1 rounded">break</code> for complex exit conditions</li>
          <li>Prefer <code className="bg-gray-200 px-1 rounded">for</code> loop when you know the number of iterations</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> The while loop is ideal when you don't know the number of
        iterations in advance. The condition is checked before each iteration, so if the condition
        is initially false, the loop body never executes. Always ensure your loop has a way to
        terminate to avoid infinite loops.
      </div>
    </div>
  );
};

export default WhileLoop;
