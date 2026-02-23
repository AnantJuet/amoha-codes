import React from "react";

const ClassesObjects: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Classes and Objects
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Java is an <b>object-oriented programming (OOP)</b> language. A <b>class</b> is a blueprint
      or template for creating objects, while an <b>object</b> is an instance of a class.
      Classes define the properties (attributes) and behaviors (methods) that objects will have.
    </p>

    <h2 className="text-2xl font-bold mt-6">Creating a Class</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Syntax
public class ClassName {
    // Attributes (fields)
    // Methods
}

// Example: Car class
public class Car {
    // Attributes
    String brand;
    String color;
    int year;

    // Method
    void displayInfo() {
        System.out.println(brand + " " + color + " (" + year + ")");
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Creating Objects</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Main {
    public static void main(String[] args) {
        // Create an object of Car
        Car myCar = new Car();

        // Set attributes
        myCar.brand = "Toyota";
        myCar.color = "Red";
        myCar.year = 2023;

        // Call method
        myCar.displayInfo();  // Toyota Red (2023)

        // Create another object
        Car yourCar = new Car();
        yourCar.brand = "Honda";
        yourCar.color = "Blue";
        yourCar.year = 2022;

        yourCar.displayInfo();  // Honda Blue (2022)
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Class Components</h2>

    <h3 className="text-xl font-semibold mt-4">Attributes (Fields)</h3>
    <p className="leading-relaxed mt-2">
      Variables that store the state/data of an object.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Student {
    // Instance variables (attributes)
    String name;
    int age;
    double gpa;

    // Class variable (shared among all instances)
    static int studentCount = 0;

    // Constant
    static final String SCHOOL = "Java Academy";
}`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Methods</h3>
    <p className="leading-relaxed mt-2">
      Functions that define the behavior of objects.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Calculator {
    // Method with no return value
    void greet() {
        System.out.println("Welcome to Calculator!");
    }

    // Method with return value
    int add(int a, int b) {
        return a + b;
    }

    // Method with multiple parameters
    double calculateAverage(double... numbers) {
        double sum = 0;
        for (double num : numbers) {
            sum += num;
        }
        return sum / numbers.length;
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">The this Keyword</h2>
    <p className="leading-relaxed mt-3">
      <code className="bg-gray-200 px-1 rounded">this</code> refers to the current object instance.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Person {
    String name;
    int age;

    // Using 'this' to distinguish between
    // instance variable and parameter
    void setDetails(String name, int age) {
        this.name = name;  // this.name = instance variable
        this.age = age;    // name = parameter
    }

    // Using 'this' to call another method
    void display() {
        this.printName();
        System.out.println("Age: " + this.age);
    }

    void printName() {
        System.out.println("Name: " + this.name);
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Object Reference</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`Car car1 = new Car();
car1.brand = "Toyota";

// car2 references the same object as car1
Car car2 = car1;
car2.brand = "Honda";

System.out.println(car1.brand);  // Honda (same object!)

// To create a separate copy, you need to create a new object
Car car3 = new Car();
car3.brand = car1.brand;  // Copy the value`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Multiple Classes in Files</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// File: Vehicle.java
public class Vehicle {
    String type;

    void start() {
        System.out.println("Vehicle starting...");
    }
}

// File: Main.java
public class Main {
    public static void main(String[] args) {
        Vehicle v = new Vehicle();
        v.type = "Car";
        v.start();
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
      <p className="font-semibold">File Naming Rule</p>
      <p className="mt-2">
        Each public class must be in its own file with the same name as the class.
        A file named <code className="bg-gray-200 px-1 rounded">Car.java</code> must contain
        <code className="bg-gray-200 px-1 rounded">public class Car</code>.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Practical Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class BankAccount {
    // Attributes
    String accountNumber;
    String accountHolder;
    double balance;

    // Methods
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Invalid amount or insufficient funds");
        }
    }

    void displayBalance() {
        System.out.println("Account: " + accountNumber);
        System.out.println("Holder: " + accountHolder);
        System.out.println("Balance: $" + balance);
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        account.accountNumber = "ACC-001";
        account.accountHolder = "John Doe";
        account.balance = 1000.0;

        account.displayBalance();
        account.deposit(500);
        account.withdraw(200);
        account.displayBalance();
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Class vs Object</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Class</th>
            <th className="border p-2">Object</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Blueprint/Template</td><td className="border p-2">Instance of class</td></tr>
          <tr><td className="border p-2">Defines structure</td><td className="border p-2">Has actual values</td></tr>
          <tr><td className="border p-2">Created once</td><td className="border p-2">Created multiple times</td></tr>
          <tr><td className="border p-2">No memory allocated</td><td className="border p-2">Memory allocated</td></tr>
          <tr><td className="border p-2">Logical entity</td><td className="border p-2">Physical entity</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Use PascalCase for class names (e.g., MyClass)</li>
        <li>Use camelCase for method and variable names</li>
        <li>Keep one public class per file</li>
        <li>Use constructors for object initialization</li>
        <li>Encapsulate fields with private access and getters/setters</li>
      </ul>
    </div>
  </div>
);

export default ClassesObjects;
