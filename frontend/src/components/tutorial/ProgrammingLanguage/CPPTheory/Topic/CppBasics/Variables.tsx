import React from "react";

const Variables: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Variables
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Variables are fundamental building blocks in any programming language. In C++, a variable
        is a named storage location in memory that holds a value. Think of a variable as a
        labeled container where you can store and retrieve data.
      </p>

      {/* What is a Variable */}
      <h2 className="text-2xl font-bold mt-6">What is a Variable?</h2>
      <p className="leading-relaxed">
        A variable is a name given to a memory location that stores data. The value of a variable
        can be changed during program execution. Each variable has:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Name:</strong> An identifier to access the variable</li>
        <li><strong>Type:</strong> Determines what kind of data it can store</li>
        <li><strong>Value:</strong> The actual data stored in the variable</li>
        <li><strong>Memory Address:</strong> Location where data is stored</li>
      </ul>

      {/* Variable Declaration */}
      <h2 className="text-2xl font-bold mt-6">Variable Declaration</h2>
      <p className="leading-relaxed">
        To use a variable in C++, you must first declare it. Declaration tells the compiler the
        variable's name and type.
      </p>

      <h3 className="text-xl font-semibold mt-4">Syntax:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`dataType variableName;`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Examples:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// Declaring variables
int age;              // Integer variable
float salary;         // Floating-point variable
char grade;           // Character variable
double price;         // Double precision variable
bool isActive;        // Boolean variable

// Declaring multiple variables of the same type
int x, y, z;          // Three integer variables`}
      </pre>

      {/* Variable Initialization */}
      <h2 className="text-2xl font-bold mt-6">Variable Initialization</h2>
      <p className="leading-relaxed">
        Initialization means assigning an initial value to a variable at the time of declaration.
      </p>

      <h3 className="text-xl font-semibold mt-4">Ways to Initialize Variables:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// 1. Copy initialization (traditional)
int age = 25;
float pi = 3.14159;
char letter = 'A';

// 2. Direct initialization
int count(100);
double value(45.67);

// 3. Uniform initialization (C++11 and later) - Recommended
int number{42};
float rate{0.05f};
bool flag{true};

// 4. Declaration and initialization on same line
int a = 10, b = 20, c = 30;`}
      </pre>

      {/* Naming Rules */}
      <h2 className="text-2xl font-bold mt-6">Variable Naming Rules</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Rule</th>
              <th className="text-left px-4 py-2 border">Valid Examples</th>
              <th className="text-left px-4 py-2 border">Invalid Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Must begin with letter or underscore</td>
              <td className="px-4 py-2 border font-mono">name, _count, Age</td>
              <td className="px-4 py-2 border font-mono">2name, @value</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Can contain letters, digits, underscores</td>
              <td className="px-4 py-2 border font-mono">student1, total_sum</td>
              <td className="px-4 py-2 border font-mono">my-var, user@name</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Case-sensitive</td>
              <td className="px-4 py-2 border font-mono">Age and age are different</td>
              <td className="px-4 py-2 border">-</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Cannot be a reserved keyword</td>
              <td className="px-4 py-2 border font-mono">myInt, counter</td>
              <td className="px-4 py-2 border font-mono">int, class, return</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">No spaces allowed</td>
              <td className="px-4 py-2 border font-mono">firstName, first_name</td>
              <td className="px-4 py-2 border font-mono">first name</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Naming Conventions */}
      <h2 className="text-2xl font-bold mt-6">Naming Conventions</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// Camel Case (common in C++)
int studentAge;
float accountBalance;
string firstName;

// Snake Case (also popular)
int student_age;
float account_balance;
string first_name;

// Hungarian Notation (older style)
int iCount;        // i prefix for integer
float fPrice;      // f prefix for float
bool bIsValid;     // b prefix for boolean

// Constants (ALL_CAPS)
const int MAX_SIZE = 100;
const double PI = 3.14159;`}
      </pre>

      {/* Constants */}
      <h2 className="text-2xl font-bold mt-6">Constants (const)</h2>
      <p className="leading-relaxed">
        Constants are variables whose values cannot be changed after initialization.
        Use the <code className="bg-gray-200 px-1 rounded">const</code> keyword to declare constants.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Declaring constants
    const int MAX_VALUE = 100;
    const double PI = 3.14159;
    const char NEWLINE = '\\n';

    cout << "Max Value: " << MAX_VALUE << endl;
    cout << "PI: " << PI << endl;

    // MAX_VALUE = 200;  // ERROR! Cannot modify a constant

    return 0;
}`}
      </pre>

      {/* constexpr */}
      <h2 className="text-2xl font-bold mt-6">constexpr (C++11)</h2>
      <p className="leading-relaxed">
        <code className="bg-gray-200 px-1 rounded">constexpr</code> declares compile-time constants.
        The value must be computable at compile time.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`constexpr int ARRAY_SIZE = 50;
