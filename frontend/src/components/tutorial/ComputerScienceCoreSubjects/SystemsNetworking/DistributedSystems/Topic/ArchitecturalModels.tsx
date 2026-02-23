import React from "react";

const ArchitecturalModels: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Architectural Models in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Architectural models describe the way in which components of distributed
      systems are placed and how they interact with each other. These models
      provide a blueprint for organizing system components and managing their
      communications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Major Architectural Styles</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Client-Server</h3>
        <p className="leading-relaxed">
          Clients request services from servers. The server processes requests
          and returns results to clients.
        </p>
        <p className="text-sm mt-2 italic">Example: Web applications, Email</p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Peer-to-Peer</h3>
        <p className="leading-relaxed">
          All nodes have equal capabilities and responsibilities. Each node
          can act as both client and server.
        </p>
        <p className="text-sm mt-2 italic">Example: BitTorrent, Blockchain</p>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Multi-Tier</h3>
        <p className="leading-relaxed">
          System is organized into multiple layers (presentation, logic, data),
          each with specific responsibilities.
        </p>
        <p className="text-sm mt-2 italic">Example: Three-tier web applications</p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Microservices</h3>
        <p className="leading-relaxed">
          Application is composed of small, independent services that communicate
          through well-defined APIs.
        </p>
        <p className="text-sm mt-2 italic">Example: Netflix, Amazon</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Client-Server Architecture</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Client-Server Model:

   ┌──────────────────────────────────────────────┐
   │                  CLIENTS                      │
   │   ┌────────┐  ┌────────┐  ┌────────┐        │
   │   │Client 1│  │Client 2│  │Client 3│        │
   │   └───┬────┘  └───┬────┘  └───┬────┘        │
   └───────┼───────────┼───────────┼──────────────┘
           │           │           │
           │   Request │ Request   │ Request
           ▼           ▼           ▼
   ┌──────────────────────────────────────────────┐
   │                NETWORK                        │
   └───────────────────┬──────────────────────────┘
                       │
                       ▼
   ┌──────────────────────────────────────────────┐
   │                  SERVER                       │
   │    ┌────────────────────────────┐            │
   │    │    Process Requests        │            │
   │    │    Return Responses        │            │
   │    │    Manage Resources        │            │
   │    └────────────────────────────┘            │
   └──────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Three-Tier Architecture</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tier</th>
            <th className="p-3 border">Responsibility</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Presentation</td>
            <td className="p-3 border">
              User interface, display logic
            </td>
            <td className="p-3 border">
              Web browser, Mobile app
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Logic</td>
            <td className="p-3 border">
              Business rules, processing
            </td>
            <td className="p-3 border">
              Application server
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data</td>
            <td className="p-3 border">
              Data storage and retrieval
            </td>
            <td className="p-3 border">
              Database server
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Architectures</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Client-Server</th>
            <th className="p-3 border">Peer-to-Peer</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Limited by server</td>
            <td className="p-3 border">Highly scalable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Management</td>
            <td className="p-3 border">Centralized</td>
            <td className="p-3 border">Distributed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fault Tolerance</td>
            <td className="p-3 border">Single point of failure</td>
            <td className="p-3 border">High resilience</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Security</td>
            <td className="p-3 border">Easier to secure</td>
            <td className="p-3 border">More complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Client-server is the most common architecture for web applications</li>
        <li>Peer-to-peer offers better scalability and fault tolerance</li>
        <li>Multi-tier architecture separates concerns for better maintainability</li>
        <li>Microservices enable independent deployment and scaling</li>
        <li>Choice of architecture depends on application requirements</li>
      </ul>
    </div>
  </div>
);

export default ArchitecturalModels;
