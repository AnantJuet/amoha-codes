import React from "react";

const CMemory: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Memory Management</h1>

    <h2 className="text-2xl font-bold mt-6">What is Memory Management?</h2>
    <p>
      Memory management in C allows you to allocate and deallocate memory dynamically during program execution.
      Unlike automatic variables, dynamically allocated memory persists until explicitly freed.
    </p>

    <h2 className="text-2xl font-bold mt-6">Memory Layout</h2>
    <p>A C program's memory is divided into different segments:</p>
    <ul className="list-disc list-inside ml-4 space-y-2">
      <li><strong>Text Segment:</strong> Contains compiled code (read-only)</li>
      <li><strong>Data Segment:</strong> Contains initialized global and static variables</li>
      <li><strong>BSS Segment:</strong> Contains uninitialized global and static variables</li>
      <li><strong>Stack:</strong> Contains local variables and function call information (LIFO)</li>
      <li><strong>Heap:</strong> Used for dynamic memory allocation</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Memory Functions</h2>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Function</th>
          <th className="border border-gray-300 p-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">malloc()</td><td className="border border-gray-300 p-2">Allocates memory, returns uninitialized memory</td></tr>
        <tr><td className="border border-gray-300 p-2">calloc()</td><td className="border border-gray-300 p-2">Allocates memory, initializes to zero</td></tr>
        <tr><td className="border border-gray-300 p-2">realloc()</td><td className="border border-gray-300 p-2">Resizes previously allocated memory</td></tr>
        <tr><td className="border border-gray-300 p-2">free()</td><td className="border border-gray-300 p-2">Deallocates memory</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">malloc() - Memory Allocation</h2>
    <p>Allocates a block of memory of specified size. Memory is not initialized (contains garbage values).</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>
#include <stdlib.h>

int main() {
    // Allocate memory for 5 integers
    int *ptr = (int*) malloc(5 * sizeof(int));

    // Check if allocation was successful
    if (ptr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }

    // Use the memory
    for (int i = 0; i < 5; i++) {
        ptr[i] = i + 1;
        printf("ptr[%d] = %d\\n", i, ptr[i]);
    }

    // Free the memory
    free(ptr);
    ptr = NULL;  // Good practice: set to NULL after freeing

    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">calloc() - Contiguous Allocation</h2>
    <p>Allocates memory for an array of elements and initializes all bytes to zero.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>
#include <stdlib.h>

int main() {
    // Allocate memory for 5 integers, initialized to 0
    int *ptr = (int*) calloc(5, sizeof(int));

    if (ptr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }

    // All values are initialized to 0
    printf("Values after calloc:\\n");
    for (int i = 0; i < 5; i++) {
        printf("ptr[%d] = %d\\n", i, ptr[i]);  // All will be 0
    }

    free(ptr);
    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">realloc() - Resize Memory</h2>
    <p>Changes the size of previously allocated memory block.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>
#include <stdlib.h>

int main() {
    // Initial allocation for 3 integers
    int *ptr = (int*) malloc(3 * sizeof(int));

    ptr[0] = 10;
    ptr[1] = 20;
    ptr[2] = 30;

    // Resize to hold 5 integers
    ptr = (int*) realloc(ptr, 5 * sizeof(int));

    if (ptr == NULL) {
        printf("Reallocation failed!\\n");
        return 1;
    }

    // Add new values
    ptr[3] = 40;
    ptr[4] = 50;

    // Print all values
    for (int i = 0; i < 5; i++) {
        printf("ptr[%d] = %d\\n", i, ptr[i]);
    }

    free(ptr);
    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">malloc vs calloc</h2>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">malloc()</th>
          <th className="border border-gray-300 p-2">calloc()</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-2">Takes 1 argument (total size)</td>
          <td className="border border-gray-300 p-2">Takes 2 arguments (count, size)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Memory contains garbage values</td>
          <td className="border border-gray-300 p-2">Memory is initialized to zero</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Faster (no initialization)</td>
          <td className="border border-gray-300 p-2">Slower (initializes memory)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">malloc(n * sizeof(type))</td>
          <td className="border border-gray-300 p-2">calloc(n, sizeof(type))</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Dynamic Arrays</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    printf("Enter number of elements: ");
    scanf("%d", &n);

    // Create dynamic array
    int *arr = (int*) malloc(n * sizeof(int));

    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }

    // Input values
    printf("Enter %d integers:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Calculate sum
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    printf("Sum: %d\\n", sum);

    free(arr);
    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">2D Dynamic Array</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>
#include <stdlib.h>

int main() {
    int rows = 3, cols = 4;

    // Allocate array of pointers
    int **matrix = (int**) malloc(rows * sizeof(int*));

    // Allocate each row
    for (int i = 0; i < rows; i++) {
        matrix[i] = (int*) malloc(cols * sizeof(int));
    }

    // Initialize and print
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            matrix[i][j] = i * cols + j;
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }

    // Free memory (reverse order)
    for (int i = 0; i < rows; i++) {
        free(matrix[i]);
    }
    free(matrix);

    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Common Memory Errors</h2>
    <ul className="list-disc list-inside ml-4 space-y-2">
      <li><strong>Memory Leak:</strong> Forgetting to free allocated memory</li>
      <li><strong>Dangling Pointer:</strong> Using a pointer after its memory has been freed</li>
      <li><strong>Double Free:</strong> Calling free() twice on the same memory</li>
      <li><strong>Buffer Overflow:</strong> Writing beyond allocated memory bounds</li>
      <li><strong>Using Uninitialized Memory:</strong> Reading from malloc'd memory before setting values</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// 1. Always check allocation result
int *ptr = malloc(size);
if (ptr == NULL) {
    // Handle error
}

// 2. Set pointer to NULL after freeing
free(ptr);
ptr = NULL;

// 3. Don't access freed memory
free(ptr);
// ptr[0] = 5;  // WRONG! Dangling pointer

// 4. Free memory in reverse allocation order
// For nested allocations

// 5. Match malloc/calloc with free
// Don't mix with new/delete (C++)`}
    </pre>
  </div>
);

export default CMemory;
