import React from "react";

const FunctionOverloading: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Function Overloading
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Function overloading is a feature in C++ that allows you to have multiple functions with
        the same name but different parameters. The compiler determines which function to call
        based on the arguments passed. This is a form of compile-time polymorphism.
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-bold mt-6">How Function Overloading Works</h2>
      <p className="leading-relaxed">
        Functions can be overloaded by changing:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Number of parameters</strong></li>
        <li><strong>Type of parameters</strong></li>
        <li><strong>Order of parameters</strong></li>
      </ul>
      <p className="leading-relaxed mt-2">
        Note: Return type alone is NOT sufficient to overload functions.
      </p>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold mt-6">Basic Example</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Same function name, different parameters
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

int main() {
    cout << "add(5, 3) = " << add(5, 3) << endl;
    cout << "add(2.5, 3.5) = " << add(2.5, 3.5) << endl;
    cout << "add(1, 2, 3) = " << add(1, 2, 3) << endl;

    return 0;
}

/*
Output:
add(5, 3) = 8
add(2.5, 3.5) = 6
add(1, 2, 3) = 6
*/`}
      </pre>

      {/* Overloading by Parameter Count */}
      <h2 className="text-2xl font-bold mt-6">Overloading by Number of Parameters</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

void display() {
    cout << "No arguments" << endl;
}

void display(int a) {
    cout << "One argument: " << a << endl;
}

void display(int a, int b) {
    cout << "Two arguments: " << a << ", " << b << endl;
}

void display(int a, int b, int c) {
    cout << "Three arguments: " << a << ", " << b << ", " << c << endl;
}

int main() {
    display();
    display(10);
    display(10, 20);
    display(10, 20, 30);

    return 0;
}

/*
Output:
No arguments
One argument: 10
Two arguments: 10, 20
Three arguments: 10, 20, 30
*/`}
      </pre>

      {/* Overloading by Parameter Type */}
      <h2 className="text-2xl font-bold mt-6">Overloading by Parameter Type</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

void print(int value) {
    cout << "Integer: " << value << endl;
}

void print(double value) {
    cout << "Double: " << value << endl;
}

void print(char value) {
    cout << "Character: " << value << endl;
}

void print(string value) {
    cout << "String: " << value << endl;
}

void print(bool value) {
    cout << "Boolean: " << boolalpha << value << endl;
}

int main() {
    print(42);
    print(3.14);
    print('A');
    print("Hello");
    print(true);

    return 0;
}

/*
Output:
Integer: 42
Double: 3.14
Character: A
String: Hello
Boolean: true
*/`}
      </pre>

      {/* Overloading by Parameter Order */}
      <h2 className="text-2xl font-bold mt-6">Overloading by Parameter Order</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

void display(int num, string text) {
    cout << "Int then String: " << num << ", " << text << endl;
}

void display(string text, int num) {
    cout << "String then Int: " << text << ", " << num << endl;
}

void calculate(int a, double b) {
    cout << "Int + Double: " << a + b << endl;
}

void calculate(double a, int b) {
    cout << "Double + Int: " << a + b << endl;
}

int main() {
    display(10, "Hello");
    display("Hello", 10);

    calculate(5, 2.5);
    calculate(2.5, 5);

    return 0;
}

/*
Output:
Int then String: 10, Hello
String then Int: Hello, 10
Int + Double: 7.5
Double + Int: 7.5
*/`}
      </pre>

      {/* Practical Example: Area Calculator */}
      <h2 className="text-2xl font-bold mt-6">Practical Example: Area Calculator</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <cmath>
using namespace std;

// Overloaded area functions for different shapes
double area(double radius) {
    // Circle
    return M_PI * radius * radius;
}

double area(double length, double width) {
    // Rectangle
    return length * width;
}

double area(double base, double height, bool isTriangle) {
    // Triangle
    return 0.5 * base * height;
}

double area(int side) {
    // Square
    return side * side;
}

int main() {
    cout << "Circle (radius 5): " << area(5.0) << endl;
    cout << "Rectangle (4 x 6): " << area(4.0, 6.0) << endl;
    cout << "Triangle (base 8, height 5): " << area(8.0, 5.0, true) << endl;
    cout << "Square (side 4): " << area(4) << endl;

    return 0;
}

/*
Output:
Circle (radius 5): 78.5398
Rectangle (4 x 6): 24
Triangle (base 8, height 5): 20
Square (side 4): 16
*/`}
      </pre>

      {/* What Cannot Be Overloaded */}
      <h2 className="text-2xl font-bold mt-6">What Cannot Be Overloaded</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// INVALID: Different return type only
// int getValue() { return 1; }
// double getValue() { return 1.0; }  // ERROR!

// INVALID: Default arguments creating ambiguity
// void func(int a) { }
// void func(int a, int b = 10) { }  // func(5) - which one?

// INVALID: Reference vs value
// void process(int x) { }
// void process(int &x) { }  // Ambiguous for process(num)

// The following IS valid (pointer vs reference is different):
void process(int *x) { cout << "Pointer" << endl; }
void process(int &x) { cout << "Reference" << endl; }
// Called as: process(&var) vs process(var)`}
      </pre>

      {/* Type Conversion and Overloading */}
      <h2 className="text-2xl font-bold mt-6">Type Conversion and Overloading</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

