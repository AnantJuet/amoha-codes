import React from "react";

const InputOutput: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Input and Output
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Input and output (I/O) operations are fundamental in any programming language. C++ provides
        two ways to handle I/O: the C++ stream objects (cin/cout) and C-style functions
        (scanf/printf). This tutorial covers both methods.
      </p>

      {/* Standard I/O Streams */}
      <h2 className="text-2xl font-bold mt-6">Standard I/O Streams</h2>
      <p className="leading-relaxed">
        C++ uses stream objects from the <code className="bg-gray-200 px-1 rounded">&lt;iostream&gt;</code> header
        for input and output operations.
      </p>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Stream</th>
              <th className="text-left px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">cin</td>
              <td className="px-4 py-2 border">Standard input stream (keyboard)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">cout</td>
              <td className="px-4 py-2 border">Standard output stream (console)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">cerr</td>
              <td className="px-4 py-2 border">Standard error stream (unbuffered)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">clog</td>
              <td className="px-4 py-2 border">Standard logging stream (buffered)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* cout - Output */}
      <h2 className="text-2xl font-bold mt-6">Output with cout</h2>
      <p className="leading-relaxed">
        The <code className="bg-gray-200 px-1 rounded">cout</code> object is used with the insertion
        operator (<code className="bg-gray-200 px-1 rounded">&lt;&lt;</code>) to display output.
      </p>

      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Basic output
    cout << "Hello, World!" << endl;

    // Multiple values
    cout << "C++ " << "Programming" << endl;

    // Variables
    int age = 25;
    double salary = 50000.50;
    char grade = 'A';

    cout << "Age: " << age << endl;
    cout << "Salary: " << salary << endl;
    cout << "Grade: " << grade << endl;

    // Chaining multiple outputs
    cout << "Name: John" << ", Age: " << 25 << ", City: NYC" << endl;

    // Without endl (no newline)
    cout << "First ";
    cout << "Second ";
    cout << "Third" << endl;

    // Using \\n instead of endl
    cout << "Line 1\\n";
    cout << "Line 2\\n";

    return 0;
}`}
      </pre>

      {/* endl vs \n */}
      <h3 className="text-xl font-semibold mt-4">endl vs \\n</h3>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Feature</th>
              <th className="text-left px-4 py-2 border">endl</th>
              <th className="text-left px-4 py-2 border">\\n</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Newline</td>
              <td className="px-4 py-2 border">Yes</td>
              <td className="px-4 py-2 border">Yes</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Flushes buffer</td>
              <td className="px-4 py-2 border">Yes</td>
              <td className="px-4 py-2 border">No</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Performance</td>
              <td className="px-4 py-2 border">Slower</td>
              <td className="px-4 py-2 border">Faster</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Use case</td>
              <td className="px-4 py-2 border">When immediate output needed</td>
              <td className="px-4 py-2 border">Normal output</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* cin - Input */}
      <h2 className="text-2xl font-bold mt-6">Input with cin</h2>
      <p className="leading-relaxed">
        The <code className="bg-gray-200 px-1 rounded">cin</code> object is used with the extraction
        operator (<code className="bg-gray-200 px-1 rounded">&gt;&gt;</code>) to read input.
      </p>

      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Reading a single value
    int age;
    cout << "Enter your age: ";
    cin >> age;
    cout << "Your age is: " << age << endl;

    // Reading multiple values
    int x, y;
    cout << "Enter two numbers: ";
    cin >> x >> y;
    cout << "Sum: " << (x + y) << endl;

    // Reading different types
    string name;
    double salary;
    cout << "Enter name (single word): ";
    cin >> name;
    cout << "Enter salary: ";
    cin >> salary;
    cout << name << " earns $" << salary << endl;

    // Reading a character
    char choice;
    cout << "Enter a character: ";
    cin >> choice;
    cout << "You entered: " << choice << endl;

    return 0;
}`}
      </pre>

      {/* Reading Strings */}
      <h2 className="text-2xl font-bold mt-6">Reading Strings with Spaces</h2>
      <p className="leading-relaxed">
        <code className="bg-gray-200 px-1 rounded">cin &gt;&gt;</code> stops reading at whitespace.
        Use <code className="bg-gray-200 px-1 rounded">getline()</code> to read entire lines including spaces.
      </p>

      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

