import React from "react";

const BreakContinue: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Break and Continue Statements
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        The <code className="bg-gray-200 px-1 rounded">break</code> and{" "}
        <code className="bg-gray-200 px-1 rounded">continue</code> statements are used to alter
        the normal flow of loops. Break terminates the loop entirely, while continue skips the
        current iteration and moves to the next one.
      </p>

      {/* Break Statement */}
      <h2 className="text-2xl font-bold mt-6">Break Statement</h2>
      <p className="leading-relaxed">
        The <code className="bg-gray-200 px-1 rounded">break</code> statement immediately terminates
        the innermost loop or switch statement it is in.
      </p>

      <h3 className="text-xl font-semibold mt-4">Syntax:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`break;`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Break in For Loop:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Stop when we find 5
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            cout << "Found 5! Breaking..." << endl;
            break;  // Exit the loop
        }
        cout << i << " ";
    }
    cout << "\\nLoop ended." << endl;

    // Output:
    // 1 2 3 4 Found 5! Breaking...
    // Loop ended.

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Break in While Loop:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int sum = 0;
    int num;

    cout << "Enter numbers to sum (enter 0 to stop):" << endl;

    while (true) {  // Infinite loop
        cin >> num;

        if (num == 0) {
            break;  // Exit when user enters 0
        }

        sum += num;
    }

    cout << "Total sum: " << sum << endl;

    return 0;
}`}
      </pre>

      {/* Continue Statement */}
      <h2 className="text-2xl font-bold mt-6">Continue Statement</h2>
      <p className="leading-relaxed">
        The <code className="bg-gray-200 px-1 rounded">continue</code> statement skips the
        remaining code in the current iteration and jumps to the next iteration of the loop.
      </p>

      <h3 className="text-xl font-semibold mt-4">Syntax:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`continue;`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Continue in For Loop:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Print all numbers except 5
    cout << "Numbers (skipping 5): ";
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            continue;  // Skip 5
        }
        cout << i << " ";
    }
    cout << endl;

    // Output: Numbers (skipping 5): 1 2 3 4 6 7 8 9 10

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Continue in While Loop:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int i = 0;

    // Print only even numbers
    cout << "Even numbers: ";
    while (i < 10) {
        i++;
        if (i % 2 != 0) {
            continue;  // Skip odd numbers
        }
        cout << i << " ";
    }
    cout << endl;

    // Output: Even numbers: 2 4 6 8 10

    return 0;
}`}
      </pre>

      {/* Comparison Table */}
      <h2 className="text-2xl font-bold mt-6">Break vs Continue Comparison</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Feature</th>
              <th className="text-left px-4 py-2 border">break</th>
              <th className="text-left px-4 py-2 border">continue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Effect</td>
              <td className="px-4 py-2 border">Exits the entire loop</td>
              <td className="px-4 py-2 border">Skips current iteration</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">After execution</td>
              <td className="px-4 py-2 border">Code after loop executes</td>
              <td className="px-4 py-2 border">Next iteration begins</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Loop continues?</td>
              <td className="px-4 py-2 border">No</td>
              <td className="px-4 py-2 border">Yes</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Use in switch</td>
              <td className="px-4 py-2 border">Yes (exits switch)</td>
              <td className="px-4 py-2 border">No (not allowed)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Visual Comparison */}
      <h2 className="text-2xl font-bold mt-6">Visual Demonstration</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    cout << "=== BREAK Example ===" << endl;
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            cout << "Breaking at " << i << endl;
            break;
        }
        cout << "Iteration " << i << endl;
    }
    cout << "After break loop\\n" << endl;

    cout << "=== CONTINUE Example ===" << endl;
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            cout << "Skipping " << i << endl;
            continue;
        }
        cout << "Iteration " << i << endl;
    }
    cout << "After continue loop" << endl;

    return 0;
}

/*
Output:
=== BREAK Example ===
Iteration 1
Iteration 2
Breaking at 3
After break loop

=== CONTINUE Example ===
Iteration 1
Iteration 2
Skipping 3
Iteration 4
Iteration 5
After continue loop
*/`}
      </pre>

      {/* Practical Examples */}
      <h2 className="text-2xl font-bold mt-6">Practical Examples</h2>

      <h3 className="text-xl font-semibold mt-4">Example 1: Search for Element</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int size = sizeof(arr) / sizeof(arr[0]);
    int target = 30;
    bool found = false;

    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            cout << "Found " << target << " at index " << i << endl;
            found = true;
            break;  // No need to continue searching
        }
    }

    if (!found) {
        cout << target << " not found in array." << endl;
    }

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example 2: Skip Negative Numbers</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int numbers[] = {5, -3, 8, -1, 4, -7, 2};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    int sum = 0;

    cout << "Processing positive numbers only:" << endl;

    for (int i = 0; i < size; i++) {
        if (numbers[i] < 0) {
            cout << "Skipping negative: " << numbers[i] << endl;
            continue;
        }
        cout << "Adding: " << numbers[i] << endl;
        sum += numbers[i];
    }

    cout << "Sum of positive numbers: " << sum << endl;

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example 3: Find First Prime Number</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    int start = 100;

    // Find first prime after 100
    for (int num = start; ; num++) {  // No end condition
        if (isPrime(num)) {
            cout << "First prime after " << start << " is " << num << endl;
            break;  // Found it, exit loop
        }
    }

    return 0;
}

// Output: First prime after 100 is 101`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example 4: Input Validation with Retry</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <limits>
using namespace std;

