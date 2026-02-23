import React from "react";

const Constructors: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Constructors and Destructors
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Constructors are special member functions that are automatically called when an object
        is created. They initialize the object's data members. Destructors are called when an
        object is destroyed and are used to clean up resources.
      </p>

      {/* Constructor Types */}
      <h2 className="text-2xl font-bold mt-6">Types of Constructors</h2>
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
              <td className="px-4 py-2 border font-semibold">Default Constructor</td>
              <td className="px-4 py-2 border">No parameters, provides default values</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Parameterized Constructor</td>
              <td className="px-4 py-2 border">Takes parameters to initialize members</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Copy Constructor</td>
              <td className="px-4 py-2 border">Creates object from another object</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Move Constructor</td>
              <td className="px-4 py-2 border">Transfers resources from temporary object</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Constructor Characteristics */}
      <h2 className="text-2xl font-bold mt-6">Constructor Characteristics</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Same name as the class</li>
        <li>No return type (not even void)</li>
        <li>Called automatically when object is created</li>
        <li>Can be overloaded</li>
        <li>Can have default arguments</li>
      </ul>

      {/* Default Constructor */}
      <h2 className="text-2xl font-bold mt-6">Default Constructor</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Rectangle {
private:
    double width;
    double height;

public:
    // Default constructor
    Rectangle() {
        width = 0;
        height = 0;
        cout << "Default constructor called" << endl;
    }

    void setDimensions(double w, double h) {
        width = w;
        height = h;
    }

    void display() {
        cout << "Width: " << width << ", Height: " << height << endl;
    }
};

int main() {
    Rectangle rect;  // Default constructor is called
    rect.display();

    rect.setDimensions(5, 3);
    rect.display();

    return 0;
}

/*
Output:
Default constructor called
Width: 0, Height: 0
Width: 5, Height: 3
*/`}
      </pre>

      {/* Parameterized Constructor */}
      <h2 className="text-2xl font-bold mt-6">Parameterized Constructor</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int age;
    double gpa;

public:
    // Parameterized constructor
    Student(string n, int a, double g) {
        name = n;
        age = a;
        gpa = g;
        cout << "Parameterized constructor called for " << name << endl;
    }

    void display() {
        cout << "Name: " << name << ", Age: " << age
             << ", GPA: " << gpa << endl;
    }
};

int main() {
    // Create objects with parameters
    Student s1("Alice", 20, 3.8);
    Student s2("Bob", 21, 3.5);

    s1.display();
    s2.display();

    return 0;
}

/*
Output:
Parameterized constructor called for Alice
Parameterized constructor called for Bob
Name: Alice, Age: 20, GPA: 3.8
Name: Bob, Age: 21, GPA: 3.5
*/`}
      </pre>

      {/* Constructor Overloading */}
      <h2 className="text-2xl font-bold mt-6">Constructor Overloading</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Box {
private:
    double length, width, height;

public:
    // Default constructor
    Box() {
        length = width = height = 1.0;
        cout << "Default: Unit cube created" << endl;
    }

    // One parameter (cube)
    Box(double side) {
        length = width = height = side;
        cout << "Cube with side " << side << " created" << endl;
    }

    // Two parameters (square-based box)
    Box(double side, double h) {
        length = width = side;
        height = h;
        cout << "Square-based box created" << endl;
    }

    // Three parameters
    Box(double l, double w, double h) {
        length = l;
        width = w;
        height = h;
        cout << "Custom box created" << endl;
    }

    double getVolume() {
        return length * width * height;
    }
};

