import React from "react";

const KotlinDataTypes: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-3">
      Kotlin Data Types
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      In Kotlin, the type of a variable is decided by its value:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
{`val myNum = 5             // Int
val myDoubleNum = 5.99    // Double
val myLetter = 'D'        // Char
val myBoolean = true      // Boolean
val myText = "Hello"      // String`}
    </pre>

    <p className="text-lg  leading-relaxed mt-6">
      You can also specify the type explicitly if you wish:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
{`val myNum: Int = 5
val myDoubleNum: Double = 5.99
val myLetter: Char = 'D'
val myBoolean: Boolean = true
val myText: String = "Hello"`}
    </pre>

    <h2 className="text-2xl font-bold  mt-8">Numbers</h2>
    <p className="mt-3 ">
      Numbers are divided into two main types: <strong>Integer</strong> and{" "}
      <strong>Floating Point</strong>.
    </p>

    <h3 className="text-xl font-semibold mt-6">Integer Types</h3>

    <p className=" mt-3">
      <strong>Byte</strong> stores whole numbers from -128 to 127:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
{`val myNum: Byte = 100
println(myNum)`}
    </pre>

    <p className=" mt-4">
      <strong>Short</strong> stores numbers from -32768 to 32767:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
{`val myNum: Short = 5000
println(myNum)`}
    </pre>

    <p className=" mt-4">
      <strong>Int</strong> stores numbers from -2147483648 to 2147483647:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
{`val myNum: Int = 100000
println(myNum)`}
    </pre>

    <p className=" mt-4">
      <strong>Long</strong> stores very large numbers and should end with an
      "L":
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
{`val myNum: Long = 15000000000L
println(myNum)`}
    </pre>

    <h3 className="text-xl font-semibold mt-8">Floating Point Types</h3>

    <p className=" mt-3">
      Floating point numbers represent decimals such as 3.14 or 9.99. Kotlin has{" "}
      <strong>Float</strong> and <strong>Double</strong>:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
{`val myNum: Float = 5.75F
println(myNum)

val myDouble: Double = 19.99
println(myDouble)`}
    </pre>

    <p className=" mt-4">
      Double has higher precision (about 15 digits), while Float has around 6–7.
      Use Double when you need accuracy.
    </p>

    <h3 className="text-xl font-semibold mt-8">Scientific Numbers</h3>
    <p className=" mt-3">
      You can also write floating point numbers in scientific notation using “e”
      or “E”:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
{`val myNum1: Float = 35E3F
val myNum2: Double = 12E4
println(myNum1)
println(myNum2)`}
    </pre>

    <h2 className="text-2xl font-bold  mt-8">Booleans</h2>
    <p className=" mt-3">
      Booleans can only take two values: <code>true</code> or{" "}
      <code>false</code>.
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
{`val isKotlinFun: Boolean = true
val isFishTasty: Boolean = false
println(isKotlinFun)
println(isFishTasty)`}
    </pre>

    <h2 className="text-2xl font-bold  mt-8">Characters</h2>
    <p className=" mt-3">
      Characters store a single letter and must be in single quotes:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
{`val myGrade: Char = 'B'
println(myGrade)`}
    </pre>

    <p className=" mt-4">
      Unlike Java, Kotlin does not allow you to use ASCII values directly.
    </p>

    <h2 className="text-2xl font-bold  mt-8">Strings</h2>
    <p className=" mt-3">
      Strings store text and must be enclosed in double quotes:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
{`val myText: String = "Hello World"
println(myText)`}
    </pre>

    <h2 className="text-2xl font-bold  mt-8">Type Conversion</h2>
    <p className=" mt-3">
      Kotlin does not automatically convert between numeric types. You must use
      conversion functions like <code>toInt()</code>, <code>toLong()</code>,{" "}
      <code>toDouble()</code>, etc.
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
{`val x: Int = 5
val y: Long = x.toLong()
println(y)`}
    </pre>
  </div>
);

export default KotlinDataTypes;
