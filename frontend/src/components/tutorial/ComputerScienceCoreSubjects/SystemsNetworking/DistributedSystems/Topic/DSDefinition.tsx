import React from "react";

const DSDefinition: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is a Distributed System?
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A distributed system is a collection of independent computers that appears to users as
      a single coherent system. These computers communicate and coordinate their actions by
      passing messages over a network to achieve a common goal.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      According to Andrew Tanenbaum: "A distributed system is a collection of independent computers
      that appears to its users as a single coherent system." The key aspect is that the distribution
      of computers is hidden from users.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed System Concept:

+------------------------------------------+
|           User's View                    |
|  +------------------------------------+  |
|  |    Single Coherent System         |  |
|  +------------------------------------+  |
+------------------------------------------+
                    |
                    | (Abstraction)
                    v
+------------------------------------------+
|           Reality                        |
|                                          |
|   +------+    +------+    +------+      |
|   |Node A| <->|Node B| <->|Node C|      |
|   +------+    +------+    +------+      |
|       \\         |           /           |
|        \\        |          /            |
|         +-------+--------+              |
|                 |                       |
|           +----------+                  |
|           |Network   |                  |
|           +----------+                  |
+------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>
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
            <td className="p-3 border font-semibold">Concurrency</td>
            <td className="p-3 border">Multiple processes execute simultaneously across different machines</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">No Global Clock</td>
            <td className="p-3 border">No single global clock for synchronization; requires coordination protocols</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Independent Failures</td>
            <td className="p-3 border">Components can fail independently without affecting the entire system</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Resource Sharing</td>
            <td className="p-3 border">Hardware, software, and data resources are shared among components</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Heterogeneity</td>
            <td className="p-3 border">Different hardware, OS, networks, and programming languages can coexist</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Examples of Distributed Systems</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>The Internet:</strong> Worldwide network of interconnected computers</li>
      <li><strong>Cloud Computing:</strong> AWS, Google Cloud, Azure</li>
      <li><strong>World Wide Web:</strong> Distributed system of web servers and browsers</li>
      <li><strong>Banking Systems:</strong> ATM networks, online banking</li>
      <li><strong>Blockchain Networks:</strong> Bitcoin, Ethereum</li>
      <li><strong>Content Delivery Networks (CDN):</strong> Akamai, Cloudflare</li>
      <li><strong>Distributed Databases:</strong> Cassandra, MongoDB clusters</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Goals of Distributed Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. Resource Sharing
   - Share hardware (printers, storage)
   - Share software (applications, services)
   - Share data across the system

2. Transparency
   - Access: Hide data representation differences
   - Location: Hide where resources are located
   - Migration: Hide movement of resources
   - Relocation: Hide movement during access
   - Replication: Hide copies of resources
   - Concurrency: Hide shared access
   - Failure: Hide failures and recovery

3. Openness
   - Standard interfaces and protocols
   - Interoperability between systems
   - Portability of applications

4. Scalability
   - Handle growth in users
   - Handle growth in resources
   - Handle geographic expansion`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Challenges in Distributed Systems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Challenge</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Network Latency</td>
            <td className="p-3 border">Communication delays between nodes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Partial Failures</td>
            <td className="p-3 border">Some components may fail while others continue</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border">Maintaining data consistency across replicas</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Security</td>
            <td className="p-3 border">Protecting data in transit and at rest</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Coordination</td>
            <td className="p-3 border">Synchronizing actions across nodes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Distributed systems appear as a single system to users</li>
        <li>Components communicate through message passing over a network</li>
        <li>No global clock - time synchronization is challenging</li>
        <li>Independent failures require fault tolerance mechanisms</li>
        <li>Transparency hides the distributed nature from users</li>
        <li>Scalability and fault tolerance are key design goals</li>
      </ul>
    </div>
  </div>
);

export default DSDefinition;