void show(int x) {
    cout << "int: " << x << endl;
}

void show(double x) {
    cout << "double: " << x << endl;
}

void show(float x) {
    cout << "float: " << x << endl;
}

int main() {
    show(5);        // Exact match: int
    show(5.5);      // Exact match: double
    show(5.5f);     // Exact match: float

    // Type promotion/conversion
    short s = 10;
    show(s);        // short promoted to int

    char c = 'A';
    show(c);        // char promoted to int

    // Ambiguity example (commented to avoid error):
    // show(5L);    // long - ambiguous between int and double

    return 0;
}`}
      </pre>

      {/* Overloading with const */}
      <h2 className="text-2xl font-bold mt-6">Overloading with const</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Example {
public:
    // Overloading based on const qualifier (in member functions)
    void display() {
        cout << "Non-const display()" << endl;
    }

    void display() const {
        cout << "Const display()" << endl;
    }
};

// For regular functions, const in parameter can matter:
void process(int &x) {
    cout << "Non-const reference" << endl;
    x = 10;
}

void process(const int &x) {
    cout << "Const reference" << endl;
    // x = 10;  // ERROR: cannot modify
}

int main() {
    Example obj1;
    const Example obj2;

    obj1.display();  // Calls non-const version
    obj2.display();  // Calls const version

    int a = 5;
    const int b = 10;

    process(a);  // Calls non-const version
    // For literals or const, const version is called:
    // process(5);  // Would call const reference version

    return 0;
}`}
      </pre>

      {/* Function Templates vs Overloading */}
      <h2 className="text-2xl font-bold mt-6">Function Templates vs Overloading</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Using overloading (multiple functions)
int maxOf(int a, int b) { return (a > b) ? a : b; }
double maxOf(double a, double b) { return (a > b) ? a : b; }
char maxOf(char a, char b) { return (a > b) ? a : b; }

// Using template (single definition)
template <typename T>
T maxValue(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    // Using overloaded functions
    cout << "Max (5, 3): " << maxOf(5, 3) << endl;
    cout << "Max (5.5, 3.3): " << maxOf(5.5, 3.3) << endl;
    cout << "Max ('A', 'Z'): " << maxOf('A', 'Z') << endl;

    // Using template function
    cout << "\\nUsing template:" << endl;
    cout << "Max (5, 3): " << maxValue(5, 3) << endl;
    cout << "Max (5.5, 3.3): " << maxValue(5.5, 3.3) << endl;
    cout << "Max ('A', 'Z'): " << maxValue('A', 'Z') << endl;

    return 0;
}`}
      </pre>

      {/* Operator Overloading Preview */}
      <h2 className="text-2xl font-bold mt-6">Preview: Operator Overloading</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Complex {
public:
    double real, imag;

    Complex(double r = 0, double i = 0) : real(r), imag(i) {}

    // Overload + operator
    Complex operator+(const Complex &other) {
        return Complex(real + other.real, imag + other.imag);
    }

    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(3, 4);
    Complex c2(1, 2);
    Complex c3 = c1 + c2;  // Uses overloaded + operator

    cout << "c1: "; c1.display();
    cout << "c2: "; c2.display();
    cout << "c1 + c2: "; c3.display();

    return 0;
}

/*
Output:
c1: 3 + 4i
c2: 1 + 2i
c1 + c2: 4 + 6i
*/`}
      </pre>

      {/* Best Practices */}
      <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Do</th>
              <th className="text-left px-4 py-2 border">Don't</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Overload for related operations</td>
              <td className="px-4 py-2 border">Overload unrelated functions</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Keep behavior consistent across overloads</td>
              <td className="px-4 py-2 border">Make overloads behave completely differently</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Consider using templates for type variations</td>
              <td className="px-4 py-2 border">Create too many overloads</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Document when behavior varies</td>
              <td className="px-4 py-2 border">Create ambiguous overloads</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Important Notes:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Return type alone cannot differentiate overloaded functions</li>
          <li>Be careful with implicit type conversions - they can cause ambiguity</li>
          <li>Default arguments can create ambiguity with overloaded functions</li>
          <li>Compiler selects the best match based on arguments</li>
          <li>Consider function templates for simple type variations</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> Function overloading allows multiple functions with the same
        name but different parameter lists. The compiler selects the appropriate function based
        on the arguments. This provides flexibility and improves code readability by using
        intuitive function names for related operations.
      </div>
    </div>
  );
};

export default FunctionOverloading;