int main() {
    int age;

    while (true) {
        cout << "Enter your age (1-120): ";

        if (!(cin >> age)) {
            cout << "Invalid input! Please enter a number." << endl;
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\\n');
            continue;  // Ask again
        }

        if (age < 1 || age > 120) {
            cout << "Age must be between 1 and 120." << endl;
            continue;  // Ask again
        }

        break;  // Valid input, exit loop
    }

    cout << "Your age is: " << age << endl;

    return 0;
}`}
      </pre>

      {/* Nested Loops */}
      <h2 className="text-2xl font-bold mt-6">Break and Continue in Nested Loops</h2>
      <p className="leading-relaxed">
        Break and continue only affect the innermost loop they are in.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Break only exits inner loop
    cout << "=== Break in nested loop ===" << endl;
    for (int i = 1; i <= 3; i++) {
        cout << "Outer: " << i << " - Inner: ";
        for (int j = 1; j <= 5; j++) {
            if (j == 3) {
                break;  // Only exits inner loop
            }
            cout << j << " ";
        }
        cout << endl;
    }

    cout << "\\n=== Continue in nested loop ===" << endl;
    for (int i = 1; i <= 3; i++) {
        cout << "Outer: " << i << " - Inner: ";
        for (int j = 1; j <= 5; j++) {
            if (j == 3) {
                continue;  // Only skips inner iteration
            }
            cout << j << " ";
        }
        cout << endl;
    }

    return 0;
}

/*
Output:
=== Break in nested loop ===
Outer: 1 - Inner: 1 2
Outer: 2 - Inner: 1 2
Outer: 3 - Inner: 1 2

=== Continue in nested loop ===
Outer: 1 - Inner: 1 2 4 5
Outer: 2 - Inner: 1 2 4 5
Outer: 3 - Inner: 1 2 4 5
*/`}
      </pre>

      {/* Breaking Outer Loop */}
      <h2 className="text-2xl font-bold mt-6">Breaking Out of Nested Loops</h2>
      <p className="leading-relaxed">
        To break out of multiple nested loops, use a flag variable or goto (sparingly).
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Method 1: Using a flag
    bool found = false;
    int targetRow, targetCol;

    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    int target = 5;

    for (int i = 0; i < 3 && !found; i++) {
        for (int j = 0; j < 3 && !found; j++) {
            if (matrix[i][j] == target) {
                targetRow = i;
                targetCol = j;
                found = true;  // Will cause both loops to exit
            }
        }
    }

    if (found) {
        cout << "Found " << target << " at position ("
             << targetRow << ", " << targetCol << ")" << endl;
    }

    // Method 2: Using goto (use sparingly!)
    // for (int i = 0; i < 3; i++) {
    //     for (int j = 0; j < 3; j++) {
    //         if (matrix[i][j] == target) {
    //             goto done;
    //         }
    //     }
    // }
    // done:

    return 0;
}`}
      </pre>

      {/* Common Mistakes */}
      <h2 className="text-2xl font-bold mt-6">Common Mistakes</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// MISTAKE 1: Infinite loop with continue
int i = 0;
// while (i < 5) {
//     if (i == 3) {
//         continue;  // i never gets incremented!
//     }
//     cout << i;
//     i++;
// }

// FIX: Increment before continue
while (i < 5) {
    if (i == 3) {
        i++;        // Increment first
        continue;
    }
    cout << i;
    i++;
}

// MISTAKE 2: Using continue in switch (doesn't work as expected)
// switch blocks don't support continue

// MISTAKE 3: Expecting break to exit multiple loops
// for (int i = 0; i < 5; i++) {
//     for (int j = 0; j < 5; j++) {
//         if (condition) {
//             break;  // Only exits inner loop!
//         }
//     }
// }`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Use <code className="bg-gray-200 px-1 rounded">break</code> to exit loops early when condition is met</li>
          <li>Use <code className="bg-gray-200 px-1 rounded">continue</code> to skip specific iterations</li>
          <li>Be careful with <code className="bg-gray-200 px-1 rounded">continue</code> in while loops - ensure loop variable updates</li>
          <li>For nested loops, use flag variables to break outer loops</li>
          <li>Avoid excessive use of break/continue as it can make code harder to follow</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> The break statement immediately exits the current loop, while
        continue skips to the next iteration. Both only affect the innermost loop they are in.
        Use them to control loop flow more precisely, but use sparingly to maintain code readability.
      </div>
    </div>
  );
};

export default BreakContinue;
