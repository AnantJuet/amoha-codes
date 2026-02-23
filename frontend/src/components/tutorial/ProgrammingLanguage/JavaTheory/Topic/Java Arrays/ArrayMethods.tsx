import React from "react";

const ArrayMethods: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Arrays Class Methods
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <code className="bg-gray-200 px-1 rounded">java.util.Arrays</code> class provides numerous
      static methods for manipulating arrays. These methods simplify common array operations like
      sorting, searching, copying, and comparing.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>{`import java.util.Arrays;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">toString() - Print Array</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int[] numbers = {5, 2, 8, 1, 9};

// Without Arrays.toString()
System.out.println(numbers);  // [I@15db9742 (memory address)

// With Arrays.toString()
System.out.println(Arrays.toString(numbers));  // [5, 2, 8, 1, 9]

// For 2D arrays, use deepToString()
int[][] matrix = {{1, 2}, {3, 4}};
System.out.println(Arrays.deepToString(matrix));  // [[1, 2], [3, 4]]`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">sort() - Sort Array</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Sort entire array
int[] numbers = {5, 2, 8, 1, 9, 3};
Arrays.sort(numbers);
System.out.println(Arrays.toString(numbers));  // [1, 2, 3, 5, 8, 9]

// Sort partial array (from index 1 to 4, exclusive)
int[] nums = {5, 2, 8, 1, 9, 3};
Arrays.sort(nums, 1, 5);
System.out.println(Arrays.toString(nums));  // [5, 1, 2, 8, 9, 3]

// Sort strings (alphabetically)
String[] names = {"Charlie", "Alice", "Bob"};
Arrays.sort(names);
System.out.println(Arrays.toString(names));  // [Alice, Bob, Charlie]

// Sort in reverse order
Integer[] arr = {5, 2, 8, 1, 9};
Arrays.sort(arr, Collections.reverseOrder());
System.out.println(Arrays.toString(arr));  // [9, 8, 5, 2, 1]`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">binarySearch() - Search in Sorted Array</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int[] numbers = {1, 2, 3, 5, 8, 9};  // Must be sorted!

// Search for element
int index = Arrays.binarySearch(numbers, 5);
System.out.println("Index of 5: " + index);  // 3

// Element not found (returns negative value)
int notFound = Arrays.binarySearch(numbers, 4);
System.out.println("Index of 4: " + notFound);  // -4
// (-insertionPoint - 1): where it would be inserted

// Search in range (fromIndex, toIndex)
int rangeIndex = Arrays.binarySearch(numbers, 2, 5, 8);
System.out.println("Index of 8: " + rangeIndex);  // 4`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">copyOf() and copyOfRange()</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int[] original = {1, 2, 3, 4, 5};

// Copy entire array
int[] copy1 = Arrays.copyOf(original, original.length);
System.out.println(Arrays.toString(copy1));  // [1, 2, 3, 4, 5]

// Copy with new length (pads with zeros if longer)
int[] copy2 = Arrays.copyOf(original, 8);
System.out.println(Arrays.toString(copy2));  // [1, 2, 3, 4, 5, 0, 0, 0]

// Copy with shorter length (truncates)
int[] copy3 = Arrays.copyOf(original, 3);
System.out.println(Arrays.toString(copy3));  // [1, 2, 3]

// Copy range (from index 1 to 4, exclusive)
int[] range = Arrays.copyOfRange(original, 1, 4);
System.out.println(Arrays.toString(range));  // [2, 3, 4]`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">fill() - Fill Array with Value</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Fill entire array
int[] numbers = new int[5];
Arrays.fill(numbers, 10);
System.out.println(Arrays.toString(numbers));  // [10, 10, 10, 10, 10]

// Fill range (from index 1 to 4, exclusive)
int[] arr = {1, 2, 3, 4, 5};
Arrays.fill(arr, 1, 4, 0);
System.out.println(Arrays.toString(arr));  // [1, 0, 0, 0, 5]

// Fill with different types
boolean[] flags = new boolean[3];
Arrays.fill(flags, true);
System.out.println(Arrays.toString(flags));  // [true, true, true]`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">equals() and deepEquals()</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
int[] c = {1, 2, 4};

// Compare arrays
System.out.println(Arrays.equals(a, b));  // true
System.out.println(Arrays.equals(a, c));  // false

// == compares references, not content
System.out.println(a == b);  // false

// For 2D arrays, use deepEquals()
int[][] matrix1 = {{1, 2}, {3, 4}};
int[][] matrix2 = {{1, 2}, {3, 4}};

System.out.println(Arrays.equals(matrix1, matrix2));      // false
System.out.println(Arrays.deepEquals(matrix1, matrix2));  // true`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">asList() - Convert to List</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Arrays;
import java.util.List;

// Convert array to List
String[] names = {"Alice", "Bob", "Charlie"};
List<String> nameList = Arrays.asList(names);
System.out.println(nameList);  // [Alice, Bob, Charlie]

// Note: The list is fixed-size (backed by array)
// nameList.add("David");  // UnsupportedOperationException

// For modifiable list:
List<String> modifiableList = new ArrayList<>(Arrays.asList(names));
modifiableList.add("David");  // Works!

// For primitive arrays, use boxed types
Integer[] nums = {1, 2, 3};
List<Integer> numList = Arrays.asList(nums);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">stream() - Create Stream from Array</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int[] numbers = {1, 2, 3, 4, 5};

// Sum using stream
int sum = Arrays.stream(numbers).sum();
System.out.println("Sum: " + sum);  // 15

// Average
double avg = Arrays.stream(numbers).average().orElse(0);
System.out.println("Average: " + avg);  // 3.0

// Max and Min
int max = Arrays.stream(numbers).max().orElse(0);
int min = Arrays.stream(numbers).min().orElse(0);

// Filter and collect
int[] evenNumbers = Arrays.stream(numbers)
    .filter(n -> n % 2 == 0)
    .toArray();
System.out.println(Arrays.toString(evenNumbers));  // [2, 4]`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">setAll() and parallelSetAll()</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Set all elements using a function
int[] squares = new int[5];
Arrays.setAll(squares, i -> i * i);
System.out.println(Arrays.toString(squares));  // [0, 1, 4, 9, 16]

// Initialize with index-based values
int[] indexed = new int[5];
Arrays.setAll(indexed, i -> i + 1);
System.out.println(Arrays.toString(indexed));  // [1, 2, 3, 4, 5]

// Parallel version for large arrays
double[] largeArray = new double[1000000];
Arrays.parallelSetAll(largeArray, i -> Math.sqrt(i));`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Method Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Method</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">toString()</td><td className="border p-2">Returns string representation</td></tr>
          <tr><td className="border p-2">sort()</td><td className="border p-2">Sorts array in ascending order</td></tr>
          <tr><td className="border p-2">binarySearch()</td><td className="border p-2">Searches sorted array</td></tr>
          <tr><td className="border p-2">copyOf()</td><td className="border p-2">Copies array to specified length</td></tr>
          <tr><td className="border p-2">copyOfRange()</td><td className="border p-2">Copies specified range</td></tr>
          <tr><td className="border p-2">fill()</td><td className="border p-2">Fills array with value</td></tr>
          <tr><td className="border p-2">equals()</td><td className="border p-2">Compares two arrays</td></tr>
          <tr><td className="border p-2">deepEquals()</td><td className="border p-2">Deep comparison for nested arrays</td></tr>
          <tr><td className="border p-2">asList()</td><td className="border p-2">Converts to fixed-size List</td></tr>
          <tr><td className="border p-2">stream()</td><td className="border p-2">Creates Stream from array</td></tr>
          <tr><td className="border p-2">setAll()</td><td className="border p-2">Sets elements using generator</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Tips</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Always use <code className="bg-gray-200 px-1 rounded">Arrays.toString()</code> for printing arrays</li>
        <li>Array must be sorted before using <code className="bg-gray-200 px-1 rounded">binarySearch()</code></li>
        <li>Use <code className="bg-gray-200 px-1 rounded">deepToString()</code> and <code className="bg-gray-200 px-1 rounded">deepEquals()</code> for multi-dimensional arrays</li>
        <li><code className="bg-gray-200 px-1 rounded">asList()</code> returns fixed-size list; wrap with ArrayList for modifications</li>
      </ul>
    </div>
  </div>
);

export default ArrayMethods;
