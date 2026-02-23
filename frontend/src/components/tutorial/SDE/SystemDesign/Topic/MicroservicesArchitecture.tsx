import React from 'react';

const MicroservicesArchitecture: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Microservices Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Microservices are an architectural approach to developing software applications as a collection of
      small, independent services that communicate with each other over a network. Instead of building a
      monolithic application where all functionality is tightly integrated, microservices break down the
      application into smaller, loosely coupled services.
    </p>

    <h2 className="text-2xl font-bold mt-6">How Do Microservices Work?</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Each microservice handles a particular business feature, like user authentication or product management</li>
      <li>Services interact via APIs, facilitating standardized information exchange</li>
      <li>Different technologies can be used for each service</li>
      <li>Microservices can be updated independently, reducing risks during changes</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Main Components</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Microservices:</strong> Small, loosely coupled services handling specific business functions</li>
      <li><strong>API Gateway:</strong> Central entry point for external clients, manages requests, authentication, and routing</li>
      <li><strong>Service Registry:</strong> Keeps track of locations and addresses of all microservices</li>
      <li><strong>Load Balancer:</strong> Distributes incoming traffic across multiple service instances</li>
      <li><strong>Containerization:</strong> Docker encapsulates microservices; Kubernetes manages deployment and scaling</li>
      <li><strong>Message Broker:</strong> Facilitates pub/sub asynchronous interaction between components</li>
      <li><strong>Database per Service:</strong> Each microservice usually has its own database</li>
      <li><strong>Caching:</strong> Stores frequently accessed data for improved performance</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Design Patterns</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. API Gateway Pattern</h4>
        <p>Simplifies the client's experience by hiding the complexities of multiple services behind one interface. Handles authentication, logging, and rate limiting.</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Service Registry Pattern</h4>
        <p>Like a phone book for microservices. Maintains a list of all active services and their locations. Services register themselves when they start.</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Circuit Breaker Pattern</h4>
        <p>If a service fails repeatedly, the circuit breaker trips, preventing further requests. After a timeout, allows limited requests to test if the service is back online.</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">4. Saga Pattern</h4>
        <p>Manages complex business processes spanning multiple services. Breaks down processes into smaller steps with compensating actions if one step fails.</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">5. Event Sourcing Pattern</h4>
        <p>Each event describes a change that occurred, allowing services to reconstruct current state by replaying event history.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">E-Commerce Microservices Example</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>User Service:</strong> Handles user accounts and preferences</li>
      <li><strong>Search Service:</strong> Helps users find products quickly</li>
      <li><strong>Catalog Service:</strong> Manages the product listings</li>
      <li><strong>Cart Service:</strong> Lets users add, remove, or change items</li>
      <li><strong>Order Service:</strong> Processes customer orders</li>
      <li><strong>Payment Service:</strong> Manages secure transactions</li>
      <li><strong>Logistics Service:</strong> Coordinates delivery</li>
      <li><strong>Warehouse Service:</strong> Keeps track of inventory</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Migration Steps (Strangler Pattern)</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Evaluate your current monolithic application</li>
      <li>Break down into specific business functions</li>
      <li>Gradually replace parts of the monolith with microservices</li>
      <li>Establish clear APIs and contracts</li>
      <li>Create CI/CD pipelines for automated deployment</li>
      <li>Introduce service discovery mechanisms</li>
      <li>Set up centralized logging and monitoring</li>
      <li>Manage cross-cutting concerns consistently</li>
      <li>Iterate and refine based on feedback</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Independent deployment and scaling of services</li>
      <li>Technology flexibility for each service</li>
      <li>Better fault isolation</li>
      <li>Easier to understand and maintain individual services</li>
      <li>Supports agile development practices</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Challenges</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Increased complexity in distributed systems</li>
      <li>Network latency and reliability concerns</li>
      <li>Data consistency across services</li>
      <li>Testing and debugging distributed systems</li>
      <li>Operational overhead</li>
    </ul>
  </div>
);

export default MicroservicesArchitecture;
