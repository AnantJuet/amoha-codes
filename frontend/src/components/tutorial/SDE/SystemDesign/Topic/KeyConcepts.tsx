import React from 'react';

const KeyConcepts: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Key Concepts and Terminologies
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      System Design is the core concept behind the design of any distributed systems. Understanding key
      terminologies is essential for designing efficient and scalable systems.
    </p>

    <h2 className="text-2xl font-bold mt-6">Throughput in System Design</h2>
    <p className="leading-relaxed">
      Throughput is defined as the measure of amount of data transmitted successfully in a system, in a
      certain amount of time. In simple terms, throughput is considered as how much data is transmitted
      successfully over a period of time. The unit of measure for throughput is bits per second or bps.
    </p>

    <h2 className="text-2xl font-bold mt-6">Latency in System Design</h2>
    <p className="leading-relaxed">
      Latency is defined as the amount of time required for a single data to be delivered successfully.
      Latency is measured in milliseconds (ms). The delay between user input and web application response
      is known as latency.
    </p>

    <h3 className="text-xl font-semibold mt-4">Factors Affecting Latency</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Network Delays:</strong> Time taken for data to travel across the network</li>
      <li><strong>Computational Delays:</strong> Time taken for processing data</li>
      <li><strong>Packet Size:</strong> Smaller packets mean faster transmission</li>
      <li><strong>Medium of Transmission:</strong> Optical fiber is the fastest way of transmission</li>
      <li><strong>Distance Between Nodes:</strong> Greater distance increases latency</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">How to Reduce Latency</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Use a Content Delivery Network (CDN) to reduce distance between users and servers</li>
      <li>Upgrade computer hardware/software for better computational performance</li>
      <li>Implement caching to serve frequently requested data faster</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Availability in System Design</h2>
    <p className="leading-relaxed">
      Availability refers to the percentage of time a system is operational and accessible. It's typically
      measured as a percentage (e.g., 99.9% availability means the system can be down for about 8.76 hours
      per year).
    </p>

    <h3 className="text-xl font-semibold mt-4">How to Increase Availability</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Use redundant systems and components</li>
      <li>Implement failover mechanisms</li>
      <li>Use load balancers to distribute traffic</li>
      <li>Regular health checks and monitoring</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Redundancy in System Design</h2>
    <p className="leading-relaxed">
      Redundancy means having backup components or systems that can take over when the primary ones fail.
      This is crucial for achieving high availability and fault tolerance.
    </p>

    <h2 className="text-2xl font-bold mt-6">CAP Theorem</h2>
    <p className="leading-relaxed">
      The CAP theorem states that a distributed system can only provide two of the following three
      guarantees simultaneously:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Consistency:</strong> Every read receives the most recent write</li>
      <li><strong>Availability:</strong> Every request receives a response</li>
      <li><strong>Partition Tolerance:</strong> System continues to operate despite network partitions</li>
    </ul>
  </div>
);

export default KeyConcepts;
