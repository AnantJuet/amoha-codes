import React from "react";

const PointerBasics: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Pointer Basics
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Pointers are variables that store memory addresses. They are one of the most powerful
        features of C++, enabling direct memory manipulation, efficient data handling, and
        dynamic memory allocation.
      </p>

      {/* Why Use Pointers */}
      <h2 className="text-2xl font-bold mt-6">Why Use Pointers?</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Dynamic Memory Allocation:</strong> Create variables at runtime</li>
        <li><strong>Efficient Data Passing:</strong> Pass large data without copying</li>
        <li><strong>Data Structures:</strong> Build linked lists, trees, graphs</li>
        <li><strong>Function Pointers:</strong> Pass functions as arguments</li>
        <li><strong>Array Manipulation:</strong> Navigate arrays efficiently</li>
      </ul>

      {/* Basic Concepts */}
      <h2 className="text-2xl font-bold mt-6">Basic Concepts</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Operator</th>
              <th className="text-left px-4 py-2 border">Name</th>
              <th className="text-left px-4 py-2 border">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">&</td>
              <td className="px-4 py-2 border">Address-of</td>
              <td className="px-4 py-2 border">Gets the memory address of a variable</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">*</td>
              <td className="px-4 py-2 border">Dereference</td>
              <td className="px-4 py-2 border">Gets the value at an address</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">*</td>
              <td className="px-4 py-2 border">Declaration</td>
              <td className="px-4 py-2 border">Declares a pointer variable</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Declaration and Initialization */}
      <h2 className="text-2xl font-bold mt-6">Declaring and Initializing Pointers</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Regular variable
    int num = 42;

    // Pointer declaration and initialization
    int *ptr = &num;  // ptr stores address of num

    // Different syntax styles (all equivalent)
    // int *ptr;
    // int* ptr;
    // int * ptr;

    // Output values
    cout << "Value of num: " << num << endl;
    cout << "Address of num (&num): " << &num << endl;
    cout << "Value of ptr: " << ptr << endl;
    cout << "Value pointed to (*ptr): " << *ptr << endl;

    // Modify value through pointer
    *ptr = 100;  // Changes num to 100
    cout << "\\nAfter *ptr = 100:" << endl;
    cout << "num = " << num << endl;

    return 0;
}

/*
Output:
Value of num: 42
Address of num (&num): 0x7ffd12345678 (example address)
Value of ptr: 0x7ffd12345678
Value pointed to (*ptr): 42

After *ptr = 100:
num = 100
*/`}
      </pre>

      {/* Pointer Types */}
      <h2 className="text-2xl font-bold mt-6">Pointers of Different Types</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Different pointer types
    int intVar = 10;
    double doubleVar = 3.14;
    char charVar = 'A';

    int *intPtr = &intVar;
    double *doublePtr = &doubleVar;
    char *charPtr = &charVar;

    cout << "int pointer: " << *intPtr << endl;
    cout << "double pointer: " << *doublePtr << endl;
    cout << "char pointer: " << *charPtr << endl;

    // Size of pointers (typically same regardless of type)
    cout << "\\nSize of pointers:" << endl;
    cout << "sizeof(int*): " << sizeof(int*) << " bytes" << endl;
    cout << "sizeof(double*): " << sizeof(double*) << " bytes" << endl;
    cout << "sizeof(char*): " << sizeof(char*) << " bytes" << endl;

    return 0;
}`}
      </pre>

      {/* Null Pointers */}
      <h2 className="text-2xl font-bold mt-6">Null Pointers</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Initialize pointer to null
    int *ptr1 = nullptr;    // C++11 (preferred)
    int *ptr2 = NULL;       // C-style
    int *ptr3 = 0;          // Also valid but not recommended

    // Always check before dereferencing
    if (ptr1 != nullptr) {
        cout << *ptr1 << endl;
    } else {
        cout << "ptr1 is null" << endl;
    }

    // Assign valid address later
    int value = 42;
    ptr1 = &value;

    if (ptr1 != nullptr) {
        cout << "ptr1 now points to: " << *ptr1 << endl;
    }

    // Reset to null after use
    ptr1 = nullptr;

    return 0;
}`}
      </pre>

      {/* Pointer and Variables */}
      <h2 className="text-2xl font-bold mt-6">Relationship Between Pointer and Variable</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int *p = &x;

    cout << "Initial values:" << endl;
    cout << "x = " << x << ", *p = " << *p << endl;

    // Changing x affects what p points to
    x = 20;
    cout << "\\nAfter x = 20:" << endl;
    cout << "x = " << x << ", *p = " << *p << endl;

    // Changing *p affects x
    *p = 30;
    cout << "\\nAfter *p = 30:" << endl;
    cout << "x = " << x << ", *p = " << *p << endl;

    // Pointer can point to different variable
    int y = 50;
    p = &y;  // p now points to y
    cout << "\\nAfter p = &y:" << endl;
    cout << "x = " << x << ", y = " << y << ", *p = " << *p << endl;

    return 0;
}

/*
Output:
Initial values:
x = 10, *p = 10

After x = 20:
x = 20, *p = 20

After *p = 30:
x = 30, *p = 30

After p = &y:
x = 30, y = 50, *p = 50
*/`}
      </pre>

      {/* Pointer to Pointer */}
      <h2 className="text-2xl font-bold mt-6">Pointer to Pointer</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int value = 100;
    int *ptr = &value;      // Pointer to int
    int **pptr = &ptr;      // Pointer to pointer to int

    cout << "value = " << value << endl;
    cout << "*ptr = " << *ptr << endl;
    cout << "**pptr = " << **pptr << endl;

    cout << "\\nAddresses:" << endl;
    cout << "&value = " << &value << endl;
    cout << "ptr = " << ptr << endl;
    cout << "&ptr = " << &ptr << endl;
    cout << "pptr = " << pptr << endl;

    // Modify through pointer to pointer
    **pptr = 200;
    cout << "\\nAfter **pptr = 200:" << endl;
    cout << "value = " << value << endl;

    return 0;
}`}
      </pre>

      {/* Const Pointers */}
      <h2 className="text-2xl font-bold mt-6">Const and Pointers</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int x = 10, y = 20;

    // 1. Pointer to const (can't modify value through pointer)
    const int *ptr1 = &x;
    // *ptr1 = 100;  // ERROR! Can't modify value
    ptr1 = &y;       // OK! Can change what it points to

    // 2. Const pointer (can't change what it points to)
    int *const ptr2 = &x;
    *ptr2 = 100;     // OK! Can modify value
    // ptr2 = &y;    // ERROR! Can't change pointer

    // 3. Const pointer to const (can't modify anything)
    const int *const ptr3 = &x;
    // *ptr3 = 100;  // ERROR!
    // ptr3 = &y;    // ERROR!

    cout << "x = " << x << endl;

    // Read from left to right:
    // const int * - pointer to const int
    // int * const - const pointer to int
    // const int * const - const pointer to const int

    return 0;
}`}
      </pre>

      {/* Pointers with Functions */}
      <h2 className="text-2xl font-bold mt-6">Pointers with Functions</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Pass by pointer - can modify original
