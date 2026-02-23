import React from "react";

const Encapsulation: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Encapsulation
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Encapsulation</b> is one of the four fundamental OOP concepts. It is the technique of bundling
      data (variables) and methods that operate on that data within a single unit (class), while
      restricting direct access to some of the object's components.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Use Encapsulation?</h2>
    <ul className="list-disc pl-6 mt-3 space-y-2">
      <li><b>Data Hiding:</b> Internal state is hidden from outside</li>
      <li><b>Control:</b> Validate data before setting values</li>
      <li><b>Flexibility:</b> Change implementation without affecting users</li>
      <li><b>Security:</b> Prevent unauthorized access to sensitive data</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Access Modifiers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Modifier</th>
            <th className="border p-2">Class</th>
            <th className="border p-2">Package</th>
            <th className="border p-2">Subclass</th>
            <th className="border p-2">World</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">private</td><td className="border p-2">Yes</td><td className="border p-2">No</td><td className="border p-2">No</td><td className="border p-2">No</td></tr>
          <tr><td className="border p-2">default (none)</td><td className="border p-2">Yes</td><td className="border p-2">Yes</td><td className="border p-2">No</td><td className="border p-2">No</td></tr>
          <tr><td className="border p-2">protected</td><td className="border p-2">Yes</td><td className="border p-2">Yes</td><td className="border p-2">Yes</td><td className="border p-2">No</td></tr>
          <tr><td className="border p-2">public</td><td className="border p-2">Yes</td><td className="border p-2">Yes</td><td className="border p-2">Yes</td><td className="border p-2">Yes</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementing Encapsulation</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class BankAccount {
    // Private fields - cannot be accessed directly
    private String accountNumber;
    private String accountHolder;
    private double balance;

    // Constructor
    public BankAccount(String accountNumber, String accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0.0;
    }

    // Getter methods - provide read access
    public String getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolder() {
        return accountHolder;
    }

    public double getBalance() {
        return balance;
    }

    // Setter with validation
    public void setAccountHolder(String accountHolder) {
        if (accountHolder != null && !accountHolder.trim().isEmpty()) {
            this.accountHolder = accountHolder;
        }
    }

    // No setter for balance - controlled through methods
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Getters and Setters</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Person {
    private String name;
    private int age;
    private String email;

    // Getter
    public String getName() {
        return name;
    }

    // Setter with validation
    public void setName(String name) {
        if (name != null && name.length() >= 2) {
            this.name = name;
        } else {
            throw new IllegalArgumentException("Name must be at least 2 characters");
        }
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        } else {
            throw new IllegalArgumentException("Invalid age");
        }
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        if (email != null && email.contains("@")) {
            this.email = email;
        } else {
            throw new IllegalArgumentException("Invalid email format");
        }
    }
}

// Usage
Person person = new Person();
person.setName("John");
person.setAge(25);
person.setEmail("john@example.com");

// Direct access is not allowed
// person.name = "Jane";  // Error: name has private access`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Read-Only and Write-Only Properties</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Employee {
    private final int employeeId;  // Read-only after initialization
    private String password;       // Write-only

    public Employee(int employeeId) {
        this.employeeId = employeeId;
    }

    // Read-only: only getter, no setter
    public int getEmployeeId() {
        return employeeId;
    }

    // Write-only: only setter, no getter
    public void setPassword(String password) {
        // Hash and store password
        this.password = hashPassword(password);
    }

    // Can verify password without exposing it
    public boolean verifyPassword(String input) {
        return this.password.equals(hashPassword(input));
    }

    private String hashPassword(String password) {
        // Simplified - use proper hashing in production
        return Integer.toHexString(password.hashCode());
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Immutable Class</h2>
    <p className="leading-relaxed mt-3">
      An immutable class has no setters and all fields are final.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public final class ImmutablePoint {
    private final int x;
    private final int y;

    public ImmutablePoint(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    // Return new object instead of modifying
    public ImmutablePoint translate(int dx, int dy) {
        return new ImmutablePoint(x + dx, y + dy);
    }

    @Override
    public String toString() {
        return "(" + x + ", " + y + ")";
    }
}

// Usage
ImmutablePoint p1 = new ImmutablePoint(10, 20);
ImmutablePoint p2 = p1.translate(5, 5);  // Returns new object

System.out.println(p1);  // (10, 20) - unchanged
System.out.println(p2);  // (15, 25) - new point`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Practical Example</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class Product {
    private String id;
    private String name;
    private double price;
    private int quantity;

    public Product(String id, String name, double price, int quantity) {
        this.id = id;
        setName(name);
        setPrice(price);
        setQuantity(quantity);
    }

    // Getters
    public String getId() { return id; }
    public String getName() { return name; }
    public double getPrice() { return price; }
    public int getQuantity() { return quantity; }

    // Computed property
    public double getTotalValue() {
        return price * quantity;
    }

    // Setters with validation
    public void setName(String name) {
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
        this.name = name.trim();
    }

    public void setPrice(double price) {
        if (price < 0) {
            throw new IllegalArgumentException("Price cannot be negative");
        }
        this.price = price;
    }

    public void setQuantity(int quantity) {
        if (quantity < 0) {
            throw new IllegalArgumentException("Quantity cannot be negative");
        }
        this.quantity = quantity;
    }

    // Business methods
    public void addStock(int amount) {
        if (amount > 0) {
            this.quantity += amount;
        }
    }

    public boolean removeStock(int amount) {
        if (amount > 0 && amount <= quantity) {
            this.quantity -= amount;
            return true;
        }
        return false;
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Make all fields private by default</li>
        <li>Provide getters/setters only when necessary</li>
        <li>Validate data in setters before assignment</li>
        <li>Consider immutability for thread safety</li>
        <li>Use final for fields that shouldn't change</li>
        <li>Don't expose mutable internal objects directly</li>
      </ul>
    </div>
  </div>
);

export default Encapsulation;