constexpr double GRAVITY = 9.81;
constexpr int square(int n) { return n * n; }

int arr[ARRAY_SIZE];          // Valid: ARRAY_SIZE is compile-time constant
constexpr int result = square(5);  // result = 25 at compile time`}
      </pre>

      {/* Scope */}
      <h2 className="text-2xl font-bold mt-6">Variable Scope</h2>
      <p className="leading-relaxed">
        Scope determines where a variable can be accessed in your code.
      </p>

      <h3 className="text-xl font-semibold mt-4">Local Variables:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

void myFunction() {
    int localVar = 10;  // Local to this function
    cout << "Local variable: " << localVar << endl;
}

int main() {
    int x = 5;  // Local to main()

    {
        int y = 10;  // Local to this block
        cout << "x: " << x << ", y: " << y << endl;
    }

    // cout << y;  // ERROR! y is not accessible here

    myFunction();
    // cout << localVar;  // ERROR! localVar not accessible here

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Global Variables:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Global variable - accessible throughout the program
int globalCount = 0;

void incrementCount() {
    globalCount++;  // Can access global variable
}

int main() {
    cout << "Initial count: " << globalCount << endl;

    incrementCount();
    incrementCount();

    cout << "Final count: " << globalCount << endl;

    return 0;
}`}
      </pre>

      {/* Static Variables */}
      <h2 className="text-2xl font-bold mt-6">Static Variables</h2>
      <p className="leading-relaxed">
        Static variables retain their value between function calls.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

void countCalls() {
    static int count = 0;  // Initialized only once
    count++;
    cout << "Function called " << count << " times" << endl;
}

int main() {
    countCalls();  // Output: Function called 1 times
    countCalls();  // Output: Function called 2 times
    countCalls();  // Output: Function called 3 times

    return 0;
}`}
      </pre>

      {/* auto keyword */}
      <h2 className="text-2xl font-bold mt-6">Type Inference with auto (C++11)</h2>
      <p className="leading-relaxed">
        The <code className="bg-gray-200 px-1 rounded">auto</code> keyword lets the compiler
        automatically deduce the variable type from its initializer.
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <vector>
using namespace std;

int main() {
    auto x = 42;           // int
    auto y = 3.14;         // double
    auto z = 'A';          // char
    auto name = "John";    // const char*
    auto flag = true;      // bool

    // Useful with complex types
    vector<int> numbers = {1, 2, 3, 4, 5};
    auto it = numbers.begin();  // vector<int>::iterator

    cout << "x = " << x << " (type: int)" << endl;
    cout << "y = " << y << " (type: double)" << endl;

    return 0;
}`}
      </pre>

      {/* Practical Example */}
      <h2 className="text-2xl font-bold mt-6">Practical Example</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

int main() {
    // Personal information using various variable types
    string name = "Alice Johnson";
    int age = 28;
    double height = 5.6;      // in feet
    char bloodGroup = 'O';
    bool isEmployed = true;

    const string COUNTRY = "USA";  // Constant

    // Display information
    cout << "===== Personal Information =====" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << " years" << endl;
    cout << "Height: " << height << " feet" << endl;
    cout << "Blood Group: " << bloodGroup << "+" << endl;
    cout << "Employed: " << (isEmployed ? "Yes" : "No") << endl;
    cout << "Country: " << COUNTRY << endl;

    // Modifying variables
    age = 29;  // Birthday!
    cout << "\\nAfter birthday, Age: " << age << endl;

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Output:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`===== Personal Information =====
Name: Alice Johnson
Age: 28 years
Height: 5.6 feet
Blood Group: O+
Employed: Yes
Country: USA

After birthday, Age: 29`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Always initialize variables before use</li>
          <li>Use meaningful and descriptive variable names</li>
          <li>Use <code className="bg-gray-200 px-1 rounded">const</code> for values that should not change</li>
          <li>Limit variable scope as much as possible</li>
          <li>Avoid global variables when possible</li>
        </ul>
      </div>

      {/* Common Mistakes */}
      <h2 className="text-2xl font-bold mt-6">Common Mistakes to Avoid</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// 1. Using uninitialized variables
int x;
cout << x;  // Undefined behavior - x contains garbage value

// 2. Type mismatch
int age = 25.5;  // Truncates to 25 (data loss)

// 3. Integer overflow
int maxInt = 2147483647;
maxInt = maxInt + 1;  // Overflow! Results in negative number

// 4. Using reserved keywords
// int class = 5;  // ERROR: 'class' is a keyword

// 5. Forgetting scope
if (true) {
    int temp = 100;
}
// cout << temp;  // ERROR: temp is out of scope`}
      </pre>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> Variables are named storage locations that hold data values.
        Always declare variables with an appropriate type, initialize them before use, and follow
        naming conventions for clean, maintainable code. Use <code className="bg-gray-200 px-1 rounded">const</code> for
        values that should not change.
      </div>
    </div>
  );
};

export default Variables;
