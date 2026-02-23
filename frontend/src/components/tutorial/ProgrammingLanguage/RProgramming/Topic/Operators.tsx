import React from "react";

const Operators: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Operators in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      Operators are the symbols directing the compiler to perform various kinds of operations between
      the operands. Operators simulate the various mathematical, logical, and decision operations
      performed on a set of Complex Numbers, Integers, and Numericals as input operands.
    </p>

    <p className="leading-relaxed mt-3">
      R supports majorly four kinds of binary operators between a set of operands.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Arithmetic Operators</h2>

    <p className="leading-relaxed mt-3">
      Arithmetic Operators perform mathematical operations between operands.
      The R operators are performed element-wise at the corresponding positions of vectors.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Operator</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">+</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Addition</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5 + 3 = 8</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Subtraction</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5 - 3 = 2</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">*</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Multiplication</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5 * 3 = 15</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">/</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Division</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">10 / 3 = 3.33</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">^</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Power/Exponent</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2 ^ 3 = 8</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">%%</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Modulo (Remainder)</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">10 %% 3 = 1</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">%/%</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Integer Division</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">10 %/% 3 = 3</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-xl font-bold mt-6">Example: Arithmetic Operations</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`a <- c(1, 0.1)
b <- c(2.33, 4)

# Addition
print(a + b)

# Subtraction
print(a - b)

# Multiplication
print(a * b)

# Division
print(a / b)

# Power
print(a ^ 2)

# Modulo
print(10 %% 3)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] 3.33 4.10
[1] -1.33 -3.90
[1] 2.33 0.40
[1] 0.4291845 0.0250000
[1] 1.00 0.01
[1] 1`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Relational Operators</h2>

    <p className="leading-relaxed mt-3">
      Relational operators are used to compare values and return TRUE or FALSE.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Operator</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">&lt;</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Less than</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5 &lt; 3 = FALSE</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">&gt;</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Greater than</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5 &gt; 3 = TRUE</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">&lt;=</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Less than or equal</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5 &lt;= 5 = TRUE</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">&gt;=</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Greater than or equal</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5 &gt;= 3 = TRUE</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">==</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Equal to</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5 == 5 = TRUE</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">!=</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Not equal to</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5 != 3 = TRUE</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Logical Operators</h2>

    <p className="leading-relaxed mt-3">
      Logical Operators simulate element-wise decision operations, based on the specified operator
      between the operands, which are evaluated to either TRUE or FALSE.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Operator</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">&amp;</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Element-wise Logical AND</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">|</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Element-wise Logical OR</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">!</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Logical NOT</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">&amp;&amp;</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Logical AND (first element only)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">||</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Logical OR (first element only)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-xl font-bold mt-6">Example: Logical Operations</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`x <- c(TRUE, FALSE, TRUE)
y <- c(FALSE, TRUE, TRUE)

# Element-wise AND
print(x & y)

# Element-wise OR
print(x | y)

# NOT
print(!x)

# Logical AND (first element only)
print(x && y)

# Logical OR (first element only)
print(x || y)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] FALSE FALSE  TRUE
[1]  TRUE  TRUE  TRUE
[1] FALSE  TRUE FALSE
[1] FALSE
[1] TRUE`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Assignment Operators</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Operator</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">&lt;-</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Leftward assignment</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">=</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Assignment (equal)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-&gt;</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Rightward assignment</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">&lt;&lt;-</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Global assignment (left)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">-&gt;&gt;</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Global assignment (right)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default Operators;
