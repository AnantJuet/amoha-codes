import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= System Design Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      System Design Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Welcome to the comprehensive System Design tutorial on Amoha Codes. System Design is the process of
      designing the architecture, components, and interfaces for a system so that it meets the end-user
      requirements. This tutorial will help you learn and master System Design concepts from basics to
      advanced level.
    </p>

    <p className="text-lg leading-relaxed">
      System design is important for anyone who wants to build a robust, scalable, and efficient software
      application. Whether you are building a small-scale application or a large one, understanding system
      design allows you to architect solutions that can handle real-world complexities.
    </p>

    {/* What You Will Learn */}
    <h2 className="text-3xl font-bold mt-8">What You Will Learn</h2>
    <p className="leading-relaxed">
      This tutorial provides in-depth coverage of system design concepts, from fundamental principles to
      advanced architectural patterns. Whether you're preparing for system design interviews at top tech
      companies or seeking to design scalable systems, this guide will help you master the subject.
    </p>

    {/* Course Structure */}
    <h2 className="text-3xl font-bold mt-8">Course Structure</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S.No</th>
            <th className="p-3 border">Topic</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">System Design Basics</td>
            <td className="p-3 border">Introduction, key concepts, design principles, requirements</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Scalability</td>
            <td className="p-3 border">Horizontal/vertical scaling, load balancing, caching, CDN</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Database Design</td>
            <td className="p-3 border">SQL vs NoSQL, sharding, replication, CAP theorem</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">High Level Design (HLD)</td>
            <td className="p-3 border">Microservices, API gateway, message queues</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Low Level Design (LLD)</td>
            <td className="p-3 border">SOLID principles, design patterns, UML diagrams</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Design Patterns</td>
            <td className="p-3 border">Singleton, Factory, Observer, Strategy, and more</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">System Components</td>
            <td className="p-3 border">DNS, proxies, rate limiting, consistent hashing</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">Interview Questions</td>
            <td className="p-3 border">Design URL shortener, Twitter, Netflix, Uber, and more</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Why Learn System Design */}
    <h2 className="text-3xl font-bold mt-8">Why Learn System Design?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Interview Preparation:</strong> System design is a critical component of technical interviews at top tech companies like Google, Amazon, Meta, Netflix, and Microsoft</li>
      <li><strong>Build Scalable Systems:</strong> Learn to design systems that can handle millions of users and massive amounts of data</li>
      <li><strong>Architecture Skills:</strong> Develop the ability to make informed architectural decisions for complex systems</li>
      <li><strong>Career Growth:</strong> System design skills are essential for senior engineering and architect roles</li>
      <li><strong>Real-World Applications:</strong> Apply these concepts to build production-ready, distributed systems</li>
      <li><strong>Problem Solving:</strong> Enhance your ability to break down complex problems into manageable components</li>
    </ul>

    {/* Prerequisites */}
    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Basic understanding of programming and data structures</li>
      <li>Familiarity with databases (SQL and NoSQL concepts)</li>
      <li>Basic knowledge of networking (HTTP, TCP/IP, DNS)</li>
      <li>Understanding of APIs and web services</li>
      <li>Basic operating system concepts</li>
    </ul>

    {/* Key Concepts Covered */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts Covered</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Latency & Throughput:</strong> Understanding system performance metrics</li>
      <li><strong>Availability & Reliability:</strong> Designing fault-tolerant systems</li>
      <li><strong>Consistency Models:</strong> Strong vs eventual consistency tradeoffs</li>
      <li><strong>Partitioning & Sharding:</strong> Distributing data across multiple servers</li>
      <li><strong>Caching Strategies:</strong> Improving performance with multi-level caching</li>
      <li><strong>Microservices:</strong> Building loosely coupled, independently deployable services</li>
    </ul>

    {/* Getting Started */}
    <h2 className="text-3xl font-bold mt-8">Getting Started</h2>
    <p className="leading-relaxed">
      Begin your journey by exploring the System Design Basics section, which covers the fundamental
      concepts and terminology. Each topic builds upon previous concepts, so following the sequential
      order is recommended for beginners. Experienced learners can navigate directly to specific topics
      of interest using the sidebar.
    </p>

    <p className="leading-relaxed mt-4">
      Each topic includes detailed explanations, diagrams, examples, and real-world case studies to
      reinforce your understanding. The content is designed to match the depth and rigor expected in
      system design interviews at top tech companies.
    </p>
  </div>
);

export default Home;
