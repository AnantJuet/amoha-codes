import React from 'react';

const WhatIsLLD: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is Low Level Design (LLD)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Low Level Design (LLD) is the process of designing the internal structure of individual components
      in a software system. While High Level Design (HLD) focuses on the overall architecture and how
      different modules interact, LLD dives deep into the implementation details of each component,
      including class structures, methods, data members, and their relationships.
    </p>

    <h2 className="text-2xl font-bold mt-6">LLD vs HLD</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">High Level Design (HLD)</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>System architecture overview</li>
          <li>Module interactions</li>
          <li>Technology stack decisions</li>
          <li>Database schema design</li>
          <li>API contracts</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Low Level Design (LLD)</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Class diagrams and structures</li>
          <li>Method signatures and logic</li>
          <li>Design patterns implementation</li>
          <li>Data structures selection</li>
          <li>Algorithm design</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Components of LLD</h2>

    <h3 className="text-xl font-semibold mt-4">1. Class Design</h3>
    <p className="leading-relaxed">
      Defining classes with their attributes, methods, access modifiers, and responsibilities.
      Each class should have a single, well-defined purpose following the Single Responsibility Principle.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`class User {
  private id: string;
  private name: string;
  private email: string;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  public getDetails(): UserDetails {
    return { id: this.id, name: this.name, email: this.email };
  }
}`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Interface Design</h3>
    <p className="leading-relaxed">
      Interfaces define contracts that classes must implement. They promote loose coupling
      and enable dependency injection, making the code more testable and maintainable.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`interface PaymentProcessor {
  processPayment(amount: number): boolean;
  refundPayment(transactionId: string): boolean;
  getTransactionStatus(transactionId: string): TransactionStatus;
}`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">3. Relationships Between Classes</h3>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Association:</strong> A general relationship where one class uses another (e.g., Teacher teaches Student)</li>
      <li><strong>Aggregation:</strong> A "has-a" relationship with independent lifecycles (e.g., Department has Employees)</li>
      <li><strong>Composition:</strong> A strong "has-a" relationship with dependent lifecycles (e.g., House has Rooms)</li>
      <li><strong>Inheritance:</strong> An "is-a" relationship for code reuse (e.g., Dog is an Animal)</li>
      <li><strong>Implementation:</strong> A class implementing an interface contract</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">LLD Process Steps</h2>
    <ol className="list-decimal list-inside space-y-3 mt-4">
      <li><strong>Identify Core Entities:</strong> Determine the main objects and actors in the system</li>
      <li><strong>Define Responsibilities:</strong> Assign specific tasks to each class or module</li>
      <li><strong>Establish Relationships:</strong> Define how classes interact with each other</li>
      <li><strong>Apply Design Patterns:</strong> Use appropriate patterns to solve common problems</li>
      <li><strong>Create UML Diagrams:</strong> Document the design visually for better understanding</li>
      <li><strong>Review and Refine:</strong> Iterate on the design based on feedback and requirements</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Benefits of Good LLD</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Easier code implementation with clear blueprints</li>
      <li>Better maintainability and extensibility</li>
      <li>Reduced bugs due to well-defined interfaces</li>
      <li>Improved team collaboration with clear documentation</li>
      <li>Easier testing with modular, decoupled components</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common LLD Interview Topics</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Design Problems</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Parking Lot System</li>
          <li>Library Management System</li>
          <li>Elevator System</li>
          <li>Chess Game</li>
          <li>ATM Machine</li>
        </ul>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg">
        <h4 className="font-bold text-orange-800">Key Concepts</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>SOLID Principles</li>
          <li>Design Patterns</li>
          <li>UML Diagrams</li>
          <li>OOP Concepts</li>
          <li>Code Extensibility</li>
        </ul>
      </div>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> When approaching LLD problems, always start by clarifying requirements,
        identifying the main entities, and then progressively adding details. Focus on extensibility
        and maintainability rather than over-engineering the solution.
      </p>
    </div>
  </div>
);

export default WhatIsLLD;
