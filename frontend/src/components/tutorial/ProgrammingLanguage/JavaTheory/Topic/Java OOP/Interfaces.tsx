import React from "react";

const Interfaces: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Interfaces
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      An <b>interface</b> is a completely abstract type that defines a contract for what a class
      can do, without saying anything about how the class will do it. Interfaces enable multiple
      inheritance of type and are fundamental to polymorphism in Java.
    </p>

    <h2 className="text-2xl font-bold mt-6">Defining an Interface</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Basic interface
public interface Drawable {
    void draw();  // Abstract method (public by default)
}

// Interface with multiple methods
public interface Vehicle {
    void start();
    void stop();
    void accelerate(int speed);
    int getSpeed();
}

// Interface with constants
public interface Constants {
    double PI = 3.14159;      // public static final by default
    int MAX_SIZE = 100;
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Implementing Interfaces</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`interface Animal {
    void makeSound();
    void eat();
}

// Implementing class must provide all method implementations
class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }

    @Override
    public void eat() {
        System.out.println("Dog is eating");
    }

    // Can have additional methods
    public void fetch() {
        System.out.println("Dog is fetching");
    }
}

// Usage
Animal animal = new Dog();
animal.makeSound();  // Woof!
animal.eat();        // Dog is eating
// animal.fetch();   // Error: Animal doesn't have fetch()`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Multiple Interface Implementation</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

interface Walkable {
    void walk();
}

// A class can implement multiple interfaces
class Duck implements Flyable, Swimmable, Walkable {
    @Override
    public void fly() {
        System.out.println("Duck is flying");
    }

    @Override
    public void swim() {
        System.out.println("Duck is swimming");
    }

    @Override
    public void walk() {
        System.out.println("Duck is walking");
    }
}

// Usage
Duck duck = new Duck();
Flyable flyer = duck;
Swimmable swimmer = duck;

flyer.fly();      // Duck is flying
swimmer.swim();   // Duck is swimming`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Default Methods (Java 8+)</h2>
    <p className="leading-relaxed mt-3">
      Interfaces can have methods with default implementations.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`interface Greeting {
    void greet(String name);

    // Default method with implementation
    default void sayHello() {
        System.out.println("Hello!");
    }

    default void sayGoodbye() {
        System.out.println("Goodbye!");
    }
}

class EnglishGreeting implements Greeting {
    @Override
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
    // Inherits default sayHello() and sayGoodbye()
}

class FrenchGreeting implements Greeting {
    @Override
    public void greet(String name) {
        System.out.println("Bonjour, " + name + "!");
    }

    @Override
    public void sayGoodbye() {
        System.out.println("Au revoir!");  // Override default
    }
}

// Usage
Greeting english = new EnglishGreeting();
english.greet("John");   // Hello, John!
english.sayGoodbye();    // Goodbye!

Greeting french = new FrenchGreeting();
french.greet("Jean");    // Bonjour, Jean!
french.sayGoodbye();     // Au revoir!`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Static Methods (Java 8+)</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`interface MathOperations {
    static int add(int a, int b) {
        return a + b;
    }

    static int multiply(int a, int b) {
        return a * b;
    }

    // Abstract method
    int calculate(int a, int b);
}

// Static methods are called on interface, not implementations
int sum = MathOperations.add(5, 3);  // 8
int product = MathOperations.multiply(5, 3);  // 15`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Private Methods (Java 9+)</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`interface Logger {
    void log(String message);

    default void logInfo(String message) {
        log(formatMessage("INFO", message));
    }

    default void logError(String message) {
        log(formatMessage("ERROR", message));
    }

    // Private method - helper for default methods
    private String formatMessage(String level, String message) {
        return "[" + level + "] " + message;
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Interface Inheritance</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`interface Readable {
    void read();
}

interface Writable {
    void write();
}

// Interface extending multiple interfaces
interface ReadWritable extends Readable, Writable {
    void readWrite();
}

class File implements ReadWritable {
    @Override
    public void read() {
        System.out.println("Reading file");
    }

    @Override
    public void write() {
        System.out.println("Writing file");
    }

    @Override
    public void readWrite() {
        System.out.println("Reading and writing file");
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Interface vs Abstract Class</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Feature</th>
            <th className="border p-2">Interface</th>
            <th className="border p-2">Abstract Class</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Multiple inheritance</td><td className="border p-2">Yes</td><td className="border p-2">No</td></tr>
          <tr><td className="border p-2">Instance variables</td><td className="border p-2">Only constants</td><td className="border p-2">Yes</td></tr>
          <tr><td className="border p-2">Constructors</td><td className="border p-2">No</td><td className="border p-2">Yes</td></tr>
          <tr><td className="border p-2">Access modifiers</td><td className="border p-2">Public only</td><td className="border p-2">Any</td></tr>
          <tr><td className="border p-2">Default methods</td><td className="border p-2">Yes (Java 8+)</td><td className="border p-2">Yes</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Functional Interface</h2>
    <p className="leading-relaxed mt-3">
      An interface with exactly one abstract method, used with lambda expressions.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

// Can use lambda expression
Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;

System.out.println(add.calculate(5, 3));       // 8
System.out.println(multiply.calculate(5, 3));  // 15`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Practical Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Payment processing interfaces
interface PaymentProcessor {
    boolean processPayment(double amount);
    String getPaymentType();
}

interface Refundable {
    boolean processRefund(double amount);
}

class CreditCard implements PaymentProcessor, Refundable {
    @Override
    public boolean processPayment(double amount) {
        System.out.println("Processing credit card payment: $" + amount);
        return true;
    }

    @Override
    public String getPaymentType() {
        return "Credit Card";
    }

    @Override
    public boolean processRefund(double amount) {
        System.out.println("Refunding to credit card: $" + amount);
        return true;
    }
}

class Cash implements PaymentProcessor {
    @Override
    public boolean processPayment(double amount) {
        System.out.println("Processing cash payment: $" + amount);
        return true;
    }

    @Override
    public String getPaymentType() {
        return "Cash";
    }
    // Cash doesn't implement Refundable
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Use interfaces for defining contracts/capabilities</li>
        <li>Prefer interfaces over abstract classes for type definitions</li>
        <li>Keep interfaces small and focused (Interface Segregation Principle)</li>
        <li>Use @FunctionalInterface for single-method interfaces</li>
        <li>Document interface contracts clearly</li>
      </ul>
    </div>
  </div>
);

export default Interfaces;
