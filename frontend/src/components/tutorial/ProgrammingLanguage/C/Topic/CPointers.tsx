import React from "react";

const CPointers: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Pointers</h1>

    <h2 className="text-2xl font-bold mt-6">Creating Pointers</h2>
    <p>
      A <b>pointer</b> is a variable that stores the <b>memory address</b> of another variable as its value.
    </p>

    <p className="mt-3">
      A pointer variable points to a data type (like <code>int</code>) of the same type, and is created with the <code>*</code> operator. The address of the variable you are working with is assigned to the pointer:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myAge = 43;     // An int variable
int* ptr = &myAge;  // A pointer variable, with the name ptr, that stores the address of myAge

// Output the value of myAge (43)
printf("%d\\n", myAge);

// Output the memory address of myAge (0x7ffe5367e044)
printf("%p\\n", &myAge);

// Output the memory address of myAge with the pointer (0x7ffe5367e044)
printf("%p\\n", ptr);`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Example Explained</h2>
    <p>
      Create a pointer variable with the name <code>ptr</code>, that <b>points to</b> an <code>int</code> variable (<code>myAge</code>). Note that the type of the pointer has to match the type of the variable you're working with.
    </p>

    <p className="mt-3">
      Use the <code>&</code> operator to store the memory address of the <code>myAge</code> variable, and assign it to the pointer.
    </p>

    <p className="mt-3">
      Now, <code>ptr</code> holds the value of <code>myAge</code>'s memory address.
    </p>

    <h2 className="text-2xl font-bold mt-6">Dereference</h2>
    <p>
      In the example above, we used the pointer variable to get the memory address of a variable (used together with the <code>&</code> <b>reference</b> operator).
    </p>

    <p className="mt-3">
      You can also get the <b>value</b> of the variable the pointer points to, by using the <code>*</code> operator (the <b>dereference</b> operator):
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myAge = 43;     // Variable declaration
int* ptr = &myAge;  // Pointer declaration

// Reference: Output the memory address of myAge with the pointer (0x7ffe5367e044)
printf("%p\\n", ptr);

// Dereference: Output the value of myAge with the pointer (43)
printf("%d\\n", *ptr);`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Why Use Pointers?</h2>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li>Pointers are useful for efficiently passing large data structures to functions</li>
      <li>They enable dynamic memory allocation</li>
      <li>They allow functions to modify variables passed as arguments</li>
      <li>They are essential for creating complex data structures like linked lists, trees, etc.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Pointers and Arrays</h2>
    <p>
      You can also use pointers to access arrays. Consider the following array of integers:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myNumbers[4] = {25, 50, 75, 100};`}
    </pre>

    <p className="mt-3">
      Arrays in C are closely related to pointers. The array name can be used as a pointer to the first element:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myNumbers[4] = {25, 50, 75, 100};

// Get the memory address of the myNumbers array
printf("%p\\n", myNumbers);

// Get the memory address of the first array element
printf("%p\\n", &myNumbers[0]);`}
    </pre>

    <p className="mt-3">
      Both produce the same result! This proves that the array name is a pointer to the first element.
    </p>

    <h2 className="text-2xl font-bold mt-6">Pointer Arithmetic</h2>
    <p>
      You can use pointer arithmetic to access array elements:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myNumbers[4] = {25, 50, 75, 100};
int *ptr = myNumbers;

printf("%d\\n", *ptr);       // 25 (first element)
printf("%d\\n", *(ptr + 1)); // 50 (second element)
printf("%d\\n", *(ptr + 2)); // 75 (third element)
printf("%d\\n", *(ptr + 3)); // 100 (fourth element)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Pointer to Pointer</h2>
    <p>
      A pointer to a pointer is a pointer that holds the address of another pointer:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myAge = 43;
int *ptr = &myAge;
int **ptrToPtr = &ptr;

printf("%d\\n", myAge);       // 43
printf("%p\\n", ptr);         // Address of myAge
printf("%p\\n", ptrToPtr);    // Address of ptr
printf("%d\\n", **ptrToPtr);  // 43 (dereferencing twice)`}
    </pre>
  </div>
);

export default CPointers;
