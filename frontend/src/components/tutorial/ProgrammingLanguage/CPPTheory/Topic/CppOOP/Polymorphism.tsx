import React from "react";

const Polymorphism: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Polymorphism
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Polymorphism means "many forms." It allows objects of different classes to be treated as
        objects of a common base class. The same function call can behave differently based on
        the actual object type, enabling flexible and extensible code.
      </p>

      {/* Types of Polymorphism */}
      <h2 className="text-2xl font-bold mt-6">Types of Polymorphism</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Type</th>
              <th className="text-left px-4 py-2 border">Also Known As</th>
              <th className="text-left px-4 py-2 border">Mechanism</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-semibold">Compile-time</td>
              <td className="px-4 py-2 border">Static / Early Binding</td>
              <td className="px-4 py-2 border">Function & Operator Overloading</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Runtime</td>
              <td className="px-4 py-2 border">Dynamic / Late Binding</td>
              <td className="px-4 py-2 border">Virtual Functions</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Compile-time Polymorphism */}
      <h2 className="text-2xl font-bold mt-6">Compile-time Polymorphism</h2>
      <p className="leading-relaxed">
        The function to call is determined at compile time based on the function signature.
      </p>

      <h3 className="text-xl font-semibold mt-4">Function Overloading:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Calculator {
public:
    // Same function name, different parameters
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
};

int main() {
    Calculator calc;

    cout << "add(5, 3) = " << calc.add(5, 3) << endl;
    cout << "add(2.5, 3.5) = " << calc.add(2.5, 3.5) << endl;
    cout << "add(1, 2, 3) = " << calc.add(1, 2, 3) << endl;

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Operator Overloading:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Complex {
private:
    double real, imag;

public:
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}

    // Overload + operator
    Complex operator+(const Complex &other) const {
        return Complex(real + other.real, imag + other.imag);
    }

    // Overload - operator
    Complex operator-(const Complex &other) const {
        return Complex(real - other.real, imag - other.imag);
    }

    // Overload == operator
    bool operator==(const Complex &other) const {
        return (real == other.real && imag == other.imag);
    }

    // Overload << for output
    friend ostream& operator<<(ostream &out, const Complex &c) {
        out << c.real << " + " << c.imag << "i";
        return out;
    }
};

int main() {
    Complex c1(3, 4);
    Complex c2(1, 2);

    Complex c3 = c1 + c2;
    Complex c4 = c1 - c2;

    cout << "c1 = " << c1 << endl;
    cout << "c2 = " << c2 << endl;
    cout << "c1 + c2 = " << c3 << endl;
    cout << "c1 - c2 = " << c4 << endl;
    cout << "c1 == c2: " << boolalpha << (c1 == c2) << endl;

    return 0;
}`}
      </pre>

      {/* Runtime Polymorphism */}
      <h2 className="text-2xl font-bold mt-6">Runtime Polymorphism</h2>
      <p className="leading-relaxed">
        The function to call is determined at runtime using virtual functions and base class
        pointers/references.
      </p>

      <h3 className="text-xl font-semibold mt-4">Virtual Functions:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() {
        cout << "Drawing a generic shape" << endl;
    }

    virtual double area() {
        return 0;
    }

    // Virtual destructor - important for proper cleanup
    virtual ~Shape() {
        cout << "Shape destructor" << endl;
    }
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) : radius(r) {}

    void draw() override {
        cout << "Drawing a circle with radius " << radius << endl;
    }

    double area() override {
        return 3.14159 * radius * radius;
    }

    ~Circle() {
        cout << "Circle destructor" << endl;
    }
};

class Rectangle : public Shape {
private:
    double width, height;

public:
    Rectangle(double w, double h) : width(w), height(h) {}

    void draw() override {
        cout << "Drawing a rectangle " << width << "x" << height << endl;
    }

    double area() override {
        return width * height;
    }

    ~Rectangle() {
        cout << "Rectangle destructor" << endl;
    }
};

int main() {
    // Base class pointer can point to derived objects
    Shape *shapes[3];
    shapes[0] = new Circle(5);
    shapes[1] = new Rectangle(4, 6);
    shapes[2] = new Circle(3);

    // Polymorphic behavior
    for (int i = 0; i < 3; i++) {
        shapes[i]->draw();          // Calls appropriate draw()
        cout << "Area: " << shapes[i]->area() << endl;
        cout << endl;
    }

    // Clean up
    for (int i = 0; i < 3; i++) {
        delete shapes[i];
    }

    return 0;
}

/*
Output:
Drawing a circle with radius 5
Area: 78.5397

Drawing a rectangle 4x6
Area: 24

Drawing a circle with radius 3
Area: 28.2743

Circle destructor
Shape destructor
Rectangle destructor
Shape destructor
Circle destructor
Shape destructor
*/`}
      </pre>

      {/* Pure Virtual Functions */}
      <h2 className="text-2xl font-bold mt-6">Pure Virtual Functions and Abstract Classes</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

// Abstract class - cannot be instantiated
class Animal {
public:
    // Pure virtual function (= 0)
    virtual void makeSound() = 0;
    virtual void move() = 0;

    // Regular virtual function with implementation
    virtual void eat() {
        cout << "Animal is eating" << endl;
    }

    virtual ~Animal() {}
};

class Dog : public Animal {
public:
    void makeSound() override {
        cout << "Woof! Woof!" << endl;
    }

