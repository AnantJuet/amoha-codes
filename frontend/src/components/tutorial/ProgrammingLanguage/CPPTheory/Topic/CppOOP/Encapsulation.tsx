import React from "react";

const Encapsulation: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Encapsulation
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Encapsulation is one of the four fundamental principles of Object-Oriented Programming (OOP).
        It refers to bundling data (attributes) and methods (functions) that operate on that data
        within a single unit (class), while restricting direct access to some of the object's components.
      </p>

      {/* Key Concepts */}
      <h2 className="text-2xl font-bold mt-6">Key Concepts of Encapsulation</h2>
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
              <td className="px-4 py-2 border font-semibold">Data Hiding</td>
              <td className="px-4 py-2 border">Restricting access to internal data of an object</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Access Control</td>
              <td className="px-4 py-2 border">Using public, private, protected specifiers</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Getters</td>
              <td className="px-4 py-2 border">Public methods to read private data</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Setters</td>
              <td className="px-4 py-2 border">Public methods to modify private data with validation</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Why Use Encapsulation */}
      <h2 className="text-2xl font-bold mt-6">Why Use Encapsulation?</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li><strong>Data Protection:</strong> Prevents unauthorized access and modification</li>
        <li><strong>Flexibility:</strong> Change internal implementation without affecting external code</li>
        <li><strong>Validation:</strong> Ensure data integrity through setter methods</li>
        <li><strong>Maintainability:</strong> Easier to update and maintain code</li>
        <li><strong>Debugging:</strong> Easier to track where data is modified</li>
      </ul>

      {/* Basic Example */}
      <h2 className="text-2xl font-bold mt-6">Basic Encapsulation Example</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

class Employee {
private:
    // Private data members - cannot be accessed directly
    string name;
    int age;
    double salary;

public:
    // Setter methods (mutators)
    void setName(string n) {
        if (!n.empty()) {
            name = n;
        }
    }

    void setAge(int a) {
        if (a >= 18 && a <= 65) {
            age = a;
        } else {
            cout << "Invalid age! Must be between 18 and 65." << endl;
        }
    }

    void setSalary(double s) {
        if (s >= 0) {
            salary = s;
        } else {
            cout << "Salary cannot be negative!" << endl;
        }
    }

    // Getter methods (accessors)
    string getName() {
        return name;
    }

    int getAge() {
        return age;
    }

    double getSalary() {
        return salary;
    }

    // Display method
    void displayInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Salary: $" << salary << endl;
    }
};

int main() {
    Employee emp;

    // Cannot access private members directly
    // emp.name = "John";  // ERROR! 'name' is private
    // emp.salary = -1000; // ERROR! 'salary' is private

    // Use public methods instead
    emp.setName("John Smith");
    emp.setAge(30);
    emp.setSalary(50000);

    // Access data through getters
    cout << "Employee: " << emp.getName() << endl;
    cout << "Age: " << emp.getAge() << endl;
    cout << endl;

    // Validation prevents invalid data
    emp.setAge(200);    // Invalid - won't change
    emp.setSalary(-500); // Invalid - won't change

    cout << "\\nEmployee Info:" << endl;
    emp.displayInfo();

    return 0;
}

