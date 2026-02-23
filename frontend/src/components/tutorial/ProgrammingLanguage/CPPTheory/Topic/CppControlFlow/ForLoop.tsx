import React from "react";

const ForLoop: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ For Loop
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        The <code className="bg-gray-200 px-1 rounded">for</code> loop is used to execute a block
        of code a specific number of times. It's ideal when you know in advance how many times
        you want to iterate.
      </p>

      {/* Syntax */}
      <h2 className="text-2xl font-bold mt-6">Syntax</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`for (initialization; condition; update) {
    // code to be executed
}`}
      </pre>

      {/* Components */}
      <h2 className="text-2xl font-bold mt-6">Components of For Loop</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Component</th>
              <th className="text-left px-4 py-2 border">Description</th>
              <th className="text-left px-4 py-2 border">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-semibold">Initialization</td>
              <td className="px-4 py-2 border">Executed once at the beginning</td>
              <td className="px-4 py-2 border font-mono">int i = 0</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Condition</td>
              <td className="px-4 py-2 border">Checked before each iteration</td>
              <td className="px-4 py-2 border font-mono">i &lt; 10</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Update</td>
              <td className="px-4 py-2 border">Executed after each iteration</td>
              <td className="px-4 py-2 border font-mono">i++</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold mt-6">Basic Example</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Print numbers 1 to 5
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;

    // Output: 1 2 3 4 5

    return 0;
}`}
      </pre>

      {/* Execution Flow */}
      <h2 className="text-2xl font-bold mt-6">Execution Flow</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`for (int i = 1; i <= 3; i++) {
    cout << "i = " << i << endl;
}

// Step-by-step execution:
// 1. Initialization: i = 1
// 2. Check: i <= 3? (1 <= 3) TRUE -> Execute body: print "i = 1"
// 3. Update: i++ (i becomes 2)
// 4. Check: i <= 3? (2 <= 3) TRUE -> Execute body: print "i = 2"
// 5. Update: i++ (i becomes 3)
// 6. Check: i <= 3? (3 <= 3) TRUE -> Execute body: print "i = 3"
// 7. Update: i++ (i becomes 4)
// 8. Check: i <= 3? (4 <= 3) FALSE -> Exit loop`}
      </pre>

      {/* Various Examples */}
      <h2 className="text-2xl font-bold mt-6">More Examples</h2>

      <h3 className="text-xl font-semibold mt-4">Counting Backwards</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Countdown from 10 to 1
    for (int i = 10; i >= 1; i--) {
        cout << i << " ";
    }
    cout << "Liftoff!" << endl;

    // Output: 10 9 8 7 6 5 4 3 2 1 Liftoff!

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Incrementing by Different Values</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Print even numbers (increment by 2)
    cout << "Even numbers: ";
    for (int i = 0; i <= 10; i += 2) {
        cout << i << " ";
    }
    cout << endl;

    // Print odd numbers
    cout << "Odd numbers: ";
    for (int i = 1; i <= 10; i += 2) {
        cout << i << " ";
    }
    cout << endl;

    // Multiply by 2 each iteration
    cout << "Powers of 2: ";
    for (int i = 1; i <= 128; i *= 2) {
        cout << i << " ";
    }
    cout << endl;

    // Output:
    // Even numbers: 0 2 4 6 8 10
    // Odd numbers: 1 3 5 7 9
    // Powers of 2: 1 2 4 8 16 32 64 128

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Sum of Numbers</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int sum = 0;

    // Sum of 1 to 100
    for (int i = 1; i <= 100; i++) {
        sum += i;
    }

    cout << "Sum of 1 to 100 = " << sum << endl;
    // Output: Sum of 1 to 100 = 5050

    // Calculate factorial
    int n = 5;
    int factorial = 1;

    for (int i = 1; i <= n; i++) {
        factorial *= i;
    }

    cout << n << "! = " << factorial << endl;
    // Output: 5! = 120

    return 0;
}`}
      </pre>

      {/* Iterating Arrays */}
      <h2 className="text-2xl font-bold mt-6">Iterating Over Arrays</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    int size = sizeof(numbers) / sizeof(numbers[0]);

    // Using index
    cout << "Array elements: ";
    for (int i = 0; i < size; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;

    // Calculate sum
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += numbers[i];
    }
    cout << "Sum: " << sum << endl;

    // Find maximum
    int max = numbers[0];
    for (int i = 1; i < size; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    cout << "Maximum: " << max << endl;

    return 0;
}`}
      </pre>

      {/* Range-based For Loop */}
      <h2 className="text-2xl font-bold mt-6">Range-based For Loop (C++11)</h2>
      <p className="leading-relaxed">
        C++11 introduced a simpler syntax for iterating over collections.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <vector>