    void move() override {
        cout << "Dog is running" << endl;
    }
};

class Bird : public Animal {
public:
    void makeSound() override {
        cout << "Tweet! Tweet!" << endl;
    }

    void move() override {
        cout << "Bird is flying" << endl;
    }
};

class Fish : public Animal {
public:
    void makeSound() override {
        cout << "Blub! Blub!" << endl;
    }

    void move() override {
        cout << "Fish is swimming" << endl;
    }
};

int main() {
    // Animal a;  // ERROR! Cannot instantiate abstract class

    Animal *animals[3];
    animals[0] = new Dog();
    animals[1] = new Bird();
    animals[2] = new Fish();

    for (int i = 0; i < 3; i++) {
        animals[i]->makeSound();
        animals[i]->move();
        animals[i]->eat();
        cout << endl;
    }

    for (int i = 0; i < 3; i++) {
        delete animals[i];
    }

    return 0;
}`}
      </pre>

      {/* Virtual Function Table */}
      <h2 className="text-2xl font-bold mt-6">How Virtual Functions Work (vtable)</h2>
      <p className="leading-relaxed">
        When a class has virtual functions, the compiler creates a virtual function table (vtable)
        that stores pointers to the virtual functions. Each object has a hidden pointer (vptr)
        to its class's vtable.
      </p>
      <div className="bg-gray-50 p-4 rounded-lg mt-4 font-mono text-sm">
        <pre>
{`Shape vtable:
+--------+------------------+
| draw   | -> Shape::draw   |
| area   | -> Shape::area   |
+--------+------------------+

Circle vtable:
+--------+------------------+
| draw   | -> Circle::draw  |
| area   | -> Circle::area  |
+--------+------------------+

When you call: shapePtr->draw()
1. Access vptr from object
2. Look up draw in vtable
3. Call the function pointer`}
        </pre>
      </div>

      {/* Practical Example */}
      <h2 className="text-2xl font-bold mt-6">Practical Example: Payment System</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Payment {
protected:
    double amount;

public:
    Payment(double amt) : amount(amt) {}

    virtual void processPayment() = 0;
    virtual string getPaymentType() = 0;

    double getAmount() { return amount; }

    virtual ~Payment() {}
};

class CreditCardPayment : public Payment {
private:
    string cardNumber;

public:
    CreditCardPayment(double amt, string card)
        : Payment(amt), cardNumber(card) {}

    void processPayment() override {
        cout << "Processing credit card payment of $" << amount << endl;
        cout << "Card: ****" << cardNumber.substr(cardNumber.length() - 4) << endl;
    }

    string getPaymentType() override {
        return "Credit Card";
    }
};

class PayPalPayment : public Payment {
private:
    string email;

public:
    PayPalPayment(double amt, string mail)
        : Payment(amt), email(mail) {}

    void processPayment() override {
        cout << "Processing PayPal payment of $" << amount << endl;
        cout << "PayPal Account: " << email << endl;
    }

    string getPaymentType() override {
        return "PayPal";
    }
};

class BankTransfer : public Payment {
private:
    string accountNumber;

public:
    BankTransfer(double amt, string account)
        : Payment(amt), accountNumber(account) {}

    void processPayment() override {
        cout << "Processing bank transfer of $" << amount << endl;
        cout << "Account: ****" << accountNumber.substr(accountNumber.length() - 4) << endl;
    }

    string getPaymentType() override {
        return "Bank Transfer";
    }
};

void processAllPayments(vector<Payment*> &payments) {
    double total = 0;
    for (Payment *p : payments) {
        cout << "\\n--- " << p->getPaymentType() << " ---" << endl;
        p->processPayment();
        total += p->getAmount();
    }
    cout << "\\n=== Total: $" << total << " ===" << endl;
}

int main() {
    vector<Payment*> payments;

    payments.push_back(new CreditCardPayment(100.00, "1234567890123456"));
    payments.push_back(new PayPalPayment(75.50, "user@example.com"));
    payments.push_back(new BankTransfer(250.00, "9876543210"));

    processAllPayments(payments);

    // Cleanup
    for (Payment *p : payments) {
        delete p;
    }

    return 0;
}`}
      </pre>

      {/* Important Keywords */}
      <h2 className="text-2xl font-bold mt-6">Important Keywords</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Keyword</th>
              <th className="text-left px-4 py-2 border">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">virtual</td>
              <td className="px-4 py-2 border">Enables runtime polymorphism</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">override</td>
              <td className="px-4 py-2 border">Explicitly marks function as overriding (C++11)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">final</td>
              <td className="px-4 py-2 border">Prevents further overriding or inheritance</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">= 0</td>
              <td className="px-4 py-2 border">Makes function pure virtual</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Always use virtual destructor in base classes</li>
          <li>Use override keyword when overriding functions</li>
          <li>Prefer pure virtual functions for interfaces</li>
          <li>Use polymorphism to write extensible code</li>
          <li>Avoid calling virtual functions in constructors/destructors</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> Polymorphism enables objects to take multiple forms. Compile-time
        polymorphism uses function/operator overloading, while runtime polymorphism uses virtual
        functions. Virtual functions allow derived classes to override base class behavior,
        enabling flexible and extensible designs.
      </div>
    </div>
  );
};

export default Polymorphism;
