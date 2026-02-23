import React from 'react';

const SDIntroduction: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to System Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      System design is the process of planning, structuring and defining the architecture of a Software System.
      It lays out the overall architecture of the system — how major components interact, what services or
      modules will exist, and how data flows among them.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is System Design?</h2>
    <p className="leading-relaxed">
      System Design involves translating user requirements into a detailed blueprint that guides the
      implementation phase. The goal is to create a well-organized and efficient structure that meets
      the intended purpose while considering factors like scalability, maintainability, and performance.
    </p>

    <h2 className="text-2xl font-bold mt-6">System Design in SDLC</h2>
    <p className="leading-relaxed">
      In System Design Life Cycle, without the designing phase, one cannot jump to the implementation
      or the testing part. System Design is a vital step and also provides the backbone to handle
      exceptional scenarios because it represents the business logic of the software.
    </p>

    <h2 className="text-2xl font-bold mt-6">Types of System Design</h2>
    <p className="leading-relaxed">
      System Design can be divided into two complementary parts:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>High-Level Design (HLD):</strong> Gives you the big picture - how the system fits together, its core structure, and major decisions. Done by architects, stakeholders and managers.</li>
      <li><strong>Low-Level Design (LLD):</strong> Covers how each part works and is implemented internally. Focuses on detailed implementation specifics.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Topics in High Level Design</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>System architecture overview: Defines the major components, modules, and how they interact</li>
      <li>Data flow and component interaction: Illustrates how data moves between modules</li>
      <li>Technology stack and infrastructure: High-level decisions on frameworks, platforms, databases</li>
      <li>Module responsibilities: Describes what each module does and how they relate</li>
      <li>Performance & trade-offs: Includes design trade-offs, scalability, security considerations</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Prerequisites for System Design</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Basic Coding Skills (Data Structures and Algorithms)</li>
      <li>Knowledge of databases (SQL and NoSQL), caches (Redis, Memcached, CDNs), and APIs</li>
      <li>Understanding of Functional and Non-Functional Requirements</li>
      <li>Networking and Security Fundamentals (DNS, HTTP, WebSockets, OAuth, JWT)</li>
      <li>Message queues and streaming tools like Kafka or RabbitMQ</li>
      <li>Knowledge of Microservices vs. Monoliths, fault tolerance, load balancing</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Tips for System Design Interviews</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>When given a Design Problem, start breaking it down into small components</li>
      <li>Communicate well with the Interviewer</li>
      <li>Make reasonable assumptions while designing the System</li>
      <li>Focus on both functional and non-functional requirements</li>
      <li>Consider scalability, availability, and performance from the start</li>
    </ul>
  </div>
);

export default SDIntroduction;
