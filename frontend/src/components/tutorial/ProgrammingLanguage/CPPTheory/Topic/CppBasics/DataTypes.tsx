import React from "react";

const DataTypes: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Data Types
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Data types in C++ define the type of data a variable can hold. They determine how much
        memory is allocated for the variable and what operations can be performed on it.
        Understanding data types is crucial for writing efficient and bug-free programs.
      </p>

      {/* Categories */}
      <h2 className="text-2xl font-bold mt-6">Categories of Data Types</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Primitive/Built-in Types:</strong> int, char, float, double, bool, void</li>
        <li><strong>Derived Types:</strong> arrays, pointers, references, functions</li>
        <li><strong>User-defined Types:</strong> classes, structures, unions, enums</li>
      </ul>

      {/* Primary Data Types Table */}
      <h2 className="text-2xl font-bold mt-6">Primary Data Types</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Data Type</th>
              <th className="text-left px-4 py-2 border">Size (bytes)</th>
              <th className="text-left px-4 py-2 border">Range</th>
              <th className="text-left px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">char</td>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">-128 to 127</td>
              <td className="px-4 py-2 border">Single character</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">unsigned char</td>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">0 to 255</td>
              <td className="px-4 py-2 border">Unsigned character</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">short</td>
              <td className="px-4 py-2 border">2</td>
              <td className="px-4 py-2 border">-32,768 to 32,767</td>
              <td className="px-4 py-2 border">Short integer</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">int</td>
              <td className="px-4 py-2 border">4</td>
              <td className="px-4 py-2 border">-2.1B to 2.1B</td>
              <td className="px-4 py-2 border">Integer</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">unsigned int</td>
              <td className="px-4 py-2 border">4</td>
              <td className="px-4 py-2 border">0 to 4.2B</td>
              <td className="px-4 py-2 border">Unsigned integer</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">long</td>
              <td className="px-4 py-2 border">4 or 8</td>
              <td className="px-4 py-2 border">Platform dependent</td>
              <td className="px-4 py-2 border">Long integer</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">long long</td>
              <td className="px-4 py-2 border">8</td>
              <td className="px-4 py-2 border">-9.2x10^18 to 9.2x10^18</td>
              <td className="px-4 py-2 border">Extended integer</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">float</td>
              <td className="px-4 py-2 border">4</td>
              <td className="px-4 py-2 border">~7 decimal digits</td>
              <td className="px-4 py-2 border">Single precision float</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">double</td>
              <td className="px-4 py-2 border">8</td>
              <td className="px-4 py-2 border">~15 decimal digits</td>
              <td className="px-4 py-2 border">Double precision float</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">long double</td>
              <td className="px-4 py-2 border">8, 12, or 16</td>
              <td className="px-4 py-2 border">~19 decimal digits</td>
              <td className="px-4 py-2 border">Extended precision</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">bool</td>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">true or false</td>
              <td className="px-4 py-2 border">Boolean value</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">void</td>
              <td className="px-4 py-2 border">0</td>
              <td className="px-4 py-2 border">-</td>
              <td className="px-4 py-2 border">No value/empty</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Integer Types */}
      <h2 className="text-2xl font-bold mt-6">Integer Types</h2>
      <p className="leading-relaxed">
        Integer types store whole numbers (without decimal points).
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <climits>  // For INT_MAX, INT_MIN, etc.
using namespace std;

