import React from "react";

const Recursion: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Recursion
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Recursion is a programming technique where a function calls itself to solve smaller
        instances of the same problem. It's a powerful approach for solving problems that can be
        broken down into similar sub-problems.
      </p>

      {/* How Recursion Works */}
      <h2 className="text-2xl font-bold mt-6">How Recursion Works</h2>
      <p className="leading-relaxed">
        Every recursive function needs two essential components:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Base Case:</strong> The condition that stops the recursion</li>
        <li><strong>Recursive Case:</strong> The function calling itself with modified parameters</li>
      </ul>

      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`returnType recursiveFunction(parameters) {
    if (base_condition) {
        return base_value;  // Stop recursion
    }
    // Recursive call
    return recursiveFunction(modified_parameters);
}`}
      </pre>

      {/* Basic Example: Countdown */}
      <h2 className="text-2xl font-bold mt-6">Basic Example: Countdown</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

void countdown(int n) {
    // Base case
    if (n <= 0) {
        cout << "Blastoff!" << endl;
        return;
    }

    // Print current number
    cout << n << endl;

    // Recursive call with smaller value
    countdown(n - 1);
}

int main() {
    countdown(5);
    return 0;
}

/*
Output:
5
4
3
2
1
Blastoff!
*/`}
      </pre>

      {/* Factorial */}
      <h2 className="text-2xl font-bold mt-6">Classic Example: Factorial</h2>
      <p className="leading-relaxed">
        Factorial of n (n!) = n * (n-1) * (n-2) * ... * 1
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Recursive factorial
long long factorial(int n) {
    // Base case
    if (n <= 1) {
        return 1;
    }

    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

int main() {
    cout << "5! = " << factorial(5) << endl;   // 120
    cout << "10! = " << factorial(10) << endl; // 3628800
    cout << "0! = " << factorial(0) << endl;   // 1

    return 0;
}

/*
How it works for factorial(5):
factorial(5) = 5 * factorial(4)
             = 5 * 4 * factorial(3)
             = 5 * 4 * 3 * factorial(2)
             = 5 * 4 * 3 * 2 * factorial(1)
             = 5 * 4 * 3 * 2 * 1
             = 120
*/`}
      </pre>

      {/* Fibonacci */}
      <h2 className="text-2xl font-bold mt-6">Fibonacci Sequence</h2>
      <p className="leading-relaxed">
        Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, ... (each number is sum of two previous)
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Recursive Fibonacci (simple but slow)
int fibonacci(int n) {
    // Base cases
    if (n <= 0) return 0;
    if (n == 1) return 1;

    // Recursive case: fib(n) = fib(n-1) + fib(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    cout << "Fibonacci sequence:" << endl;
    for (int i = 0; i <= 10; i++) {
        cout << "fib(" << i << ") = " << fibonacci(i) << endl;
    }

    return 0;
}

/*
Output:
fib(0) = 0
fib(1) = 1
fib(2) = 1
fib(3) = 2
fib(4) = 3
fib(5) = 5
fib(6) = 8
fib(7) = 13
fib(8) = 21
fib(9) = 34
fib(10) = 55
*/`}
      </pre>

      {/* Sum of Digits */}
      <h2 className="text-2xl font-bold mt-6">Sum of Digits</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int sumOfDigits(int n) {
    // Handle negative numbers
    n = abs(n);

    // Base case
    if (n < 10) {
        return n;  // Single digit
    }

    // Recursive case: last digit + sum of remaining digits
    return (n % 10) + sumOfDigits(n / 10);
}

int main() {
    cout << "Sum of digits of 12345: " << sumOfDigits(12345) << endl;  // 15
    cout << "Sum of digits of 9999: " << sumOfDigits(9999) << endl;    // 36
    cout << "Sum of digits of 100: " << sumOfDigits(100) << endl;      // 1

    return 0;
}`}
      </pre>

      {/* Power Function */}
      <h2 className="text-2xl font-bold mt-6">Power Function</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Simple recursive power: O(n)
double power(double base, int exp) {
    // Base cases
    if (exp == 0) return 1;
    if (exp < 0) return 1.0 / power(base, -exp);

    // Recursive case
    return base * power(base, exp - 1);
}

