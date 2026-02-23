import React from "react";

const KotlinInheritance: React.FC = () => (
  <div className="mt-20 ">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin Inheritance
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      In Kotlin, it is possible to inherit class properties and functions from one class to another. 
      We group the "inheritance concept" into two categories:
    </p>

    <ul className="list-disc list-inside text-lg  mt-2 space-y-1">
      <li><strong>Subclass (child):</strong> the class that inherits from another class</li>
      <li><strong>Superclass (parent):</strong> the class being inherited from</li>
    </ul>

    <p className="text-lg  mt-4">
      In the example below, <code>MyChildClass</code> (subclass) inherits the properties from the <code>MyParentClass</code> (superclass):
    </p>

    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`// Superclass
open class MyParentClass {
  val x = 5
}

// Subclass
class MyChildClass: MyParentClass() {
  fun myFunction() {
    println(x) // x is inherited from the superclass
  }
}

// Create an object of MyChildClass and call myFunction
fun main() {
  val myObj = MyChildClass()
  myObj.myFunction()
}`}</code>
    </pre>

    <p className="text-lg  mt-2">
      <strong>Note:</strong> In Kotlin, the superclass must be marked with the <code>open</code> keyword to allow inheritance. By default, classes are <code>final</code> and cannot be inherited.
    </p>
  </div>
);

export default KotlinInheritance;