/*
Output:
Employee: John Smith
Age: 30

Invalid age! Must be between 18 and 65.
Salary cannot be negative!

Employee Info:
Name: John Smith
Age: 30
Salary: $50000
*/`}
      </pre>

      {/* Access Specifiers */}
      <h2 className="text-2xl font-bold mt-6">Access Specifiers in Encapsulation</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Specifier</th>
              <th className="text-left px-4 py-2 border">Access Level</th>
              <th className="text-left px-4 py-2 border">Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">private</td>
              <td className="px-4 py-2 border">Only within the class</td>
              <td className="px-4 py-2 border">Data members (default for class)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">protected</td>
              <td className="px-4 py-2 border">Class and derived classes</td>
              <td className="px-4 py-2 border">Members needed by child classes</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">public</td>
              <td className="px-4 py-2 border">Accessible everywhere</td>
              <td className="px-4 py-2 border">Interface methods (getters/setters)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Complete Encapsulation Example */}
      <h2 className="text-2xl font-bold mt-6">Complete Encapsulation: Bank Account</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    string accountNumber;
    string holderName;
    double balance;
    string pin;
    int failedAttempts;
    bool isLocked;

    // Private helper method
    bool validatePin(string inputPin) {
        if (isLocked) {
            cout << "Account is locked!" << endl;
            return false;
        }
        if (inputPin == pin) {
            failedAttempts = 0;
            return true;
        } else {
            failedAttempts++;
            if (failedAttempts >= 3) {
                isLocked = true;
                cout << "Account locked after 3 failed attempts!" << endl;
            }
            return false;
        }
    }

public:
    // Constructor
    BankAccount(string accNo, string name, string p, double initial = 0)
        : accountNumber(accNo), holderName(name), pin(p),
          balance(initial), failedAttempts(0), isLocked(false) {}

    // Deposit - no PIN needed
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited: $" << amount << endl;
        } else {
            cout << "Invalid deposit amount!" << endl;
        }
    }

    // Withdraw - requires PIN
    bool withdraw(double amount, string inputPin) {
        if (!validatePin(inputPin)) {
            cout << "Invalid PIN!" << endl;
            return false;
        }

        if (amount <= 0) {
            cout << "Invalid withdrawal amount!" << endl;
            return false;
        }

        if (amount > balance) {
            cout << "Insufficient funds!" << endl;
            return false;
        }

        balance -= amount;
        cout << "Withdrawn: $" << amount << endl;
        return true;
    }

    // Check balance - requires PIN
    double getBalance(string inputPin) {
        if (validatePin(inputPin)) {
            return balance;
        }
        cout << "Invalid PIN!" << endl;
        return -1;
    }

    // Change PIN - requires old PIN
    bool changePin(string oldPin, string newPin) {
        if (!validatePin(oldPin)) {
            cout << "Invalid current PIN!" << endl;
            return false;
        }

        if (newPin.length() != 4) {
            cout << "PIN must be 4 digits!" << endl;
            return false;
        }

        pin = newPin;
        cout << "PIN changed successfully!" << endl;
        return true;
    }

    // Get masked account number (for security)
    string getMaskedAccountNumber() {
        if (accountNumber.length() > 4) {
            return "****" + accountNumber.substr(accountNumber.length() - 4);
        }
        return "****";
    }

    // Get holder name
    string getHolderName() {
        return holderName;
    }

    // Unlock account (admin function)
    void unlockAccount(string adminKey) {
        if (adminKey == "ADMIN123") {
            isLocked = false;
            failedAttempts = 0;
            cout << "Account unlocked!" << endl;
        }
    }
};

int main() {
    BankAccount account("1234567890", "Alice Johnson", "1234", 1000);

    cout << "Account Holder: " << account.getHolderName() << endl;
    cout << "Account Number: " << account.getMaskedAccountNumber() << endl;

    // Deposit (no PIN needed)
    account.deposit(500);

    // Check balance (PIN needed)
    cout << "\\nBalance: $" << account.getBalance("1234") << endl;

    // Withdraw
    cout << "\\nWithdrawal attempt:" << endl;
    account.withdraw(200, "1234");
    cout << "New Balance: $" << account.getBalance("1234") << endl;

    // Wrong PIN attempts
    cout << "\\nWrong PIN attempts:" << endl;
    account.withdraw(100, "0000");
    account.withdraw(100, "1111");
    account.withdraw(100, "2222");  // Account gets locked

    // Try after lock
    account.withdraw(100, "1234");  // Won't work - locked

    // Unlock and try again
    account.unlockAccount("ADMIN123");
    cout << "Balance after unlock: $" << account.getBalance("1234") << endl;

    return 0;
}`}
      </pre>

      {/* Const Member Functions */}
      <h2 className="text-2xl font-bold mt-6">Const Member Functions</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

class Rectangle {
private:
    double width;
    double height;

public:
    Rectangle(double w, double h) : width(w), height(h) {}

