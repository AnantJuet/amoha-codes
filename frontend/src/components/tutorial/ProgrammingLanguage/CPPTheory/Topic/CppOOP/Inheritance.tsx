import React from "react";

const Inheritance: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Inheritance
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Inheritance is one of the fundamental pillars of Object-Oriented Programming. It allows
        a class (derived/child class) to inherit properties and behaviors from another class
        (base/parent class), promoting code reuse and establishing a natural hierarchy.
      </p>

      {/* Why Use Inheritance */}
      <h2 className="text-2xl font-bold mt-6">Why Use Inheritance?</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Code Reusability:</strong> Reuse existing code without rewriting</li>
        <li><strong>Hierarchical Classification:</strong> Model real-world relationships</li>
        <li><strong>Extensibility:</strong> Extend functionality of existing classes</li>
        <li><strong>Polymorphism:</strong> Enable runtime behavior changes</li>
      </ul>

      {/* Inheritance Types */}
      <h2 className="text-2xl font-bold mt-6">Types of Inheritance</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Type</th>
              <th className="text-left px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-semibold">Single</td>
              <td className="px-4 py-2 border">One class inherits from one base class</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Multiple</td>
              <td className="px-4 py-2 border">One class inherits from multiple base classes</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Multilevel</td>
              <td className="px-4 py-2 border">Chain of inheritance (A -&gt; B -&gt; C)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Hierarchical</td>
              <td className="px-4 py-2 border">Multiple classes inherit from one base</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Hybrid</td>
              <td className="px-4 py-2 border">Combination of multiple types</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Basic Syntax */}
      <h2 className="text-2xl font-bold mt-6">Basic Syntax</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`class DerivedClass : access_specifier BaseClass {
    // Additional members
};

// Access specifiers:
// public    - public members stay public, protected stay protected
// protected - public and protected become protected
// private   - public and protected become private`}
      </pre>

      {/* Single Inheritance */}
      <h2 className="text-2xl font-bold mt-6">Single Inheritance Example</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

// Base class
class Animal {
protected:
    string name;
    int age;

public:
    Animal(string n, int a) : name(n), age(a) {
        cout << "Animal constructor called" << endl;
    }

    void eat() {
        cout << name << " is eating." << endl;
    }

    void sleep() {
        cout << name << " is sleeping." << endl;
    }

    void displayInfo() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

// Derived class
class Dog : public Animal {
private:
    string breed;

public:
    Dog(string n, int a, string b) : Animal(n, a), breed(b) {
        cout << "Dog constructor called" << endl;
    }

    void bark() {
        cout << name << " says: Woof!" << endl;
    }

    void displayBreed() {
        cout << "Breed: " << breed << endl;
    }
};

int main() {
    Dog myDog("Buddy", 3, "Golden Retriever");

    myDog.displayInfo();  // Inherited from Animal
    myDog.displayBreed(); // Own method
    myDog.eat();          // Inherited from Animal
    myDog.bark();         // Own method

    return 0;
}

/*
Output:
Animal constructor called
Dog constructor called
Name: Buddy, Age: 3
Breed: Golden Retriever
Buddy is eating.
Buddy says: Woof!
*/`}
      </pre>

      {/* Access Specifiers in Inheritance */}
      <h2 className="text-2xl font-bold mt-6">Access Specifiers in Inheritance</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Base Class Member</th>
              <th className="text-left px-4 py-2 border">public Inheritance</th>
              <th className="text-left px-4 py-2 border">protected Inheritance</th>
              <th className="text-left px-4 py-2 border">private Inheritance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">public</td>
              <td className="px-4 py-2 border">public</td>
              <td className="px-4 py-2 border">protected</td>
              <td className="px-4 py-2 border">private</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">protected</td>
              <td className="px-4 py-2 border">protected</td>
              <td className="px-4 py-2 border">protected</td>
              <td className="px-4 py-2 border">private</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">private</td>
              <td className="px-4 py-2 border">Not accessible</td>
              <td className="px-4 py-2 border">Not accessible</td>
              <td className="px-4 py-2 border">Not accessible</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Multilevel Inheritance */}
      <h2 className="text-2xl font-bold mt-6">Multilevel Inheritance</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Vehicle {
protected:
    string brand;
public:
    Vehicle(string b) : brand(b) {
        cout << "Vehicle constructor" << endl;
    }
    void start() { cout << "Vehicle started" << endl; }
};

class Car : public Vehicle {
protected:
    int wheels;
public:
    Car(string b, int w) : Vehicle(b), wheels(w) {
        cout << "Car constructor" << endl;
    }
    void drive() { cout << "Car is driving" << endl; }
};

class SportsCar : public Car {
private:
    int topSpeed;
public:
    SportsCar(string b, int w, int speed) : Car(b, w), topSpeed(speed) {
        cout << "SportsCar constructor" << endl;
    }
    void race() {
        cout << brand << " racing at " << topSpeed << " km/h" << endl;
    }
};

int main() {
    SportsCar myCar("Ferrari", 4, 320);

    myCar.start();  // From Vehicle
    myCar.drive();  // From Car
    myCar.race();   // Own method

    return 0;
}

/*
Output:
Vehicle constructor
Car constructor
SportsCar constructor
Vehicle started
Car is driving
Ferrari racing at 320 km/h
*/`}
      </pre>

      {/* Multiple Inheritance */}
      <h2 className="text-2xl font-bold mt-6">Multiple Inheritance</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Printable {
public:
    virtual void print() = 0;  // Pure virtual
};

