import React from "react";

const Polymorphism: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Polymorphism
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Polymorphism</b> means "many forms." In Java, it allows objects to be treated as instances
      of their parent class rather than their actual class. This enables a single interface to
      represent different underlying forms (data types).
    </p>

    <h2 className="text-2xl font-bold mt-6">Types of Polymorphism</h2>
    <ul className="list-disc pl-6 mt-3 space-y-2">
      <li><b>Compile-time (Static):</b> Method Overloading</li>
      <li><b>Runtime (Dynamic):</b> Method Overriding</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Method Overloading</h2>
    <p className="leading-relaxed mt-3">
      Multiple methods with the same name but different parameters in the same class.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Calculator {
    // Method overloading - same name, different parameters

    // Two integers
    public int add(int a, int b) {
        return a + b;
    }

    // Three integers
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // Two doubles
    public double add(double a, double b) {
        return a + b;
    }

    // String concatenation
    public String add(String a, String b) {
        return a + b;
    }
}

// Usage
Calculator calc = new Calculator();
System.out.println(calc.add(5, 3));         // 8 (int version)
System.out.println(calc.add(5, 3, 2));      // 10 (three int version)
System.out.println(calc.add(5.5, 3.2));     // 8.7 (double version)
System.out.println(calc.add("Hello", " World")); // "Hello World"`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
      <p className="font-semibold">Overloading Rules</p>
      <p className="mt-2">
        Methods are overloaded based on the number and type of parameters, NOT on return type.
        You cannot have two methods with the same name and parameters but different return types.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Method Overriding</h2>
    <p className="leading-relaxed mt-3">
      Subclass provides its own implementation of a method defined in the parent class.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`class Animal {
    void makeSound() {
        System.out.println("Some sound");
    }

    void eat() {
        System.out.println("Animal is eating");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow!");
    }
}

// Usage
Animal animal1 = new Dog();
Animal animal2 = new Cat();

animal1.makeSound();  // Woof! Woof! (Dog's version)
animal2.makeSound();  // Meow! (Cat's version)
animal1.eat();        // Animal is eating (inherited)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Runtime Polymorphism</h2>
    <p className="leading-relaxed mt-3">
      The actual method called is determined at runtime based on the object's actual type.
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

    @Override
    void draw() {
        System.out.println("Drawing a circle");
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
        System.out.println("Drawing a rectangle");
    }

    @Override
    double getArea() {
        return width * height;
    }
}

// Polymorphic behavior
Shape[] shapes = {
    new Circle(5),
    new Rectangle(4, 6),
    new Circle(3)
};

for (Shape shape : shapes) {
    shape.draw();
    System.out.println("Area: " + shape.getArea());
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Polymorphism with Interfaces</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`interface Playable {
    void play();
    void stop();
}

class MusicPlayer implements Playable {
    @Override
    public void play() {
        System.out.println("Playing music...");
    }

    @Override
    public void stop() {
        System.out.println("Music stopped");
    }
}

class VideoPlayer implements Playable {
    @Override
    public void play() {
        System.out.println("Playing video...");
    }

    @Override
    public void stop() {
        System.out.println("Video stopped");
    }
}

// Usage
Playable player1 = new MusicPlayer();
Playable player2 = new VideoPlayer();

player1.play();  // Playing music...
player2.play();  // Playing video...`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Overloading vs Overriding</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Feature</th>
            <th className="border p-2">Overloading</th>
            <th className="border p-2">Overriding</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Purpose</td><td className="border p-2">Multiple method variations</td><td className="border p-2">Modify inherited behavior</td></tr>
          <tr><td className="border p-2">Parameters</td><td className="border p-2">Must be different</td><td className="border p-2">Must be same</td></tr>
          <tr><td className="border p-2">Return type</td><td className="border p-2">Can be different</td><td className="border p-2">Must be same or covariant</td></tr>
          <tr><td className="border p-2">Binding</td><td className="border p-2">Compile-time</td><td className="border p-2">Runtime</td></tr>
          <tr><td className="border p-2">Class</td><td className="border p-2">Same class</td><td className="border p-2">Parent-child classes</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Practical Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Payment processing system
abstract class Payment {
    protected double amount;

    public Payment(double amount) {
        this.amount = amount;
    }

    abstract void processPayment();
    abstract String getPaymentType();

    void printReceipt() {
        System.out.println("Payment Type: " + getPaymentType());
        System.out.println("Amount: $" + amount);
        System.out.println("Status: Completed");
    }
}

class CreditCardPayment extends Payment {
    private String cardNumber;

    public CreditCardPayment(double amount, String cardNumber) {
        super(amount);
        this.cardNumber = cardNumber;
    }

    @Override
    void processPayment() {
        System.out.println("Processing credit card payment...");
        // Credit card processing logic
    }

    @Override
    String getPaymentType() {
        return "Credit Card";
    }
}

class PayPalPayment extends Payment {
    private String email;

    public PayPalPayment(double amount, String email) {
        super(amount);
        this.email = email;
    }

    @Override
    void processPayment() {
        System.out.println("Processing PayPal payment...");
        // PayPal processing logic
    }

    @Override
    String getPaymentType() {
        return "PayPal";
    }
}

// Usage - polymorphic processing
Payment[] payments = {
    new CreditCardPayment(100.00, "1234-5678-9012-3456"),
    new PayPalPayment(50.00, "user@example.com")
};

for (Payment payment : payments) {
    payment.processPayment();
    payment.printReceipt();
    System.out.println();
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Use @Override annotation for overridden methods</li>
        <li>Program to interfaces/abstractions, not implementations</li>
        <li>Follow Liskov Substitution Principle</li>
        <li>Use overloading for convenience, not to change behavior</li>
        <li>Keep method signatures consistent across overloaded methods</li>
      </ul>
    </div>
  </div>
);

export default Polymorphism;
