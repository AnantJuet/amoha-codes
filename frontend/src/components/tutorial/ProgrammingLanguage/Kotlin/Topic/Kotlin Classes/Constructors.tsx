import React from "react";

const KotlinConstructors: React.FC = () => (
  <div className="mt-20 px-6">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin Constructors
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      In the previous chapter, we created an object of a class and specified the properties inside the class like this:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`class Car {
  var brand = ""
  var model = ""
  var year = 0
}

fun main() {
  val c1 = Car()
  c1.brand = "Ford"
  c1.model = "Mustang"
  c1.year = 1969
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Using a Constructor</h2>
    <p className="text-lg  mt-2">
      In Kotlin, there's a faster way to initialize objects using a constructor. A constructor is like a special function, defined by using parentheses <code>()</code> after the class name. You can specify the properties inside the parentheses, just like passing parameters into a regular function.
    </p>

    <p className="text-lg  mt-2">
      The constructor will initialize the properties when you create an object of a class. Remember to specify the type of each property.
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`class Car(var brand: String, var model: String, var year: Int)

fun main() {
  val c1 = Car("Ford", "Mustang", 1969)
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multiple Objects with Constructor</h2>
    <p className="text-lg  mt-2">
      Now it's even easier to create multiple objects of the same class:
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`class Car(var brand: String, var model: String, var year: Int)

fun main() {
  val c1 = Car("Ford", "Mustang", 1969)
  val c2 = Car("BMW", "X5", 1999)
  val c3 = Car("Tesla", "Model S", 2020)
}`}</code>
    </pre>
  </div>
);

export default KotlinConstructors;
