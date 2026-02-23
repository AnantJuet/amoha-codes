import React from "react";

const DSGoals: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Goals and Design Issues of Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A distributed system is a network of interconnected computers that enhances user experience,
      resource utilization, scalability, reliability, and performance. Understanding the goals
      helps in designing effective distributed applications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Primary Goals</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">1. Resource Sharing</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Share hardware (printers, storage devices)</li>
          <li>Share software (applications, services)</li>
          <li>Share data across the system</li>
          <li>Reduce costs through shared infrastructure</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">2. Transparency</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Access: Hide data representation differences</li>
          <li>Location: Hide where resources are located</li>
          <li>Migration: Hide movement of resources</li>
          <li>Replication: Hide copies of resources</li>
          <li>Failure: Hide failures and recovery</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">3. Openness</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Standard interfaces and protocols</li>
          <li>Interoperability between systems</li>
          <li>Portability of applications</li>
          <li>Extensibility for new features</li>
        </ul>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">4. Scalability</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Handle growth in users</li>
          <li>Handle growth in resources</li>
          <li>Handle geographic expansion</li>
          <li>Maintain performance under load</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Goals Overview</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Goals of Distributed Systems:

┌─────────────────────────────────────────────────────────────────┐
│                     DISTRIBUTED SYSTEM GOALS                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │  PERFORMANCE │  │  RELIABILITY │  │  SCALABILITY │           │
│  │    Speed     │  │ Fault Tol.   │  │  Growth      │           │
│  │  Throughput  │  │  Backup      │  │  Flexibility │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │   RESOURCE   │  │ TRANSPARENCY │  │   SECURITY   │           │
│  │   SHARING    │  │  Hide        │  │  Protection  │           │
│  │  Utilization │  │  Complexity  │  │  Encryption  │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Goal: Performance Enhancement</h2>
    <p className="leading-relaxed">
      Distributed systems try to make things faster by dividing bigger tasks into small chunks
      and processing them simultaneously on different computers. When you search for something
      on the internet, the search engine distributes the work among several servers and retrieves
      results in seconds.
    </p>

    <h2 className="text-3xl font-bold mt-8">Goal: Reliability and Fault Tolerance</h2>
    <p className="leading-relaxed">
      Distributed systems ensure reliability by minimizing the impact of individual computer failures.
      If one computer fails, other computers keep the system running smoothly. They come with backup
      plans - if any computer fails, they redirect tasks to other computers, ensuring minimal delay
      and a smooth experience.
    </p>

    <h2 className="text-3xl font-bold mt-8">Goal: Scalability</h2>
    <p className="leading-relaxed">
      Distributed systems are experts at handling increased demands. They manage demands by
      incorporating more computers into the system, running everything smoothly while handling
      more users. This allows the system to grow without performance degradation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Goal: Security and Data Integrity</h2>
    <p className="leading-relaxed">
      Distributed systems have special codes and locks to protect data from unauthorized access.
      They use renowned techniques for encryption and authentication to keep information safe.
      Data security is prioritized as you keep your secrets safe.
    </p>

    <h2 className="text-3xl font-bold mt-8">Goal: Load Balancing</h2>
    <p className="leading-relaxed">
      Distributed systems ensure good resource utilization by evenly distributing load to all
      available computers. This prevents single-machine overload and bottlenecks, allowing the
      system to handle high volumes of data without slowing down.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Transparency</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Transparency Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Access</td>
            <td className="p-3 border">
              Hide differences in data representation and how resources are accessed
            </td>
            <td className="p-3 border">RPC makes remote calls look like local calls</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Location</td>
            <td className="p-3 border">
              Hide where resources are physically located
            </td>
            <td className="p-3 border">DNS maps domain names to IP addresses</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Migration</td>
            <td className="p-3 border">
              Hide that a resource may move to another location
            </td>
            <td className="p-3 border">VM migration between physical servers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Relocation</td>
            <td className="p-3 border">
              Hide that a resource may be moved while in use
            </td>
            <td className="p-3 border">Mobile users moving between networks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Replication</td>
            <td className="p-3 border">
              Hide that a resource is replicated
            </td>
            <td className="p-3 border">Database replicas appearing as single DB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concurrency</td>
            <td className="p-3 border">
              Hide that a resource may be shared by several users
            </td>
            <td className="p-3 border">Multiple users editing same document</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failure</td>
            <td className="p-3 border">
              Hide the failure and recovery of a resource
            </td>
            <td className="p-3 border">Automatic failover to backup servers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Design Principles</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-3">
        <li>
          <strong>Modularity:</strong> Design systems as independent modules that can be
          developed, deployed, and scaled separately.
        </li>
        <li>
          <strong>Loose Coupling:</strong> Minimize dependencies between components to
          improve flexibility and maintainability.
        </li>
        <li>
          <strong>High Cohesion:</strong> Keep related functionality together within
          components for clarity and efficiency.
        </li>
        <li>
          <strong>Fail-Safe Design:</strong> Plan for failures and implement graceful
          degradation mechanisms.
        </li>
        <li>
          <strong>Incremental Scalability:</strong> Design for growth by adding resources
          incrementally without major restructuring.
        </li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Resource sharing enables cost-effective utilization of hardware and software</li>
        <li>Transparency hides the distributed nature from users</li>
        <li>Openness ensures interoperability and extensibility</li>
        <li>Scalability allows handling growing demands efficiently</li>
        <li>Reliability through fault tolerance ensures continuous operation</li>
        <li>Security protects data and ensures authorized access</li>
      </ul>
    </div>
  </div>
);

export default DSGoals;
