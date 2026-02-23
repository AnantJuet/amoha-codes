import React from "react";

const DSCharacteristics: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Characteristics of Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Distributed systems exhibit several key characteristics that distinguish them from
      centralized systems. Understanding these characteristics is essential for designing
      and implementing effective distributed applications.
    </p>

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
            <td className="p-3 border font-semibold">Decentralization</td>
            <td className="p-3 border">No single point of control or failure. The system operates through coordination among multiple independent nodes.</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Ability to add more nodes easily. The system can grow to handle increased workload by adding more machines.</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concurrency</td>
            <td className="p-3 border">Multiple processes can run simultaneously across different machines, enabling parallel processing.</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Transparency</td>
            <td className="p-3 border">Users perceive the system as a unified whole, hiding the distributed nature and complexity.</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fault Tolerance</td>
            <td className="p-3 border">The system continues operating even when individual components fail.</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Heterogeneity</td>
            <td className="p-3 border">Different hardware, operating systems, networks, and programming languages can coexist.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Transparency</h2>
    <p className="leading-relaxed">
      Transparency in distributed systems refers to hiding the complexities of the system's
      implementation details from users and applications. It ensures that users and applications
      interact with distributed resources in a uniform and predictable manner.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Transparency Type</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Location Transparency</td>
            <td className="p-3 border">Hides where resources are physically located. Users access resources without knowing their network locations.</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Access Transparency</td>
            <td className="p-3 border">Provides uniform access methods regardless of how resources are distributed across the network.</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concurrency Transparency</td>
            <td className="p-3 border">Hides complexities of concurrent access to shared resources from application developers.</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Replication Transparency</td>
            <td className="p-3 border">Hides the presence of replicas. Clients interact with replicated resources as if they were a single resource.</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failure Transparency</td>
            <td className="p-3 border">Hides failures and recovery processes from users, ensuring service availability.</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Performance Transparency</td>
            <td className="p-3 border">Ensures consistent performance levels despite variations in workload or network conditions.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Importance of Transparency</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Simplicity and Abstraction:</strong> Allows developers and users to interact with complex distributed systems using simplified interfaces</li>
      <li><strong>Consistency:</strong> Ensures consistent behavior and performance across different parts of the distributed system</li>
      <li><strong>Ease of Maintenance:</strong> Facilitates easier troubleshooting, debugging, and maintenance by abstracting away underlying complexities</li>
      <li><strong>Scalability:</strong> Supports scalability and flexibility by allowing distributed components to be added or modified without affecting overall system functionality</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">No Global Clock</h2>
    <p className="leading-relaxed">
      One of the fundamental characteristics of distributed systems is the absence of a global clock.
      Each node has its own local clock, which can drift over time. This creates challenges for:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>Event ordering across nodes</li>
      <li>Coordinating actions between processes</li>
      <li>Maintaining consistency in distributed databases</li>
      <li>Implementing distributed algorithms</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed System Characteristics:

+------------------+     +------------------+     +------------------+
|     Node A       |     |     Node B       |     |     Node C       |
|  +-----------+   |     |  +-----------+   |     |  +-----------+   |
|  | Local     |   |     |  | Local     |   |     |  | Local     |   |
|  | Clock: T1 |   |     |  | Clock: T2 |   |     |  | Clock: T3 |   |
|  +-----------+   |     |  +-----------+   |     |  +-----------+   |
|                  |     |                  |     |                  |
|  [Process P1]    |     |  [Process P2]    |     |  [Process P3]    |
+--------+---------+     +--------+---------+     +--------+---------+
         |                        |                        |
         |                        |                        |
         +------------------------+------------------------+
                                  |
                          [Network Layer]
                    (Message Passing Communication)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Distributed systems have no single point of control</li>
        <li>Multiple types of transparency hide complexity from users</li>
        <li>Absence of a global clock requires special synchronization mechanisms</li>
        <li>Heterogeneity allows different technologies to work together</li>
        <li>Fault tolerance is built into the system design</li>
        <li>Scalability enables handling increased workloads</li>
      </ul>
    </div>
  </div>
);

export default DSCharacteristics;
