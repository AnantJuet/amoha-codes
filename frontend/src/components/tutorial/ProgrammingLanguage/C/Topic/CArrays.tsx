import React from "react";

const CArrays: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Arrays</h1>

    <p>
      Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.
    </p>

    <p className="mt-3">
      To create an array, define the data type (like <code>int</code>) and specify the name of the array followed by <b>square brackets []</b>.
    </p>

    <h2 className="text-2xl font-bold mt-6">Create an Array</h2>
    <p>
      To insert values to it, use a comma-separated list inside curly braces:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myNumbers[] = {25, 50, 75, 100};`}
    </pre>

    <p className="mt-3">
      We have now created a variable that holds an array of four integers.
    </p>

    <h2 className="text-2xl font-bold mt-6">Access the Elements of an Array</h2>
    <p>
      To access an array element, refer to its <b>index number</b>.
    </p>
    <p className="mt-3">
      Array indexes start with <code>0</code>: [0] is the first element. [1] is the second element, etc.
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myNumbers[] = {25, 50, 75, 100};
printf("%d", myNumbers[0]);  // Outputs 25`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Change an Array Element</h2>
    <p>
      To change the value of a specific element, refer to the index number:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myNumbers[] = {25, 50, 75, 100};
myNumbers[0] = 33;

printf("%d", myNumbers[0]);  // Now outputs 33 instead of 25`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop Through an Array</h2>
    <p>
      You can loop through the array elements with the <code>for</code> loop.
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myNumbers[] = {25, 50, 75, 100};

for (int i = 0; i < 4; i++) {
    printf("%d\\n", myNumbers[i]);
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`25
50
75
100`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Set Array Size</h2>
    <p>
      Another common way to create arrays is to specify the size of the array, and add elements later:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Declare an array of four integers:
int myNumbers[4];

// Add elements
myNumbers[0] = 25;
myNumbers[1] = 50;
myNumbers[2] = 75;
myNumbers[3] = 100;`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Get Array Size/Length</h2>
    <p>
      To get the size of an array, you can use the <code>sizeof</code> operator:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myNumbers[] = {10, 25, 50, 75, 100};
printf("%lu", sizeof(myNumbers));  // Outputs 20 (5 elements * 4 bytes)`}
    </pre>

    <p className="mt-3">
      To find out how many elements an array has, divide the size of the array by the size of the data type:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myNumbers[] = {10, 25, 50, 75, 100};
int length = sizeof(myNumbers) / sizeof(myNumbers[0]);

printf("%d", length);  // Outputs 5`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multidimensional Arrays</h2>
    <p>
      A multidimensional array is basically an array of arrays.
    </p>

    <h3 className="text-xl font-semibold mt-4">Two-Dimensional Arrays</h3>
    <p>
      A 2D array is also known as a matrix (a table of rows and columns).
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int matrix[2][3] = {
    {1, 4, 2},
    {3, 6, 8}
};`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Access Elements in a 2D Array</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };

printf("%d", matrix[0][2]);  // Outputs 2`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Loop Through a 2D Array</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };

for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", matrix[i][j]);
    }
    printf("\\n");
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`1 4 2
3 6 8`}
    </pre>
  </div>
);

export default CArrays;
