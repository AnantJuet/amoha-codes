import React from "react";

const KotlinClassFunctions: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin Class Functions
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      You can also use functions inside a class to perform certain actions.
    </p>

    <h2 className="text-2xl font-bold mt-6">Example: Class Function</h2>
    <p className="text-lg  mt-2">
      Create a <code>drive()</code> function inside the <code>Car</code> class and call it:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`class Car(var brand: String, var model: String, var year: Int) {
  // Class function
  fun drive() {
    println("Wrooom!")
  }
}

fun main() {
  val c1 = Car("Ford", "Mustang", 1969)
  
  // Call the function
  c1.drive()
}`}</code>
    </pre>

    <p className="text-lg  mt-2">
      <strong>Tip:</strong> When a function is declared inside a class, it is known as a class function or member function.  
      <strong>Note:</strong> When an object of the class is created, it has access to all of the class functions.
    </p>

    <h2 className="text-2xl font-bold mt-6">Class Function Parameters</h2>
    <p className="text-lg  mt-2">
      Just like regular functions, you can pass parameters to a class function.
    </p>

    <h2 className="text-2xl font-bold mt-6">Example: Class Function with Parameters</h2>
    <p className="text-lg  mt-2">
      Create two functions: <code>drive()</code> and <code>speed()</code>, and pass parameters to the <code>speed()</code> function:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`class Car(var brand: String, var model: String, var year: Int) {
  // Class function
  fun drive() {
    println("Wrooom!")
  }
  
  // Class function with parameters
  fun speed(maxSpeed: Int) {
    println("Max speed is: " + maxSpeed)
  }
}

fun main() {
  val c1 = Car("Ford", "Mustang", 1969)
  
  // Call the functions
  c1.drive()
  c1.speed(200)
}`}</code>
    </pre>
  </div>
);

export default KotlinClassFunctions;
