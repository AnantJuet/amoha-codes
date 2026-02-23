import React from 'react';

const DesignPatternsOverview: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Design Patterns Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Design patterns are reusable solutions to common problems that occur in software design.
      They represent best practices evolved over time by experienced software developers. Design
      patterns are not finished designs that can be directly converted into code; rather, they
      are templates for solving problems in various contexts.
    </p>

    <h2 className="text-2xl font-bold mt-6">History of Design Patterns</h2>
    <p className="leading-relaxed">
      The concept of design patterns was popularized by the "Gang of Four" (GoF) - Erich Gamma,
      Richard Helm, Ralph Johnson, and John Vlissides - in their influential 1994 book
      "Design Patterns: Elements of Reusable Object-Oriented Software". They documented 23
      classic patterns that are still widely used today.
    </p>

    <h2 className="text-2xl font-bold mt-6">Categories of Design Patterns</h2>
    <p className="leading-relaxed">
      Design patterns are typically categorized into three main groups based on their purpose:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Creational Patterns</h4>
        <p className="mt-2 text-sm">Deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.</p>
        <ul className="mt-2 text-sm space-y-1">
          <li>Singleton</li>
          <li>Factory Method</li>
          <li>Abstract Factory</li>
          <li>Builder</li>
          <li>Prototype</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Structural Patterns</h4>
        <p className="mt-2 text-sm">Deal with object composition, creating relationships between objects to form larger structures.</p>
        <ul className="mt-2 text-sm space-y-1">
          <li>Adapter</li>
          <li>Bridge</li>
          <li>Composite</li>
          <li>Decorator</li>
          <li>Facade</li>
          <li>Flyweight</li>
          <li>Proxy</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Behavioral Patterns</h4>
        <p className="mt-2 text-sm">Deal with communication between objects, how objects interact and distribute responsibility.</p>
        <ul className="mt-2 text-sm space-y-1">
          <li>Observer</li>
          <li>Strategy</li>
          <li>Command</li>
          <li>Iterator</li>
          <li>State</li>
          <li>Template Method</li>
          <li>Chain of Responsibility</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Most Commonly Used Patterns</h2>

    <h3 className="text-xl font-semibold mt-4">1. Singleton Pattern</h3>
    <p className="leading-relaxed">
      Ensures a class has only one instance and provides a global point of access to it.
      Commonly used for logging, configuration, and connection pools.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Factory Pattern</h3>
    <p className="leading-relaxed">
      Provides an interface for creating objects without specifying the exact class to create.
      Useful when the creation logic is complex or when the type of object depends on runtime conditions.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Observer Pattern</h3>
    <p className="leading-relaxed">
      Defines a one-to-many dependency between objects so that when one object changes state,
      all its dependents are notified and updated automatically. Foundation for event-driven programming.
    </p>

    <h3 className="text-xl font-semibold mt-4">4. Strategy Pattern</h3>
    <p className="leading-relaxed">
      Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
      Strategy lets the algorithm vary independently from clients that use it.
    </p>

    <h3 className="text-xl font-semibold mt-4">5. Decorator Pattern</h3>
    <p className="leading-relaxed">
      Attaches additional responsibilities to an object dynamically. Decorators provide a
      flexible alternative to subclassing for extending functionality.
    </p>

    <h2 className="text-2xl font-bold mt-6">When to Use Design Patterns</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>When you encounter a recurring design problem that has been solved before</li>
      <li>When you need to communicate design decisions with other developers</li>
      <li>When you want to improve code reusability and maintainability</li>
      <li>When you need to decouple components for better testability</li>
      <li>When preparing for potential future changes in requirements</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Benefits of Design Patterns</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">For Development</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Proven solutions to common problems</li>
          <li>Faster development with tested approaches</li>
          <li>Better code organization</li>
          <li>Improved code reusability</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">For Team Collaboration</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Common vocabulary for communication</li>
          <li>Easier code reviews</li>
          <li>Better documentation</li>
          <li>Faster onboarding for new team members</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Anti-Patterns to Avoid</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Over-engineering:</strong> Using patterns where simpler solutions would suffice</li>
      <li><strong>Pattern obsession:</strong> Forcing patterns into every solution</li>
      <li><strong>Wrong pattern choice:</strong> Applying a pattern that doesn't fit the problem</li>
      <li><strong>Premature optimization:</strong> Adding patterns for hypothetical future needs</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Best Practice:</strong> Learn the intent behind each pattern, not just the implementation.
        Understanding why a pattern exists helps you recognize when to apply it and when to choose
        an alternative approach.
      </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
      <p className="text-blue-700">
        <strong>Interview Tip:</strong> In design interviews, explaining why you chose a particular
        pattern is often more important than the implementation details. Focus on the problem the
        pattern solves and how it fits your specific use case.
      </p>
    </div>
  </div>
);

export default DesignPatternsOverview;
