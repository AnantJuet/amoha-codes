import React from 'react';

const UMLDiagrams: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      UML Diagrams
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      UML (Unified Modeling Language) is a standardized visual language for specifying, visualizing,
      constructing, and documenting software systems. It provides a common vocabulary and notation
      for software design, making it easier to communicate complex designs among team members.
    </p>

    <h2 className="text-2xl font-bold mt-6">Types of UML Diagrams</h2>
    <p className="leading-relaxed">
      UML 2.0 defines 14 types of diagrams divided into two main categories: Structural Diagrams
      and Behavioral Diagrams.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Structural Diagrams</h4>
        <p className="mt-2 text-sm">Show the static structure of the system</p>
        <ul className="mt-2 text-sm space-y-1">
          <li>Class Diagram</li>
          <li>Object Diagram</li>
          <li>Component Diagram</li>
          <li>Deployment Diagram</li>
          <li>Package Diagram</li>
          <li>Composite Structure Diagram</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Behavioral Diagrams</h4>
        <p className="mt-2 text-sm">Show the dynamic behavior of the system</p>
        <ul className="mt-2 text-sm space-y-1">
          <li>Use Case Diagram</li>
          <li>Sequence Diagram</li>
          <li>Activity Diagram</li>
          <li>State Machine Diagram</li>
          <li>Communication Diagram</li>
          <li>Interaction Overview Diagram</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Class Diagram</h2>
    <p className="leading-relaxed">
      The most commonly used UML diagram. It shows classes, their attributes, methods, and the
      relationships between classes.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold">Class Notation</h4>
      <div className="border border-gray-400 mt-2 inline-block">
        <div className="bg-gray-200 p-2 border-b border-gray-400 font-bold text-center">ClassName</div>
        <div className="p-2 border-b border-gray-400 text-sm font-mono">
          - privateAttribute: Type<br />
          + publicAttribute: Type<br />
          # protectedAttribute: Type
        </div>
        <div className="p-2 text-sm font-mono">
          + publicMethod(): ReturnType<br />
          - privateMethod(): void
        </div>
      </div>
    </div>

    <h3 className="text-xl font-semibold mt-4">Access Modifiers</h3>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li><strong>+ (Public):</strong> Accessible from anywhere</li>
      <li><strong>- (Private):</strong> Accessible only within the class</li>
      <li><strong># (Protected):</strong> Accessible within the class and subclasses</li>
      <li><strong>~ (Package):</strong> Accessible within the same package</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Relationships in Class Diagrams</h3>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Association (------)</h4>
        <p className="text-sm mt-1">A general relationship between classes. Example: Teacher teaches Student</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Aggregation (------&lt;&gt;)</h4>
        <p className="text-sm mt-1">A "has-a" relationship where parts can exist independently. Example: Department has Employees</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Composition (------&lt;filled&gt;)</h4>
        <p className="text-sm mt-1">A strong "has-a" relationship where parts cannot exist without the whole. Example: House has Rooms</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Inheritance (------&gt; with hollow arrow)</h4>
        <p className="text-sm mt-1">An "is-a" relationship. Example: Dog is an Animal</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Implementation (- - - -&gt; with hollow arrow)</h4>
        <p className="text-sm mt-1">A class implements an interface. Example: ArrayList implements List</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Dependency (- - - -&gt;)</h4>
        <p className="text-sm mt-1">A class uses another class. Example: OrderProcessor uses PaymentGateway</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Sequence Diagram</h2>
    <p className="leading-relaxed">
      Shows how objects interact in a particular scenario, displaying the sequence of messages
      exchanged between objects over time.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`User        OrderService        PaymentService        Database
  |              |                     |                    |
  |--placeOrder->|                     |                    |
  |              |----processPayment-->|                    |
  |              |                     |----saveOrder------>|
  |              |                     |<---confirmation----|
  |              |<----paymentResult---|                    |
  |<--orderConfirm|                     |                    |`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Use Case Diagram</h2>
    <p className="leading-relaxed">
      Shows the functionality of a system from a user's perspective. It depicts actors (users or
      external systems) and their interactions with the system's use cases.
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Actor:</strong> Stick figure representing a user or external system</li>
      <li><strong>Use Case:</strong> Oval representing a system function</li>
      <li><strong>System Boundary:</strong> Rectangle enclosing use cases</li>
      <li><strong>Include:</strong> One use case includes another (&lt;&lt;include&gt;&gt;)</li>
      <li><strong>Extend:</strong> One use case extends another (&lt;&lt;extend&gt;&gt;)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Activity Diagram</h2>
    <p className="leading-relaxed">
      Shows the workflow or flow of activities in a system. Similar to a flowchart, it depicts
      the sequence of activities and decision points.
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Initial Node:</strong> Filled circle (start point)</li>
      <li><strong>Activity:</strong> Rounded rectangle</li>
      <li><strong>Decision:</strong> Diamond shape</li>
      <li><strong>Fork/Join:</strong> Thick horizontal bar for parallel activities</li>
      <li><strong>Final Node:</strong> Filled circle within a circle (end point)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">State Machine Diagram</h2>
    <p className="leading-relaxed">
      Shows the different states an object can be in and the transitions between those states
      based on events.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`Order States:

[*] --> Created
Created --> Confirmed : confirm()
Confirmed --> Processing : process()
Processing --> Shipped : ship()
Shipped --> Delivered : deliver()
Created --> Cancelled : cancel()
Confirmed --> Cancelled : cancel()
Delivered --> [*]
Cancelled --> [*]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Keep diagrams simple and focused on one aspect</li>
      <li>Use consistent notation throughout the project</li>
      <li>Add brief descriptions where needed</li>
      <li>Update diagrams when design changes</li>
      <li>Use appropriate diagram types for different purposes</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Interview Tip:</strong> In LLD interviews, Class Diagrams and Sequence Diagrams are
        the most frequently used. Practice drawing them quickly and accurately to communicate your
        design effectively.
      </p>
    </div>
  </div>
);

export default UMLDiagrams;
