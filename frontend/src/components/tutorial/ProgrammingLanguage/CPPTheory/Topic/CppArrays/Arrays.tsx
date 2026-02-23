import React from "react";

const Arrays: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Arrays
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        An array is a collection of elements of the same type stored in contiguous memory
        locations. Arrays allow you to store multiple values under a single variable name
        and access them using an index.
      </p>

      {/* Why Use Arrays */}
      <h2 className="text-2xl font-bold mt-6">Why Use Arrays?</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Store multiple values of the same type efficiently</li>
        <li>Access elements quickly using an index</li>
        <li>Process collections of data using loops</li>
        <li>Pass multiple values to functions easily</li>
      </ul>

      {/* Declaration and Initialization */}
      <h2 className="text-2xl font-bold mt-6">Declaration and Initialization</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    // Method 1: Declare, then initialize
    int numbers[5];
    numbers[0] = 10;
    numbers[1] = 20;
    numbers[2] = 30;
    numbers[3] = 40;
    numbers[4] = 50;

    // Method 2: Declare and initialize together
    int arr1[5] = {10, 20, 30, 40, 50};

    // Method 3: Size inferred from initializer
    int arr2[] = {1, 2, 3, 4, 5};  // Size is 5

    // Method 4: Partial initialization (rest are 0)
    int arr3[5] = {1, 2};  // {1, 2, 0, 0, 0}

    // Method 5: Initialize all to zero
    int arr4[5] = {0};     // All elements are 0
    int arr5[5] = {};      // All elements are 0 (C++11)

    // Print array
    cout << "arr1: ";
    for (int i = 0; i < 5; i++) {
        cout << arr1[i] << " ";
    }
    cout << endl;

    return 0;
}`}
      </pre>

      {/* Accessing Elements */}
      <h2 className="text-2xl font-bold mt-6">Accessing Array Elements</h2>
      <p className="leading-relaxed">
        Array indices start at 0. The first element is at index 0, and the last element is at
        index (size - 1).
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int scores[] = {95, 87, 92, 78, 88};

    // Access individual elements
    cout << "First element: " << scores[0] << endl;   // 95
    cout << "Third element: " << scores[2] << endl;   // 92
    cout << "Last element: " << scores[4] << endl;    // 88

    // Modify elements
    scores[1] = 90;  // Change 87 to 90

    // Calculate array size
    int size = sizeof(scores) / sizeof(scores[0]);
    cout << "Array size: " << size << endl;

    // Access with loop
    cout << "All scores: ";
    for (int i = 0; i < size; i++) {
        cout << scores[i] << " ";
    }
    cout << endl;

    return 0;
}`}
      </pre>

      {/* Array Operations */}
      <h2 className="text-2xl font-bold mt-6">Common Array Operations</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int arr[] = {5, 2, 8, 1, 9, 3, 7, 4, 6};
    int size = sizeof(arr) / sizeof(arr[0]);

    // Find sum
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    cout << "Sum: " << sum << endl;

    // Find average
    double avg = (double)sum / size;
    cout << "Average: " << avg << endl;

    // Find maximum
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    cout << "Maximum: " << max << endl;

    // Find minimum
    int min = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    cout << "Minimum: " << min << endl;

    // Linear search
    int target = 7;
    int index = -1;
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            index = i;
            break;
        }
    }
    if (index != -1) {
        cout << target << " found at index " << index << endl;
    }

    return 0;
}`}
      </pre>

      {/* Range-based For Loop */}
      <h2 className="text-2xl font-bold mt-6">Range-based For Loop (C++11)</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int numbers[] = {10, 20, 30, 40, 50};

    // Read elements
    cout << "Elements: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;

    // Modify elements (use reference)
    for (int &num : numbers) {
        num *= 2;  // Double each element
    }

    cout << "After doubling: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;

    // Using auto
    for (auto n : numbers) {
        cout << n << " ";
    }
    cout << endl;

    return 0;
}`}
      </pre>

      {/* Arrays and Functions */}
      <h2 className="text-2xl font-bold mt-6">Passing Arrays to Functions</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Arrays are passed by reference (as pointers)
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Alternative syntax
void printArray2(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Modifying array
void doubleArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2;  // Modifies original array!
    }
}

