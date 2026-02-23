import React from 'react';

const WhatIsScalability: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is Scalability?
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Scalability refers to a system's ability to grow smoothly and handle increased demand while
      maintaining performance, reliability, and efficiency.
    </p>

    <h2 className="text-2xl font-bold mt-6">Importance of Scalability in System Design</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Handles rising user traffic and workload effectively</li>
      <li>Supports growth in data and computing needs</li>
      <li>Maintains performance under increased load</li>
      <li>Avoids major redesign during expansion</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Why is Scalability Important?</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Managing Growth:</strong> Handles more users, data, and traffic without losing speed or reliability</li>
      <li><strong>Improving Performance:</strong> Distributes load across resources for faster processing and responses</li>
      <li><strong>Ensuring Availability:</strong> Keeps systems running during traffic spikes or component failures</li>
      <li><strong>Cost-effectiveness:</strong> Scales resources up or down as needed, reducing unnecessary costs</li>
      <li><strong>Encouraging Innovation:</strong> Makes it easier to add new features and adapt to market changes</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">How to Achieve Scalability?</h2>

    <h3 className="text-xl font-semibold mt-4">1. Vertical Scaling (Make It Bigger)</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>In tech, it means adding CPU, memory, or storage to the same server</li>
      <li>Suitable for small applications and quick scaling needs</li>
      <li>Limited by hardware, as upgrades can't continue indefinitely</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">2. Horizontal Scaling (Get More Cars)</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Adds more servers or instances instead of upgrading one</li>
      <li>Distributes traffic evenly across resources</li>
      <li>Ideal for large applications with many users</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">3. Microservices (Divide and Conquer)</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Treats the app as small, independent services</li>
      <li>Scales only the required parts instead of the whole system</li>
      <li>Improves flexibility and efficient resource usage</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">4. Serverless (No Servers, No Problems)</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Cloud provider manages infrastructure automatically</li>
      <li>Pay only for what you use</li>
      <li>Automatically scales based on demand</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Components that Help Increase Scalability</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Load Balancers:</strong> Distribute traffic across multiple servers</li>
      <li><strong>Caching:</strong> Store frequently accessed data for faster retrieval</li>
      <li><strong>CDN:</strong> Serve content from locations closer to users</li>
      <li><strong>Database Sharding:</strong> Split data across multiple database instances</li>
      <li><strong>Message Queues:</strong> Handle asynchronous processing</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples of Scalable Systems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Netflix:</strong> Uses microservices and CDN to stream to millions of users</li>
      <li><strong>Amazon:</strong> Scales infrastructure during peak shopping seasons</li>
      <li><strong>Google:</strong> Handles billions of search queries daily using distributed systems</li>
      <li><strong>Twitter:</strong> Processes millions of tweets and real-time notifications</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Challenges and Trade-offs</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Increased complexity in system management</li>
      <li>Data consistency challenges in distributed systems</li>
      <li>Network latency between distributed components</li>
      <li>Cost of additional infrastructure</li>
      <li>Debugging and monitoring become more difficult</li>
    </ul>
  </div>
);

export default WhatIsScalability;
