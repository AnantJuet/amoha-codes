import React from 'react';

const DesignPrinciples: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Design Principles in System Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Design Principles in System Design are a set of considerations that form the basis of any good system.
      These principles help teams with decision-making in the multi-disciplinary field that involves trade-off
      analysis, balancing conflicting needs, and making decisions about design choices that will impact the
      overall system.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Design Principles</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Separation of Concerns</li>
      <li>Encapsulation and Abstraction</li>
      <li>Loose Coupling and High Cohesion</li>
      <li>Scalability and Performance</li>
      <li>Resilience to Fault Tolerance</li>
      <li>Security and Privacy</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">1. Separation of Concerns</h2>
    <p className="leading-relaxed">
      Fundamental design principles that encourage code organization and maintainability include modularity
      and separation of concerns. Developers can concentrate on particular parts of a system independently
      by breaking it up into smaller, self-contained modules, making the system simpler to understand, test,
      and manage.
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Benefits:</strong> Simplifies the system and makes it easier to understand, test and deploy. Enhances maintainability and scalability.</li>
      <li><strong>Examples:</strong> Modular programming, where each module handles specific functionality and reduces interdependencies.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">2. Encapsulation and Abstraction</h2>
    <p className="leading-relaxed">
      These are fundamental design principles that promote information hiding and reduce system complexity.
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Encapsulation:</strong> Bundling data (attributes) and related behaviors (methods) into a single unit, such as a class or module, while restricting direct access to internal details. This is achieved through access modifiers (e.g., private, protected) and well-defined interfaces.</li>
      <li><strong>Abstraction:</strong> Simplifying complex systems by modeling only the essential characteristics while hiding unnecessary implementation details. It provides a high-level logical representation, allowing users to interact with systems without understanding their internal complexities.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">3. Loose Coupling and High Cohesion</h2>
    <p className="leading-relaxed">
      When designing flexible systems, it is important to ensure that coupling should be loose and cohesion
      should be high.
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Coupling:</strong> Refers to the degree of interdependence between software modules. High coupling means modules are closely connected; low coupling means modules are independent.</li>
      <li><strong>Cohesion:</strong> Refers to the degree to which elements within a module work together to fulfill a single, well-defined purpose. High cohesion means elements are closely related and focused on a single purpose.</li>
    </ul>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
      <p className="text-blue-700">
        <strong>Note:</strong> For a well-working system, coupling should be loose and cohesion should be high.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">4. Scalability and Performance</h2>
    <p className="leading-relaxed">
      Building systems intended to manage increasing workloads or vast amounts of data requires careful
      consideration of scalability and performance. System designers should take into account both:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Horizontal Scaling:</strong> Adding more instances or nodes</li>
      <li><strong>Vertical Scaling:</strong> Raising the resources of a single node</li>
    </ul>
    <p className="leading-relaxed mt-4">
      The workload can also be distributed and system responsiveness increased by using strategies like
      load balancing, caching, and asynchronous processing. It's critical to spot possible bottlenecks
      early in the design phase and execute necessary optimizations.
    </p>

    <h2 className="text-2xl font-bold mt-6">5. Resilience and Fault Tolerance</h2>
    <p className="leading-relaxed">
      Systems should be designed to handle failures gracefully. This includes implementing redundancy,
      failover mechanisms, and recovery strategies to ensure the system remains operational even when
      components fail.
    </p>

    <h2 className="text-2xl font-bold mt-6">6. Security and Privacy</h2>
    <p className="leading-relaxed">
      Security should be considered at every level of system design. This includes authentication,
      authorization, encryption, and protecting sensitive data from unauthorized access.
    </p>
  </div>
);

export default DesignPrinciples;