// Return sum
int getSum(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    int size = 5;

    cout << "Original: ";
    printArray(nums, size);

    doubleArray(nums, size);

    cout << "Doubled: ";
    printArray(nums, size);

    cout << "Sum: " << getSum(nums, size) << endl;

    return 0;
}`}
      </pre>

      {/* Sorting */}
      <h2 className="text-2xl font-bold mt-6">Sorting an Array</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <algorithm>  // For sort()
using namespace std;

// Bubble sort implementation
void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << "Original: ";
    for (int i = 0; i < size; i++) cout << arr[i] << " ";
    cout << endl;

    // Using bubble sort
    bubbleSort(arr, size);

    cout << "Sorted (bubble): ";
    for (int i = 0; i < size; i++) cout << arr[i] << " ";
    cout << endl;

    // Using STL sort (recommended)
    int arr2[] = {5, 2, 8, 1, 9};
    int size2 = 5;

    sort(arr2, arr2 + size2);  // Ascending

    cout << "Sorted (STL): ";
    for (int i = 0; i < size2; i++) cout << arr2[i] << " ";
    cout << endl;

    // Descending order
    sort(arr2, arr2 + size2, greater<int>());

    cout << "Descending: ";
    for (int i = 0; i < size2; i++) cout << arr2[i] << " ";
    cout << endl;

    return 0;
}`}
      </pre>

      {/* Array Memory */}
      <h2 className="text-2xl font-bold mt-6">Array Memory Layout</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};

    cout << "Array elements and their addresses:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "arr[" << i << "] = " << arr[i]
             << " at address " << &arr[i] << endl;
    }

    // Array name is a pointer to first element
    cout << "\\narr (base address): " << arr << endl;
    cout << "&arr[0]: " << &arr[0] << endl;

    // Pointer arithmetic
    cout << "\\n*(arr + 0) = " << *(arr + 0) << endl;  // arr[0]
    cout << "*(arr + 2) = " << *(arr + 2) << endl;  // arr[2]

    return 0;
}`}
      </pre>

      {/* Practical Example */}
      <h2 className="text-2xl font-bold mt-6">Practical Example: Student Grades</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    const int NUM_STUDENTS = 5;
    int grades[NUM_STUDENTS];
    string names[] = {"Alice", "Bob", "Charlie", "Diana", "Eve"};

    // Input grades
    cout << "Enter grades for " << NUM_STUDENTS << " students:" << endl;
    for (int i = 0; i < NUM_STUDENTS; i++) {
        cout << names[i] << ": ";
        cin >> grades[i];
    }

    // Calculate statistics
    int sum = 0, max = grades[0], min = grades[0];
    for (int i = 0; i < NUM_STUDENTS; i++) {
        sum += grades[i];
        if (grades[i] > max) max = grades[i];
        if (grades[i] < min) min = grades[i];
    }
    double avg = (double)sum / NUM_STUDENTS;

    // Display report
    cout << "\\n===== Grade Report =====" << endl;
    cout << fixed << setprecision(2);
    cout << left << setw(10) << "Name" << setw(10) << "Grade" << endl;
    cout << "--------------------" << endl;

    for (int i = 0; i < NUM_STUDENTS; i++) {
        cout << setw(10) << names[i] << setw(10) << grades[i] << endl;
    }

    cout << "--------------------" << endl;
    cout << "Average: " << avg << endl;
    cout << "Highest: " << max << endl;
    cout << "Lowest:  " << min << endl;

    return 0;
}`}
      </pre>

      {/* Common Mistakes */}
      <h2 className="text-2xl font-bold mt-6">Common Mistakes</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// MISTAKE 1: Array index out of bounds
int arr[5] = {1, 2, 3, 4, 5};
// arr[5] = 10;  // ERROR! Valid indices are 0-4
// arr[-1] = 0;  // ERROR! Negative index

// MISTAKE 2: Using sizeof incorrectly
void printSize(int arr[]) {
    // sizeof(arr) gives size of pointer, not array!
    // Always pass size as parameter
}

// MISTAKE 3: Forgetting array size doesn't change
int data[10];
// data.length();  // ERROR! No length method for C arrays
// Use: sizeof(data) / sizeof(data[0])

// MISTAKE 4: Not initializing array
int values[5];  // Contains garbage values!
// Always initialize: int values[5] = {0};

// MISTAKE 5: Array assignment
int a[5] = {1, 2, 3, 4, 5};
int b[5];
// b = a;  // ERROR! Cannot assign arrays
// Use loop or memcpy to copy`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Always initialize arrays before use</li>
          <li>Check array bounds to avoid undefined behavior</li>
          <li>Pass array size as a parameter to functions</li>
          <li>Use range-based for loops when possible</li>
          <li>Consider using std::array or std::vector for safer operations</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> Arrays are fundamental data structures for storing collections
        of elements. They provide fast access via indices but have fixed size. Understanding
        arrays is essential for working with collections of data and forms the foundation for
        understanding more advanced data structures.
      </div>
    </div>
  );
};

export default Arrays;
