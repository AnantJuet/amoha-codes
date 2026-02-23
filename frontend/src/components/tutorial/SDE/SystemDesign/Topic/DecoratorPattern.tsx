import React from 'react';

const DecoratorPattern: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Decorator Pattern
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Decorator Pattern is a structural design pattern that allows behavior to be added to
      individual objects dynamically, without affecting the behavior of other objects from the
      same class. It provides a flexible alternative to subclassing for extending functionality
      by wrapping objects with additional behavior.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Components</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Component</h4>
        <p className="mt-2 text-sm">Interface for objects that can have responsibilities added dynamically</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Concrete Component</h4>
        <p className="mt-2 text-sm">The original object to which additional behavior can be added</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Decorator</h4>
        <p className="mt-2 text-sm">Abstract class that wraps a component and defines the wrapping interface</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
        <h4 className="font-bold text-orange-800">Concrete Decorator</h4>
        <p className="mt-2 text-sm">Adds responsibilities to the component</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Classic Example: Coffee Shop</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`// Component interface
interface Coffee {
  getDescription(): string;
  getCost(): number;
}

// Concrete component
class SimpleCoffee implements Coffee {
  getDescription(): string {
    return 'Simple Coffee';
  }
  getCost(): number {
    return 2.00;
  }
}

// Base decorator
abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getDescription(): string {
    return this.coffee.getDescription();
  }

  getCost(): number {
    return this.coffee.getCost();
  }
}

// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
  getDescription(): string {
    return this.coffee.getDescription() + ', Milk';
  }
  getCost(): number {
    return this.coffee.getCost() + 0.50;
  }
}

class SugarDecorator extends CoffeeDecorator {
  getDescription(): string {
    return this.coffee.getDescription() + ', Sugar';
  }
  getCost(): number {
    return this.coffee.getCost() + 0.25;
  }
}

class WhippedCreamDecorator extends CoffeeDecorator {
  getDescription(): string {
    return this.coffee.getDescription() + ', Whipped Cream';
  }
  getCost(): number {
    return this.coffee.getCost() + 0.75;
  }
}

class CaramelDecorator extends CoffeeDecorator {
  getDescription(): string {
    return this.coffee.getDescription() + ', Caramel';
  }
  getCost(): number {
    return this.coffee.getCost() + 0.60;
  }
}

// Usage - decorators can be stacked
let coffee: Coffee = new SimpleCoffee();
console.log(\`\${coffee.getDescription()} = \$\${coffee.getCost()}\`);
// Simple Coffee = $2.00

coffee = new MilkDecorator(coffee);
console.log(\`\${coffee.getDescription()} = \$\${coffee.getCost()}\`);
// Simple Coffee, Milk = $2.50

coffee = new SugarDecorator(coffee);
coffee = new WhippedCreamDecorator(coffee);
console.log(\`\${coffee.getDescription()} = \$\${coffee.getCost()}\`);
// Simple Coffee, Milk, Sugar, Whipped Cream = $3.50`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Example: Text Formatting</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`interface TextComponent {
  render(): string;
}

class PlainText implements TextComponent {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  render(): string {
    return this.text;
  }
}

abstract class TextDecorator implements TextComponent {
  protected component: TextComponent;

  constructor(component: TextComponent) {
    this.component = component;
  }

  render(): string {
    return this.component.render();
  }
}

class BoldDecorator extends TextDecorator {
  render(): string {
    return \`<strong>\${this.component.render()}</strong>\`;
  }
}

class ItalicDecorator extends TextDecorator {
  render(): string {
    return \`<em>\${this.component.render()}</em>\`;
  }
}

class UnderlineDecorator extends TextDecorator {
  render(): string {
    return \`<u>\${this.component.render()}</u>\`;
  }
}

class ColorDecorator extends TextDecorator {
  private color: string;

  constructor(component: TextComponent, color: string) {
    super(component);
    this.color = color;
  }

  render(): string {
    return \`<span style="color: \${this.color}">\${this.component.render()}</span>\`;
  }
}

// Usage
let text: TextComponent = new PlainText('Hello World');
text = new BoldDecorator(text);
text = new ItalicDecorator(text);
text = new ColorDecorator(text, 'blue');
console.log(text.render());
// <span style="color: blue"><em><strong>Hello World</strong></em></span>`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Example: Data Stream Processing</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`interface DataSource {
  write(data: string): void;
  read(): string;
}

class FileDataSource implements DataSource {
  private filename: string;
  private data: string = '';

  constructor(filename: string) {
    this.filename = filename;
  }

  write(data: string): void {
    this.data = data;
    console.log(\`Writing to \${this.filename}: \${data}\`);
  }

  read(): string {
    console.log(\`Reading from \${this.filename}\`);
    return this.data;
  }
}

abstract class DataSourceDecorator implements DataSource {
  protected wrappee: DataSource;

  constructor(source: DataSource) {
    this.wrappee = source;
  }

  write(data: string): void {
    this.wrappee.write(data);
  }

  read(): string {
    return this.wrappee.read();
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  write(data: string): void {
    const encrypted = this.encrypt(data);
    console.log('Encrypting data...');
    super.write(encrypted);
  }

  read(): string {
    const data = super.read();
    console.log('Decrypting data...');
    return this.decrypt(data);
  }

  private encrypt(data: string): string {
    return Buffer.from(data).toString('base64');
  }

  private decrypt(data: string): string {
    return Buffer.from(data, 'base64').toString();
  }
}

class CompressionDecorator extends DataSourceDecorator {
  write(data: string): void {
    console.log('Compressing data...');
    const compressed = this.compress(data);
    super.write(compressed);
  }

  read(): string {
    const data = super.read();
    console.log('Decompressing data...');
    return this.decompress(data);
  }

  private compress(data: string): string {
    return \`[COMPRESSED]\${data}\`;
  }

  private decompress(data: string): string {
    return data.replace('[COMPRESSED]', '');
  }
}

// Usage - stack decorators for combined functionality
let source: DataSource = new FileDataSource('data.txt');
source = new CompressionDecorator(source);
source = new EncryptionDecorator(source);

source.write('Sensitive information');
console.log(source.read());`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Decorator vs Inheritance</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Inheritance Problems</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Static: extensions are fixed at compile time</li>
          <li>Class explosion with multiple combinations</li>
          <li>Cannot remove behavior at runtime</li>
          <li>All subclasses inherit all behavior</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Decorator Benefits</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Dynamic: behavior added at runtime</li>
          <li>Combine decorators flexibly</li>
          <li>Add or remove decorators as needed</li>
          <li>Single Responsibility: one feature per decorator</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">When to Use Decorator Pattern</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>When you need to add behavior to objects without affecting other objects</li>
      <li>When extension by subclassing is impractical or impossible</li>
      <li>When you want to add and remove responsibilities dynamically</li>
      <li>When you have multiple independent extensions that can be combined</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Use Cases</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>I/O Streams:</strong> BufferedInputStream, DataInputStream in Java</li>
      <li><strong>GUI Components:</strong> Adding scrollbars, borders to windows</li>
      <li><strong>Middleware:</strong> Request/response processing pipelines</li>
      <li><strong>Logging:</strong> Adding logging capabilities to services</li>
      <li><strong>Caching:</strong> Adding cache layers to data access</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Design Tip:</strong> Decorators are most effective when you have a core component
        with many optional features. If features are always used together, consider other patterns.
        Be careful not to create too many small decorator classes that make the code hard to follow.
      </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
      <p className="text-blue-700">
        <strong>Note:</strong> The Decorator pattern is extensively used in the Java I/O library.
        Classes like BufferedReader, InputStreamReader, and FileReader can be combined to add
        buffering, character encoding, and file reading capabilities.
      </p>
    </div>
  </div>
);

export default DecoratorPattern;