void increment(int *ptr) {
    (*ptr)++;  // Increment value at address
}

// Swap using pointers
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Function returning pointer
int* getMax(int *a, int *b) {
    return (*a > *b) ? a : b;
}

int main() {
    int num = 10;
    cout << "Before increment: " << num << endl;
    increment(&num);
    cout << "After increment: " << num << endl;

    int x = 5, y = 10;
    cout << "\\nBefore swap: x = " << x << ", y = " << y << endl;
    swap(&x, &y);
    cout << "After swap: x = " << x << ", y = " << y << endl;

    int a = 15, b = 25;
    int *maxPtr = getMax(&a, &b);
    cout << "\\nMax value: " << *maxPtr << endl;

    return 0;
}`}
      </pre>

      {/* Memory Visualization */}
      <h2 className="text-2xl font-bold mt-6">Memory Visualization</h2>
      <div className="bg-gray-50 p-4 rounded-lg mt-4 font-mono text-sm">
        <pre>
{`Memory Layout Example:

Address         Value           Variable
-----------------------------------------
0x1000          42              num
0x1004          0x1000          ptr (points to num)
0x1008          0x1004          pptr (points to ptr)

Accessing values:
num = 42
*ptr = 42 (value at address 0x1000)
**pptr = 42 (value at address pointed to by ptr)`}
        </pre>
      </div>

      {/* Common Mistakes */}
      <h2 className="text-2xl font-bold mt-6">Common Mistakes</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // MISTAKE 1: Uninitialized pointer (wild pointer)
    int *ptr1;  // Contains garbage address
    // *ptr1 = 10;  // DANGEROUS! Undefined behavior

    // FIX: Always initialize
    int *ptr1_safe = nullptr;

    // MISTAKE 2: Dereferencing null pointer
    int *ptr2 = nullptr;
    // cout << *ptr2;  // CRASH! Segmentation fault

    // FIX: Check before dereferencing
    if (ptr2 != nullptr) {
        cout << *ptr2 << endl;
    }

    // MISTAKE 3: Dangling pointer
    int *ptr3;
    {
        int temp = 100;
        ptr3 = &temp;
    }  // temp goes out of scope
    // cout << *ptr3;  // DANGEROUS! temp no longer exists

    // MISTAKE 4: Type mismatch
    double d = 3.14;
    // int *ptr4 = &d;  // ERROR! Type mismatch

    return 0;
}`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Always initialize pointers (use nullptr if no value)</li>
          <li>Check for null before dereferencing</li>
          <li>Use const when you don't need to modify data</li>
          <li>Set pointers to nullptr after freeing memory</li>
          <li>Consider using smart pointers (unique_ptr, shared_ptr) in modern C++</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> Pointers store memory addresses and are essential for advanced
        C++ programming. The & operator gets an address, and the * operator dereferences a pointer.
        Always initialize pointers and check for null to avoid crashes. Understanding pointers is
        crucial for dynamic memory, data structures, and efficient code.
      </div>
    </div>
  );
};

export default PointerBasics;
