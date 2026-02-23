import React from "react";

const Parameters: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Function Parameters and Return Types
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Parameters allow you to pass data into functions. C++ supports multiple ways of passing
        parameters: by value, by reference, and by pointer. Understanding these methods is
        crucial for writing efficient and correct code.
      </p>

      {/* Parameter Types */}
      <h2 className="text-2xl font-bold mt-6">Types of Parameter Passing</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Method</th>
              <th className="text-left px-4 py-2 border">Syntax</th>
              <th className="text-left px-4 py-2 border">Original Modified?</th>
              <th className="text-left px-4 py-2 border">Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-semibold">Pass by Value</td>
              <td className="px-4 py-2 border font-mono">func(int x)</td>
              <td className="px-4 py-2 border">No (copy made)</td>
              <td className="px-4 py-2 border">Small data, no modification needed</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Pass by Reference</td>
              <td className="px-4 py-2 border font-mono">func(int &x)</td>
              <td className="px-4 py-2 border">Yes (original accessed)</td>
              <td className="px-4 py-2 border">Modify original, avoid copying</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Pass by Pointer</td>
              <td className="px-4 py-2 border font-mono">func(int *x)</td>
              <td className="px-4 py-2 border">Yes (if dereferenced)</td>
              <td className="px-4 py-2 border">Arrays, optional params, C-style</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Const Reference</td>
              <td className="px-4 py-2 border font-mono">func(const int &x)</td>
              <td className="px-4 py-2 border">No (read-only)</td>
              <td className="px-4 py-2 border">Large data, no modification</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pass by Value */}
      <h2 className="text-2xl font-bold mt-6">Pass by Value</h2>
      <p className="leading-relaxed">
        A copy of the argument is made. Changes inside the function don't affect the original.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

void doubleValue(int x) {
    x = x * 2;  // Only modifies the copy
    cout << "Inside function: x = " << x << endl;
}

int main() {
    int num = 10;
    cout << "Before: num = " << num << endl;

    doubleValue(num);  // Pass a copy

    cout << "After: num = " << num << endl;  // Original unchanged

    return 0;
}

/*
Output:
Before: num = 10
Inside function: x = 20
After: num = 10
*/`}
      </pre>

      {/* Pass by Reference */}
      <h2 className="text-2xl font-bold mt-6">Pass by Reference</h2>
      <p className="leading-relaxed">
        The function receives a reference to the original variable. Changes affect the original.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

void doubleValue(int &x) {  // Reference parameter
    x = x * 2;  // Modifies the original
    cout << "Inside function: x = " << x << endl;
}

void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int num = 10;
    cout << "Before: num = " << num << endl;

    doubleValue(num);  // Pass by reference

    cout << "After: num = " << num << endl;  // Original changed!

    // Swap example
    int x = 5, y = 10;
    cout << "\\nBefore swap: x = " << x << ", y = " << y << endl;
    swap(x, y);
    cout << "After swap: x = " << x << ", y = " << y << endl;

    return 0;
}

/*
Output:
Before: num = 10
Inside function: x = 20
After: num = 20

Before swap: x = 5, y = 10
After swap: x = 10, y = 5
*/`}
      </pre>

      {/* Pass by Pointer */}
      <h2 className="text-2xl font-bold mt-6">Pass by Pointer</h2>
      <p className="leading-relaxed">
        Pass the memory address of the variable. Changes via dereferencing affect the original.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

void doubleValue(int *ptr) {  // Pointer parameter
    *ptr = *ptr * 2;  // Dereference and modify
}

void swapPointers(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int num = 10;
    cout << "Before: num = " << num << endl;

    doubleValue(&num);  // Pass address

    cout << "After: num = " << num << endl;  // Original changed!

    // Swap example
    int x = 5, y = 10;
    cout << "\\nBefore swap: x = " << x << ", y = " << y << endl;
    swapPointers(&x, &y);
    cout << "After swap: x = " << x << ", y = " << y << endl;

    return 0;
}`}
      </pre>

      {/* Const Reference */}
      <h2 className="text-2xl font-bold mt-6">Const Reference</h2>
      <p className="leading-relaxed">
        Pass by reference but prevent modification. Ideal for large objects you want to read only.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
#include <vector>
using namespace std;

// Const reference - efficient for large objects, no modification
void printVector(const vector<int> &vec) {
    cout << "Vector: ";
    for (const int &val : vec) {
        cout << val << " ";
    }
    cout << endl;
    // vec.push_back(5);  // ERROR! Cannot modify const reference
}

void printName(const string &name) {
    cout << "Name: " << name << endl;
    // name = "John";  // ERROR! Cannot modify
}

// Without const, function could accidentally modify
void processData(const vector<double> &data) {
    double sum = 0;
    for (const double &val : data) {
        sum += val;
    }
    cout << "Sum: " << sum << endl;
}

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    printVector(nums);

    string myName = "Alice";
    printName(myName);

    return 0;
}`}
      </pre>

      {/* Default Parameters */}
      <h2 className="text-2xl font-bold mt-6">Default Parameters</h2>
      <p className="leading-relaxed">
        You can provide default values for parameters. If not provided during call, defaults are used.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Default parameters must be rightmost
void greet(string name, string greeting = "Hello") {
    cout << greeting << ", " << name << "!" << endl;
}

