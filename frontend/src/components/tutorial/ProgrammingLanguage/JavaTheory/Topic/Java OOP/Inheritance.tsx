import React from "react";

const Inheritance: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Inheritance
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Inheritance</b> is one of the four pillars of Object-Oriented Programming. It allows a class
      to inherit properties and methods from another class. The class that inherits is called the
      <b> subclass</b> (child class), and the class being inherited from is called the
      <b> superclass</b> (parent class).
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Use Inheritance?</h2>
    <ul className="list-disc pl-6 mt-3 space-y-2">
      <li><b>Code Reusability:</b> Write common code once in the parent class</li>
      <li><b>Method Overriding:</b> Customize inherited behavior in child classes</li>
      <li><b>Hierarchical Classification:</b> Model real-world relationships</li>
      <li><b>Polymorphism:</b> Use parent reference for child objects</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">extends Keyword</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Parent class (Superclass)
class Animal {
    String name;

    void eat() {
        System.out.println(name + " is eating");
    }

    void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Child class (Subclass)
class Dog extends Animal {
    void bark() {
        System.out.println(name + " is barking");
    }
}

// Usage
Dog dog = new Dog();
dog.name = "Buddy";
dog.eat();    // Inherited from Animal
dog.sleep();  // Inherited from Animal
dog.bark();   // Dog's own method`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">The super Keyword</h2>
    <p className="leading-relaxed mt-3">
      <code className="bg-gray-200 px-1 rounded">super</code> refers to the parent class and is used to:
    </p>
    <ul className="list-disc pl-6 mt-2 space-y-1">
      <li>Call parent class constructor</li>
      <li>Access parent class methods</li>
      <li>Access parent class fields</li>
    </ul>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`class Vehicle {
    String brand;
    int year;

    Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    void displayInfo() {
        System.out.println("Brand: " + brand + ", Year: " + year);
    }
}

class Car extends Vehicle {
    int doors;

    Car(String brand, int year, int doors) {
        super(brand, year);  // Call parent constructor
        this.doors = doors;
    }

    @Override
    void displayInfo() {
        super.displayInfo();  // Call parent method
        System.out.println("Doors: " + doors);
    }
}

// Usage
Car car = new Car("Toyota", 2023, 4);
car.displayInfo();
// Output:
// Brand: Toyota, Year: 2023
// Doors: 4`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Method Overriding</h2>
    <p className="leading-relaxed mt-3">
      Child classes can provide their own implementation of inherited methods.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`class Shape {
    void draw() {
        System.out.println("Drawing a shape");
    }

    double getArea() {
        return 0;
    }
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override  // Optional but recommended annotation
    void draw() {
        System.out.println("Drawing a circle with radius " + radius);
    }

    @Override
    double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double width, height;

    Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    void draw() {
        System.out.println("Drawing a " + width + "x" + height + " rectangle");
    }

    @Override
    double getArea() {
        return width * height;
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Types of Inheritance</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Type</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Supported in Java</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Single</td><td className="border p-2">One child, one parent</td><td className="border p-2">Yes</td></tr>
          <tr><td className="border p-2">Multilevel</td><td className="border p-2">A extends B, B extends C</td><td className="border p-2">Yes</td></tr>
          <tr><td className="border p-2">Hierarchical</td><td className="border p-2">Multiple children, one parent</td><td className="border p-2">Yes</td></tr>
          <tr><td className="border p-2">Multiple</td><td className="border p-2">One child, multiple parents</td><td className="border p-2">No (use interfaces)</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-xl font-semibold mt-4">Multilevel Inheritance</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`class Animal {
    void eat() { System.out.println("Eating"); }
}

class Mammal extends Animal {
    void breathe() { System.out.println("Breathing"); }
}

class Dog extends Mammal {
    void bark() { System.out.println("Barking"); }
}

// Dog inherits from both Mammal and Animal
Dog dog = new Dog();
dog.eat();     // From Animal
dog.breathe(); // From Mammal
dog.bark();    // Own method`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">The final Keyword</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Final class cannot be extended
final class MathUtils {
    static double PI = 3.14159;
}
// class ExtendedMath extends MathUtils {}  // Error!

// Final method cannot be overridden
class Parent {
    final void importantMethod() {
        System.out.println("This cannot be overridden");
    }
}

class Child extends Parent {
    // void importantMethod() {}  // Error!
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Practical Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Employee hierarchy
class Employee {
    String name;
    int id;
    double baseSalary;

    Employee(String name, int id, double baseSalary) {
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
    }

    double calculateSalary() {
        return baseSalary;
    }

    void displayInfo() {
        System.out.println("ID: " + id + ", Name: " + name);
        System.out.println("Salary: $" + calculateSalary());
    }
}

class Manager extends Employee {
    double bonus;

    Manager(String name, int id, double baseSalary, double bonus) {
        super(name, id, baseSalary);
        this.bonus = bonus;
    }

    @Override
    double calculateSalary() {
        return baseSalary + bonus;
    }
}

class Developer extends Employee {
    int projectsCompleted;
    double projectBonus;

    Developer(String name, int id, double baseSalary, int projects) {
        super(name, id, baseSalary);
        this.projectsCompleted = projects;
        this.projectBonus = 500;  // $500 per project
    }

    @Override
    double calculateSalary() {
        return baseSalary + (projectsCompleted * projectBonus);
    }
}

// Usage
Employee emp = new Employee("John", 1, 50000);
Manager mgr = new Manager("Alice", 2, 70000, 15000);
Developer dev = new Developer("Bob", 3, 60000, 5);

emp.displayInfo();  // Salary: $50000
mgr.displayInfo();  // Salary: $85000
dev.displayInfo();  // Salary: $62500`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Use inheritance for "is-a" relationships (Dog is an Animal)</li>
        <li>Favor composition over inheritance when possible</li>
        <li>Always call super() explicitly in child constructors</li>
        <li>Use @Override annotation for overridden methods</li>
        <li>Don't extend classes just to reuse code; use composition instead</li>
      </ul>
    </div>
  </div>
);

export default Inheritance;
