import React from "react";

const Arrays: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Arrays
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      An <b>array</b> is a container object that holds a fixed number of values of a single type.
      The length of an array is established when the array is created and cannot be changed after creation.
    </p>

    <h2 className="text-2xl font-bold mt-6">Declaring Arrays</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Syntax: dataType[] arrayName;
// or: dataType arrayName[];

int[] numbers;         // Preferred style
String[] names;
double scores[];       // Also valid, but not preferred`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Creating Arrays</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Method 1: Declare and allocate separately
int[] numbers;
numbers = new int[5];  // Array of 5 integers

// Method 2: Declare and allocate together
int[] scores = new int[10];  // Array of 10 integers

// Method 3: Initialize with values
int[] ages = {25, 30, 35, 40, 45};

// Method 4: Explicit initialization
String[] fruits = new String[]{"Apple", "Banana", "Cherry"};

// Default values
int[] intArr = new int[3];      // {0, 0, 0}
boolean[] boolArr = new boolean[2];  // {false, false}
String[] strArr = new String[2];     // {null, null}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Accessing Array Elements</h2>
    <p className="leading-relaxed mt-3">
      Array elements are accessed using their index, starting from 0.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int[] numbers = {10, 20, 30, 40, 50};

// Access elements (0-based indexing)
System.out.println(numbers[0]);  // 10 (first element)
System.out.println(numbers[2]);  // 30 (third element)
System.out.println(numbers[4]);  // 50 (last element)

// Modify elements
numbers[1] = 25;  // Change second element to 25

// Array length
System.out.println("Length: " + numbers.length);  // 5

// Access last element
System.out.println("Last: " + numbers[numbers.length - 1]);`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
      <p className="font-semibold">Important!</p>
      <p className="mt-2">
        Accessing an index outside the array bounds throws
        <code className="bg-gray-200 px-1 rounded">ArrayIndexOutOfBoundsException</code>.
        Valid indices are 0 to length-1.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Iterating Over Arrays</h2>

    <h3 className="text-xl font-semibold mt-4">Using for Loop</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int[] numbers = {1, 2, 3, 4, 5};

for (int i = 0; i < numbers.length; i++) {
    System.out.println("Index " + i + ": " + numbers[i]);
}`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Using Enhanced for Loop</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String[] fruits = {"Apple", "Banana", "Cherry"};

for (String fruit : fruits) {
    System.out.println(fruit);
}`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Using Arrays.toString()</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Arrays;

int[] numbers = {1, 2, 3, 4, 5};
System.out.println(Arrays.toString(numbers));
// Output: [1, 2, 3, 4, 5]`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Array Operations</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int[] numbers = {5, 2, 8, 1, 9, 3};

// Find sum
int sum = 0;
for (int num : numbers) {
    sum += num;
}
System.out.println("Sum: " + sum);  // 28

// Find average
double average = (double) sum / numbers.length;
System.out.println("Average: " + average);  // 4.67

// Find maximum
int max = numbers[0];
for (int num : numbers) {
    if (num > max) {
        max = num;
    }
}
System.out.println("Max: " + max);  // 9

// Find minimum
int min = numbers[0];
for (int num : numbers) {
    if (num < min) {
        min = num;
    }
}
System.out.println("Min: " + min);  // 1`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Searching in Arrays</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int[] numbers = {10, 20, 30, 40, 50};
int target = 30;

// Linear search
int index = -1;
for (int i = 0; i < numbers.length; i++) {
    if (numbers[i] == target) {
        index = i;
        break;
    }
}
System.out.println("Index of " + target + ": " + index);  // 2

// Using Arrays.binarySearch (array must be sorted)
import java.util.Arrays;
int binaryIndex = Arrays.binarySearch(numbers, target);
System.out.println("Binary search index: " + binaryIndex);  // 2`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Copying Arrays</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Arrays;

int[] original = {1, 2, 3, 4, 5};

// Method 1: Using Arrays.copyOf()
int[] copy1 = Arrays.copyOf(original, original.length);

// Method 2: Using System.arraycopy()
int[] copy2 = new int[original.length];
System.arraycopy(original, 0, copy2, 0, original.length);

// Method 3: Using clone()
int[] copy3 = original.clone();

// Partial copy
int[] partial = Arrays.copyOfRange(original, 1, 4);
// partial = {2, 3, 4}

// Note: Direct assignment creates reference, not copy
int[] reference = original;  // Both point to same array
reference[0] = 100;          // Changes original too!`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Array as Method Parameter</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class ArrayMethods {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        printArray(numbers);
        System.out.println("Sum: " + calculateSum(numbers));
    }

    // Passing array to method
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    // Returning value from array processing
    public static int calculateSum(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum;
    }

    // Returning array from method
    public static int[] createArray(int size) {
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = i + 1;
        }
        return arr;
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Array Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Type</th>
            <th className="border p-2">Declaration</th>
            <th className="border p-2">Default Value</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">int[]</td><td className="border p-2">new int[5]</td><td className="border p-2">0</td></tr>
          <tr><td className="border p-2">double[]</td><td className="border p-2">new double[5]</td><td className="border p-2">0.0</td></tr>
          <tr><td className="border p-2">boolean[]</td><td className="border p-2">new boolean[5]</td><td className="border p-2">false</td></tr>
          <tr><td className="border p-2">char[]</td><td className="border p-2">new char[5]</td><td className="border p-2">'\u0000'</td></tr>
          <tr><td className="border p-2">String[]</td><td className="border p-2">new String[5]</td><td className="border p-2">null</td></tr>
          <tr><td className="border p-2">Object[]</td><td className="border p-2">new Object[5]</td><td className="border p-2">null</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Key Points</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Arrays have fixed size after creation</li>
        <li>Array indices start at 0</li>
        <li>Use <code className="bg-gray-200 px-1 rounded">length</code> property (not method) to get size</li>
        <li>Arrays are reference types, passed by reference to methods</li>
        <li>Use ArrayList for dynamic-sized arrays</li>
      </ul>
    </div>
  </div>
);

export default Arrays;