    // Const getter - doesn't modify object
    double getWidth() const {
        return width;
    }

    double getHeight() const {
        return height;
    }

    // Const method - cannot modify any member
    double getArea() const {
        return width * height;
    }

    double getPerimeter() const {
        return 2 * (width + height);
    }

    // Non-const setters - modifies object
    void setWidth(double w) {
        if (w > 0) width = w;
    }

    void setHeight(double h) {
        if (h > 0) height = h;
    }

    // Const method for display
    void display() const {
        cout << "Width: " << width << ", Height: " << height << endl;
        cout << "Area: " << getArea() << ", Perimeter: " << getPerimeter() << endl;
    }
};

// Function that takes const reference
void printRectangle(const Rectangle &rect) {
    // Can only call const methods
    cout << "Rectangle dimensions: ";
    rect.display();  // OK - display() is const
    // rect.setWidth(10);  // ERROR - setWidth is not const
}

int main() {
    Rectangle rect(5, 3);
    rect.display();

    printRectangle(rect);

    // Const object can only use const methods
    const Rectangle constRect(4, 6);
    cout << "\\nConst rectangle area: " << constRect.getArea() << endl;
    // constRect.setWidth(10);  // ERROR - can't modify const object

    return 0;
}`}
      </pre>

      {/* Friend Functions */}
      <h2 className="text-2xl font-bold mt-6">Friend Functions and Encapsulation</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Box {
private:
    double length;
    double width;
    double height;

public:
    Box(double l, double w, double h) : length(l), width(w), height(h) {}

    // Friend function declaration - can access private members
    friend double calculateVolume(const Box &b);
    friend void displayBox(const Box &b);

    // Friend class declaration
    friend class BoxPrinter;
};

// Friend function definition - can access private members
double calculateVolume(const Box &b) {
    return b.length * b.width * b.height;
}

void displayBox(const Box &b) {
    cout << "Box: " << b.length << " x " << b.width << " x " << b.height << endl;
}

// Friend class - can access all private members of Box
class BoxPrinter {
public:
    void printDetails(const Box &b) {
        cout << "\\nDetailed Box Info:" << endl;
        cout << "Length: " << b.length << endl;
        cout << "Width: " << b.width << endl;
        cout << "Height: " << b.height << endl;
        cout << "Volume: " << b.length * b.width * b.height << endl;
    }
};

int main() {
    Box box(5, 4, 3);

    // Using friend function
    displayBox(box);
    cout << "Volume: " << calculateVolume(box) << endl;

    // Using friend class
    BoxPrinter printer;
    printer.printDetails(box);

    return 0;
}

/*
Note: Friend functions break encapsulation to some extent,
so use them sparingly and only when necessary.
*/`}
      </pre>

      {/* Property Pattern */}
      <h2 className="text-2xl font-bold mt-6">Property-like Pattern</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
#include <cmath>
using namespace std;

class Temperature {
private:
    double celsius;

public:
    Temperature(double c = 0) : celsius(c) {}

    // Celsius getter/setter
    double getCelsius() const { return celsius; }
    void setCelsius(double c) { celsius = c; }

    // Fahrenheit (computed property)
    double getFahrenheit() const {
        return (celsius * 9.0 / 5.0) + 32;
    }

    void setFahrenheit(double f) {
        celsius = (f - 32) * 5.0 / 9.0;
    }

    // Kelvin (computed property)
    double getKelvin() const {
        return celsius + 273.15;
    }

    void setKelvin(double k) {
        celsius = k - 273.15;
    }
};

class Circle {
private:
    double radius;

public:
    Circle(double r = 1) : radius(r > 0 ? r : 1) {}

    // Radius
    double getRadius() const { return radius; }
    void setRadius(double r) {
        if (r > 0) radius = r;
    }

    // Diameter (computed)
    double getDiameter() const { return 2 * radius; }
    void setDiameter(double d) {
        if (d > 0) radius = d / 2;
    }

    // Area (read-only computed)
    double getArea() const {
        return M_PI * radius * radius;
    }