// Efficient recursive power: O(log n)
double fastPower(double base, int exp) {
    if (exp == 0) return 1;
    if (exp < 0) return 1.0 / fastPower(base, -exp);

    // If exp is even: x^n = (x^2)^(n/2)
    if (exp % 2 == 0) {
        double half = fastPower(base, exp / 2);
        return half * half;
    }

    // If exp is odd: x^n = x * x^(n-1)
    return base * fastPower(base, exp - 1);
}

int main() {
    cout << "2^10 = " << power(2, 10) << endl;      // 1024
    cout << "3^4 = " << power(3, 4) << endl;        // 81
    cout << "2^-3 = " << power(2, -3) << endl;      // 0.125

    cout << "\\nUsing fast power:" << endl;
    cout << "2^20 = " << fastPower(2, 20) << endl;  // 1048576

    return 0;
}`}
      </pre>

      {/* GCD */}
      <h2 className="text-2xl font-bold mt-6">GCD (Greatest Common Divisor)</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Euclidean algorithm using recursion
int gcd(int a, int b) {
    // Base case
    if (b == 0) {
        return a;
    }

    // Recursive case
    return gcd(b, a % b);
}

int main() {
    cout << "GCD(48, 18) = " << gcd(48, 18) << endl;   // 6
    cout << "GCD(56, 98) = " << gcd(56, 98) << endl;   // 14
    cout << "GCD(100, 25) = " << gcd(100, 25) << endl; // 25

    return 0;
}

/*
How gcd(48, 18) works:
gcd(48, 18) = gcd(18, 48 % 18) = gcd(18, 12)
gcd(18, 12) = gcd(12, 18 % 12) = gcd(12, 6)
gcd(12, 6)  = gcd(6, 12 % 6)   = gcd(6, 0)
gcd(6, 0)   = 6 (base case)
*/`}
      </pre>

      {/* Reverse String */}
      <h2 className="text-2xl font-bold mt-6">Reverse a String</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

// Method 1: Return reversed string
string reverseString(string str) {
    // Base case
    if (str.length() <= 1) {
        return str;
    }

    // Recursive case: last char + reverse of rest
    return str.back() + reverseString(str.substr(0, str.length() - 1));
}

// Method 2: Modify in place using indices
void reverseInPlace(string &str, int start, int end) {
    // Base case
    if (start >= end) {
        return;
    }

    // Swap characters
    swap(str[start], str[end]);

    // Recursive call
    reverseInPlace(str, start + 1, end - 1);
}

int main() {
    cout << "Reverse 'Hello': " << reverseString("Hello") << endl;
    cout << "Reverse 'recursion': " << reverseString("recursion") << endl;

    string s = "Hello World";
    reverseInPlace(s, 0, s.length() - 1);
    cout << "In-place reverse: " << s << endl;

    return 0;
}

/*
Output:
Reverse 'Hello': olleH
Reverse 'recursion': noisrucer
In-place reverse: dlroW olleH
*/`}
      </pre>

      {/* Binary Search */}
      <h2 className="text-2xl font-bold mt-6">Binary Search</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int binarySearch(int arr[], int left, int right, int target) {
    // Base case: element not found
    if (left > right) {
        return -1;
    }

    int mid = left + (right - left) / 2;

    // Base case: element found
    if (arr[mid] == target) {
        return mid;
    }

    // Recursive cases
    if (arr[mid] > target) {
        return binarySearch(arr, left, mid - 1, target);
    } else {
        return binarySearch(arr, mid + 1, right, target);
    }
}

int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << "Array: ";
    for (int i = 0; i < size; i++) cout << arr[i] << " ";
    cout << endl;

    int target = 23;
    int result = binarySearch(arr, 0, size - 1, target);

    if (result != -1) {
        cout << target << " found at index " << result << endl;
    } else {
        cout << target << " not found" << endl;
    }

    return 0;
}`}
      </pre>

      {/* Tower of Hanoi */}
      <h2 className="text-2xl font-bold mt-6">Tower of Hanoi</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

