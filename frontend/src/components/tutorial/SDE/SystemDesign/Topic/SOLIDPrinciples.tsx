import React from 'react';

const SOLIDPrinciples: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SOLID Principles
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SOLID is an acronym for five design principles that help software developers design maintainable,
      understandable, and flexible software. These principles were introduced by Robert C. Martin
      (Uncle Bob) and have become fundamental concepts in object-oriented programming and design.
    </p>

    <div className="bg-blue-50 p-4 rounded-lg mt-4">
      <h3 className="font-bold text-blue-800">The SOLID Acronym</h3>
      <ul className="mt-2 space-y-1">
        <li><strong>S</strong> - Single Responsibility Principle</li>
        <li><strong>O</strong> - Open/Closed Principle</li>
        <li><strong>L</strong> - Liskov Substitution Principle</li>
        <li><strong>I</strong> - Interface Segregation Principle</li>
        <li><strong>D</strong> - Dependency Inversion Principle</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">1. Single Responsibility Principle (SRP)</h2>
    <p className="leading-relaxed">
      A class should have only one reason to change, meaning it should have only one job or responsibility.
      This principle helps in keeping classes focused and easier to understand, test, and maintain.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Violating SRP</h4>
        <pre className="mt-2 text-sm font-mono">{`class User {
  saveToDatabase() { }
  generateReport() { }
  sendEmail() { }
}`}</pre>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Following SRP</h4>
        <pre className="mt-2 text-sm font-mono">{`class User { }
class UserRepository {
  save(user: User) { }
}
class ReportGenerator { }
class EmailService { }`}</pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. Open/Closed Principle (OCP)</h2>
    <p className="leading-relaxed">
      Software entities (classes, modules, functions) should be open for extension but closed for modification.
      This means you should be able to add new functionality without changing existing code.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`// Open for extension through abstraction
interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// AreaCalculator doesn't need modification for new shapes
class AreaCalculator {
  totalArea(shapes: Shape[]): number {
    return shapes.reduce((sum, shape) => sum + shape.calculateArea(), 0);
  }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">3. Liskov Substitution Principle (LSP)</h2>
    <p className="leading-relaxed">
      Objects of a superclass should be replaceable with objects of its subclasses without affecting
      the correctness of the program. Subclasses should extend the behavior of the parent class,
      not change it.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Violating LSP</h4>
        <pre className="mt-2 text-sm font-mono">{`class Bird {
  fly() { /* flying */ }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Can't fly!");
  }
}`}</pre>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Following LSP</h4>
        <pre className="mt-2 text-sm font-mono">{`interface Bird { }
interface FlyingBird extends Bird {
  fly(): void;
}

class Sparrow implements FlyingBird {
  fly() { /* flying */ }
}

class Penguin implements Bird { }`}</pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">4. Interface Segregation Principle (ISP)</h2>
    <p className="leading-relaxed">
      Clients should not be forced to depend on interfaces they do not use. Instead of one fat interface,
      many smaller, specific interfaces are preferred based on groups of methods, each serving one submodule.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Violating ISP</h4>
        <pre className="mt-2 text-sm font-mono">{`interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

class Robot implements Worker {
  work() { }
  eat() { /* Robots don't eat! */ }
  sleep() { /* Robots don't sleep! */ }
}`}</pre>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Following ISP</h4>
        <pre className="mt-2 text-sm font-mono">{`interface Workable {
  work(): void;
}
interface Eatable {
  eat(): void;
}
interface Sleepable {
  sleep(): void;
}

class Robot implements Workable {
  work() { }
}`}</pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">5. Dependency Inversion Principle (DIP)</h2>
    <p className="leading-relaxed">
      High-level modules should not depend on low-level modules. Both should depend on abstractions.
      Abstractions should not depend on details. Details should depend on abstractions.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Violating DIP</h4>
        <pre className="mt-2 text-sm font-mono">{`class MySQLDatabase {
  save(data: any) { }
}

class UserService {
  private db = new MySQLDatabase();
  saveUser(user: User) {
    this.db.save(user);
  }
}`}</pre>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Following DIP</h4>
        <pre className="mt-2 text-sm font-mono">{`interface Database {
  save(data: any): void;
}

class UserService {
  constructor(private db: Database) {}
  saveUser(user: User) {
    this.db.save(user);
  }
}`}</pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Benefits of SOLID Principles</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Maintainability:</strong> Code is easier to understand and modify</li>
      <li><strong>Testability:</strong> Decoupled code is easier to unit test</li>
      <li><strong>Flexibility:</strong> Systems can be extended without breaking existing functionality</li>
      <li><strong>Reusability:</strong> Components can be reused across different parts of the application</li>
      <li><strong>Scalability:</strong> Systems can grow without becoming unmanageable</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Remember:</strong> SOLID principles are guidelines, not strict rules. Apply them judiciously
        based on your project's needs. Over-engineering a simple application to follow every principle
        can lead to unnecessary complexity.
      </p>
    </div>
  </div>
);

export default SOLIDPrinciples;