    // Circumference (read-only computed)
    double getCircumference() const {
        return 2 * M_PI * radius;
    }
};

int main() {
    // Temperature conversion
    Temperature temp;
    temp.setCelsius(100);
    cout << "100 C = " << temp.getFahrenheit() << " F" << endl;
    cout << "100 C = " << temp.getKelvin() << " K" << endl;

    temp.setFahrenheit(32);
    cout << "\\n32 F = " << temp.getCelsius() << " C" << endl;

    // Circle calculations
    Circle circle(5);
    cout << "\\nCircle with radius " << circle.getRadius() << ":" << endl;
    cout << "Diameter: " << circle.getDiameter() << endl;
    cout << "Area: " << circle.getArea() << endl;
    cout << "Circumference: " << circle.getCircumference() << endl;

    circle.setDiameter(20);  // Set via diameter
    cout << "\\nAfter setting diameter to 20:" << endl;
    cout << "Radius: " << circle.getRadius() << endl;

    return 0;
}`}
      </pre>

      {/* Practical Example */}
      <h2 className="text-2xl font-bold mt-6">Practical Example: Student Management</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Student {
private:
    static int nextId;
    int studentId;
    string name;
    int age;
    vector<double> grades;
    double gpa;

    // Private method to calculate GPA
    void calculateGPA() {
        if (grades.empty()) {
            gpa = 0.0;
            return;
        }
        double sum = 0;
        for (double grade : grades) {
            sum += grade;
        }
        gpa = sum / grades.size();
    }

public:
    // Constructor
    Student(string n, int a) : name(n), age(a), gpa(0.0) {
        studentId = nextId++;
    }

    // Getters
    int getId() const { return studentId; }
    string getName() const { return name; }
    int getAge() const { return age; }
    double getGPA() const { return gpa; }

    // Setters with validation
    void setName(string n) {
        if (!n.empty() && n.length() <= 50) {
            name = n;
        }
    }

    void setAge(int a) {
        if (a >= 5 && a <= 100) {
            age = a;
        }
    }

    // Add grade with validation
    bool addGrade(double grade) {
        if (grade >= 0 && grade <= 100) {
            grades.push_back(grade);
            calculateGPA();  // Recalculate GPA
            return true;
        }
        return false;
    }

    // Get grade count
    int getGradeCount() const {
        return grades.size();
    }

    // Get letter grade
    char getLetterGrade() const {
        if (gpa >= 90) return 'A';
        if (gpa >= 80) return 'B';
        if (gpa >= 70) return 'C';
        if (gpa >= 60) return 'D';
        return 'F';
    }

    // Display student info
    void displayInfo() const {
        cout << "\\n--- Student Info ---" << endl;
        cout << "ID: " << studentId << endl;
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Grades: " << grades.size() << endl;
        cout << "GPA: " << gpa << " (" << getLetterGrade() << ")" << endl;
    }
};

// Initialize static member
int Student::nextId = 1001;

int main() {
    Student s1("Alice Johnson", 20);
    Student s2("Bob Smith", 22);

    // Add grades
    s1.addGrade(95);
    s1.addGrade(88);
    s1.addGrade(92);

    s2.addGrade(75);
    s2.addGrade(82);
    s2.addGrade(78);
    s2.addGrade(150);  // Invalid - won't be added

    // Display info
    s1.displayInfo();
    s2.displayInfo();

    // Cannot access private members directly
    // s1.gpa = 100;  // ERROR!
    // s1.grades.clear();  // ERROR!

    return 0;
}`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Make data members private by default</li>
          <li>Provide public getters/setters only when needed</li>
          <li>Add validation in setter methods</li>
          <li>Use const for methods that don't modify object state</li>
          <li>Use friend functions/classes sparingly</li>
          <li>Consider making getters return const references for large objects</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> Encapsulation bundles data and methods while restricting direct
        access to internal state. Use private members with public getters/setters to protect data
        integrity and allow validation. This makes code more maintainable, secure, and flexible
        for future changes.
      </div>
    </div>
  );
};

export default Encapsulation;
