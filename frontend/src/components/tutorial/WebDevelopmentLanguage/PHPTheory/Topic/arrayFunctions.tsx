import React from "react";

const PhpArrayFunctions: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
        PHP Array Functions
      </h2>

      <p className="leading-relaxed mb-4">
        PHP provides a powerful set of built-in array functions that help you
        create, modify, sort, and manipulate arrays easily. These functions are
        essential when working with data structures in PHP.
      </p>

      <h3 className="text-xl font-medium mb-3">Common Array Functions</h3>

      <p className="leading-relaxed mb-4">
        Below is a list of popular PHP array functions and what they do:
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 text-black dark:text-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="border px-3 py-2">Function</th>
              <th className="border px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["array()", "Creates an array"],
              [
                "array_change_key_case()",
                "Changes all keys in an array to lowercase or uppercase",
              ],
              ["array_chunk()", "Splits an array into chunks"],
              [
                "array_column()",
                "Returns values from a single column in an array",
              ],
              [
                "array_combine()",
                "Creates array using values from one array as keys and another as values",
              ],
              ["array_count_values()", "Counts all the values in an array"],
              ["array_diff()", "Returns differences between arrays (values only)"],
              [
                "array_diff_assoc()",
                "Returns differences between arrays (keys + values)",
              ],
              ["array_fill()", "Fills an array with values"],
              [
                "array_filter()",
                "Filters elements of an array using a callback function",
              ],
              ["array_flip()", "Flips keys and values"],
              ["array_intersect()", "Returns matches (values only)"],
              [
                "array_key_exists()",
                "Checks if a specified key exists in an array",
              ],
              ["array_keys()", "Returns all keys of an array"],
              ["array_map()", "Applies a function to all array elements"],
              ["array_merge()", "Merges arrays"],
              [
                "array_multisort()",
                "Sorts multiple or multi-dimensional arrays",
              ],
              ["array_pop()", "Removes last element from an array"],
              ["array_push()", "Adds elements to the end of an array"],
              ["array_rand()", "Returns one or more random keys"],
              ["array_reduce()", "Reduces array to a single value"],
              ["array_reverse()", "Reverses array order"],
              ["array_search()", "Searches for a value and returns its key"],
              ["array_shift()", "Removes first element of array"],
              ["array_slice()", "Returns selected slice of array"],
              ["array_splice()", "Removes or replaces array elements"],
              ["array_sum()", "Returns sum of array values"],
              [
                "array_unique()",
                "Removes duplicate values from an array",
              ],
              ["count()", "Counts the number of elements"],
              ["in_array()", "Checks if value exists in an array"],
              ["sort()", "Sorts array in ascending order"],
              ["rsort()", "Sorts array in descending order"],
              ["ksort()", "Sorts array by keys (ascending)"],
              ["krsort()", "Sorts array by keys (descending)"],
            ].map(([func, desc], index) => (
              <tr key={index}>
                <td className="border px-3 py-2 font-mono text-blue-600 dark:text-blue-400">
                  {func}
                </td>
                <td className="border px-3 py-2">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-medium mb-3">Example: Counting Array Items</h3>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6 text-sm">
        <p className="font-mono bg-white dark:bg-gray-900 p-2 rounded border text-black dark:text-gray-200">
          $cars = array("Volvo", "BMW", "Toyota"); <br />
          echo count($cars);{" "}
          <span className="text-gray-500 dark:text-gray-400">
            // Outputs: 3
          </span>
        </p>
      </div>

      <p className="leading-relaxed mb-4">
        PHP arrays are extremely powerful because of these built-in functions.
        Mastering them will help you work efficiently with complex data.
      </p>

      <p className="leading-relaxed mb-4 font-semibold">
        For a full list of array functions, visit the official PHP Array
        Reference.
      </p>
    </div>
  );
};

export default PhpArrayFunctions;
