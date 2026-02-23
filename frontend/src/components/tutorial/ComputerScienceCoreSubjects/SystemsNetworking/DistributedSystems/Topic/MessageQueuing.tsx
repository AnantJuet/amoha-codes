import React from "react";

const MessageQueuing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Message Queuing Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Message queuing provides asynchronous communication between distributed
      components. Messages are stored in queues until they can be processed,
      allowing for decoupling of sender and receiver, load leveling, and
      reliable delivery.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Message Queues Work</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Message Queue Architecture:

┌──────────┐       ┌─────────────────┐       ┌──────────┐
│ Producer │──────►│  MESSAGE QUEUE  │──────►│ Consumer │
│    A     │       │ ┌───┬───┬───┐   │       │    X     │
└──────────┘       │ │M1 │M2 │M3 │   │       └──────────┘
                   │ └───┴───┴───┘   │
┌──────────┐       │                 │       ┌──────────┐
│ Producer │──────►│   (FIFO Order)  │──────►│ Consumer │
│    B     │       │                 │       │    Y     │
└──────────┘       └─────────────────┘       └──────────┘

Characteristics:
- Persistent storage of messages
- Asynchronous communication
- Multiple producers and consumers
- Guaranteed delivery options`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Features</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Decoupling</h3>
        <p className="leading-relaxed">
          Producers and consumers don't need to be online simultaneously.
          They communicate through the queue without direct connection.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Persistence</h3>
        <p className="leading-relaxed">
          Messages are stored until processed. Survives crashes and restarts,
          ensuring no message loss.
        </p>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Load Leveling</h3>
        <p className="leading-relaxed">
          Queues absorb traffic spikes. Consumers process at their own pace,
          preventing overload.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Scalability</h3>
        <p className="leading-relaxed">
          Add more consumers to increase throughput. Easy horizontal scaling
          of processing capacity.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Messaging Patterns</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Pattern</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Point-to-Point</td>
            <td className="p-3 border">One message to one consumer</td>
            <td className="p-3 border">Task distribution</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Publish-Subscribe</td>
            <td className="p-3 border">One message to multiple subscribers</td>
            <td className="p-3 border">Event notification</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Request-Reply</td>
            <td className="p-3 border">Request with response queue</td>
            <td className="p-3 border">Async RPC</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Popular Message Queue Systems</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>RabbitMQ:</strong> AMQP-based, feature-rich, flexible routing</li>
      <li><strong>Apache Kafka:</strong> High-throughput, distributed log, stream processing</li>
      <li><strong>Amazon SQS:</strong> Fully managed, scalable, cloud-native</li>
      <li><strong>Redis:</strong> In-memory, fast, simple pub/sub</li>
      <li><strong>ActiveMQ:</strong> JMS-compliant, enterprise messaging</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Message queues enable asynchronous, decoupled communication</li>
        <li>Messages persist until successfully processed</li>
        <li>Queues help with load leveling and scalability</li>
        <li>Common patterns: point-to-point, pub-sub, request-reply</li>
        <li>Choose queue system based on throughput and reliability needs</li>
      </ul>
    </div>
  </div>
);

export default MessageQueuing;
