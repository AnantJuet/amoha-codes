import React from "react";

const ClassesObjects: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Classes and Objects
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Classes and objects are the foundation of Object-Oriented Programming (OOP) in C++.
        A class is a blueprint for creating objects, defining their properties (attributes) and
        behaviors (methods). Objects are instances of classes.
      </p>

      {/* OOP Concepts */}
      <h2 className="text-2xl font-bold mt-6">Key OOP Concepts</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Concept</th>
              <th className="text-left px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-semibold">Class</td>
              <td className="px-4 py-2 border">Blueprint/template for creating objects</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Object</td>
              <td className="px-4 py-2 border">Instance of a class</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Attributes</td>
              <td className="px-4 py-2 border">Data members (variables in a class)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Methods</td>
              <td className="px-4 py-2 border">Member functions (behaviors)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Basic Class Syntax */}
      <h2 className="text-2xl font-bold mt-6">Basic Class Syntax</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`class ClassName {
    // Access specifiers
public:
    // Public members (accessible from outside)

private:
    // Private members (only accessible within class)

protected:
    // Protected members (accessible in derived classes)
};  // Don't forget the semicolon!`}
      </pre>

      {/* First Class Example */}
      <h2 className="text-2xl font-bold mt-6">First Class Example</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

// Define a class
class Car {
public:
    // Attributes (data members)
    string brand;
    string model;
    int year;

    // Method (member function)
    void displayInfo() {
        cout << year << " " << brand << " " << model << endl;
    }
};

int main() {
    // Create objects (instances of Car)
    Car car1;
    car1.brand = "Toyota";
    car1.model = "Camry";
    car1.year = 2022;

    Car car2;
    car2.brand = "Honda";
    car2.model = "Civic";
    car2.year = 2023;

    // Call methods
    cout << "Car 1: ";
    car1.displayInfo();

    cout << "Car 2: ";
    car2.displayInfo();

    return 0;
}

/*
Output:
Car 1: 2022 Toyota Camry
Car 2: 2023 Honda Civic
*/`}
      </pre>

      {/* Access Specifiers */}
      <h2 className="text-2xl font-bold mt-6">Access Specifiers</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Person {
public:
    string name;       // Accessible anywhere

private:
    int age;           // Only accessible within class
    double salary;

protected:
    string id;         // Accessible in derived classes

public:
    // Public methods to access private data
    void setAge(int a) {
        if (a > 0 && a < 150) {
            age = a;
        }
    }

    int getAge() {
        return age;
    }

    void setSalary(double s) {
        if (s >= 0) {
            salary = s;
        }
    }

    double getSalary() {
        return salary;
    }
};

int main() {
    Person p;

    p.name = "John";        // OK - public
    // p.age = 25;          // ERROR - private
    // p.salary = 50000;    // ERROR - private

    p.setAge(25);           // OK - using public method
    p.setSalary(50000);

    cout << "Name: " << p.name << endl;
    cout << "Age: " << p.getAge() << endl;
    cout << "Salary: " << p.getSalary() << endl;

    return 0;
}`}
      </pre>

      {/* Methods Inside and Outside Class */}
      <h2 className="text-2xl font-bold mt-6">Defining Methods Inside and Outside Class</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Rectangle {
private:
    double width;
    double height;

public:
    // Method defined inside class (inline)
    void setDimensions(double w, double h) {
        width = w;
        height = h;
    }

    // Method declaration (defined outside)
    double getArea();
    double getPerimeter();
    void display();
};

// Method definitions outside class using ::
double Rectangle::getArea() {
    return width * height;
}

double Rectangle::getPerimeter() {
    return 2 * (width + height);
}

void Rectangle::display() {
    cout << "Width: " << width << endl;
    cout << "Height: " << height << endl;
    cout << "Area: " << getArea() << endl;
    cout << "Perimeter: " << getPerimeter() << endl;
}

int main() {
    Rectangle rect;
    rect.setDimensions(5.0, 3.0);
    rect.display();

    return 0;
}

