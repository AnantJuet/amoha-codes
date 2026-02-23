import React from 'react';

const WhatIsHLD: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is High Level Design (HLD)?
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      High Level Design (HLD) is the architectural blueprint of a software system that describes
      the overall system architecture, components, their interactions, and data flow. It provides
      a bird's-eye view of the system without diving into implementation details.
    </p>

    <h2 className="text-2xl font-bold mt-6">HLD vs LLD</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">High Level Design (HLD)</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>System architecture overview</li>
          <li>Component interactions</li>
          <li>Technology stack decisions</li>
          <li>Data flow between services</li>
          <li>Non-functional requirements</li>
          <li>Target audience: Architects, stakeholders</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Low Level Design (LLD)</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Class diagrams and interfaces</li>
          <li>Database schemas</li>
          <li>API specifications</li>
          <li>Algorithm details</li>
          <li>Code-level design patterns</li>
          <li>Target audience: Developers</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Components of HLD</h2>

    <div className="grid grid-cols-1 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">1. System Architecture Diagram</h4>
        <p className="mt-2 text-sm">Visual representation of all system components and their connections.</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">2. Component Design</h4>
        <p className="mt-2 text-sm">Description of each major component, its responsibilities, and interfaces.</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">3. Data Flow Design</h4>
        <p className="mt-2 text-sm">How data moves through the system, from input to storage to output.</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">4. Technology Stack</h4>
        <p className="mt-2 text-sm">Programming languages, frameworks, databases, and infrastructure choices.</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">5. Integration Points</h4>
        <p className="mt-2 text-sm">External systems, third-party APIs, and inter-service communication.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">HLD Process</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li><strong>Requirement Analysis:</strong> Understand functional and non-functional requirements</li>
      <li><strong>Identify Components:</strong> Break down the system into logical components</li>
      <li><strong>Define Interactions:</strong> Specify how components communicate</li>
      <li><strong>Select Technologies:</strong> Choose appropriate tech stack</li>
      <li><strong>Address Scalability:</strong> Plan for growth and high availability</li>
      <li><strong>Security Design:</strong> Incorporate security at architecture level</li>
      <li><strong>Document:</strong> Create diagrams and documentation</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Example: E-commerce Platform HLD</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Architecture Overview:</p>
      <pre className="mt-2 text-sm overflow-x-auto">
{`                           ┌──────────────┐
                           │   CDN        │
                           └──────┬───────┘
                                  │
┌──────────────┐          ┌───────▼───────┐
│  Mobile App  │──────────►│ Load Balancer│
└──────────────┘          └───────┬───────┘
                                  │
┌──────────────┐          ┌───────▼───────┐
│  Web Client  │──────────►│  API Gateway │
└──────────────┘          └───────┬───────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
┌───────▼───────┐        ┌────────▼────────┐       ┌───────▼───────┐
│ User Service  │        │ Product Service │       │ Order Service │
└───────┬───────┘        └────────┬────────┘       └───────┬───────┘
        │                         │                         │
┌───────▼───────┐        ┌────────▼────────┐       ┌───────▼───────┐
│   User DB     │        │   Product DB    │       │   Order DB    │
│  (PostgreSQL) │        │   (MongoDB)     │       │  (PostgreSQL) │
└───────────────┘        └─────────────────┘       └───────────────┘
                                  │
                         ┌────────▼────────┐
                         │  Redis Cache    │
                         └─────────────────┘

                         ┌─────────────────┐
                         │  Message Queue  │
                         │    (Kafka)      │
                         └─────────────────┘`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Non-Functional Requirements in HLD</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Requirement</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">HLD Consideration</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Scalability</td>
            <td className="p-3 border">Handle growing load</td>
            <td className="p-3 border">Microservices, load balancing, auto-scaling</td>
          </tr>
          <tr>
            <td className="p-3 border">Availability</td>
            <td className="p-3 border">System uptime (99.9%)</td>
            <td className="p-3 border">Redundancy, failover, multi-region</td>
          </tr>
          <tr>
            <td className="p-3 border">Performance</td>
            <td className="p-3 border">Response time, throughput</td>
            <td className="p-3 border">Caching, CDN, database optimization</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">Data protection</td>
            <td className="p-3 border">Authentication, encryption, API security</td>
          </tr>
          <tr>
            <td className="p-3 border">Reliability</td>
            <td className="p-3 border">Consistent operation</td>
            <td className="p-3 border">Circuit breakers, retry logic, monitoring</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common HLD Patterns</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Layered Architecture</h4>
        <p className="mt-2 text-sm">Presentation, Business, Data layers separated</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Microservices</h4>
        <p className="mt-2 text-sm">Independent, loosely coupled services</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Event-Driven</h4>
        <p className="mt-2 text-sm">Components communicate through events</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg">
        <h4 className="font-bold text-orange-800">CQRS</h4>
        <p className="mt-2 text-sm">Separate read and write operations</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">HLD Deliverables</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Architecture Diagram:</strong> Visual system overview</li>
      <li><strong>Component Specifications:</strong> Each component's purpose and responsibilities</li>
      <li><strong>Data Flow Diagrams:</strong> How information moves through the system</li>
      <li><strong>Technology Stack Document:</strong> Chosen technologies with justification</li>
      <li><strong>API Contracts:</strong> High-level interface definitions</li>
      <li><strong>Deployment Architecture:</strong> Infrastructure and cloud design</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Advantages of HLD</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Clear Vision:</strong> Everyone understands the big picture</li>
      <li><strong>Better Planning:</strong> Identifies potential issues early</li>
      <li><strong>Team Alignment:</strong> All teams work towards same architecture</li>
      <li><strong>Stakeholder Communication:</strong> Non-technical people can understand</li>
      <li><strong>Risk Reduction:</strong> Architectural decisions are validated upfront</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Mistakes in HLD</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Over-engineering:</strong> Making it more complex than needed</li>
      <li><strong>Ignoring Scale:</strong> Not planning for growth</li>
      <li><strong>Skipping Security:</strong> Adding security as an afterthought</li>
      <li><strong>No Failure Planning:</strong> Not considering what can go wrong</li>
      <li><strong>Vendor Lock-in:</strong> Tight coupling to specific technologies</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">HLD in System Design Interviews</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Interview Approach:</p>
      <ol className="mt-2 list-decimal list-inside space-y-1">
        <li>Clarify requirements and constraints</li>
        <li>Estimate scale (users, data, requests)</li>
        <li>Define high-level components</li>
        <li>Design data model at high level</li>
        <li>Discuss API design</li>
        <li>Address scalability and bottlenecks</li>
        <li>Consider trade-offs and alternatives</li>
      </ol>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> HLD should be a living document that evolves with the system.
        Regularly review and update the architecture as requirements change and the system grows.
      </p>
    </div>
  </div>
);

export default WhatIsHLD;
