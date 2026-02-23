import React from "react";

const DataTypes: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Data Types in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      Data types in R define the kind of values that variables can hold. Choosing the right data type
      helps optimize memory usage and computation. Unlike some languages, R does not require explicit
      data type declarations while variables can change their type dynamically during execution.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Basic Data Types in R</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Data Type</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Numeric</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Decimal values (default for numbers)</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5.6, 3.14, -2.5</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Integer</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Whole numbers</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5L, 10L, -3L</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Logical</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Boolean values</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">TRUE, FALSE</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Complex</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Complex numbers with imaginary part</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3+2i, 5-4i</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Character</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Text strings</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">"Hello", 'World'</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Raw</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Raw bytes</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">charToRaw("Hello")</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">1. Numeric Data Type</h2>

    <p className="leading-relaxed mt-3">
      Decimal values are called numeric in R. It is the default R data type for numbers.
      Real numbers with a decimal point are represented using this data type.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`x = 5.6
print(class(x))
print(typeof(x))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "numeric"
[1] "double"`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      <b>Note:</b> Even if an integer is assigned to a variable, it is still saved as a numeric value.
      When R stores a number in a variable, it converts the number into a "double" value.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">2. Integer Data Type</h2>

    <p className="leading-relaxed mt-3">
      R supports integer data types which are the set of all integers. We can create as well as
      convert a value into an integer type using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">as.integer()</code> function.
      We can also use the capital 'L' notation as a suffix to denote an integer.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Using L suffix
x <- 5L
print(class(x))

# Using as.integer()
y <- as.integer(3.7)
print(y)
print(class(y))

# Check if integer
print(is.integer(x))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "integer"
[1] 3
[1] "integer"
[1] TRUE`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">3. Logical Data Type</h2>

    <p className="leading-relaxed mt-3">
      R has logical data types that take either a value of TRUE or FALSE.
      A logical value is often created via a comparison between variables.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`x <- TRUE
y <- FALSE
print(class(x))

# Comparison creates logical values
a <- 5
b <- 10
result <- a < b
print(result)
print(class(result))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "logical"
[1] TRUE
[1] "logical"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">4. Complex Data Type</h2>

    <p className="leading-relaxed mt-3">
      R supports complex data types that are set of all the complex numbers.
      The complex data type is used to store numbers with an imaginary component.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`z <- 3 + 2i
print(z)
print(class(z))

# Real and imaginary parts
print(Re(z))  # Real part
print(Im(z))  # Imaginary part`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] 3+2i
[1] "complex"
[1] 3
[1] 2`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">5. Character Data Type</h2>

    <p className="leading-relaxed mt-3">
      R supports character data types where we have all the alphabets and special characters.
      It stores character values or strings. The easiest way to denote that a value is of character
      type is to wrap the value inside single or double quotes.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`character_value <- "Hello Geeks"
print(character_value)
print(class(character_value))

# Single quotes also work
another_string <- 'World'
print(another_string)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Hello Geeks"
[1] "character"
[1] "World"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Finding Data Type of an Object</h2>

    <p className="leading-relaxed mt-3">
      Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">class()</code> to find the class and
      <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">typeof()</code> to find the type of an object.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`x <- 5.6
print(class(x))   # "numeric"
print(typeof(x))  # "double"

y <- 5L
print(class(y))   # "integer"
print(typeof(y))  # "integer"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Type Verification Functions</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`x <- 5L
print(is.integer(x))   # TRUE
print(is.numeric(x))   # TRUE
print(is.character(x)) # FALSE
print(is.logical(x))   # FALSE`}</pre>
    </div>
  </>
);

export default DataTypes;