int main() {
    string word, fullName, address;

    // cin >> stops at whitespace
    cout << "Enter a single word: ";
    cin >> word;
    cout << "Word: " << word << endl;

    // Clear the input buffer before getline
    cin.ignore();

    // getline reads entire line including spaces
    cout << "Enter your full name: ";
    getline(cin, fullName);
    cout << "Full Name: " << fullName << endl;

    cout << "Enter your address: ";
    getline(cin, address);
    cout << "Address: " << address << endl;

    // Reading with a custom delimiter
    string data;
    cout << "Enter comma-separated text (end with comma): ";
    getline(cin, data, ',');
    cout << "Data before comma: " << data << endl;

    return 0;
}`}
      </pre>

      {/* cin.ignore() and cin.clear() */}
      <h2 className="text-2xl font-bold mt-6">Handling Input Issues</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
#include <limits>
using namespace std;

int main() {
    int number;
    string text;

    // Problem: mixing cin >> and getline()
    cout << "Enter a number: ";
    cin >> number;

    // Without cin.ignore(), getline reads the leftover newline
    cin.ignore();  // Ignore one character (the newline)

    cout << "Enter text: ";
    getline(cin, text);

    cout << "Number: " << number << endl;
    cout << "Text: " << text << endl;

    // Clearing invalid input
    cout << "\\nEnter a number: ";
    if (!(cin >> number)) {
        cout << "Invalid input! Clearing..." << endl;
        cin.clear();  // Clear error flags
        cin.ignore(numeric_limits<streamsize>::max(), '\\n');  // Clear buffer
    }

    return 0;
}`}
      </pre>

      {/* Output Formatting */}
      <h2 className="text-2xl font-bold mt-6">Output Formatting</h2>
      <p className="leading-relaxed">
        Include <code className="bg-gray-200 px-1 rounded">&lt;iomanip&gt;</code> for formatting manipulators.
      </p>

      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // Set width and fill
    cout << setw(10) << 42 << endl;        // Right-aligned, width 10
    cout << setfill('*') << setw(10) << 42 << endl;  // Fill with *

    // Precision for floating-point numbers
    double pi = 3.14159265358979;
    cout << "Default: " << pi << endl;
    cout << "Fixed: " << fixed << setprecision(2) << pi << endl;
    cout << "Scientific: " << scientific << setprecision(4) << pi << endl;

    // Alignment
    cout << left << setfill(' ');
    cout << setw(15) << "Name" << setw(10) << "Age" << setw(10) << "Score" << endl;
    cout << setw(15) << "Alice" << setw(10) << 25 << setw(10) << 95.5 << endl;
    cout << setw(15) << "Bob" << setw(10) << 30 << setw(10) << 88.0 << endl;

    // Number bases
    int num = 255;
    cout << "\\nDecimal: " << dec << num << endl;
    cout << "Hexadecimal: " << hex << num << endl;
    cout << "Octal: " << oct << num << endl;

    // Show base prefix
    cout << showbase;
    cout << "Hex with 0x: " << hex << num << endl;
    cout << "Oct with 0: " << oct << num << endl;

    // Boolean output
    bool flag = true;
    cout << "\\nBoolean (numeric): " << noboolalpha << flag << endl;
    cout << "Boolean (text): " << boolalpha << flag << endl;

    return 0;
}`}
      </pre>

      {/* Formatting Manipulators Table */}
      <h3 className="text-xl font-semibold mt-4">Common Manipulators:</h3>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Manipulator</th>
              <th className="text-left px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">setw(n)</td>
              <td className="px-4 py-2 border">Set field width to n</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">setprecision(n)</td>
              <td className="px-4 py-2 border">Set decimal precision to n</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">setfill(c)</td>
              <td className="px-4 py-2 border">Set fill character to c</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">fixed</td>
              <td className="px-4 py-2 border">Fixed-point notation</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">scientific</td>
              <td className="px-4 py-2 border">Scientific notation</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">left/right</td>
              <td className="px-4 py-2 border">Left/right alignment</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">boolalpha</td>
              <td className="px-4 py-2 border">Print bool as true/false</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">hex/dec/oct</td>
              <td className="px-4 py-2 border">Number base conversion</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* C-Style I/O */}
      <h2 className="text-2xl font-bold mt-6">C-Style I/O (printf and scanf)</h2>
      <p className="leading-relaxed">
        C++ also supports C-style I/O functions from <code className="bg-gray-200 px-1 rounded">&lt;cstdio&gt;</code>.
        These use format specifiers.
      </p>

      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <cstdio>
using namespace std;

int main() {
    // printf - formatted output
    printf("Hello, World!\\n");

    int age = 25;
    double salary = 55000.75;
    char grade = 'A';
    const char* name = "John";

    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
    printf("Salary: %.2f\\n", salary);
    printf("Grade: %c\\n", grade);

    // Multiple values in one printf
    printf("Name: %s, Age: %d, Grade: %c\\n", name, age, grade);

    // Width and precision
    printf("Number: %10d\\n", 42);          // Width 10
    printf("Number: %-10d|\\n", 42);        // Left-aligned
    printf("Number: %010d\\n", 42);         // Zero-padded
    printf("Float: %10.2f\\n", 3.14159);    // Width 10, 2 decimals

    // scanf - formatted input
    int num;
    printf("\\nEnter a number: ");
    scanf("%d", &num);  // Note: & is required!
    printf("You entered: %d\\n", num);

    // Reading multiple values
    int x, y;
    printf("Enter two numbers: ");
    scanf("%d %d", &x, &y);
    printf("Sum: %d\\n", x + y);

    return 0;
}`}
      </pre>

      {/* Format Specifiers */}
      <h3 className="text-xl font-semibold mt-4">Common Format Specifiers:</h3>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Specifier</th>
              <th className="text-left px-4 py-2 border">Type</th>
              <th className="text-left px-4 py-2 border">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">%d or %i</td>
              <td className="px-4 py-2 border">int</td>
              <td className="px-4 py-2 border font-mono">printf("%d", 42)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">%f</td>
              <td className="px-4 py-2 border">float/double</td>
              <td className="px-4 py-2 border font-mono">printf("%f", 3.14)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">%.2f</td>
              <td className="px-4 py-2 border">float with precision</td>
              <td className="px-4 py-2 border font-mono">printf("%.2f", 3.14159)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">%c</td>
              <td className="px-4 py-2 border">char</td>
              <td className="px-4 py-2 border font-mono">printf("%c", 'A')</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">%s</td>
              <td className="px-4 py-2 border">string (char*)</td>
              <td className="px-4 py-2 border font-mono">printf("%s", "Hello")</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">%ld</td>
              <td className="px-4 py-2 border">long</td>
              <td className="px-4 py-2 border font-mono">printf("%ld", 123456L)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">%lld</td>
              <td className="px-4 py-2 border">long long</td>
              <td className="px-4 py-2 border font-mono">printf("%lld", 12345LL)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">%x / %X</td>
              <td className="px-4 py-2 border">Hexadecimal</td>
              <td className="px-4 py-2 border font-mono">printf("%x", 255)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">%o</td>
              <td className="px-4 py-2 border">Octal</td>
              <td className="px-4 py-2 border font-mono">printf("%o", 64)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">%%</td>
              <td className="px-4 py-2 border">Literal %</td>
              <td className="px-4 py-2 border font-mono">printf("%%")</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* cerr and clog */}
      <h2 className="text-2xl font-bold mt-6">Error and Log Streams</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // cerr - Standard error (unbuffered)
    // Use for error messages
    cerr << "Error: Something went wrong!" << endl;

    // clog - Standard log (buffered)
    // Use for logging/debugging
    clog << "Log: Program started" << endl;

    // Example: Error handling
    int divisor = 0;
    if (divisor == 0) {
        cerr << "Error: Division by zero!" << endl;
    }

    // Normal output goes to cout
    cout << "Normal program output" << endl;

    return 0;
}`}
      </pre>

      {/* Practical Example */}
      <h2 className="text-2xl font-bold mt-6">Practical Example: Student Information</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

int main() {
    string name;
    int rollNumber;
    double marks[3];
    double total = 0, average;

    cout << "===== Student Information System =====" << endl;
    cout << endl;

    // Input
    cout << "Enter student name: ";
    getline(cin, name);

    cout << "Enter roll number: ";
    cin >> rollNumber;

    cout << "Enter marks for 3 subjects:" << endl;
    for (int i = 0; i < 3; i++) {
        cout << "  Subject " << (i + 1) << ": ";
        cin >> marks[i];
        total += marks[i];
    }

    average = total / 3;

    // Output with formatting
    cout << endl;
    cout << "======================================" << endl;
    cout << "          Student Report Card         " << endl;
    cout << "======================================" << endl;

    cout << left;
    cout << setw(15) << "Name:" << name << endl;
    cout << setw(15) << "Roll Number:" << rollNumber << endl;
    cout << "--------------------------------------" << endl;

    cout << setw(15) << "Subject" << setw(10) << "Marks" << endl;
    cout << "--------------------------------------" << endl;

    for (int i = 0; i < 3; i++) {
        cout << setw(15) << ("Subject " + to_string(i + 1))
             << setw(10) << fixed << setprecision(1) << marks[i] << endl;
    }

    cout << "--------------------------------------" << endl;
    cout << setw(15) << "Total:" << setw(10) << total << endl;
    cout << setw(15) << "Average:" << setw(10) << average << endl;
    cout << "======================================" << endl;

    // Grade calculation
    char grade;
    if (average >= 90) grade = 'A';
    else if (average >= 80) grade = 'B';
    else if (average >= 70) grade = 'C';
    else if (average >= 60) grade = 'D';
    else grade = 'F';

    cout << "Grade: " << grade << endl;

    return 0;
}`}
      </pre>

      {/* cin vs cout comparison */}
      <h2 className="text-2xl font-bold mt-6">cin/cout vs scanf/printf</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Feature</th>
              <th className="text-left px-4 py-2 border">cin/cout</th>
              <th className="text-left px-4 py-2 border">scanf/printf</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Type Safety</td>
              <td className="px-4 py-2 border">Type-safe</td>
              <td className="px-4 py-2 border">Not type-safe</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Speed</td>
              <td className="px-4 py-2 border">Slightly slower</td>
              <td className="px-4 py-2 border">Faster</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Extensibility</td>
              <td className="px-4 py-2 border">Can overload for custom types</td>
              <td className="px-4 py-2 border">Limited</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Ease of Use</td>
              <td className="px-4 py-2 border">Easier to learn</td>
              <td className="px-4 py-2 border">Format specifiers required</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Error Handling</td>
              <td className="px-4 py-2 border">Better</td>
              <td className="px-4 py-2 border">Manual</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Use <code className="bg-gray-200 px-1 rounded">cin.ignore()</code> after{" "}
              <code className="bg-gray-200 px-1 rounded">cin &gt;&gt;</code> before{" "}
              <code className="bg-gray-200 px-1 rounded">getline()</code></li>
          <li>For competitive programming, use{" "}
              <code className="bg-gray-200 px-1 rounded">ios_base::sync_with_stdio(false)</code> for faster I/O</li>
          <li>Prefer cin/cout for general C++ programming</li>
          <li>Use scanf/printf when performance is critical</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> C++ provides flexible I/O operations through stream objects
        (cin, cout) and C-style functions (scanf, printf). Use getline() for reading strings
        with spaces, and iomanip for formatted output. Understanding both methods gives you
        flexibility in different programming scenarios.
      </div>
    </div>
  );
};

export default InputOutput;