int main() {
    Box box1;              // Default constructor
    Box box2(5);           // Single parameter
    Box box3(4, 3);        // Two parameters
    Box box4(5, 4, 3);     // Three parameters

    cout << "\\nVolumes:" << endl;
    cout << "Box 1: " << box1.getVolume() << endl;
    cout << "Box 2: " << box2.getVolume() << endl;
    cout << "Box 3: " << box3.getVolume() << endl;
    cout << "Box 4: " << box4.getVolume() << endl;

    return 0;
}`}
      </pre>

      {/* Initializer List */}
      <h2 className="text-2xl font-bold mt-6">Constructor Initializer List</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

class Person {
private:
    const int id;      // Must be initialized in initializer list
    string name;
    int age;

public:
    // Using initializer list (recommended)
    Person(int i, string n, int a) : id(i), name(n), age(a) {
        cout << "Person created with ID " << id << endl;
    }

    // Equivalent to:
    // Person(int i, string n, int a) {
    //     id = i;    // ERROR! Can't assign to const
    //     name = n;
    //     age = a;
    // }

    void display() {
        cout << "ID: " << id << ", Name: " << name
             << ", Age: " << age << endl;
    }
};

// Initializer list is required for:
// - const members
// - reference members
// - members without default constructors
// - calling base class constructors

class Point {
public:
    int x, y;

    // Compact initializer list syntax
    Point(int a, int b) : x(a), y(b) {}

    void print() {
        cout << "(" << x << ", " << y << ")" << endl;
    }
};

int main() {
    Person p(101, "Alice", 25);
    p.display();

    Point pt(3, 4);
    pt.print();

    return 0;
}`}
      </pre>

      {/* Copy Constructor */}
      <h2 className="text-2xl font-bold mt-6">Copy Constructor</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class MyClass {
private:
    int value;

public:
    // Regular constructor
    MyClass(int v) : value(v) {
        cout << "Regular constructor: value = " << value << endl;
    }

    // Copy constructor
    MyClass(const MyClass &other) : value(other.value) {
        cout << "Copy constructor: value = " << value << endl;
    }

    int getValue() { return value; }
};

void displayValue(MyClass obj) {  // Pass by value triggers copy
    cout << "Function received: " << obj.getValue() << endl;
}

int main() {
    MyClass obj1(10);          // Regular constructor

    MyClass obj2 = obj1;       // Copy constructor
    MyClass obj3(obj1);        // Copy constructor

    cout << "\\nCalling function:" << endl;
    displayValue(obj1);        // Copy constructor for parameter

    return 0;
}

/*
Output:
Regular constructor: value = 10
Copy constructor: value = 10
Copy constructor: value = 10

Calling function:
Copy constructor: value = 10
Function received: 10
*/`}
      </pre>

      {/* Destructor */}
      <h2 className="text-2xl font-bold mt-6">Destructor</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

class Resource {
private:
    string name;
    int *data;

public:
    // Constructor
    Resource(string n, int size) : name(n) {
        data = new int[size];  // Allocate memory
        cout << "Constructor: " << name << " created" << endl;
    }

    // Destructor
    ~Resource() {
        delete[] data;  // Free memory
        cout << "Destructor: " << name << " destroyed" << endl;
    }
};

void demonstrateScope() {
    cout << "\\n--- Inside function ---" << endl;
    Resource local("LocalResource", 10);
    cout << "--- Leaving function ---" << endl;
}  // Destructor called when local goes out of scope

int main() {
    cout << "--- Start of main ---" << endl;

    Resource *ptr = new Resource("DynamicResource", 5);

    demonstrateScope();

    {
        Resource block("BlockResource", 3);
        cout << "--- Inside block ---" << endl;
    }  // BlockResource destructor called here

    cout << "\\n--- Before delete ---" << endl;
    delete ptr;  // DynamicResource destructor called

    cout << "--- End of main ---" << endl;

    return 0;
}

/*
Output:
--- Start of main ---
Constructor: DynamicResource created

--- Inside function ---
Constructor: LocalResource created
--- Leaving function ---
Destructor: LocalResource destroyed
Constructor: BlockResource created
--- Inside block ---
Destructor: BlockResource destroyed

--- Before delete ---
Destructor: DynamicResource destroyed
--- End of main ---
*/`}
      </pre>

      {/* Default Arguments */}
      <h2 className="text-2xl font-bold mt-6">Constructor with Default Arguments</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <string>
