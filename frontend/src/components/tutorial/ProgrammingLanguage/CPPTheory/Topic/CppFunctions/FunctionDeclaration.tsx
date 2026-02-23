import React from "react";

const FunctionDeclaration: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Function Declaration and Definition
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Functions are reusable blocks of code that perform a specific task. They help organize
        code, make it more readable, and reduce repetition. In C++, you can declare functions
        before defining them, allowing you to call functions before their actual implementation.
      </p>

      {/* Why Use Functions */}
      <h2 className="text-2xl font-bold mt-6">Why Use Functions?</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Code Reusability:</strong> Write once, use many times</li>
        <li><strong>Modularity:</strong> Break complex problems into smaller parts</li>
        <li><strong>Readability:</strong> Make code easier to understand</li>
        <li><strong>Maintainability:</strong> Easier to update and debug</li>
        <li><strong>Testing:</strong> Test individual functions separately</li>
      </ul>

      {/* Function Syntax */}
      <h2 className="text-2xl font-bold mt-6">Function Syntax</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`returnType functionName(parameter1, parameter2, ...) {
    // function body
    // code to be executed
    return value;  // if returnType is not void
}`}
      </pre>

      {/* Parts of a Function */}
      <h2 className="text-2xl font-bold mt-6">Parts of a Function</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Part</th>
              <th className="text-left px-4 py-2 border">Description</th>
              <th className="text-left px-4 py-2 border">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-semibold">Return Type</td>
              <td className="px-4 py-2 border">Type of value returned by the function</td>
              <td className="px-4 py-2 border font-mono">int, void, double</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Function Name</td>
              <td className="px-4 py-2 border">Identifier to call the function</td>
              <td className="px-4 py-2 border font-mono">calculateSum, printMessage</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Parameters</td>
              <td className="px-4 py-2 border">Input values (optional)</td>
              <td className="px-4 py-2 border font-mono">int a, int b</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Function Body</td>
              <td className="px-4 py-2 border">Code inside curly braces</td>
              <td className="px-4 py-2 border font-mono">{`{ ... }`}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Return Statement</td>
              <td className="px-4 py-2 border">Value to return (if not void)</td>
              <td className="px-4 py-2 border font-mono">return result;</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Basic Examples */}
      <h2 className="text-2xl font-bold mt-6">Basic Function Examples</h2>

      <h3 className="text-xl font-semibold mt-4">Function with No Parameters, No Return:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Function definition
void greet() {
    cout << "Hello, World!" << endl;
}

int main() {
    greet();  // Function call
    greet();  // Can call multiple times

    return 0;
}

// Output:
// Hello, World!
// Hello, World!`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Function with Parameters:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Function that takes parameters
void greetPerson(string name) {
    cout << "Hello, " << name << "!" << endl;
}

void printSum(int a, int b) {
    cout << a << " + " << b << " = " << (a + b) << endl;
}

