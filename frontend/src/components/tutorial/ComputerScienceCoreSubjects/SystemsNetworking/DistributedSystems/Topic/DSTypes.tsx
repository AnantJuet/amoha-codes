import React from "react";

const DSTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Understanding the architecture of systems is crucial for designing efficient and effective
      solutions. Centralized, decentralized, and distributed systems each offer unique advantages
      and challenges.
    </p>

    <h2 className="text-3xl font-bold mt-8">Centralized Systems</h2>
    <p className="leading-relaxed">
      Centralized systems are a type of computing architecture where all or most of the processing
      and data storage is done on a single central server or a group of closely connected servers.
      This central server manages all operations, resources, and data, acting as the hub through
      which all client requests are processed.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Centralized System Architecture:

     ┌─────────────────────────────────────────┐
     │          CENTRAL SERVER                 │
     │    ┌─────────────────────────────┐      │
     │    │   All Processing & Storage  │      │
     │    │   - Data Management         │      │
     │    │   - Business Logic          │      │
     │    │   - User Management         │      │
     │    └─────────────────────────────┘      │
     └───────────────────┬─────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
    ┌────┴────┐    ┌────┴────┐    ┌────┴────┐
    │ Client  │    │ Client  │    │ Client  │
    │   A     │    │   B     │    │   C     │
    └─────────┘    └─────────┘    └─────────┘`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Single Point of Control</td>
            <td className="p-3 border">
              All data processing and management tasks handled by central server.
              Easier to manage and maintain from one location.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Simplicity</td>
            <td className="p-3 border">
              Simplified architecture with clear structure. Easy to deploy and manage.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Efficiency</td>
            <td className="p-3 border">
              Central server can be optimized for performance. Easier to implement security.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability Issues</td>
            <td className="p-3 border">
              Limited scalability as central server can become bottleneck.
              Adding more clients strains server resources.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Single Point of Failure</td>
            <td className="p-3 border">
              If central server fails, entire system becomes inoperative.
              High availability measures essential.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Decentralized Systems</h2>
    <p className="leading-relaxed">
      Decentralized systems are computing architectures where multiple nodes, often spread across
      different locations, share control and processing power without a single central authority.
      Each node operates independently but collaborates with others to achieve common goals.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Decentralized System Architecture:

    ┌─────────┐         ┌─────────┐         ┌─────────┐
    │  Node   │◄───────►│  Node   │◄───────►│  Node   │
    │   A     │         │   B     │         │   C     │
    └────┬────┘         └────┬────┘         └────┬────┘
         │                   │                   │
         │    ┌─────────┐    │    ┌─────────┐    │
         └───►│  Node   │◄───┴───►│  Node   │◄───┘
              │   D     │         │   E     │
              └─────────┘         └─────────┘

    (Each node operates independently, no central authority)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed Systems</h2>
    <p className="leading-relaxed">
      Distributed systems are computing architectures where multiple independent nodes or computers
      work together to achieve a common goal. These nodes communicate and coordinate over a network,
      appearing as a single coherent system to the end user.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed System Architecture:

    ┌──────────────────────────────────────────────────┐
    │              USER'S VIEW: Single System          │
    └──────────────────────────────────────────────────┘
                            │
                    [Abstraction Layer]
                            │
    ┌───────────────────────┼───────────────────────┐
    │                       │                       │
┌───┴───┐               ┌───┴───┐               ┌───┴───┐
│Node A │◄─────────────►│Node B │◄─────────────►│Node C │
│Server │               │Server │               │Server │
└───┬───┘               └───┬───┘               └───┬───┘
    │                       │                       │
    └───────────────────────┴───────────────────────┘
                    [Network Layer]`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Table</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Centralized</th>
            <th className="p-3 border">Decentralized</th>
            <th className="p-3 border">Distributed</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Control</td>
            <td className="p-3 border">Single central server</td>
            <td className="p-3 border">Multiple independent nodes</td>
            <td className="p-3 border">Interconnected nodes as single system</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authority</td>
            <td className="p-3 border">Centralized control</td>
            <td className="p-3 border">No central authority</td>
            <td className="p-3 border">Collaborative coordination</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failure Risk</td>
            <td className="p-3 border">High - single point of failure</td>
            <td className="p-3 border">Lower - nodes operate independently</td>
            <td className="p-3 border">Low - fault tolerant design</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Limited (vertical only)</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Excellent (horizontal)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Loosely vs Tightly Coupled Systems</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Loosely Coupled</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Distributed memory instead of shared memory</li>
          <li>Lower data rate between processors</li>
          <li>Connected through Message Transfer System (MTS)</li>
          <li>Good scalability and fault tolerance</li>
          <li>Suitable for tasks with less inter-processor interaction</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Tightly Coupled</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Shared memory architecture</li>
          <li>Higher data rate between processors</li>
          <li>Connected through high-speed buses</li>
          <li>Faster communication between processors</li>
          <li>Better for tasks requiring tight synchronization</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parallel vs Distributed Computing</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Parallel Computing</th>
            <th className="p-3 border">Distributed Computing</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Memory</td>
            <td className="p-3 border">Shared or distributed</td>
            <td className="p-3 border">No shared memory, message passing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Goal</td>
            <td className="p-3 border">Speed up computation</td>
            <td className="p-3 border">Resource sharing and reliability</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Appearance</td>
            <td className="p-3 border">Single system with multiple processors</td>
            <td className="p-3 border">Multiple autonomous computers as single system</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Task Division</td>
            <td className="p-3 border">Multiple tasks assigned simultaneously</td>
            <td className="p-3 border">Single task divided among computers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Use Cases</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Centralized Systems</h4>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Small business applications</li>
          <li>Simple web servers</li>
          <li>Local databases</li>
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Decentralized Systems</h4>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Blockchain networks</li>
          <li>Peer-to-peer networks</li>
          <li>Cryptocurrency systems</li>
        </ul>
      </div>
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Distributed Systems</h4>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Cloud computing platforms</li>
          <li>Social media platforms</li>
          <li>Global databases</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Centralized systems have single point of control and failure</li>
        <li>Decentralized systems distribute control among multiple nodes</li>
        <li>Distributed systems spread resources across multiple locations</li>
        <li>Loosely coupled systems are good for scalability</li>
        <li>Tightly coupled systems are better for synchronized tasks</li>
        <li>Choose architecture based on requirements: simplicity, scalability, or reliability</li>
      </ul>
    </div>
  </div>
);

export default DSTypes;