using namespace std;

class Employee {
private:
    string name;
    string department;
    double salary;

public:
    // Constructor with default arguments
    Employee(string n, string dept = "General", double sal = 30000)
        : name(n), department(dept), salary(sal) {
        cout << "Employee " << name << " created" << endl;
    }

    void display() {
        cout << "Name: " << name << ", Dept: " << department
             << ", Salary: $" << salary << endl;
    }
};

int main() {
    Employee e1("Alice", "Engineering", 75000);  // All arguments
    Employee e2("Bob", "Marketing");             // Default salary
    Employee e3("Charlie");                       // Default dept and salary

    cout << "\\nEmployee Details:" << endl;
    e1.display();
    e2.display();
    e3.display();

    return 0;
}`}
      </pre>

      {/* Delegating Constructors */}
      <h2 className="text-2xl font-bold mt-6">Delegating Constructors (C++11)</h2>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

class Circle {
private:
    double radius;
    double x, y;  // Center coordinates

public:
    // Primary constructor
    Circle(double r, double cx, double cy) : radius(r), x(cx), y(cy) {
        cout << "Primary constructor called" << endl;
    }

    // Delegate to primary constructor
    Circle(double r) : Circle(r, 0, 0) {
        cout << "Single-parameter constructor called" << endl;
    }

    // Default delegates to single-parameter
    Circle() : Circle(1.0) {
        cout << "Default constructor called" << endl;
    }

    void display() {
        cout << "Radius: " << radius << ", Center: ("
             << x << ", " << y << ")" << endl;
    }
};

int main() {
    cout << "Creating c1:" << endl;
    Circle c1;
    c1.display();

    cout << "\\nCreating c2:" << endl;
    Circle c2(5.0);
    c2.display();

    cout << "\\nCreating c3:" << endl;
    Circle c3(3.0, 2.0, 4.0);
    c3.display();

    return 0;
}`}
      </pre>

      {/* Rule of Three/Five */}
      <h2 className="text-2xl font-bold mt-6">Rule of Three/Five</h2>
      <p className="leading-relaxed">
        If your class manages resources (like dynamic memory), you should implement:
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li><strong>Rule of Three:</strong> Destructor, Copy Constructor, Copy Assignment</li>
        <li><strong>Rule of Five (C++11):</strong> Plus Move Constructor, Move Assignment</li>
      </ul>

      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
#include <cstring>
using namespace std;

class String {
private:
    char *data;
    size_t length;

public:
    // Constructor
    String(const char *str = "") {
        length = strlen(str);
        data = new char[length + 1];
        strcpy(data, str);
    }

    // Destructor
    ~String() {
        delete[] data;
    }

    // Copy Constructor
    String(const String &other) {
        length = other.length;
        data = new char[length + 1];
        strcpy(data, other.data);
    }

    // Copy Assignment Operator
    String& operator=(const String &other) {
        if (this != &other) {
            delete[] data;
            length = other.length;
            data = new char[length + 1];
            strcpy(data, other.data);
        }
        return *this;
    }

    void print() { cout << data << endl; }
};

int main() {
    String s1("Hello");
    String s2 = s1;      // Copy constructor
    String s3;
    s3 = s1;             // Copy assignment

    s1.print();
    s2.print();
    s3.print();

    return 0;
}`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Best Practices:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Use initializer lists for member initialization</li>
          <li>Always initialize all members</li>
          <li>Define destructor when managing resources</li>
          <li>Follow Rule of Three/Five for resource management</li>
          <li>Consider using smart pointers instead of raw pointers</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> Constructors initialize objects when created, while destructors
        clean up when objects are destroyed. Use constructor overloading for flexible object
        creation, initializer lists for efficient initialization, and always manage resources
        properly with the Rule of Three/Five.
      </div>
    </div>
  );
};

export default Constructors;
