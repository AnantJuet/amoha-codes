import React from 'react';

interface PlaceholderTopicProps {
  title: string;
}

const PlaceholderTopic: React.FC<PlaceholderTopicProps> = ({ title }) => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      {title}
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 20 Jan, 2026</p>

    <h2 className="text-2xl font-bold mt-6">Introduction to System Design</h2>
    <p className="text-lg leading-relaxed">
      System design is the process of defining the architecture, components, modules, interfaces, and data
      for a system to satisfy specified requirements. It's a crucial skill for senior engineering roles.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Learn System Design?</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li><strong>Senior Interviews:</strong> Required for senior/staff engineer positions</li>
      <li><strong>Architecture Skills:</strong> Build scalable, reliable systems</li>
      <li><strong>Trade-off Analysis:</strong> Make informed technical decisions</li>
      <li><strong>Big Picture Thinking:</strong> Understand how components work together</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Concepts</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
        <h3 className="font-semibold text-blue-800">Scalability</h3>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li><strong>Vertical:</strong> Add more power to existing machine</li>
          <li><strong>Horizontal:</strong> Add more machines</li>
          <li>Horizontal scaling is preferred for large systems</li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
        <h3 className="font-semibold text-green-800">Load Balancing</h3>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>Distributes traffic across servers</li>
          <li>Round Robin, Least Connections, IP Hash</li>
          <li>Examples: Nginx, HAProxy, AWS ELB</li>
        </ul>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
        <h3 className="font-semibold text-purple-800">Caching</h3>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>Store frequently accessed data in memory</li>
          <li>Redis, Memcached, CDN</li>
          <li>Cache invalidation strategies</li>
        </ul>
      </div>

      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
        <h3 className="font-semibold text-orange-800">Database Design</h3>
        <ul className="list-disc ml-4 mt-2 text-sm">
          <li>SQL vs NoSQL trade-offs</li>
          <li>Sharding, Replication, Partitioning</li>
          <li>ACID vs BASE properties</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">System Design Fundamentals</h2>

    <h3 className="text-xl font-semibold mt-4">CAP Theorem</h3>
    <p className="mt-2">A distributed system can only guarantee 2 out of 3:</p>
    <ul className="list-disc ml-6 mt-2">
      <li><strong>Consistency:</strong> All nodes see the same data at the same time</li>
      <li><strong>Availability:</strong> Every request receives a response</li>
      <li><strong>Partition Tolerance:</strong> System continues despite network failures</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Latency Numbers Every Programmer Should Know</h3>
    <table className="min-w-full border border-gray-300 mt-3">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Operation</th>
          <th className="border border-gray-300 px-4 py-2">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">L1 cache reference</td>
          <td className="border border-gray-300 px-4 py-2">0.5 ns</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">L2 cache reference</td>
          <td className="border border-gray-300 px-4 py-2">7 ns</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Main memory reference</td>
          <td className="border border-gray-300 px-4 py-2">100 ns</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">SSD random read</td>
          <td className="border border-gray-300 px-4 py-2">150 μs</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Round trip within datacenter</td>
          <td className="border border-gray-300 px-4 py-2">500 μs</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Disk seek</td>
          <td className="border border-gray-300 px-4 py-2">10 ms</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Common System Design Questions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
      <div className="bg-gray-50 p-3 rounded border">Design URL Shortener (TinyURL)</div>
      <div className="bg-gray-50 p-3 rounded border">Design Twitter/X</div>
      <div className="bg-gray-50 p-3 rounded border">Design Instagram</div>
      <div className="bg-gray-50 p-3 rounded border">Design Netflix</div>
      <div className="bg-gray-50 p-3 rounded border">Design WhatsApp</div>
      <div className="bg-gray-50 p-3 rounded border">Design Uber</div>
      <div className="bg-gray-50 p-3 rounded border">Design Rate Limiter</div>
      <div className="bg-gray-50 p-3 rounded border">Design Web Crawler</div>
    </div>

    <h2 className="text-2xl font-bold mt-6">System Design Interview Framework</h2>
    <pre className="bg-gray-100 text-black p-4 rounded-md font-mono mt-3 overflow-x-auto">
{`Step 1: Clarify Requirements (5 min)
├── Functional requirements
├── Non-functional requirements
└── Scale estimates (users, requests/sec, storage)

Step 2: High-Level Design (10 min)
├── Draw main components
├── Show data flow
└── Identify APIs

Step 3: Deep Dive (20 min)
├── Database schema
├── API design
├── Scaling strategies
└── Handle edge cases

Step 4: Wrap Up (5 min)
├── Summarize design
├── Discuss trade-offs
└── Mention future improvements`}
    </pre>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>💡 Pro Tip:</strong> In system design interviews, there's no single "correct" answer.
        Focus on demonstrating your thought process, asking clarifying questions, and discussing trade-offs.
        Communication is as important as technical knowledge!
      </p>
    </div>
  </div>
);

export default PlaceholderTopic;