class Scannable {
public:
    virtual void scan() = 0;
};

// Multiple inheritance
class AllInOnePrinter : public Printable, public Scannable {
private:
    string model;

public:
    AllInOnePrinter(string m) : model(m) {}

    void print() override {
        cout << model << " is printing..." << endl;
    }

    void scan() override {
        cout << model << " is scanning..." << endl;
    }

    void copy() {
        cout << model << " is copying..." << endl;
    }
};

int main() {
    AllInOnePrinter printer("HP OfficeJet");

    printer.print();
    printer.scan();
    printer.copy();

    return 0;
}`}
      </pre>

      {/* Function Overriding */}
      <h2 className="text-2xl font-bold mt-6">Function Overriding</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() {
        cout << "Drawing a shape" << endl;
    }

    void info() {
        cout << "This is a shape" << endl;
    }
};

class Circle : public Shape {
public:
    void draw() override {  // Override base class method
        cout << "Drawing a circle" << endl;
    }

    void info() {  // Hides base class method (not override)
        cout << "This is a circle" << endl;
    }
};

class Rectangle : public Shape {
public:
    void draw() override {
        cout << "Drawing a rectangle" << endl;
    }
};

int main() {
    Shape shape;
    Circle circle;
    Rectangle rect;

    shape.draw();    // Drawing a shape
    circle.draw();   // Drawing a circle
    rect.draw();     // Drawing a rectangle

    // Using base class pointer (polymorphism)
    Shape *ptr;

    ptr = &circle;
    ptr->draw();     // Drawing a circle (virtual)
    ptr->info();     // This is a shape (not virtual)

    ptr = &rect;
    ptr->draw();     // Drawing a rectangle

    return 0;
}`}
      </pre>

      {/* Constructor and Destructor Order */}
      <h2 className="text-2xl font-bold mt-6">Constructor and Destructor Order</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Base {
public:
    Base() { cout << "Base constructor" << endl; }
    ~Base() { cout << "Base destructor" << endl; }
};

class Derived : public Base {
public:
    Derived() { cout << "Derived constructor" << endl; }
    ~Derived() { cout << "Derived destructor" << endl; }
};

class GrandChild : public Derived {
public:
    GrandChild() { cout << "GrandChild constructor" << endl; }
    ~GrandChild() { cout << "GrandChild destructor" << endl; }
};

int main() {
    cout << "Creating GrandChild object:" << endl;
    GrandChild gc;
    cout << "\\nDestroying object:" << endl;

    return 0;
}

/*
Output:
Creating GrandChild object:
Base constructor
Derived constructor
GrandChild constructor

Destroying object:
GrandChild destructor
Derived destructor
Base destructor
*/`}
      </pre>

      {/* Protected Members */}
      <h2 className="text-2xl font-bold mt-6">Using Protected Members</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class BankAccount {
private:
    string accountNumber;  // Only accessible in this class

protected:
    double balance;        // Accessible in derived classes

public:
    string holderName;     // Accessible everywhere

    BankAccount(string num, string name, double bal)
        : accountNumber(num), holderName(name), balance(bal) {}

    void showBalance() {
        cout << "Balance: $" << balance << endl;
    }
};

class SavingsAccount : public BankAccount {
private:
    double interestRate;

public:
    SavingsAccount(string num, string name, double bal, double rate)
        : BankAccount(num, name, bal), interestRate(rate) {}

    void addInterest() {
        double interest = balance * interestRate;  // Can access protected
        balance += interest;                        // Can modify protected
        cout << "Interest added: $" << interest << endl;
    }

    // Cannot access accountNumber - it's private in base
};

int main() {
    SavingsAccount savings("SA001", "Alice", 1000, 0.05);

    cout << "Holder: " << savings.holderName << endl;
    savings.showBalance();
    savings.addInterest();
    savings.showBalance();

    return 0;
}`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Use public inheritance for "is-a" relationships</li>
          <li>Prefer composition over inheritance when appropriate</li>
          <li>Use virtual destructors in base classes</li>
          <li>Override functions using the override keyword</li>
          <li>Keep inheritance hierarchies shallow</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> Inheritance allows derived classes to inherit properties and
        behaviors from base classes. Use public inheritance for "is-a" relationships. Function
        overriding enables derived classes to provide their own implementations of base class
        methods. Understanding inheritance is essential for effective OOP design.
      </div>
    </div>
  );
};

export default Inheritance;