using namespace std;

int main() {
    // With arrays
    int arr[] = {1, 2, 3, 4, 5};

    cout << "Array elements: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;

    // With vectors
    vector<string> fruits = {"Apple", "Banana", "Orange"};

    cout << "Fruits: ";
    for (string fruit : fruits) {
        cout << fruit << " ";
    }
    cout << endl;

    // Using auto keyword
    vector<int> numbers = {10, 20, 30, 40, 50};

    cout << "Numbers: ";
    for (auto n : numbers) {
        cout << n << " ";
    }
    cout << endl;

    // Using reference to modify elements
    for (auto& n : numbers) {
        n *= 2;  // Double each element
    }

    cout << "Doubled: ";
    for (const auto& n : numbers) {  // const reference for read-only
        cout << n << " ";
    }
    cout << endl;

    return 0;
}`}
      </pre>

      {/* Nested For Loops */}
      <h2 className="text-2xl font-bold mt-6">Nested For Loops</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Multiplication table
    cout << "Multiplication Table:" << endl;
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 5; j++) {
            cout << i * j << "\\t";
        }
        cout << endl;
    }

    cout << endl;

    // Pattern: Right triangle
    cout << "Right Triangle:" << endl;
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }

    return 0;
}

/*
Output:
Multiplication Table:
1    2    3    4    5
2    4    6    8    10
3    6    9    12   15
4    8    12   16   20
5    10   15   20   25

Right Triangle:
*
* *
* * *
* * * *
* * * * *
*/`}
      </pre>

      {/* Patterns */}
      <h2 className="text-2xl font-bold mt-6">Pattern Examples</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int n = 5;

    // Pattern 1: Square
    cout << "Square:" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << "* ";
        }
        cout << endl;
    }

    // Pattern 2: Inverted Triangle
    cout << "\\nInverted Triangle:" << endl;
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }

    // Pattern 3: Number Pyramid
    cout << "\\nNumber Pyramid:" << endl;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << j << " ";
        }
        cout << endl;
    }

    return 0;
}`}
      </pre>

      {/* Multiple Variables */}
      <h2 className="text-2xl font-bold mt-6">Multiple Variables in For Loop</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Two variables
    for (int i = 0, j = 10; i < j; i++, j--) {
        cout << "i = " << i << ", j = " << j << endl;
    }

    cout << endl;

    // Converging from both ends
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << "Pairs from ends: ";
    for (int left = 0, right = size - 1; left < right; left++, right--) {
        cout << "(" << arr[left] << "," << arr[right] << ") ";
    }
    cout << endl;

    return 0;
}`}
      </pre>

      {/* Infinite Loop */}
      <h2 className="text-2xl font-bold mt-6">Infinite For Loop</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Infinite loop - all three parts are optional
    // for (;;) {
    //     cout << "This runs forever!" << endl;
    // }

    // Controlled infinite loop with break
    int count = 0;
    for (;;) {
        cout << "Count: " << count << endl;
        count++;
        if (count >= 5) {
            break;  // Exit the loop
        }
    }

    // Another way
    for (int i = 0; ; i++) {  // No condition - always true
        cout << "i = " << i << endl;
        if (i >= 3) break;
    }

    return 0;
}`}
      </pre>

      {/* Empty Parts */}
      <h2 className="text-2xl font-bold mt-6">Omitting Parts of For Loop</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Initialization outside
    int i = 0;
    for (; i < 5; i++) {
        cout << i << " ";
    }
    cout << endl;

    // Update inside loop body
    for (int j = 0; j < 5;) {
        cout << j << " ";
        j++;  // Update here
    }
    cout << endl;

    // Only condition
    int k = 0;
    for (; k < 5;) {
        cout << k << " ";
        k++;
    }
    cout << endl;

    return 0;
}`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Use meaningful loop variable names (not just i, j for complex loops)</li>
          <li>Prefer range-based for loops when iterating over collections</li>
          <li>Be careful with loop bounds to avoid off-by-one errors</li>
          <li>Avoid modifying loop variable inside the loop body</li>
          <li>Use <code className="bg-gray-200 px-1 rounded">size_t</code> for array indices to avoid signed/unsigned warnings</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> The for loop is perfect when you know the number of iterations
        in advance. It combines initialization, condition, and update in a single line.
        Use range-based for loops (C++11) for cleaner iteration over collections.
      </div>
    </div>
  );
};

export default ForLoop;