void towerOfHanoi(int n, char source, char auxiliary, char destination) {
    // Base case
    if (n == 1) {
        cout << "Move disk 1 from " << source << " to " << destination << endl;
        return;
    }

    // Move n-1 disks from source to auxiliary
    towerOfHanoi(n - 1, source, destination, auxiliary);

    // Move nth disk from source to destination
    cout << "Move disk " << n << " from " << source << " to " << destination << endl;

    // Move n-1 disks from auxiliary to destination
    towerOfHanoi(n - 1, auxiliary, source, destination);
}

int main() {
    int numDisks = 3;
    cout << "Tower of Hanoi with " << numDisks << " disks:" << endl;
    towerOfHanoi(numDisks, 'A', 'B', 'C');

    return 0;
}

/*
Output:
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
*/`}
      </pre>

      {/* Recursion vs Iteration */}
      <h2 className="text-2xl font-bold mt-6">Recursion vs Iteration</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Aspect</th>
              <th className="text-left px-4 py-2 border">Recursion</th>
              <th className="text-left px-4 py-2 border">Iteration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Readability</td>
              <td className="px-4 py-2 border">Often more elegant for certain problems</td>
              <td className="px-4 py-2 border">Can be verbose but straightforward</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Memory</td>
              <td className="px-4 py-2 border">Uses stack space (risk of overflow)</td>
              <td className="px-4 py-2 border">Uses constant extra space</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Performance</td>
              <td className="px-4 py-2 border">Function call overhead</td>
              <td className="px-4 py-2 border">Generally faster</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Best For</td>
              <td className="px-4 py-2 border">Trees, divide-and-conquer, backtracking</td>
              <td className="px-4 py-2 border">Simple loops, counting</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tail Recursion */}
      <h2 className="text-2xl font-bold mt-6">Tail Recursion</h2>
      <p className="leading-relaxed">
        Tail recursion is when the recursive call is the last operation in the function.
        Some compilers can optimize tail recursion to avoid stack growth.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Regular recursion (not tail recursive)
int factorialRegular(int n) {
    if (n <= 1) return 1;
    return n * factorialRegular(n - 1);  // Multiplication after call
}

// Tail recursive factorial
int factorialTail(int n, int accumulator = 1) {
    if (n <= 1) return accumulator;
    return factorialTail(n - 1, n * accumulator);  // Call is the last operation
}

// Tail recursive sum
int sumTail(int n, int acc = 0) {
    if (n <= 0) return acc;
    return sumTail(n - 1, acc + n);
}

int main() {
    cout << "Factorial 5 (regular): " << factorialRegular(5) << endl;
    cout << "Factorial 5 (tail): " << factorialTail(5) << endl;
    cout << "Sum 1-100 (tail): " << sumTail(100) << endl;

    return 0;
}`}
      </pre>

      {/* Common Mistakes */}
      <h2 className="text-2xl font-bold mt-6">Common Mistakes</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// MISTAKE 1: Missing base case - infinite recursion
// void badRecursion(int n) {
//     cout << n << endl;
//     badRecursion(n - 1);  // Never stops!
// }

// MISTAKE 2: Base case never reached
// int badFactorial(int n) {
//     if (n == 1) return 1;  // What if n < 1?
//     return n * badFactorial(n - 1);
// }

// MISTAKE 3: Not making progress toward base case
// int stuck(int n) {
//     if (n <= 0) return 0;
//     return stuck(n);  // n never changes!
// }

// MISTAKE 4: Stack overflow with large inputs
// factorial(1000000);  // Will crash due to stack overflow`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Always define a clear base case</li>
          <li>Ensure each recursive call makes progress toward the base case</li>
          <li>Consider iteration for simple problems</li>
          <li>Use memoization for overlapping subproblems (like Fibonacci)</li>
          <li>Be mindful of stack overflow for deep recursion</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> Recursion is a powerful technique where a function calls itself.
        Every recursive function needs a base case to stop and a recursive case that makes progress
        toward the base case. While recursion can make some problems easier to solve, be mindful of
        stack overflow and consider iteration for performance-critical code.
      </div>
    </div>
  );
};

export default Recursion;
