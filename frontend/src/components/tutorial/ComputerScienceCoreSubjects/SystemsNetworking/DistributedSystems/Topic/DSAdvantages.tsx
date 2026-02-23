import React from "react";

const DSAdvantages: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Advantages of Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Distributed systems offer numerous advantages over centralized systems, making them
      essential for modern applications that require high availability, scalability, and
      performance. Understanding these benefits helps in making informed architectural decisions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Advantages</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">1. Boosting Performance</h3>
        <p className="leading-relaxed">
          Distributed systems make things faster by dividing bigger tasks into small chunks
          and processing them simultaneously on different computers. It's like a group of
          people working together on a project. When searching for anything on the internet,
          the search engine distributes the work among several servers and retrieves results
          in seconds.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">2. Enhancing Reliability</h3>
        <p className="leading-relaxed">
          Distributed systems ensure reliability by minimizing the impact of individual
          computer failures. If one computer fails, other computers keep the system running
          smoothly. For example, in social media, if one server has issues, you can still
          access photos and posts because they switch servers quickly.
        </p>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">3. Scaling for the Future</h3>
        <p className="leading-relaxed">
          Distributed systems are experts at handling increased demands. They manage growing
          demands by incorporating more computers into the system. This horizontal scaling
          allows the system to handle more users and larger workloads seamlessly.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">4. Resourceful Utilization</h3>
        <p className="leading-relaxed">
          Instead of putting load on one computer, distributed systems distribute tasks
          among available resources. This ensures work is done efficiently by utilizing
          every available resource optimally.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Advantages</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantage</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Fault Tolerance</td>
            <td className="p-3 border">
              Failure of one node doesn't affect the entire system. Other computers continue
              the computation, making the system more reliable.
            </td>
            <td className="p-3 border">Cloud services remain available even during server failures</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cost-Effective</td>
            <td className="p-3 border">
              Builds upon existing hardware and has flexibility in utilizing commodity machines
              instead of expensive specialized processors.
            </td>
            <td className="p-3 border">Using multiple standard servers instead of supercomputers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Horizontal Scalability</td>
            <td className="p-3 border">
              Systems can expand by adding more machines to the network, handling greater
              workloads and processes efficiently.
            </td>
            <td className="p-3 border">Adding web servers during traffic spikes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Geographic Distribution</td>
            <td className="p-3 border">
              Distributed computing makes it possible to execute tasks at different points,
              eliminating latencies and serving users closer to their location.
            </td>
            <td className="p-3 border">CDNs serving content from nearby servers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Resource Sharing</td>
            <td className="p-3 border">
              Hardware, software, and data resources can be shared across the network,
              reducing costs and improving efficiency.
            </td>
            <td className="p-3 border">Shared databases and storage systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Additional Benefits</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Benefits of Distributed Systems:

1. Consistency and Transparency
   - Users interact with system as single entity
   - Complexity hidden behind simple interfaces
   - Uniform access across different locations

2. Fault Tolerance and Resilience
   - Automatic failover mechanisms
   - Data replication across nodes
   - Self-healing capabilities

3. Security and Data Integrity
   - Distributed backup and recovery
   - Encryption across network
   - Access control at multiple levels

4. Load Balancing
   - Even distribution of workload
   - Prevents bottlenecks
   - Optimizes resource utilization
   - Handles high volume of data efficiently`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison with Centralized Systems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Centralized</th>
            <th className="p-3 border">Distributed</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Single Point of Failure</td>
            <td className="p-3 border">Yes - entire system fails if server fails</td>
            <td className="p-3 border">No - other nodes continue operating</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Limited - vertical scaling only</td>
            <td className="p-3 border">Highly scalable - horizontal scaling</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Performance</td>
            <td className="p-3 border">Bottleneck at central server</td>
            <td className="p-3 border">Parallel processing across nodes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Geographic Reach</td>
            <td className="p-3 border">Limited to single location</td>
            <td className="p-3 border">Global distribution possible</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Distributed systems enhance performance through parallel processing</li>
        <li>Reliability is improved by eliminating single points of failure</li>
        <li>Scalability allows handling growing demands efficiently</li>
        <li>Resource utilization is optimized across multiple nodes</li>
        <li>Geographic distribution reduces latency for global users</li>
        <li>Cost-effectiveness through commodity hardware usage</li>
      </ul>
    </div>
  </div>
);

export default DSAdvantages;
