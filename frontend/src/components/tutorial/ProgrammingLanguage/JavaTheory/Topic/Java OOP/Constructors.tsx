import React from "react";

const Constructors: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Constructors
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      A <b>constructor</b> is a special method that is called automatically when an object is created.
      It is used to initialize the object's attributes. Constructors have the same name as the class
      and do not have a return type (not even void).
    </p>

    <h2 className="text-2xl font-bold mt-6">Constructor Syntax</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class ClassName {
    // Constructor
    public ClassName() {
        // initialization code
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Default Constructor</h2>
    <p className="leading-relaxed mt-3">
      If you don't define any constructor, Java provides a default no-argument constructor.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Car {
    String brand;
    int year;

    // Default constructor (implicit if not defined)
    // public Car() { }
}

// Usage
Car car = new Car();  // Calls default constructor
car.brand = "Toyota";
car.year = 2023;`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">No-Argument Constructor</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Book {
    String title;
    String author;
    int pages;

    // Explicit no-argument constructor
    public Book() {
        title = "Unknown";
        author = "Unknown";
        pages = 0;
        System.out.println("Book object created!");
    }
}

// Usage
Book book = new Book();  // Prints: Book object created!
System.out.println(book.title);  // Unknown`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Parameterized Constructor</h2>
    <p className="leading-relaxed mt-3">
      Accepts parameters to initialize object with specific values.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Student {
    String name;
    int age;
    double gpa;

    // Parameterized constructor
    public Student(String name, int age, double gpa) {
        this.name = name;  // 'this' distinguishes instance var from param
        this.age = age;
        this.gpa = gpa;
    }

    void display() {
        System.out.println(name + ", Age: " + age + ", GPA: " + gpa);
    }
}

// Usage
Student s1 = new Student("Alice", 20, 3.8);
Student s2 = new Student("Bob", 22, 3.5);
s1.display();  // Alice, Age: 20, GPA: 3.8
s2.display();  // Bob, Age: 22, GPA: 3.5`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Constructor Overloading</h2>
    <p className="leading-relaxed mt-3">
      A class can have multiple constructors with different parameter lists.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Rectangle {
    double width;
    double height;

    // No-argument constructor
    public Rectangle() {
        width = 1.0;
        height = 1.0;
    }

    // Single parameter constructor (square)
    public Rectangle(double side) {
        width = side;
        height = side;
    }

    // Two parameter constructor
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    double getArea() {
        return width * height;
    }
}

// Usage
Rectangle r1 = new Rectangle();          // 1x1
Rectangle r2 = new Rectangle(5);         // 5x5
Rectangle r3 = new Rectangle(4, 6);      // 4x6

System.out.println("Area 1: " + r1.getArea());  // 1.0
System.out.println("Area 2: " + r2.getArea());  // 25.0
System.out.println("Area 3: " + r3.getArea());  // 24.0`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Constructor Chaining</h2>
    <p className="leading-relaxed mt-3">
      One constructor can call another using <code className="bg-gray-200 px-1 rounded">this()</code>.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Employee {
    String name;
    int id;
    double salary;

    // Full constructor
    public Employee(String name, int id, double salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    // Constructor with default salary
    public Employee(String name, int id) {
        this(name, id, 50000.0);  // Calls full constructor
    }

    // Default constructor
    public Employee() {
        this("Unknown", 0, 0.0);  // Calls full constructor
    }
}

// Usage
Employee e1 = new Employee("John", 101, 75000);
Employee e2 = new Employee("Jane", 102);  // salary = 50000
Employee e3 = new Employee();  // all defaults`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
      <p className="font-semibold">Important!</p>
      <p className="mt-2">
        The <code className="bg-gray-200 px-1 rounded">this()</code> call must be the first statement
        in the constructor. You cannot call both <code className="bg-gray-200 px-1 rounded">this()</code>
        and <code className="bg-gray-200 px-1 rounded">super()</code> in the same constructor.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Copy Constructor</h2>
    <p className="leading-relaxed mt-3">
      Creates a new object as a copy of an existing object.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Point {
    int x, y;

    // Regular constructor
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // Copy constructor
    public Point(Point other) {
        this.x = other.x;
        this.y = other.y;
    }
}

// Usage
Point p1 = new Point(10, 20);
Point p2 = new Point(p1);  // Copy of p1

p2.x = 30;  // Modifying p2 doesn't affect p1
System.out.println("p1: (" + p1.x + ", " + p1.y + ")");  // (10, 20)
System.out.println("p2: (" + p2.x + ", " + p2.y + ")");  // (30, 20)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Private Constructor</h2>
    <p className="leading-relaxed mt-3">
      Used in Singleton pattern to prevent external instantiation.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Database {
    private static Database instance;

    // Private constructor
    private Database() {
        System.out.println("Database connection established");
    }

    // Public method to get instance
    public static Database getInstance() {
        if (instance == null) {
            instance = new Database();
        }
        return instance;
    }
}

// Usage
Database db1 = Database.getInstance();  // Creates instance
Database db2 = Database.getInstance();  // Returns same instance
System.out.println(db1 == db2);  // true`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Constructor vs Method</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Constructor</th>
            <th className="border p-2">Method</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Same name as class</td><td className="border p-2">Any valid name</td></tr>
          <tr><td className="border p-2">No return type</td><td className="border p-2">Has return type (or void)</td></tr>
          <tr><td className="border p-2">Called automatically on new</td><td className="border p-2">Called explicitly</td></tr>
          <tr><td className="border p-2">Initializes object</td><td className="border p-2">Performs operations</td></tr>
          <tr><td className="border p-2">Called once per object</td><td className="border p-2">Called multiple times</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Use constructors to initialize object state</li>
        <li>Provide overloaded constructors for flexibility</li>
        <li>Use constructor chaining to avoid code duplication</li>
        <li>Consider using Builder pattern for many parameters</li>
        <li>Document what each constructor does</li>
      </ul>
    </div>
  </div>
);

export default Constructors;
