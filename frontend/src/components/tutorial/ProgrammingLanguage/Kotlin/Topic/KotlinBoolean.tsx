import React from "react";

const KotlinBoolean: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Kotlin Booleans
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      In programming, you often need a data type that can only have one of two values, like:
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>YES / NO</li>
      <li>ON / OFF</li>
      <li>TRUE / FALSE</li>
    </ul>

    <p className="text-lg leading-relaxed mt-4">
      For this, Kotlin has a <strong>Boolean</strong> data type, which can store either <code>true</code> or <code>false</code>.
    </p>

    <h2 className="text-2xl font-bold mt-8">Boolean Values</h2>
    <p className="mt-3">
      A boolean type is declared with the <code>Boolean</code> keyword and can only take the values <code>true</code> or <code>false</code>:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`val isKotlinFun: Boolean = true
val isFishTasty: Boolean = false

println(isKotlinFun)   // Outputs: true
println(isFishTasty)   // Outputs: false`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Boolean Expression</h2>
    <p className="mt-3">
      A Boolean expression returns a Boolean value: <code>true</code> or <code>false</code>. This is useful for building logic in your programs.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`val x = 10
val y = 9

println(x > y)  // Returns true, because 10 is greater than 9`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Comparison Operators</h2>
    <p className="mt-3">
      You can use comparison operators to evaluate expressions and return Boolean values:
    </p>

    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Operator</th>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">==</td>
          <td className="border border-gray-300 px-4 py-2">Equal to</td>
          <td className="border border-gray-300 px-4 py-2">x == y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">!=</td>
          <td className="border border-gray-300 px-4 py-2">Not equal</td>
          <td className="border border-gray-300 px-4 py-2">x != y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&gt;</td>
          <td className="border border-gray-300 px-4 py-2">Greater than</td>
          <td className="border border-gray-300 px-4 py-2">x &gt; y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&lt;</td>
          <td className="border border-gray-300 px-4 py-2">Less than</td>
          <td className="border border-gray-300 px-4 py-2">x &lt; y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&gt;=</td>
          <td className="border border-gray-300 px-4 py-2">Greater than or equal</td>
          <td className="border border-gray-300 px-4 py-2">x &gt;= y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&lt;=</td>
          <td className="border border-gray-300 px-4 py-2">Less than or equal</td>
          <td className="border border-gray-300 px-4 py-2">x &lt;= y</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Real-Life Example</h2>
    <p className="mt-3">
      Let's think of a real-life example where we need Boolean values - checking if a person is old enough to vote (18 years or older):
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`val myAge = 25
val votingAge = 18

println(myAge >= votingAge)  // Returns true`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Using Booleans in Conditions</h2>
    <p className="mt-3">
      Booleans are the basis for all Kotlin comparisons and conditions. They are commonly used in conditional statements:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`val myAge = 25
val votingAge = 18

if (myAge >= votingAge) {
    println("You are old enough to vote!")
} else {
    println("You are not old enough to vote.")
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Logical Operators</h2>
    <p className="mt-3">
      You can combine multiple Boolean expressions using logical operators:
    </p>

    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Operator</th>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&&</td>
          <td className="border border-gray-300 px-4 py-2">Logical AND</td>
          <td className="border border-gray-300 px-4 py-2">Returns true if both statements are true</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">||</td>
          <td className="border border-gray-300 px-4 py-2">Logical OR</td>
          <td className="border border-gray-300 px-4 py-2">Returns true if one of the statements is true</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">!</td>
          <td className="border border-gray-300 px-4 py-2">Logical NOT</td>
          <td className="border border-gray-300 px-4 py-2">Reverses the result</td>
        </tr>
      </tbody>
    </table>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-4">
{`val x = 5

// Logical AND
println(x > 3 && x < 10)  // true (both conditions are true)

// Logical OR
println(x > 3 || x < 2)   // true (one condition is true)

// Logical NOT
println(!(x > 3 && x < 10))  // false (reverses the result)`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Nullable Booleans</h2>
    <p className="mt-3">
      In Kotlin, you can also have nullable Boolean variables using the <code>?</code> operator:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`var isReady: Boolean? = null

// Check with safe call
if (isReady == true) {
    println("Ready!")
} else {
    println("Not ready or unknown")
}

// Using Elvis operator
val status = isReady ?: false
println(status)  // false`}
    </pre>
  </div>
);

export default KotlinBoolean;
