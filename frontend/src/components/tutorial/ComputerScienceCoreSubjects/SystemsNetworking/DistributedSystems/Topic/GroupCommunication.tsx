import React from "react";

const GroupCommunication: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Group Communication in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Group communication enables a single message to be sent to multiple
      recipients in a distributed system. It is essential for coordination,
      replication, and fault tolerance where multiple processes need to
      receive the same information.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Group Communication</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Broadcast</h3>
        <p className="leading-relaxed">
          Message sent to all processes in the system.
        </p>
        <p className="text-sm mt-2 italic">Use: Global announcements</p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Multicast</h3>
        <p className="leading-relaxed">
          Message sent to a specific group of processes.
        </p>
        <p className="text-sm mt-2 italic">Use: Group coordination</p>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Anycast</h3>
        <p className="leading-relaxed">
          Message sent to any one member of a group.
        </p>
        <p className="text-sm mt-2 italic">Use: Load balancing</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multicast Ordering Guarantees</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Ordering</th>
            <th className="p-3 border">Guarantee</th>
            <th className="p-3 border">Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Unordered</td>
            <td className="p-3 border">No ordering guarantee</td>
            <td className="p-3 border">Lowest</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">FIFO</td>
            <td className="p-3 border">Same sender messages in order</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Causal</td>
            <td className="p-3 border">Causally related messages in order</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Total</td>
            <td className="p-3 border">All see same global order</td>
            <td className="p-3 border">Highest</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Total Order Multicast</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Total Order Multicast Example:

Without Total Order:         With Total Order:
Process P1 sees: A, B        All processes see: A, B
Process P2 sees: B, A        All processes see: A, B
Process P3 sees: A, B        All processes see: A, B
     (Inconsistent!)              (Consistent!)

Total order ensures all processes deliver
multicast messages in the same order.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Database replication:</strong> Keep replicas consistent</li>
      <li><strong>Distributed locking:</strong> Coordinate access to resources</li>
      <li><strong>State machine replication:</strong> Fault-tolerant services</li>
      <li><strong>Cache invalidation:</strong> Update distributed caches</li>
      <li><strong>Cluster management:</strong> Membership and configuration</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Reliable Multicast</h2>

    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Properties</h3>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li><strong>Validity:</strong> If correct process multicasts m, it eventually delivers m</li>
        <li><strong>Agreement:</strong> If correct process delivers m, all correct processes deliver m</li>
        <li><strong>Integrity:</strong> Message delivered at most once, only if multicast by sender</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Group communication enables one-to-many messaging</li>
        <li>Ordering guarantees: unordered, FIFO, causal, total</li>
        <li>Total order ensures consistent state across replicas</li>
        <li>Essential for replication and distributed coordination</li>
        <li>Implementation complexity increases with stronger guarantees</li>
      </ul>
    </div>
  </div>
);

export default GroupCommunication;
