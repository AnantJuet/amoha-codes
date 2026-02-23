import React from 'react';

const SingletonPattern: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Singleton Pattern
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Singleton Pattern is a creational design pattern that ensures a class has only one instance
      and provides a global point of access to that instance. It is one of the simplest design patterns
      but must be implemented carefully to avoid issues in multi-threaded environments.
    </p>

    <h2 className="text-2xl font-bold mt-6">Intent</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Ensure a class has only one instance</li>
      <li>Provide a global point of access to that instance</li>
      <li>Control shared resource access</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use Singleton</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Database connection pools</li>
      <li>Configuration managers</li>
      <li>Logging services</li>
      <li>Cache managers</li>
      <li>Thread pools</li>
      <li>Device drivers (printer spooler, etc.)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Basic Implementation</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`class Singleton {
  private static instance: Singleton;

  // Private constructor prevents direct instantiation
  private constructor() {
    // Initialize resources
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someBusinessLogic(): void {
    // Business logic here
  }
}

// Usage
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2); // true`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Thread-Safe Implementation</h2>
    <p className="leading-relaxed">
      In multi-threaded environments, the basic implementation can create multiple instances if
      two threads access getInstance() simultaneously. Here are thread-safe approaches:
    </p>

    <h3 className="text-xl font-semibold mt-4">1. Eager Initialization</h3>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`class EagerSingleton {
  // Instance created at class loading time
  private static readonly instance: EagerSingleton = new EagerSingleton();

  private constructor() {}

  public static getInstance(): EagerSingleton {
    return EagerSingleton.instance;
  }
}`}</pre>
    </div>
    <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-2">
      <p className="text-green-700 text-sm">
        <strong>Pros:</strong> Thread-safe, simple implementation<br />
        <strong>Cons:</strong> Instance created even if never used
      </p>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Double-Checked Locking (Java Example)</h3>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`public class Singleton {
    private static volatile Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}`}</pre>
    </div>
    <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-2">
      <p className="text-green-700 text-sm">
        <strong>Pros:</strong> Lazy initialization, thread-safe, better performance than synchronized method<br />
        <strong>Cons:</strong> More complex implementation
      </p>
    </div>

    <h3 className="text-xl font-semibold mt-4">3. Bill Pugh Singleton (Java)</h3>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`public class Singleton {
    private Singleton() {}

    // Inner static helper class
    private static class SingletonHelper {
        private static final Singleton INSTANCE = new Singleton();
    }

    public static Singleton getInstance() {
        return SingletonHelper.INSTANCE;
    }
}`}</pre>
    </div>
    <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-2">
      <p className="text-green-700 text-sm">
        <strong>Pros:</strong> Lazy, thread-safe without synchronization overhead<br />
        <strong>Cons:</strong> Language-specific (uses Java's class loading mechanism)
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Example: Logger</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`class Logger {
  private static instance: Logger;
  private logFile: string;

  private constructor() {
    this.logFile = 'application.log';
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string, level: string = 'INFO'): void {
    const timestamp = new Date().toISOString();
    const logEntry = \`[\${timestamp}] [\${level}] \${message}\`;
    console.log(logEntry);
    // Write to file in real implementation
  }

  public error(message: string): void {
    this.log(message, 'ERROR');
  }

  public warn(message: string): void {
    this.log(message, 'WARN');
  }
}

// Usage throughout the application
const logger = Logger.getInstance();
logger.log('Application started');
logger.error('Something went wrong');`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Singleton vs Static Class</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Singleton</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Can implement interfaces</li>
          <li>Can be passed as parameter</li>
          <li>Lazy initialization possible</li>
          <li>Can be extended (with care)</li>
          <li>Can be mocked for testing</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Static Class</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Cannot implement interfaces</li>
          <li>Cannot be passed as parameter</li>
          <li>Eager initialization only</li>
          <li>Cannot be extended</li>
          <li>Harder to mock</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Drawbacks and Considerations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Global State:</strong> Introduces global state, which can make testing difficult</li>
      <li><strong>Hidden Dependencies:</strong> Classes using singleton have hidden dependencies</li>
      <li><strong>Violates SRP:</strong> Controls both its creation and business logic</li>
      <li><strong>Difficult to Test:</strong> Hard to mock or replace for unit testing</li>
      <li><strong>Concurrency Issues:</strong> Must be implemented carefully in multi-threaded environments</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Modern Alternative:</strong> Consider using Dependency Injection frameworks that can
        manage singleton-scoped instances. This provides the benefits of single instances while
        maintaining testability and avoiding global state issues.
      </p>
    </div>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
      <p className="text-red-700">
        <strong>Anti-Pattern Warning:</strong> Overusing Singleton can lead to tightly coupled code
        and make testing difficult. Use it only when you genuinely need exactly one instance of a
        class across the entire application.
      </p>
    </div>
  </div>
);

export default SingletonPattern;