/*
Output:
Width: 5
Height: 3
Area: 15
Perimeter: 16
*/`}
      </pre>

      {/* Multiple Objects */}
      <h2 className="text-2xl font-bold mt-6">Working with Multiple Objects</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    int rollNo;
    double marks;

    void input() {
        cout << "Enter name: ";
        getline(cin, name);
        cout << "Enter roll number: ";
        cin >> rollNo;
        cout << "Enter marks: ";
        cin >> marks;
        cin.ignore();  // Clear newline
    }

    void display() {
        cout << "Name: " << name << ", Roll: " << rollNo
             << ", Marks: " << marks << endl;
    }

    char getGrade() {
        if (marks >= 90) return 'A';
        if (marks >= 80) return 'B';
        if (marks >= 70) return 'C';
        if (marks >= 60) return 'D';
        return 'F';
    }
};

int main() {
    // Array of objects
    Student students[3];

    // Input data for each student
    for (int i = 0; i < 3; i++) {
        cout << "\\nStudent " << (i + 1) << ":" << endl;
        students[i].input();
    }

    // Display all students
    cout << "\\n===== Student Records =====" << endl;
    for (int i = 0; i < 3; i++) {
        students[i].display();
        cout << "Grade: " << students[i].getGrade() << endl;
    }

    return 0;
}`}
      </pre>

      {/* this Pointer */}
      <h2 className="text-2xl font-bold mt-6">The this Pointer</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Box {
private:
    double length;
    double width;
    double height;

public:
    // Using 'this' when parameter names match member names
    Box& setLength(double length) {
        this->length = length;
        return *this;  // Return reference for chaining
    }

    Box& setWidth(double width) {
        this->width = width;
        return *this;
    }

    Box& setHeight(double height) {
        this->height = height;
        return *this;
    }

    double getVolume() {
        return length * width * height;
    }

    // Compare with another Box
    bool isLargerThan(Box &other) {
        return this->getVolume() > other.getVolume();
    }
};

int main() {
    Box box1, box2;

    // Method chaining using this
    box1.setLength(5).setWidth(3).setHeight(2);

    box2.setLength(4).setWidth(4).setHeight(4);

    cout << "Box 1 volume: " << box1.getVolume() << endl;
    cout << "Box 2 volume: " << box2.getVolume() << endl;

    if (box1.isLargerThan(box2)) {
        cout << "Box 1 is larger" << endl;
    } else {
        cout << "Box 2 is larger or equal" << endl;
    }

    return 0;
}`}
      </pre>

      {/* Static Members */}
      <h2 className="text-2xl font-bold mt-6">Static Members</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Counter {
private:
    static int count;  // Shared by all objects
    int id;

public:
    Counter() {
        count++;
        id = count;
    }

    static int getCount() {  // Static method
        return count;
    }

    int getId() {
        return id;
    }
};

// Initialize static member outside class
int Counter::count = 0;

int main() {
    cout << "Initial count: " << Counter::getCount() << endl;

    Counter c1;
    cout << "After c1: " << Counter::getCount() << endl;
    cout << "c1 ID: " << c1.getId() << endl;

    Counter c2;
    cout << "After c2: " << Counter::getCount() << endl;
    cout << "c2 ID: " << c2.getId() << endl;

    Counter c3;
    cout << "After c3: " << Counter::getCount() << endl;
    cout << "c3 ID: " << c3.getId() << endl;

    return 0;
}

/*
Output:
Initial count: 0
After c1: 1
c1 ID: 1
After c2: 2
c2 ID: 2
After c3: 3
c3 ID: 3
*/`}
      </pre>

      {/* Complete Example */}
      <h2 className="text-2xl font-bold mt-6">Complete Example: Bank Account</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    string accountNumber;
    string holderName;
    double balance;
    static int totalAccounts;

public:
    // Constructor
    BankAccount(string accNo, string name, double initial = 0) {
        accountNumber = accNo;
        holderName = name;
        balance = initial;
        totalAccounts++;
    }

    // Deposit money
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited: $" << amount << endl;
        } else {
            cout << "Invalid deposit amount" << endl;
        }
    }

    // Withdraw money
    bool withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrawn: $" << amount << endl;
            return true;
        }
        cout << "Insufficient funds or invalid amount" << endl;
        return false;
    }

    // Display account info
    void displayInfo() {
        cout << "\\n===== Account Info =====" << endl;
        cout << "Account Number: " << accountNumber << endl;
        cout << "Holder Name: " << holderName << endl;
        cout << "Balance: $" << balance << endl;
    }

    // Getters
    double getBalance() { return balance; }
    string getAccountNumber() { return accountNumber; }

    // Static method
    static int getTotalAccounts() { return totalAccounts; }
};

int BankAccount::totalAccounts = 0;

int main() {
    BankAccount acc1("ACC001", "Alice Johnson", 1000);
    BankAccount acc2("ACC002", "Bob Smith", 500);

    acc1.displayInfo();
    acc2.displayInfo();

    cout << "\\n--- Transactions ---" << endl;
    acc1.deposit(500);
    acc1.withdraw(200);
    acc2.deposit(1000);
    acc2.withdraw(2000);  // Should fail

    acc1.displayInfo();
    acc2.displayInfo();

    cout << "\\nTotal accounts: " << BankAccount::getTotalAccounts() << endl;

    return 0;
}`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Keep data members private and use getters/setters</li>
          <li>Use meaningful names for classes and members</li>
          <li>Initialize all member variables</li>
          <li>Use const for methods that don't modify object state</li>
          <li>Group related functionality into classes</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> Classes are blueprints that define the structure and behavior of
        objects. They contain data members (attributes) and member functions (methods). Access
        specifiers (public, private, protected) control visibility. Objects are instances of
        classes that hold their own data. Understanding classes and objects is fundamental to
        mastering OOP in C++.
      </div>
    </div>
  );
};

export default ClassesObjects;