int power(int base, int exp = 2) {  // Default exponent is 2
    int result = 1;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

void printLine(char ch = '-', int length = 20) {
    for (int i = 0; i < length; i++) {
        cout << ch;
    }
    cout << endl;
}

int main() {
    greet("Alice");                    // Hello, Alice!
    greet("Bob", "Good morning");      // Good morning, Bob!

    cout << "5^2 = " << power(5) << endl;      // Uses default exp=2
    cout << "2^10 = " << power(2, 10) << endl; // Uses provided exp=10

    printLine();                 // --------------------
    printLine('*');              // ********************
    printLine('=', 10);          // ==========

    return 0;
}`}
      </pre>

      {/* Multiple Return Values */}
      <h2 className="text-2xl font-bold mt-6">Returning Multiple Values</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <tuple>
using namespace std;

// Method 1: Using reference parameters
void minMax(int arr[], int size, int &min, int &max) {
    min = max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
}

// Method 2: Using pair (for two values)
pair<int, int> divide(int a, int b) {
    return make_pair(a / b, a % b);  // quotient and remainder
}

// Method 3: Using tuple (for multiple values)
tuple<int, int, double> getStats(int arr[], int size) {
    int min = arr[0], max = arr[0], sum = 0;
    for (int i = 0; i < size; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
        sum += arr[i];
    }
    double avg = (double)sum / size;
    return make_tuple(min, max, avg);
}

int main() {
    int arr[] = {5, 2, 8, 1, 9, 3};
    int size = 6;

    // Method 1
    int minimum, maximum;
    minMax(arr, size, minimum, maximum);
    cout << "Min: " << minimum << ", Max: " << maximum << endl;

    // Method 2
    auto [quotient, remainder] = divide(17, 5);  // C++17 structured binding
    cout << "17 / 5 = " << quotient << " remainder " << remainder << endl;

    // Method 3
    auto [minVal, maxVal, average] = getStats(arr, size);
    cout << "Stats - Min: " << minVal << ", Max: " << maxVal
         << ", Avg: " << average << endl;

    return 0;
}`}
      </pre>

      {/* Array Parameters */}
      <h2 className="text-2xl font-bold mt-6">Array Parameters</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Arrays are always passed by reference (decay to pointer)
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Equivalent syntax
void printArray2(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Modifying array elements
void doubleArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2;  // Modifies original array!
    }
}

// 2D array - must specify column size
void print2DArray(int arr[][3], int rows) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < 3; j++) {
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }
}

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    int size = 5;

    cout << "Original: ";
    printArray(nums, size);

    doubleArray(nums, size);

    cout << "Doubled: ";
    printArray(nums, size);

    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
    cout << "\\n2D Array:\\n";
    print2DArray(matrix, 2);

    return 0;
}`}
      </pre>

      {/* Inline Functions */}
      <h2 className="text-2xl font-bold mt-6">Inline Functions</h2>
      <p className="leading-relaxed">
        Inline functions suggest the compiler to insert the function code directly at call site.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Inline function - hint to compiler
inline int square(int x) {
    return x * x;
}

inline int max(int a, int b) {
    return (a > b) ? a : b;
}

// Good for small, frequently called functions
inline double celsiusToFahrenheit(double c) {
    return c * 9.0 / 5.0 + 32;
}

int main() {
    // These might be replaced with actual code at compile time
    cout << "5 squared: " << square(5) << endl;
    cout << "Max of 10, 20: " << max(10, 20) << endl;
    cout << "25C in Fahrenheit: " << celsiusToFahrenheit(25) << endl;

    return 0;
}`}
      </pre>

      {/* Comparison Example */}
      <h2 className="text-2xl font-bold mt-6">Complete Comparison Example</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

void byValue(int x) {
    x = 100;
    cout << "  Inside byValue: " << x << endl;
}

void byReference(int &x) {
    x = 100;
    cout << "  Inside byReference: " << x << endl;
}

void byPointer(int *x) {
    *x = 100;
    cout << "  Inside byPointer: " << *x << endl;
}

void byConstRef(const int &x) {
    // x = 100;  // ERROR: cannot modify const reference
    cout << "  Inside byConstRef: " << x << endl;
}

int main() {
    int a = 10, b = 10, c = 10, d = 10;

    cout << "Pass by Value:" << endl;
    cout << "  Before: " << a << endl;
    byValue(a);
    cout << "  After: " << a << endl;

    cout << "\\nPass by Reference:" << endl;
    cout << "  Before: " << b << endl;
    byReference(b);
    cout << "  After: " << b << endl;

    cout << "\\nPass by Pointer:" << endl;
    cout << "  Before: " << c << endl;
    byPointer(&c);
    cout << "  After: " << c << endl;

    cout << "\\nPass by Const Reference:" << endl;
    cout << "  Before: " << d << endl;
    byConstRef(d);
    cout << "  After: " << d << endl;

    return 0;
}

/*
Output:
Pass by Value:
  Before: 10
  Inside byValue: 100
  After: 10

Pass by Reference:
  Before: 10
  Inside byReference: 100
  After: 100

Pass by Pointer:
  Before: 10
  Inside byPointer: 100
  After: 100

Pass by Const Reference:
  Before: 10
  Inside byConstRef: 10
  After: 10
*/`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Use pass by value for small, simple types (int, char, bool)</li>
          <li>Use const reference for large objects you don't want to modify</li>
          <li>Use reference when you need to modify the original variable</li>
          <li>Place default parameters at the end of parameter list</li>
          <li>Use inline for small, frequently called functions</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> C++ offers flexible parameter passing options. Pass by value
        creates a copy, pass by reference allows modification of the original, and const
        reference provides efficient read-only access. Choose the appropriate method based on
        whether you need to modify the data and the size of the data being passed.
      </div>
    </div>
  );
};

export default Parameters;
