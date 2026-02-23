import React from "react";

const KotlinClassesObjects: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin Classes and Objects
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Everything in Kotlin is associated with classes and objects, along with its properties and functions. 
      For example, in real life, a car is an object. The car has properties, such as brand, weight, and color, 
      and functions, such as drive and brake.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is a Class?</h2>
    <p className="text-lg  mt-2">
      A class is like an object constructor, or a "blueprint" for creating objects.
    </p>

    <h2 className="text-2xl font-bold mt-6">Create a Class</h2>
    <p className="text-lg  mt-2">
      To create a class, use the <code>class</code> keyword and specify the name of the class:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`class Car {
  var brand = ""
  var model = ""
  var year = 0
}`}</code>
    </pre>
    <p className="text-lg tmt-2">
      A property is basically a variable that belongs to the class. <br />
      <strong>Good to know:</strong> It is considered good practice to start the name of a class with an uppercase letter for better organization.
    </p>

    <h2 className="text-2xl font-bold mt-6">Create an Object</h2>
    <p className="text-lg mt-2">
      Now we can use the class named <code>Car</code> to create objects. Access the properties using dot syntax (<code>.</code>):
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`// Create a c1 object of the Car class
val c1 = Car()

// Access the properties and assign values
c1.brand = "Ford"
c1.model = "Mustang"
c1.year = 1969

println(c1.brand)   // Outputs Ford
println(c1.model)   // Outputs Mustang
println(c1.year)    // Outputs 1969`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multiple Objects</h2>
    <p className="text-lg mt-2">
      You can create multiple objects of one class:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val c1 = Car()
c1.brand = "Ford"
c1.model = "Mustang"
c1.year = 1969

val c2 = Car()
c2.brand = "BMW"
c2.model = "X5"
c2.year = 1999

println(c1.brand)  // Outputs Ford
println(c2.brand)  // Outputs BMW`}</code>
    </pre>
  </div>
);

export default KotlinClassesObjects;
