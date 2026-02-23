import React from 'react';

const FactoryPattern: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Factory Pattern
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Factory Pattern is a creational design pattern that provides an interface for creating
      objects without specifying their concrete classes. It delegates the instantiation logic to
      subclasses or specialized factory methods, promoting loose coupling between the creator and
      the products.
    </p>

    <h2 className="text-2xl font-bold mt-6">Types of Factory Patterns</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Simple Factory</h4>
        <p className="mt-2 text-sm">A single factory class with a method that returns different types based on input</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Factory Method</h4>
        <p className="mt-2 text-sm">Defines an interface for creating objects, letting subclasses decide which class to instantiate</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Abstract Factory</h4>
        <p className="mt-2 text-sm">Creates families of related objects without specifying their concrete classes</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Simple Factory Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`// Product interface
interface Vehicle {
  drive(): void;
  getType(): string;
}

// Concrete products
class Car implements Vehicle {
  drive(): void {
    console.log('Driving a car');
  }
  getType(): string {
    return 'Car';
  }
}

class Motorcycle implements Vehicle {
  drive(): void {
    console.log('Riding a motorcycle');
  }
  getType(): string {
    return 'Motorcycle';
  }
}

class Truck implements Vehicle {
  drive(): void {
    console.log('Driving a truck');
  }
  getType(): string {
    return 'Truck';
  }
}

// Simple Factory
class VehicleFactory {
  static createVehicle(type: string): Vehicle {
    switch (type.toLowerCase()) {
      case 'car':
        return new Car();
      case 'motorcycle':
        return new Motorcycle();
      case 'truck':
        return new Truck();
      default:
        throw new Error(\`Unknown vehicle type: \${type}\`);
    }
  }
}

// Usage
const car = VehicleFactory.createVehicle('car');
const bike = VehicleFactory.createVehicle('motorcycle');
car.drive();  // Output: Driving a car
bike.drive(); // Output: Riding a motorcycle`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Factory Method Pattern</h2>
    <p className="leading-relaxed">
      The Factory Method pattern defines an interface for creating an object but lets subclasses
      alter the type of objects that will be created. It follows the Open/Closed Principle.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`// Product interface
interface Notification {
  send(message: string): void;
}

// Concrete products
class EmailNotification implements Notification {
  send(message: string): void {
    console.log(\`Sending email: \${message}\`);
  }
}

class SMSNotification implements Notification {
  send(message: string): void {
    console.log(\`Sending SMS: \${message}\`);
  }
}

class PushNotification implements Notification {
  send(message: string): void {
    console.log(\`Sending push notification: \${message}\`);
  }
}

// Creator abstract class
abstract class NotificationFactory {
  // Factory method
  abstract createNotification(): Notification;

  // Template method that uses the factory method
  notify(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}

// Concrete creators
class EmailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}

class SMSNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SMSNotification();
  }
}

// Usage
const emailFactory = new EmailNotificationFactory();
emailFactory.notify('Hello via email!');

const smsFactory = new SMSNotificationFactory();
smsFactory.notify('Hello via SMS!');`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Abstract Factory Pattern</h2>
    <p className="leading-relaxed">
      The Abstract Factory provides an interface for creating families of related or dependent
      objects without specifying their concrete classes. It's useful when a system needs to be
      independent of how its products are created.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`// Abstract products
interface Button {
  render(): void;
  onClick(): void;
}

interface Checkbox {
  render(): void;
  toggle(): void;
}

// Concrete products - Windows family
class WindowsButton implements Button {
  render(): void {
    console.log('Rendering Windows button');
  }
  onClick(): void {
    console.log('Windows button clicked');
  }
}

class WindowsCheckbox implements Checkbox {
  render(): void {
    console.log('Rendering Windows checkbox');
  }
  toggle(): void {
    console.log('Windows checkbox toggled');
  }
}

// Concrete products - Mac family
class MacButton implements Button {
  render(): void {
    console.log('Rendering Mac button');
  }
  onClick(): void {
    console.log('Mac button clicked');
  }
}

class MacCheckbox implements Checkbox {
  render(): void {
    console.log('Rendering Mac checkbox');
  }
  toggle(): void {
    console.log('Mac checkbox toggled');
  }
}

// Abstract factory interface
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Concrete factories
class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// Client code
function createUI(factory: GUIFactory): void {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  button.render();
  checkbox.render();
}

// Usage based on OS
const os = 'windows';
const factory = os === 'windows' ? new WindowsFactory() : new MacFactory();
createUI(factory);`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">When to Use Factory Pattern</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>When the exact type of object is not known until runtime</li>
      <li>When you want to centralize complex object creation logic</li>
      <li>When you need to create objects that share common interfaces</li>
      <li>When you want to decouple code from specific product classes</li>
      <li>When implementing plugin systems or extension points</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Database Connections</h4>
        <p className="mt-2 text-sm">Create connections to MySQL, PostgreSQL, MongoDB based on configuration</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Payment Processing</h4>
        <p className="mt-2 text-sm">Create payment processors for credit cards, PayPal, crypto</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Document Generation</h4>
        <p className="mt-2 text-sm">Generate PDF, Word, HTML documents from the same data</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Logger Creation</h4>
        <p className="mt-2 text-sm">Create file loggers, console loggers, or remote loggers</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Benefits</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Loose Coupling:</strong> Client code is decoupled from concrete classes</li>
      <li><strong>Single Responsibility:</strong> Product creation code is in one place</li>
      <li><strong>Open/Closed Principle:</strong> New products can be added without changing existing code</li>
      <li><strong>Consistency:</strong> Ensures proper initialization of objects</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Design Tip:</strong> Start with Simple Factory for straightforward cases. Move to
        Factory Method when you need extensibility. Use Abstract Factory when dealing with families
        of related products.
      </p>
    </div>
  </div>
);

export default FactoryPattern;