int main() {
    // Different integer types
    short smallNum = 32000;
    int regularNum = 2000000000;
    long bigNum = 2000000000L;
    long long hugeNum = 9000000000000000000LL;

    // Unsigned versions (only positive values)
    unsigned int positiveOnly = 4000000000U;
    unsigned long long veryBig = 18000000000000000000ULL;

    cout << "short: " << smallNum << endl;
    cout << "int: " << regularNum << endl;
    cout << "long: " << bigNum << endl;
    cout << "long long: " << hugeNum << endl;
    cout << "unsigned int: " << positiveOnly << endl;

    // Check ranges
    cout << "\\nInteger Ranges:" << endl;
    cout << "int: " << INT_MIN << " to " << INT_MAX << endl;
    cout << "unsigned int: 0 to " << UINT_MAX << endl;

    return 0;
}`}
      </pre>

      {/* Floating Point Types */}
      <h2 className="text-2xl font-bold mt-6">Floating-Point Types</h2>
      <p className="leading-relaxed">
        Floating-point types store numbers with decimal points.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <iomanip>  // For setprecision
using namespace std;

int main() {
    float f = 3.14159265358979f;    // 'f' suffix for float literal
    double d = 3.14159265358979;    // Default is double
    long double ld = 3.14159265358979L;  // 'L' suffix for long double

    // Scientific notation
    double sciNum = 1.5e6;    // 1.5 * 10^6 = 1,500,000
    double smallNum = 2.5e-4; // 2.5 * 10^-4 = 0.00025

    cout << fixed << setprecision(15);
    cout << "float:       " << f << endl;
    cout << "double:      " << d << endl;
    cout << "long double: " << ld << endl;

    cout << "\\nScientific notation:" << endl;
    cout << "1.5e6 = " << sciNum << endl;
    cout << "2.5e-4 = " << smallNum << endl;

    // Precision comparison
    cout << "\\nPrecision Test:" << endl;
    float f1 = 1.123456789012345f;
    double d1 = 1.123456789012345;
    cout << "float:  " << f1 << " (7 digits precision)" << endl;
    cout << "double: " << d1 << " (15 digits precision)" << endl;

    return 0;
}`}
      </pre>

      {/* Character Type */}
      <h2 className="text-2xl font-bold mt-6">Character Type (char)</h2>
      <p className="leading-relaxed">
        The char type stores a single character and uses 1 byte of memory.
        Characters are stored as their ASCII values.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    char letter = 'A';
    char digit = '5';
    char symbol = '@';
    char newline = '\\n';

    // Characters are stored as ASCII values
    cout << "Character: " << letter << endl;
    cout << "ASCII value: " << (int)letter << endl;

    // Character arithmetic
    char nextLetter = letter + 1;  // 'B'
    cout << "Next letter: " << nextLetter << endl;

    // Escape sequences
    cout << "\\nEscape Sequences:" << endl;
    cout << "Tab:\\tText after tab" << endl;
    cout << "Newline:\\nText on new line" << endl;
    cout << "Backslash: \\\\" << endl;
    cout << "Single quote: \\'" << endl;
    cout << "Double quote: \\"" << endl;

    // Looping through characters
    cout << "\\nAlphabet: ";
    for (char c = 'A'; c <= 'Z'; c++) {
        cout << c << " ";
    }
    cout << endl;

    return 0;
}`}
      </pre>

      {/* Escape Sequences Table */}
      <h3 className="text-xl font-semibold mt-4">Common Escape Sequences:</h3>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Escape Sequence</th>
              <th className="text-left px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">\n</td>
              <td className="px-4 py-2 border">Newline</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">\t</td>
              <td className="px-4 py-2 border">Horizontal tab</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">\\</td>
              <td className="px-4 py-2 border">Backslash</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">\'</td>
              <td className="px-4 py-2 border">Single quote</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">\"</td>
              <td className="px-4 py-2 border">Double quote</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">\0</td>
              <td className="px-4 py-2 border">Null character</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">\r</td>
              <td className="px-4 py-2 border">Carriage return</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Boolean Type */}
      <h2 className="text-2xl font-bold mt-6">Boolean Type (bool)</h2>
      <p className="leading-relaxed">
        The bool type stores either <code className="bg-gray-200 px-1 rounded">true</code> or{" "}
        <code className="bg-gray-200 px-1 rounded">false</code>.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    bool isActive = true;
    bool isComplete = false;

    cout << "isActive: " << isActive << endl;    // Output: 1
    cout << "isComplete: " << isComplete << endl; // Output: 0

    // Using boolalpha to print true/false
    cout << boolalpha;
    cout << "isActive: " << isActive << endl;    // Output: true
    cout << "isComplete: " << isComplete << endl; // Output: false

    // Boolean expressions
    int x = 10, y = 20;
    bool result = (x < y);  // true
    cout << "x < y: " << result << endl;

    // In conditions
    if (isActive) {
        cout << "System is active!" << endl;
    }

    // Boolean conversion
    // Non-zero values are true, zero is false
    bool fromInt = 42;    // true
    bool fromZero = 0;    // false
    bool fromFloat = 0.0; // false

    return 0;
}`}
      </pre>

      {/* sizeof Operator */}
      <h2 className="text-2xl font-bold mt-6">Checking Sizes with sizeof</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    cout << "Size of data types (in bytes):" << endl;
    cout << "==============================" << endl;

    cout << "char:        " << sizeof(char) << endl;
    cout << "short:       " << sizeof(short) << endl;
    cout << "int:         " << sizeof(int) << endl;
    cout << "long:        " << sizeof(long) << endl;
    cout << "long long:   " << sizeof(long long) << endl;
    cout << "float:       " << sizeof(float) << endl;
    cout << "double:      " << sizeof(double) << endl;
    cout << "long double: " << sizeof(long double) << endl;
    cout << "bool:        " << sizeof(bool) << endl;

    // sizeof with variables
    int myInt = 100;
    cout << "\\nsizeof(myInt): " << sizeof(myInt) << endl;

    // sizeof with arrays
    int arr[10];
    cout << "sizeof(arr[10]): " << sizeof(arr) << " bytes" << endl;
    cout << "Number of elements: " << sizeof(arr) / sizeof(arr[0]) << endl;

    return 0;
}`}
      </pre>

      {/* Type Modifiers */}
      <h2 className="text-2xl font-bold mt-6">Type Modifiers</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Modifier</th>
              <th className="text-left px-4 py-2 border">Effect</th>
              <th className="text-left px-4 py-2 border">Applies To</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">signed</td>
              <td className="px-4 py-2 border">Can hold positive and negative values (default)</td>
              <td className="px-4 py-2 border">int, char, short, long</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">unsigned</td>
              <td className="px-4 py-2 border">Only positive values, doubles the positive range</td>
              <td className="px-4 py-2 border">int, char, short, long</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">short</td>
              <td className="px-4 py-2 border">Reduces size (typically 2 bytes)</td>
              <td className="px-4 py-2 border">int</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">long</td>
              <td className="px-4 py-2 border">Increases size (typically 4 or 8 bytes)</td>
              <td className="px-4 py-2 border">int, double</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Type Conversion */}
      <h2 className="text-2xl font-bold mt-6">Type Conversion</h2>

      <h3 className="text-xl font-semibold mt-4">Implicit Conversion (Automatic):</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Implicit conversions (automatic)
    int i = 10;
    double d = i;     // int to double (safe, no data loss)
    cout << "int to double: " << d << endl;

    double x = 9.99;
    int y = x;        // double to int (truncation occurs!)
    cout << "double to int: " << y << endl;  // Output: 9

    char c = 'A';
    int ascii = c;    // char to int (ASCII value)
    cout << "char to int: " << ascii << endl;  // Output: 65

    // In expressions
    int a = 5;
    double b = 2.5;
    double result = a + b;  // 'a' promoted to double
    cout << "5 + 2.5 = " << result << endl;

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Explicit Conversion (Casting):</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    double pi = 3.14159;

    // C-style cast
    int intPi1 = (int)pi;
    cout << "C-style cast: " << intPi1 << endl;

    // C++ function-style cast
    int intPi2 = int(pi);
    cout << "Function-style: " << intPi2 << endl;

    // C++ static_cast (recommended)
    int intPi3 = static_cast<int>(pi);
    cout << "static_cast: " << intPi3 << endl;

    // Integer division vs floating-point division
    int a = 7, b = 2;
    cout << "\\nInteger division: " << a / b << endl;           // Output: 3
    cout << "Float division: " << (double)a / b << endl;       // Output: 3.5
    cout << "Float division: " << static_cast<double>(a) / b << endl;  // Output: 3.5

    return 0;
}`}
      </pre>

      {/* Practical Example */}
      <h2 className="text-2xl font-bold mt-6">Practical Example: Temperature Converter</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // Different data types for temperature conversion
    double celsius;
    double fahrenheit;
    bool isCelsius;
    char continueChoice;

    cout << fixed << setprecision(2);
    cout << "===== Temperature Converter =====" << endl;

    do {
        cout << "\\nEnter temperature value: ";
        cin >> celsius;

        cout << "Is this Celsius? (1 for yes, 0 for no): ";
        cin >> isCelsius;

        if (isCelsius) {
            // Convert Celsius to Fahrenheit
            fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
            cout << celsius << " C = " << fahrenheit << " F" << endl;
        } else {
            // Convert Fahrenheit to Celsius
            fahrenheit = celsius;  // Input was in Fahrenheit
            celsius = (fahrenheit - 32.0) * 5.0 / 9.0;
            cout << fahrenheit << " F = " << celsius << " C" << endl;
        }

        cout << "Continue? (y/n): ";
        cin >> continueChoice;

    } while (continueChoice == 'y' || continueChoice == 'Y');

    cout << "Goodbye!" << endl;

    return 0;
}`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Important Notes:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Choose the smallest data type that fits your needs to save memory</li>
          <li>Use <code className="bg-gray-200 px-1 rounded">double</code> instead of{" "}
              <code className="bg-gray-200 px-1 rounded">float</code> for better precision</li>
          <li>Be careful with integer overflow and truncation during type conversion</li>
          <li>Sizes may vary across different systems and compilers</li>
          <li>Use <code className="bg-gray-200 px-1 rounded">static_cast</code> for explicit conversions in modern C++</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> C++ provides various data types for different kinds of data.
        Integer types (int, short, long) store whole numbers, floating-point types (float, double)
        store decimals, char stores characters, and bool stores true/false values. Understanding
        these types and their sizes helps write efficient programs.
      </div>
    </div>
  );
};

export default DataTypes;