int main() {
    greetPerson("Alice");   // Output: Hello, Alice!
    greetPerson("Bob");     // Output: Hello, Bob!

    printSum(5, 3);         // Output: 5 + 3 = 8
    printSum(10, 20);       // Output: 10 + 20 = 30

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Function with Return Value:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Function that returns a value
int add(int a, int b) {
    return a + b;
}

double calculateArea(double radius) {
    return 3.14159 * radius * radius;
}

int main() {
    int sum = add(5, 3);
    cout << "Sum: " << sum << endl;  // Output: Sum: 8

    // Using return value directly
    cout << "10 + 20 = " << add(10, 20) << endl;

    double area = calculateArea(5.0);
    cout << "Area: " << area << endl;  // Output: Area: 78.5397

    return 0;
}`}
      </pre>

      {/* Declaration vs Definition */}
      <h2 className="text-2xl font-bold mt-6">Function Declaration vs Definition</h2>

      <h3 className="text-xl font-semibold mt-4">Function Declaration (Prototype):</h3>
      <p className="leading-relaxed">
        Tells the compiler about the function's name, return type, and parameters.
        Does not include the function body.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// Function declarations (prototypes)
int add(int a, int b);           // With parameter names
double multiply(double, double); // Without parameter names (valid)`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Function Definition:</h3>
      <p className="leading-relaxed">
        Provides the actual implementation (body) of the function.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// Function definition
int add(int a, int b) {
    return a + b;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Complete Example with Declaration:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Function declarations (prototypes)
int add(int a, int b);
int subtract(int a, int b);
void printResult(string operation, int result);

int main() {
    // We can call functions before their definitions
    int sum = add(10, 5);
    int diff = subtract(10, 5);

    printResult("Addition", sum);      // Output: Addition: 15
    printResult("Subtraction", diff);  // Output: Subtraction: 5

    return 0;
}

// Function definitions (can be after main)
int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

void printResult(string operation, int result) {
    cout << operation << ": " << result << endl;
}`}
      </pre>

      {/* Return Types */}
      <h2 className="text-2xl font-bold mt-6">Common Return Types</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

// void - returns nothing
void printMessage() {
    cout << "This function returns nothing" << endl;
    // No return statement needed (or just 'return;')
}

// int - returns an integer
int getSquare(int n) {
    return n * n;
}

// double - returns a double
double getDivision(int a, int b) {
    return (double)a / b;
}

// bool - returns true or false
bool isEven(int n) {
    return n % 2 == 0;
}

// char - returns a character
char getGrade(int score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

// string - returns a string
string getMessage(bool success) {
    return success ? "Operation successful" : "Operation failed";
}

int main() {
    printMessage();

    cout << "Square of 5: " << getSquare(5) << endl;
    cout << "10 / 3 = " << getDivision(10, 3) << endl;
    cout << "Is 4 even? " << boolalpha << isEven(4) << endl;
    cout << "Grade for 85: " << getGrade(85) << endl;
    cout << getMessage(true) << endl;

    return 0;
}`}
      </pre>

      {/* auto Return Type */}
      <h2 className="text-2xl font-bold mt-6">Auto Return Type (C++14)</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// C++14: auto return type deduction
auto multiply(int a, int b) {
    return a * b;  // Compiler deduces return type as int
}

auto divide(double a, double b) {
    return a / b;  // Compiler deduces return type as double
}

// C++11: Trailing return type
auto add(int a, int b) -> int {
    return a + b;
}

int main() {
    cout << multiply(3, 4) << endl;  // 12
    cout << divide(10.0, 3.0) << endl;  // 3.33333

    return 0;
}`}
      </pre>

      {/* Multiple Return Statements */}
      <h2 className="text-2xl font-bold mt-6">Multiple Return Statements</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Function can have multiple return statements
int getAbsolute(int n) {
    if (n >= 0) {
        return n;    // Return positive as is
    }
    return -n;       // Return negative of negative
}

string classifyNumber(int n) {
    if (n > 0) return "positive";
    if (n < 0) return "negative";
    return "zero";
}

// Early return for validation
double safeDivide(double a, double b) {
    if (b == 0) {
        cout << "Error: Division by zero!" << endl;
        return 0;  // Early return
    }
    return a / b;
}

int main() {
    cout << "Absolute of -5: " << getAbsolute(-5) << endl;
    cout << "Classify -10: " << classifyNumber(-10) << endl;
    cout << "10 / 0 = " << safeDivide(10, 0) << endl;

    return 0;
}`}
      </pre>

      {/* Practical Examples */}
      <h2 className="text-2xl font-bold mt-6">Practical Examples</h2>

      <h3 className="text-xl font-semibold mt-4">Example: Calculator Functions</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Function declarations
double add(double a, double b);
double subtract(double a, double b);
double multiply(double a, double b);
double divide(double a, double b);

int main() {
    double x = 10, y = 3;

    cout << x << " + " << y << " = " << add(x, y) << endl;
    cout << x << " - " << y << " = " << subtract(x, y) << endl;
    cout << x << " * " << y << " = " << multiply(x, y) << endl;
    cout << x << " / " << y << " = " << divide(x, y) << endl;

    return 0;
}

// Function definitions
double add(double a, double b) { return a + b; }
double subtract(double a, double b) { return a - b; }
double multiply(double a, double b) { return a * b; }
double divide(double a, double b) {
    if (b != 0) return a / b;
    cout << "Error: Division by zero" << endl;
    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example: Utility Functions</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Check if number is prime
bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;

    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

// Calculate factorial
long long factorial(int n) {
    if (n <= 1) return 1;
    long long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Calculate power
double power(double base, int exp) {
    double result = 1;
    bool negative = exp < 0;
    exp = abs(exp);

    for (int i = 0; i < exp; i++) {
        result *= base;
    }

    return negative ? 1.0 / result : result;
}

int main() {
    cout << "Is 17 prime? " << boolalpha << isPrime(17) << endl;
    cout << "5! = " << factorial(5) << endl;
    cout << "2^10 = " << power(2, 10) << endl;
    cout << "2^-3 = " << power(2, -3) << endl;

    return 0;
}`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Use meaningful function names that describe what they do</li>
          <li>Keep functions small and focused on a single task</li>
          <li>Always declare functions before using them (prototypes)</li>
          <li>Use void return type when function doesn't return a value</li>
          <li>Document complex functions with comments</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> Functions are reusable code blocks that can take parameters
        and return values. Use function declarations (prototypes) to call functions before their
        definitions. Choose appropriate return types and keep functions focused on single tasks
        for better code organization.
      </div>
    </div>
  );
};

export default FunctionDeclaration;
